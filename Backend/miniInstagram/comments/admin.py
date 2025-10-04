from django.contrib import admin
from .models import Comment, CommentLike
# Register your models here.
@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Comment._meta.fields]

@admin.register(CommentLike)
class CommentLikeAdmin(admin.ModelAdmin):
    list_display = [field.name for field in CommentLike._meta.fields]