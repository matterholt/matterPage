---
layout: ../../../../layouts/writeups/MdWriteUpLayout.astro
title: "Alemba's Database Migrations"
pubDate: 2024-05-06

published: true
slug: "alemba database migrations"
tags: ["backend", "database", "migrations"]
---



## Introduction

Building an app a database changes are inevitable. Alembic is  light weight tool for database migrations mainly used with [SQLAlchemy](https://www.sqlalchemy.org) . What it basically does will apply git like tracking to the database. Alembic will give Django like database migrations to python applications and allow the dev to see changes made over time. The benefit of tracking the history of the database will allow teammates have the most current changes and if there is any issue the database can be rolled back the previous version. The feature of t 

## SET UP
- activate virtual environments
- pip install alembic or poetry add alembic
- alembic init alembic (generate a directory and an alembic.ini )
- let alembic know where and what engine is driving the database
- 

## Manual Mode

running though the process to understand what is going on

1. generate a file to implement changes to the database, ```bash alembic revision -m "create events table" ``` this will generate a file in the directory:  alembic/version.
2. define what are the changes are going to be in the upgrade function

	 ```python
def upgrade():
	op.create_table(
	"events",
	sa.Column("id", sa.Integer, primary_key=True),
	sa.Column("title",sa.String(), nullable=False),
	sa.Column("event_type", sa.String(), nullable=False)

)```
3. define how database should be rolled back to.
```python
def downgrade():
	op.drop_table(events)
```
4. Save and close
5. Execute the change need to database ```alembic upgrade head```. 
6. now can check if changes are made to the database: 
	1. sqlite3 ... (future post on how to check using sqlite3...link)

### Other help Commands
```alembic current``` -> check current database state
```alembic history``` -> check history of database
```alembic show 'rev-hash'``` -> more detail on alembic revision
```alembic downgrade -1``` -> down grade to previous db revision
```alembic updgrade +1``` -> down grade to next db revision
```alembic downgrade base``` -> down grade to initial db

## Auto Generation with SQLAlchemy

Setting up the sqlalchemy models file, fist is a simple stand alone. to get the concepts down 

1. From the sqlalchemy models file, the need to import 
```python
sqlalchemy.ext.declarative import declarative_base
``` 
2.  Then declare a variable called Base and a metadata equal to Base.meta
```python
Base = declarative_base()

metadata = Base.metadata
```

Letting alembic know to check and compare the models metadata. which is the way alembic know the changes made to the database modles

1. open env.py to make a couple changes 
2.  import the base class in the model
3. then change the target_meta
```python 
target_metadata = Base.metadata
```
4. then save it

Now in the shell Run ```alembic revision --autogenerate -m "make something happen"```.
once executed then in the directory *alembic/version/{generated file}*. That file can be open up and the upgrade/downgrade function should have the model sqlalchemy model table.
If all looks good and any changes are edited,  then run ```alembic upgrade head```

to confirm
```bash
sqlite3 something.db
 > .tables
 > .schema events

```
 
## Resources

https://www.kimsereylam.com/sqlalchemy/2019/10/18/get-started-with-alembic.html

https://www.youtube.com/watch?v=i9RX03zFDHU

https://alembic.sqlalchemy.org/en/latest/index.html