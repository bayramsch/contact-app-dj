from django.db import models

class Contact(models.Model):
    GENDER_CHOICES = [("F","Female"),("M","Male"),("O","Other")]
    username = models.CharField(max_length=30,unique=True)
    phoneNumber = models.CharField(max_length=15)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    
    def __str__(self):
        return f"{self.username}"
