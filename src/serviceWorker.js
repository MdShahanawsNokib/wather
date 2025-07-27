// This optional code is used to register a service worker.
// register() is not called by default in React apps.

// A service worker helps your app work offline and load faster by caching files.
// ⚠️ Important: Updates only apply after the tab is closed and reopened.

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' || // IPv6 localhost
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/ // IPv4 localhost
  )
);

// Main function to register the service worker
export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return; // Service worker won’t work if public URL is on a different domain (e.g., CDN)
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // If running on localhost, check if SW exists
        checkValidServiceWorker(swUrl, config);

        navigator.serviceWorker.ready.then(() => {
          console.log(
            'This app is being served cache-first by a service worker. Learn more: https://bit.ly/CRA-PWA'
          );
        });
      } else {
        // If not localhost, register the service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

// Register the actual service worker and handle updates
function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (!installingWorker) return;

        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // App was updated, but old SW still controls it
              console.log('New content is available. Close all tabs to update. See https://bit.ly/CRA-PWA');
              if (config && config.onUpdate) config.onUpdate(registration);
            } else {
              // App has been cached for offline use
              console.log('Content is cached for offline use.');
              if (config && config.onSuccess) config.onSuccess(registration);
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error('Service worker registration failed:', error);
    });
}

// For localhost: Check if a valid SW exists. If not, reload the app.
function checkValidServiceWorker(swUrl, config) {
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' },
  })
    .then((response) => {
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType && contentType.indexOf('javascript') === -1)
      ) {
        // No valid SW found, unregister any existing one and reload
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Valid SW found
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log('No internet. App is running in offline mode.');
    });
}

// Call this to remove/unregister the service worker
export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error('Error unregistering service worker:', error);
      });
  }
}
