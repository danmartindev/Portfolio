import { trigger, state, transition, style, animate, query, stagger, animateChild } from '@angular/animations';

export let fadeUp =  
  trigger('fadeUp', [

    state('void', style({ opacity: 0, transform: 'translateY(10px)'})),
    state('hovered', style({  transform: 'translateY(-10px)', color: '#FFDF56'})),

    transition('* <=> hovered', [
        animate('250ms ease-in-out'),
    ]),

    transition(':enter', [
        animate('300ms ease-in')
    ])
  ])

export let mainAnim =
  trigger('mainAnim', [
    state('hovered', style({ backgroundColor: 'red'})),
    transition(':enter', [
        query('@fadeUp', stagger(200, animateChild()))
    ]),
  ])