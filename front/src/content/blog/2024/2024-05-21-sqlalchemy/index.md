---
layout: ../../../../layouts/writeups/MdWriteUpLayout.astro
title: "Creating DB with SQLAlchemy"
pubDate: 2024-06-21

published: true
slug: "Alembic database migrations"
tags: ["backend", "database", "migrations", "ORM"]
---
[[Event Model DB.canvas|Event DB]]
## Introduction

 SQLAlchemy github's first release was June 2016. as of 2024 is still running strong and is 
Python's the top contender  for ORMs. There is a lot in the library and can be implemented in to any work flow. Now there are some other Python ORM that I'm interested in like Pony ORM, fastapi has a library on coming out too. But since SQLAlchemy is top dog and the likely hood of working in a code base is high. I'm going to figure it out. 

###  What is ORM

More times than not there should be a piece of tech that can sit between your app and database. The tech is call Object-Relational Mapping or ORM. One of the biggest benefits is it would allow one to be able switch between relational database. So scaling up in a sqlite database then when the limits are hit switching over to something like PostgreSQL , could be  a fairly small re-wite.  Another benefit is a that we as developer wouldn't need to write SQL quarries and provide protection for SQL injection attack. 


## SQLAlchemy

- there are 2 path that one can go down, Core and ORM users. Primary focused implementing in a fastapi app.
- there are changes on how create models between SQLAlchemy 1.4 to 2.0
-  severaly mapping styles:  declarative ,  imperative and hybrid
- fastapi docs uses a Hybrid https://docs.sqlalchemy.org/en/20/orm/declarative_tables.html#orm-imperative-table-configuration

## Requirements

Python == 3.12
SQLAlchemy == 2.0.30
fastapi == 0.111.0

## TODOs

Going to go over working with just the tech and the other implementing it into a backend

2. Installing
3. connecting to database
4. creating tables


## Creating / Connecting point to Database
### Engine

Letting the program/backend know what and how we need to process our ORM models. Initializing the engine is where the communication start with our program to the database.
	The engine consist of 3 parts :
		1. what client of relational database our app should work with. 
		2. third party driver that lets AQLAlchemy communicate with the database
		3. the location of the database

```python
from sqlalchemy import create_engine

DATABASE_URL = "sqlite+pysqlite:///:memory:"
# is needed for sqlite?? connect_args={"check_same_thread": False}

engine = create_engine(DATABASE_URL,connect_args={"check_same_thread": False}, echo=True)
```

### Session

The [`Session`](https://docs.sqlalchemy.org/en/20/orm/session_api.html#sqlalchemy.orm.Session "sqlalchemy.orm.Session") establishes all conversations with the database and represents a “holding zone” for all the objects which you’ve loaded or associated with it during its lifespan. [--SQLAchemy](https://docs.sqlalchemy.org/en/20/orm/session_basics.html#what-does-the-session-do)
```python
from sqlalchemy.orm import sessionmaker
# bind engine from above bit 

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
```


### DB Models

First need to create a Base variable that evaluates to a function and return a class. The models will inherit this Base class , which will aid in creating the database models [declarative_base](https://docs.sqlalchemy.org/en/20/orm/mapping_api.html#sqlalchemy.orm.declarative_base)
This bit is declared  in the database.py file. Should be able to easily import into the models 

```python
from sqlalchemy.orm import declarative_base

Base = declarative_base()
```



models.py, this code would generate 2 tables one called "users" the other "events". In short the tables are a class with class variables declaring what would be the column name and the value could be consider as a type and attributes to the column. 

	!! If first time in working with tables just remove the relationship in fact just work with the User table get familiar with the flow and make sure that it is doing what you are thinking. It will reduce issue if something isn't quite right

```python

import enum
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String , Date
from sqlalchemy.orm import relationship

# The Base varaible from above.
from .database import Base


class User (Base):
	__tablesname__ = "users"

	id = Column(Integer, primary_key=True) 
	email = Column(String, unique=True, index=True) 

	owner = relationship("Event", back_populates="organizer")

# options for models
class SocialStatus (enum.Enum):
    public = "public"
    private = "private"


class Event (Base):
	__tablename__  = "events"

	id = Column(Integer, primary_key=True)
	title = Column(String, index=True)
	date_of = Column(Date)
	social_status = Column(Enum(SocialStatus))

	organizer = relationship("User", back_populates = "owner")
	
```

**BONUS1:**  User.owner and Event.organizer are a one to many relationship.
**BONUS2:**  Event.social_status , I want only 2 options for the value, to do this would need to create a class that is a Enum. I'm total fluent in using enums, I plan on digging deeper once I have some free time.
**BONUS3:** Alembic is a python tool that will be important to track changes a database   [add link](...)


##  Entry point for api

Review, There is the initialization of engine, sessions and declarative base class for models. Then there are a couple of tables or one. Lets get a database created. Again this write up is geared toward adding the database to a Fastapi app. With that context, this write up will create the entry point in the main.py file. which is the file that ran to start the app.  


```python
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine) app = FastAPI() 


def get_db(): db = SessionLocal() 
	try:
		yield db 
	finally:
		db.close()


```

the get_db function is called any time the app would need to access it. return the db that is defined in the engine. Which in turn will get passed to the functions to perform CURD actions on models. That is for next time. 



## Resources

- https://www.sqlalchemy.org/
- https://fastapi.tiangolo.com/tutorial/sql-databases/
- https://pythonmania.org/how-to-use-sqlalchemy-an-in-depth-guide-with-examples/