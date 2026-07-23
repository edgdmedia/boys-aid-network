export interface Program {
  id: string;
  title: string;
  iconName: string;
  img: string;
  body: string;
  fullBody?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  img: string;
  author: string;
  date: string;
  tag: string;
  summary: string;
  content: string; // Markdown or simple HTML
}

export interface ImpactStory {
  id: string;
  title: string;
  img: string;
  tag: string;
  date: string;
  body: string;
}

export const stats = [
  { value: '500', suffix: '+', label: 'Boys Reached' },
  { value: '12', suffix: 'k+', label: 'Online Impact' },
  { value: '80', suffix: '+', label: 'Active Volunteers' },
  { value: '6', suffix: '', label: 'Major Programs' },
];

export const values = [
  { icon: 'compass', title: 'Find Himself', body: 'We help each boy discover his identity, purpose and God-given potential.' },
  { icon: 'users', title: 'Enjoy Inclusion', body: 'Every boy belongs. We build spaces where no child is left behind.' },
  { icon: 'trending-up', title: 'Contribute', body: 'We equip boys to give back and shape a better society for all.' },
];

export const programs: Program[] = [
  {
    id: 'street-children-badge-of-hope',
    title: 'Street Children Badge of Hope',
    iconName: 'HeartHandshake',
    img: '/images/AIN58-1-1024x684.jpeg',
    body: 'Supporting young boys living and working on the streets with care, shelter and a path forward.',
    fullBody: `This is a support program which is targeted at helping young boys who are living and working on the streets to be reintegrated back into their families and pursue excellent educational and skill acquisition opportunities.

This program was birthed out of an encounter with a street child in 2021. The young boy named Khalid shed light on life on the street, and the challenges that young people, majority of which are boys, experience. While the founder's effort to reintegrate Khalid at that time was unsuccessful due to lack of resources and other challenges beyond immediate control, the experience shed light to a bigger challenge that is plaguing societies around the world and the importance of interventions that tailored to help children, their families and the society at large.`
  },
  {
    id: 'law-enforcement-shield-of-support',
    title: 'Law Enforcement Shield of Support',
    iconName: 'Shield',
    img: '/images/AIN42-1-1024x684.jpeg',
    body: 'Standing with members of law enforcement across Nigeria to strengthen safer communities.',
    fullBody: `This LESOS program is a project for the support of members of the law enforcement across Nigeria. It is born out of the belief that members of the law enforcement will work better if they enjoy better care and support in every area of their lives. The project will address major areas such as Mental Health Support, Medical Support, Housing Support and Renovation, Childcare Support, Law Enforcement Stations and Barracks refurbishment, Bespoke Trainings and Further Education Support.`
  },
  {
    id: 'boys-bootcamp',
    title: 'Boys Bootcamp',
    iconName: 'Users',
    img: '/images/AIN60-1-1024x684.jpeg',
    body: 'Gathering boys ages 8–18 for speakers, mentorship and character-building experiences.',
    fullBody: `The boys bootcamp held for the first time in December 2022. We had boys from ages 8-18 in attendance. Speakers included Mrs Gladys Eyongdi, Esq., a legal practitioner and girlchild advocate.

Dr. Abayomi Olubitan, a medical doctor who is also one of our patrons and member of our board of trustees.

AIG FIMIHAN Adeoye (Rtd), a now retired Assistant Inspector General of Police who is also one of our patrons and member of our board of trustees.

Mr David Kadan, a dedicated young scholar who is passionate about young people especially boys and is currently the director of the Boys Mentorship Club in Nigeria.

The sessions had five major themes:
- Positive masculinity
- Rights of women and girls
- Cultism awareness
- Boys health and wellbeing
- Crime resistance and prevention.`
  },
  {
    id: 'mentorship-groups',
    title: 'Mentorship Groups',
    iconName: 'GraduationCap',
    img: '/images/AIN70-1-1024x684.jpeg',
    body: 'Monthly mentorship clubs building confidence, character and direction in young boys.',
    fullBody: `Boys Mentorship Groups are groups of boys who are enrolled in a mentorship club where monthly meetings are held. The meetings involve career development programs, topics around positive masculinity, trainings on social interactions and spiritual edification. Presently we have a club at New Reservation Area Baptist Church and we are working to begin another at the Redeemed Christian Church of God (Green Pastures Parish) Leicester, United Kingdom by the end of 2024. We also planning to start community and school clubs to enable boys from diverse cultural, ethnic and religious backgrounds to participate.

The group in Nigeria is currently headed by Mr David Kadan.`
  },
  {
    id: 'africa-crime-prevention-conference',
    title: 'Africa Crime Prevention Conference',
    iconName: 'Scale',
    img: '/images/AIN114-1024x684.jpeg',
    body: 'Advancing SDG 16 across Africa through prevention, dialogue and youth engagement.',
    fullBody: `The Africa Crime Prevention Conference is an initiative birthed from a greater need to advance the SDG 16 across Africa and to equip the law enforcement in African countries to unite against crime and transfer skills that can help enhance crime prevention across Africa. The conference is slated to start in 2026.`
  },
  {
    id: 'international-boys-day-conference',
    title: "International Boys' Day Conference",
    iconName: 'Megaphone',
    img: '/images/AIN116-1024x684.jpeg',
    body: 'A visionary conference created to inspire and equip the boychild for a better tomorrow.',
    fullBody: `The International Boys' Day Conference is a bold and visionary initiative by Boys Aid Network, created to inspire and equip boys to rise above societal challenges and embrace their highest potential.

Held annually on May 16th, a date globally recognised as the International day of the Boychild, this transformative gathering is designed to nurture the next generation of leaders, thinkers, and changemakers.

At the heart of the conference is the belief that every boy deserves access to strong mentorship, positive role models, and real-world guidance. Through dynamic sessions led by well-rounded speakers who are leaders in business, education, faith, and civic engagement, boys are exposed to practical wisdom, shared experiences, and stories of perseverance and purpose.

More than just listening, boys actively engage with mentors in an atmosphere of openness, curiosity, and respect. These powerful interactions leave lasting impressions, offering boys not only inspiration but also a renewed belief in their abilities and aspirations.

The International Boys' Day Conference plants seeds of confidence, character, and vision in young hearts shaping boys into men who will build stronger families, communities, and a better future for us all.`
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'first-international-boys-day-conference',
    title: "We Held Our First International Boys' Day Conference. And It Was a Dream Come True",
    img: '/images/AIN60-1-1024x684.jpeg',
    author: 'badmin',
    date: 'June 15, 2025',
    tag: 'Blog',
    summary: 'On July 19, 2025, a dream carried for years finally became reality.',
    content: `#### A Vision Comes to Life

On July 19, 2025, a dream I've carried for years finally became reality. We hosted the first-ever International Boys' Day Conference, right here in Ibadan, Nigeria. Organised by Boys Aid Network, this event was born out of a deep desire to create safe, inspiring spaces where boys can learn, grow, and find their voice.

The response was incredible. We had over 300 attendees, including boys and teachers from 20 public and private secondary schools, facilitators, volunteers, sponsors, and the media. The hall was filled with energy, excitement, and the kind of purpose you don't forget easily.

#### Our Theme: Beyond Limits

We chose the theme "Beyond Limits: Shaping Boys into Purpose-Driven Men" because we believe boys can be more than what the world expects. They can be empathetic, visionary, and strong in character. Every session was carefully designed to speak directly to this belief.

#### Finding Purpose with Dr. Akintunde Bada

Our keynote speaker, Dr. Akintunde Johnson Bada, set the tone with a soul-stirring message. He spoke about the dangers of drifting through life without purpose and encouraged the boys to make choices that align with who they want to become. One line that stuck with many was: "If boys do not know the purpose of their lives, they will likely waste it away."

#### Tackling Crime and Drug Abuse

We were honoured to have CSP Fatai Sanni of the Nigerian Police speak about criminal desistance. He shared real-life stories and helped the boys understand that walking away from crime is not weakness, but courage. The NDLEA War Against Drug Abuse (WADA) team also delivered a powerful session. Their approach was relatable and practical, helping boys understand how drug abuse can destroy potential. They left the boys with tools and information they can use to make smart, safe decisions.

#### A Heartfelt Talk from Pastor Tinu Akinlawon

Pastor Tinu Akinlawon of the Royal Priesthood Centre took a compassionate and firm approach as she spoke about the false connection between drugs and creativity. Her words were simple but piercing: "Drugs will not enhance your creativity. Purpose will." For the boys who dream of music, art, and entertainment, this was a wake-up call.

#### Stories from the Field

Mayokun Aina, our Programme Director, and Aderonke Kudirat, our Programme Coordinator, also spoke passionately. They shared stories from our outreach work with boys in underserved communities and reminded us why this mission matters. Their sessions showed how consistent care and education can transform a boy's entire life.

#### Our Commitment, Our Future

Our founder, Olufunke Oyinlola, had the honour of closing the event with a heartfelt message to the boys. She reminded them that their lives matter and that their futures are worth protecting. She encouraged them to believe in themselves, dream boldly, and walk in integrity. She also shared Boys Aid Network's unwavering commitment to continue supporting, educating, and uplifting boys across Nigeria, Africa, and around the world.

#### The Movement Has Just Begun

This conference was more than a programme, it was a spark. We lit a fire in the hearts of boys who will grow up to become men of value, vision, and purpose. We've started something powerful, and we're only just getting started.`
  },
  {
    slug: 'why-african-boys-are-not-winning-in-tech',
    title: 'The Real Story: Why African Boys Are Not Winning in Tech, Innovation or Education',
    img: '/images/AIN6-1-1024x684.jpeg',
    author: 'badmin',
    date: 'August 7, 2025',
    tag: 'Blog',
    summary: 'Across Africa, there is a common belief that boys are doing better than girls in education, technology, and innovation. But this is not the full picture.',
    content: `Across Africa, there is a common belief that boys are doing better than girls in education, technology, and innovation. Many assume that since boys are more visible in digital spaces, they must be leading in tech and have more opportunities in AI, software development, and entrepreneurship.
But this is not the full picture. In fact, many boys in Nigeria and across Africa are not in school, not learning, and not involved in any meaningful innovation. They are instead dropping out of school, losing interest in learning, and turning to crime, drugs, and get-rich-quick schemes.

#### A Dangerous Assumption

The popular narrative today focuses on closing the gap for girls in science, technology, engineering, and mathematics (STEM). While these efforts are important and necessary, they are often based on the assumption that boys already have access and are doing well. This assumption is not true for millions of boys across the continent, especially in under-resourced communities.

#### The Numbers Tell a Different Story

According to a 2023 report by UNESCO, 132 million boys are out of school globally. That is more than the number of girls out of school. In Nigeria, UNICEF reports that boys make up more than 60 percent of out-of-school children in the primary age group. And by the time they reach secondary school, even more boys are dropping out.
In 20 states in Nigeria, data from the National Senior Secondary Education Commission shows that 56.4 percent of secondary school dropouts are boys. States like Abia, Ebonyi, and Kano recorded some of the highest numbers.
In Northern Nigeria, insecurity, poverty, and pressure to become breadwinners push boys out of school. In some communities, boys are expected to start working early, join street trades, or migrate to cities to "hustle." In many cases, this hustle leads to dangerous choices, including fraud, scams, drug abuse, and cybercrime.

#### When Boys Leave School, They Enter Risk

Many boys who drop out of school do not go into apprenticeships or vocational training. Instead, they fall into a fast-growing underground economy filled with risky paths. Online fraud (commonly known as "Yahoo Yahoo"), Ponzi schemes, and betting are increasingly becoming the daily reality for many young males. In some cities, these lifestyles are now celebrated, with fraud becoming a symbol of success among peers.

A study conducted in Southeastern Nigeria showed that unemployment and role models were the top reasons boys turned to cybercrime. Many boys admitted they no longer saw education as a guarantee for success. They wanted fast money, flashy lifestyles, and respect.

#### Tech and Innovation? Only a Few Are In

It is true that boys seem to dominate spaces like coding bootcamps and AI hubs in urban areas. But these are only a small portion of the male population. Most of the boys who are thriving in tech today come from educated, middle or upper-class homes. They have access to good schools, laptops, Wi-Fi, and mentors.

The majority of boys, especially in rural areas and inner cities, are far removed from the tech revolution. They are not learning to code. They are not attending science fairs or robotics clubs. They are struggling with basic literacy and survival.

#### The Roots of the Problem

Several deep issues are responsible for this crisis:

- Poverty and child labour: Many boys must work to support their families. Education becomes a luxury.
- Low academic performance: Boys often struggle in reading and writing from early grades. Without support, they lose motivation.
- Gender expectations: In many cultures, being a "man" means providing by any means. Boys are pushed to find money fast.
- Lack of targeted support: Most educational initiatives are designed to help girls. Very few address the needs of boys.

In short, there is no system in place to catch boys when they begin to fall behind.

#### What Can Be Done?

The Boys Aid Network believes it is time to shift the conversation. We cannot continue to ignore the crisis among boys. We need a balanced approach that supports both boys and girls to thrive.

Here are a few steps that can make a real difference:

- **Recognize the crisis:** Policy makers, donors, educators, and NGOs must acknowledge that boys are being left behind, especially at the secondary school level.
- **Create support systems for boys:** Provide mentorship, counselling, academic support, and safe spaces for boys to learn and grow.
- **Promote positive role models:** Showcase men who achieved success through education, hard work, and integrity—not through crime or shortcuts.
- **Engage families and communities:** Help parents understand the value of keeping boys in school and away from harmful influences.
- **Strengthen early education:** Literacy gaps for boys often begin in primary school. The earlier we intervene, the better the outcome.
- **Make tech truly accessible:** Ensure that boys in low-income areas have access to tools, internet, and practical training to engage in innovation, not crime.

#### A Call for Balanced Inclusion

Promoting girls in education and innovation is a worthy cause. But leaving boys behind is a growing risk to national security, youth development, and long-term peace. The rise in cybercrime, gang culture, and youth disaffection is a signal that too many young men feel disconnected from any hope for a better future.

We must remember that education is not a competition between boys and girls. It is a collective mission to uplift every child. If we truly want a future filled with innovation, leadership, and progress, then we must ensure that no boy is left behind.

Boys need support. Boys need mentorship. Boys need opportunity.

Let's act before we lose another generation.`
  }
];

