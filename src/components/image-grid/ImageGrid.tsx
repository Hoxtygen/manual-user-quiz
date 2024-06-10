import React, { ReactNode } from "react";

type ImageGridProps = {
  children: ReactNode;
};

const ImageGrid: React.FC<ImageGridProps> = ({ children }) => {
  return (
    <section className="max-w-[50rem] grid gap-8 grid-cols-auto-fit my-0 mx-auto">
      {children}
    </section>
  );
};

export default ImageGrid;
