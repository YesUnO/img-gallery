import { Component, OnInit } from '@angular/core';
import { ImgObjectArrayService } from '../img-object-array.service'
import { Img } from '../img';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.css']
})
export class ImgListComponent implements OnInit {
  imgList: Img[] = [];
  filteredImgList: Img[] = [];
  showFavorites: Boolean = false;
  counterProps: { filteredImgsCount?: number, imgsCount?: number }={};

  constructor(
    private imgService: ImgObjectArrayService
  ) {}

  ngOnInit(): void {
    let self = this;

    self.imgService.setCurrentImgDetail(new Img('', '', '', '', 0, false));
    self.getImgLists();
  }

  getCounterProps(){
    let self = this;

    let filteredCount = self.filteredImgList.length;
    let allImgsCount = self.imgList.length;
    
    self.counterProps = {filteredImgsCount :filteredCount,imgsCount:allImgsCount}
  }

  getImgLists() {
    let self = this;

    self.imgService.getImages()
      .subscribe(images => self.proccessImgResponse(images));
    
    self.imgService.getFilteredImgList()
      .subscribe(filtered => self.proccessFilterResponse(filtered));
    self.imgService.filterImgList();
  }

  proccessImgResponse(images: Img[]) {
    let self = this;

    self.imgList = images;
  }

  proccessFilterResponse(filtered: Img[]) {
    let self = this;

    self.filteredImgList = filtered;
    self.getCounterProps();
  }

}
