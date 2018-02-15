import { Component, OnInit, Input, NgZone } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Mapping } from '../../electron/migrator/interfaces/mapping.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() public table: string;
  public mapping: any;

  constructor(private electronService: ElectronService, private zone: NgZone) { }

  ngOnInit() {
    this.electronService.ipcRenderer.send('table.getMapping', { table: this.table });
    this.mapping = { test: 'test' };
    this.electronService.ipcRenderer.on('table.mapping', (event, args) => {
      this.zone.run(() => {
        this.mapping = args;
      });
    });
  }

  updateMapping(mapping) {
  }

}
