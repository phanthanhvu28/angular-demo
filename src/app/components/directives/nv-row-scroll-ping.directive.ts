import { Directive, ElementRef } from '@angular/core';
import { NvSafeAny } from '@models/base/data.interface';
import { isNil } from 'ng-zorro-antd/core/util';
import { Subject, fromEvent, takeUntil, timer } from 'rxjs';

@Directive({
  selector: '[nv-row-scroll-ping]',
  exportAs: 'nvRowScrollPing',
  standalone: true
})
export class NvRowScrollPingDirective {
  nvAutoHeight: boolean = false;
  targetPingEls: NodeListOf<Element> = null;

  public resizeObserver: ResizeObserver = null;
  private destroy$ = new Subject<void>();
  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add('nv-row-scroll-ping');
  }

  ngAfterViewInit(): void {
    this.targetPingEls = this.el.nativeElement.querySelectorAll(
      '.nv-row-stick__target'
    );

    fromEvent(this.el.nativeElement, 'scroll')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.setScrollPingClassName());

    this.resizeObserver = new ResizeObserver(() => {
      this.setTargetClassName();
      this.setScrollPingClassName();
      this.setScrollPingHeight();
    });
    this.resizeObserver.observe(this.el.nativeElement);
  }

  setScrollPingClassName(clear: boolean = false): void {
    if (!this.targetPingEls?.length) {
      return;
    }
    this.targetPingEls.forEach((targetItem: HTMLElement) => {
      const isShowShadow = targetItem.getAttribute('nvShowShadow');
      if (isShowShadow?.toLowerCase() === 'false') {
        return;
      }

      const { scrollWidth, scrollLeft, clientWidth } = this.el.nativeElement;
      const leftStickDirection = targetItem.getAttribute('nvLeft');
      const rightStickDirection = targetItem.getAttribute('nvRight');
      const leftClassName = 'nv-row-stick__ping--left';
      const rightClassName = 'nv-row-stick__ping--right';

      targetItem.style.setProperty(
        'left',
        this.getValidPositionValue(leftStickDirection)
      );
      targetItem.style.setProperty(
        'right',
        this.getValidPositionValue(rightStickDirection)
      );

      if ((scrollWidth === clientWidth && scrollWidth !== 0) || clear) {
        targetItem.classList.remove(leftClassName);
        targetItem.classList.remove(rightClassName);
        return;
      }
      if (scrollLeft === 0) {
        targetItem.classList.remove(leftClassName);
        rightStickDirection !== null &&
          targetItem.classList.add(rightClassName);
        return;
      }
      if (scrollWidth === scrollLeft + clientWidth) {
        targetItem.classList.remove(rightClassName);
        leftStickDirection !== null && targetItem.classList.add(leftClassName);
        return;
      }

      leftStickDirection !== null && targetItem.classList.add(leftClassName);
      rightStickDirection !== null && targetItem.classList.add(rightClassName);
    });
  }
  setScrollPingHeight(): void {
    if (!this.targetPingEls?.length) {
      return;
    }

    this.targetPingEls.forEach((targetItem: HTMLElement) => {
      const parentNode = targetItem.closest('.nv-row-scroll-ping');
      const nvAutoHeight = targetItem.getAttribute('nvAutoHeight');
      const nvStickyFullHeight = targetItem.getAttribute('nvStickyFullHeight');
      if (!parentNode || !isNil(nvAutoHeight)) {
        return;
      }
      const parentStyles = window.getComputedStyle(parentNode);
      const { clientHeight } = parentNode as HTMLElement;
      let height = clientHeight;

      if (isNil(nvStickyFullHeight)) {
        const paddingY =
          parseFloat(parentStyles.paddingTop) +
          parseFloat(parentStyles.paddingBottom);
        height -= paddingY;
      }
      targetItem.style.height = `${height}px`;
    });
  }

  setTargetClassName(): void {
    if (!this.targetPingEls?.length) {
      return;
    }

    this.targetPingEls.forEach((targetItem: HTMLElement) => {
      const stickDirection = targetItem.getAttribute('nvLeft');
      const targetClass = `nv-row-stick__target--${
        stickDirection !== null ? 'left' : 'right'
      }`;

      targetItem.classList.add(targetClass);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.resizeObserver?.disconnect();
  }

  private getValidPositionValue(value: NvSafeAny): string {
    const parseFloatValue = parseFloat(value);
    if (isNil(value) || isNaN(parseFloatValue)) {
      return null;
    }

    return `${parseFloatValue}px`;
  }
}
