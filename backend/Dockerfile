FROM python:3.9
ENV PYTHONUNBUFFERED=1
WORKDIR /app/backend
COPY requirements.txt /app/backend
RUN pip install --upgrade pip && \
    pip install -r requirements.txt && \
    pip install mysqlclient
COPY . /app/backend
EXPOSE 8000