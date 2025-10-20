from django.http import HttpResponse
from django.shortcuts import render

def hello_world(request):
    """简单的Hello World视图"""
    return HttpResponse("<h1>20231201034+王迪</h1><p>这是我的Django Hello World应用！</p>")

def hello_name(request, name):
    """带参数的Hello视图"""
    return HttpResponse(f"<h1>20231201034+王迪 - 欢迎 {name}!</h1><p>很高兴见到你！</p>")

def hello_template(request):
    """使用模板的Hello视图"""
    context = {
        'title': '20231201034+王迪',
        'message': '这是我的Django Hello World应用！',
        'features': ['Django框架', 'Python语言', 'HTML模板', '20231201034+王迪']
    }
    return render(request, 'hello/hello.html', context)

def singlepage(request):
    """单页应用视图"""
    return render(request, 'singlepage.html')