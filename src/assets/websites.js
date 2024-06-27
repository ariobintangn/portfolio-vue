import pikkat from './pikkat.png'
import pikkat2 from './pikkat2.png'
import cmsindonesia from './cmsindonesia.png'
import cmsindonesia2 from './cmsindonesia2.png'
import companyClone from './company-clone.png'
import irwanClaudia from './irwan-claudia2.png'
import valentine from './valentine.png'
import valentine2 from './valentine2.png'
import metDigital from './met-digital.png'
import node from './node.png'
import javascript from './javascript.png'
import vue from './vue.png'
import tailwind from './tailwind.png'
import pinia from './pinia.png'
import github from './github.png'
import chartjs from './chartjs.png'
import midtrans from './midtrans.png'
import python from './icons/python.svg'
import streamlit from './icons/streamlit.svg'
import pandas from './icons/pandas.svg'
import matplotlib from './icons/matplotlib.png'
import folium from './icons/folium.svg'
import markdown from './icons/markdown.png'
import html from './icons/html.png'
import streamlit1 from './streamlit.png'
import streamlit2 from './streamlit2.png'

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
    name: 'Streamlit Sandbox',
    year: 2024,
    url: 'https://ario-sandbox.streamlit.app/',
    description:
      `Learning python by creating a streamlit app where I tried some of it's features. The main highlight of the app is the 'Map' page where I plot some dummy bank branches on a map using folium, and then customize the color of the pin based on their performance.`,
    short_description: 'Private project where I explore Python with Streamlit and Folium',
    image: streamlit1,
    image2: streamlit2,
    client: 'Personal',
    role: 'Front-end Engineer',
    industry: 'Finance',
    duration: '3 days',
    techUsed: [python, streamlit, pandas, matplotlib, folium, html, markdown ],
    techUsedName: ["Python", "Streamlit", "Pandas", "Matplotlib", "Folium", "HTML5","Markdown"]
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
    name: 'Valentine Gift',
    year: 2024,
    url: 'https://valentine-gift-for-hana.web.app/',
    description:
      `Valentine gift for my wife on 2024, just having a little fun with this project. The "yes" button will become bigger if you press the "do'h" button. I did my best to consistently designed everything with The Simpsons styling`,
    short_description: 'Valentine gift for my wife on February 2024',
    image: valentine,
    image2: valentine2,
    client: 'Private',
    role: 'Frontend Engineer',
    industry: '-',
    duration: '1 Day',
    techUsed: [node, javascript, vue, tailwind,github],
    techUsedName: ["Node JS", "Javascript", "Vue", "Tailwind", "Github"]
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
