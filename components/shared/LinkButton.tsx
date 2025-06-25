import Link from "next/link";

type LinkButtonProps = {
  link: string;
  text: string;
};
export const LinkButton = ({ link, text }: LinkButtonProps) => {
  return (
    <Link href={link}>
      <button className="bg-[#183B7A] text-white font-semibold py-3 px-8 rounded-lg text-base mb-2">
        {text}
      </button>
    </Link>
  );
};
