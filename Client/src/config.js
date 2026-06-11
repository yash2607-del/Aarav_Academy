// Use empty string in development so Vite proxy handles requests seamlessly across all devices on the network.
export const API_URL = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace(/\/+$/, '') : "";
