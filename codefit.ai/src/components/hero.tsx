import {Button} from '@/components/ui/button';
import {motion} from 'framer-motion';
import {FloatingIcons} from '@/components/floating-icons';
import {RoboAnimation} from './robo-animation';

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      {/* Floating fitness icons background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingIcons count={6} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5">Stay Fit</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {' '}
                While You Code
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
            className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto"
          >
            Your AI fitness assistant for software engineers. Combat sedentary habits with personalized workouts and get
            real-time guidance through interactive chat, tailored to your coding routine.
          </motion.p>

          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.4}}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="xxl" className="bg-green-600 hover:bg-green-700 text-white px-8">
              Get Started 🚀
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated fitness icon */}
      <div className="absolute bottom-0 right-0 w-96 h-96">
        <RoboAnimation />
      </div>
    </div>
  );
}
