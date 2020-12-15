import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';

const routes: Routes =
 [ {path:'',redirectTo:'home',pathMatch:'full'},
   {path:'home',component:HomeComponent},
   {path:'women',component:WomenComponent},
   {path:'men',component:MenComponent},
   {path:'kids',component:KidsComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
