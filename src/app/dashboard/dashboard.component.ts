import { Component, OnInit } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    google.charts.load('current',{packages:['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
    google.charts.setOnLoadCallback(this.BarChart);
  }
  //Draw chart
  drawChart() {
    // Set Data
    var data = google.visualization.arrayToDataTable([
      ['Price', 'Quantity','querySelector'],
      [50,7, 5],[60,8,5],[70,8,9],[80,9,7], [50,7, 5],[60,8,5],[70,8,9],[80,9,7]
      ]);
    // Set Options
    var options = {
      title: 'Ét ô ét',
      hAxis: {title: 'kkk'},
      vAxis: {title: 'SNdnldadn'},
      legend: 'none'
    };
    // Draw Chart
    var chart = new google.visualization.LineChart(document.getElementById('drawChart'));
    chart.draw(data, options);
    }

   // BarChart
    BarChart() {

      var data = google.visualization.arrayToDataTable([
        ['Hehehe', 'Mhl'],
        ['????', 55],
        ['France', 49],
        ['Spain', 44],
        ['USA', 24],
        ['Argentina', 15]
      ]);

      var options = {
        title: 'Ối giồi ôi, vẽ xong dashboard là hè lại về'
      };

      var chart = new google.visualization.BarChart(document.getElementById('myChart'));
      chart.draw(data, options);

      }
  }
