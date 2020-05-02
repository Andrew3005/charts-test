import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Colors } from '../app.component';
declare var require: any;

let VariablePie = require('highcharts/modules/variable-pie');
VariablePie(Highcharts);

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.scss']
})
export class HighchartsComponent implements OnInit {

  get colors() {
    let res = [];
    for (let color of Colors) {
      res.push(Highcharts.color(color))
    }
    return res
  }

  constructor() { }

  options: Highcharts.Options = {
    chart: {
      type: 'variablepie'
    } as any,
    title: {
      text: 'Testing variable pie chart.'
    },
    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
      // floating: true,
      enabled: true
    },
    tooltip: {
      enabled: false,
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
        'Area (square km): <b>{point.y}</b><br/>' +
        'Population density (people per square km): <b>{point.z}</b><br/>'
    },
    plotOptions: {

      series: {
        showInLegend: true,
        dataLabels: {
          enabled: false
        },
        lineWidth: 50,
        // colors: Colors,
      },
      pie: {
        //colors: Colors,
        dataLabels: {
          enabled: false
        },
        showInLegend: true
      }
    },
    series: [{
      innerSize: '70%',
      // minSize: 20,
      name: 'countries',
      minPointSize: 20,
      data: [{
        name: 'first',
        y: 1,
        // z: 30
      }, {
        name: 'second',
        y: 2,
        // z: 30
      }, {
        name: 'third',
        y: 3,
        // z: 30
      }, {
        name: 'fourth',
        y: 4,
        // z: 30
      }, {
        name: 'fifth',
        y: 5,
        z: 30
      }, {
        name: 'sixth',
        y: 6,
        // z: 30
      }]
    }] as any// Array<Highcharts.SeriesPieOptions>
  }

  ngOnInit() {
    Highcharts.setOptions({
      colors: Colors
    });
    let chart: any = Highcharts.chart('container', this.options);
  }

}
