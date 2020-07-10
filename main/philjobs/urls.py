from django.conf.urls import url
from philjobs import views

urlpatterns = [
    url(r'^api/$', views.client_list),
    url(r'^api/login/$', views.client_list),
    url(r'^api/employer/$', views.client_list),
    url(r'^api/employer/dashboard/$', views.client_list),
    url(r'^api/employer/dashboard/post-a-job$', views.client_list),
    url(r'^api/jobseeker/dashboard/staff$', views.client_list),
    url(r'^api/jobseeker/dashboard/payroll$', views.client_list),
    url(r'^api/signup/$', views.client_list),
    url(r'^api/signup/$(?P<pk>[0-9]+)$', views.client_detail),
]