import Title from '@/components/Title';
import Text from '@/components/Text';
import PublicSpeakingCards from '@/components/PublicSpeakingCards';
import HorizontalRule from '@/components/HorizontalRule';
import Button from '@/components/Button';
import ExternalLink from '@/components/ExternalLink';

const talks = [
  {
    title: 'Community Driven Development',
    link: 'http://slides.com/krissygoround/tanya-krissy-gg-conf-2016#/',
    description: `Improving your coding skills through open source communities. Delivered at Geek Girl Meetup Conference`,
  },
  {
    title: 'How I got started in technology',
    link: 'https://tanyapowell.co.uk/how-i-started',
    description: `Inspirational talk delivered at Geek Carrots`,
  },
  {
    title: 'Introduction to BDD',
    link: 'https://tanyapowell.co.uk/intro-to-bdd-talk',
    description: `Introductory talk into the software development process - behavior-driven development. Delivered at Codebar Monthlies`,
  },
  {
    title: 'Designing for Intersectionality',
    link: 'https://tanyapowell.co.uk/design-for-intersectionality',
    description: `Delivered at Fearless Futures, this workshop introduced teenagers to the concept of intersectionality and designing an inclusive product`,
  },
  {
    title: 'Intersectionality and Technology',
    link: 'https://tanyapowell.co.uk/intersectionality-in-tech',
    description: `Delivered at Ladies of Code and Women Who Code, this talk brings awareness to the lack of intersectional diversity in the technology sector`,
  },
];

const Talks = () => (
  <>
    <Title>Technical Talks</Title>
    <Text>
      With an ability to articulate my thoughts in a way that anyone can understand, I decided to use my voice for good
      and began public speaking. My talks range from personal experiences in the tech industry to technical deep dives.
    </Text>
    <Text>If you would like me to talk at your meetup/conference/event get in touch with me.</Text>
    <ExternalLink href="mailto:hello@tanyapowell.co.uk?subject=Speaking Opportunity" marginBottom="0">
      <Button>Contact Me</Button>
    </ExternalLink>
    <HorizontalRule />
    <PublicSpeakingCards talks={talks} type="techTalk" />
  </>
);

export default Talks;
