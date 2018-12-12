from django.shortcuts import render
from .models import Picture

# Create your views here.
def index(request):
    deboisements = Picture.objects.filter(category=1)
    abattages = Picture.objects.filter(category = 2)
    return render(request, 'sauvage/index.html', {'abattages':abattages, 'deboisements' : deboisements})