import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from 'ngx-electron';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.scss']
})
export class CreateTableComponent implements OnInit {
  mapping: any;

  constructor(private _router: Router, private _electronService: ElectronService, private _zone: NgZone) { }

  ngOnInit() {
  }

  save() {
    this._router.navigate(['']);
  }
  uploadTemplate() {
    const selectedFile = this._electronService.remote.dialog.showOpenDialog({
      properties: ['openFile', 'openDirectory']
    });

    this._electronService.ipcRenderer.send('table.generateNewMapping', { selectedFile: selectedFile[0] });

    this._electronService.ipcRenderer.on('table.parseMapping', (event, args) => {
      this._zone.run(() => {
        this.mapping = args;
      });
    });
  }
}
