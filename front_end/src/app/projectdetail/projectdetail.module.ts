import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProjectDetailRoutingModule } from './projectdetail-routing.module';
import { ProjectDetailComponent } from './projectdetail.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    ProjectDetailRoutingModule
  ],
  declarations: [ProjectDetailComponent]
})
export class ProjectDetailModule {}
