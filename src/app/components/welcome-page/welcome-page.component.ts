import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit{

  cursor : any;

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    this.cursor = document.querySelector('.cursor')
    document.addEventListener('mousemove', (e)=>{
      this.cursor.style.left = e.clientX + 'px';
      this.cursor.style.top = e.clientY + 'px';
    })
  }

  start(){
    this.router.navigate(['/quiz']);
  }
}
