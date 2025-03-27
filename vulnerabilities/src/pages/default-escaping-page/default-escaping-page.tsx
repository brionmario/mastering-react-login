'use client';

import {useState} from 'react';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {ArrowLeft, ShieldCheck, Shield} from 'lucide-react';

export default function DefaultEscapingPage() {
  const [userInput, setUserInput] = useState('<script>alert("XSS attack!");</script>');

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-slate-50 bg-security-pattern">
      <div className="container mx-auto py-10 px-4">
        <a
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-slate-700 hover:text-secure transition-colors bg-white px-4 py-2 rounded-full shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </a>

        <div className="flex items-center justify-center mb-10">
          <div className="bg-white p-3 rounded-full shadow-md mr-4">
            <Shield className="h-8 w-8 text-secure" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800">Default Escaping in React</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Card className="bg-white border-2 border-green-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-100 to-green-50 border-b border-green-200">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-secure" />
                <CardTitle>How React Protects You</CardTitle>
              </div>
              <CardDescription className="text-slate-600">
                React automatically escapes any values before rendering them
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="mb-4 text-slate-700">
                By default, React DOM escapes any values embedded in JSX before rendering them. This ensures that you
                can never inject anything that's not explicitly written in your application.
              </p>
              <p className="text-slate-700">
                Everything is converted to a string before being rendered, which prevents XSS attacks.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-green-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-100 to-green-50 border-b border-green-200">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-secure" />
                <CardTitle>Try It Yourself</CardTitle>
              </div>
              <CardDescription className="text-slate-600">Enter some text with HTML or script tags</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <Input
                  value={userInput}
                  onChange={e => setUserInput(e.target.value)}
                  placeholder="Enter text with HTML tags"
                  className="border-2 border-slate-200 focus:border-secure focus:ring-secure"
                />

                <div className="p-4 border-2 border-slate-200 rounded-md bg-slate-50">
                  <h3 className="font-medium mb-2 text-slate-700">Raw Input:</h3>
                  <pre className="bg-white p-3 rounded text-sm overflow-x-auto border border-slate-200">
                    {userInput}
                  </pre>
                </div>

                <div className="p-4 border-2 border-slate-200 rounded-md bg-slate-50">
                  <h3 className="font-medium mb-2 text-slate-700">Rendered Output:</h3>
                  <div className="bg-white p-3 rounded border border-slate-200 min-h-[50px]">{userInput}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white border-2 border-green-200 shadow-lg max-w-3xl mx-auto">
          <CardHeader className="bg-gradient-to-r from-green-100 to-green-50 border-b border-green-200">
            <CardTitle>Why This Matters</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="bg-secure rounded-full p-2 mt-1">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700">
                Without this protection, applications would be vulnerable to cross-site scripting (XSS) attacks. React's
                automatic escaping is a key security feature that helps protect your application and users.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

