import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.page.html',
  styleUrls: ['./supplier.page.less']
})
export class SupplierPage {
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
        url = 'contract';
        break;
      case 1:
        url = 'annex';
        break;    

      default:
        url = 'contract';
        break;
    }

    // this.router.navigate(['contract/customer/', url]);
    //
  }
  changeTab(indexTab: number) {
    this.indexTab = indexTab ? indexTab : 0;
    localStorage.setItem('TAB_INDEX', this.indexTab.toString());
  }
}
