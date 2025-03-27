'use client';

import {Button} from '@/components/ui/button';
import {Activity} from 'lucide-react';
import {motion} from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav
      initial={{y: -100}}
      animate={{y: 0}}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      <a href="/" className="flex items-center space-x-2">
        <Activity className="w-8 h-8 text-green-500" />
        <span className="text-white font-medium text-xl">CodeFit.ai</span>
      </a>

      <div className="md:flex items-center space-x-4">
        <Button variant="ghost" className="text-white hover:text-green-400">
          Sign Out
        </Button>
        <a href="/chat">
          <Button variant="outline" className="text-white border-green-500 hover:bg-green-500/20">
            AI Chat
          </Button>
        </a>
      </div>
    </motion.nav>
  );
}
