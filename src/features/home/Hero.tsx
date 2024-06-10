import Image from "next/image";
import React from "react";
import { Button } from "src/components/Button/Button";

export default function Hero({handleShowModal}: {handleShowModal:()=> void}) {
  return (
    <div className="h-[750px] bg-[url('/assets/svgs/bg.svg')] bg-no-repeat bg-cover hero px-[10%] text-[#0B3B3C]">
      <div className="">
        <header className="pt-4">
          <figure>
            <Image
              alt="Company Logo"
              width={40}
              height={40}
              src="/assets/svgs/logo.svg"
            />
          </figure>
        </header>
        <section className="max-w-[45rem] pt-[10rem]">
          <h1 className="text-[90px] leading-none">
            Be good <br /> to yourself
          </h1>
          <p>
            We’re working around the clock to bring you a holistic approach to
            your wellness. From top to bottom, inside and out.
          </p>
          <Button
            variant="destructive"
            className="rounded-none bg-[#7E0707] uppercase text-white text-lg mt-10 px-10 py-6 font-semibold"
            onClick={handleShowModal}
          >
            Take the Quiz
          </Button>
        </section>
      </div>
    </div>
  );
}
