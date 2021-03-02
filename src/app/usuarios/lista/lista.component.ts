import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
  ]
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor( private usuarioService: UsuarioService ) { }

  ngOnInit(): void {
    this.usuarioService.getUser().subscribe(
      users => {
        this.usuarios = users;
        console.log(this.usuarios);
        
      }
    );
  }

}
