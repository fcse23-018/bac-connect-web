const XSS_PATTERNS = /[<>"'\\]|javascript:|onerror=|onclick=|onload=|onmouseover=|onfocus=|onblur=/gi;
const SQL_PATTERNS = /\b(SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|TRUNCATE|EXEC|UNION|OR\s+1=1)\b/i;

export function sanitizeText(input: string): string {
  return input.replace(XSS_PATTERNS, '').trim();
}

export function sanitizeMessage(input: string): string {
  return sanitizeText(input).substring(0, 5000);
}

export function sanitizeBio(input: string): string {
  return sanitizeText(input).substring(0, 500);
}

export function sanitizeListingTitle(input: string): string {
  return sanitizeText(input).substring(0, 100);
}

export function containsMaliciousContent(input: string): boolean {
  return XSS_PATTERNS.test(input) || SQL_PATTERNS.test(input);
}

export function isStrongPassword(password: string): boolean {
  return password.length >= 8
    && /[A-Z]/.test(password)
    && /[a-z]/.test(password)
    && /[0-9]/.test(password)
    && /[^A-Za-z0-9]/.test(password);
}
