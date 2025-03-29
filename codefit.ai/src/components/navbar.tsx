'use client';

import {Button} from '@/components/ui/button';
import {motion} from 'framer-motion';
import logo from '@/assets/logo.png';
import {useAuthContext} from '@asgardeo/auth-react';
import {User} from 'lucide-react';

export default function Navbar() {
  const {state, signOut} = useAuthContext();
  const {isAuthenticated, isLoading, username} = state;

  return (
    <motion.nav
      initial={{y: -100}}
      animate={{y: 0}}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      <a href="/" className="flex items-center space-x-2">
        <img src={logo} alt="Codefit" className="h-8" />
      </a>

      <div className="md:flex items-center space-x-4">
        {!isLoading && isAuthenticated && (
          <>
            <div className="flex items-center mr-2 text-gray-300 hover:text-white transition-colors">
              <User className="h-4 w-4 mr-2 text-green-400" />
              <span className="font-medium">{username}</span>
            </div>
            <Button variant="ghost" className="text-white hover:text-green-400" onClick={() => signOut()}>
              Sign Out
            </Button>
          </>
        )}
      </div>
    </motion.nav>
  );
}
