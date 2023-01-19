from django.urls import path
from base.views import user_views as views


urlpatterns =[
    # path('',views.getRoutes,name="routes"),
    path('profile/',views.getUserProfile,name="user-profile"),
    path('',views.getUsers,name="user"),
    path('profile/update/',views.updateUserProfile,name="user-profile-update"),    
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', views.registerUser,name ='register'),
]