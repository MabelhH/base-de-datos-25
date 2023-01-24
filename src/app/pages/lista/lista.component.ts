import { Component ,OnInit } from '@angular/core';
import { farmacia } from 'src/app/interfaces/interface';
import { FarmaciaService } from 'src/app/servicio/farmacia.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  
  farmacia!:farmacia[];


  constructor( private farmaServices:FarmaciaService){



  }

  ngOnInit(): void {
    
    this.farmaServices.getFacrmacia().subscribe(Farmacia => {
     this.farmacia = Farmacia
    }) 

  }


  onClickDelete(farmacia : farmacia){
    const response = this.farmaServices.deletedFarmacia(farmacia)
    console.log(response)
  }
}
