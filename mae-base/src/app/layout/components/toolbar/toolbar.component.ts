import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mae-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
}
