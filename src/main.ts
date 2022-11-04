// document.querySelector<HTMLDivElement>("#app")!.innerHTML = "Hello world";

import "@angular/compiler";
import "zone.js";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NgZone } from "@angular/core";

import "./styles.css";
import { appRouting } from "./app.routing";

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: NgZone,
      useValue: new NgZone({ shouldCoalesceEventChangeDetection: false }),
    },
    ...appRouting,
  ],
});
