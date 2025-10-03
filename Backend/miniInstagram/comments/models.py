from django.db import models
from django.conf import settings
from posts.models import Post

# Create your models here.
class Comments(models.Model):
    text = models.TextField(max_length=200, blank=False)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='user')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='post')
    created_at = models.DateTimeField(auto_now_add=True)
    edited_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.text[:30]
    
class CommentLike(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comments, on_delete=models.CASCADE, related_name='comment_name')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'comment')
    
    def __str__(self):
        return f"{self.user} liked comment {self.comment}"
