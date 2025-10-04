from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import viewsets, generics, permissions, filters, status
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model
from .serializers import CommentSerializer, CommentLikeSerializer
from .models import Comment, CommentLike

# Create your views here.
class CommentView(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        post_id = self.request.query_params.get("post_id")
        if post_id:
            return Comment.objects.filter(post_id=post_id)
        return Comment.objects.none()  # don’t return all Comment by default


class CommentLikeToggle(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, comment_id):
        try:
            comment = Comment.objects.get(id=comment_id)
        except Comment.DoesNotExist:
            return Response({"error": "Comment not found"}, status=status.HTTP_404_NOT_FOUND)
    
        like, created = CommentLike.objects.get_or_create(user=request.user, comment=comment)
        
        if not created:
            like.delete()
            return Response({"comment_liked": False, "comment_likes_count": comment.likes.count()})
        
        return Response({"comment_liked": True, "comment_likes_count": comment.likes.count()})