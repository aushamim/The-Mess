# Generated by Django 4.2.11 on 2024-06-09 18:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UserManagement', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='max_edits',
            field=models.IntegerField(default=3),
        ),
    ]