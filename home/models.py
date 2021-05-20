from django.db import models

# Create your models here.
# Create your models here.
class Contact(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=40)
    email = models.EmailField(max_length=40)
    content = models.TextField(max_length=400)
    number  = models.CharField(max_length=10)

    def __str__(self):
        return (self.name)
        
# Create your models here.
class UserFeedback(models.Model):
    sno = models.AutoField(primary_key=True)
    name = models.CharField(max_length=250)
    email = models.CharField(max_length=50)
    msg = models.CharField(max_length=1000)
    

    def __str__(self):
        return "Feedback from  \t\t"+self.name+"  \t\t"+self.email