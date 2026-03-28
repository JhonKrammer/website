import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Dark Matter — 1 个人 + 8 个 AI Agent，重新定义公司形态',
  description:
    'Dark Matter 是一家由人类 CEO 和 AI Agent 团队组成的新型公司，探索人机协作的未来。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-deep-space text-text-primary font-sans antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
