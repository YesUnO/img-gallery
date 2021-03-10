import { Img } from './img';

describe('Img', (title:string,description:string,thumbnail: string,url: string,id: number,favorite: boolean) => {
  it('should create an instance', (title:string,description:string,thumbnail: string,url: string,id: number,favorite: boolean) => {
    expect(new Img(title,description,thumbnail,url,id,favorite)).toBeTruthy();
  });
});
