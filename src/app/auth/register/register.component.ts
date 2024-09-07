// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserService } from '../user.service';
// // import { userInfo } from 'os';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css'],
//   providers: [UserService]
// })
// export class RegisterComponent implements OnInit{

//   // constructor(private router: Router) {}

//   // register(name: string, email: string, username: string, password: string, confirmPassword: string): void {
//   //   if (password !== confirmPassword) {
//   //     alert('Passwords do not match');
//   //     return;
//   //   }

//   //   // Perform your registration logic here (e.g., API call)

//   //   // After successful registration
//   //   alert('Registration successful!');
//   //   this.router.navigate(['/login']);
//   // }

//   constructor (private userService: UserService) {}

//   register:any
//   ngOnInit(): void {
//     this.register = {
//       username: '',
//       email: '',
//       password: ''

//     };
//   }
//   registerUser(): void {
//     console.log(this.register)
//     this.userService.registerNewUser(this.register).subscribe(
//       response => {
//         alert('User ' + this.register.username + ' has been created!')
//       },
//       error => console.log('error', error)
//     );
//   }

// }
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Ensure correct path

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  register: any = {}; // Initialize the register object

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.register = {
      username: '',
      email: '',
      password: ''
    };
  }

  registerUser(): void {
    this.userService.registerNewUser(this.register).subscribe(
      response => {
        alert('User ' + this.register.username + ' has been created!');
      },
      error => {
        console.log('error', error);
      }
    );
  }
}
