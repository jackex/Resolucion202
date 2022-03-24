import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ComponentsComponent } from './components/components.component';
import { ComponentsModule } from './components/components.module';
import { PlantillasComponent } from './components/plantillas/plantillas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComponentsComponent,
    PlantillasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
