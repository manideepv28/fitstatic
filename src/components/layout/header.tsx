"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Dumbbell, UtensilsCrossed, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import React from 'react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/workouts', label: 'Workouts', icon: Dumbbell },
  { href: '/nutrition', label: 'Nutrition', icon: UtensilsCrossed },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
            <path d="M10.2 2.2c- resistente.6-.4-1.3.3-1.3 1V10H3c-.6 0-1 .4-1 1s.4 1 1 1h6v2H3c-.6 0-1 .4-1 1s.4 1 1 1h6v2H3c-.6 0-1 .4-1 1s.4 1 1 1h5.8c.7 0 1.3-.3 1.3-1V4.5c0-.7-.6-1.3-1.3-1.3H3c-.6 0-1 .4-1 1s.4 1 1 1h6V2.5c0-.7.6-1.3 1.3-1.3H18c3.3 0 6 2.7 6 6s-2.7 6-6 6H8.9c-.7 0-1.3.3-1.3 1V20.8c0 .7.6 1.3 1.3 1.3h1.6c.5 0 .9-.2 1.2-.6.3-.4.4-.9.2-1.3-.2-.5-.7-.8-1.2-.8H10v-2h8c3.3 0 6-2.7 6-6s-2.7-6-6-6H10.2z"/>
          </svg>
          <span className="font-bold text-xl text-foreground">FitStatic</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              )}
              prefetch={false}
            >
              <item.icon className="inline-block h-4 w-4 mr-1 mb-0.5" />
              {item.label}
            </Link>
          ))}
        </nav>

        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 py-4">
              <Link href="/" className="flex items-center gap-2 mb-4" prefetch={false} onClick={() => setIsMobileMenuOpen(false)}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
                    <path d="M10.2 2.2c- resistente.6-.4-1.3.3-1.3 1V10H3c-.6 0-1 .4-1 1s.4 1 1 1h6v2H3c-.6 0-1 .4-1 1s.4 1 1 1h6v2H3c-.6 0-1 .4-1 1s.4 1 1 1h5.8c.7 0 1.3-.3 1.3-1V4.5c0-.7-.6-1.3-1.3-1.3H3c-.6 0-1 .4-1 1s.4 1 1 1h6V2.5c0-.7.6-1.3 1.3-1.3H18c3.3 0 6 2.7 6 6s-2.7 6-6 6H8.9c-.7 0-1.3.3-1.3 1V20.8c0 .7.6 1.3 1.3 1.3h1.6c.5 0 .9-.2 1.2-.6.3-.4.4-.9.2-1.3-.2-.5-.7-.8-1.2-.8H10v-2h8c3.3 0 6-2.7 6-6s-2.7-6-6-6H10.2z"/>
                 </svg>
                <span className="font-bold text-xl text-foreground">FitStatic</span>
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center space-x-2 rounded-md p-2 text-base font-medium hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                  )}
                  prefetch={false}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
