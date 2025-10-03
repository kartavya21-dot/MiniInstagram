from django.contrib import admin
from .models import Post, PostLike
# Register your models here.
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Post._meta.get_fields()]

@admin.register(PostLike)
class PostLikeAdmin(admin.ModelAdmin):
    list_display = [field.name for field in PostLike._meta.get_fields()]