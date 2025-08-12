import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: process.env.SENTRY_DSN || '',
  tracesSampleRate: 1.0,
});

export function initApp() {
  console.log('Application initialisée avec Sentry');
}

initApp();
