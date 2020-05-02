import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { PlotlyComponent } from './plotly/plotly.component';
import { D3Component } from './d3/d3.component';
import { ApexComponent } from './apex/apex.component';
import { CanvasJsComponent } from './canvas-js/canvas-js.component';
import { AmChartsComponent } from './am-charts/am-charts.component';
import { ChartJsComponent } from './chart-js/chart-js.component';
import { GoogleChartsComponent } from './google-charts/google-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    HighchartsComponent,
    PlotlyComponent,
    D3Component,
    ApexComponent,
    CanvasJsComponent,
    AmChartsComponent,
    ChartJsComponent,
    GoogleChartsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
