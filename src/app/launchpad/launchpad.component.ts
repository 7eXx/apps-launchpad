import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

export interface Item {
  name: string;
}

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: [ './launchpad.component.scss' ],
  encapsulation: ViewEncapsulation.Emulated
})
export class LaunchpadComponent implements OnInit {
  @Input() backgroundColor = '#2f2f33';
  @Input() items: Item[] = [];
  isHidden = true;

  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
  }

  onExpandMenuClick() {
    this.isHidden = !this.isHidden;
  }

}
