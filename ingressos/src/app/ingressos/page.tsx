import { Header } from "../components/Header/Header";
import Theme from "../components/shared/Theme";
import TicketNav from "../components/TicketPage/TicketCard";

export default function Page() {
  return (
    <div>
      <Header />
      <TicketNav />
      <Theme />
    </div>
  );
}
