import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditReminderComponent } from '../edit-reminder/edit-reminder.component';

@Component({
  selector: 'app-card-reminder',
  templateUrl: './card-reminder.component.html',
  styleUrls: ['./card-reminder.component.css']
})
export class CardReminderComponent implements OnInit {

  @Input() titulo: string;
  @Input() hora: string;
  @Input() ciudad: string;
  @Input() color: string = '#ffffff';
  @Input() clima: string;
  @Input() item: any;
  @Input() numero: number;

  @Output() itemABorrar: EventEmitter<any>;

  constructor(public dialog: MatDialog) {
    this.itemABorrar = new EventEmitter();
   }

  ngOnInit(): void {
  }

  openDialog(item: any, numero: number) {
    console.log(item);
    const dialogRef = this.dialog.open(EditReminderComponent, {
      width: '350px',
      data: {reminder: item, indice: numero},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(data => {
      if (data != 1) {
        this.titulo = data.titulo;
        this.ciudad = data.ciudad;
        this.color = data.color;
        this.clima = data.clima;
        this.hora = data.hora;
      } else {
        this.itemABorrar.emit(this.item);
      }
    });
  }
}
