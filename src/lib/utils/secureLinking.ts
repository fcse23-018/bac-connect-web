type SecureLinkType = 'external' | 'phone' | 'email';

export function openSecure(url: string, type: SecureLinkType = 'external'): void {
  const sanitized = type === 'phone'
    ? `tel:${url.replace(/[^\d+]/g, '')}`
    : type === 'email'
    ? `mailto:${url.trim().toLowerCase()}`
    : url;

  if (!sanitized) return;

  const confirmed = type === 'external'
    ? window.confirm(`You are about to leave BAC Connect:\n\n${sanitized}\n\nProceed?`)
    : true;

  if (confirmed) {
    window.open(sanitized, '_blank', 'noopener,noreferrer');
    console.info(`[SecureLink] Opened: ${type} -> ${sanitized.substring(0, 100)}`);
  }
}

export function openPhone(phone: string): void {
  openSecure(phone, 'phone');
}

export function openEmail(email: string): void {
  openSecure(email, 'email');
}

export function openExternal(url: string): void {
  openSecure(url, 'external');
}
