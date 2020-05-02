import { Component, OnInit } from '@angular/core';
import { Colors } from '../app.component';
declare var google: any;

@Component({
  selector: 'app-google-charts',
  templateUrl: './google-charts.component.html',
  styleUrls: ['./google-charts.component.scss']
})
export class GoogleChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['second', 2],
        ['third', 3],
        ['fourth', 4],
        ['fifth', 5],
        ['sixth', 6]
      ]);

      var options = {
        // title: 'My Daily Activities',
        pieHole: 0.8,
        pieSliceText: 'none',
        colors: Colors,
        width: 500,
        height: 300,
        legend: {
          position: 'right', alignment: 'center',
        }
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart'));

      chart.draw(data, options);
    }
  }

}
