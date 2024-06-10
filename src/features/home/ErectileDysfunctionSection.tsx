import Image from "next/image";
import React from "react";

export default function ErectileDysfunctionSection() {
  return (
    <section className="flex justify-center flex-col-reverse md:flex-row my-20 items-center flex-wrap sm:my-72 mx-0 py-0 px-4">
      <article className="bg-[url('/assets/images/bg-02.png')] bg-no-repeat max-w-[45rem] sm:pt-40 sm:pr-36 pr-16 pb-20 bg-[-3rem_8rem] sm:bg-[4rem_8rem] sm:bg-[length:50.1rem] pt-8">
        <h6>Erectile dysfunction</h6>
        <h4 className="leading-[1.4] mb-8">
          Erections can be a tricky thing. But no need to feel <br /> down!
        </h4>
        <p>
          We’re working around the clock to bring you a holistic approach to
          your wellness. From top to bottom, inside and out.
        </p>
      </article>
      <figure className="block">
        <Image
          alt="a smiling man"
          width={370}
          height={445}
          src="/assets/images/smiling-man.png"
        />
      </figure>
    </section>
  );
}
