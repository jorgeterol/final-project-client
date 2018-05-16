import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-overview',
  templateUrl: './show-overview.component.html',
  styleUrls: ['./show-overview.component.scss']
})
export class ShowOverviewComponent implements OnInit {

  @Input() show: any;

  constructor() { }

  ngOnInit() {
  }

}
