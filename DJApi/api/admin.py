from django.contrib import admin
from .models import Persona, Alumno, Profesor, Materia, Asistencia

# Register your models here.

admin.site.register(Persona)
admin.site.register(Alumno)
admin.site.register(Profesor)
admin.site.register(Materia)
admin.site.register(Asistencia)
