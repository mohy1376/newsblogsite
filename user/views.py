# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect
from django.core.urlresolvers import resolve
from django.contrib.auth import authenticate, login
from django.views.generic import View
from django.http import HttpResponseRedirect
from .forms import UserForm , LoginUserForm
from django.contrib.auth.models import User
from django.contrib.auth import logout

# Create your views here.
class UserLoginFormView(View):
    form_class = LoginUserForm
    template_name = 'user/login.html'


    def get(self, request):
        form = self.form_class(None)
        username = request.user.username
        try:
            match = User.objects.get(username = username)
            return HttpResponseRedirect("/")
                
        except User.DoesNotExist:
            return render(request, self.template_name, {'form': form})
        else :
            return render(request, self.template_name, {'form': form})
        # return render(request, self.template_name, {'form': form})

    def post(self, request):
        form = self.form_class(request.POST)

        # login part

        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                current_url = resolve(request.path_info).url_name
                return HttpResponseRedirect("/")

        return render(request, self.template_name, {'form': form})

class UserSignFormView(View):
    form_class = UserForm
    template_name = 'user/signup.html'

    def get(self, request):
        form = self.form_class(None)
        username = request.user.username
        try:
            match = User.objects.get(username = username)
            return HttpResponseRedirect("/")
                
        except User.DoesNotExist:
            return render(request, self.template_name, {'form': form})
        else :
            return render(request, self.template_name, {'form': form})
        # return render(request, self.template_name, {'form': form})

    def post(self, request):

        # signup part

        form = self.form_class(request.POST)

        
        if form.is_valid():
            user = form.save(commit=False)
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            # email = form.cleaned_data['email']
            # try :
            #     test  = User.objects.get(email = email)
            #     raise forms.ValidationError("Document already exists in DB")
            # except User.DoesNotExist :
            #     pass
                
            
            user.set_password(password)
            user.save()

            user = authenticate(username=username, password=password)

            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect('/')

        return render(request, self.template_name, {'form': form})

def logOut(request):
    logout(request)
    return redirect('/')