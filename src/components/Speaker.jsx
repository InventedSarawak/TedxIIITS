import { useState, useEffect } from 'react';

function SpeakerCard({ image, name, description }) {
  return (
    <div className="relative group perspective-1000">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-purple-600 to-red-900 rounded-2xl opacity-0 group-hover:opacity-20 transform transition-all duration-500 animate-gradient-xy"></div>
      <div className="backdrop-blur-lg bg-black/30 rounded-2xl p-6 border border-gray-800 shadow-2xl transform transition-all duration-500 hover:-translate-y-2 hover:rotate-y-12 hover:border-red-500/30">
        <div className="relative mb-6 overflow-hidden rounded-xl aspect-[4/3] transform transition-transform duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-purple-500/20 mix-blend-overlay group-hover:opacity-75 transition-opacity duration-300"></div>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent mb-3">{name}</h3>
        <p className="text-gray-300 leading-relaxed text-sm transform transition-all duration-300 group-hover:text-white">{description}</p>
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute -inset-px bg-gradient-to-r from-red-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl">
          <div className="absolute inset-0 bg-[url('/kaleidoscope-pattern.png')] bg-center bg-no-repeat bg-cover mix-blend-overlay opacity-30"></div>
        </div>
      </div>
    </div>
  );
}


function Speaker() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const speakers = [
    {
      name: "Sam Altman",
      description: "Sam Altman is the CEO of OpenAI, developer of influential AI models like ChatGPT, DALL·E, Sora and o1. OpenAI’s mission is to ensure that all of humanity benefits from artificial general intelligence, or AGI — which they define as “highly autonomous systems that outperform humans at most economically valuable work.” Before his time at OpenAI, Altman was president of the startup accelerator Y Combinator.",
      image: "//pi.tedcdn.com/r/s3.amazonaws.com/ems-photos/event-speaker-photos/production/original_photos/f787824115f9004db98566be725024a7.jpg?quality=100&width=400",
      alt: "Sam Altman",
    }, 
    {
      name: "Yoshua Bengio",
      description: "Pioneering computer scientist and Turing Award winner Yoshua Bengio is at the forefront of deep learning research and AI development. In addition to being a professor at Université de Montréal, he is the founder and scientific director of the Mila - Quebec AI Institute, and devotes himself to reducing the potential risks to humanity of superhuman AI. He is the computer scientist with the highest h-index citation metric and number of citations, and he is ranked third among all disciplines by scientific impact, according to the Stanford bibliometric study.",
      image: "//pi.tedcdn.com/r/s3.amazonaws.com/ems-photos/event-speaker-photos/production/original_photos/fbc543a41503f69b817a7b77846b1ea4.jpg?quality=100&width=400",
      alt: "Yoshua Bengio",
    }, 
    {
      name: "Hany Farid",
      description: "A professor at the University of California, Berkeley, Hany Farid specializes in digital media forensics. In an era of pervasive and ever more convincing deepfakes, his work focuses on the evolution of photographic forensics. He is also the cofounder and chief science officer at GetReal Labs, which offers real-time authentication and forensic analysis of audio, video and images.",
      image: "//pi.tedcdn.com/r/s3.amazonaws.com/ems-photos/event-speaker-photos/production/original_photos/b49e2764a41b5371267efcdaa099c767.jpg?quality=100&width=400",
      alt: "Hany Farid",
    }, 
    {
      name: "Eric Schmidt",
      description: "Eric Schmidt is best known for his pivotal role in the growth and evolution of Google, where, as chairman and CEO, he oversaw the company's transformation from a small startup into one of the world's most influential companies from 2001 to 2011. He currently serves as executive chairman and CEO of Relativity Space and is the author of multiple bestselling books, the most recent being Genesis: Artificial Intelligence, Hope, and the Human Spirit, co-written with Henry Kissinger and Craig Mundie.",
      image: "//pi.tedcdn.com/r/s3.amazonaws.com/ems-photos/event-speaker-photos/production/original_photos/3b53595a6b90d04acb233b5622fa213f.jpg?quality=100&width=400",
      alt: "Eric Schmidt",
    }, 
    {
      name: "Amaury Guichon",
      description: `Chef Amaury Guichon bends chocolate to his will. After training at some of Europe’s top culinary schools and patisseries, he began posting his confections on social media, becoming the world’s most-followed pastry chef. In 2019, Guichon co-founded the Pastry Academy by Amaury Guichon in Las Vegas and in 2021, he hosted the Netflix reality series, School of Chocolate, a competition resulting in incredible chocolate sculptures. He is the author of the dessert cookbook The Art of Flavor and in 2023 was named "The World’s Most Creative Pastry Chef" by La Liste.`,
      image: "//pi.tedcdn.com/r/s3.amazonaws.com/ems-photos/event-speaker-photos/production/original_photos/36ac39b40282d69811d97022b752bb21.jpg?quality=100&width=400",
      alt: "Amaury Guichon",
    }, 
    {
      name: "Matan Cohen Grumi",
      description: "Matan Cohen Grumi is the founding creative director at PIKA, a social media-first AI video platform that seeks to make video creation more fun and accessible. Drawing on decades of experience touring with a successful metal band and directing TV ads for global brands such as P&G, Adidas and Nestlé, he blends high-quality production chops with a well-honed sense of what moves people. He sees AI as a playground that helps humans bring their ideas to life in ways that feel effortless and exciting.",
      image: "//pi.tedcdn.com/r/s3.amazonaws.com/ems-photos/event-speaker-photos/production/original_photos/0d38a66e60fa62cd7c719f89cc139327.jpg?quality=100&width=400",
      alt: "Matan Cohen Grumi",
    }, 
    {
      name: "Oz Pearlman",
      description: "After a stint on Wall Street, Oz Pearlman decided to pursue his childhood dream, and in the process redefined the very nature of the magic show. He wows audiences around the world with his mind-reading abilities and unique blend of charisma, charm and quick wit. His TV appearances include the Emmy-winning special Oz Knows and a Super Bowl pre-game performance. In 2022, he broke the world record for most miles run around Central Park in a single day (116 miles) to raise money for Ukrainian children.",
      image: "//pi.tedcdn.com/r/s3.amazonaws.com/ems-photos/event-speaker-photos/production/original_photos/7635e75e002c4dbf7b6e1adae34fa82d.jpg?quality=100&width=400",
      alt: "Oz Pearlman",
    }, 
    {
      name: "Jackie Lebo",
      description: "A multi-hyphenate creative herself, Jackie Lebo is founder of the Nomadic Arts Festival, which brings together artists from Nairobi and northern Kenya to showcase work inspired by the region, its topography and the peoples within it. Her film, photography and music explore the nexus between traditional societies and modernity. She also runs Content House Kenya, a collaborative artists’ collective that shares ownership and revenue with the communities where the work is rooted. At TED2025, Lebo will perform alongside Elizabeth Korikel and Eddie Grey.",
      image: "//pi.tedcdn.com/r/s3.amazonaws.com/ems-photos/event-speaker-photos/production/original_photos/905d67c801420bb27811bd5d035a0295.jpg?quality=100&width=400",
      alt: "Jackie Lebo",
    }, 
    {
      name: "Steven Pinker",
      description: "Steven Pinker is a cognitive scientist who is interested in all aspects of language, the mind and human nature. As a professor of psychology at Harvard (previously Stanford and MIT), he conducts research in visual cognition, psycholinguistics and social relations. His prize-winning work includes the first comprehensive theory of language acquisition in children and documenting historical declines in violence as a lens on the human condition. His books include The Language Instinct, How the Mind Works, The Better Angels of Our Nature and Enlightenment Now. His thirteenth book, to be published in September, is When Everyone Knows that Everyone Knows: Common Knowledge and the Mysteries of Money, Power, and Everyday Life.",
      image: "//pi.tedcdn.com/r/s3.amazonaws.com/ems-photos/event-speaker-photos/production/original_photos/9a7035141f261b37e5f61aba8fe77a48.jpg?quality=100&width=400",
      alt: "Steven Pinker",
    }, 
    {
      name: "Richard Dawkins",
      description: `Legendary evolutionary biologist Richard Dawkins has revolutionized our understanding of genetics and the role of science and religion in society. He is the author of 18 books (including The Selfish Gene, The God Delusion and, most recently, The Genetic Book of the Dead) and also hosts The Poetry of Reality podcast. His work inspires passionate discourse on humanity's biggest existential questions, including the spread of ideas (the concept of "memes" started with him). He is a staunch advocate for scientific literacy and critical thinking.`,
      image: "//pi.tedcdn.com/r/s3.amazonaws.com/ems-photos/event-speaker-photos/production/original_photos/d1cdaf293503687a88550fa71eeacc97.jpg?quality=100&width=400",
      alt: "Richard Dawkins",
    }, 
    {
      name: "Deja Foxx",
      description: "A trailblazing activist and content creator, Deja Foxx is the founder of GenZ Girl Gang, a digital collective redefining sisterhood for the digital age. Her work is informed by her personal journey: overcoming homelessness as a teen and being the first in her family to attend college. At 19, she became one of history's youngest presidential campaign strategists, advising Kamala Harris and speaking on youth issues at the 2024 Democratic National Convention. She serves on the board of directors of the Sustainable Media Center.",
      image: "//pi.tedcdn.com/r/s3.amazonaws.com/ems-photos/event-speaker-photos/production/original_photos/6b2a679102200697fdb859f53d455dbd.jpg?quality=100&width=400",
      alt: "Deja Foxx",
    }, 
    {
      name: "Claudia Passos Ferreira",
      description: "Claudia Passos Ferreira is a philosopher, bioethicist and clinical psychologist exploring the origins of consciousness and morality. With dual PhDs in philosophy and public health, she investigates how theories of consciousness shape our understanding of infants, animals and artificial intelligence — and how they inform questions of ethics.",
      image: "//pi.tedcdn.com/r/s3.amazonaws.com/ems-photos/event-speaker-photos/production/original_photos/9dfc3bac2f62131d8cff5163411a854d.jpg?quality=100&width=400",
      alt: "Claudia Passos Ferreira",
    }, 
    {
      name: "Jeffrey T. Reed",
      description: "Linguist and software engineer Jeffrey T. Reed is a research affiliate for the Cry Wolf Project, a bioacoustics study of wolf communication in the Greater Yellowstone ecosystem. After earning a PhD involving dead languages and computational linguistics, he spent three decades in tech before rekindling his childhood passion for animal communication. Today, he leverages AI to decode how wolves and other wildlife use sound.",
      image: "//pi.tedcdn.com/r/s3.amazonaws.com/ems-photos/event-speaker-photos/production/original_photos/51b38f14325d40f3baa046826bc38c40.jpg?quality=100&width=400",
      alt: "Jeffrey T. Reed",
    }, 
    {
      name: "Ariel Ekblaw",
      description: "Space architect Ariel Ekblaw is helping to shape humanity's interplanetary future. In her vision, space stations circle the Earth, Moon and Mars, furnished with self-assembling habitats, and everyone has access to low Earth orbit. Her work and investments as founder and CEO of the Aurelia Institute and general partner of the Aurelia Foundry Fund reflect her belief that we should scale up life in space. She was the founding director of the MIT Space Exploration Initiative and is author/editor of Into the Anthropocosmos: A Whole Space Catalog from the MIT Space Exploration Initiative.",
      image: "//pi.tedcdn.com/r/s3.amazonaws.com/ems-photos/event-speaker-photos/production/original_photos/40908913bf09b30363144f0d573bc6e4.jpg?quality=100&width=400",
      alt: "Ariel Ekblaw",
    }, 
    {
      name: "John Hope Bryant",
      description: "John Hope Bryant is the founder, chairman and CEO of Operation HOPE, the nation’s largest financial literacy and economic empowerment nonprofit. Under his leadership, Operation HOPE has directed more than $4.2 billion into marginalized communities, establishing hundreds of financial empowerment centers nationwide. A best-selling author of six books, Bryant has advised US presidents George W. Bush and Barack Obama and worked alongside Fortune 500 CEOs to promote financial literacy.",
      image: "//pi.tedcdn.com/r/s3.amazonaws.com/ems-photos/event-speaker-photos/production/original_photos/956e3b3e2b7a78a396983c5636432460.jpg?quality=100&width=400",
      alt: "John Hope Bryant",
    }, 

  ]

  return (
    <section className="py-24 pt-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-4 relative">
            Our <span className="text-red-600">Speakers</span>
            <div className="absolute -inset-1 bg-red-600/20 blur-lg rounded-full"></div>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-purple-600 mx-auto mb-6 animate-pulse"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet our extraordinary speakers who will inspire and transform your perspective
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={speaker.name} 
              className={`transition-all duration-1000 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <SpeakerCard {...speaker} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Speaker;