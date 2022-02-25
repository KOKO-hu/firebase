import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { from } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  [x: string]: any;
  constructor(private angularFireAuth: AngularFireAuth, private firestore: AngularFirestore, private route:Router,) { }
  
 login(nom : string , mdp: string) {
   this.angularFireAuth.signInWithEmailAndPassword(nom, mdp).then(() => {
   
     console.log("success")
     this.route.navigate(['/home'])
     const token = true
     localStorage.setItem('token', `${token}`)
     console.log("token",token)
     return token;
   }, err => {
     const token1=false
     console.log("errur", token1)
     return token1
     alert('alerte')
     this.route.navigate(['/connexion'])
   })
 }
 
  register(email:string, mdp:string) {
    const fire = this.angularFireAuth.createUserWithEmailAndPassword(email, mdp).then(() => {
     console.log("dddd",fire ,'email', email ,"mdp",mdp)
      alert("succes")
     this.route.navigate([''])
    }, err => {
      alert('alerte')
      this.route.navigate(['/connexion'])
   })
  }

  lagout() {
    this.angularFireAuth.signOut().then(() => {
      localStorage.removeItem('token')
      this.route.navigate(['/connexion'])
    }, err => {
      alert('alerte')
      this.route.navigate(['/connexion'])
    })
  }
  dataUser() {
    
    const data=this.firestore
      .collection("utilisateur").snapshotChanges()
     console.log('toto',data)
  }
}
