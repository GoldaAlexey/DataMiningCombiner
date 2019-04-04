import { Component, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss']
})
export class ValidationMessageComponent implements OnInit {

  @Input() public formElement: NgControl;

  constructor() { }

  public ngOnInit(): void { }

}
