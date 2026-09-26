import { Layout } from "@/components/layout";
import {
  HeroBanner,
  SectionOne,
  SectionThree,
  SectionFour,
  SectionFive,
} from "@/components/main";

function App() {
  return (
    <div className="bg-gray-200">
      <Layout>
        <HeroBanner />
        <SectionOne />
        <SectionThree />
        <SectionFour />
        <SectionFive />
      </Layout>
    </div>
  );
}

export default App;
