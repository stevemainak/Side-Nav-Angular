// import { Component, OnInit } from '@angular/core';
// import { UserService } from './auth/user.service'; // Assume you have an AuthService to manage authentication

// interface SideNavToggle {
//   screenWidth: number;
//   collapsed: boolean;
// }

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })

// export class AppComponent implements OnInit {
//   title = 'sidenav';

//   isSideNavCollapsed = false;
//   screenWidth = 0;
//   isAuthenticated = false;

//   constructor(private UserService: UserService) {}

//   ngOnInit() {
//     this.isAuthenticated = this.UserService.isAuthenticated;
//     // this.UserService.authStatusChanged.subscribe(status => {
//     //   console.log('Auth status changed:', status);
//     //   this.isAuthenticated = status;
//     // });
//   }

//   onToggleSideNav(data: SideNavToggle): void {
//     this.screenWidth = data.screenWidth;
//     this.isSideNavCollapsed = data.collapsed;
//   }
// }
import { Component, OnInit } from '@angular/core';
import { UserService } from './auth/user.service'; // Import UserService

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sidenav';

  isSideNavCollapsed = false;
  screenWidth = 0;
  isAuthenticated = false;

  // Inject UserService with correct variable name (camelCase)
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.isAuthenticated = this.userService.isAuthenticated;
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}

