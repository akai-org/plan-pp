# Plan zajec

## Frontend
- Node 14.18.1
- ReactJS >=17.0.2

## Backend
- Node 14.18.1
- Express 4.18.1

## Clone repository
### Docker
[Download Docker](https://www.docker.com/get-started)

Before building containers, create a copy of ".env.sample" with name ".env".

Change entries in ``.env``: POSTGRES_USER (name of Postres superuser), POSTGRES_PASSWORD (password to user), 
POSTGRES_DB (name of schema) to the names you want.

Build containers by typing in console:
```console
docker-compose build
```

To run our app type:
```console
docker-compose up
```

React application works on port 3000.

---

prowadzi @mima-design

@monsiw
@hoaqm
@siemieniuk
@wojtop
