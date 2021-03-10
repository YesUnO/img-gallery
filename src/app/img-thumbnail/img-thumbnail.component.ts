import { Component, OnInit, Input } from '@angular/core';
import { ImgObjectArrayService } from '../img-object-array.service';
import { Router } from '@angular/router';
import { Img } from '../img';

@Component({
  selector: 'app-img-thumbnail',
  templateUrl: './img-thumbnail.component.html',
  styleUrls: ['./img-thumbnail.component.css']
})
export class ImgThumbnailComponent implements OnInit {
  @Input() img!: Img;
  constructor(
    private router: Router,
    private service: ImgObjectArrayService) { }

  ngOnInit(): void {
  }

  goToDetail(img: Img) {
    let self = this;
    
    const link = ['/detail', img.id];
    self.router.navigate(link);
  }

  likeImg(img:Img){
    let self = this;
    
    self.service.likeImg(img)
      .subscribe(response =>self.service.filterImgList());
  }
}
