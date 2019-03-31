import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dmc-button',
  templateUrl: './dmc-button.component.html',
  styleUrls: ['./dmc-button.component.scss']
})
export class DmcButtonComponent implements OnInit {
  @Input() public label: string;
  @Input() public icon: string;
  @Input() public title = '';
  @Input() public tooltip = '';
  @Input() public tooltipPosition = 'top';
  @Input() public type = 'button';
  @Input() public tooltipStyleClass = '';
  @Input() public disabled = false;

  @Output() private readonly onClick = new EventEmitter();

  constructor() { }

  public ngOnInit(): void { }

  public onClicked(): void {
    this.onClick.emit();
  }
}
