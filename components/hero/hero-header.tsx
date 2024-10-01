import { Button } from "../ui/button";
import type { ButtonProps } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header30Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const HeroHeader = (props: Header30Props) => {
  const { heading, description, image } = {
    ...Header30Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container">
        <div className="flex max-h-[60rem] min-h-svh items-center justify-center py-16 text-center md:py-24 lg:py-28">
          <div className="w-full max-w-lg">
            <h1 className="mb-5 text-6xl font-bold leading-snug text-white md:mb-4 md:text-7xl lg:text-8xl">
              {heading}
            </h1>
            <p className="text-bas text-neutral-300 md:text-md">{description}</p>
            <div className="mt-6 flex items-center justify-center gap-x-4 ">
              <Button variant={"default"} size={"lg"} className=" text-sm font-mono text-lime-600 ">
                   Reserve your room today
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const Header30Defaults: Header30Props = {
  heading: "Welcome to Katuumula hotel booking ",
  description:
    "Book a room with us today, give a feedback about our services today",
  
  image: {
    src: "/hero.jpeg",
    alt: "Hero image",
  },
};
