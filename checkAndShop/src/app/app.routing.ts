import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ItemComponent} from './item/item.component';

const appRoutes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path: 'item',
        component: ItemComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);