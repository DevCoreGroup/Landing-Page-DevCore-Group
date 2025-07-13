import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['400', '500', '600', '700', '900'],
});

export const metadata: Metadata = {
  title: 'DevCore Group - Transformamos Ideas en Soluciones Reales',
  description:
    'Somos una software factory especializada en el desarrollo de soluciones a medida.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${roboto.variable} dark`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
