export const navbarData = {
  homeTitle: "zaapr0x's Blog",
}

export const footerData = {
  author: 'Rezza Priatna',
  aboutAuthor: `Hi! i'm Rezza Priatna, a Tech enthusiast, problem solver and backend developer.`,
  authorInterest:
    "I've a solid understanding of JavaScript, Python, PHP, and Java. I can turn your dreams and imagination come true :)",
  aboutTheSite:
    'Get Web Development, Javascript, PHP, NodeJs, and Web3, Related Articles, Tips, Learning resources and more.',
}

export const homePage = {
  title: 'Welcome To My Blog Site',
  description:
    'Get Web Development, Javascript, PHP, NodeJs, and Web3, Related Articles, Tips, Learning resources and more.',
}

export const blogsPage = {
  title: 'All Blogs',
  description: 'Here you will find all the blog posts I have written & published on this site.',
}

export const categoryPage = {
  title: 'Categories',
  description:
    'Blow this category is generated from all the tags are mentioned in the different blog post',
}

export const aboutPage = {
  title: 'Rezza Priatna',
  description: 'Backend Developer, Problem Solver, Web3 Enthusiast.',
  aboutMe: `Backend Developer & Web3 Explorer with a passion for building scalable systems and seamless APIs. Love optimizing performance, solving problems, and exploring new technologies.`,
}

export const seoData = {
  title: `zaapr0x's Blog | zaapr0x Blog`,
  ogTitle: `Get Web Development, Javascript, PHP, NodeJs, and Web3, Related Articles, Tips, Learning resources and more`,
  description: `Hi! i'm Rezza Priatna, a Tech enthusiast, problem solver and backend developer.`,
  twitterDescription: ``,
  image: '',
  mySite: '',
  twitterHandle: '@zaapr0x',
  mailAddress: 'asadnurriyad@gmail.com',
}

export const socialLinks = {
  githubLink: 'https://github.com/zaapr0x',
  discordLink: 'https://discordapp.com/users/1190194345295482952',
  twitterLink: 'https://twitter.com/zaapr0x',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
