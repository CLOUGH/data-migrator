import { Component, OnInit, Input, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Mapping } from '../../electron/migrator/interfaces/mapping.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public table: string;
  public mapping: any;

  constructor(private _electronService: ElectronService, private _zone: NgZone, private _router: Router) { }

  ngOnInit() {
    // this.electronService.ipcRenderer.send('table.getMapping', { table: this.table });
    // this.mapping = { test: 'test' };
    // this.electronService.ipcRenderer.on('table.mapping', (event, args) => {
    //   this.zone.run(() => {
    //     this.mapping = args;
    //   });
    // });
  }

  updateMapping(mapping) {
  }

  save() {
    this._router.navigate(['']);
  }

}
