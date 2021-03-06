import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BaseComponent } from '../base.component';
import { DataService } from '../services/data.service';
import { Ucastnik } from '../domain/ucastnik';

@Component({
  selector: 'app-ucastnici',
  templateUrl: './ucastnici.component.html',
  styleUrls: ['./ucastnici.component.scss']
})
export class UcastniciComponent extends BaseComponent implements OnInit {
  ucastnici: Ucastnik[];

  constructor(protected router: Router, protected dataService: DataService) {
    super(router, dataService);
    this.setTitle('Účastníci', 'green');
  }

  ngOnInit() {
    this.getData();
  }

  protected getData() {
    this.ucastnici = this.dataService.ucastnici;
  }

  protected performDelete(ucastnik: Ucastnik): Promise<void> {
    return this.dataService.deleteUcastnik(ucastnik);
  }
}
