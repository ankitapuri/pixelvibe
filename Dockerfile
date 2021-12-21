FROM python:3.9-slim-bullseye

WORKDIR /pixelvibe

RUN python3 -m venv env

COPY . .
 
RUN chmod +x entrypoint.sh && \
    . env/bin/activate && \
    pip install -r requirements.txt && \
    python manage.py makemigrations && \
    python manage.py migrate    


EXPOSE 8000

ENTRYPOINT ["./entrypoint.sh"]

