from rest_framework import viewsets
from .models import Brand,Tobacco 
from .serializers import BrandSerializer,TobaccoSerializer

class BrandViewSet(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer

class TobaccoViewSet(viewsets.ModelViewSet):
    queryset = Tobacco.objects.all()
    serializer_class = TobaccoSerializer