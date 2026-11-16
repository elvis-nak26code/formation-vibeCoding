import { useEffect } from 'react';
import { trackVisit } from '../lib/api';

function getOrCreate(key, generator) {
  try {
    let v = localStorage.getItem(key);
    if (!v) {
      v = generator();
      localStorage.setItem(key, v);
    }
    return v;
  } catch {
    return generator();
  }
}

const uid = () => Math.random().toString(36).slice(2) + Date.now().toString(36);

export function useVisit(page = '/') {
  useEffect(() => {
    const anonymousId = getOrCreate('vc_anon', uid);
    const sessionId = getOrCreate('vc_session', uid);
    const source = document.referrer ? new URL(document.referrer).hostname : 'direct';
    trackVisit({ anonymousId, sessionId, page, source });
  }, [page]);
}
