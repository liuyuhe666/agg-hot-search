import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Nav() {
    return (
        <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
          <div className="flex items-center justify-between mx-auto max-w-6xl px-6 pb-2 pt-4 md:pt-6">
            <Link href="/" passHref className=" cursor-pointer">
                <h1 className="flex no-underline">
                  <img height="32" width="32" alt="logo" className="h-8 w-8 mr-1 object-contain" src="logo.png" />
                  <span className="text-xl font-primary font-bold tracking-tight pt-1">
                    聚合热搜
                  </span>
                </h1>
            </Link>
            <div>
              <Link
                href="https://github.com/liuyuhe666/agg-hot-search"
                passHref
                className=" relative"
              >
                  <FontAwesomeIcon className="text-palette-primary w-6 m-auto" icon={faGithub} />
              </Link>
            </div>
          </div>
        </header >
    );
}