import { Component, ElementRef, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take, timer } from 'rxjs';
import { AbsBaseDataListComponent } from 'src/app/abstracts/components/base-data-list/base-data-list.component';
import { Utils } from 'src/app/utils/utils';
import { LIST_ANNEX_OPTION_SUPPLIER } from '../../../const';
import AnnexData from '../../models/annex.model';
import { TableAnnexListService } from './table-annex-list.service';

@Component({
  selector: 'app-table-annex-list',
  templateUrl: './table-annex-list.component.html',
  styleUrls: ['./table-annex-list.component.less'],
  providers: [TableAnnexListService]
})
export class TableAnnexListComponent extends AbsBaseDataListComponent<AnnexData> {
  @Input('isFullScreen') isFullScreen: boolean = false;
  nvSelections = LIST_ANNEX_OPTION_SUPPLIER;

  constructor(
    el: ElementRef,
    private tableAnnexListService: TableAnnexListService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super(el);
  }
  onFilter(e): void {
    this.setFilterData(e);
  }
  ngAfterViewInit(): void {
    timer(100)
      .pipe(take(1))
      .subscribe(() => {
        const parentNode = document.querySelector('.inner-content');
        this.tableHeight = Utils.getTableHeight(parentNode as HTMLElement);
        Utils.setTableHeight(this.el.nativeElement, 200);
      });
  }
  getDataListService() {
    this.currentTabService = this.tableAnnexListService;
    this.currentTabService.setIsFullScreen(this.isFullScreen);
    this.tableHeight = 500;
  }
  goToAnnex(id: string): void {
    // const url = this.router.navigate(['/contract/customer/annex/', id], {
    //   relativeTo: this.route
    // });
    // window.open(url, '_blank');
  }
}
