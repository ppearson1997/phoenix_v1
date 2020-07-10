from django.db import models


class Client(models.Model):
    fullname = models.CharField("fullname", max_length=255)
    password = models.CharField("password", max_length=255)
    email = models.EmailField("email", max_length=255)

    def __str__(self):
        return self.fullname
