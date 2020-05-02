import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'src/assets/canvasjs.min.js';
import { Colors } from '../app.component';

@Component({
  selector: 'app-canvas-js',
  templateUrl: './canvas-js.component.html',
  styleUrls: ['./canvas-js.component.scss']
})
export class CanvasJsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    CanvasJS.addColorSet('colors', Colors)
    let chart = new CanvasJS.Chart("chartContainer", {

      colorSet: "colors",
      title: {
        // text: "Gaming Consoles Sold in 2012"
      },
      legend: {
        verticalAlign: 'center',
        horizontalAlign: 'right'
      }, 
      toolTip: {
        enabled: false   //enable here
      },
      indexLabelFormatter: () => '',
      data: [
        {
          // exploded: true,
          startAngle: -90,
          showInLegend: true,
          // toolTipContent: "{legendText}",
          type: "doughnut",
          // toolTipContent: "{y} - #percent %",
          // yValueFormatString: "#,##0,,.## Million",
          legendText: "{indexLabel}",
          toolTipContent: '',
          dataPoints: [
            { y: 1, indexLabel: "first" },
            { y: 2, indexLabel: "second" },
            { y: 3, indexLabel: "third" },
            { y: 4, indexLabel: "fourth" },
            { y: 5, indexLabel: "fifth" },
            { y: 6, indexLabel: "sixth" },
          ]
        }
      ]

    });

    chart.render();
  }

}
