var dataFromServer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var options = {
    chart: {
        renderTo: 'container',
        defaultSeriesType: 'line'
    },
    series: dataFromServer
};
var hichart = {};
$(function () {
    // var hichart = new Highcharts.Chart({
    //     title: {
    //         text: 'Data from Server',
    //         x: -20 //center
    //     },
    //     subtitle: {
    //         text: 'Source: WorldClimate.com',
    //         x: -20
    //     },
    //     xAxis: {
    //         categories: ['1', '2', '3', '4', '5', '6',
    //             '7', '8', '9', '10']
    //     },
    //     yAxis: {
    //         title: {
    //             text: 'Stock'
    //         },
    //         plotLines: [{
    //             value: 0,
    //             width: 1,
    //             color: '#808080'
    //         }]
    //     },
    //     tooltip: {
    //         valueSuffix: '°C'
    //     },
    //     legend: {
    //         layout: 'vertical',
    //         align: 'right',
    //         verticalAlign: 'middle',
    //         borderWidth: 0
    //     },
    //     series: [{
    //         name: 'Taiwan Stock',
    //         data: dataFromServer
    //     }]
    // });
    hichart = new Highcharts.Chart(options);
    // $('#container').highcharts(hichart);
});