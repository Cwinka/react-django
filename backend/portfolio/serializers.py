from rest_framework import serializers
from .models import Work, Skill, WorkImage

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ('id', 'name', 'description', 'opinion', 'knowledge')

class WorkImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkImage
        fields = ('id', 'img')

class WorkSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(read_only=True, many=True)
    class Meta:
        model = Work
        fields = ('id', 'title', 'description', 'done_for', 'skills', 'created_at') 

