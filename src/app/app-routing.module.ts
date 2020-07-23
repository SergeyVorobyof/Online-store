import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';


import { SidebarComponent} from './sidebar';
import { TopBarComponent } from './top-bar';
import { ShoppingCartComponent } from './shopping-cart';
import { GoodAdditionComponent } from './good-addition';

const routes: Routes = [
    { path: '',  component: SidebarComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent},
    //{ path: 'shopping-list', component: SidebarComponent},
    { path: 'navbar', component: TopBarComponent},
    { path: 'shopping-cart', component: ShoppingCartComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' },

    {path: 'Modal', component: GoodAdditionComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }