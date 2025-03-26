import {ChatInterface} from '@/components/chat-interface';
import {SparklesCore} from '@/components/sparkles';
import {TipOfTheDay} from '@/components/tip-of-the-day';
import {Button} from '@/components/ui/button';
import {ArrowLeft} from 'lucide-react';

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
        <div className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10">
          <div className="flex items-center space-x-4">
            <a href="/">
              <Button variant="ghost" size="icon" className="text-white">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </a>
            <h1 className="text-white font-medium text-xl">CodeFit AI Assistant</h1>
          </div>
        </div>
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          <TipOfTheDay />
          <ChatInterface />
        </div>
      </div>
    </main>
  );
}
