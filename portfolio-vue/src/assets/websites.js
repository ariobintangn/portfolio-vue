import pikkat from './pikkat.png'
import pikkat2 from './pikkat2.png'
import cmsindonesia from './cmsindonesia.png'
import cmsindonesia2 from './cmsindonesia2.png'
import companyClone from './company-clone.png'
import irwanClaudia from './irwan-claudia2.png'
import metDigital from './met-digital.png'
import node from './node.png'
import javascript from './javascript.png'
import vue from './vue.png'
import tailwind from './tailwind.png'
import pinia from './pinia.png'
import github from './github.png'
import chartjs from './chartjs.png'
import midtrans from './midtrans.png'

const websites = [
  {
    name: 'Pikkat',
    year: 2024,
    url: 'https://pikkat.company/',
    image: pikkat,
    image2: pikkat2,
    description:
      'Creating a company profile for Pikkat, a collaboration between PT Smartek International Indonesia and PT Pikkat Qta Retail Servisindo. Similar with CMS Indonesia, we created a built-in news and blog services. The website connected here is not my work, but the previous company profile website. The latest project is still underway and is not online yet.',
    short_description: 'Company profile for Pikkat, a collaboration with Smartek.',
    client: 'PT Pikkat QTA Retail Servisindo',
    role: 'Front End Engineer',
    industry: 'SME, Marketplace',
    duration: 'Ongoing',
    techUsed: [node, javascript, vue, tailwind, pinia, github],
    techUsedName: ["Node JS", "Javascript", "Vue", "Tailwind", "Pinia", "Github",]
  },
  {
    name: 'CoinMarketScore ID',
    year: 2023,
    url: 'https://cmsindonesia.com/',
    description:
      'A collaboration with Singaporean based company, Vallidge pte. Created a landing page to introduce the product within Indonesian market, as well as creating a built-in blog and news services from scratch',
    short_description: 'A collaboration with Singaporean based company, Vallidge PTE.',
    image: cmsindonesia,
    image2: cmsindonesia2,
    client: 'vallidge consulting pte. ltd',
    role: 'Front-end Engineer',
    industry: 'Cryptocurrency',
    duration: '3 Months',
    techUsed: [node, javascript, vue, tailwind, pinia, github],
    techUsedName: ["Node JS", "Javascript", "Vue", "Tailwind", "Pinia", "Github",]
  },
  {
    name: 'Company Clone',
    year: 2023,
    url: 'https://company-clone.web.app/register',
    description:
      'A clone of a company to hone my skills in frontend engineering. I used ChartJs to represent data and build visually interesting charts.',
    short_description: 'A clone of a company to show charts and graphs',
    image: companyClone,
    image2: companyClone,
    client: 'Finance Company',
    role: 'Frontend Engineer',
    industry: 'HR and IT services',
    duration: '1 Week',
    techUsed: [node, javascript, vue, tailwind, pinia, github, chartjs],
    techUsedName: ["Node JS", "Javascript", "Vue", "Tailwind", "Pinia", "Github","Chart JS"]
  },
  {
    name: 'IRWAN AND CLAUDIA (DOWN)',
    year: 2022,
    url: 'https://irwanclaudia.com/',
    description:
      'A Custom made wedding invitation website with intricate responsive design and animation. Website is down due to the event has been done.',
    short_description: 'A custom made wedding invitation website for a private client',
    image: irwanClaudia,
    image2: irwanClaudia,
    client: 'Private',
    role: 'Front-end Engineer',
    industry: 'Event Planning',
    duration: '1 Months',
    techUsed: [node, javascript, vue, tailwind, pinia, github],
    techUsedName: ["Node JS", "Javascript", "Vue", "Tailwind", "Pinia", "Github",]
  },
  {
    name: 'MET Museum (DOWN)',
    year: 2022,
    url: 'https://ario-met-digital-2.web.app/',
    description:
      'My personal final project during studying at Hacktiv8. Awarded as the top 3 best personal project. Backend services for this website are not online, features such as item purchasing and history might not work. Please contact me if you would like to understand more about this project.',
    short_description: 'A personal final project during my Hacktiv8 program',
    image: metDigital,
    image2: metDigital,
    client: 'Hacktiv8',
    role: 'Fullstack Engineer',
    industry: 'Art and e-commerce',
    duration: '2 Days',
    techUsed: [node, javascript, vue, tailwind, pinia, github, midtrans],
    techUsedName: ["Node JS", "Javascript", "Vue", "Tailwind", "Pinia", "Github","Midtrans"]
  }
]

export default websites
