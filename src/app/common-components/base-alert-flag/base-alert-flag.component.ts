import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-alert-flag',
  templateUrl: './base-alert-flag.component.html',
  styleUrls: ['./base-alert-flag.component.less']
})
export class BaseAlertFlagComponent {
  @Input() activated = true;
  @Input() type:
    | string
    | 'news'
    | 'informative'
    | 'warning'
    | 'positive'
    | 'negative' = 'news';
  @Input() list: Array<string> = [];

  textColors = {
    news: '#0073E6',
    informative: '#333333',
    warning: '#FF821E',
    positive: '#0CAF40',
    negative: '#E60A32'
  };

  borderColors = {
    news: '#94C9FF',
    informative: '#E6E6E6',
    warning: '#FFBB85',
    positive: '#63E98E',
    negative: '#F85E7A'
  };

  backgroundColors = {
    news: '#DBEDFF',
    informative: '#F5F5F5',
    warning: '#FFE3CC',
    positive: '#D2F9DF',
    negative: '#FFE8EC'
  };
}
