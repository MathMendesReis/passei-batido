import React from 'react';
import { TitleWithBars } from '@/app/components/titleWithDescription/index'
import BarDefault from '../components/BarDefault';
import Image from 'next/image';
import { ButtonWhatsapp } from '../components/ButtonWhatsApp';
import { IconWithText } from '../components/card';
import Data from '@/app/service/data.json'
import { title } from 'process';


export default function Home() {

  return (
    <main className='flex min-h-screen flex-col items-center justify-start '>
      <header className='w-full min-h-[40rem] bg-[#0B1B2B] flex lg:flex-row items-center justify-center flex-col sm:p-0 px-5'>
        <div className='w-full lg:w-[1024px] flex items-center justify-center flex-wrap lg:flex-nowrap'>
          <div className=' min-h-[40rem] w-full lg:min-w-[36.25rem] flex flex-col gap-3 justify-center sm:ml-auto'>
            <h1 className="w-full text-white text-4xl font-bold font-['Poppins'] leading-[65px]">{Data.header.title}</h1>
            <h2 className="w-full  text-[#3294F8] text-4xl font-bold font-['Poppins'] leading-[65px]">{Data.header.subtitle}</h2>
            <div className='h-3 flex gap-5 my-4'>
              <BarDefault width={'w-3'} />
              <BarDefault width={'w-5'} />
              <BarDefault width={'w-28'} />
            </div>
            <p className='text-white text-base font-bold leading-6'>{Data.header.paragraph}</p>
            <ButtonWhatsapp.Root>
              <ButtonWhatsapp.Text />
            </ButtonWhatsapp.Root>
          </div>
          <Image src={'/alunoSentado.svg'} width={400} height={435} quality={100} alt=''  className='bg-yellow-200'/>
        </div>
      </header>
      <section className=' w-full flex items-center justify-center gap-3 py-10 flex-col p-4'>
        <TitleWithBars.Root>
          <TitleWithBars.Bar />
          <TitleWithBars.Title text={Data.howItWorks.title} fontSize='text-2xl' />
          <TitleWithBars.Bar />
        </TitleWithBars.Root>
        <TitleWithBars.Paragraph text={Data.howItWorks.paragraph} fontSize='text-2xl' />
        <section className=' w-full lg:w-[1024px] min-h-[25rem] p-4 flex gap-3 mb-2 flex-wrap items-center sm:justify-between justify-center'>
          {Data.iconSection.slice(0,3).map(({icon,paragraphs,title},i) => (
            <IconWithText.Root key={i}>
              <IconWithText.Image image={icon} />
              <IconWithText.RootText>
                <IconWithText.Title text={title} />
                {paragraphs.map((p)=>(
                  <IconWithText.Paragraph key={i} text={p}/>
                ))}
              </IconWithText.RootText>
            </IconWithText.Root>
          ))}
        </section>
      </section>
      <section className='lg:w-[1024px] w-full flex flex-wrap gap-3 sm:justify-between justify-center items-center min-h-[518px]'>
        <div className=' p-8 sm:h-[518px] sm:w-[500px]'>
          <Image src={'/aluno.svg'} width={500} height={500} quality={100} alt='' />
        </div>
        <div className=' p-8 w-[500px] h-[518px] '>
          <TitleWithBars.Box>
            <TitleWithBars.Root>
              <TitleWithBars.Bar />
              <TitleWithBars.Title text={Data.imageSection.title} fontSize='text-2xl' />
              <TitleWithBars.Bar />
            </TitleWithBars.Root>
            <TitleWithBars.Paragraph text={Data.imageSection.subtitle} fontSize='text-lg' />
          </TitleWithBars.Box>
          <p className='text-base'>{Data.imageSection.content}</p>
        </div>
      </section>
      <section className='w-full lg:w-[1024px] flex flex-col items-center'>
        <TitleWithBars.Box>
          <TitleWithBars.Root>
            <TitleWithBars.Bar />
            <TitleWithBars.Title text={Data.contentSection.title} fontSize='text-2xl' />
            <TitleWithBars.Bar />
          </TitleWithBars.Root>
        </TitleWithBars.Box>
        <section className='w-full lg:w-[1024px] min-h-[25rem] p-4 flex gap-3 mb-2 flex-wrap items-center sm:justify-between justify-center'>
        {Data.iconSection.slice(3,10).map(({icon,paragraphs,title},i) => (
            <IconWithText.Root key={i}>
              <IconWithText.Image image={icon} />
              <IconWithText.RootText>
                <IconWithText.Title text={title} />
                {paragraphs.map((p)=>(
                  <IconWithText.Paragraph key={i} text={p}/>
                ))}
              </IconWithText.RootText>
            </IconWithText.Root>
          ))}
        </section>
      </section>
      <footer className='w-full min-h-[1339.47px] bg-[#0B1B2B] flex items-center justify-center '></footer>

    </main>
  );
}
