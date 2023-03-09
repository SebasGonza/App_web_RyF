import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUsersComponent } from './create-users/create-users.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create-user',
        component: CreateUsersComponent
      },
      {
        path: 'admin-user',
        component: AdminUserComponent
      },
      {
        path: 'edit-user',
        component: EditUserComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
