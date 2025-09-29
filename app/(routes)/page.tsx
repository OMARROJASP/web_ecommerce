import { Carrucel, User } from "@/components/home";
import { Banner } from "@/components/Shared";
//import { Navbar } from "./components";

export default function Home() {
  return (
    <div>
      <div className="h-[80px] w-full">
        AS
      </div>
      <Banner />
      <div className="px-[5px]  md:px-[2rem]">     
        <div>
          <User />
        </div>
        <Carrucel  />
      </div>

    </div>
  );
}
