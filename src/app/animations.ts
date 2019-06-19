import { trigger, state, transition, style, animate, query, stagger, animateChild, group } from '@angular/animations';

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

export let slideOut =
  trigger('slideOut', [

    state('leaving', style({  transform: 'translateX(-30px)'})),

    transition('* <=> hovered', [
      animate('1s ease-in-out', style({ transform: 'translateX(-30px)'})),
    ]),
  ])

export let mainAnim =
  trigger('mainAnim', [

    transition(':enter', [
        query('@fadeUp', stagger(200, animateChild()))
    ]),

    transition(':leave',[
      query(':self', animate('1s ease-in-out', style({ transform: 'translateX(-30px)'})))
    ])
  ])

  export const routingAnims = trigger('routeAnimations', [
    // transition('* <=> *', [
    //   /* order */
    //   /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%', height: '80%' })
    //     , { optional: true }),
    //   /* 2 */ group([  // block executes in parallel
    //     query(':enter', [
    //       style({ transform: 'translateX(100%)' }),
    //       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
    //     ], { optional: true }),
    //     query(':leave', [
    //       style({ transform: 'translateX(0%)' }),
    //       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
    //     ], { optional: true }),
    //   ])
    // ])

    transition('Main => Work', [
      /* order */
      /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%', height: '80%' })
        , { optional: true }),
      /* 2 */ group([  // block executes in parallel
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])
    ])
  ])