# Plan zajec install

## Clone repository
## Docker
[Download Docker](https://www.docker.com/get-started)

Build containers by typing in console:
```console
docker-compose build
```

To run our app type:
```console
docker-compose up
```

Sometimes you will need to make migrations in Django server.
In order to do that, your Docker container must be enabled. After that type:
```console
docker exec -it backend-planpp python manage.py makemigrations
docker exec -it backend-planpp python manage.py migrate
```

DB user: admin
DB user pass: ppadmin21


prowadzi @mima-design

@monsiw
@hoaqm
@siemieniuk
@wojtop
