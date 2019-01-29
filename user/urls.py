from django.conf.urls import url
from . import views
app_name = "user"
urlpatterns = [
    
    url(r'^accounts/', views.UserFormView.as_view(), name='accounts'),
    url(r'logout/', views.logOut , name='logout')

]