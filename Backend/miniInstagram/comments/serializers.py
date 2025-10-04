from rest_framework import serializers
from .models import Comment, CommentLike

class CommentSerializer(serializers.ModelSerializer):
    comment_likes_count = serializers.IntegerField(source='likes.count', read_only=True)
    username = serializers.CharField(source='user.username', read_only=True)  # helpful for frontend
    user_has_liked = serializers.SerializerMethodField()  # show if current user liked
    
    class Meta:
        model = Comment
        fields = ['id', 'text', 'user', 'username', 'post', 'comment_likes_count', 
                  'user_has_liked', 'created_at', 'updated_at']
        read_only_fields = ['user', 'created_at', 'updated_at']  # user should be read-only
    
    def get_user_has_liked(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return CommentLike.objects.filter(user=request.user, comment=obj).exists()
        return False

class CommentLikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentLike
        fields = '__all__'
        read_only_fields = ['created_at']
    