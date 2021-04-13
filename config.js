'use strict'

module.exports = {
  url: 'https://chisom_code.netlify.app',
  pathPrefix: '/',
  title: 'Chisom Okoye - Blog',
  subtitle: 'A Blog for anything JavaScript.',
  disqusShortname: 'chisom5',
  postsPerPage: 4,
  icon: 'static/photo.jpg',
  googleAnalyticsId: 'UA-123912722-2',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    }
  ],
  author: {
    name: 'Chisom okoye',
    photo:"https://res.cloudinary.com/chisom5/image/upload/v1618339846/photo.jpg",   
    bio: `${`I'm a Frontend developer that's passionate about building rich user experience products.`}`,
    contacts: {
      email: 'okoyechisom54@gmail.com',
      telegram: 'chisom5',
      twitter: 'chisom_code',
      github: 'chisom5',
      linkedin: 'chisom-okoye-399112122'
    }
  }
}
