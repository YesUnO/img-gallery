export class Img {
    title: string;
	description: string;
	thumbnail: string;
	url: string;
	id: number;
    favorite: boolean;
	/**
	 *
	 */
	constructor(title:string,description:string,thumbnail: string,url: string,id: number,favorite: boolean) {
		this.title= title;
		this.description= description;
		this.thumbnail= thumbnail;
		this.url= url;
		this.id= id;
		this.favorite= favorite;
		
	}
}
