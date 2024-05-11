import { Navbar } from '@/components/navbar';
import { useTranslations } from 'next-intl';
import { TypographyDemo } from '../components/TypoDemo';

export default function Home() {
  const t = useTranslations('home');
  return (
    <>
      <Navbar />
      <main className='container py-10'>
        <TypographyDemo />
      </main>
    </>
  );
}
