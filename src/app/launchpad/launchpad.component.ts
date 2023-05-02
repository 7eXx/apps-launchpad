import {
  AfterViewInit,
  Component,
  ElementRef, HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

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
export class LaunchpadComponent implements OnInit, AfterViewInit {
  @ViewChild('container') appsContainer: ElementRef | undefined;
  @ViewChild('toggleButton') toggleButton: ElementRef | undefined;
  @ViewChild('menuExpanded') menuExpanded: ElementRef | undefined;
  @Input() buttonClass = ''
  @Input() btnIconClass = '';
  @Input() backgroundColor = '#2f2f33';
  @Input() items: Item[] = [];
  isMenuOpen = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.composedPath().includes(this.toggleButton?.nativeElement)) {
        this.toggleOpenMenu();
        return;
      }

      if (!e.composedPath().includes(this.menuExpanded?.nativeElement)) {
        this.closeMenu();
      }
    });
  }

  ngAfterViewInit() {
    this.repositionMenu();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.repositionMenu();
  }

  private toggleOpenMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  private closeMenu() {
    this.isMenuOpen = false;
  }

  // reposition menu based if component is before or after middle of the screen
  private repositionMenu() {
    if (this.isLaunchpadOnLeftScreen()) {
      this.moveMenuTowardRight();
    } else {
      this.moveMenuTowardLeft();
    }
  }

  private isLaunchpadOnLeftScreen() {
    const rect = this.appsContainer?.nativeElement.getBoundingClientRect();

    return rect.left < (this.getViewWidth() / 2);
  }

  private getViewWidth() {
    return window.innerWidth || document.documentElement.clientWidth;
  }

  private moveMenuTowardRight() {
    if (this.menuExpanded) {
      this.menuExpanded.nativeElement.style.left = 0;
    }
  }

  private moveMenuTowardLeft() {
    if (this.menuExpanded) {
      this.menuExpanded.nativeElement.style.left = null;
    }
  }
}
