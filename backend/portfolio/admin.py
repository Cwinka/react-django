from django.contrib import admin
from .models import Work, Skill, WorkImage

# Register your models here.


class WorkAdmin(admin.ModelAdmin):
    pass
class SkillAdmin(admin.ModelAdmin):
    pass
class WorkImageAdmin(admin.ModelAdmin):
    pass

admin.site.register(Work, WorkAdmin)
admin.site.register(Skill, SkillAdmin)
admin.site.register(WorkImage, WorkImageAdmin)