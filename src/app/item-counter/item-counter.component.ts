import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-counter',
  templateUrl: './item-counter.component.html',
  styleUrls: ['./item-counter.component.css']
})
export class ItemCounterComponent implements OnInit {
  @Input() props:{filteredImgsCount?: number; imgsCount?: number;}={};

  constructor() { }

  ngOnInit(): void {
    console.log(this.props);
    
  }

}
