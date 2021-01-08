// start of main total case chart (1)
var ctx = document.getElementById('totalCasesChart');
var totalCasesChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Deceased", "Recovered", "Active"],
        datasets: [{
            label: 'Total Cases',
            data: [null, null, null],
            backgroundColor: [
                'rgba(186, 0, 0, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(35, 161, 0, 1)'
            ],
            borderWidth: 0
        }]
    },
        options: {
            legend: {
                position: 'bottom'
            }
        }
})
// end of main total case chart (1)
// start of local condition chart (2)
var ctx2 = document.getElementById('activeCasesChart');
var activeCasesChart = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ["In Critical Condition", "In Community Facilities", "Stablized in Hospital"],
        datasets: [{
            label: 'Active Cases Conditions',
            data: [null, null, null],
            backgroundColor: [
                'rgba(186, 0, 0, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 0
        }]
    },
        options: {
            legend: {
                position: 'bottom'
            }
        }
})
// end of local condition chart (2)

// add data for chart
function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}
// remove data for chart
function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}
