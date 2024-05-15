from django.shortcuts import render
from django.http import HttpResponse, Http404
from .models import Cadastro, Tema, Palavra

def index(request):
    lista = Palavra.objects.all()
    contexto = { "lista": lista }
    return render(request, 'termooo/index.html', contexto)

def popup(request):
    return render(request, 'termooo/popup.html')

def jogo(request):
    return render(request, 'termooo/jogar.html')

def configuracoes(request):
    return render(request, 'termooo/configuracoes.html')

# def input_view(request):
#     if request.method == 'POST':
#         user_input = request.POST.get('user_input', '')
#         return render(request, 'termooo/input_template.html', {'user_input': user_input})
#     return render(request, 'termooo/input_template.html')