import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './containers/app/app.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';

export const COMPONENTS = [
    AppComponent,
    NotFoundPageComponent,
    LayoutComponent,
    NavItemComponent,
    SidenavComponent,
    ToolbarComponent
];

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class LayoutModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: LayoutModule,
            providers: []
        }
    }
}