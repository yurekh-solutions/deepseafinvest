'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Footer } from '@/components/layout/Footer';
import { ContactPopup } from '@/components/layout/ContactPopup';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isAdminRoute = pathname?.startsWith('/admin');

  // Only render footer and popup on non-admin routes
  if (!isClient || isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <Footer />
      <ContactPopup />
    </>
  );
}
