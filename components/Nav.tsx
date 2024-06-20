import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Nav() {
    return (
        <header className="border-b border-palette-lighter sticky top-0 z-20 bg-white">
          <div className="flex items-center justify-between m-4">
            <Link href="/" passHref className="cursor-pointer">
                <h1 className="flex no-underline">
                  <img height="32" width="32" alt="logo" className="h-8 w-8 mr-2 object-contain" src="logo.png" />
                  <span className="text-xl font-primary font-bold tracking-tight pt-1">
                    聚合热搜
                  </span>
                </h1>
            </Link>
            <div className="flex justify-end">
              <div className="mr-4">
                <Link
                  href="https://github.com/liuyuhe666/agg-hot-search"
                  passHref
                  className="relative"
                >
                    <FontAwesomeIcon className="text-palette-primary w-6 m-auto" icon={faGithub} />
                </Link>
              </div>
              <div className="mr-4">
                <Link
                  href="mailto:cnliuyuhe@gmail.com"
                  passHref
                  className="relative"
                >
                    <FontAwesomeIcon className="text-palette-primary w-6 m-auto" icon={faEnvelope} />
                </Link>
              </div>
            </div>
          </div>
        </header >
    );
}