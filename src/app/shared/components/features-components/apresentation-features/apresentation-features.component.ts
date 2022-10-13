import { Component, OnInit } from '@angular/core';
import { slideInLeftOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-apresentation-features',
  templateUrl: './apresentation-features.component.html',
  styleUrls: ['./apresentation-features.component.scss'],
  animations: [slideInLeftOnEnterAnimation()],
})
export class ApresentationFeaturesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
