import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { authCanActivate, authCanMatch } from "./auth/guards/auth.guard";
import { Error404PageComponent } from "./shared/pages/error404-page/error404-page.component";
import { publicCanActivate, publicCanMatch } from "./auth/guards/public.guard";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
    canActivate: [publicCanActivate],
    canMatch: [publicCanMatch],
  },
  {
    path: "heroes",
    loadChildren: () =>
      import("./heroes/heroes.module").then((m) => m.HeroesModule),
    canActivate: [authCanActivate],
    canMatch: [authCanMatch],
  },
  {
    path: "404",
    component: Error404PageComponent,
  },
  {
    path: "",
    redirectTo: "heroes",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "404",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
