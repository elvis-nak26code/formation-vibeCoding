const BASE = (import.meta.env.VITE_API_URL || 'http://localhost:5000').replace(/\/$/, '');

export async function api(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.message || 'Erreur réseau');
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

export const submitRegistration = (payload) =>
  api('/api/registrations', { method: 'POST', body: JSON.stringify(payload) });

export const trackVisit = (payload) =>
  api('/api/visits', { method: 'POST', body: JSON.stringify(payload) }).catch(() => {});
