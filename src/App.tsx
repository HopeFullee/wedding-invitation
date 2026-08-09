import { Layout } from "@/components/layout";
import { HeroBanner, SectionOne } from "@/components/main";

function App() {
  return (
    <div className="bg-gray-200">
      <Layout>
        <HeroBanner />
        <SectionOne />
      </Layout>
    </div>
  );
}

export default App;
