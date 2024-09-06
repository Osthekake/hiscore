(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
const highscoreMap = {
    'ALJ': 10000,
    'ASS': 1000,
    'PIS': 535,
    'HHW': 788,
    'FMZ': 10001,
    'KSV': 2135,
    'ERJ': 345,
    'ABB': 675,
};
const headerElement = document.createElement('span');
headerElement.innerHTML = 'HIGH SCORES';
headerElement.classList.add('header-high-score');
document.body.appendChild(headerElement);
const tableElement = document.createElement('table');
tableElement.classList.add('table-high-score');
document.body.appendChild(tableElement);
Object.entries(highscoreMap).forEach(([initials, score], index) => {
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

},{}]},{},[1]);
