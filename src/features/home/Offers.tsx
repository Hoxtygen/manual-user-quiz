import React from "react";
import HairLossSection from "./HairLossSection";
import ErectileDysfunctionSection from "./ErectileDysfunctionSection";

export default function Offers() {
  return (
    <div>
      <h3 className="text-center text-[40px] p-8">What we can help with</h3>
      <HairLossSection />
			<ErectileDysfunctionSection />
    </div>
  );
}
