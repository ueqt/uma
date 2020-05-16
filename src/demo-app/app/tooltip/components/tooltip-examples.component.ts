import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tooltip-examples',
  templateUrl: './tooltip-examples.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipExamplesComponent implements OnInit {

  tips = `<div style="color: red;">Red</div>
  <div style="color: blue;">Blue</div>
  `;

  constructor() { }

  ngOnInit() {
  }
}
