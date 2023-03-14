import Image from 'next/image';

import Title from '@/components/Title';
import Text from '@/components/Text';

const socials = [
  { platform: 'Twitter', user: 'heytanhey' },
  { platform: 'Github', user: 'tanyapowell' },
  { platform: 'Linkedin', user: 'in/tanyapowell' },
];

const About = () => (
  <>
    <Title>About Me</Title>
    <h2 className="font-display leading-loose font-bold text-2xl md:text-4xl my-6 text-gray-800 prose lg:prose-x">
      Links
    </h2>
    <ul>
      {socials.map((item) => (
        <li key={item.platform} className="leading-loose text-lg font-body prose my-4">
          {item.platform}:<a href={`https:${item.platform}.com/${item.user}`}>{` ${item.user}`}</a>
        </li>
      ))}
    </ul>
    <h2 className="font-display leading-loose font-bold text-2xl md:text-4xl my-6 text-gray-800 prose lg:prose-x">
      Bio
    </h2>
    <h3 className="font-display leading-loose font-bold text-1xl md:text-2xl my-6 text-gray-800 prose lg:prose-x">
      Job Title
    </h3>
    <Text>
      Tanya Powell is the Co-CTO at <a href="https://codingblackfemales.com">Coding Black Females</a>
    </Text>
    <h3 className="font-display leading-loose font-bold text-1xl md:text-2xl my-6 text-gray-800 prose lg:prose-x">
      Long, 3rd Person
    </h3>
    <Text>
      Tanya Powell is the Co-CTO at <a href="https://codingblackfemales.com">Coding Black Females</a>, where she leads
      both the training and technology strategies and visions of the largest network on Black Female Technologists in
      the UK. Prior to that, Tanya was a Senior Software Engineer focused on the frontend. As an educator, Tanya has
      taught many people entering the world of technology and continually mentors.
    </Text>

    <h3 className="font-display leading-loose font-bold text-1xl md:text-2xl my-6 text-gray-800 prose lg:prose-x">
      Long, 1st Person
    </h3>

    <Text>
      Hey, I&apos;m Tanya Powell - the Co-CTO at <a href="https://codingblackfemales.com">Coding Black Females</a>. My
      role is to lead both the training and technology strategies and visions of the largest network on Black Female
      Technologists in the UK. Prior to that, I was a Senior Software Engineer focused on the frontend. I have taught
      many people entering the world of technology and I continue to mentor to this very day.
    </Text>

    <h3 className="font-display leading-loose font-bold text-1xl md:text-2xl my-6 text-gray-800 prose lg:prose-x">
      Short, 3rd Person
    </h3>
    <Text>
      {' '}
      Tanya Powell is the Co-CTO at <a href="https://codingblackfemales.com">Coding Black Females</a>, where she leads
      the technology strategy and vision of the largest network on Black Female Technologists in the UK
    </Text>
    <h3 className="font-display leading-loose font-bold text-1xl md:text-2xl my-6 text-gray-800 prose lg:prose-x">
      Short, 1st Person
    </h3>
    <Text>
      {' '}
      Hey, I&apos;m Tanya Powell - the Co-CTO at <a href="https://codingblackfemales.com">Coding Black Females</a>. My
      role is to lead the technology strategy and vision of the largest network on Black Female Technologists in the UK
    </Text>

    <h3 className="font-display leading-loose font-bold text-1xl md:text-2xl my-6 text-gray-800 prose lg:prose-x">
      Education
    </h3>
    <Text>Tanya Powell has a BSc (Hons) in Media Production and a MSc in Software Engineering</Text>
    <h2 className="font-display leading-loose font-bold text-2xl md:text-4xl my-6 text-gray-800 prose lg:prose-x">
      Headshot
    </h2>
    <div style={{ width: '100%' }}>
      <Image
        src="https://tanyapowell.s3.eu-west-1.amazonaws.com/Tanya+Powell+headshot.jpg"
        width={378}
        height={504}
        layout="responsive"
        className="headshot"
      />
    </div>
  </>
);

export default About;
