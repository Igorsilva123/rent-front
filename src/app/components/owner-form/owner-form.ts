import { Component } from '@angular/core';
import { OwnerDataRegistration } from '../../models/owner.model';
import { OwnerService } from '../../services/owner.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-owner-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './owner-form.html',
  styleUrl: './owner-form.css'
})
export class OwnerForm {
   owner: OwnerDataRegistration = {name: '', email: '', password: '', phone: ''}
  constructor(private ownerService: OwnerService){} 

  onSubmit(){
      this.ownerService.createOwner(this.owner).subscribe();
      console.log("Registrado com Sucesso");
    }
}
