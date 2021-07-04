import { Talks } from '@/utils/types';
import ExternalLink from '@/components/ExternalLink';
import { mic } from '@/components/svgs';

const PublicSpeakingCard = ({ link, title, description }: Talks) => (
  <ExternalLink href={link}>
    <div className="grid grid-cols-8 w-full mb-7 gap-4 last:mb-0">
      <span className="col-span-1">{mic}</span>
      <div className="col-span-7 my-4">
        <h3 className="font-display text-xl mb-2">{title}</h3>
        <p className="text-lg leading-loose text-gray-700">{description}</p>
      </div>
    </div>
  </ExternalLink>
);

export default PublicSpeakingCard;
