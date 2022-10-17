import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name?: string;
  basicCheck?: string;
  proCheck?: string;
  businessCheck?: string;
  feature: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    feature: 'UNLIMITED STORY POSTING',
    basicCheck: '../../../../../assets/pricing/desktop/check.svg',
    weight: 1.0079,
    symbol: 'H',
  },
  {
    feature: 'UNLIMITED PHOTO UPLOAD',
    basicCheck: '../../../../../assets/pricing/desktop/check.svg',
    weight: 4.0026,
    symbol: 'He',
  },
  {
    feature: 'EMBEDDING CUSTOM CONTENT',
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    proCheck: '../../../../../assets/pricing/desktop/check.svg',
  },
  {
    feature: 'CUSTOMIZE METADATA',
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    proCheck: '../../../../../assets/pricing/desktop/check.svg',
  },
  {
    feature: 'ADVANCED METRICS',
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    businessCheck: '../../../../../assets/pricing/desktop/check.svg',
  },

  {
    feature: 'PHOTO DOWNLOADS',
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    businessCheck: '../../../../../assets/pricing/desktop/check.svg',
  },
  {
    feature: 'SEARCH ENGINE INDEXING',
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    businessCheck: '../../../../../assets/pricing/desktop/check.svg',
  },
  {
    feature: 'CUSTOM ANALYTICS',
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    businessCheck: '../../../../../assets/pricing/desktop/check.svg',
  },
];

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss'],
})
export class CompareComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
