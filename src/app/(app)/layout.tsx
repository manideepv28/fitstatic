import type { ReactNode } from 'react';
import { Header } from '@/components/layout/header';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="py-6 md:px-8 md:py-0 bg-muted">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by You. Powered by Next.js.
          </p>
        </div>
      </footer>
    </div>
  );
}
