import { Layout } from "@/components/layout";
import { HeroBanner, SectionOne, SectionTwo } from "@/components/main";

function App() {
  return (
    <div className="bg-gray-200">
      <Layout>
        <HeroBanner />
        <SectionOne />
        <SectionTwo />
      </Layout>
    </div>
  );
}

export default App;
