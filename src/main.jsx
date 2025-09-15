import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './App.jsx';
    import './styles.css';

    // Send logs to parent frame (like a preview system)
    function postToParent(level, ...args) {
      if (window.parent !== window) {
        window.parent.postMessage(
          {
            type: 'iframe-console',
            level,
            args,
          },
          '*'
        );
      }
    }

    // Global error handler
    window.onerror = function (message, source, lineno, colno, error) {
      const errPayload = {
        message,
        source,
        lineno,
        colno,
        stack: error?.stack,
      };
      postToParent('error', errPayload);
    };

    // Unhandled promise rejection
    window.onunhandledrejection = function (event) {
      postToParent('error', { reason: event.reason });
    };

    // Patch console
    ['log', 'warn', 'info', 'error'].forEach((level) => {
      const original = console[level];
      console[level] = (...args) => {
        postToParent(level, ...args);
        original(...args);
      };
    });

    import { BrowserRouter } from 'react-router-dom';

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );