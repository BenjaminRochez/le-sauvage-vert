from django.shortcuts import render
from .models import Picture

# Create your views here.
def index(request):
    deboisements = Picture.objects.filter(category_id= 2)
    abattages = Picture.objects.filter(category_id = 1)
    elagages = Picture.objects.filter(category_id = 3)
    grues = Picture.objects.filter(category_id = 4)
    rognages = Picture.objects.filter(category_id = 5)
    equipements = Picture.objects.filter(category_id = 6)
    return render(request, 'sauvage/index.html', {'abattages':abattages, 'deboisements' : deboisements, 'elagages': elagages, 'grues': grues, 'rognages': rognages, 'equipements': equipements})