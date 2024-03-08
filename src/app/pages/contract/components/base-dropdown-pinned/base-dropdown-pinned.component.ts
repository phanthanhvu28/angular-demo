import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-base-dropdown-pinned',
  templateUrl: './base-dropdown-pinned.component.html',
  styleUrls: ['./base-dropdown-pinned.component.less']
})
export class BaseDropdownPinnedComponent {
  @Input() isSearchAPI: boolean = false;
  @Input() isShowPinned: boolean = false;

  private _activateDefault: string = '';
  @Input() get activateDefault(): string {
    return this._activateDefault;
  }
  set activateDefault(newValue) {
    this._activateDefault = newValue;

    if (newValue && this.listOptions.length > 0) {
      this.itemActivated = this.listOptions.find(
        (item) => item.value === newValue
      );
    }
  }

  private _pinnedDefault: string = '';
  @Input() get pinnedDefault(): string {
    return this._pinnedDefault;
  }
  set pinnedDefault(newValue) {
    this._pinnedDefault = newValue;
    if (newValue && this.listOptions.length > 0) {
      this.itemPinned = this.listOptions.find(
        (item) => item.value === newValue
      );
    }
  }

  private _listOptions: Array<{ label: string; value: string }> = [];
  @Input() get listOptions(): Array<{ label: string; value: string }> {
    return this._listOptions;
  }
  set listOptions(newValue) {
    if (!newValue) {
      return;
    }

    if (this.activateDefault && newValue.length > 0) {
      this.itemActivated = newValue.find(
        (item) => item.value === this.activateDefault
      );
    }

    if (this.pinnedDefault && newValue.length > 0) {
      this.itemPinned = newValue.find(
        (item) => item.value === this.pinnedDefault
      );
    }

    this._listOptions = newValue;
    this.listOptionsShow = newValue;
  }

  @Output() onSearchChange = new EventEmitter<string>();
  @Output() onChangeItemActivate = new EventEmitter<{
    label: string;
    value: string;
  }>();
  @Output() onChangeItemPinned = new EventEmitter<{
    label: string;
    value: string;
  }>();

  visible: boolean = false;
  inputValue: string | null = null;

  itemActivated: { label: string; value: string };
  itemPinned: { label: string; value: string };

  listOptionsShow: Array<{ label: string; value: string }> = [];

  onInputChange(value): void {
    if (!this.isSearchAPI) {
      this.listOptionsShow = this.listOptions.filter((item) =>
        item.value.toLowerCase().includes(value.toLowerCase())
      );

      if (!value) {
        this.listOptionsShow = this.listOptions;
      }
    }

    this.onSearchChange.emit(value);
  }

  onClearInput(): void {
    this.inputValue = null;
    this.onInputChange(null);
  }

  onClickItem(option: { label: string; value: string }): void {
    this.itemActivated = option;
    this.visible = false;
    this.onChangeItemActivate.emit(option);
  }
  onClickPinned(): void {
    if (this.itemPinned?.value === this.itemActivated?.value) {
      return;
    }

    this.onChangeItemPinned.emit(this.itemActivated);
  }
}
