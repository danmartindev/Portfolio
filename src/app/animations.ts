// ALL ANIMATIONS DECLARED HERE //
import { trigger, state, transition, style, animate, query, stagger, animateChild, group } from '@angular/animations';

// Animations for router-outlet
export const routingAnims = 
  trigger('routeAnimations', [
    //animation from main page to a sub-page
    transition('Main => *', [
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
        query('@colorUp', stagger(200, animateChild()), { optional: true }),
        //query('@dropDown', animateChild(), { optional: true }), 
    ]),
  ])

//*** SMALL REUSABLE ANIMATIONS ***//
export let collapser = 
  trigger('collapser', [
    state('*', style({ height: '0px', opacity: 0})),
    state('expanded', style({ height: '*'})),
    transition('* <=> expanded', [
      animate('0.3s ease-in-out'),
    ])
  ])

export let colorUp =  
  trigger('colorUp', [

    state('void', style({ opacity: 0, transform: 'translateY(10px)'})),
    state('hovered', style({  transform: 'translateY(-10px)', color: '#FFDF56'})),

    transition('* <=> hovered', [
        animate('250ms ease-in-out'),
    ]),

    transition(':enter', [
        animate('300ms 150ms ease-in')
    ])
  ])

export let dropDown =
  trigger('dropDown', [
    // state('void', style({ transform: 'translateY(-100%)', opacity: 0})),
    // transition(':enter', [
    //   animate('1s ease-in')
    // ])
  ])

export let fadeUp =  
  trigger('fadeUp', [

    state('*', style({ transform: 'translateY(10px)', opacity: 0 })),
    state('hovered', style({  transform: 'translateY(-10px)', opacity: '*' })),

    transition('* <=> hovered', [
        animate('250ms ease-in-out'),
    ]),
  ])

export let rotate =  
  trigger('rotate', [
    
    state('expanded', style({ transform: 'rotate(180deg)' })),
    //state('rotated', style({ transform: 'rotate(-180)' })),

    transition('* <=> expanded', [
        animate('250ms ease-in-out'),
    ]),
  ])



