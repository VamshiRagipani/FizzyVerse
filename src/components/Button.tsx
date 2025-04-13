import clsx from "clsx";

type Props = {
  buttonLink: any | string; // Allow any type or string
  buttonText: string;
  className?: string;
};

const Button = ({ buttonLink, buttonText, className }: Props) => {
  return (
    <a
      href={typeof buttonLink === "string" ? buttonLink : buttonLink.url}
      className={clsx(
        "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
        className,
      )}
    >
      {buttonText}
    </a>
  );
};

export default Button;
