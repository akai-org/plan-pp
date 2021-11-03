# Generated by Django 3.2.8 on 2021-10-29 19:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CoursePlan',
            fields=[
                ('courseID', models.AutoField(primary_key=True, serialize=False)),
                ('faculty', models.CharField(max_length=100)),
                ('studiesMode', models.BooleanField(choices=[(True, 'STACJONARNE'), (False, 'ZAOCZNE')])),
                ('course', models.CharField(max_length=100)),
                ('term', models.PositiveSmallIntegerField()),
                ('startAt', models.DateField()),
                ('endAt', models.DateField()),
                ('firstWeekType', models.BooleanField(choices=[(True, 'EVEN'), (False, 'ODD')])),
            ],
        ),
        migrations.CreateModel(
            name='Lesson',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('classroom', models.CharField(max_length=10)),
                ('lessonType', models.CharField(max_length=20)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.courseplan')),
            ],
        ),
        migrations.CreateModel(
            name='Slot',
            fields=[
                ('slotID', models.AutoField(primary_key=True, serialize=False)),
                ('dayOfWeek', models.PositiveSmallIntegerField()),
                ('startHour', models.TimeField()),
                ('endHour', models.TimeField()),
                ('description', models.TextField(blank=True, null=True)),
                ('endAtDate', models.DateField(blank=True, null=True)),
                ('startAtDate', models.DateField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='StudentGroup',
            fields=[
                ('groupID', models.AutoField(primary_key=True, serialize=False)),
                ('groupName', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('subjectID', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=40)),
                ('abbr', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('teacherID', models.AutoField(primary_key=True, serialize=False)),
                ('firstName', models.CharField(max_length=40)),
                ('lastName', models.CharField(max_length=80)),
                ('title', models.CharField(blank=True, max_length=80, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('userID', models.AutoField(primary_key=True, serialize=False)),
                ('login', models.CharField(max_length=30)),
                ('password', models.CharField(max_length=256)),
                ('coursePlan', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.courseplan')),
                ('group', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='api.studentgroup')),
            ],
        ),
        migrations.CreateModel(
            name='OtherActivity',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=40)),
                ('slot', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.slot')),
            ],
        ),
        migrations.CreateModel(
            name='Modification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.SmallIntegerField()),
                ('slot', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.slot')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.user')),
            ],
        ),
        migrations.CreateModel(
            name='LessonTeacher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lesson', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.lesson')),
                ('teacher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.teacher')),
            ],
        ),
        migrations.CreateModel(
            name='LessonGroups',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.studentgroup')),
                ('lesson', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.lesson')),
            ],
        ),
        migrations.AddField(
            model_name='lesson',
            name='slot',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.slot'),
        ),
        migrations.AddField(
            model_name='lesson',
            name='subject',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.subject'),
        ),
    ]