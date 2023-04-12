from django.db import models



def companies():
    return Company.objects.all()


def vacancies():
    return Vacancy.objects.all()




class Company(models.Model):
    name = models.CharField(max_length=255),
    description = models.TextField(),
    city = models.CharField(max_length=255),
    address = models.TextField()



    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"



    def to_json(self):
        return {
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }

    def __str__(self):
        return f"{self.name}:{self.city}"



class Vacancy(models.Model):
    name = models.CharField(max_length=255),
    description = models.TextField(),
    salary = models.FloatField(default=1000),
    company = models.ForeignKey(Company, on_delete=models.CASCADE)


    class Meta:
        verbose_name = "Vacancy"
        verbose_name_plural = "Vacancies"



    def to_json(self):
        return {
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company
        }

    def __str__(self):
        return f"{self.name}:{self.company}"

