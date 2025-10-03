from django.urls import path
from .views import RegisterView, UserProfileView, UserSearchView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("register/", RegisterView.as_view(), name="user-register"),


    path('token/', TokenObtainPairView.as_view(), name='token_obtain_view'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token-refresh'),

    #Profile
    path("profile/", UserProfileView.as_view(), name="user-profile"),
    path("search/", UserSearchView.as_view(), name="user-search"),  # optional
]
