from rest_framework import serializers
from .models import Brand,Tobacco 

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'

class TobaccoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tobacco
        fields = '__all__'