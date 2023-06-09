# Generated by Django 4.2.2 on 2023-06-13 14:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('person', '0004_alter_person_whatsapp'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='person',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='projects', to='person.person', verbose_name='Author'),
        ),
        migrations.AlterField(
            model_name='role',
            name='work',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='roles', to='person.work', verbose_name='Workplace'),
        ),
        migrations.AlterField(
            model_name='work',
            name='person',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='works', to='person.person', verbose_name='Employee'),
        ),
    ]
