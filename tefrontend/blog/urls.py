from django.urls import path

from tefrontend.blog.views import BlogPostDetailView, BlogPostListView

app_name = "blog"
urlpatterns = [
    path("", view=BlogPostListView.as_view(), name="list"),
    path("<slug>", view=BlogPostDetailView.as_view(), name="detail"),
]
