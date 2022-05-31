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
    google.charts.setOnLoadCallback(this.PieChart);
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
      title: 'Chart Demo',
      hAxis: {title: 'kkk'},
      vAxis: {title: 'SNdnldadn'},
      legend: 'none'
    };
    // Draw Chart
    var chart = new google.visualization.LineChart(document.getElementById('drawChart'));
    chart.draw(data, options);
    }

      //Pie Chart
      PieChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, null);
      }
  }
