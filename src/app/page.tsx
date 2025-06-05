"use client";

import React from 'react';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AlertTriangle, Zap, Mail } from 'lucide-react';

export default function UnderConstructionPage() {
  const [progress, setProgress] = React.useState(13);
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(Math.floor(Math.random() * 30) + 40), 500); // Random progress between 40-70 for simulation
    setCurrentYear(new Date().getFullYear()); // Set current year on client to avoid hydration mismatch
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden bg-background">
      {/* Background Image */}
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="MAX Background"
        fill
        objectFit="cover"
        className="absolute inset-0 z-0 filter blur-sm opacity-30"
        data-ai-hint="futuristic abstract"
        priority
      />

      {/* Content */}
      <main className="relative z-20 flex flex-col items-center text-center space-y-8 max-w-3xl w-full">
        <Card className="bg-card/90 backdrop-blur-lg shadow-2xl w-full border-border hover:shadow-primary/20 transition-shadow duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="w-16 h-16 sm:w-20 sm:h-20 text-accent animate-pulse" />
            </div>
            <CardTitle className="font-headline text-4xl sm:text-5xl font-extrabold">
              MAX还没有做此页面
            </CardTitle>
            <CardDescription className="font-headline text-2xl sm:text-3xl mt-2">
              Under Construction
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 px-4 sm:px-6 pb-6">
            <p className="text-base sm:text-lg">
              我们正在努力构建一些令人惊叹的东西！请稍后再回来查看。
              <br />
              We're working hard to build something amazing! Please check back later.
            </p>

            {/* Progress Bar */}
            <div className="w-full max-w-md mx-auto pt-4">
              <Progress value={progress} className="w-full h-3 bg-primary/20 [&>div]:bg-accent rounded-full" />
              <p className="text-sm text-muted-foreground mt-2">{progress}% Complete (Simulated)</p>
            </div>
          </CardContent>
        </Card>

        {/* Promotional Area */}
        <section className="w-full pt-8">
          <Card className="bg-card/90 backdrop-blur-lg shadow-xl w-full border-border hover:shadow-accent/20 transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-headline text-2xl sm:text-3xl">特别推广 (Promotional Area)</CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 pb-6">
              <p className="mb-6">
                在此处放置您的促销内容。敬请期待我们的盛大发布！
                <br/>
                Place your promotional content here. Stay tuned for our grand launch!
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-secondary p-6 rounded-lg text-left shadow-md hover:shadow-lg transition-shadow duration-300 text-secondary-foreground">
                  <div className="flex items-center mb-3">
                    <Zap className="w-8 h-8 text-accent mr-3" />
                    <h3 className="font-headline font-semibold text-xl">新功能预告</h3>
                  </div>
                  <p className="text-sm opacity-80">了解即将推出的令人兴奋的新功能，旨在提升您的体验。</p>
                </div>
                <div className="bg-secondary p-6 rounded-lg text-left shadow-md hover:shadow-lg transition-shadow duration-300 text-secondary-foreground">
                  <div className="flex items-center mb-3">
                    <Mail className="w-8 h-8 text-accent mr-3" />
                    <h3 className="font-headline font-semibold text-xl">订阅更新</h3>
                  </div>
                  <p className="text-sm opacity-80">注册以获取最新消息、独家优惠和发布通知。</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="relative z-20 mt-12 text-center text-foreground/70 text-sm pb-4">
        <p>&copy; {currentYear} MAX. All rights reserved.</p>
      </footer>
    </div>
  );
}
