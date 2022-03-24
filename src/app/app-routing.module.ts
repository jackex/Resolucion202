import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { PlantillasComponent } from './components/plantillas/plantillas.component';

const routes: Routes = [{path: 'Validador202', component: ComponentsComponent},
                        {path: 'PlantillasExcel', component: PlantillasComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
