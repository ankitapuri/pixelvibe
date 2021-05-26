from django.contrib import admin

# Register your models here.
# # from home.models import 
from home.models import Contact,Gallery
admin.site.register((Contact,Gallery))