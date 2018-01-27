'use strict';

console.log("App.js is running");

// JSX - JavaScript XML

var page = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        page.options.push(option);
        e.target.elements.option.value = '';
    }
    renderApp();
    console.log(page.options);
};

var removeAll = function removeAll() {
    page.options = [];
    renderApp();
    console.log(page.options);
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * page.options.length);
    var option = page.options[randomNum];
    alert(option);
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            page.title
        ),
        page.subtitle && React.createElement(
            'p',
            null,
            page.subtitle
        ),
        React.createElement(
            'p',
            null,
            page.options.length > 0 ? 'Here are your options' : 'There are no options'
        ),
        React.createElement(
            'button',
            { disabled: page.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            page.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
