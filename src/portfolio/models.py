from django.db import models

class Skill(models.Model):
    knowledge_ch = (
        (1, 1),
        (2, 2),
        (3, 3),
        (4, 4),
        (5, 5),
        (6, 6),
        (7, 7),
        (8, 8),
        (9, 9),
        (10, 10),
    )
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    opinion = models.CharField(max_length=50, blank=True)
    knowledge = models.IntegerField(choices=knowledge_ch, default=3)
    def __str__(self):
        return self.name

class Work(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    done_for = models.IntegerField()
    skills = models.ManyToManyField(Skill)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    @classmethod
    def fields(cls):
        return [f.name for f in cls._meta.get_fields()]

class WorkImage(models.Model):
    img = models.ImageField(upload_to="photos/%Y")
    work = models.ForeignKey(Work, default=None, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.work.title} -> {self.img.name}"