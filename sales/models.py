from django.db import models
from products.models import Product

# Create your models here.
class Position(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price = models.FloatField(blank=True)
    created = models.DateTimeField(blank=True)

class Sale(models.Model):
    pass

class CSV(models.Model):
    pass