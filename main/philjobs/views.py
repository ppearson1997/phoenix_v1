from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
# from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Client
from .serializer import ClientSerializer

@api_view(['GET', 'POST'])
def client_list(request):
    if request.method == 'GET':
        data = []
        qs_client = Client.objects.all()
        serializer = ClientSerializer(data,context={'request': request}, many=True)
        return Response({'data': serializer.data })

    if request.method == 'POST':
        serializer = ClientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def client_detail(request, pk):
    try:
        qs_client = Client.objects.get(pk=pk)
    except Client.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ClientSerializer(qs_client,context={'request': request})
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = ClientSerializer(qs_client, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        qs_client.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
