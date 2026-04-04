"""
URL configuration for azuum_website project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.shortcuts import render
from django.core.mail import send_mail
from django.contrib import messages
from django.http import HttpResponseRedirect

def home_view(request):
    return render(request, 'home.html')

def about_view(request):
    return render(request, 'about.html')

def contact_view(request):
    return render(request, 'contact.html')

def pricing_view(request):
    return render(request, 'pricing.html')

def features_view(request):
    return render(request, 'features.html')

def modules_view(request):
    return render(request, 'modules.html')

def contact_submit(request):
    if request.method == 'POST':
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        subject = request.POST.get('subject', '')
        message = request.POST.get('message', '')
        
        # Create email content
        email_subject = f'{settings.EMAIL_SUBJECT_PREFIX}New contact submission'
        email_message = f'''
Name: {name}
Email: {email}
Subject: {subject}

Message:
{message}
        '''
        
        try:
            send_mail(
                email_subject,
                email_message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.CONTACT_EMAIL],
                fail_silently=False,
            )
            messages.success(request, 'Your message has been sent successfully!')
        except Exception as e:
            messages.error(request, f'Error sending message: {str(e)}')
        
        return HttpResponseRedirect('/contact/')
    
    return HttpResponseRedirect('/contact/')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_view, name='home'),
    path('about/', about_view, name='about'),
    path('contact/', contact_view, name='contact'),
    path('pricing/', pricing_view, name='pricing'),
    path('features/', features_view, name='features'),
    path('modules/', modules_view, name='modules'),
    path('contact/submit/', contact_submit, name='contact_submit'),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
