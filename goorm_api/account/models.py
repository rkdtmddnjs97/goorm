from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    ADMIN = "관리자"
    NON_MEMBER = "비회원"
    MEMBER = "회원"
    STATUS = (
        (ADMIN, "관리자"),
        (NON_MEMBER, "비회원"),
        (MEMBER, "회원"),
    )
    user_type = models.CharField(max_length=3, choices=STATUS, default=NON_MEMBER)
