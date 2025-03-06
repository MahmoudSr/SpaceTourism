import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { CrewComponent } from './crew/crew.component';
import { TechnologyComponent } from './technology/technology.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'destination',
    component: DestinationComponent,
  },
  {
    path: 'crew',
    component: CrewComponent,
  },
  {
    path: 'technology',
    component: TechnologyComponent,
  },
];
