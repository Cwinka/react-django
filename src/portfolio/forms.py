from django import forms
from .models import Work

class WorkForm(forms.Form):
    class Meta:
        model = Work
        fields = ['title', 'description', 'done_for', 'image_list', 'skills']
    
    @staticmethod
    def get_fields():
        return ['title', 'description', 'done_for']