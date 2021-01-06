import { Talks } from '../types';
import ExternalLink from './ExternalLink';

const PublicSpeakingCard = ({ link, title, description }: Talks) => (
  <ExternalLink href={link}>
    <div className="grid grid-cols-8 w-full mb-7 gap-4">
      <span className="col-span-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24">
          <path d="M13 22.589v1.411h-2v-1.425c0-1.958-.943-3.015-2-4.575h6c-1.062 1.553-2 2.612-2 4.589zm3-9.589c-.552 0-1-.448-1-1s.448-1 1-1h2v-2h-2c-.552 0-1-.448-1-1s.448-1 1-1h2v-2h-2c-.552 0-1-.448-1-1s.448-1 1-1h1.858c-.446-1.722-1.997-3-3.858-3h-4c-1.861 0-3.412 1.278-3.858 3h1.858c.552 0 1 .448 1 1s-.448 1-1 1h-2v2h2c.552 0 1 .448 1 1s-.448 1-1 1h-2v2h2c.552 0 1 .448 1 1s-.448 1-1 1h-1.858c.446 1.722 1.997 3 3.858 3h4c1.861 0 3.412-1.278 3.858-3h-1.858z" />
        </svg>
      </span>
      <div className="col-span-6 my-4">
        <h4 className="font-body font-bold text-lg mb-2">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  </ExternalLink>
);

export default PublicSpeakingCard;
