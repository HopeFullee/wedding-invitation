import { Layout } from "@/components/layout";
import {
  HeroBanner,
  SectionOne,
  SectionThree,
  SectionFour,
} from "@/components/main";

function App() {
  return (
    <div className="bg-gray-200">
      <Layout>
        <HeroBanner />
        <SectionOne />
        <SectionThree />
        <SectionFour />
      </Layout>
    </div>
  );
}

export default App;
