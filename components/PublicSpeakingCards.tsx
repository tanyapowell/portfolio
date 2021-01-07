import PublicSpeakingCard from '@/components/PublicSpeakingCard';
import { Talks } from '@/utils/types';

interface Props {
  talks: Talks[];
}

const PublicSpeakingCards = ({ talks }: Props) => (
  <>
    {talks.map((talk) => (
      <PublicSpeakingCard key={talk.title} link={talk.link} title={talk.title} description={talk.description} />
    ))}
  </>
);

export default PublicSpeakingCards;
