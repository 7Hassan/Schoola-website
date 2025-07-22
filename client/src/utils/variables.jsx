export const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const normalizePhoneNumber = (input) => {
  if (!input) return '';
  let cleaned = input.replace(/[^0-9]/g, '');
  if (cleaned.startsWith('20')) {
    cleaned = cleaned.slice(2);
  } else if (cleaned.startsWith('0020')) {
    cleaned = cleaned.slice(4);
  }
  if (/^(10|11|12|15)/.test(cleaned)) {
    cleaned = '0' + cleaned;
  }
  if (!/^01[0-9]{9}$/.test(cleaned)) {
    return '';
  }

  return cleaned;
};
