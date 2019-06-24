import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './blog.component';
import {AvatarModule} from './avatar/avatar.module';
import {BlogNavComponent} from './blog-nav/blog-nav.component';
import {PersonalStatusComponent} from './personal-status/personal-status.component';

@NgModule({
  declarations: [BlogComponent, BlogNavComponent, PersonalStatusComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    AvatarModule
  ]
})
export class BlogModule {
}
