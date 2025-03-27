'use client';

import {useRef, useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {ArrowLeft, AlertTriangle, MousePointer, Info} from 'lucide-react';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';

export default function RefPage() {
  const [userInput, setUserInput] = useState('<b>This text is bold</b> and <i>this is italic</i>');
  const outputRef = useRef<HTMLDivElement>(null);

  const handleUpdateDOM = () => {
    if (outputRef.current) {
      // This is for educational purposes only
      outputRef.current.innerHTML = userInput;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-50 bg-security-pattern">
      <div className="container mx-auto py-10 px-4">
        <a
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-slate-700 hover:text-info transition-colors bg-white px-4 py-2 rounded-full shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </a>

        <div className="flex items-center justify-center mb-10">
          <div className="bg-white p-3 rounded-full shadow-md mr-4">
            <MousePointer className="h-8 w-8 text-info" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800">Refs and DOM Access</h1>
        </div>

        <Alert className="mb-10 border-2 border-blue-300 bg-gradient-to-r from-blue-100 to-blue-50 shadow-lg">
          <Info className="h-5 w-5 text-info" />
          <AlertTitle className="text-blue-800 font-bold">Caution</AlertTitle>
          <AlertDescription className="text-blue-700">
            While refs are a legitimate React feature, they can be misused to perform unsafe DOM operations. This
            example demonstrates potential security implications.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Card className="bg-white border-2 border-blue-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-100 to-blue-50 border-b border-blue-200">
              <div className="flex items-center gap-3">
                <MousePointer className="h-6 w-6 text-info" />
                <CardTitle>What are Refs?</CardTitle>
              </div>
              <CardDescription className="text-slate-600">
                Refs provide a way to access DOM nodes directly
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4 text-slate-700">
                Refs in React provide a way to access DOM nodes or React elements created in the render method.
              </p>
              <p className="mb-4 text-slate-700">
                While refs are a legitimate and useful feature, they can be misused to perform unsafe DOM operations
                that bypass React's protective mechanisms.
              </p>
              <p className="text-slate-700">
                Common legitimate uses for refs include managing focus, text selection, media playback, triggering
                imperative animations, and integrating with third-party DOM libraries.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-blue-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-100 to-blue-50 border-b border-blue-200">
              <div className="flex items-center gap-3">
                <MousePointer className="h-6 w-6 text-info" />
                <CardTitle>Try It Yourself</CardTitle>
              </div>
              <CardDescription className="text-slate-600">
                See how refs can be used to manipulate the DOM directly
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <Input
                  value={userInput}
                  onChange={e => setUserInput(e.target.value)}
                  placeholder="Enter HTML"
                  className="border-2 border-slate-200 focus:border-info focus:ring-info"
                />

                <Button onClick={handleUpdateDOM} className="w-full bg-info hover:bg-blue-600 text-white">
                  Update DOM with Ref
                </Button>

                <div className="p-4 border-2 border-slate-200 rounded-md bg-slate-50">
                  <h3 className="font-medium mb-2 text-slate-700">Raw Input:</h3>
                  <pre className="bg-white p-3 rounded text-sm overflow-x-auto border border-slate-200">
                    {userInput}
                  </pre>
                </div>

                <div className="p-4 border-2 border-slate-200 rounded-md bg-slate-50">
                  <h3 className="font-medium mb-2 text-slate-700">DOM Element (controlled by ref):</h3>
                  <div ref={outputRef} className="bg-white p-3 rounded border border-slate-200 min-h-[50px]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white border-2 border-blue-200 shadow-lg max-w-3xl mx-auto">
          <CardHeader className="bg-gradient-to-r from-blue-100 to-blue-50 border-b border-blue-200">
            <CardTitle>Security Implications</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-4 text-slate-700 font-medium">When using refs to directly manipulate the DOM:</p>
            <ul className="list-none pl-0 space-y-3">
              <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-md border border-slate-200">
                <div className="bg-info rounded-full p-1 mt-1 flex-shrink-0">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <span className="text-slate-700">You bypass React's virtual DOM and its security mechanisms</span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-md border border-slate-200">
                <div className="bg-info rounded-full p-1 mt-1 flex-shrink-0">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <span className="text-slate-700">
                  You may introduce cross-site scripting (XSS) vulnerabilities if handling untrusted content
                </span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-md border border-slate-200">
                <div className="bg-info rounded-full p-1 mt-1 flex-shrink-0">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <span className="text-slate-700">
                  You can create inconsistencies between React's internal state and the actual DOM
                </span>
              </li>
            </ul>
            <p className="mt-6 text-slate-700 bg-blue-50 p-4 rounded-md border border-blue-200">
              Always use refs responsibly and avoid direct DOM manipulation when possible. If you need to render HTML
              content, prefer React's declarative approach or use dangerouslySetInnerHTML with proper sanitization.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
