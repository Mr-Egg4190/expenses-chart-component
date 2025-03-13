const getBiggestExpenses = (expensesData) => {
    return Math.max(...expensesData.map(day => day.amount));
}

const addHeightToData = (importedData) => {
    let biggestExpenses = getBiggestExpenses(importedData);

    return {
        dataWithHeight: importedData.map(existingData => ({
            ...existingData,
            height: `${(existingData.amount / biggestExpenses) * 60}%`
        })),
        biggestExpenses
    };
};

const generateGraph = ({ dataWithHeight, biggestExpenses }) => {
    const graph = document.getElementById("graph");

    dataWithHeight.forEach(weekDay => {
        let pillarType = (weekDay.amount == biggestExpenses) ? "largest pillar" : "pillar";

        graph.innerHTML += `
        <div class="day">
            <p>${weekDay.day}</p>
            <div class="${pillarType}" style="height: ${weekDay.height}" ></div>
            <div class="amount"><p>$${weekDay.amount}</p></div>
        </div>
    `;

    });
};


fetch('data.json')
  .then(response => response.json())
  .then(importedData => generateGraph( addHeightToData(importedData)))
  .catch(error => console.error('Error fetching data:', error));
