import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../pages/auth/service';

@Directive({
  selector: '[hasPermission]',
  exportAs: 'nvHasPermission'
})
export class NvHasPermission {
  @Input() public hasPermission: string;
  constructor(
    private _authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
  ngOnInit(): void {
    if (this._authService.getCurrentUserParse()[this.hasPermission]) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
