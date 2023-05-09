import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components

const routes: Routes = [
  { path: '', loadChildren: () => import(`./public/login.module`).then(m => m.LoginModule)},
  { path: 'principal', loadChildren: () => import(`./private/principal.module`).then(m => m.PrincipalModule) }
  // { path: 'ships', loadChildren: () => import(`./components/ships/ships.module`).then(m => m.ShipsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
