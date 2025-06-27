import Image from "next/image";

type CommentCardProps = {
  name: string;
  date: string;
  comment: string;
};

export const CommentCard = ({ name, date, comment }: CommentCardProps) => (
  <div className="bg-[#183B7A] rounded-xl p-6 text-white">
    <div className="flex items-center mb-2">
      <Image
        src="/icons/quote.svg"
        alt="alt text"
        width={30}
        height={30}
        className="text-nephos-cyan w-8 h-8 mr-2"
      />
      <span className="font-bold text-lg">{name}</span>
      <span className="ml-2 text-sm text-nephos-bgPrimary">
        <span className="underline">{date}</span>
      </span>
    </div>
    <p className="text-base text-nephos-bgPrimary mt-2">{comment}</p>
  </div>
);
