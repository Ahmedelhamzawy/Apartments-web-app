'use client';
import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import bootstrap only in the browser
    import('bootstrap/dist/js/bootstrap.bundle.min.js').catch((error) => {
      console.error('Failed to load Bootstrap:', error);
    });
  }, []);

  return null; // it doesn't render anything
}
