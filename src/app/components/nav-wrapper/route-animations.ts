import {
  trigger,
  transition,
  query,
  style,
  animate
} from '@angular/animations';

export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0.5,
        transform: 'scale(0) translateY(100%)'
      })
    ]),
    query(':enter', [
      animate(
        '600ms ease',
        style({
          opacity: 1,
          transform: 'scale(1) translateY(0)'
        })
      )
    ])
  ])
]);
