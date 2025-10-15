from rest_framework import serializers
from .models import Post, PostLike

class PostSerializer(serializers.ModelSerializer):
    likes_count = serializers.IntegerField(source='likes.count', read_only=True)
    username = serializers.CharField(source='user.username', read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'user', 'username', 'caption', 'image', 'created_at', 'updated_at', 'likes_count']
        read_only_fields = ['created_at', 'updated_at', 'username'] #id is implicitely read only: django magic
    
class PostLikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostLike
        fields = ['id', 'user', 'post', 'created_at']
        read_only_fields = ['user', 'created_at']