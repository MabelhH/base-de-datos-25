import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FarmaciaService } from 'src/app/servicio/farmacia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private userservice:FarmaciaService, private router:Router){}
   getlista(){
    this.userservice.getlista()
    .then( ()=> {
      this.router.navigate(['/lista']);
    } )
    .catch(error => console.log(error))
  } 

}