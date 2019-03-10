import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'dmc-input',
  templateUrl: './dmc-input.component.html',
  styleUrls: ['./dmc-input.component.scss']
})
export class DmcInputComponent implements OnInit, OnChanges {
  @Input() public name: string;
  @Input() public placeholder: string;
  @Input() public maxTextLength: string;
  @Input() public type = 'text';
  @Input() public ngModel: string;

  @Output() private readonly onChange = new EventEmitter();

  constructor() { }

  public ngOnInit(): void { }

  public ngOnChanges(changes: SimpleChanges): void {
    this.onChange.emit(changes);
  }

}
