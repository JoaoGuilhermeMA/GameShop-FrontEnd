import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']  // Corrigido para "styleUrls"
})
export class AdminComponent {
  activeSection: string = '';

  showSection(section: string) {
    this.activeSection = section;
  }
}
