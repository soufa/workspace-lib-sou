import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Device } from '../../../models/device';

@Component({
  selector: 'sc-device-switcher',
  templateUrl: './device-switcher.component.html',
  styleUrls: ['./device-switcher.component.css']
})
export class DeviceSwitcherComponent implements OnInit {
  @Output()
  selectedDevice: EventEmitter<string> = new EventEmitter();
  @Output()
  landscapeLayout: EventEmitter<boolean> = new EventEmitter();
  landscapeMode = false;
  currentDevice = Device.DESKTOP;
  constructor() { }

  ngOnInit() {
    this.selectedDevice.emit(this.currentDevice);
  }

  selectDevice(device) {
    this.currentDevice = device;
    this.selectedDevice.emit(device);
  }

  rotate() {
    this.landscapeMode = !this.landscapeMode;
    this.landscapeLayout.emit(this.landscapeMode);
  }

}
