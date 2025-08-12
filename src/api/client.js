import * as Sentry from '@sentry/browser';

const DEFAULT_TIMEOUT = 5000; // 5 seconds

export async function apiRequest(url, { timeout = DEFAULT_TIMEOUT, fallback = null, ...options } = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timer);

    if (!response.ok) {
      const error = new Error(`Request failed with status ${response.status}`);
      Sentry.captureException(error);
      console.error(error);
      return fallback ?? { error: 'Une erreur est survenue. Veuillez réessayer plus tard.' };
    }

    return await response.json();
  } catch (err) {
    if (err.name === 'AbortError') {
      console.error('Timeout de la requête', err);
    } else {
      console.error('Erreur lors de la requête API', err);
    }
    Sentry.captureException(err);
    return fallback ?? { error: 'Impossible de contacter le serveur. Veuillez réessayer plus tard.' };
  }
}
