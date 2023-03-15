import { Component } from "@angular/core";
import { FlickService } from "../../core/services/flick.service";

import { ItemEventData } from "@nativescript/core";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  moduleId: module.id,
  selector: "ns-home",
  templateUrl: "home.component.html"
})
export class HomeComponent {
  flicks = this.flickService.getFlicks();

  constructor(
    private routerExtensions: RouterExtensions,
    private flickService: FlickService
  ) {}

  onFlickTap(args: ItemEventData): void {
    this.routerExtensions.navigate(["details", this.flicks[args.index].id]);
  }
}