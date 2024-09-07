// import { Injectable, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';
// import { Router } from '@angular/router';

// @Injectable()
// export class UserService implements OnInit{


//   isAuthenticated: boolean = false;

//   constructor(private http: HttpClient, private router: Router) { }

//   registerNewUser(userData: any): Observable<any> {
//     return this.http.post('http://127.0.0.1:8000/api/auth/register', userData)
//       .pipe(
//         tap(() => {
//           this.router.navigate(['login']);
//         })
//       );
//   }

//   loginUser(userData: any): Observable<any> {
//     return this.http.post('http://127.0.0.1:8000/api/auth/login', userData)
//     .pipe(
//       tap(() => {
//         this.isAuthenticated = true;
//       })
//     );
//   }

//   ngOnInit(): void {
//   }

// }

// // import { Injectable } from '@angular/core';
// // // import { HttpClient, HttpHeaders } from '@angular/common/http';
// // import { HttpClient } from '@angular/common/http';
// // import { Observable, BehaviorSubject } from 'rxjs';
// // import { tap } from 'rxjs/operators';
// // import { Router } from '@angular/router';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class UserService {

// //   // Observable to notify about authentication status changes
// //   private authStatus = new BehaviorSubject<boolean>(false);
// //   authStatusChanged = this.authStatus.asObservable();

// //   // This property indicates whether the user is currently authenticated
// //   get isAuthenticated(): boolean {
// //     return this.authStatus.value;
// //   }

// //   constructor(private http: HttpClient, private router: Router) { }

// //   registerNewUser(userData: any): Observable<any> {
// //     return this.http.post('http://127.0.0.1:8000/api/auth/register', userData)
// //       .pipe(
// //         tap(() => {
// //           this.router.navigate(['login']);
// //         })
// //       );
// //   }

// //   loginUser(userData: any): Observable<any> {
// //     return this.http.post('http://127.0.0.1:8000/api/auth/login', userData)
// //     .pipe(
// //       tap(() => {
// //         console.log('Login successful');
// //         this.authStatus.next(true); 
// //         this.router.navigate((['dashboard']));
// //       })
// //     );
// //   }
  
// // }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root' // Provide the service globally
})
export class UserService {

  isAuthenticated: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  registerNewUser(userData: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', userData)
      .pipe(
        tap(() => {
          this.router.navigate(['login']);
        })
      );
  }

  loginUser(userData: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/login', userData)
    .pipe(
      tap(() => {
        this.isAuthenticated = true;
      })
    );
  }
}
