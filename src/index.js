import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';

// Defer Facebook Pixel loading until after main content is rendered
function loadFacebookPixel() {
  (function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = 'https://connect.facebook.net/en_US/fbevents.js';
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script');

  // Initialize Meta Pixel
  window.fbq('init', '1167680571793485');
  window.fbq('track', 'PageView');
}

// Prefer requestIdleCallback, fall back to window.onload
if ('requestIdleCallback' in window) {
  requestIdleCallback(loadFacebookPixel);
} else {
  window.addEventListener('load', loadFacebookPixel);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Optional performance measurement
reportWebVitals();