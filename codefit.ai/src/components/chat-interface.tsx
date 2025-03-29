import type React from 'react';

import {useState, useRef, useEffect} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Send, Bot, User, Dumbbell, Brain, Timer} from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';
import {CouponPopup} from './coupon-popup';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content:
      "👋 Hi there! I'm your CodeFit AI assistant. I can help you create personalized workout routines, suggest exercises to do during coding breaks, provide nutrition advice for developers, and more. How can I help you today?",
    timestamp: new Date(),
  },
];

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(
      () => {
        const aiResponse = generateAIResponse(input);
        setMessages(prev => [...prev, aiResponse]);
        setIsTyping(false);
      },
      1000 + Math.random() * 2000,
    ); // Random delay between 1-3 seconds
  };

  const generateAIResponse = (userInput: string): Message => {
    const lowerInput = userInput.toLowerCase();
    let response = '';

    if (lowerInput.includes('workout') || lowerInput.includes('exercise')) {
      response =
        "Here's a quick 5-minute desk workout you can do between coding sessions:\n\n1. 20 seated shoulder rolls\n2. 15 desk push-ups\n3. 20 seated leg raises\n4. 10 chair squats\n5. 30-second wrist stretches\n\nThis helps combat the negative effects of sitting for long periods and improves circulation. Would you like more exercises or a longer routine?";
    } else if (lowerInput.includes('back pain') || lowerInput.includes('wrist pain')) {
      response =
        "Many developers experience back and wrist pain. For back pain, try these stretches:\n\n- Cat-cow stretch\n- Seated spinal twist\n- Child's pose\n\nFor wrist pain:\n- Wrist flexor and extensor stretches\n- Finger spreads\n- Wrist circles\n\nRemember to take breaks every 25-30 minutes of coding to stand up and stretch.";
    } else if (lowerInput.includes('nutrition') || lowerInput.includes('diet') || lowerInput.includes('food')) {
      response =
        'Brain-boosting foods for developers include:\n\n- Fatty fish (omega-3s)\n- Blueberries (antioxidants)\n- Dark chocolate (flavonoids)\n- Nuts and seeds (vitamin E)\n- Avocados (healthy fats)\n\nTry to avoid excessive caffeine and sugary snacks, which can lead to energy crashes. Staying hydrated is also crucial for cognitive function!';
    } else if (lowerInput.includes('break') || lowerInput.includes('pomodoro')) {
      response =
        'The Pomodoro Technique works well for many developers:\n\n1. Work for 25 minutes\n2. Take a 5-minute break (do quick stretches)\n3. After 4 cycles, take a longer 15-30 minute break\n\nDuring your breaks, try to look away from screens and move your body. Even a quick walk around your workspace helps reset your mind and body.';
    } else {
      response =
        "I'm here to help with your fitness needs as a developer. You can ask me about:\n\n- Quick exercises to do during coding breaks\n- Stretches for back, neck, or wrist pain\n- Nutrition advice for mental focus\n- Setting up an ergonomic workspace\n- Building a fitness routine that fits your coding schedule\n\nWhat would you like to know more about?";
    }

    return {
      id: Date.now().toString(),
      role: 'assistant',
      content: response,
      timestamp: new Date(),
    };
  };

  return (
    <div className="flex flex-col h-[calc(100vh-120px)]">
      <div className="flex-1 overflow-y-auto pr-4 space-y-6">
        <AnimatePresence>
          {messages.map(message => (
            <motion.div
              key={message.id}
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.3}}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div
                  className={`flex items-center justify-center h-8 w-8 rounded-full flex-shrink-0 ${
                    message.role === 'user' ? 'bg-green-600 ml-2' : 'bg-gray-700 mr-2'
                  }`}
                >
                  {message.role === 'user' ? (
                    <User className="h-5 w-5 text-white" />
                  ) : (
                    <Bot className="h-5 w-5 text-white" />
                  )}
                </div>
                <div
                  className={`p-3 rounded-lg ${
                    message.role === 'user' ? 'bg-green-600 text-white' : 'bg-gray-800 text-gray-100'
                  }`}
                >
                  <div className="whitespace-pre-line">{message.content}</div>
                </div>
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} className="flex justify-start">
              <div className="flex flex-row">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-700 mr-2">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="p-3 rounded-lg bg-gray-800 text-gray-100">
                  <div className="flex space-x-2">
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{animationDelay: '0ms'}}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{animationDelay: '150ms'}}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{animationDelay: '300ms'}}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <div className="mt-4">
        <form onSubmit={handleSend} className="flex space-x-2">
          <Input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask about workouts, stretches, nutrition..."
            className="flex-1 bg-gray-800 border-gray-700 text-white"
          />
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>

      <div className="mt-4 flex justify-center space-x-4">
        <SuggestionButton
          icon={<Dumbbell className="mr-2 h-4 w-4" />}
          text="Quick desk exercises"
          onClick={() => setInput('Show me some quick desk exercises I can do')}
        />
        <SuggestionButton
          icon={<Brain className="mr-2 h-4 w-4" />}
          text="Brain foods"
          onClick={() => setInput('What foods help with focus while coding?')}
        />
        <SuggestionButton
          icon={<Timer className="mr-2 h-4 w-4" />}
          text="Break schedule"
          onClick={() => setInput('How should I schedule breaks during coding?')}
        />
      </div>
      <CouponPopup />
    </div>
  );
}

function SuggestionButton({icon, text, onClick}: {icon: React.ReactNode; text: string; onClick: () => void}) {
  return (
    <Button
      variant="outline"
      className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
      onClick={onClick}
    >
      {icon}
      {text}
    </Button>
  );
}
