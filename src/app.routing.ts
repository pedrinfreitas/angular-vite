import { Route, provideRouter } from "@angular/router";
const routes: Route[] = [
  {
    path: "",
    loadComponent: () =>
      import("./pages/home/home.component").then((c) => c.HomeComponent),
  },
  {
    path: "about",
    loadComponent: (): any =>
      import("./pages/about/about.component").then((c) => c.AboutComponent),
  },
];
export const appRouting = [provideRouter(routes)];
