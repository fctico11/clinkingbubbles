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

// Wait until the browser has painted once before mounting React, so the
// #static-hero pre-paint in index.html is always the first (and LCP) paint
// instead of racing the bundle. Double rAF fires just after the first paint;
// the timeout is a fallback for hidden/backgrounded tabs where rAF stalls.
let mounted = false;
const mountApp = () => {
  if (mounted) return;
  mounted = true;
  root.render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
};
requestAnimationFrame(() => requestAnimationFrame(mountApp));
setTimeout(mountApp, 300);

// Optional performance measurement
reportWebVitals();