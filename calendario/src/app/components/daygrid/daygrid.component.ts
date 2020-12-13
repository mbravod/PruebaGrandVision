import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IDia } from 'src/app/models/interfaces';
import { RecordatorioComponent } from '../recordatorio/recordatorio.component';

@Component({
  selector: 'app-daygrid',
  templateUrl: './daygrid.component.html',
  styleUrls: ['./daygrid.component.css']
})
export class DaygridComponent {

  fechaActual = new Date();

  semanasXMes: any[] = [];
  diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  mesesYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  diasXMes: IDia[] = [{mes: this.mesesYear[10], nombre: 'Domingo', numero: '29'}, {mes: this.mesesYear[10], nombre: 'Lunes', numero: '30'}];
  mesActual: string;
  numDay: number[] = [];
  diasEnMes: string;

  constructor(public dialog: MatDialog) {
    const prueba = new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth(), 0);
    console.log(prueba.getDay());
    this.diasEnMes = this.diasEnMesYearActual().toString();
    this.mostrarMes(this.fechaActual.getMonth());
    this.mostrarSemanas(this.semanasEnMes(this.fechaActual.getFullYear(), this.fechaActual.getMonth() + 1));
    // this.mostrarCards(this.diasEnMesYearActual());
    this.mostrarCards(33);
   }

  openDialog() {
    const dialogRef = this.dialog.open(RecordatorioComponent);
  }

  diasEnMesYearActual() {
    const FECHA = new Date();
    return new Date(FECHA.getFullYear(), FECHA.getMonth() + 1, 0 ).getDate();
  }

  mostrarCards(cantidad: number) {
    let nomDay;
    for (let index = 1; index <= cantidad; index++) {
      nomDay = new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth(), index);
      switch (nomDay.getDay()) {
        case 0:
          if (index > this.diasEnMesYearActual()) {
            this.diasXMes.push({
              mes: this.mesesYear[0],
              nombre: this.diasSemana[0],
              numero: index.toString()
            });
          } else {
            this.diasXMes.push({
              mes: this.mesesYear[11],
              nombre: this.diasSemana[0],
              numero: index.toString()
            });
          }
          break;
        case 1:
          if (index > this.diasEnMesYearActual()) {
            this.diasXMes.push({
              mes: this.mesesYear[0],
              nombre: this.diasSemana[1],
              numero: index.toString()
            });
          } else {
            this.diasXMes.push({
              mes: this.mesesYear[11],
              nombre: this.diasSemana[1],
              numero: index.toString()
            });
          }
          break;
        case 2:
          if (index > this.diasEnMesYearActual()) {
            this.diasXMes.push({
              mes: this.mesesYear[0],
              nombre: this.diasSemana[2],
              numero: index.toString()
            });
          } else {
            this.diasXMes.push({
              mes: this.mesesYear[11],
              nombre: this.diasSemana[2],
              numero: index.toString()
            });
          }
          break;
        case 3:
          if (index > this.diasEnMesYearActual()) {
            this.diasXMes.push({
              mes: this.mesesYear[0],
              nombre: this.diasSemana[3],
              numero: index.toString()
            });
          } else {
            this.diasXMes.push({
              mes: this.mesesYear[11],
              nombre: this.diasSemana[3],
              numero: index.toString()
            });
          }
          break;
        case 4:
          if (index > this.diasEnMesYearActual()) {
            this.diasXMes.push({
              mes: this.mesesYear[0],
              nombre: this.diasSemana[4],
              numero: index.toString()
            });
          } else {
            this.diasXMes.push({
              mes: this.mesesYear[11],
              nombre: this.diasSemana[4],
              numero: index.toString()
            });
          }
          break;
        case 5:
          if (index > this.diasEnMesYearActual()) {
            this.diasXMes.push({
              mes: this.mesesYear[0],
              nombre: this.diasSemana[5],
              numero: index.toString()
            });
          } else {
            this.diasXMes.push({
              mes: this.mesesYear[11],
              nombre: this.diasSemana[5],
              numero: index.toString()
            });
          }
          break;
        case 6:
          if (index > this.diasEnMesYearActual()) {
            this.diasXMes.push({
              mes: this.mesesYear[0],
              nombre: this.diasSemana[6],
              numero: index.toString()
            });
          } else {
            this.diasXMes.push({
              mes: this.mesesYear[11],
              nombre: this.diasSemana[6],
              numero: index.toString()
            });
          }
          break;
      
        default:
          break;
      }
    }
  }

  semanasEnMes(year: number, mes: number) {
    const primeroMes = new Date(year, mes - 1, 1);
    const ultimoMes = new Date(year, mes, 0);

    const aux = primeroMes.getDay() + ultimoMes.getDate();

    return Math.ceil(aux/7);
  }

  mostrarSemanas(cantidad: number) {
    for (let index = 0; index < cantidad; index++) {
      this.semanasXMes.push(index + 1);      
    }
  }

  mostrarMes(mes: number) {
    this.mesActual = this.mesesYear[mes];
  }

  numeroDia() {
    for (let index = 0; index < this.diasXMes.length; index++) {
      return this.diasXMes[index].numero;

    }
  }



}
