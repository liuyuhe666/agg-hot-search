import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
    return (
      <header>
        <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image src="/logo.png" width={30} height={30} alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">聚合热搜</span>
          </Link>
          <ThemeSwitch />
        </div>
      </header>
    );
}