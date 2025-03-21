export function apiUrlFactory(): string {
    return window.location.hostname.includes('localhost')
      ? 'https://dev.api.example.com'
      : 'https://prod.api.example.com';
  }