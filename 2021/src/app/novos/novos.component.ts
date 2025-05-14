import { Component, OnInit } from '@angular/core';

//Essencial para capturar os eventos do teclado:
import { HostListener } from '@angular/core';

// Coletando o parametro ETIQUETA pode-se consultar o DB para ver as classificações

import { ActivatedRoute } from '@angular/router';

// Serviço para consomer a API (método GET) 

import { GetFotosBucketService } from '../services/get-fotos-bucket.service';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,

  UP_ARROW = 38,
  DOWN_ARROW = 40
}

@Component({
  selector: 'app-novos',
  templateUrl: './novos.component.html',
  styleUrls: ['./novos.component.css']
})


export class NovosComponent implements OnInit {

  etiqueta="etiqueta";

  indice_imagen=0;

  maximo_indice_imagen=0;

  imagem: String[]=[];

  
  constructor(private activatedRoute: ActivatedRoute,private getFotosBucketService: GetFotosBucketService) {
  }

ngOnInit() {
    this.getUrl_imagem_METODO();
    const par = this.activatedRoute.snapshot.paramMap.get('parametro');
    this.etiqueta=par+"";
}


@HostListener('window:keyup', ['$event'])
keyEvent(event: KeyboardEvent) {
  console.log(event);

  if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
    this.increment();
  }

  if (event.keyCode === KEY_CODE.LEFT_ARROW) {
    this.decrement();
  }

//Verticais para acelerar a navegação:

  if (event.keyCode === KEY_CODE.UP_ARROW) {
    this.increment_10();
  }

  if (event.keyCode === KEY_CODE.DOWN_ARROW) {
    this.decrement_10();
  }
}

  increment() {    

    if((this.indice_imagen+1)<this.maximo_indice_imagen)
    {
      this.indice_imagen++;    
    }    
  }

  decrement() {

    if(this.indice_imagen>0)
    {
      this.indice_imagen--;
    }    
  }
//Verticais para acelerar a navegação, em passos de 10
  increment_10() {
    
    if((this.indice_imagen+10)<this.maximo_indice_imagen)
    {
      this.indice_imagen+=10;
    }    
  }

  decrement_10() {

    if(this.indice_imagen>10)
    {
      this.indice_imagen-=10;
    }     
  }

//Evento de tocar na foto

  public open() {
    alert(this.etiqueta);
    //console.log('Open ');
  }

// Chama o serviço para obtém todas as fotos

  url_foto : String[] | undefined;  

  getUrl_imagem_METODO() {
    this.getFotosBucketService.getUrl_imagem().subscribe((url_foto: String[]) => {
      this.imagem = url_foto;    
      this.maximo_indice_imagen=url_foto.length;  
    });
  }

///////
}


