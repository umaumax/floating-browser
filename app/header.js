'use strict';

//  Disable eval and Buffer.
window.eval = global.eval = global.Buffer = function() {
    throw new Error("Can't use eval and Buffer.");
}

const electron = require('electron')
const ipcRenderer = electron.ipcRenderer;
var url_input_dom = null;
var button_doms = [];

window.addEventListener('load', () => {
    url_input_dom = document.getElementById('input-url');
    url_input_dom.addEventListener("keypress", (event) => {
        // NOTE: enter key code
        if (13 != event.keyCode) return;
        url_input_dom.blur();
        ipcRenderer.sendToHost('url-input', url_input_dom.value);
        console.log('[guest][ipc-message]', 'input')
    }, false);

    button_doms = document.querySelectorAll('.url-button');
    console.log(button_doms);
    button_doms.forEach((button) => {
        button.addEventListener('click', (event) => {
            var url = button.getAttribute('data-url');
            ipcRenderer.sendToHost('click-button', url);
            console.log('[guest][ipc-message]', 'button')
        }, false);
    })
}, false);

ipcRenderer.on('url-input', (event, s_url) => {
    url_input_dom.value = s_url;
});
