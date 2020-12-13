import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IDia } from 'src/app/models/interfaces';
import { RecordatorioComponent } from '../recordatorio/recordatorio.component';

@Component({
  selector: 'app-daygrid',
  templateUrl: './daygrid.component.html',
  styleUrls: ['./daygrid.component.css']
})
export class DaygridComponent implements OnInit {

  fechaActual = new Date();

  semanasXMes: any[] = [];
  diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  mesesYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  diasXMes: IDia[] = [
    {mes: this.mesesYear[10], nombre: this.diasSemana[0], numero: new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth(), -1).getDate().toString()}, 
    {mes: this.mesesYear[10], nombre: this.diasSemana[1], numero: new Date(this.fechaActual.getFullYear(), this.fechaActual.getMonth(), 0).getDate().toString()}
  ];
  mesActual: string;
  numDay: number[] = [];
  diasEnMes: string;
  climaCity: any;

  constructor(public dialog: MatDialog) {
    this.diasEnMes = this.diasEnMesYearActual().toString();
    this.mostrarMes(this.fechaActual.getMonth());
    this.mostrarSemanas(this.semanasEnMes(this.fechaActual.getFullYear(), this.fechaActual.getMonth() + 1));
    this.mostrarCards(33);
   }

  ngOnInit(): void {} 

  openDialog(numero: number) {
    const dialogRef = this.dialog.open(RecordatorioComponent, {
      width: '350px',
      data: {numero: numero},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(data => {
      this.crearRecordatorio(data.numero, data.titulo, data.ciudad, data.pais, data.hora, data.color, data.clima);
    });
  }


  crearRecordatorio(numero: number, title: string, city: string, country: string, time: string, color: string, clima: string) {
    this.diasXMes[numero].recordatorio.push({
      title: title,
      ciudad: city,
      pais: country,
      color: color,
      hora: time,
      clima: clima
    });

    if (this.diasXMes[numero].recordatorio.length > 1) {
      this.diasXMes[numero].recordatorio.sort((a, b) => {
        if (a.hora > b.hora) {
          return 1;
        } else if (a.hora < b.hora) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      return;
    }
  }

  borrarRecordatorios(numero: number) {
    this.diasXMes[numero].recordatorio = [];
  }

  borrarRecordatorio(numero: number, item: any) {
    const AUX = this.diasXMes[numero].recordatorio.indexOf(item);
    if (AUX != -1) {
      this.diasXMes[numero].recordatorio.splice(AUX, 1);
    }
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
              numero: index.toString(),
              recordatorio: [] 
            });
          } else {
            this.diasXMes.push({
              mes: this.mesesYear[11],
              nombre: this.diasSemana[0],
              numero: index.toString(),
              recordatorio: []
            });
          }
          break;
        case 1:
          if (index > this.diasEnMesYearActual()) {
            this.diasXMes.push({
              mes: this.mesesYear[0],
              nombre: this.diasSemana[1],
              numero: index.toString(),
              recordatorio: []
            });
          } else {
            this.diasXMes.push({
              mes: this.mesesYear[11],
              nombre: this.diasSemana[1],
              numero: index.toString(),
              recordatorio: []
            });
          }
          break;
        case 2:
          if (index > this.diasEnMesYearActual()) {
            this.diasXMes.push({
              mes: this.mesesYear[0],
              nombre: this.diasSemana[2],
              numero: index.toString(),
              recordatorio: []
            });
          } else {
            this.diasXMes.push({
              mes: this.mesesYear[11],
              nombre: this.diasSemana[2],
              numero: index.toString(),
              recordatorio: []
            });
          }
          break;
        case 3:
          if (index > this.diasEnMesYearActual()) {
            this.diasXMes.push({
              mes: this.mesesYear[0],
              nombre: this.diasSemana[3],
              numero: index.toString(),
              recordatorio: []
            });
          } else {
            this.diasXMes.push({
              mes: this.mesesYear[11],
              nombre: this.diasSemana[3],
              numero: index.toString(),
              recordatorio: []
            });
          }
          break;
        case 4:
          if (index > this.diasEnMesYearActual()) {
            this.diasXMes.push({
              mes: this.mesesYear[0],
              nombre: this.diasSemana[4],
              numero: index.toString(),
              recordatorio: []
            });
          } else {
            this.diasXMes.push({
              mes: this.mesesYear[11],
              nombre: this.diasSemana[4],
              numero: index.toString(),
              recordatorio: []
            });
          }
          break;
        case 5:
          if (index > this.diasEnMesYearActual()) {
            this.diasXMes.push({
              mes: this.mesesYear[0],
              nombre: this.diasSemana[5],
              numero: new Date(this.fechaActual.getFullYear() + 1, this.fechaActual.getMonth() + 1, 1).getDate().toString(),
              recordatorio: []
            });
          } else {
            this.diasXMes.push({
              mes: this.mesesYear[11],
              nombre: this.diasSemana[5],
              numero: index.toString(),
              recordatorio: []
            });
          }
          break;
        case 6:
          if (index > this.diasEnMesYearActual()) {
            this.diasXMes.push({
              mes: this.mesesYear[0],
              nombre: this.diasSemana[6],
              numero: new Date(this.fechaActual.getFullYear() + 1, this.fechaActual.getMonth() + 1, 2).getDate().toString(),
              recordatorio: []
            });
          } else {
            this.diasXMes.push({
              mes: this.mesesYear[11],
              nombre: this.diasSemana[6],
              numero: index.toString(),
              recordatorio: []
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
