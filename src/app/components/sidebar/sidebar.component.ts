import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; // Importar MatIconModule

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @ViewChild('nav') nav: ElementRef | undefined;

  btn_menu_click() {
    if (this.nav) {
      this.nav.nativeElement.classList.toggle('compressed');
    }
  }
}
