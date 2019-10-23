import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Mostrar : boolean = false;

  public Frase : any ={
    mensaje:'Vivimos en un mundo donde el dia dura 24 hrs',
    autor:'el bromas'
  }

  public personajes:any[]=['Spiderman','Venom','Misterio']

  constructor() { }

  ngOnInit() {
  }

  public MetodoCambiar(){
    this.Mostrar=!this.Mostrar;
  }

}