export const impactStories: ImpactStory[] = [
  {
    id: 'boys-against-crime-campaign',
    title: 'The Boys Against Crime Campaign',
    img: '/images/AIN116-1024x684.jpeg',
    tag: 'Impact',
    date: 'April 2022',
    body: `The campaign was birthed in April 2022 following several reports of criminal activities among young boys which had become quite alarming and hard to control. The vision behind the campaign was a desire to see a drastic reduction in criminal engagements among young people and to encourage crime prevention interventions at the grassroots level.

The first contact of the campaign were teenage young people in secondary schools across Ibadan, Nigeria. And to reach a pre diverse audience across different societal strata, an annual virtual crime prevention campaign across all social media platforms are undertaken.

Since its inception, over 3000 boys and girls in secondary schools have been reached and educated on various aspects of the law and legal penalties for breaches as well as crime prevention measures for safer communities.

The virtual campaign had reached an estimated 10,000 people through direct contact ads as at November, 2024, with over 50 volunteers participating in the campaign.

Campaign techniques include storytelling using AI tools, illustration videos, descriptive videos, illustration graphics and prints. All are designed in easy to understand and digest formats for both young and old, literates and illiterates.

The schools visited so far include:
- Ibadan Grammar School, Ibadan
- Oluyole High School, Ibadan
- Lagelu Grammar School, Ibadan`
  },
  {
    id: 'boys-bootcamp-2022',
    title: 'Boys Bootcamp 2022',
    img: '/images/AIN114-1024x684.jpeg',
    tag: 'Impact',
    date: 'December 2022',
    body: `The boys bootcamp held for the first time in December 2022. We had boys from ages 8-18 in attendance. Speakers included Mrs Gladys Eyongdi, Esq., a legal practitioner and girlchild advocate; Dr. Abayomi Olubitan, a medical doctor who is also one of our patrons and member of our board of trustees; and AIG FIMIHAN Adeoye (Rtd), a now retired Assistant Inspector General of Police who is also one of our patrons and member of our board of trustees.

Mr David Kadan, a dedicated young scholar who is passionate about young people especially boys and is currently the director of the Boys Mentorship Club in Nigeria, coordinated the bootcamp.

The sessions had five major themes:
- Positive masculinity
- Rights of women and girls
- Cultism awareness
- Boys health and wellbeing
- Crime resistance and prevention.`
  },
  {
    id: 'boys-mentorship-groups-impact',
    title: 'Boys Mentorship Groups',
    img: '/images/AIN42-1-1024x684.jpeg',
    tag: 'Impact',
    date: 'Monthly',
    body: `Boys Mentorship Groups are groups of boys who are enrolled in a mentorship club where monthly meetings are held. The meetings involve career development programs, topics around positive masculinity, trainings on social interactions and spiritual edification. Presently we have a club at New Reservation Area Baptist Church and we are working to begin another at the Redeemed Christian Church of God (Green Pastures Parish) Leicester, United Kingdom by the end of 2024. We also planning to start community and school clubs to enable boys from diverse cultural, ethnic and religious backgrounds to participate.

The group in Nigeria is currently headed by Mr David Kadan.`
  },
  {
    id: 'street-children-badge-of-hope-impact',
    title: 'Street Children Badge of Hope',
    img: '/images/AIN70-1-1024x684.jpeg',
    tag: 'Impact',
    date: 'Active',
    body: `This is a support program which is targeted at helping young boys who are living and working on the streets to be reintegrated back into their families and pursue excellent educational and skill acquisition opportunities.

This program was birthed out of an encounter with a street child in 2021. The young boy named Khalid shed light on life on the street, and the challenges that young people, majority of which are boys, experience. While the founder's effort to reintegrate Khalid at that time was unsuccessful due to lack of resources and other challenges beyond immediate control, the experience shed light to a bigger challenge that is plaguing societies around the world and the importance of interventions that tailored to help children, their families and the society at large.`
  },
  {
    id: 'africa-crime-prevention-conference-impact',
    title: 'Africa Crime Prevention Conference',
    img: '/images/AIN30-1-1024x684.jpeg',
    tag: 'Impact',
    date: 'Planned 2026',
    body: `The Africa Crime Prevention Conference is an initiative birthed from a greater need to advance the SDG 16 across Africa and to equip the law enforcement in African countries to unite against crime and transfer skills that can help enhance crime prevention across Africa. The conference is slated to start in 2026.`
  },
  {
    id: 'law-enforcement-shield-of-support-impact',
    title: 'Law Enforcement Shield of Support (LESOS)',
    img: '/images/AIN58-1-1024x684.jpeg',
    tag: 'Impact',
    date: 'Active',
    body: `This LESOS program is a project for the support of members of the law enforcement across Nigeria. It is born out of the belief that members of the law enforcement will work better if they enjoy better care and support in every area of their lives. The project will address major areas such as Mental Health Support, Medical Support, Housing Support and Renovation, Childcare Support, Law Enforcement Stations and Barracks refurbishment, Bespoke Trainings and Further Education Support.`
  }
];

