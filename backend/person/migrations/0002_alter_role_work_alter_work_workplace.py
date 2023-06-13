# Generated by Django 4.2.2 on 2023-06-09 19:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('person', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='role',
            name='work',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='person.work', verbose_name='Workplace'),
        ),
        migrations.AlterField(
            model_name='work',
            name='workplace',
            field=models.CharField(verbose_name='Workplace'),
        ),
    ]