import { Component, OnInit } from '@angular/core';

//
import { HostListener } from '@angular/core';

// Coletando o parametro ETIQUETA pode-se consultar o DB para ver as classificações

import { ActivatedRoute } from '@angular/router';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,

  UP_ARROW = 38,
  DOWN_ARROW = 40
}

@Component({
  selector: 'app-classificados',
  templateUrl: './classificados.component.html',
  styleUrls: ['./classificados.component.css']
})
export class ClassificadosComponent implements OnInit {

  etiqueta="etiqueta";

  indice_imagen=0;

  imagem: string[]=[
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-04+17-40-17.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-09+17-35-19.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-09+17-35-21.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-12+21-47-17.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-12+21-47-25.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-13+21-43-00.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-13+21-45-13.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-13+21-45-21.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-13+21-55-03.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-13+21-56-00.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-13+21-58-50.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-13+22-02-42.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-13+22-05-09.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-13+22-05-27.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-13+22-08-53.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-13+22-31-25.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-13+22-36-23.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-13+22-55-37.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-13+23-40-02.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-13+23-51-52.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-14+02-19-22.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-14+02-32-48.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-14+02-32-51.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-14+02-32-55.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-14+16-17-22.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-14+16-28-23.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-14+16-58-18.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-14+17-13-27.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-14+17-52-20.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-15+00-54-48.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-15+14-55-09.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-15+15-39-29.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-15+15-42-50.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-15+19-10-02.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-15+19-58-16.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-15+20-36-49.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-15+23-02-42.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-15+23-03-08.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-15+23-13-56.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-16+00-43-11.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-16+02-53-36.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-16+02-54-37.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-16+03-21-30.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-16+03-21-33.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-16+05-19-54.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-16+18-33-30.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-16+18-44-22.png",
    "https://node-gestor-imagens.s3-us-west-2.amazonaws.com/Screenshot+from+2021-03-16+18-45-43.png"
  ];

  
  constructor(private activatedRoute: ActivatedRoute) {
  }

ngOnInit() {
    const par = this.activatedRoute.snapshot.paramMap.get('parametro');
    this.etiqueta=par+"";
    console.log(par);
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
    this.indice_imagen++;
  }

  decrement() {
    this.indice_imagen--;
  }
//Verticais para acelerar a navegação, em passos de 10
  increment_10() {
    this.indice_imagen+=10;
  }

  decrement_10() {
    this.indice_imagen-=10;
  }

/////////
}
