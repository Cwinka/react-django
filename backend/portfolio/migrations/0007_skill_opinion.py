# Generated by Django 3.1.6 on 2021-02-08 13:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0006_auto_20210206_0035'),
    ]

    operations = [
        migrations.AddField(
            model_name='skill',
            name='opinion',
            field=models.CharField(default='', max_length=50),
            preserve_default=False,
        ),
    ]