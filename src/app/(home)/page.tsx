import React from 'react';
import TitleWithDescription from '../components/titleWithDescription';

export default function Home() {
  const lorem = ' Lorem ipsum dolor sit, amet consectetur adipisicing elit.Recusandae sint cupiditate esse deleniti reiciendis ab quidem sapiente repellat, ex ut quam doloremque eius id voluptatem ? Porro velit officiis aut cum.';

  return (
    <main className='flex min-h-screen flex-col items-center justify-start'>
      <section className='w-full min-h-[40rem] bg-[#0B1B2B] flex items-center justify-center '>
        <div className='w-[1140px] bg-red-600 flex items-center justify-center'>
          <div className=' min-h-[40rem] w-[36.25rem] flex flex-col gap-3 justify-center'>
            <h1 className="w-full text-white text-4xl font-bold font-['Poppins'] leading-[65px]">Precisa comprar seu TCC?</h1>
            <h2 className="w-full  text-[#3294F8] text-4xl font-bold font-['Poppins'] leading-[65px]">Conte com a nossa ajuda!</h2>
            <div className='h-3 flex gap-5 my-4'>
              <div className='h-3 w-3 bg-[#3294F8] rounded-md' />
              <div className='h-3 w-5 bg-[#3294F8] rounded-md' />
              <div className='h-3 w-28 bg-[#3294F8] rounded-md' />
            </div>
            <p className='text-white text-base font-bold leading-6'>{lorem}</p>
            <button className=' bg-[#2FB337] w-full py-8 mt-28 rounded-xl'>
              <span className='text-white font-bold leading-10'>Solicite Orçamento Pelo WhatsApp</span>
            </button>
          </div>
          <div className=' h-[40rem] w-[36.25rem] bg-green-950'>

          </div>
        </div>
      </section>
      <section className=' w-full flex items-center justify-center gap-3 py-10 flex-col p-4'>
        <TitleWithDescription title='como funciona' paragraph='atendimento de excelência que vai superar suas expectativas' />

        <section className='w-[1140px] bg-red-700 min-h-[25rem] p-4 grid grid-cols-3 justify-items-stretch gap-3 mb-2'>
          <div className=' col-start-1 col-end-2 w-full bg-yellow-400' />
          <div className=' col-start-2 col-end-3 w-full bg-blue-400' />
          <div className=' col-start-3 col-end-4 w-full bg-gray-400' />
        </section>
      </section>
      <section className='w-[1140px] grid grid-cols-2 h-[800px] gap-3 content-center justify-items-stretch'>
        <div className='bg-green-300 p-8 w-[570px]'>
          <h1>teste</h1>
        </div>
        <div className='bg-green-300 p-8 w-[570px] '>
          <TitleWithDescription title='Trabalhos de conclusão de curso' paragraph='Trabalhos Acadêmicos
para todos os níveis'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat blanditiis aut omnis, earum laboriosam necessitatibus atque eum officia ea excepturi! Facere quae, veritatis officia accusamus perferendis inventore modi et.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat blanditiis aut omnis, earum laboriosam necessitatibus atque eum officia ea excepturi! Facere quae, veritatis officia accusamus perferendis inventore modi et.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat blanditiis aut omnis, earum laboriosam necessitatibus atque eum officia ea excepturi! Facere quae, veritatis officia accusamus perferendis inventore modi et.</p>
        </div>
      </section>
      <section className='bg-gray-400 w-[1140px] flex flex-col items-center'>
        <TitleWithDescription title=' Nosso diferencial ' paragraph='Trabalhos Acadêmicos
para todos os níveis'/>
        <section className='w-[1140px] bg-red-700 min-h-[25rem] p-4 grid grid-cols-3 justify-items-stretch gap-3 mb-2'>
          <div className=' col-start-1 col-end-2 w-full bg-yellow-400' />
          <div className=' col-start-2 col-end-3 w-full bg-blue-400' />
          <div className=' col-start-3 col-end-4 w-full bg-gray-400' />
        </section>
      </section>
      <footer className='w-full min-h-[1339.47px] bg-[#0B1B2B] flex items-center justify-center '></footer>

    </main>
  );
}
