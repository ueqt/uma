import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent implements OnInit {
  form: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      timer: [''],
    });
  }

  onSubmit({ value, valid }) {
    console.log(valid, value);
  }
}
