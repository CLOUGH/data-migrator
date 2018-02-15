import { Component, OnInit, Input } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Mapping } from '../../electron/migrator/interfaces/mapping.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() public table: string;
  public mapping: Mapping;

  constructor(private electronService: ElectronService) { }

  ngOnInit() {
    console.log('reach');
    this.electronService.ipcRenderer.send('table.getMapping', { table: this.table });
    this.electronService.ipcRenderer.on('table.mapping', (event, args) => {
      console.log(args);
      this.mapping = args;
    });
  }

}
