from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
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



class PostLikeToggle(APIView):
    """
    POST /posts/<post_id>/like/
    Toggles like: if already liked, unlike; else, like.
    Returns current like status and likes_count
    """
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, post_id):
        try:
            post = Post.objects.get(id=post_id)
        except Post.DoesNotExist:
            return Response({"error": "Post not found"}, status=404)

        like, created = PostLike.objects.get_or_create(user=request.user, post=post)

        if not created:
            # Already liked, so unlike
            like.delete()
            return Response({"liked": False, "likes_count": post.likes.count()})