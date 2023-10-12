import Footer from '@/components/footer';
import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import Nabvar from '@/components/navbar';
import ModalProvider from '@/providers/modal-provider';

const urbanis = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'Store',
   description: 'Store',
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang='en'>
         <body className={urbanis.className}>
            <ModalProvider />
            <Nabvar />
            {children}
            <Footer />
         </body>
      </html>
   );
}
