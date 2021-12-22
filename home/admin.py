from django.contrib import admin

from import_export.admin import ImportExportModelAdmin
from home.models import Contact,Gallery,ImageUpload
admin.site.register(Gallery)
admin.site.register(ImageUpload)
@admin.register(Contact)
class ContactAdmin(ImportExportModelAdmin):
    pass
