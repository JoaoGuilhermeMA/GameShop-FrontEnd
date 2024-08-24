import { Component } from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    NgIf,
    CommonModule
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
