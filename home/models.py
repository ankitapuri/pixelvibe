from django.db import models

# Create your models here.
# Create your models here.
class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    firstname = models.CharField(max_length=40)
    lastname = models.CharField(max_length=40)
    email = models.EmailField(max_length=40)
    content = models.TextField(max_length=400)
    number  = models.CharField(max_length=10)

    def __str__(self):
        return (self.firstname)


        
# # Create your models here.
class Gallery(models.Model):
    sno = models.AutoField(primary_key=True)
    name = models.CharField(max_length=250)
    img = models.ImageField(upload_to="Arts")
    

    def __str__(self):
        return "Art from  \t\t"+self.name