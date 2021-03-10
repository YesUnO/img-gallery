import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Img } from '../img';
import { ImgObjectArrayService } from '../img-object-array.service';

@Component({
  selector: 'app-img-detail',
  templateUrl: './img-detail.component.html',
  styleUrls: ['./img-detail.component.css']
})
export class ImgDetailComponent implements OnInit {
  @Input() img: Img=new Img('','','','',0,false);
  constructor(
    private service: ImgObjectArrayService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let self = this;

    self.loadImgDetailOnInit();
  }

  loadImgDetailOnInit() {
    let self = this;

    self.route.params.forEach((params: Params) => {
      
      if (params['id'] !== undefined) {
        const id = params['id'];
        self.service.getImageDetail(id).subscribe(img => (self.proccessImg(img)));
      }
      else {
        self.img = new Img('','','','',0,false);
      }
    });
  }

  proccessImg(img:Img){
    let self = this;

    self.img = img;
    self.service.setCurrentImgDetail(img);
  }

}
