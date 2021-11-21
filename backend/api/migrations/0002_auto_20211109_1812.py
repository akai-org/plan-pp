# Generated by Django 3.2.9 on 2021-11-09 18:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='PlanUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('coursePlan', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.courseplan')),
                ('group', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.studentgroup')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='db_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AlterField(
            model_name='modification',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.planuser'),
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
