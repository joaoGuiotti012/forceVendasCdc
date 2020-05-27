import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { DataTableComponent } from '../../data-table/data-table.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
 
import { ForgetPasswordComponent } from 'app/components/auth/forget-password/forget-password.component';
import { LoginComponent } from 'app/components/auth/login/login.component';
import { PedidoComponent } from 'app/pedido/pedido.component';
import { ClienteComponent } from 'app/cliente/cliente.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }

    { path: 'forget-password' ,   component: ForgetPasswordComponent },
    { path: 'login' ,         component: LoginComponent },
    { path: 'dashboard',      component: DashboardComponent     },
    { path: 'pedido',    component: PedidoComponent    },
    { path: 'cliente',    component: ClienteComponent    },
    { path: 'table-list',     component: DataTableComponent     },
    { path: 'typography',     component: TypographyComponent    },
    { path: 'icons',          component: IconsComponent         },
    { path: 'maps',           component: MapsComponent          },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent       },
];
