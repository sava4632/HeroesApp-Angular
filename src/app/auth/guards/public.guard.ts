import { inject } from "@angular/core";

import {
  ActivatedRouteSnapshot,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  CanMatchFn,
  CanActivateFn,
  Router,
} from "@angular/router";
import { Observable, map, tap } from "rxjs";
import { AuthService } from "../services/auth.service";

const checkAuthStatus = (): boolean | Observable<boolean> => {
  const authService = inject(AuthService);

  const router = inject(Router);

  return authService.checkAuthentication().pipe(
    tap((isAuth) => console.log("isAuth", isAuth)),
    tap((isAuth) => {
      if (isAuth) router.navigate(["./"]);
    }),
    map((isAuth) => (isAuth = !isAuth)),
  );
};

export const publicCanActivate: CanActivateFn = (route, state) => {
  return checkAuthStatus();
};

export const publicCanMatch: CanMatchFn = (
  route,
  urlSegments: UrlSegment[],
) => {
  return checkAuthStatus();
};
