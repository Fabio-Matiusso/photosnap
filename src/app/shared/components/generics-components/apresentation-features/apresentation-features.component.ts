import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideInLeftOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-apresentation-features',
  templateUrl: './apresentation-features.component.html',
  styleUrls: ['./apresentation-features.component.scss'],
  animations: [slideInLeftOnEnterAnimation()],
})
export class ApresentationFeaturesComponent implements OnInit {
  public currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = router.url;
  }

  ngOnInit(): void {}
}
