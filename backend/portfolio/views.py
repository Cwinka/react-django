from django.shortcuts import render
from .models import Work, WorkImage, Skill
from .forms import WorkForm
from .serializers import WorkSerializer, WorkImageSerializer, SkillSerializer
from django.http.response import HttpResponseForbidden
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status


class WorkListCreate(generics.ListCreateAPIView):
    queryset = Work.objects.all()
    serializer_class = WorkSerializer

@api_view(['GET'])
def all_works(request):
    data = Work.objects.all()
    serializer = WorkSerializer(data, context={'request': request}, many=True)
    return Response({'data': serializer.data})

@api_view(['GET'])
def trash(request, p):
    return Response({'data': 'trash'})
    
@api_view(['GET'])
def recent_works(request):
    works = tuple(reversed(Work.objects.all()))[:2]
    data = []
    for work in works:
        ser_work = WorkSerializer(work, context={'request': request}).data
        images = WorkImage.objects.filter(work__id=work.id)
        ser_work    ['image'] = WorkImageSerializer(images.first(), context={'request': request}).data
        data.append(ser_work)
    return Response({'data': data})

@api_view(['GET'])
def work_details(request, pk):
    try:
        work = Work.objects.get(pk=pk)
    except Work.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    except ValueError:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = WorkSerializer(work, context={'request': request})
    return Response({'data': serializer.data})

@api_view(['GET'])
def work_images(request, pk):
    try:
        work = Work.objects.get(pk=pk)
    except Work.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    except ValueError:
        return Response(status=status.HTTP_404_NOT_FOUND)
    images = WorkImage.objects.filter(work__id=work.id)
    image_ser = WorkImageSerializer(images, context={'request': request} ,many=True)
    return Response({'data': image_ser.data})

@api_view(['GET'])
def all_skills(request):
    data = Skill.objects.all()
    serializer = SkillSerializer(data, context={'request': request}, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def all_images(request):
    try:
        stopper = request.GET.get('onlyfirst')
        # get images by key here
        works = Work.objects.all()
        image_data = {} # make a work id to find a proper image
        for work in works:
            images = WorkImage.objects.filter(work__id=work.id)
            if stopper == 'true':
                image_ser = WorkImageSerializer(images.first(), context={'request': request})
            else:
                image_ser = WorkImageSerializer(images, context={'request': request} ,many=True)
            image_data[work.id] = image_ser.data
    except IndexError:
        Response(status=status.HTTP_404_NOT_FOUND)

    return Response(image_data)
