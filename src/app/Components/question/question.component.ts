import { Component, OnInit } from '@angular/core';
import { QuestionsServiceService } from 'src/app/Service/questions-service.service';
import {Router} from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public questions: any[] = [];
  public questions2: any[] = [];
  public Posibes_respuestas: any[] = [];
  public btn_Real : any[] = [];
  public Categorias: string = '';
  public Preguntas: string = '';
  pregunta : any;
  public Respuesta: string = '';
  public Incorrecta1: string = '';
  public Incorrecta2: string = '';
  public Incorrecta3: string = '';

  npreguntas: any[] = [];


  mostrar_pantalla_juego_términado = true;
  reiniciar_puntos_al_reiniciar_el_juego = true;

  preguntas_hechas = 0;
  preguntas_correctas = 0;
  constructor(private questionservices: QuestionsServiceService, private router: Router) { }

  ngOnInit(): void {
    this.reiniciar_btn();

  }

  public elegirpreguntaRamdom(){



if(this.questions.length = 0){
    this.elegirPreegunta(Math.floor(Math.random()*this.questions.length))
    this.preguntas_hechas++;
}else{
  this.elegirPreegunta(Math.floor(Math.random()* 18))
  this.preguntas_hechas++;
}

  }



  public elegirPreegunta(id : any){

  this.questionservices.getquestions().subscribe((resp: any) =>{
  this.questions.push(resp[id]);
  this.questions2.push(resp);




let pc = this.preguntas_correctas;

if (this.preguntas_hechas > 1){
  this.select_id("puntaje")!.innerHTML = pc + "/" + (this.preguntas_hechas - 1);
}else{
  this.select_id("puntaje")!.innerHTML = "";
}
if(this.preguntas_hechas == 11){
  if(this.preguntas_correctas >= 7){
    Swal.fire({
      title: 'Mas despacio Velocista',
      text:
      "Puntuación: " + this.preguntas_correctas + "/" + (this.preguntas_hechas - 1),
    icon: "success",
      width: 600,
      padding: '3em',
      color: '#716add',
      backdrop: `
        rgba(0,0,123,0.4)

      `
    })
    this.enviar_puntaje();
  }else if(this.preguntas_correctas >=4 || this.preguntas_correctas >=6){
    Swal.fire({
      title: 'Nos falta pero no tanto',
      text:
      "Puntuación: " + this.preguntas_correctas + "/" + (this.preguntas_hechas - 1),
    icon: "warning",
      width: 600,
      padding: '3em',
      color: '#716add',
      backdrop: `
        rgba(0,0,123,0.4)

      `
    })
    this.enviar_puntaje();
  }else if (this.preguntas_correctas >= 0 || this.preguntas_correctas >=3){
    Swal.fire({
      title: 'Te falta historia',
      text:
      "Puntuación: " + this.preguntas_correctas + "/" + (this.preguntas_hechas - 1),
    icon: "error",
      width: 600,
      padding: '3em',
      color: '#716add',
      backdrop: `
        rgba(0,0,123,0.4)

      `
    })
    this.enviar_puntaje();
  }


}
this.select_id("numero")!.innerHTML = id;

  this.pregunta = this.questions;

  this.asignaccion();

  });



  }




  public asignaccion(){
    this.Categorias = this.questions[0].Categoria;
    this.Preguntas = this.questions[0].Pregunta;

    this.select_id("imagen")?.setAttribute("src", this.questions[0].imagen)

    this.Posibes_respuestas = [
      this.pregunta[0].Respuesta,
      this.pregunta[0].Incorrecta1,
      this.pregunta[0].Incorrecta2,
      this.pregunta[0].Incorrecta3,
  ]
this.Posibes_respuestas.sort(() => Math.random()-0.5)

    this.Respuesta = this.Posibes_respuestas[0],
    this.Incorrecta1= this.Posibes_respuestas[1],
    this.Incorrecta2= this.Posibes_respuestas[2],
    this.Incorrecta3= this.Posibes_respuestas[3]

  }

  suspender_botones = false;




  public Seleccionar_boton(id : any){
this.btn_Real
.push(this.select_id("btn1"), this.select_id("btn2"), this.select_id("btn3"), this.select_id("btn4"))
if (this.suspender_botones) {
  return;
}
this.suspender_botones = true;
  if(this.Posibes_respuestas[id]== this.questions[0].Respuesta){
    this.preguntas_correctas++;
  this.btn_Real[id]!.style.backgroundColor = 'lightgreen'

  }else{
    this.btn_Real[id]!.style.background = 'pink';
  }
  for(let j = 0; j < 4; j++){
    if(this.Posibes_respuestas[j] == this.questions[0].Respuesta){
      this.btn_Real[j].style.backgroundColor = 'lightgreen';
      break;
    }
  }
  setTimeout(()=> {
    this.reiniciar_btn();
    this.suspender_botones = false;
  }, 2000);

  }

  public reiniciar_btn(){
    for (let btn of this.btn_Real) {
      btn.style.background = 'darkgray';

    }
    this.elegirpreguntaRamdom()
  }

  public select_id(id: string){
    return document.getElementById(id);
  }

  public style(id: string){
    return this.select_id(id)?.style
  }

  public enviar_puntaje(){
    this.router.navigate(['main'])

  }


}
