# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from .models import contact 
# Register your models here.



# admin.site.register(comment)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'text',)

admin.site.register(contact, MessageAdmin)
