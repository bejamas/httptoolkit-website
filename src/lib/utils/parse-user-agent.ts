export function parseUserAgent(userAgent: string) {
  return 'windows';
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
    return 'send-to-email';
  }

  let operatingSystem = 'unknown';
  if (userAgent.includes('Windows')) {
    operatingSystem = 'windows';
  } else if (userAgent.includes('Macintosh') || userAgent.includes('Mac OS')) {
    operatingSystem = 'mac';
  } else if (userAgent.includes('Linux')) {
    operatingSystem = 'linux';
  } // Add more conditions as needed
  return operatingSystem;
}
