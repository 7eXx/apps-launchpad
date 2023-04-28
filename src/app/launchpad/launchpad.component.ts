import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';

export interface Item {
  uri: string;
  iconClass?: string;
  iconImage: string;
  label: string;
}

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: [ './launchpad.component.scss' ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LaunchpadComponent implements OnInit {
  @ViewChild('toggleButton') toggleButton: ElementRef | undefined;
  @ViewChild('menuExpanded') menuExpanded: ElementRef | undefined;
  @Input() buttonClass = ''
  @Input() backgroundColor = '#2f2f33';
  @Input() items: Item[] = [];
  isMenuOpen = true;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.listen('document', 'click', (e: Event) => {
      if (this.toggleButton?.nativeElement.contains(e.target)) {
        this.isMenuOpen = !this.isMenuOpen;
        return;
      }

      if (!this.menuExpanded?.nativeElement.contains(e.target)) {
        this.isMenuOpen = false;
      }
    });
  }
}
