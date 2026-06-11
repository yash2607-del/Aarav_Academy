// Use empty string in development (Vite proxy), and the exact Vercel backend URL in production.
export const API_URL = import.meta.env.VITE_API_URL 
  ? import.meta.env.VITE_API_URL.replace(/\/+$/, '') 
  : (import.meta.env.DEV ? "" : "https://aarav-academy-ov2h.vercel.app");
