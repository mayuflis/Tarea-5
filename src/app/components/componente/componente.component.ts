import { Component } from '@angular/core';
import { Noticias } from 'src/app/interfaces/noticias.interface';
@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent {

arrayNoticias:Noticias[]=[];
newNoticia:Noticias ;
fecha:Date=new Date("1/1/1900");
  constructor(){
   this.newNoticia={
    title:"",
    image:"",
    body:"",
    date: this.fecha
   }
    this.arrayNoticias=[
      {
        title:"Españoles por el mundo",
        image:"http://via.placeholder.com/200x200",
        body:"jkfljkdfjkasljkljdfsld",
        date: new Date("1/12/2022")
      },
      {
        title:"Guerra de Ucrania",
        image:"http://via.placeholder.com/200x200",
        body:"jkfljkdfjkasljkljdfsld",
        date: new Date("2/05/2023")
      }]
    
  }

  mostrarinfo():string{

    let lista=""
    this.arrayNoticias.forEach(noticias=>{
      lista+=`<div class="seccionNoticias__cards">
        <h2>${noticias.title}</h2>
        <img src="${noticias.image}"class="imagen">
        <p class="cuerpo">${noticias.body}</p>
        <p>Fecha: ${noticias.date}</p>
        </div>`
    })
    return lista;
  }

  guardarNoticia(){

    let fecha= new Date("1/1/1900").getFullYear();
    if(this.newNoticia.title!=="" && this.newNoticia.image!=="" &&this.newNoticia.body!=="" && this.newNoticia.date!==this.fecha){
      this.arrayNoticias.push(this.newNoticia);
    this.newNoticia={
      title:"",
      image:"",
      body:"",
      date: new Date("1/1/1900")
     }
    }else{
      alert("Es necesario rellenar todos los campos")
    }
    
    console.log(this.newNoticia)
  }
}
