from django.conf.urls import url
from . import views
app_name = "user"
urlpatterns = [
    
    url(r'^accounts/login/', views.UserLoginFormView.as_view(), name='accounts'),
    url(r'^accounts/signup/', views.UserSignFormView.as_view(), name='accounts'),

    url(r'accounts/logout/', views.logOut , name='logout')

]