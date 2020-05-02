import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Colors } from '../app.component';
declare var Plotly: any;
// Load in the trace types for pie, and choropleth
// Plotly.register([
// require('plotly.js-dist/lib/pie')
// ]);
@Component({
  selector: 'app-plotly',
  templateUrl: './plotly.component.html',
  styleUrls: ['./plotly.component.scss']
})
export class PlotlyComponent implements OnInit {


  @ViewChild("Graph", { static: true }) private Graph: ElementRef;

  constructor() { }

  ngOnInit() {
    this.plotGraph();
  }
  data = [{
    displayModeBar: false,
    values: [1, 2, 3, 4, 5, 6],
    textinfo: 'none',
    labels: [
      'first',
      'second',
      'third',
      'fourth',
      'fifth',
      'sixth',
    ],
    marker: {
      colors: Colors
    },
    type: 'pie',
    hole: .8
  }];

  layout = {
    height: 400,
    width: 500
  };

  plotGraph() {
    Plotly.newPlot('Graph', this.data, this.layout, {displayModeBar: false});
  }

}
