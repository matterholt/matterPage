---
title: update a package spend the day fixing
date: 2020-11-06
published: true
slug: Updating the error pragma and the runtime auto, Emotion.js and React.js
---
## JSX Pragma

I have come across an issue when I was updating an app. When starting up the app up the browser displayed this. 

```jsx
./src/App.js
SyntaxError: /Users/Projects/temp/workHourLog/client/src/App.js: pragma and pragmaFrag cannot be set when runtime is automatic.
> 1 | import React, { useState, useEffect } from "react";
    | ^
  2 | /** @jsx jsx */
  3 | import { css, jsx } from "@emotion/core";
  4 | import "./App.css";
```

What is going on? The error is on the first line, leaving me a bit confused. So remove it that line then the next line error out. So I ended up removing all the styles and getting it to compile and but no styles are applied. I was using emotion.js and to work get it working requires the code below.

```jsx
// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

 import { css, jsx } from "@emotion/core";
```

Further research/reading to the doc. The comment is for the css props and there is actually 2 ways to get it to work in React, one is above and the other is a Babel preset. It is recommended to use the Babel preset unless you are using Create react app, which does not allow (easily) to modify Babel. So that leaves what is called 'JSX pragma', and the pragma is what the issue with code. From the the emotion Docs 

> If you are using a zero-config tool with automatic detection of which runtime (classic vs. automatic) should be used and you are already using a React version that has the new JSX runtimes (hence runtime: 'automatic' being configured automatically for you) such as Create React App 4 then /** @jsx jsx */ pragma might not work and you should use /*@jsxImportSource @emotion/core */ instead. Keep in mind that this also requires a compatible version of @emotion/core which is ^10.1.0.

Now I have a path to travel follow that may help me get styles on my app. First I will update the emotion/core to 10.1.0, my package has 10.0.35.  To update a specific package to the latest version, then the code below will do the trick

```jsx
npm install @emotion/core@latest 
```

Now, this won't get things completely working but all we need to do is replace the comment at the top on every page that has styles then you should be good to go.

```jsx
import React, { useState, useEffect } from "react";
/** @jsxImportSource @emotion/core */
import { css, jsx } from "@emotion/core";'

// previously 
import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
```

### BONUS:

I came across a plugin for emotion.js users that would minification and optimization of emotion styles.

`babel-plugin-emotion` is highly recommended, but not required in version 8 and
above of `emotion`.

```jsx
npm install --save-dev babel-plugin-emotion
```

### Doc Links

[https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)

[https://emotion.sh/docs/css-prop#jsx-pragma](https://emotion.sh/docs/css-prop#jsx-pragma)