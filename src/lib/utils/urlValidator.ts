export function sanitizeUrl(url: string): string {
  try {
    const parsed = new URL(url);

    const allowedSchemes = ['http:', 'https:', 'tel:', 'mailto:'];
    if (!allowedSchemes.includes(parsed.protocol)) {
      return '';
    }

    const blocklist = [
      'malicious-site.com',
      'phishing-site.com',
      'scam-site.com',
    ];
    if (blocklist.some((host) => parsed.hostname.includes(host))) {
      return '';
    }

    const xssPatterns = /[<>"']|javascript:|onerror=|onclick=|onload=/gi;
    if (xssPatterns.test(url)) {
      return '';
    }

    return parsed.toString();
  } catch {
    return '';
  }
}

export function sanitizePhone(phone: string): string {
  return phone.replace(/[^\d+]/g, '').slice(0, 15);
}

export function sanitizeEmail(email: string): string {
  return email.trim().toLowerCase();
}
