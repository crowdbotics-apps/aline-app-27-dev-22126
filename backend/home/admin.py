from django.contrib import admin
from .models import NewModel, Product

admin.site.register(Product)
admin.site.register(NewModel)

# Register your models here.
