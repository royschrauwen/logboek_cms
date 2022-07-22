import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  speeldata: any = [
    {
      id: 1,
      datum: '2020-01-01',
      tijd: '18:30',
      stagemanager: 'John Doe',
      showcaller: 'Jane Doe',
      troubleshooter: 'John Doeter',
      tweedeinspicient: 'Tweespe',
      toneelmeester: 'Roy Schrauwen',
      status: 'Bevestigd'
    },
    {
      id: 2,
      datum: '2020-01-02',
      tijd: '18:30',
      stagemanager: 'John Doe',
      showcaller: 'Jane Doe',
      troubleshooter: 'John Doeter',
      tweedeinspicient: 'Tweespe',
      toneelmeester: 'Roy Schrauwen',
      status: 'Bevestigd'
    },
  ];

  constructor() { }


  public getSpeeldata() {
    return this.speeldata;
  }

}
