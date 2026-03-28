import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Portal | DEEPSEA FINVEST',
  description: 'Admin Dashboard for Lead Management',
  icons: {
    icon: [{ url: '/logo.png', sizes: 'any' }],
    apple: [{ url: '/logo.png', sizes: '180x180' }],
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
