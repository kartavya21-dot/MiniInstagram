from rest_framework.routers import DefaultRouter
from .views import CommentView, CommentLikeToggle
from django.urls import path, include

router = DefaultRouter()
router.register(r'comment', CommentView, basename='comment')

urlpatterns = [
    path('', include(router.urls)),
    path('<int:comment_id>/comment_like/', CommentLikeToggle.as_view(), name='comment_like')
]
