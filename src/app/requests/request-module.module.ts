import {NgModule} from '@angular/core';

import {PostItemComponent} from "./components/post-item/post-item.component";
import {PostListComponent} from "./components/post-list/post-list.component";
import {RequestRoutingModule} from "./request-routing.module";
import {PostService} from "./services/post.service";
import {HttpClientModule} from "@angular/common/http";
import {AsyncPipe} from "@angular/common";

@NgModule({
    imports: [RequestRoutingModule, HttpClientModule, AsyncPipe],
    exports: [],
    declarations: [PostItemComponent, PostListComponent],
    providers: [PostService],
})
export class RequestModule {
}
