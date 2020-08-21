from rest_framework import viewsets
from .serializers import TodoSerializer
from todos.models import Todo


class TodoView(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
