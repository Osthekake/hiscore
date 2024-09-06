const highscoreMap = {
    'ALJ': 10000,
    'ASS': 1000,
    'PIS': 535,
    'HHW': 788,
    'FMZ': 10001,
    'KSV': 2135,
    'ERJ': 345,
    'ABB': 675,
}

const headerElement = document.createElement('span');
headerElement.innerHTML = 'HIGH SCORES';
headerElement.classList.add('header-high-score');
document.body.appendChild(headerElement);

const tableElement = document.createElement('table');
tableElement.classList.add('table-high-score');
document.body.appendChild(tableElement);

Object.entries(highscoreMap).sort(([_, a], [__, b]) => b - a).forEach(([initials, score], index) => {
    const tableRowElement = document.createElement('tr');
    tableRowElement.classList.add(`score-row-${index}`);
    tableElement.appendChild(tableRowElement);

    const initialsElement = document.createElement('td');
    initialsElement.innerHTML = initials;
    tableRowElement.appendChild(initialsElement);

    const scoreElement = document.createElement('td');
    scoreElement.innerHTML = `&nbsp;${score}`;
    tableRowElement.appendChild(scoreElement);
});