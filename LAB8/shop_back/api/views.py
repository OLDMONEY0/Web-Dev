from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Product, Category
# Create your views here.

def product_list(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

def product_detail(request, product_id):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    for product in products_json:
        if product['id'] == product_id:
            return JsonResponse(product)
    return JsonResponse({'error': 'Product not found'})

def category_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

def category_detail(request, category_id):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    for category in categories_json:
        if category['id'] == category_id:
            return JsonResponse(category)
    return JsonResponse({'error': 'Product not found'})

def category_products(request, category_id):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    for product in products_json:
        if product['cat_id'] == category_id:
            return JsonResponse(product)
    return JsonResponse({'error': 'Product not found'})