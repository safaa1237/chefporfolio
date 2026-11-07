import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Clara Sweetnam | Chef Portfolio',
  description: 'A collection of plates and moments from chef Clara Sweetnam. Trained in Munich, with experience at Dallmayr.',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
