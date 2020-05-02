import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

@Component({
  selector: 'app-am-charts',
  templateUrl: './am-charts.component.html',
  styleUrls: ['./am-charts.component.scss']
})
export class AmChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // Themes begin
    // am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.PieChart);

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "name";


    pieSeries.ticks.template.disabled = true;
    pieSeries.alignLabels = false;
    pieSeries.labels.template.text = "";

    // Let's cut a hole in our Pie chart the size of 80% the radius
    chart.innerRadius = am4core.percent(60);
    var colorSet = new am4core.ColorSet();
    colorSet.list = ["#3284E3", "#EB7893", "#66CDEC", "#C4F585", "#C3A0FD", "#F7CE5B"].map((color) => {
      let res = am4core.color(color)
      return res;
    });
    pieSeries.colors = colorSet;
    // Put a thick white border around each Slice
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template
      // change the cursor on hover to make it apparent the object can be interacted with
      .cursorOverStyle = [
        {
          "property": "cursor",
          "value": "pointer"
        }
      ];

    pieSeries.alignLabels = false;
    pieSeries.labels.template.bent = true;
    pieSeries.labels.template.radius = 3;
    pieSeries.labels.template.padding(0, 0, 0, 0);

    pieSeries.ticks.template.disabled = true;


    // pieSeries.labelsEnabled = false;

    // Create a base filter effect (as if it's not there) for the hover to return to
    var shadow = pieSeries.slices.template.filters.push(new am4core.DropShadowFilter);
    shadow.opacity = 0;

    // Create hover state
    var hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

    // Slightly shift the shadow and make it more prominent on hover
    var hoverShadow = hoverState.filters.push(new am4core.DropShadowFilter);
    hoverShadow.opacity = 0.7;
    hoverShadow.blur = 5;

    // Add a legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = 'right';
    chart.data = [{
      "name": "first",
      "value": 1,
      color: 'red'
    }, {
      "name": "second",
      "value": 2
    }, {
      "name": "third",
      "value": 3
    }, {
      "name": "fourth",
      "value": 4
    }, {
      "name": "fifth",
      "value": 5
    }, {
      "name": "sixth",
      "value": 6
    }];

  }

}
