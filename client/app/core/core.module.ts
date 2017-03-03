import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// CoreComponent
import { CoreComponent } from './core-component';

// Routing Module
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    CoreRoutingModule
  ],
  declarations: [
    CoreComponent
  ],
  exports: [
    CoreComponent
  ],
})

export class CoreModule {}