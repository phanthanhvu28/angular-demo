import { Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { fromEvent, Observable } from 'rxjs';

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


  // static getTableHeight(el: HTMLElement): number {
  //   const parentHeight = document.querySelector('.inner-content')?.clientHeight || 0;
  //   const currentPageChildNodes = el.querySelector('.page-wrapper')?.childNodes || [];
  //   const parentPadding = 48;
  //   let childHeight: number = parentPadding;
   
  //   currentPageChildNodes.forEach((child: HTMLElement) => {
  //     if (child.id === 'js-dynamic-table-height') {
  //       const searchHeight =
  //         child.querySelector('.table-filter-wrapper')?.clientHeight || 0;
  //       const tableHeaderHeight =
  //         child.querySelector('.ant-table-thead')?.clientHeight || 0;
  //       const panigationHeight = 68;
  //       childHeight += searchHeight + tableHeaderHeight + panigationHeight;
  //     } else {
  //       childHeight += child.clientHeight ? child.clientHeight : 0;
  //     }
  //   });

  //   return parentHeight - childHeight;
  // }
  static setTableHeight(currentPage: HTMLElement, height: number): void {
    const tableBody: HTMLElement = currentPage.querySelector('.ant-table-body') || currentPage;
    if (!tableBody) return;

    tableBody.style.height = `${height}px`;
    tableBody.style.maxHeight = `${height}px`;
  }
  static subscribeEvent(eventName: string): Observable<Event> {
    return fromEvent(document, eventName);
  }
}

