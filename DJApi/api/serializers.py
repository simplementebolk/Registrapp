from rest_framework import serializers
from .models import Persona, Alumno, Profesor, Materia, Asistencia

class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = ['id', 'nombre', 'apellido', 'correo', 'tipo_usuario']

class AlumnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumno
        fields = ['id', 'nombre', 'apellido', 'correo', 'tipo_usuario', 'fecha_nacimiento']

class ProfesorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profesor
        fields = ['id', 'nombre', 'apellido', 'correo', 'tipo_usuario']

class MateriaSerializer(serializers.ModelSerializer):
    profesor = ProfesorSerializer()
    alumnos = AlumnoSerializer(many=True)

    class Meta:
        model = Materia
        fields = ['id', 'nombre', 'profesor', 'alumnos']

class AsistenciaSerializer(serializers.ModelSerializer):
    materia = MateriaSerializer()
    alumno = AlumnoSerializer()

    class Meta:
        model = Asistencia
        fields = ['id', 'materia', 'alumno', 'fecha']
