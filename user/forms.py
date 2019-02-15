from django.contrib.auth.models import User 
from django import forms 
from captcha.fields import CaptchaField

class UserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    captcha = CaptchaField()
    class Meta:
        model = User
        fields = ['username','email','password','first_name','last_name']
    def clean(self):
            email = self.cleaned_data.get('email')
            username = self.cleaned_data.get('username')
            try:
                match = User.objects.get(username = username)
                raise forms.ValidationError('این نام کاربری قبلا انتخاب شده است')
                
            except User.DoesNotExist:
                
                try:
                    match = User.objects.get(email=email)
                    raise forms.ValidationError('این ایمیل قبلا استفاده شده است')
                
                except User.DoesNotExist:
                        return self.cleaned_data
            else:
                raise forms.ValidationError('مشکلی در ثبت نام ایجاد شده است')

class LoginUserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    class Meta:
        model = User
        fields = ['username','password']
    def clean(self):
        username = self.cleaned_data.get('username')
        password2 = self.cleaned_data.get('password')
        try:
            

            match = User.objects.get(username = username)

            if match.check_password(password2):
                return self.cleaned_data
            else:
                raise forms.ValidationError('رمز عبور اشتباه است')

        except User.DoesNotExist:
            raise forms.ValidationError('نام کاربری وجود ندارد')
        else:
            raise forms.ValidationError('مشکلی در ورود ایجاد شده است')
            
                
