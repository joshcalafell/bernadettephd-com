import { Component } from '@angular/core';
import { fadeIn } from 'src/app/animations/fade-in';

@Component({
  selector: 'bmc-philosophy',
  templateUrl: './philosophy.component.html',
  styleUrls: ['./philosophy.component.scss'],
  animations: [fadeIn]
})
export class PhilosophyComponent {
  constructor() {}
}
