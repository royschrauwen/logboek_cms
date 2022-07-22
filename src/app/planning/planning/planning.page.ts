import { Component, OnInit } from '@angular/core';
import { PlanningService } from '../planning.service';



@Component({
  selector: 'app-planning',
  templateUrl: './planning.page.html',
  styleUrls: ['./planning.page.scss'],
})
export class PlanningPage implements OnInit {

  protected planningData: any = [];

  constructor(private planningService: PlanningService) { }

  ngOnInit() {
    this.planningData = this.planningService.getSpeeldata();
      console.log(this.planningData);
    }



}
