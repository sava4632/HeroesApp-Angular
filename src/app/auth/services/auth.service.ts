import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../interfaces/user.interface";
import { Observable, catchError, map, of, tap } from "rxjs";
import { environments } from "../../../environments/environments";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private baseUrl = environments.baseUrl;
  private user?: User;

  constructor(private http: HttpClient) {}

  getCurrentUser(): User | undefined {
    if (!this.user) return undefined;
    // return this.user;
    // return { ...this.user };
    return structuredClone(this.user);
  }

  login(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap((user) => (this.user = user)),
      tap((user) =>
        localStorage.setItem("token", "DA334Jk4.pokm4oipj.nOI393ssf"),
      ),
    );
  }

  checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem("token")) return of(false);

    const token = localStorage.getItem("token");

    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap((user) => (this.user = user)),
      map((user) => !!user),
      catchError((err) => of(false)),
    );
  }

  logout() {
    this.user = undefined;
    localStorage.clear();
  }
}
