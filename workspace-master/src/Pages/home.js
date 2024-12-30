import {React} from 'react';
import Header from '../components/header';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from '../components/landing';
import About from '../components/about';
import SkillsSection from '../components/skills';
import { ContactForm, Footer, WorkSection } from '../components/alll';
const Home = ()=>{
return(
   <>
    <Header />
    {/* Other components */}
    <Hero/>
    <About/>
    <SkillsSection/>
    <WorkSection/>
    <ContactForm/>
    <Footer/>

    </>
);
}

export default Home;