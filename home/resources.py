from import_export import resources
from home.models import Contact

class FeedBackResource(resources.ModelResource):
    class Meta:
        model = Contact