import {ChatInterface} from '@/components/chat-interface';
import {SparklesCore} from '@/components/sparkles';
import {TipOfTheDay} from '@/components/tip-of-the-day';
import Navbar from '@/components/navbar';

export default function Chat() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#4ADE80"
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          <TipOfTheDay />
          <ChatInterface />
        </div>
      </div>
    </main>
  );
}
