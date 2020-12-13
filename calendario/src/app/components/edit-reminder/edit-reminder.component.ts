import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColorEvent } from 'ngx-color';
import { ICiudad, IHoras } from 'src/app/models/interfaces';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-edit-reminder',
  templateUrl: './edit-reminder.component.html',
  styleUrls: ['./edit-reminder.component.css']
})
export class EditReminderComponent implements OnInit {

  detailReminderForm: FormGroup;
  deshabilitado: boolean = false;

  ciudades: ICiudad[] = [
    {value: 'nl', viewValue: 'Schiphol'},
    {value: 'mx', viewValue: 'Mexico'},
    {value: 'us', viewValue: 'Florida'},
    {value: 'co', viewValue: 'Bogota'},
    {value: 'es', viewValue: 'Barcelona'},
    {value: 'uk', viewValue: 'London'},
    {value: 'it', viewValue: 'Bologna'},
    {value: 'ch', viewValue: 'Basel'},
  ];

  horarios: IHoras[] = [
    {value: '9:00', viewValue: '9:00'},
    {value: '9:30', viewValue: '9:30'},
    {value: '10:00', viewValue: '10:00'},
    {value: '10:30', viewValue: '10:30'},
    {value: '11:00', viewValue: '11:00'},
    {value: '11:30', viewValue: '11:30'},
    {value: '12:00', viewValue: '12:00'},
    {value: '12:30', viewValue: '12:30'},
    {value: '13:00', viewValue: '13:00'},
    {value: '13:30', viewValue: '13:30'},
    {value: '14:00', viewValue: '14:00'},
    {value: '14:30', viewValue: '14:30'},
    {value: '15:00', viewValue: '15:00'},
    {value: '15:30', viewValue: '15:30'},
    {value: '16:00', viewValue: '16:00'},
    {value: '16:30', viewValue: '16:30'},
    {value: '17:00', viewValue: '17:00'},
    {value: '17:30', viewValue: '17:30'},
    {value: '18:00', viewValue: '18:00'},
    {value: '18:30', viewValue: '18:30'}
  ];

  datos: any = {};

  constructor(private dialogRef: MatDialogRef<EditReminderComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {reminder: any, indice: number},
              private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.detailReminderForm = new FormGroup({
      titulo: new FormControl({value: this.data.reminder.title, disabled: this.deshabilitado}, [Validators.required]),
      city: new FormControl({value: this.data.reminder.pais, disabled: this.deshabilitado}, [Validators.required]),
      hour: new FormControl({value: this.data.reminder.hora, disabled: this.deshabilitado}, [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.detailReminderForm.controls[controlName].hasError(errorName);
  }

  handleChange($event: ColorEvent) {
    this.datos.color = $event.color.hex;
  }

  pasandoData(ciudad: string) {
    this.datos.ciudad = ciudad;
    this.weatherService.getWeather(ciudad, this.detailReminderForm.get('city').value).subscribe(info => {
      const AUX = info['weather'][0].main;
      this.datos.clima = AUX;
    });
  }

  editar() {
    this.datos.numero = this.data.indice;
    this.datos.titulo = this.detailReminderForm.get('titulo').value;
    this.datos.pais = this.detailReminderForm.get('city').value;
    this.datos.hora = this.detailReminderForm.get('hour').value;
    this.dialogRef.close(this.datos);
  }

  borrar() {
    this.dialogRef.close(1);
  }

}
