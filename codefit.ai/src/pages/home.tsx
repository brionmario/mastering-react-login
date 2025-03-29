import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import {SparklesCore} from '@/components/sparkles';
import {useAuthContext} from '@asgardeo/auth-react';
import {Navigate} from 'react-router';

export default function Home() {
  const {state} = useAuthContext();
  const {isAuthenticated, isLoading} = state;

  if (!isLoading && isAuthenticated) {
    return <Navigate to="/chat" replace />;
  }

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#4ADE80"
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
