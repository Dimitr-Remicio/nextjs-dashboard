import Contfooter from './components/footer/Footer';
import Sidenav from './ui/dashboard/sidenav';

import { quicksand } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} antialiased`}>
      <Sidenav/>
        {children}
      <footer className='bg-stone-800 w-full h-full m-0 py-0'>
        <Contfooter/>
      </footer>
        </body>
    </html>
  );
}
