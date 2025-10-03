from rest_framework.routers import DefaultRouter
from .views import PostView, PostLikeToggle
from django.urls import path, include

router = DefaultRouter()
router.register(r'posts', PostView, basename='posts')

urlpatterns = [
    path('', include(router.urls)),
    path('<int:post_id>/like/', PostLikeToggle.as_view(), name='post-like-toggle')
]