import { Component, signal} from '@angular/core';

import { OwnerForm } from './components/owner-form/owner-form';


@Component({
  selector: 'app-root',
  imports: [OwnerForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aluguel-front');
}
