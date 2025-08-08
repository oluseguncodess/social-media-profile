import profilePicture from "../assets/images/avatar-jessica.jpeg";
import { LINKS } from "../store/data";
import Button from "./Button";

export default function Card() {
  return (
    <div className="h-[90%] sm:h-[680px] max-w-[400px] w-[90%] bg-greyCard rounded-2xl px-6 sm:py-11 py-9 flex flex-col gap-8 items-center justify-center">
      <div className="flex items-center flex-col gap-6">
        <img src={profilePicture} alt="" className="rounded-full w-25" />
        <div className="text-center flex flex-col gap-1.5">
          <h1 className="text-white text-[1.6rem] font-medium">Jessica Randall</h1>
          <h3 className="text-[0.85rem] font-bold text-green">London, United Kingdom</h3>
        </div>
        <p className="text-white text-sm text-center">"Front-end developer and avid reader."</p>
      </div>
      <div className="w-full flex flex-col items-center gap-5">
        {LINKS.map(link => <Button key={link.id} text={link.text}/>)}
      </div>
    </div>
  );
}
