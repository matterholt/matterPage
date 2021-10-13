---
title: Passwordless authentication with Magic Link.
date: 2020-08-20
published: true
slug: Allowing user to create account quickly and without worries
---

After getting the signed up with Magic.link and the keys tucked away in the env it is time to start putting the code to work and getting the app. I want to use NEXT.js but the process should be similar across all frameworks. (not evaluated)

## Application layout structure

Get an image of how the web app is structured. Here is a ruff structure.

- Pages consist landing page, Login, Dashboard, and Profile
- Dashboard and Profile cannot be accessed. without authenticated User
- as soon as user is authenticated the user will be routed to the dashboard.
- user has access to Profile page as long as they have not logged out or cookies have expired.
- Login is the gate way to the magic link and where the much of the transactions begins
- Save the session of the user in a cookie
- Then finally a logout and delete the session cookie

So initially we will need an account for Magic link so sign up is fairly simple. All you need is an email account. For this project, I will use "npx create-next-app", but any other framework should work. and would need to install Magic "npm install --save magic-sdk" which will help handle the "magic" on the client-side. There is a need to handle the server-side so installing "npm install --save @magic-sdk/admin" will help tie everything together

- Starting with the login page, Magic link only requires an email address. Magic Link will take care of the rest. so a form element with an email type input and a way to handleSubmit function. Here is where the bulk of the work is being done.

```jsx
//   ./pages/login.js
const handleSubmit = async (event) => {
  event.preventDefault();
  const body = {
    email: event.currentTarget.email.value,
  };
  ///.... more code to follow
};
```

- Starting with the login page, Magic link only requires an email address. Magic Link will take care of the rest. so a form element with an email type input and a way to handleSubmit function. Here is where the bulk of the work is being done.

```jsx
//   ./pages/login.js
const handleSubmit = async (event) => {
  event.preventDefault();
  const body = {
    email: event.currentTarget.email.value,
  };
  ///.... more code to follow
};
```

- First is getting the an User Authenticated. to do that the email input value will need to be sent to Magic which will use that email value and send a validating link to the user. The first bit is creating a Magic instance. This requires a public publish key or api Key which is supplied on the Magic Link dashboard and will be copied in to the .env. To have the user authorized a Decentralized ID token is required.

```jsx
// inside the handleSubmit function
try {
      const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY);
      const DID_Token = await magic.auth.loginWithMagicLink({
        email: body.email,
      });
```

- The DID_token or Decentralized ID token is the link that allows the user to access the application. When executed the promise will resolve when the user has open the link in the email. The resolved value is a Decentralized ID token with a default 15-minute lifespan.
- For user authorization, the code is basically it. It doesn't do much but we have a bit of info that is tied to the user and now we can send a request to the back end to get user data. which results in the code below

```jsx
// inside the handleSubmit function
// inside the try statement

const res = await fetch('/api/login', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + DID_Token,
  },
  body: JSON.stringify(body),
});
```

For the front side there is a need to handle error to which are listed below.

```jsx
try {
  await m.auth.loginWithMagicLink({ email: 'hello@example.com', showUI: false });
} catch(err) {
  if (err instanceof RPCError) {
    switch(err.code) {
      case RPCErrorCode.MagicLinkFailedVerification:
      case RPCErrorCode.MagicLinkExpired:
      case RPCErrorCode.MagicLinkRateLimited:
      case RPCErrorCode.UserAlreadyLoggedIn:
        // Handle errors accordingly :)
        break;
    }
  }
```
