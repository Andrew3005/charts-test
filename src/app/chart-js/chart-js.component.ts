import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js'
import { Colors } from '../app.component';

@Component({
  selector: 'app-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: ['./chart-js.component.scss']
})
export class ChartJsComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas', { static: true }) canvasRef: ElementRef;
  ctx: any;
  constructor() { }

  ngOnInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');

  }

  ngAfterViewInit() {
    this.createRoundedDoughnut();
    this.ctx.lineJoin = 'round';
    let myChart = new Chart(this.ctx, {
      type: 'RoundedDoughnut', curvature: 1,
      tooltips: {
        enabled: false
      },
      data: {
        labels: [
          'first',
          'second',
          'third',
          'fourth',
          'fifth',
          'sixth',
        ],
        datasets: [{
          label: '# of Votes',
          data: [1, 2, 3, 4, 5, 6].reverse(),
          backgroundColor: Colors,
          borderWidth: 0
        }]
      },
      options: {
        showTooltips: false,
        responsive: false,
        display: true,
        cutoutPercentage: 80,
        legend: {
          display: true,
          position: 'right',
          align: 'center',
          onClick: () => { },
          labels: {

            usePointStyle: true,
            pointStyle: 'circle',
            boxWidth: 10
          }
        },
        // events: [],
        // tooltips: {
        //   display: false,
        //   enabled: false,
        // },
      }
    });
  }


  createRoundedDoughnut() {
    Chart.defaults.RoundedDoughnut = Chart.helpers.clone(Chart.defaults.doughnut);
    Chart.controllers.RoundedDoughnut = Chart.controllers.doughnut.extend({
      draw: function (ease) {
        var ctx = this.chart.ctx;
        var easingDecimal = ease || 1;
        var arcs = this.getMeta().data;
        Chart.helpers.each(arcs, function (arc, i) {
          arc.transition(easingDecimal).draw();

          var pArc = arcs[i === 0 ? arcs.length - 1 : i - 1];
          var pColor = pArc._view.backgroundColor;

          var vm = arc._view;
          var radius = (vm.outerRadius + vm.innerRadius) / 2;
          var thickness = (vm.outerRadius - vm.innerRadius) / 2;
          var startAngle = Math.PI - vm.startAngle - Math.PI / 2;
          var angle = Math.PI - vm.endAngle - Math.PI / 2;

          ctx.save();
          ctx.translate(vm.x, vm.y);

          ctx.fillStyle = i === 0 ? vm.backgroundColor : pColor;
          ctx.beginPath();
          ctx.arc(radius * Math.sin(startAngle), radius * Math.cos(startAngle), thickness, 0, 2 * Math.PI);
          ctx.fill();

          ctx.fillStyle = vm.backgroundColor;
          ctx.beginPath();
          ctx.arc(radius * Math.sin(angle), radius * Math.cos(angle), thickness, 0, 2 * Math.PI);
          ctx.fill();

          ctx.restore();
        });
      }
    });
  }


}
