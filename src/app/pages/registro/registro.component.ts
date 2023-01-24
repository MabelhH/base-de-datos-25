import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FarmaciaService } from 'src/app/servicio/farmacia.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  formRegister!:FormGroup;

  constructor(private farmaciaService:FarmaciaService){
    this.formRegister = new FormGroup({
      producto: new FormControl(),
      costo: new FormControl(),
      foto: new FormControl()
    })
  }
  
    ngOnInit(): void {
      
    }
      registrar(){
      console.log(this.formRegister.value)
       const response = this.farmaciaService.addProduct(this.formRegister.value)
       console.log(response)
  }
    
}
