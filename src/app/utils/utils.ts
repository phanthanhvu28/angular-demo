import { Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFunctionName } from '@models/form-types';
import { fromEvent, Observable } from 'rxjs';
import { UpdatedItemMarkup } from '../pages/pricingManagement/tariff/models';
import { DEFAULT_DECIMAL_MARKUP } from '../pages/pricingManagement/tariff/tariff.const';

export class Utils {
  static getServiceBy(
    tab: string,
    page: string,
    injector: Injector,
    serviceMap: { [key: string]: any }
  ): any {
    const service = serviceMap[tab][page];
    return injector.get(service);
  }


  static getTableHeight(el: HTMLElement): number {
    const parentHeight = document.querySelector('.inner-content')?.clientHeight || 0;
    const currentPageChildNodes = el.querySelector('.page-wrapper')?.childNodes || [];
    const parentPadding = 48;
    let childHeight: number = parentPadding;
   
    currentPageChildNodes.forEach((child: HTMLElement) => {
      if (child.id === 'js-dynamic-table-height') {
        const searchHeight =
          child.querySelector('.table-filter-wrapper')?.clientHeight || 0;
        const tableHeaderHeight =
          child.querySelector('.ant-table-thead')?.clientHeight || 0;
        const panigationHeight = 68;
        childHeight += searchHeight + tableHeaderHeight + panigationHeight;
      } else {
        childHeight += child.clientHeight ? child.clientHeight : 0;
      }
    });

    return parentHeight - childHeight;
  }
  static setTableHeight(currentPage: HTMLElement, height: number): void {
    const tableBody: HTMLElement = currentPage.querySelector('.ant-table-body') || currentPage;
    if (!tableBody) return;

    tableBody.style.height = `${height}px`;
    tableBody.style.maxHeight = `${height}px`;
  }
  static subscribeEvent(eventName: string): Observable<Event> {
    return fromEvent(document, eventName);
  }
  static deepEventForm(
    formGroup: FormGroup,
    functionName: FormFunctionName
  ): void {
    if (!formGroup?.controls) {
      return;
    }
    Object.values(formGroup.controls).forEach((controlItem) => {
      if (controlItem[functionName]) {
        controlItem[functionName]();
      }
      // is formGroup
      const { controls } = controlItem as FormGroup;
      if (controls) {
        Utils.deepEventForm(controlItem as FormGroup, functionName);
      }
    });
  }
  static fireEvent(event: Event): void {
    document.dispatchEvent(event);
  }
  static calculateAvgCostByMakup(
    newMarkupRate: number,
    model: any
  ): UpdatedItemMarkup {
    model.newRate =
      model.costAverage + (model.costAverage * newMarkupRate) / 100;
    const flatValue = model.newRate - model.costAverage;
    const newMarkup = this.toFixed((flatValue / model.costAverage) * 100);
    model.markup = parseFloat(newMarkup);
    model.flat = parseFloat(this.toFixed(flatValue));

    return { itemId: model.id, flat: flatValue, markup: model.markup };
  }
  static calculateAvgCostByFlat(
    newFlatValue: number,
    model: any
  ): UpdatedItemMarkup {
    model.newRate = model.costAverage + newFlatValue;
    const newMarkupRate = this.toFixed(
      (newFlatValue / model.costAverage) * 100
    );
    model.markup = parseFloat(newMarkupRate);
    model.newRate =
      model.costAverage + (model.costAverage * model.markup) / 100;
    model.flat = parseFloat(this.toFixed(model.newRate - model.costAverage));
    return { itemId: model.id, flat: model.flat, markup: model.markup };
  }
  static toFixed(
    value: string | number,
    decimal: number = DEFAULT_DECIMAL_MARKUP
  ): string {
    const validValue = parseFloat(`${value}`);
    if (isNaN(validValue)) {
      return (0).toFixed(decimal);
    }

    return validValue.toFixed(decimal);
  }
}

