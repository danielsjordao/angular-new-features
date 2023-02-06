import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Components
import { HomeComponent } from './pages/components/home/home.component';
import { AboutComponent } from './pages/components/about/about.component';

const routes: Routes = [{
  path:'',
  component: HomeComponent,
  title: "Home",
  },
  {
    path:'About/:id',
    component: AboutComponent,
    title: "About",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
