import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BaseComponent } from '../base.component';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-prihlasenie',
  templateUrl: './prihlasenie.component.html',
  styleUrls: ['./prihlasenie.component.scss']
})
export class PrihlasenieComponent extends BaseComponent implements OnInit {
  formular: FormGroup;
  submitnuty: boolean;

  constructor(
    protected fb: FormBuilder,
    protected router: Router,
    protected dataService: DataService
  ) {
    super(router, dataService);
    this.setTitle(null, null);

    this.formular = this.fb.group(
      {
        email: [
          null,
          [
            Validators.required,
          ]
        ],
        heslo: [
          null,
          [
            Validators.required,
          ]
        ]
      }
    );
  }

  ngOnInit() {
   this.initData();
  }

  get f() {
    return this.formular.controls;
  }

  protected getData(): any {
    return '';
  }

  prihlasit() {
    this.submitnuty = true;
    if (this.formular.valid) {
      this.log('prihlasujem...');
      this.dataService.prihlasenie(this.f.email.value, this.f.heslo.value).then(() => {
        this.router.navigate(['/menu']);
      });
    }
  }

  obnovitHeslo(): void {
    this.router.navigate(['/heslo/obnova']);
  }
}