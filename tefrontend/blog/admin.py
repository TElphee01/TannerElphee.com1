from django.contrib import admin

from tefrontend.blog.models import BlogPost


@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ("title", "image", "text", "published", "pub_date")
