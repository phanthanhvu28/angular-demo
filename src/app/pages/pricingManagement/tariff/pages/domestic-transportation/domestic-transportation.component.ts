import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-domestic-transportation',
  templateUrl: './domestic-transportation.component.html',
  styleUrls: ['./domestic-transportation.component.less']
})
export class DomesticTransportationComponent {
  indexTab: number | string = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const indexTabLocal = localStorage.getItem('TAB_INDEX');
    this.indexTab = indexTabLocal ? indexTabLocal : 0;
    localStorage.setItem('TAB_INDEX', this.indexTab.toString());
    let url: string = '';

    switch (+this.indexTab) {
      case 0:
        url = 'SMC';
        break;
      case 1:
        url = 'VAS';
        break;    
        case 2:
          url = 'BLC';
          break;   

      default:
        url = 'SMC';
        break;
    }
  }
  changeTab(indexTab: number) {
    this.indexTab = indexTab ? indexTab : 0;
    localStorage.setItem('TAB_INDEX', this.indexTab.toString());
  }
}
