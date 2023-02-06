import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

//Router
import { AppRoutingModule } from './app/app-routing.module';

//Component
import { AppComponent } from './app/app.component';


  bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(AppRoutingModule)
    ]
    }).catch(err => console.error(err));
