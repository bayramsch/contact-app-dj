
from rest_framework import generics
from .serializers import ContactSerializers
from .models import Contact

class ContactList(generics.ListCreateAPIView):
    serializer_class = ContactSerializers
    queryset = Contact.objects.all()
    

class ContactRUD(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ContactSerializers
    queryset = Contact.objects.all()

