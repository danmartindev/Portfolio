// ALL ANIMATIONS DECLARED HERE //
import { trigger, state, transition, style, animate, query, stagger, animateChild, group } from '@angular/animations';

// Animations for router-outlet
export const routingAnims = 
  trigger('routeAnimations', [
    //animation from main page to a sub-page
    transition('Main => Sub', [
      query(':enter, :leave', style({ position: 'fixed', width:'100%', height: '80%' })
        , { optional: true }),
      group([ 
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.4s .1s ease-in-out', style({ transform: 'translateX(0%)' })),
          query('@mainAnim', animateChild())
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.1s ease-in-out', style({ transform: 'translateX(5%)' })),
          animate('0.4s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])
    ]),

    //animation from any page to main
    transition('* => Main', [
      query(':enter, :leave', style({ position: 'fixed', width:'100%', height: '80%' })
      , { optional: true }),

      group([ 
        query(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('0.4s ease-in-out', style({ transform: 'translateX(0%)' })),
          query('@mainAnim', animateChild())
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.1s ease-in-out', style({ transform: 'translateX(-5%)' })),
          animate('0.4s ease-in-out', style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
      ])
    ])
  ])

//Animation wrapper for main component
export let mainAnim =
  trigger('mainAnim', [

    transition(':enter', [
        query('@fadeUp', stagger(200, animateChild()), { optional: true }),
        query('@dropDown', animateChild(), { optional: true }), 
    ]),
  ])

//*** REUSABLE ANIMATIONS ***//
export let fadeUp =  
  trigger('fadeUp', [

    state('void', style({ opacity: 0, transform: 'translateY(10px)'})),
    state('hovered', style({  transform: 'translateY(-10px)', color: '#FFDF56'})),

    transition('* <=> hovered', [
        animate('250ms ease-in-out'),
    ]),

    transition(':enter', [
        animate('300ms 250ms ease-in')
    ])
  ])

export let dropDown =
  trigger('dropDown', [
    state('void', style({ transform: 'translateY(-100%)'})),
    transition(':enter', [
      animate('1s ease-in')
    ])
  ])

