const SENSITIVE_PATTERNS = [
  /eyJ[A-Za-z0-9_-]{10,}(?:\.[A-Za-z0-9_-]{10,})+/g,
  /sk_(?:live|test)_[A-Za-z0-9]{10,}/g,
  /pk_(?:live|test)_[A-Za-z0-9]{10,}/g,
  /ghp_[A-Za-z0-9]{36,}/g,
  /(?:"|')?(?:password|passwd|secret|token|api_key|apikey)(?:"|')?\s*(?::|=)\s*(?:"|')?[A-Za-z0-9_\-]{8,}(?:"|')?/gi,
];

const FRIENDLY_MESSAGES: Record<string, string> = {
  '23505': 'This record already exists.',
  '23503': 'Referenced record not found.',
  '42P01': 'Service temporarily unavailable.',
  'auth/invalid-email': 'Invalid email address.',
  'auth/user-not-found': 'No account found with this email.',
  'auth/wrong-password': 'Incorrect password.',
  'auth/email-already-in-use': 'An account with this email already exists.',
  'auth/too-many-requests': 'Too many attempts. Please try again later.',
  default: 'Something went wrong. Please try again.',
};

export function sanitizeError(error: unknown): string {
  const rawMessage = error instanceof Error ? error.message : String(error);

  let sanitized = rawMessage;
  for (const pattern of SENSITIVE_PATTERNS) {
    sanitized = sanitized.replace(pattern, '[REDACTED]');
  }

  for (const [code, message] of Object.entries(FRIENDLY_MESSAGES)) {
    if (rawMessage.includes(code)) return message;
  }

  if (sanitized.length > 200) sanitized = sanitized.substring(0, 200) + '...';

  return FRIENDLY_MESSAGES.default;
}
