import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className="py-4 flex justify-center font-primary items-center">
          Build with <FontAwesomeIcon icon={faHeart} className="w-5 text-red-600 mx-1" /> by{' '}
          <a
            href="https://github.com/liuyuhe666"
            target="_blank"
            rel="noreferrer"
            className="text-palette-primary font-bold px-1"
          >
            Liu Yuhe
            </a>
      </footer>
    );
}