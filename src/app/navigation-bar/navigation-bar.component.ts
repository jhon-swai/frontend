import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  links = ['Home', 'News', 'About', 'Stories', 'Recomendations'];
  activeLink = this.links[0];
  // background: ThemePalette = "primary";
  background: ThemePalette = undefined;

  constructor() { }

  ngOnInit() {
  }

}
