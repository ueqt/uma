import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UmaColorPickerComponent } from './color-picker.component';
import { UmaColorPickerSelectorComponent } from './color-picker-selector.component';
import { UmaColorPickerCollectionComponent } from './color-picker-collection.component';
import { UmaColorPickerService } from './color-picker.service';
import {
  UmaConnectedColorPickerDirective,
  UmaColorPickerOriginDirective,
  UmaColorPickerOptionDirective
} from './color-picker.directives';
import { EMPTY_COLOR, USED_COLORS } from './color-picker';

//
@Component({
  selector: 'test-component',
  template: `
    <form novalidate [formGroup]="form">
      <uma-color-picker #colorPicker umaConnectedColorPicker [umaConnectedColorPickerOrigin]="trigger">
      </uma-color-picker>

      <input umaColorPickerOrigin #trigger="umaColorPickerOrigin" formControlName="color" />
    </form>
  `
})
class TestComponent implements OnInit {
  form: FormGroup;
  @ViewChild('colorPicker', { static: true }) colorPicker: UmaColorPickerComponent;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      color: []
    });
  }

}

describe('UmaConnectedColorPickerdirective', () => {
  let comp: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let service: UmaColorPickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        PortalModule,
        OverlayModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule
      ],
      declarations: [
        TestComponent,
        UmaColorPickerComponent,
        UmaColorPickerSelectorComponent,
        UmaColorPickerCollectionComponent,
        UmaColorPickerOriginDirective,
        UmaColorPickerOptionDirective,
        UmaConnectedColorPickerDirective
      ],
      providers: [
        UmaColorPickerService,
        { provide: EMPTY_COLOR, useValue: 'none' },
        { provide: USED_COLORS, useValue: [] }
      ]
    });

    service = TestBed.get(UmaColorPickerService);
    fixture = TestBed.createComponent(TestComponent);
    comp = fixture.componentInstance;
  });

  it('should open color-picker', () => {
    const input = fixture.debugElement.query(By.css('input'));
    input.triggerEventHandler('click', null);
    fixture.detectChanges();
  });

  it('should write color value', () => {
    comp.ngOnInit();
    fixture.detectChanges();

    const color = comp.form.controls['color'];
    color.setValue('#555333');

    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
    fixture.detectChanges();
  });

  it('should select color', () => {
    comp.ngOnInit();
    comp.colorPicker.usedColorStart = ['#FFFFFF', '#000000'];
    fixture.detectChanges();

    const cp = fixture.debugElement.query(By.css('uma-color-picker'));
    cp.query(By.css('.btn-picker')).triggerEventHandler('click', null);
    fixture.detectChanges();

    const collection = cp.query(By.css('uma-color-picker-collection'));
    const buttons = collection.queryAll(By.css('button'));

    buttons[1].triggerEventHandler('click', null);
    fixture.detectChanges();

    comp.colorPicker.confirmSelectedColor();
    expect(comp.form.controls['color'].value).toBe('#FFFFFF');
  });

});
