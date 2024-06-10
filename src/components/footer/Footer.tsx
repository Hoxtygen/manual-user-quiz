import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="sm:py-0 sm:px-[9.5%] bg-[#8b968d] p-0">
      <div className="grid gap-8 py-28 px-4 grid-cols-footer md:grid-cols-footer-tablet md:py-28 md:px-8">
        <figure>
          <Image
            src="/assets/svgs/logo.svg"
            alt="manual logo"
            width={60}
            height={60}
          />
        </figure>

        <div>
          <h6>Product</h6>
          <p>Popular</p>
          <p>Trending</p>
          <p>Guided</p>
          <p>Products</p>
        </div>
        <div>
          <h6>Company</h6>
          <p>Press</p>
          <p>Mission</p>
          <p>Strategy</p>
          <p>About</p>
        </div>
        <div>
          <h6>Info</h6>
          <p>Support</p>
          <p>Customer Service</p>
          <p>Get started</p>
        </div>
        <div>
          <h6>Follow us</h6>
          <div className="flex border">
            <Image
              src="/assets/svgs/social-facebook.svg"
              alt="facebook icon"
              width={24}
              height={24}
              className="mr-4"
            />
            <Image
              src="/assets/svgs/social-google.svg"
              alt="google icon"
              width={24}
              height={24}
              className="mr-4"
            />
            <Image
              src="/assets/svgs/social-twitter.svg"
              alt="twitter icon"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      <div className="text-center py-8 px-0 text-[1.6rem] border-t border-[#BDCDC5]">
        <p>© 2021 Manual. All rights reserved</p>
      </div>
    </div>
  );
}
