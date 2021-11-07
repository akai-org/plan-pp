# Plan zajec

## Frontend
- Node 14.18.1
- ReactJS >=17.0.2

## Backend
- Python 3.9
- Django >= 3.0 , < 4.0
- Django rest framework ...

## Clone repository
### Docker
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
### BACKEND

To execute Django commands inside your container use comand:
```console
docker exec -it backend-planpp python manage.py <command>
```
For example: to create Django super user type:
```console
docker exec -it backend-planpp python manage.py createsuperuser
```



prowadzi @mima-design

@monsiw
@hoaqm
@siemieniuk
@wojtop
