import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Footer() {
    return (
      <footer>
          <div className="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Made with 
              <FontAwesomeIcon icon={faHeart} className="display: inline-block w-4 text-red-600 mx-1" />
              by {' '}
              <Link href="https://github.com/liuyuhe666" target="_blank" className="hover:underline">Liu Yuhe</Link>
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link href="https://github.com/liuyuhe666" target="_blank" className="hover:underline me-4 md:me-6">GitHub</Link>
                </li>
                <li>
                    <Link href="https://hellolyh.xlog.app" target="_blank" className="hover:underline me-4 md:me-6">Blog</Link>
                </li>
                <li>
                    <Link href="mailto:cnliuyuhe@gmail.com" className="hover:underline">Contact</Link>
                </li>
            </ul>
          </div>
      </footer>
    );
}