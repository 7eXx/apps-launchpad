import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: [ './launchpad.component.scss' ],
  encapsulation: ViewEncapsulation.Emulated
})
export class LaunchpadComponent implements OnInit {
  @Input() backgroundColor = '#2f2f33';
  isHidden = true;

  constructor() { }

  ngOnInit(): void {
  }

  onExpandMenuClick() {
    this.isHidden = !this.isHidden;
  }

}
