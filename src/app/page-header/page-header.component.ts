import { Component, OnInit, Input } from '@angular/core';
import { ImgObjectArrayService } from '../img-object-array.service';
import { Router, NavigationEnd } from '@angular/router'
import {Img}from '../img'

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  img: Img = new Img('', '', '', '', 0, false);
  favorite:boolean=false;
  constructor(
    private service: ImgObjectArrayService,
    private router: Router) { }

  ngOnInit(): void {
    let self = this;

    self.service.getCurrentImgDetail().subscribe(img => self.img = img);
  }

  navigateHome(){
    let self = this;

    self.router.navigate(['/']);
  }

  setDetailFavorite(){
    let self = this;

    self.service.likeImg(self.img).subscribe();
  }

  favoriteEvent() {
    let self = this;

    self.favorite =! self.favorite;
    self.service.setFavorite();
    self.service.filterImgList();
  }

  searchEvent(input: string) {
    let self = this;

    self.service.setSearchInput(input);
    self.service.filterImgList();
  }
}
