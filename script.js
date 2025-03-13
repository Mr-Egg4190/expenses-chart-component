const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const graph = document.getElementById("graph");

weekDays.forEach(day => {
    graph.innerHTML += `<p>${day}</p>`;
});