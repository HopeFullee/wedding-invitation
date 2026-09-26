import { Layout } from "@/components/layout";
import {
  HeroBanner,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
  SectionSix,
} from "@/components/main";

function App() {
  return (
    <div className="bg-gray-100">
      <Layout>
        <HeroBanner />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </Layout>
    </div>
  );
}

export default App;
