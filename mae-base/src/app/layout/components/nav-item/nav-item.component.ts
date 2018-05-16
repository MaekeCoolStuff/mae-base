import { Component, Input, Output, EventEmitter } from '@angular/core';

export class NavItemComponent {
    @Input() icon = '';
    @Input() hint = '';
    @Input() routerLink: string | any[] = '/';
    @Output() navigate = new EventEmitter();
  }
  