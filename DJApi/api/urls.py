from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PersonaViewSet, AlumnoViewSet, ProfesorViewSet, MateriaViewSet, AsistenciaViewSet

router = DefaultRouter()
router.register(r'personas', PersonaViewSet)
router.register(r'alumnos', AlumnoViewSet)
router.register(r'profesores', ProfesorViewSet)
router.register(r'materias', MateriaViewSet)
router.register(r'asistencias', AsistenciaViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
