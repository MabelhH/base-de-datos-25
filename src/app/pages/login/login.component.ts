import { Component } from '@angular/core';
import { FarmaciaService } from 'src/app/servicio/farmacia.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin!:FormGroup;

  constructor(
    private farmaciaservice:FarmaciaService,
    private router:Router
    )
    {
      this.formLogin = new FormGroup({
        email: new FormControl(),
        password: new FormControl(),
      }) 
    }
 
  ngOnInit(): void {
    
  }
  onSubmit(){
    //console.log(this.formLogin.value)
    this.farmaciaservice.loginuser(this.formLogin.value)
    .then(
      response =>{
      console.log(response)
      this.router.navigate(['/home']);

      }
    )
    .catch(error=> console.log(error)
    )
  }
  
  
}
