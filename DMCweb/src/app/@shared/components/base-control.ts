import { AfterViewInit, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

export abstract class BaseControl<TModelType> implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy {
    @Input() public name: string;

    public set model(value: TModelType) {
        this._model = value;
        this.onChange();
    }

    public get model(): TModelType {
        return this._model;
    }

    @Output() private readonly changed: EventEmitter<TModelType> = new EventEmitter<TModelType>();

    private _onChange: (_: any) => void;
    private _onTouched: any;
    private _model: TModelType;

    constructor() {
    }

    public ngOnInit(): void {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }

    public onChange(): void {
        if (this._onChange != null) {
          this._onChange(this.model);
        }

        this.changed.emit(this.model);
    }

    public writeValue(obj: any): void {
        this.model = obj;
    }

    public registerOnChange(fn: (_: any) => void): void {
        this._onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this._onTouched = fn;
    }

    public onBlur(): void {
        if (this._onTouched != null) {
          this._onTouched();
        }
    }
}
