import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts/dist/apexcharts.js';
import { Colors } from '../app.component';

@Component({
  selector: 'app-apex',
  templateUrl: './apex.component.html',
  styleUrls: ['./apex.component.scss']
})
export class ApexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var chart = new ApexCharts(document.querySelector("#chart"), this.options);
    chart.render();
  }

  options = {
    colors: Colors,
    series: [1, 2, 3, 4, 5, 6],
    chart: {
      type: 'donut',
    }, 
    dataLabels:{
      enabled: false
    },
    labels: [
      'first',
      'second',
      'third',
      'fourth',
      'fifth',
      'sixth',
    ],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };





}
