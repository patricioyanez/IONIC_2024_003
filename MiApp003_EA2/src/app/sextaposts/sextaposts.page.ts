import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirestService } from '../sexta/apirest.service';

@Component({
  selector: 'app-sextaposts',
  templateUrl: './sextaposts.page.html',
  styleUrls: ['./sextaposts.page.scss'],
})
export class SextapostsPage implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
    private apirestService:ApirestService
  ) { }
  listado : any = [];
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(x=> {
      const id = x.get('id')??'';
      this.listarPost(id);
    })
  }
  async listarPost(id:string)
  {
    this.listado = await this.apirestService.getPostsByIdUser(id);
  }
}
