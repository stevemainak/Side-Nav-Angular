// import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router';
// import { UserService } from './user.service';


// @Injectable({
//   providedIn: 'root',
// })

// export class authGuard implements CanActivate{

//   constructor(private UserService: UserService){}
//   canActivate(){
//     return this.UserService.isAuthenticated;
//   }
  
// };
// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { UserService } from './user.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   token = localStorage.getItem('token')
//   constructor(private UserService: UserService, private router: Router) {}

//   canActivate(): boolean {
//     console.log('is authenticated',this.UserService.isAuthenticated)
//     if(this.token){
//       return true 
//     }
//    else {
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
