type LinkProps = {
  text: string;
};
export default function Button({ text }: LinkProps) {
  return (
    <button className="text-white font-bold text-[0.85rem] max-w-[310px] w-full h-12 rounded-[8px] bg-greyBtn hover:bg-green hover:text-black flex justify-center items-center py-2">
      {text}
    </button>
  );
}
