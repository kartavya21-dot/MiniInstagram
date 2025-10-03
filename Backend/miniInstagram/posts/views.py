from django.shortcuts import render
from rest_framework import viewsets, generics, permissions, filters
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model
from .serializers import PostSerializer, PostLikeSerializer
from .models import Post, PostLike
# Create your views here.

class PostView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]
    queryset = Post.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        """
        Optionally filter posts by:
        - user ID: ?user=<user_id>
        - search caption: ?search=<keyword>
        """
        queryset = Post.objects.all()
        user_id = self.request.query_params.get("user")
        search = self.request.query_params.get("search")

        if user_id:
            queryset = queryset.filter(user_id=user_id)

        if search:
            queryset = queryset.filter(caption__icontains=search)

        # Optional: order by newest first
        queryset = queryset.order_by("-created_at")

        return queryset



class PostLikeView(viewsets.ModelViewSet):
    serializer_class = PostLikeSerializer
    permission_classes = [permissions.IsAuthenticated]
    
    def get_queryset(self):
        return PostLike.objects.filter(post=self.request.post)