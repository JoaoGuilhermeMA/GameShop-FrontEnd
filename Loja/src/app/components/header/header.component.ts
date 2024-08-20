import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html', 
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements AfterViewInit {
  public valorCarrinho = 0;

  private hideTimeout: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initDropdowns();
    }
  }

  private initDropdowns(): void {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      const toggle = dropdown.querySelector('.dropdown-toggle') as HTMLElement;
      const menu = dropdown.querySelector('.dropdown-menu') as HTMLElement;

      const showMenu = () => {
        clearTimeout(this.hideTimeout);
        menu.classList.add('show');
      };

      const hideMenu = () => {
        this.hideTimeout = setTimeout(() => {
          if (!toggle.matches(':hover') && !menu.matches(':hover')) {
            menu.classList.remove('show');
          }
        }, 40); 
      };

      const handleMouseMove = (event: MouseEvent) => {
        const rectToggle = toggle.getBoundingClientRect();
        const rectMenu = menu.getBoundingClientRect();

        const isOutside =
          event.clientX < rectToggle.left || event.clientX > rectToggle.right ||
          event.clientY < rectToggle.top || event.clientY > rectMenu.bottom ||
          (event.clientX < rectMenu.left && event.clientY > rectToggle.bottom);

        if (isOutside) {
          hideMenu();
        } else {
          clearTimeout(this.hideTimeout);
        }
      };

      toggle.addEventListener('mouseenter', showMenu);
      toggle.addEventListener('mouseleave', hideMenu);
      menu.addEventListener('mouseenter', showMenu);
      menu.addEventListener('mouseleave', hideMenu);
      document.addEventListener('mousemove', handleMouseMove);
    });
  }
}
