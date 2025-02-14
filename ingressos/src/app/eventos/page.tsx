import { Header } from "../components/Header/Header";
import EventosNav from "../components/listeventos/EventosNav";
import { Footer } from "../components/shared/Footer";
import Theme from "../components/shared/Theme";


export default function Page() {
  return (
    <div>
      <Header />
      <EventosNav />
      <Footer/>
      <Theme />
    </div>
  );
}
