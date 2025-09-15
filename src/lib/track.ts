'use client';

declare global {
  interface Window {
    umami: {
      track: (name: string, data?: Record<string, unknown>) => void;
    };
  }
}

export function track(name: string, data?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.umami?.track) {
    window.umami.track(name, data);
  }
}