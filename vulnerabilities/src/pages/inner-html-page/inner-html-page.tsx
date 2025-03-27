'use client';

import {useEffect, useRef, useState} from 'react';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {ArrowLeft, FileWarning, XCircle} from 'lucide-react';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';

export default function InnerHTMLPage() {
  const [userInput, setUserInput] = useState('<b>This text is bold</b> and <i>this is italic</i>');
  const outputRef = useRef<HTMLDivElement>(null);

  // This is for educational purposes only
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.innerHTML = userInput;
    }
  }, [userInput]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-slate-50 bg-security-pattern">
      <div className="container mx-auto py-10 px-4">
        <a
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-slate-700 hover:text-danger transition-colors bg-white px-4 py-2 rounded-full shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </a>

        <div className="flex items-center justify-center mb-10">
          <div className="bg-white p-3 rounded-full shadow-md mr-4">
            <FileWarning className="h-8 w-8 text-danger" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800">Direct innerHTML Manipulation</h1>
        </div>

        <Alert
          variant="destructive"
          className="mb-10 border-2 border-red-300 bg-gradient-to-r from-red-100 to-red-50 shadow-lg"
        >
          <XCircle className="h-5 w-5 text-danger" />
          <AlertTitle className="text-red-800 font-bold">High Risk</AlertTitle>
          <AlertDescription className="text-red-700">
            Directly manipulating innerHTML bypasses React's protective mechanisms and should be avoided. This example
            is for educational purposes only.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Card className="bg-white border-2 border-red-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-100 to-red-50 border-b border-red-200">
              <div className="flex items-center gap-3">
                <FileWarning className="h-6 w-6 text-danger" />
                <CardTitle>Direct DOM Manipulation</CardTitle>
              </div>
              <CardDescription className="text-slate-600">Using innerHTML directly with DOM references</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4 text-slate-700">
                When you directly manipulate the DOM using innerHTML, you bypass React's virtual DOM and its built-in
                protections.
              </p>
              <p className="text-slate-700">
                This approach is discouraged in React applications as it can lead to security vulnerabilities and make
                your code harder to maintain.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-red-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-100 to-red-50 border-b border-red-200">
              <div className="flex items-center gap-3">
                <FileWarning className="h-6 w-6 text-danger" />
                <CardTitle>Try It Yourself</CardTitle>
              </div>
              <CardDescription className="text-slate-600">
                Enter some HTML to see direct innerHTML manipulation
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <Input
                  value={userInput}
                  onChange={e => setUserInput(e.target.value)}
                  placeholder="Enter HTML"
                  className="border-2 border-slate-200 focus:border-danger focus:ring-danger"
                />

                <div className="p-4 border-2 border-slate-200 rounded-md bg-slate-50">
                  <h3 className="font-medium mb-2 text-slate-700">Raw Input:</h3>
                  <pre className="bg-white p-3 rounded text-sm overflow-x-auto border border-slate-200">
                    {userInput}
                  </pre>
                </div>

                <div className="p-4 border-2 border-slate-200 rounded-md bg-slate-50">
                  <h3 className="font-medium mb-2 text-slate-700">Rendered with direct innerHTML:</h3>
                  <div ref={outputRef} className="bg-white p-3 rounded border border-slate-200 min-h-[50px]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white border-2 border-red-200 shadow-lg max-w-3xl mx-auto">
          <CardHeader className="bg-gradient-to-r from-red-100 to-red-50 border-b border-red-200">
            <CardTitle>Why Avoid Direct DOM Manipulation</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="list-none pl-0 space-y-3">
              <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-md border border-slate-200">
                <div className="bg-danger rounded-full p-1 mt-1 flex-shrink-0">
                  <XCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-slate-700">Bypasses React's security mechanisms</span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-md border border-slate-200">
                <div className="bg-danger rounded-full p-1 mt-1 flex-shrink-0">
                  <XCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-slate-700">Can lead to cross-site scripting (XSS) vulnerabilities</span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-md border border-slate-200">
                <div className="bg-danger rounded-full p-1 mt-1 flex-shrink-0">
                  <XCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-slate-700">Makes your code harder to maintain and debug</span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-md border border-slate-200">
                <div className="bg-danger rounded-full p-1 mt-1 flex-shrink-0">
                  <XCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-slate-700">Can cause unexpected behavior with React's rendering cycle</span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-md border border-slate-200">
                <div className="bg-danger rounded-full p-1 mt-1 flex-shrink-0">
                  <XCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-slate-700">Reduces the performance benefits of React's virtual DOM</span>
              </li>
            </ul>
            <p className="mt-6 text-slate-700 bg-red-50 p-4 rounded-md border border-red-200">
              If you need to render HTML in React, use dangerouslySetInnerHTML with proper sanitization instead.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
