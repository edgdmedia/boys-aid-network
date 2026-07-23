import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Boys Aid Network | Empowering Boys for a Better Tomorrow',
  description: 'Boys Aid Network is a boy-child advocacy organisation based in Nigeria. We teach, mentor and help boys find themselves, enjoy inclusion, live godly lives and contribute to society.',
  keywords: 'boychild, advocacy, mentorship, Nigeria, Africa, crime prevention, street children, youth empowerment',
  openGraph: {
    title: 'Boys Aid Network | Empowering Boys for a Better Tomorrow',
    description: 'Boys Aid Network is a boy-child advocacy organisation based in Nigeria. We teach, mentor and help boys find themselves, enjoy inclusion, live godly lives and contribute to society.',
    images: ['/images/Boys-Aid-Logo-1-Colour.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-gray-700 antialiased font-body">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
