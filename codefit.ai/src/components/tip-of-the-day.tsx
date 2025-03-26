'use client';

import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {X, Lightbulb, ArrowRight, ArrowLeft} from 'lucide-react';
import {Button} from '@/components/ui/button';

// Collection of fitness tips for developers
const TIPS = [
  {
    title: 'The 20-20-20 Rule',
    content:
      'Every 20 minutes, look at something 20 feet away for 20 seconds to reduce eye strain during long coding sessions.',
    icon: '👁️',
  },
  {
    title: 'Wrist Stretches',
    content:
      'Extend your arm with palm up, then gently pull fingers back with other hand. Hold for 15-30 seconds and switch hands.',
    icon: '🖐️',
  },
  {
    title: 'Desk Push-ups',
    content:
      'Place hands on desk edge, shoulder-width apart. Step back, lower chest toward desk, then push back up. Do 10-15 reps between debugging sessions.',
    icon: '💪',
  },
  {
    title: 'Hydration Reminder',
    content:
      'Keep a water bottle at your desk and aim to refill it at least 3-4 times during your workday. Proper hydration improves cognitive function.',
    icon: '💧',
  },
  {
    title: 'Posture Check',
    content:
      'Set a timer to check your posture every hour. Ensure your back is straight, shoulders relaxed, and screen at eye level.',
    icon: '🧍',
  },
  {
    title: 'Breathing Exercise',
    content:
      'When stuck on a bug, take 5 deep breaths: inhale for 4 counts, hold for 4, exhale for 6. Reduces stress and improves focus.',
    icon: '🧘',
  },
  {
    title: 'Finger Stretches',
    content:
      'Spread fingers wide, hold for 5 seconds, then make a fist. Repeat 10 times to prevent finger stiffness from typing.',
    icon: '👆',
  },
];

interface TipOfTheDayProps {
  onClose?: () => void;
  autoShowInterval?: number | null;
}

export function TipOfTheDay({onClose, autoShowInterval = 500}: TipOfTheDayProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [customTip, setCustomTip] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const customTipContent = params.get('tip');

    if (customTipContent) {
      setCustomTip(customTipContent);
      setIsVisible(true);
    } else {
      const lastShown = localStorage.getItem('tipLastShown');
      const shouldShow = !lastShown || (autoShowInterval && Date.now() - parseInt(lastShown) > autoShowInterval);

      if (shouldShow) {
        setCurrentTipIndex(Math.floor(Math.random() * TIPS.length));
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1500);

        return () => clearTimeout(timer);
      }
    }
  }, [autoShowInterval]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('tipLastShown', Date.now().toString());
    if (onClose) onClose();
  };

  const nextTip = () => {
    setHasInteracted(true);
    setCurrentTipIndex(prev => (prev + 1) % TIPS.length);
  };

  const prevTip = () => {
    setHasInteracted(true);
    setCurrentTipIndex(prev => (prev - 1 + TIPS.length) % TIPS.length);
  };

  const currentTip = TIPS[currentTipIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{opacity: 0, scale: 0.9, y: 20}}
          animate={{opacity: 1, scale: 1, y: 0}}
          exit={{opacity: 0, scale: 0.9, y: 20}}
          transition={{type: 'spring', damping: 25, stiffness: 300}}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <div className="bg-gray-900 border border-green-500/30 rounded-lg shadow-lg overflow-hidden">
            <div className="flex items-center justify-between bg-gradient-to-r from-green-600 to-green-500 px-4 py-3">
              <div className="flex items-center space-x-2">
                <Lightbulb className="h-5 w-5 text-white" />
                <h3 className="font-medium text-white">Tip of the Day</h3>
              </div>
              <Button variant="ghost" size="icon" onClick={handleClose} className="text-white hover:bg-green-700/50">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-5">
              {customTip ? (
                <div className="text-gray-300 mb-4">
                  <p dangerouslySetInnerHTML={{__html: customTip}} />
                </div>
              ) : (
                <>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-3xl">{currentTip.icon}</div>
                    <h4 className="text-lg font-medium text-white">{currentTip.title}</h4>
                  </div>
                  <p className="text-gray-300 mb-4">{currentTip.content}</p>
                </>
              )}

              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevTip}
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextTip}
                    className="border-gray-700 text-gray-300 hover:bg-gray-800"
                  >
                    Next
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>

                {hasInteracted && (
                  <Button variant="ghost" size="sm" onClick={handleClose} className="text-gray-400 hover:text-white">
                    Got it
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
