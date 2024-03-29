import { Component, ElementRef } from '@angular/core';
import { AbsBaseDataListComponent } from 'src/app/abstracts/components/base-data-list/base-data-list.component';
import { UserActionRoleModel } from '../../models/item-action.model';
import { TariffDetailResponseData } from '../../models/result-list.model';
import { DetailTariffHelpers } from '../../utils/detail-tariff-helper';
import { take, timer } from 'rxjs';

@Component({
  template: ''
})
export abstract class AbsTariffDataItemsComponent<
  T
> extends AbsBaseDataListComponent<T> {
  currentUser: Object;
  currentAction: UserActionRoleModel = {};

  constructor(
    protected override el: ElementRef    
  ) {
    super(el);
    this.setTableNavConfig();
    // if (this.authService) {
    //   this.currentUser = this.authService.getCurrentUserParse();
    // }
  }

  protected abstract openFilterModal(event: any): void;

  protected setTableNavConfig(): void {
    this.nvNavConfig.nvShowDefaultFilter = false;
    //this.nvNavConfig.handleClickFilter = this.openFilterModal.bind(this);
  }

  protected updateColsAndUserAction(
    tariffItem: TariffDetailResponseData
  ): void {
    const userAction = DetailTariffHelpers.getUserAction(
      this.currentUser,
      tariffItem
    );
    const hasCurrentAction = Object.keys(this.currentAction).length;
    if (
      this.checkUserActionChange(this.currentAction, userAction) ||
      !hasCurrentAction
    ) {
      this.currentAction = userAction;
      this.currentTabService.setColProvider(this.currentAction);
    }
  }

  private checkUserActionChange(
    currentAction: UserActionRoleModel,
    newAction: UserActionRoleModel
  ): boolean {
    return Object.keys(currentAction).some(
      (key) => newAction[key] !== currentAction[key]
    );
  }
  updateTableHeight(_?: boolean): void {
    if (!this.el) {
      return;
    }

    timer(100)
      .pipe(take(1))
      .subscribe(() => this.setTableHeight(this.el.nativeElement));
  }
}
