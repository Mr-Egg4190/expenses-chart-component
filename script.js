const getBiggestExpenses = (expensesData) => {
    return Math.max(...expensesData.map(day => day.amount));
}

const generateGraph = (data, biggestExpenses) => {
    const graph = document.getElementById("graph");

    data.forEach(weekDay => {
        let pillarType = (weekDay.amount == biggestExpenses) ? "largest pillar" : "pillar";

        graph.innerHTML += `
        <div class="day">
            <p>${weekDay.day}</p>
            <div class="${pillarType}"></div>
            <div class="amount"><p>$${weekDay.amount}</p></div>
        </div>
    `;

    });
};


fetch('data.json')
  .then(response => response.json())
  .then(importedData => generateGraph(importedData, getBiggestExpenses(importedData)))
  .catch(error => console.error('Error fetching data:', error));
