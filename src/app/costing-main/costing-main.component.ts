import { Component, OnInit } from '@angular/core';
import { CostingMainModel } from '../models/costing-main-model';
import { CostingService } from '../Services/costing.service';
import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-costing-main',
  templateUrl: './costing-main.component.html',
  styleUrls: ['./costing-main.component.less']
})
export class CostingMainComponent implements OnInit {

  ngOnInit(): void {
    this.loadDataFromServer(this.pageIndex, this.pageSize, null, null, []);
  }
  constructor(private costingService: CostingService) {}

  total = 1;
  listCosting: CostingMainModel[] = [];
  loading = true;
  pageSize = 10;
  pageIndex = 1;
  filterGender = [
    // { text: 'male', value: 'male' },
    // { text: 'female', value: 'female' }
  ];

  loadDataFromServer(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filter: Array<{ key: string; value: string[] }>
  ): void {
    this.loading = true;
    this.costingService.getCostingMains(pageIndex, pageSize, sortField, sortOrder,"SUP0300645369").subscribe(data => {
      debugger
      this.loading = false;
      this.total = 200; // mock the total data here
      // this.listCosting = data.items;
    });
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    // console.log(params);
    // const { pageSize, pageIndex, sort, filter } = params;
    // const currentSort = sort.find(item => item.value !== null);
    // const sortField = (currentSort && currentSort.key) || null;
    // const sortOrder = (currentSort && currentSort.value) || null;
    // this.loadDataFromServer(pageIndex, pageSize, sortField, sortOrder, filter);
  }

}
