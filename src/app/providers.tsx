'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    autocapture: false, // We don't need events here - just page views is fine.
    persistence: 'memory', // No cookies/local storage please
    advanced_disable_decide: true, // We don't need dynamic features, skip checking
    disable_session_recording: false, // Disabled server-side, but disable explicitly here too
  });
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