export const galleryImages = [
  'AIN132', 'AIN131', 'AIN130', 'AIN128', 'AIN122', 'AIN115', 'AIN116', 'AIN117',
  'AIN118', 'AIN120', 'AIN114', 'AIN102', 'AIN97', 'AIN91', 'AIN90', 'AIN71',
  'AIN73', 'AIN75', 'AIN93-1', 'AIN94-1', 'AIN70-1', 'AIN69', 'AIN60-1', 'AIN58-1',
  'AIN57-1', 'AIN46-1', 'AIN49-1', 'AIN50-1', 'AIN55-1', 'AIN56-1', 'AIN44-1', 'AIN42-1',
  'AIN41-1', 'AIN38-1', 'AIN37-1', 'AIN24-1', 'AIN27-1', 'AIN30-1', 'AIN31-1', 'AIN36-1',
  'AIN22-1', 'AIN21-1', 'AIN18-1', 'AIN15-4', 'AIN15-1', 'AIN7-1', 'AIN9', 'AIN10-1',
  'AIN11-1', 'AIN12', 'AIN6-1', 'AIN5-4', 'AIN5-1', 'AIN2', 'AIN1'
].map(name => `/images/gallery/${name}-scaled.jpeg`);

export const bankDetails = {
  accountName: 'Boys Aid Network For Equipping And Empowering The Boychild',
  bankName: 'First Bank of Nigeria',
  nairaAccount: '2046386465',
  dollarAccount: '2046490614',
  poundAccount: '2046490968',
  swiftCode: 'FBNINGLA',
  sortCode: '011194581'
};

export const contactDetails = {
  email: 'info@boysaidnetwork.org',
  phone: '+234-814-765-5062',
  location: 'Lagos, Nigeria'
};

export const socialLinks = {
  facebook: 'https://www.facebook.com/share/18Zi2qKBnZ',
  x: 'https://x.com/boysaidnetwork',
  instagram: 'https://www.instagram.com/theboysaidnetwork'
};
