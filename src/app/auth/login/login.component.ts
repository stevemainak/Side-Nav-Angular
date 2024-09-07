// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';
// import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css',
//   providers: [UserService]
// })
// export class LoginComponent implements OnInit{
//   private unsubscribe : Subscription[] = []

//  constructor(private userService: UserService, private router: Router){};
// login:any
//  ngOnInit(): void {
//    this.login = {
//     username: '',
//     email: '',
//     password: ''

//   };
//  }
//  logUser() {            

//   const logInSubscription = this.userService.loginUser(this.login)
//   .subscribe({
//     next: (response:any) => {
//       console.log(response);
//       let token = response['token']
//       localStorage.setItem('token', token)
//       // localStorage.setItem('token', response.token);
//       this.router.navigate(['/dashboard']);
//       },
//       error(err) {
//         console.log(err)
//       },
//       complete:() =>{
//         this.router.navigate(['/dashboard']);
//         console.log('complete')
//       }
        
//   })
//   this.unsubscribe.push(logInSubscription)
//   // this.router.navigate(['/dashboard']);
//   // this.userService.loginUser(this.login).subscribe(
//   //   response => {
//   //     // alert('User ' + this.login.username + ' logged!')
//   //     console.log(response)
//   //     console.log(this.userService.isAuthenticated)
//   //     if (this.userService.isAuthenticated) {
//   //     this.router.navigate(['/dashboard']);
//   //     }
//   //   },
//   //   error => console.log('error', error)
//   // );
// }

// }

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private unsubscribe: Subscription[] = [];
  login: any = {}; // Initialize login object

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.login = {
      username: '',
      email: '',
      password: ''
    };
  }

  logUser() {
    const logInSubscription = this.userService.loginUser(this.login).subscribe({
      next: (response: any) => {
        console.log(response);
        const token = response['token'];
        localStorage.setItem('token', token);
        this.router.navigate(['/dashboard']); // Navigate to dashboard on success
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Login complete');
      }
    });

    this.unsubscribe.push(logInSubscription);
  }
}
