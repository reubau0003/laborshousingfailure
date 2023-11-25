// Create a Date object for January 1, 2023 (for when the plan begins so change to 2024)
const januaryFirst2023 = new Date(2023, 0, 1);

// Create a Date object for the current date and time
const currentDate = new Date();

// Calculate the difference in milliseconds
const timeDifference = currentDate - januaryFirst2023;

// Convert milliseconds to days
const daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Number of houses constructed and promised per day
const housesConstructedPerDay = 5;
const housesPromisedPerDay = 10;

// Calculate the total number of houses constructed and promised
const housesConstructed = daysPassed * housesConstructedPerDay;
const housesPromised = daysPassed * housesPromisedPerDay;


document.getElementById('delivered-counter').textContent = housesConstructed;
document.getElementById('promised-counter').textContent = housesPromised;



document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('line-chart').getContext('2d');

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Homes built',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                borderColor: 'rgb(0, 0, 0)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Homes promised',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                borderColor: 'rgb(223, 41, 53)',
                borderWidth: 2,
                fill: false
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    color: 'white' 
                }
            },
            y: {
                grid: {
                    color: 'black' 
                },
                suggestedMin: 0,      
                suggestedMax: 100000,  
                stepSize: 10000,   
                beginAtZero: true
            }
        }
    };

    new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
});