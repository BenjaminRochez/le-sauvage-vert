from django.db import models

# Create your models here.

class Picture(models.Model):
    title = models.CharField(max_length=250)
    pub_date = models.DateTimeField()
    image = models.ImageField(upload_to='media/')
    body = models.TextField()
    category = models.ForeignKey('Category', on_delete=models.CASCADE)

    def __str__(self):
        category = str(self.category)
        title = str(self.title)
        return title+ ' (' + category + ')'

class Category(models.Model):
    category_title = models.CharField(max_length=250)

    def __str__(self):
        return self.category_title
