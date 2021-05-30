from django.contrib import admin

from import_export.admin import ImportExportModelAdmin
from home.models import Contact,Gallery
admin.site.register(Gallery)

@admin.register(Contact)
class ContactAdmin(ImportExportModelAdmin):
    pass