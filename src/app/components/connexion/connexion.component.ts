import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  loginForm!:FormGroup
  items!: Observable<any[]>;
  constructor(private fb: FormBuilder, private authService :AuthServiceService) {
    
   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      mdp: ["", Validators.required]
    })
  }
  get f() {
    return this.loginForm.controls;
  }
  sign() {
    const { email, mdp } = this.loginForm.value
    console.log('email', email, 'password', mdp)
    this.authService.login(email, mdp)
  }
}
