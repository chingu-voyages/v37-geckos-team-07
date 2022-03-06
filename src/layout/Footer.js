import React from 'react';
import { AiOutlineGithub, AiTwotoneHeart } from 'react-icons/ai';

function Footer() {
  return (
    <footer>
      <p>
        This project was made with <AiTwotoneHeart className="love__icon" /> and in collaboration
        with{' '}
        <a
          href="https://www.chingu.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="contributor"
        >
          Chingu Voyages
        </a>{' '}
        :
      </p>
      <div className="contributors">
        <a
          href="https://github.com/TGiulio"
          target="_blank"
          rel="noopener noreferrer"
          className="contributor"
        >
          <AiOutlineGithub className="icon" />
          <p> TGiulio</p>
        </a>

        <a
          href="https://github.com/BabkinAV"
          target="_blank"
          rel="noopener noreferrer"
          className="contributor"
        >
          <AiOutlineGithub className="icon" />
          <p>BabkinAV</p>
        </a>

        <a
          href="https://github.com/pilauria"
          target="_blank"
          rel="noopener noreferrer"
          className="contributor"
        >
          <AiOutlineGithub className="icon" />
          <p> pilauria</p>
        </a>

        <a
          href="https://github.com/williamsgqdev"
          target="_blank"
          rel="noopener noreferrer"
          className="contributor"
        >
          <AiOutlineGithub className="icon" />
          <p> williamsgqdev</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
