import { Header } from "./components/Header/Header";
import InfoContent from "./components/landing/InfoContent";
import PageContent from "./components/landing/PageContent";
import { Footer } from "./components/shared/Footer";
import Theme from "./components/shared/Theme";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageContent />
      <InfoContent />
      <Footer />
      <Theme/>
    </div>
  );
}
