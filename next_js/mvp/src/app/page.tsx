import Button from '@/components/Button';
import Link from 'next/link';
import brainSvg from '@/app/img/brain-w-b-lines.svg';
import arrowSvg from '@/app/img/arrow_icon.svg';
import shieldPng from '@/app/img/shield.png';
import graphSvg from '@/app/img/graph_up.svg';
import lightningSvg from '@/app/img/lightning.svg';
import Image from 'next/image';
import Header from '@/components/Header';

export default function Home() {
  const styles = {
    container: [
      'grid',
      'grid-rows-[1fr_300px]',
      'items-center',
      'justify-items-center',
      'min-h-screen',
      'pt-32',
      'gap-16',    
      'font-[family-name:var(--font-geist-sans)]'
    ].join(' '),
    main: [
      'grid',
      'grid-cols-2',
      'w-full',
      'h-full',
      'gap-8',
      'px-16',
    ].join(' '),
    footer: [
      'grid',
      'grid-cols-3',
      'w-full',
      'h-full',
      'gap-8',
      'p-10',
      'bg-gray-100'
    ].join(' ')
  };

  return (
    <div className={styles.container}>
      <Header>
        <div>
          <a className='mr-5'>Sign in</a>
          <Link href="/signup">
            <Button>Sign up</Button>
          </Link>
        </div>
      </Header>
      <div className={styles.main}>
        <div className="h-full w-full flex flex-col justify-center gap-4 px-4">
          <h1 className='text-5xl font-bold tracking-wide mb-2'>Welcome to CalcAios!</h1>
          <p className='text-xl mb-2'>Your AI companion for smarter calculations, analytics, and insights.</p>
          <div className='flex justify-center gap-11'>
            <Button 
              variant='secondary'
              className='w-48'
              size='lg'
            >
              Book a demo
            </Button>
            <Button 
              size='lg'
              className='flex flex-column w-48'
            >
              Get Started
              <Image 
                src={arrowSvg}
                alt="Arrow"
                width={20}
                height={20}
                className="object-contain ml-2"
              />
            </Button>
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg w-full h-full flex items-center justify-center">
          <Image 
            src={brainSvg}
            alt="Brain with lines illustration" 
            width={70}
            height={70}
            className="object-contain"
          />
        </div>
      </div>
      <div className={styles.footer}>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <Image 
            src={lightningSvg}
            alt="lightning"
            width={30}
            height={30}
            className="object-contain mb-3"
          />
          <h2 className="text-xl font-semibold mb-5">Lightning Fast</h2>
          <p>Get instant calculations and insights powered by advanced AI</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <Image 
            src={shieldPng}
            alt="shield"
            width={30}
            height={30}
            className="object-contain mb-3 "
          />
          <h2 className="text-xl font-semibold  mb-5">Secure & Private</h2>
          <p>Your data is encrypted and protected at all times</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <Image 
            src={graphSvg}
            alt="graph going up"
            width={30}
            height={30}
            className="object-contain mb-3"
          />
          <h2 className="text-xl font-semibold mb-5">Smart Analytics</h2>
          <p>Advanced insights and predictions for better decission making</p>
        </div>
      </div>
    </div>
  );
}
