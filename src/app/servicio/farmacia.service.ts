import { Injectable } from '@angular/core';
import{Auth ,signInWithEmailAndPassword,signOut} from '@angular/fire/auth';
import { collectionData, deleteDoc, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc } from 'firebase/firestore';
import { Observable, Observer } from 'rxjs';
import { farmacia } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {

  constructor(private auth:Auth , private firestore:Firestore ) { }

  
  loginuser({email,password}:any){
     return signInWithEmailAndPassword(this.auth,email,password);
   }

   addProduct(farmacia:farmacia){
     const farmaciaRef = collection(this.firestore, 'farmacia02');
   return addDoc(farmaciaRef, farmacia)    
   }


  getFacrmacia():Observable<farmacia[]>{
    const farmaciaRef = collection(this.firestore, 'farmacia02');
    return collectionData(farmaciaRef, {idField:'id'}) as Observable<farmacia[]>
  }


  deletedFarmacia(farmacia:farmacia){
     const farmaciaRef = doc(this.firestore, `farmacia02/${farmacia.id}`)
     return deleteDoc(farmaciaRef);
   }

  getlista(){
    return signOut(this.auth);
  } 

}
