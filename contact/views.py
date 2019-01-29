from django.shortcuts import render
from django.views.generic import View
from django.shortcuts import render, redirect
from .models import contact
# Create your views here.
class about(View):
    template_name = 'contact/about.html'

    def get(self, request):
        return render(request, self.template_name)

    def post(self, request):
        text = request.POST.get("comments")
        name = request.POST.get("name")
        email = request.POST.get("email")
        newComment = contact(text=text, name=name, email=email)
        newComment.save()
        return redirect('/')

