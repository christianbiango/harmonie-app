import Image from "next/image";
import { BlueButton } from "../BlueButtton";

export default function Header() {
  return (
    <header className="relative w-full min-h-[310px] md:min-h-[600px] overflow-hidden flex flex-col justify-center">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Image
          src="/images/homepage/field.png"
          alt="Paysage avec un champ doré et un ciel bleu"
          layout="fill"
          objectFit="cover"
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-5">
        <div className="max-w-4xl mx-auto flex flex-col justify-center">
          <h1 className="text-2xl md:text-5xl lg:flex-row leading-tight mb-5 flex flex-col gap-2 font-semibold relative">
            <Image
              src="/images/homepage/quote.svg"
              alt="Guillemet"
              width={80}
              height={80}
              priority
              className="mx-auto w-7 h-7 md:w-10 md:h-10 absolute -top-3 -left-9 md:-left-[50px] md:-top-[30px]"
            />
            <span>Soigner autrement,</span>
            <span className="inline-block">
              <span>
                vivre{" "}
                <span className="bg-[url(/images/homepage/bluecircle.svg)] bg-no-repeat bg-center bg-contain p-4">
                  pleinement
                </span>
              </span>
            </span>
          </h1>
        </div>
        <p className="block text-xl md:text-2xl mt-5 opacity-90 font-light">
          Prendre soin des autres sans s&apos;oublier
        </p>
        <div className="mt-7">
          <BlueButton text="Voir les séjours" />
        </div>
      </div>
    </header>
  );
}
