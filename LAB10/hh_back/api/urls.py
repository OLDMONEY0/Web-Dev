from django.urls import path
from api import view
from api.view import VacancyList, VacancyDetail
urlpatterns = [
    path('companies/', view.get_companies),
    path('companies/<int:company_id>', view.get_company),
    path('companies/<int:company_id>/vacancies', view.vacancies_by_company),
    path('vacancies/', VacancyList.as_view()),
    path('vacancies/<int:pk>', VacancyDetail.as_view()),
    path('vacancies/top_ten/', view.top_ten)
]