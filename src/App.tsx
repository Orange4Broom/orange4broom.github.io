import { Navigation } from "./components/blocks/navigation/Navigation";
import { AboutSection } from "./sections/aboutSection/AboutSection";
import { ContactSection } from "./sections/contactSection/ContactSection";
import { HomeSection } from "./sections/homeSection/HomeSection";
import { WorkSection } from "./sections/workSection/WorkSection";
import './sections/aboutSection/aboutSection.scss';
import './sections/contactSection/contactSection.scss';
import './sections/homeSection/homeSection.scss';
import './sections/workSection/workSection.scss';


export const App = () => (
  <>
    <Navigation />
    <HomeSection />
    <AboutSection />
    <WorkSection />
    <ContactSection />
  </>
);
