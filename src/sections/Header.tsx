import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import SamaiImage from '@/assets/Samai2.png';

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
          <Image src={SamaiImage} alt="Samai" height={100} width={100} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Testimonials</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Start 7 days free trail
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
