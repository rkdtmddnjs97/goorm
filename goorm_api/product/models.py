from django.db import models
from account.models import User

class Brand(models.Model):
    name = models.CharField(max_length=100)
    # img = DefaultStaticImageField(upload_to='brand_img/', blank=True, default_image_path='images/default_goorm_img.png')

    def __str__(self):
        return self.name

class Tobacco(models.Model):
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, related_name='tobacco')
    name = models.CharField(max_length=50)
    price = models.IntegerField(blank=True)
    # rel_date = models.CharField(max_length=100)
    nicotine =  models.FloatField()
    tar = models.FloatField()
    throat_hit = models.CharField(max_length=10)
    # score = models.FloatField(default=0)
    isMenthol = models.BooleanField(default = False)
    # img = DefaultStaticImageField(upload_to='goorm_img/', blank=True, default_image_path='images/default_goorm_img.png')
    
    def __str__(self):
        return self.name

class Review(models.Model) :
    tobacco = models.ForeignKey(Tobacco, on_delete = models.CASCADE, related_name= 'comments')
    writer = models.ForeignKey(User, on_delete = models.CASCADE, related_name= 'writer')
    pub_date = models.DateTimeField(auto_now_add= True)
    contents = models.TextField()
    # score = models.PositiveIntegerField(default=3)


    def __str__(self) :
        return self.writer.username