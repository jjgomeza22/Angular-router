import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { onExit } from 'src/app/guards/exit.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements onExit {

  onExit () {
    const rta = confirm('logica desde component, si quieres salir?')
    return rta;
  }
}
