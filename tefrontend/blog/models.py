from datetime import datetime

from autoslug.fields import AutoSlugField
from ckeditor.fields import RichTextField
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


class BlogPostQueryset(models.QuerySet):
    def published(self):
        return self.filter(published=True)

    def draft(self):
        return self.filter(published=False)


class BlogPost(models.Model):
    title = models.CharField(_("title"), max_length=255)
    slug = AutoSlugField(_("slug"), populate_from="title", unique=True)
    image = models.ImageField(_("image"), blank=True, null=True, upload_to="blog")
    text = RichTextField(_("text"))
    description = models.TextField(_("description"), blank=True, null=True)
    published = models.BooleanField(_("published"), default=False)

    created = models.DateTimeField(_("created"), auto_now_add=True)
    modified = models.DateTimeField(_("modified"), auto_now=True)
    pub_date = models.DateTimeField(_("publish date"), blank=True, null=True)
    objects = BlogPostQueryset.as_manager()

    class Meta:
        verbose_name = _("blog post")
        verbose_name_plural = _("blog posts")
        ordering = ["pub_date"]

    def save(self, *args, **kwargs):
        """
        Set publish date to the date when post's published status is switched to True,
        reset the date if post is unpublished
        """
        if self.published and self.pub_date is None:
            self.pub_date = datetime.now()
        elif not self.published and self.pub_date is not None:
            self.pub_date = None
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("blog:detail", kwargs={"slug": self.slug})
