import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, pipe, throwError as observableThrowError } from 'rxjs';
import { Resolve, ActivatedRoute, Params, RouterStateSnapshot } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

import { Img } from './img';

@Injectable({
  providedIn: 'root'
})
export class ImgObjectArrayService {
  private imgList: Img[] = [];
  private filteredImgList: Subject<Img[]> = new Subject<Img[]>();
  private currentImg: Subject<Img> = new Subject<Img>();
  private configUrl = 'app/images';
  private favorite: boolean = false;
  private searchInput: string = '';

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute) {
  }

  getImages() {
    let self = this;

    return self.http
      .get<Img[]>(self.configUrl)
      .pipe(map(data => data), catchError(self.handleError));
  }

  setCurrentImgDetail(img:Img){
    let self = this;

    self.currentImg.next(img);
  }

  getCurrentImgDetail():Observable<Img>{
    let self = this;
    return self.currentImg.asObservable();
  }

  setFavorite() {
    let self = this;

    self.favorite = !self.favorite;
  }

  setSearchInput(searchInput: string) {
    let self = this;

    self.searchInput = searchInput;
  }

  filterImgList() {
    let self = this;
    switch (true) {
      case !self.favorite && !!self.searchInput:
        self.filteredImgList.next(self.imgList.filter(img => img.description.includes(self.searchInput) || img.title.includes(self.searchInput)));
        break;
      case self.favorite && !self.searchInput:
        self.filteredImgList.next(self.imgList.filter(img => img.favorite));
        break;
      case self.favorite && !!self.searchInput:
        self.filteredImgList.next(self.imgList.filter(img => (img.description.includes(self.searchInput) || img.title.includes(self.searchInput)) && img.favorite));
        break;
      default:
        self.getImages().toPromise().then(images => self.initializeImgLists(images));
        break;
    }
  }

  initializeImgLists(images: Img[]) {
    let self = this;

    self.imgList = images;
    self.filteredImgList.next(images);
  }

  getFilteredImgList(): Observable<Img[]> {
    let self = this;

    return self.filteredImgList.asObservable()
  }

  likeImg(img: Img) {
    let self = this;

    img.favorite = !img.favorite;
    return self.put(img);
  }

  getImageDetail(id: number) {
    let self = this;

    const url = `${self.configUrl}/${id}`;
    let call = self.http.get<Img>(url)
      .pipe(map(image => image));
    return call;
  }

  put(img: Img) {
    let self = this;

    const url = `${self.configUrl}/${img.id}`;

    let call = self.http.put<Img>(url, img, cudOptions).pipe(catchError(self.handleError));
    return call;
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
