from django.db import models

# Create your models here.
class Category(models.Model):
    id = models.IntegerField(),
    name = models.CharField(max_length=255)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Product(models.Model):
    name = models.CharField(max_length=255),
    price = models.FloatField(default=1000),
    description = models.TextField(),
    count = models.IntegerField(),
    is_active = models.BooleanField(),
    cat_id = models.IntegerField()

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
        }

