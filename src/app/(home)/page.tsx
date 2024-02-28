import { TitleWithBars } from "@/components/titleWithDescription/index";
import BarDefault from "../../components/BarDefault";
import Image from "next/image";
import { ButtonWhatsapp } from "../../components/ButtonWhatsApp";
import { IconWithText } from "../../components/card";
import Link from "next/link";
import { Text } from "@/components/ui/text";
import Data from "@/service/data.json";
import arquvivos from "@/service/pdfs.json";
import ButtonFaleConosco from "@/components/button-fale-conosco";
import { InstagramIcon } from "@/icons/InstagramIcon";
import LinkWithIcon from "@/components/ui/link-with-icon";
import { FacebookIcon } from "@/icons/facebookIcon";
import { PdfIcon } from "@/icons/pdfIcon";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-start gap-2">
        <header className="w-full min-h-[40rem] bg-[#0B1B2B] flex lg:flex-row items-center justify-center flex-col sm:p-0 px-5 pb-4 relative">
          <div className="w-full lg:w-[1024px] flex items-center justify-center flex-wrap lg:flex-nowrap gap-3">
            <div className=" min-h-[40rem] w-full lg:min-w-[36.25rem] flex flex-col gap-3 justify-center sm:ml-auto">
              <Text element="h1" content={Data.header.title} />
              <Text
                element="h2"
                content={Data.header.subtitle}
                color="secondary"
              />
              <div className="h-3 flex gap-5 my-4">
                <BarDefault width={"w-3"} />
                <BarDefault width={"w-5"} />
                <BarDefault width={"w-28"} />
              </div>

              <Text
                element="p"
                content={Data.header.paragraph}
                size="base"
                variant="default"
              />
              <ButtonWhatsapp.Root>
                <ButtonWhatsapp.Text />
              </ButtonWhatsapp.Root>
            </div>
          </div>
        </header>
      </div>
      <main className="flex min-h-screen flex-col items-center justify-start gap-2">
        <section className=" w-full flex items-center justify-center gap-3 py-10 flex-col p-4 ">
          <TitleWithBars.Root>
            <TitleWithBars.Bar />
            <Text
              element="h1"
              content={Data.howItWorks.title}
              color="secondary"
            />
            <TitleWithBars.Bar />
          </TitleWithBars.Root>
          <TitleWithBars.Paragraph
            text={Data.howItWorks.paragraph}
            fontSize="text-2xl"
          />
          <section className=" w-full lg:w-[1024px] min-h-[25rem] p-4 flex gap-3 mb-2 flex-wrap items-center sm:justify-between justify-center">
            {Data.iconSection
              .slice(0, 3)
              .map(({ icon, paragraphs, title }, i) => (
                <IconWithText.Root key={i}>
                  <IconWithText.Image image={icon} />
                  <IconWithText.RootText>
                    <IconWithText.Title text={title} />
                    {paragraphs.map((p) => (
                      <Text
                        key={p}
                        element="p"
                        content={p}
                        variant="three"
                        size="base"
                        color="three"
                        className="font-light"
                      />
                    ))}
                  </IconWithText.RootText>
                </IconWithText.Root>
              ))}
          </section>
        </section>
        <section className="lg:w-[1024px] w-full flex flex-wrap gap-3 sm:justify-between justify-center items-center min-h-[100px] ">
          <Image
            src={"/thumbnail2.jpeg"}
            width={500}
            height={500}
            quality={100}
            alt=""
            className="rounded-md shadow-sm"
          />
          <div className=" p-8 w-[500px] min-h-[300px] ">
            <TitleWithBars.Box>
              <TitleWithBars.Root>
                <TitleWithBars.Bar />
                <TitleWithBars.Title
                  text={Data.imageSection.title}
                  fontSize="text-2xl"
                />
                <TitleWithBars.Bar />
              </TitleWithBars.Root>
              <TitleWithBars.Paragraph
                text={Data.imageSection.subtitle}
                fontSize="text-lg"
              />
            </TitleWithBars.Box>
            <p className="text-base">{Data.imageSection.content}</p>
          </div>
        </section>
        <section className="w-full lg:w-[1024px] flex flex-col items-center">
          <TitleWithBars.Box>
            <TitleWithBars.Root>
              <TitleWithBars.Bar />
              <TitleWithBars.Title
                text={Data.contentSection.title}
                fontSize="text-2xl"
              />
              <TitleWithBars.Bar />
            </TitleWithBars.Root>
          </TitleWithBars.Box>
          <section className="w-full lg:w-[1024px] min-h-[25rem] p-4 flex gap-3 mb-2 flex-wrap items-center sm:justify-between justify-center">
            {Data.iconSection
              .slice(3, 10)
              .map(({ icon, paragraphs, title }, i) => (
                <IconWithText.Root key={i}>
                  <IconWithText.Image image={icon} />
                  <IconWithText.RootText>
                    <IconWithText.Title text={title} />
                    {paragraphs.map((p) => (
                      <IconWithText.Paragraph key={i} text={p} />
                    ))}
                  </IconWithText.RootText>
                </IconWithText.Root>
              ))}
          </section>
        </section>
        <TitleWithBars.Root>
          <TitleWithBars.Bar />
          <Text element="h1" content={"Nossos trabalhos"} color="secondary" />
          <TitleWithBars.Bar />
        </TitleWithBars.Root>
        <ul className="flex items-center justify-start gap-5 min-h-[350px] overflow-x-auto max-w-[1400px] w-full pl-3 invisible-scrollbar">
          {arquvivos.pdfs.map(({ id, name, url, img }) => {
            return (
              <>
                <li
                  key={id}
                  className="relative aspect-square min-h-[30vh] max-h-[275px]"
                >
                  <div className=" flex flex-wrap items-center justify-center gap-2  max-w-[300px] relative">
                    <Link
                      href={url}
                      target="_blank"
                      className="overflow-hidden border-2 border-white"
                    >
                      <div className=" h-28 bg-slate-200 w-[100%] max-w-[300px] rounded-lg absolute flex items-center justify-center z-50 top-15 px-3">
                        <PdfIcon />
                        <Text
                          element="h1"
                          content={name}
                          variant="three"
                          size="base"
                          color="three"
                        />
                      </div>
                    </Link>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
        <section className="w-full  bg-[#0B1B2B] flex items-center justify-center py-3 mb-9">
          <div className="w-full lg:w-[1024px]  min-h-[733px] flex sm:flex-nowrap flex-wrap">
            {/* <Image
              src="https://via.placeholder.com/550x733"
              width={570}
              height={733}
              alt=""
            /> */}
            <div className="flex flex-col items-center justify-center p-3 max-w-[400px] ">
              <h1 className="w-full text-white text-4xl font-bold font-['Poppins'] leading-[65px]">
                {Data.contentFooter.title}
              </h1>
              <p className="text-white text-base font-semibold leading-6">
                {Data.contentFooter.paragraph}
              </p>
            </div>
          </div>
        </section>
        <footer className="grid sm:grid-cols-3 max-w-[1100px] mx-auto px-2">
          <div className="min-h-[450px] w-full flex flex-col items-center justify-start gap-5">
            <Text
              content="Impulsionando seu sucesso acadêmico com nossa ajuda."
              color="three"
              className="text-2xl"
            />
            <div className="mr-auto">
              <ButtonFaleConosco />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start min-h-[450px] w-full gap-3">
            <Text
              content="Siga-nos"
              color="three"
              className="text-2xl w-full text-center"
            />
            <LinkWithIcon
              icon={InstagramIcon}
              href="https://www.instagram.com/"
              text="instagram"
            />
            <LinkWithIcon
              icon={FacebookIcon}
              href="https://www.instagram.com/"
              text="facebook"
            />
          </div>
          <div className="flex flex-col items-center justify-start min-h-[450px] w-full gap-3">
            <Text
              content="Nossos contatos"
              color="three"
              className="text-2xl w-full text-center"
            />
            <div className="flex flex-col items-center justify-center gap-3">
              <LinkWithIcon
                icon={InstagramIcon}
                href="https://www.instagram.com/"
                text="instagram"
              />
              <p>(22) 998508764</p>
              <p>matheusexample@gmail.com</p>
            </div>
          </div>
        </footer>
        <ButtonWhatsapp.RootRelative>
          <ButtonWhatsapp.icon fill="white" />
        </ButtonWhatsapp.RootRelative>
      </main>
    </>
  );
}
