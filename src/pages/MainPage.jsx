import swiperData from '../utils/data/swiper.json';
import faqData from '../utils/data/faq.json';
import Main from 'components/Main/Main';
import { MainTitle } from './MainPage.styled';
import Header from 'components/Header/Header';
import About from 'components/About/About';
import Electriciti from 'components/Electricity/Electricity';
import Cases from 'components/Cases/Cases';
import Faq from 'components/Faq/Faq';
import ContactUs from 'components/ContactUs/ContactUs';

const MainPage = () => {
  return (
    <>
      <Header />
      <MainTitle>Ecosolution, green energy</MainTitle>
      <Main />
      <About />
      <Electriciti />
      <Cases articles={swiperData} />
      <Faq questions={faqData} />
      <ContactUs/>
      <p>\dxgffcbg</p>
    </>
  );
};

export default MainPage;
