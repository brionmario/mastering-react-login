'use client';

import {useState} from 'react';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {ArrowLeft, AlertTriangle, Code} from 'lucide-react';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';

export default function DangerouslySetInnerHTMLPage() {
  const [userInput, setUserInput] = useState('<b>This text is bold</b> and <i>this is italic</i>');

  // This is for educational purposes only
  const createMarkup = (html: string) => {
    return {__html: html};
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-slate-50 bg-security-pattern">
      <div className="container mx-auto py-10 px-4">
        <a
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-slate-700 hover:text-warning transition-colors bg-white px-4 py-2 rounded-full shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </a>

        <div className="flex items-center justify-center mb-10">
          <div className="bg-white p-3 rounded-full shadow-md mr-4">
            <Code className="h-8 w-8 text-warning" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800">dangerouslySetInnerHTML in React</h1>
        </div>

        <Alert
          variant="warning"
          className="mb-10 border-2 border-amber-300 bg-gradient-to-r from-amber-100 to-amber-50 shadow-lg"
        >
          <AlertTriangle className="h-5 w-5 text-warning" />
          <AlertTitle className="text-amber-800 font-bold">Warning</AlertTitle>
          <AlertDescription className="text-amber-700">
            Using dangerouslySetInnerHTML can expose your application to cross-site scripting (XSS) attacks if you
            render untrusted content. Only use it when absolutely necessary and with trusted content.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Card className="bg-white border-2 border-amber-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-amber-100 to-amber-50 border-b border-amber-200">
              <div className="flex items-center gap-3">
                <Code className="h-6 w-6 text-warning" />
                <CardTitle>What is dangerouslySetInnerHTML?</CardTitle>
              </div>
              <CardDescription className="text-slate-600">
                React's replacement for using innerHTML in the browser DOM
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4 text-slate-700">
                dangerouslySetInnerHTML is React's replacement for using innerHTML in the browser DOM. The name is
                intentionally scary to remind developers that this is risky.
              </p>
              <p className="text-slate-700">
                It requires passing an object with a __html key to remind you that it's unsafe. [^1]
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-amber-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-amber-100 to-amber-50 border-b border-amber-200">
              <div className="flex items-center gap-3">
                <Code className="h-6 w-6 text-warning" />
                <CardTitle>Try It Yourself</CardTitle>
              </div>
              <CardDescription className="text-slate-600">
                Enter some HTML to see how dangerouslySetInnerHTML works
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <Input
                  value={userInput}
                  onChange={e => setUserInput(e.target.value)}
                  placeholder="Enter HTML"
                  className="border-2 border-slate-200 focus:border-warning focus:ring-warning"
                />

                <div className="p-4 border-2 border-slate-200 rounded-md bg-slate-50">
                  <h3 className="font-medium mb-2 text-slate-700">Raw Input:</h3>
                  <pre className="bg-white p-3 rounded text-sm overflow-x-auto border border-slate-200">
                    {userInput}
                  </pre>
                </div>

                <div className="p-4 border-2 border-slate-200 rounded-md bg-slate-50">
                  <h3 className="font-medium mb-2 text-slate-700">Rendered with dangerouslySetInnerHTML:</h3>
                  <div
                    className="bg-white p-3 rounded border border-slate-200 min-h-[50px]"
                    dangerouslySetInnerHTML={createMarkup(userInput)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white border-2 border-amber-200 shadow-lg max-w-3xl mx-auto">
          <CardHeader className="bg-gradient-to-r from-amber-100 to-amber-50 border-b border-amber-200">
            <CardTitle>Safe Usage</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-4 text-slate-700 font-medium">Only use dangerouslySetInnerHTML when:</p>
            <ul className="list-none pl-0 space-y-3">
              <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-md border border-slate-200">
                <div className="bg-warning rounded-full p-1 mt-1 flex-shrink-0">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <span className="text-slate-700">You're working with trusted content (e.g., content you control)</span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-md border border-slate-200">
                <div className="bg-warning rounded-full p-1 mt-1 flex-shrink-0">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <span className="text-slate-700">You're using a trusted sanitization library to clean user input</span>
              </li>
              <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-md border border-slate-200">
                <div className="bg-warning rounded-full p-1 mt-1 flex-shrink-0">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <span className="text-slate-700">You need to render HTML from a trusted CMS or Markdown parser</span>
              </li>
            </ul>
            <p className="mt-6 text-slate-700 bg-amber-50 p-4 rounded-md border border-amber-200">
              The __html object should be created as close to where the HTML is generated as possible, like the example
              does in the createMarkup function. [^1]
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
