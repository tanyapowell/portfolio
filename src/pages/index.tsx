import { useEffect, useState } from 'react';
import PublicSpeakingCards from '../components/PublicSpeakingCards';
import Text from '../components/Text';
import Title from '../components/Title';

const words = ['software engineer', 'Londoner', 'mentor', 'public speaker'];
const talks = [
  {
    title: 'Resilience through inclusion',
    link: 'https://resilience-brilliance.simplecast.com/episodes/episode-4-resilience-through-inclusion',
    description: `You don’t need to be a coder to find inspiration from Charlene and Tanya's stories and ambition!`
  },
  {
    title: 'STEM TALKS: Black Women in Software Engineering',
    link: 'https://youtu.be/f1L6mfFW5zs',
    description: `Talking with STEM Babe about Software Engineering and how I got started in the industry`
  },
  {
    title: 'Blacks In Tech: The IT Factor EP:21Software Engineer',
    link: 'https://www.youtube.com/watch?v=GH00OsMmL4w',
    description: `Tanya explains that she loves coding and the entire process of figuring out a problem. It’s an awesome episode. `
  }
];

const Home = () => {
  const [word, setWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => setWord(words[Math.floor(Math.random() * words.length)]), 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Title>{`Hey! I'm Tanya Powell and a ${word}`}</Title>
      <Text>
        {`During the day I make software and during the night I usually do the same as a creative outlet or to help
        non-profit organisations. When I'm not at my desk you can either find me in my kitchen practicing for Top Chef
        or out and about with my DSLR taking photos. I blog about Frontend technologies, underrepresented groups in the
        technology sector and my voluntary experiences. Scroll down to find out more about me and feel free to get in
        touch with me via social media`}
      </Text>

      <h2 className="font-display font-bold leading-relaxed text-2xl md:text-4xl my-4 text-gray-900">
        Talks and podcast appearances
      </h2>
      <Text>Check out some of the talks and podcast appearances I made during 2020</Text>
      <PublicSpeakingCards talks={talks} />
    </>
  );
};

export default Home;
