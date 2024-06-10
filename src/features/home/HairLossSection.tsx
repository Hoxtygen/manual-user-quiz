import Image from "next/image";
import React from "react";

export default function HairLossSection() {
  return (
    <section className="flex flex-wrap justify-center my-8 sm:my-20 mx-0 py-0 px-4">
      <figure className="block">
        <Image
          alt="man with hair loss"
          width={370}
          height={445}
          src="/assets/images/chopped-hair.png"
        />
      </figure>
      <article className="bg-[url('/assets/images/bg-01.png')] bg-no-repeat max-w-3xl pt-8 pl-0 pb-20 sm:pt-48 sm:pl-40 bg-[length:40rem]  bg-[-9rem_8rem]">
        <h6>Hair loss</h6>
        <h4 className="leading-[1.4] mb-8">
          Hair loss needn’t be <br /> irreversible. We can help!
        </h4>
        <p>
          We’re working around the clock to bring you a holistic approach to
          your wellness. From top to bottom, inside and out.
        </p>
      </article>
    </section>
  );
}
