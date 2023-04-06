import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  (function(){

    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');

    var validarNombre = function(e){
        if (formulario.nombre.value == 0){
            alert("Completa el campo nombre");
            e.preventDefault();

        }
    };

    var validarRadio = function(e){
        if (formulario.sexo[0].checked == true ||
            formulario.sexo[1].checked == true ||
            formulario.sexo[2].checked == true){
        } else{
            alert("Completa el campo sexo");
            e.preventDefault();
        }
    };

    var validarEmail = function(e){
        if (formulario.email.value == 0){
            alert("Completa el campo Email");
            e.preventDefault();

        }
    };

    var validarTelefono = function(e){
        if (formulario.telefono.value == 0){
            alert("Completa el campo Telefono");
            e.preventDefault();

        }
    };

    var validarCheckbox = function(e){
        if (formulario.terminos.checked == false){
            alert("Acepta los términos y condiciones");
            e.preventDefault();
        }
    };

    var validar = function(e){
        validarNombre(e);
        validarRadio(e);
        validarEmail(e);
        validarTelefono(e);
        validarCheckbox(e);


    };
    formulario.addEventListener("submit", validar);
}())

}
