import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-listado-clientes',
  standalone: true,
  imports: [],
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent {
  
  clientes: string[][] = [];

  addCliente(inRow: string[]){
    this.clientes.push(inRow);
  }
}
