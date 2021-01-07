import { Talks } from '@/utils/types';
import ExternalLink from '@/components/ExternalLink';
import { mic } from '@/components/svgs';

const PublicSpeakingCard = ({ link, title, description }: Talks) => (
  <ExternalLink href={link}>
    <div className="grid grid-cols-8 w-full mb-7 gap-4">
      <span className="col-span-1">{mic}</span>
      <div className="col-span-6 my-4">
        <h4 className="font-body font-bold text-lg mb-2">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  </ExternalLink>
);

export default PublicSpeakingCard;
