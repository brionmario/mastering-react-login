'use client';

import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {X, Ticket, Copy, Check, ExternalLink} from 'lucide-react';
import {Button} from '@/components/ui/button';

interface CouponPopupProps {
  couponCode?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onClose?: () => void;
  defaultShow?: boolean;
}

export function CouponPopup({
  couponCode = 'CODEFIT25',
  title = 'Special Offer!',
  description = 'Get 25% off your first month of CodeFit.ai Premium',
  buttonText = 'Claim Offer',
  onClose,
}: CouponPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [claimURL, setClaimURL] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    const couponCode = searchParams?.get('coupon_code');
    const claimURL = searchParams?.get('claim_url');

    const shouldShow = couponCode && claimURL;

    if (shouldShow) {
      setClaimURL(claimURL);

      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{opacity: 0, scale: 0.9, y: 20}}
            animate={{opacity: 1, scale: 1, y: 0}}
            exit={{opacity: 0, scale: 0.9, y: 20}}
            transition={{type: 'spring', damping: 25, stiffness: 300}}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 max-w-md w-full"
          >
            <div className="bg-gray-900 border border-green-500/30 rounded-lg shadow-2xl overflow-hidden">
              {/* Header with close button */}
              <div className="relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleClose}
                    className="text-white hover:bg-black/20 rounded-full"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Decorative header background */}
                <div className="bg-gradient-to-r from-green-600 to-green-400 p-6 pt-12">
                  <div className="flex justify-center">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                      <Ticket className="h-10 w-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* Coupon details */}
                <div className="bg-gradient-to-b from-green-500/20 to-transparent px-6 pb-6 text-center">
                  <h3 className="text-2xl font-bold text-white mt-4">{title}</h3>
                  <p className="text-gray-300 mt-2">{description}</p>
                </div>
              </div>

              {/* Coupon code */}
              <div className="p-6 pt-0">
                <div className="flex items-center justify-between bg-gray-800 rounded-lg p-3 mb-6">
                  <div className="font-mono text-lg font-bold text-green-400">{couponCode}</div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={copyToClipboard}
                    className="text-gray-300 hover:text-white hover:bg-gray-700"
                  >
                    {copied ? <Check className="h-4 w-4 mr-1 text-green-400" /> : <Copy className="h-4 w-4 mr-1" />}
                    {copied ? 'Copied!' : 'Copy'}
                  </Button>
                </div>

                {/* Action button */}
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => {
                    if (claimURL) {
                      window.open(claimURL, '_blank');
                    }
                  }}
                >
                  {buttonText}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>

                {/* Fine print */}
                <p className="text-xs text-gray-400 text-center mt-4">
                  Offer valid for new users only. Expires in 7 days.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
