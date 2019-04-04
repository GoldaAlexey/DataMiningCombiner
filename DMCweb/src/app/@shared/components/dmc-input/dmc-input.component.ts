import { Component, forwardRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { BaseControl } from '../base-control';

@Component({
    selector: 'dmc-input',
    templateUrl: './dmc-input.component.html',
    styleUrls: ['./dmc-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DmcInputComponent),
            multi: true
        }
    ],
    encapsulation: ViewEncapsulation.None
})
export class DmcInputComponent extends BaseControl<string> implements OnInit {
    @Input() public placeholder: string;
    @Input() public maxTextLength: string;
    @Input() public type = 'text';

    constructor() {
        super();
    }

    public ngOnInit(): void {
        super.ngOnInit();
    }
}
