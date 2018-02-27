import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-migration',
  templateUrl: './migration.component.html',
  styleUrls: ['./migration.component.scss']
})
export class MigrationComponent implements OnInit {
  tables = new MatTableDataSource([
    { name: 'users', status: 'Waiting', phase: '1', selected: false },
    { name: 'account', status: 'Waiting', phase: '1', selected: false },
    { name: 'global_names', status: 'Waiting', phase: '1', selected: false },
  ]);
  columnsToDisplay = ['select', 'name', 'status', 'phase', 'actions'];

  constructor(private _electronService: ElectronService, private _router: Router) { }   // DI

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.tables.filter = filterValue;
  }

  getTableInfo(table) {
    this._electronService.ipcRenderer.send('table.openModal', { table: table, parent: this._electronService.remote.getCurrentWindow() });
  }

  newTable() {
    this._router.navigate(['table/create']);
  }

}
