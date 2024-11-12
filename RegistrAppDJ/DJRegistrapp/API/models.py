from django.db import models

class Usuario(models.Model):
    id=models.AutoField(primary_key=True)
    nombre= models.CharField(max_length=45,null=False)
    apellido=models.CharField(max_length=50, default='S/A')
    edad=models.IntegerField()
    
    def __str__(self):
        return self.nombre
    
class Persona(models.Model):
    id=models.AutoField(primary_key=True)
    nombre= models.CharField(max_length=45,null=False)
    apellido=models.CharField(max_length=50, default='S/A')
    
    def __str__(self):
        return self.nombre+" "+self.apellido
