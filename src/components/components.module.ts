import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu/side-menu';
import { SettingComponent } from './setting/setting';
import { AboutComponent } from './about/about';
import { FavoriteComponent } from './favorite/favorite';
import { ExampleListComponent } from './example-list/example-list';
import { ExampleDetailComponent } from './example-detail/example-detail';
@NgModule({
	declarations: [SideMenuComponent,
    SettingComponent,
    AboutComponent,
    FavoriteComponent,
    ExampleListComponent,
    ExampleDetailComponent],
	imports: [],
	exports: [SideMenuComponent,
    SettingComponent,
    AboutComponent,
    FavoriteComponent,
    ExampleListComponent,
    ExampleDetailComponent]
})
export class ComponentsModule {}
