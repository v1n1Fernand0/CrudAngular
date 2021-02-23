import { HeaderData } from './../../components/templates/header/header-data.model';
import { HeaderService } from './../../components/templates/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService:HeaderService) {
    headerService.headerData = {
      title:'Cadastro de produtos',
      icon:'home',
      routerUrl:''
    }
   }

  ngOnInit(): void {
  }

}
