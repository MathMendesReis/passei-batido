import React from 'react';
import { TitleWithBars } from '@/app/components/titleWithDescription/index'
import BarDefault from '../components/BarDefault';
import Image from 'next/image';
import alunoImg from '../../../public/aluno.svg'
import alunoSentado from '../../../public/alunoSentado.svg'
import icon3 from '../../../public/icon3.svg'
import { ButtonWhatsapp } from '../components/ButtonWhatsApp';
import { IconWithText } from '../components/card';


export default function Home() {
  const lorem = ' Lorem ipsum dolor sit, amet consectetur adipisicing elit.Recusandae sint cupiditate esse deleniti reiciendis ab quidem sapiente repellat, ex ut quam doloremque eius id voluptatem ? Porro velit officiis aut cum.';

  return (
    <main className='flex min-h-screen flex-col items-center justify-start'>
      <header className='w-full min-h-[40rem] bg-[#0B1B2B] flex lg:flex-row items-center justify-center flex-col'>
        <div className='w-full lg:w-[1024px] flex items-center justify-center flex-wrap lg:flex-nowrap'>
          <div className=' min-h-[40rem] w-full lg:w-[36.25rem] flex flex-col gap-3 justify-center'>
            <h1 className="w-full text-white text-4xl font-bold font-['Poppins'] leading-[65px]">Precisa comprar seu TCC?</h1>
            <h2 className="w-full  text-[#3294F8] text-4xl font-bold font-['Poppins'] leading-[65px]">Conte com a nossa ajuda!</h2>
            <div className='h-3 flex gap-5 my-4'>
              <BarDefault width={'w-3'} />
              <BarDefault width={'w-5'} />
              <BarDefault width={'w-28'} />
            </div>
            <p className='text-white text-base font-bold leading-6'>{lorem}</p>
            <ButtonWhatsapp.Root>
              <ButtonWhatsapp.Text />
            </ButtonWhatsapp.Root>
          </div>
          <Image src={alunoSentado} width={500} height={500} quality={100} alt='' />
        </div>
      </header>
      <section className=' w-full flex items-center justify-center gap-3 py-10 flex-col p-4'>
        <TitleWithBars.Root>
          <TitleWithBars.Bar />
          <TitleWithBars.Title text='Como funciona' fontSize='text-2xl' />
          <TitleWithBars.Bar />
        </TitleWithBars.Root>
        <TitleWithBars.Paragraph text='atendimento de excelência que vai superar suas expectativas' fontSize='text-2xl' />
        <section className='w-full lg:w-[1024px] min-h-[25rem] p-4 flex gap-3 mb-2 flex-wrap items-center justify-between'>
          <IconWithText.Root>
            <IconWithText.Image image={icon3}/>
            <IconWithText.RootText>
              <IconWithText.Title text='teste'/>
              <IconWithText.Paragraph text='paragrafo'/>
              <IconWithText.Paragraph text='paragrafo'/>
              <IconWithText.Paragraph text='paragrafo'/>
              <IconWithText.Paragraph text='paragrafo'/>
            </IconWithText.RootText>
          </IconWithText.Root>
        </section>
      </section>
      <section className='lg:w-[1024px] w-full flex flex-wrap gap-3 justify-between items-center h-[518px]'>
        <div className=' p-8 h-[518px] w-[500px]'>
          <Image src={alunoImg} width={500} height={500} quality={100} alt='' />
        </div>
        <div className=' p-8 w-[500px] h-[518px] '>
          <TitleWithBars.Box>
            <TitleWithBars.Root>
              <TitleWithBars.Bar />
              <TitleWithBars.Title text='Trabalhos de conclusão de curso' fontSize='text-2xl' />
              <TitleWithBars.Bar />
            </TitleWithBars.Root>
            <TitleWithBars.Paragraph text='atendimento de excelência que vai superar suas expectativas' fontSize='text-lg' />
          </TitleWithBars.Box>
          <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat blanditiis aut omnis, earum laboriosam necessitatibus atque eum officia ea excepturi! Facere quae, veritatis officia accusamus perferendis inventore modi et.</p>
        </div>
      </section>
      <section className='w-[1024px] flex flex-col items-center'>
        <TitleWithBars.Box>
          <TitleWithBars.Root>
            <TitleWithBars.Bar />
            <TitleWithBars.Title text='Nosso conteudo' fontSize='text-2xl' />
            <TitleWithBars.Bar />
          </TitleWithBars.Root>
        </TitleWithBars.Box>
        <section className='w-full lg:w-[1024px] min-h-[25rem] p-4 flex gap-3 mb-2 flex-wrap items-center justify-between'>
         
        </section>
      </section>
      <footer className='w-full min-h-[1339.47px] bg-[#0B1B2B] flex items-center justify-center '></footer>

    </main>
  );
}
