import PublicSpeakingCard from '@/components/PublicSpeakingCard';
import { Talks } from '@/utils/types';

interface Props {
  talks: Talks[];
}

const PublicSpeakingCards = ({ talks }: Props) => (
  <div className="mt-10">
    {talks.map((talk) => (
      <PublicSpeakingCard key={talk.title} link={talk.link} title={talk.title} description={talk.description} />
    ))}
  </div>
);

export default PublicSpeakingCards;
