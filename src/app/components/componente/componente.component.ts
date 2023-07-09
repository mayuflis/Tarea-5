import { Component } from '@angular/core';
import { Noticias } from 'src/app/interfaces/noticias.interface';
@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css'],
})
export class ComponenteComponent {
  arrayNoticias: Noticias[] = [];
  newNoticia: Noticias;
  miClase: string = 'seccionNoticias__cards';
  fecha: Date = new Date('1/1/1900');
  constructor() {
    this.newNoticia = {
      title: '',
      image: '',
      body: '',
      date: this.fecha,
    };
    this.arrayNoticias = [
      {
        title: 'Españoles por el mundo',
        image: 'http://via.placeholder.com/200x200',
        body: 'Programa que se acerca a destinos de todo el mundo a través de los españoles que han decidido instalarse en otro país. Estos nuevos emigrantes ofrecen su particular punto de vista sobre el país que los ha acogido y explican sus anécdotas sobre cómo son sus vidas allí.',
        date: new Date('1/12/2022'),
      },
      {
        title: 'Guerra de Ucrania',
        image: 'http://via.placeholder.com/200x200',
        body: 'Zelenski regresó de Turquía con el apoyo de Erdogan para que Ucrania entre en la OTAN y con cinco comandantes del regimiento Azov',
        date: new Date('2/05/2023'),
      },
    ];
  }

  mostrarinfo(): string {
    let lista = '';
    this.arrayNoticias.forEach((noticias) => {
      lista += `<div class="seccionNoticias__cards">
        <h2>${noticias.title}</h2>
        <img src="${noticias.image}"class="imagen">
        <p class="parrafo">${noticias.body}</p>
        <p class="parrafo">Fecha: ${noticias.date}</p>
        </div>`;
    });
    return lista;
  }

  guardarNoticia() {
    if (
      this.newNoticia.title !== '' &&
      this.newNoticia.image !== '' &&
      this.newNoticia.body !== '' &&
      this.newNoticia.date !== this.fecha
    ) {
      this.arrayNoticias.push(this.newNoticia);
      this.newNoticia = {
        title: '',
        image: '',
        body: '',
        date: this.fecha,
      };
    } else {
      alert('Es necesario rellenar todos los campos');
    }

  
  }
}
