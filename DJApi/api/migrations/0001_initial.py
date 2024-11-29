# Generated by Django 5.1.3 on 2024-11-29 03:18

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Persona',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('apellido', models.CharField(max_length=100)),
                ('correo', models.EmailField(max_length=254, unique=True)),
                ('tipo_usuario', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Alumno',
            fields=[
                ('persona_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='api.persona')),
                ('fecha_nacimiento', models.DateField()),
            ],
            bases=('api.persona',),
        ),
        migrations.CreateModel(
            name='Profesor',
            fields=[
                ('persona_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='api.persona')),
            ],
            bases=('api.persona',),
        ),
        migrations.CreateModel(
            name='Materia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('alumnos', models.ManyToManyField(related_name='materias', to='api.alumno')),
                ('profesor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.profesor')),
            ],
        ),
        migrations.CreateModel(
            name='Asistencia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField()),
                ('materia', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.materia')),
                ('alumno', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.alumno')),
            ],
        ),
    ]