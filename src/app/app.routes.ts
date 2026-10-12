import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { PlatsComponent } from './components/plats/plats.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AdminComponent } from './components/admin/admin.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ChefInfoComponent } from './components/chef-info/chef-info.component';
import { PlatInfoComponent } from './components/plat-info/plat-info.component';
import { EditChefComponent } from './components/edit-chef/edit-chef.component';
import { SearchPlatsComponent } from './components/search-plats/search-plats.component';

export const routes: Routes = [
     {path: "", component: HomeComponent},
     {path: "login", component: LoginComponent},
     {path: "signup", component: SignupComponent},

     {path: "chefs", component: ChefsComponent},
     {path: "addchef", component: AddChefComponent},
     {path: 'chefInfo', component: ChefInfoComponent},
     {path: 'chefEdit', component: EditChefComponent},
    

     {path: "plats", component: PlatsComponent},
     {path: "addplat", component: AddPlatComponent},
     {path: 'platInfo', component: PlatInfoComponent},
     {path: 'searchplats', component: SearchPlatsComponent},
     
     
     {path: "admin", component: AdminComponent},
     {path: "blogs", component: BlogsComponent},


];
