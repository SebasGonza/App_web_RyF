import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { CreateUsersComponent } from './create-users/create-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AdminUserComponent } from './admin-user/admin-user.component';



@NgModule({
    declarations: [
        CreateUsersComponent,
        EditUserComponent,
        AdminUserComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        CreateUsersComponent,
    ]
})
export class UserModule { }
