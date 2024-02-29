import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Cloud Storage',
  description: 'Free, test cloud storage',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
