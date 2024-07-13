import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
    return (
      <header className="bg-white rounded-lg shadow mx-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image src="/logo.png" width={30} height={30} alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">聚合热搜</span>
          </Link>
          <ul className="flex flex-wrap items-center">
              <li>
                  <Link href="/" className="me-4 md:me-6 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">🏠 主页</Link>
              </li>
              <li>
                  <Link href="/bili" className="me-4 md:me-6 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">📺 哔哩哔哩</Link>
              </li>
              <li>
                  <Link href="/douyin" className="me-4 md:me-6 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">🎵 抖音</Link>
              </li>
              <li>
                  <Link href="/toutiao" className="me-4 md:me-6 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">📰 头条</Link>
              </li>
              <li>
                  <Link href="/weibo" className="me-4 md:me-6 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">🦊 微博</Link>
              </li>
              <li>
                  <Link href="/zhihu" className="me-4 md:me-6 block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">❓ 知乎</Link>
              </li>
          </ul>
          <div>
            {/* 切换主题 */}
            <ThemeSwitch />
          </div>
        </div>
      </header>
    );
}