import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MigrationComponent } from './migration/migration.component';
import { TableComponent } from './table/table.component';
import { CreateTableComponent } from './create-table/create-table.component';
const routes: Routes = [
  {
    path: '',
    component: MigrationComponent
  },
  {
    path: 'table',
    component: TableComponent,
    resolve: {

    }
  },
  {
    path: 'table/create',
    component: CreateTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
