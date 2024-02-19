import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { title } from 'process';
import { Blog } from './blog';

export const routes: Routes = [
    {
        path:'',pathMatch:'full',redirectTo:'some_blogs/welcome'
      },
      { path: ':repo/:directory/:file', component: Blog  },
      {
        path: ':repo/:file', component :Blog 
      },
      {
        path: ':repo/:directory/:directory2/:file', component :Blog, 
      },
      {
        path:':repo',redirectTo:':repo/readme'
      }
];
