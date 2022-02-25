import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  signformGroup!: FormGroup;
  items!: Observable<any[]>;
  constructor(private fb: FormBuilder, private firestore: AngularFirestore, private authService : AuthServiceService) { }

  ngOnInit(): void {
    this.authService.dataUser()
    this.signformGroup = this.fb.group({
    /*   nom: ["koko", Validators.required], */
      email: ["", Validators.required],
      mdp: ["", Validators.required]
    })
  
  /*   this.items = this.firestore.collection('utilisateur').valueChanges();
    console.log('humm', this.items) */
    
  }
  get email() { return this.signformGroup.get('email') }
  register() {
    const { email, mdp } = this.signformGroup.value
    console.log('email', email, 'password', mdp, 'invalid', this.signformGroup.controls)
    if (this.signformGroup.invalid) {
      return;
    }
    this.authService.register(email, mdp)
  }
}
