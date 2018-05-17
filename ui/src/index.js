import docReady from 'doc-ready';
import App from './app';

docReady(function() {
    const $root = document.createElement('div');
    $root.id = 'ui-container';
    document.body.appendChild($root);

    const app = new App({ $root });
    app.run();
});
