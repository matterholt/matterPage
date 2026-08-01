---
layout: ../../../../layouts/writeups/MdWriteUpLayout.astro
title: "Pydantic the validation library for Python"
pubDate: 2024-06-08

published: false
slug: "pydantic project"
tags: ["validation", "json"]
---
## Introduction

What, we go here... Python's standard library has the ability to add what they call "type-hints" and "variable annotations".  This. doesn't mean that python is a strongly type language meaning they are not required. However if the are in place could provide some safety and avoid bugs. Lets say we need some more power, like JSON schema validation or  data parsing and Error handling. Then reaching for a tool like Pydantic is needed. 

Now what does Pydantic look like, before that lest get our venv set up for some hacking

## Set up
```bash

python3 -m venv .venv # on [-1] arg what ever prefired name for enviroment

source .venv/bin/activate

pip install pydantic

pip install email-validator # need this later

# pip install pydantic[email], # atternative

```
## Creating Schema/ Model

The structure is going to be based on a event, there are 2 models that we are going to dig into. First and most obvious is the Event model, and it isn't a party without guess, so there will be an invite model. 

There isn't anything to abnormal: str, int and bools. There is a few interesting ones,  Events.social_status and Invites.email_contact. The former is when a value will options, there be a need to import Enum from the standard lib. The latter is for email validation, and with the hence the email-validator pip install. Oh another would be the datetime, I like the fact you just import and make it the type. 

```python
# main.py
from datetime import datetime
from enum import Enum
from pydantic import BaseModel, EmailStr,

    class SocialStatus(str,Enum):
        public = "public"
        private = "private"

    class Events (BaseModel):
		id : int
        title: str
        date_time_held: datetime 
        description :str
        social_status :SocialStatus

	class Invites (BaseModel):
		id : int
		is_attending : bool = false
		number_of_attending : int
		email_contact : EmailStr



```

### Validating data

There is a few way that we are already doing some validation, first we got the types of values that the model will except. There are the email validation which we able to import a library to make sure it is a proper email format. Then there is the option enum, which will only except the defined values. 

but if there is some custom value that we maintain within a scope pydantic would let us create a custom validation by using a decorator. That would look like something below, for simplicity and within the scope of our data model. Let's say there need to set some requirement on how many 

```python
# main.py
from pydantic import BaseModel, EmailStr, field_validator, ValidationErrorq

...



    class Invites (BaseModel):
        id : int
        is_attending : bool = False
        number_of_attending : int
        email_contact : EmailStr

        @field_validator('number_of_attending')
        @classmethod
        def value_check(cls, input_value):
            if input_value > 10:
                raise ValueError(f"{input_value} is too many ")
            return input_value

    try:
        temp = Invites(id=12, number_of_attending = 12, is_attending=False, email_contact="123exampl.com")
        print(temp.model_dump())
    except ValidationError as e:
        print(e)

		

```

## Pattern to document API

FastAPI has been built in Pydantic, so getting it piped in isn't going to be a challenge. We are going to want to the data to be sanitized and correct . When we take account of a basic CRUD app, that data  could be a bit different. Such as what the user sends a request and the response that gets return. 

```python


class EventsBase (BaseModel):
	title: str
	date_time_held: datetime 
	description :str
	social_status : SocialStatus

class EventsCreate (EventsBase):
	id : int

class Events (EventsBase):
	id : int


```

Above we are defining some classes for the events schema. so from the front end the client would send a request to post a new event and would resemble the EventBase class there could be some manipulations or in this case generate an ID then the response would be like the EventsCreate. This is a neat Idea on keeping code dry by using inheritance. 


## Conclusion

Pydantic is powerful tool and should be used to keep data in check and proper. There is a lot more that I need to explore and learn. but this should be the general idea of how to use it. I primary use it with fastAPI,  I can see implement  it into other areas.



## Resources

https://docs.pydantic.dev/latest/

https://peps.python.org/pep-0484/

https://betterdatascience.com/python-statically-typed/

 [ArjanCodes, Mastering API Testing with FastAPI: Databases, Dependencies, and More!](https://www.youtube.com/watch?v=9gC3Ot0LoUQ)



## Notes

 Arbitrary class instances[¶](https://docs.pydantic.dev/latest/concepts/models/#arbitrary-class-instances "Permanent link")  => (Formerly known as "ORM Mode"/`from_orm`.)
	*'Pydantic models can also be created from arbitrary class instances by reading the instance attributes corresponding to the model field names. One common application of this functionality is integration with object-relational mappings (ORMs)'* Pydantic