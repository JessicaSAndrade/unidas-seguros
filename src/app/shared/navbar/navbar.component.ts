import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.putEvents();
  }

  putEvents() {
    const menuDesktop = document.getElementById('desktop-menu');
    const navBarToggle = document.getElementById('toggle-action');
    // tslint:disable-next-line: only-arrow-functions
    navBarToggle.addEventListener('click', function () {
      menuDesktop.classList.toggle('active');
    });
  }

  @HostListener('window:scroll') onScroll() {
    this.scrollFunction();
    console.log('scrolando');
  }


  scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById("navbar").classList.add('navbar-color')
      // document.getElementById("logo").style.fontSize = "25px";
    } else {
      document.getElementById("navbar").classList.add('navbar');
      document.getElementById("navbar").classList.remove('navbar-color');
    }
  }

}
