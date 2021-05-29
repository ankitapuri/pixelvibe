from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
# Register your models here.
# Register your models here.
# # from home.models import 
from home.models import Contact,Gallery
admin.site.register(Gallery)

@admin.register(Contact)
class FeedBackAdmin(ImportExportModelAdmin):
    pass