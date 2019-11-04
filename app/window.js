'use strict';
window.eval = global.eval = function() {
    throw new Error("Can't use eval.");
}

var headerFrame = null;
var webview = null;

window.addEventListener('load', () => {
    headerFrame = document.getElementById('header-frame');
    headerFrame.preload = 'header.js';
    headerFrame.src = 'header.html';
    headerFrame.addEventListener('did-finish-load', Initialize, false);
    headerFrame.addEventListener('ipc-message', (event) => {
        if ('url-input' === event.channel) {
            webview.setAttribute('src', event.args[0]);
        }
    });

    const buttons = document.querySelectorAll('.url-button');
    buttons.forEach((button) => {
        button.addEventListener('click', function(clickEvent) {
            var url = this.getAttribute('data-url');
            // NOTE: only set
            headerFrame.send('url-input', url);
            // NOTE: goto the page
            webview.setAttribute('src', url);
        });
    })
}, false);

function Initialize() {
    webview = document.getElementById('view');
    webview.setAttribute('src', 'data:text/html,<h1>Default Page</h1>');
    // NOTE: for debug
    // headerFrame.openDevTools();
    headerFrame.send('url-input', 'http://maruta.github.io/timekeeper/#t1=15:00&t2=20:00&t3=25:00&m=Click%20to%20edit%20this%20message.');
}
