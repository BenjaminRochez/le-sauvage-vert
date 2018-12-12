from django.shortcuts import render
from .models import Picture

# Create your views here.
def index(request):
    deboisements = Picture.objects.filter(category=1)
    abattages = Picture.objects.filter(category = 2)
    elagages = Picture.objects.filter(category = 3)
    grues = Picture.objects.filter(category = 4)
    rognages = Picture.objects.filter(category = 5)
    equipements = Picture.objects.filter(category = 6)
    return render(request, 'sauvage/index.html', {'abattages':abattages, 'deboisements' : deboisements, 'elagages': elagages, 'grues': grues, 'rognages': rognages, 'equipements': equipements})