from django.urls import path
from . import views

urlpatterns = [
    path('api_v0/workslist/', views.WorkListCreate.as_view()),
    path('<str:p>', views.trash),
    path('api_v0/works/', views.all_works ),
    path('api_v0/works/recent', views.recent_works ),
    path('api_v0/skills/', views.all_skills ),
    path('api_v0/work/details/<str:pk>', views.work_details),
    path('api_v0/work/images/<str:pk>', views.work_images),
    path('api_v0/images', views.all_images ), 
]