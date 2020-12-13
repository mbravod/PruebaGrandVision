import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ICiudad, IHoras } from 'src/app/models/interfaces';

@Component({
  selector: 'app-recordatorio',
  templateUrl: './recordatorio.component.html',
  styleUrls: ['./recordatorio.component.css']
})
export class RecordatorioComponent {

  ciudades: ICiudad[] = [
    {value: 'Schiphol', viewValue: 'Schiphol'},
    {value: 'Distrito Federal', viewValue: 'México'},
    {value: 'Florida', viewValue: 'Florida'},
    {value: 'Bogota', viewValue: 'Bogota'},
    {value: 'Barcelona', viewValue: 'Barcelona'},
    {value: 'London', viewValue: 'London'},
    {value: 'Bologna', viewValue: 'Bologna'},
    {value: 'Basel', viewValue: 'Basel'},
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

  colors: string[] = [
    '#ffffff',
    '#000105',
    '#3e6158',
    '#3f7a89',
    '#96c582',
    '#b7d5c4',
    '#bcd6e7',
    '#7c90c1',
    '#9d8594',
    '#dad0d8',
    '#4b4fce',
    '#4e0a77',
    '#a367b5',
    '#ee3e6d',
    '#d63d62',
    '#c6a670',
    '#f46600',
    '#cf0500',
    '#efabbd',
    '#8e0622',
    '#f0b89a',
    '#f0ca68',
    '#62382f',
    '#c97545',
    '#c1800b'
  ];

  recordatorioForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<RecordatorioComponent>) { }

  ngOnInit(): void {
    this.recordatorioForm = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      hour: new FormControl('', [Validators.required]),
      colores: new FormControl('', [Validators.required])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.recordatorioForm.controls[controlName].hasError(errorName);
  }

  aceptar() {}

  cancelar() {}

}
