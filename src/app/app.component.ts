import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone:true,
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
  title = 'test';
  loading: boolean = true; // Flag to track loading state

  constructor(private titleService: Title) { }

  ngOnInit() {
    
  }


}
