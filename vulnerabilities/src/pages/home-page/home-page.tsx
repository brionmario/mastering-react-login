import type React from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {ShieldAlert, Code, FileWarning, MousePointer, Shield} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 bg-security-pattern">
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-white rounded-full shadow-md mb-6">
            <Shield className="h-10 w-10 text-secure" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-secure via-info to-warning bg-clip-text text-transparent">
            React Security Concepts
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            An interactive demonstration of how React handles various security concerns and potential vulnerabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <SecurityCard
            title="Default Escaping"
            description="React automatically escapes values before rendering them to prevent XSS attacks."
            icon={<ShieldAlert className="h-8 w-8 text-secure" />}
            href="/default-escaping"
            color="secure"
            level="Safe"
          />

          <SecurityCard
            title="dangerouslySetInnerHTML"
            description="A React-specific alternative to using innerHTML that requires explicit opt-in to security risks."
            icon={<Code className="h-8 w-8 text-warning" />}
            href="/dangerously-set-inner-html"
            color="warning"
            level="Caution"
          />

          <SecurityCard
            title="innerHTML"
            description="Direct DOM manipulation that bypasses React's protective mechanisms."
            icon={<FileWarning className="h-8 w-8 text-danger" />}
            href="/inner-html"
            color="danger"
            level="Risky"
          />

          <SecurityCard
            title="Ref"
            description="How refs can be used to access DOM elements directly and potential security implications."
            icon={<MousePointer className="h-8 w-8 text-info" />}
            href="/ref"
            color="info"
            level="Use Carefully"
          />
        </div>
      </div>
    </div>
  );
}

function SecurityCard({
  title,
  description,
  icon,
  href,
  color,
  level,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: 'secure' | 'warning' | 'danger' | 'info';
  level: string;
}) {
  const colorClasses = {
    secure: 'from-green-50 to-green-100 border-green-200 hover:shadow-green-100',
    warning: 'from-amber-50 to-amber-100 border-amber-200 hover:shadow-amber-100',
    danger: 'from-red-50 to-red-100 border-red-200 hover:shadow-red-100',
    info: 'from-blue-50 to-blue-100 border-blue-200 hover:shadow-blue-100',
  };

  const buttonClasses = {
    secure: 'bg-secure hover:bg-green-600 text-white',
    warning: 'bg-warning hover:bg-amber-600 text-white',
    danger: 'bg-danger hover:bg-red-600 text-white',
    info: 'bg-info hover:bg-blue-600 text-white',
  };

  return (
    <Card
      className={`h-full flex flex-col bg-gradient-to-br ${colorClasses[color]} border-2 transition-all duration-300 hover:shadow-xl`}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            <CardDescription className="text-base mt-2">{description}</CardDescription>
          </div>
          <div className="bg-white p-3 rounded-full shadow-md">{icon}</div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-white shadow-sm">
          Security Level: {level}
        </div>
        <p className="mt-4 text-slate-700">Learn how this security concept works in React and its implications.</p>
      </CardContent>
      <CardFooter>
        <a href={href} className="w-full">
          <Button className={`w-full py-6 text-lg ${buttonClasses[color]}`}>Explore Example</Button>
        </a>
      </CardFooter>
    </Card>
  );
}
