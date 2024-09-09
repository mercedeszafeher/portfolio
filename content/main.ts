export const attributes = {
  hero: {
    _firstButton: {
      icon: 'briefcase-outline',
      link: '/#portfolio',
      text: 'Portfolio',
    },
    get firstButton() {
      return this._firstButton;
    },
    set firstButton(value) {
      this._firstButton = value;
    },
    heading: "I'm Mercedesz A. Feher , and I creativly create",
    image: '/img/hero.jpeg',
    secondButton: { icon: 'whatsapp', link: '/#about', text: 'About me' },
    social: {
      facebook: { link: 'https://facebook.com', show: true },
      instagram: { link: 'https://instagram.com', show: true },
      linkedin: { link: 'https://linkedin.com', show: true },
    },
    typed: [
      { text: 'fast websites.' },
      { text: 'beautiful logos.' },
      { text: 'great experiences.' },
    ],
  },
  about: {
    heading: 'Who am I?',
    image: '/img/portfolio.jpeg',
    text: ' I’m an adventurous person who loves spending time outdoors, especially during the winter months in the snow. Gardening is one of my passions, and I share my home with a very stubborn cat. Originally from Hungary. I enjoy being around people, exploring new places, and collecting unique experiences from around the world. Oh and of course I am down for coffee any time!\n',
  },
  features: [
    {
      icon: 'monitor-screenshot',
      text: 'I feel most at ease with UI/UX design, where I can fully express my creativity.\n',
      title: 'UI/UX',
    },
    {
      icon: 'draw',
      text: 'I love designing various types of logos for companies that showcase their industry and occupation.\n',
      title: 'Logo Design',
    },
    {
      icon: 'xml',
      text: 'I feel most comfortable with web development, where I can bring innovative ideas to life through coding and design.\n',
      title: 'Web Development',
    },
  ],
  portfolio: {
    projects: [
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-1.jpeg',
        title: 'ShopoShopy',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-2.jpeg',
        title: 'LogoLogy',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-3.jpeg',
        title: 'SitoSity',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-4.jpeg',
        title: 'DrawoDrawy',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-5.jpeg',
        title: 'PagoPagy',
      },
      {
        btnLink: 'https://behance.com',
        btnText: 'View on Behance',
        image: '/img/project-6.jpeg',
        title: 'UIoUXy',
      },
    ],
    title: 'My work',
  },
  footer: { text: '© Mercedesz A. Feher' },
};
