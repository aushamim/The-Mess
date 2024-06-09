# Generated by Django 4.2.11 on 2024-06-09 13:48

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=10)),
                ('count', models.IntegerField()),
                ('location', models.CharField(max_length=200)),
                ('full_address', models.CharField(max_length=200)),
                ('map', models.URLField(max_length=500)),
                ('extra', models.CharField(max_length=200)),
                ('rent', models.CharField(max_length=20)),
                ('contact', models.CharField(max_length=100)),
                ('images', models.JSONField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
