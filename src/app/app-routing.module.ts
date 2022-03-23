import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GenerationsComponent} from "./components/generations/generations.component";
import {PokemonsComponent} from "./components/pokemons/pokemons.component";
import {HomeComponent} from "./components/home/home.component";
import {SigninComponent} from "./components/signin/signin.component";
import {SignupComponent} from "./components/signup/signup.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'generations', component: GenerationsComponent},
  {path: 'pokemons', component: PokemonsComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
