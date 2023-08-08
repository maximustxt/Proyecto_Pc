import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-armar-pc',
  templateUrl: './info-armar-pc.component.html',
  styleUrls: ['./info-armar-pc.component.scss'],
})
export class InfoArmarPcComponent {
  @Input() name!: string;
}
