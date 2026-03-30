import React, { lazy, Suspense } from 'react';
import { Toaster } from 'sonner';

const LandingPage = lazy(() => import('./components/LandingPage'));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#FAF9F7]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0F2A4A]"></div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <Toaster position="top-right" />
      <Suspense fallback={<LoadingSpinner />}>
        <LandingPage />
      </Suspense>
    </div>
  );
}
