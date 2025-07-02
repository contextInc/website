import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import SubscriptionInfo from "@/components/ui/SubscriptionInfo";
import VoiceTicketInfo from "@/components/ui/VoiceTicketInfo";
import PicTicketInfo from "@/components/ui/PicTicketInfo";


export default function Price() {
  return (
    <div>
        <Header />
        <SubscriptionInfo />
        <VoiceTicketInfo />
        <PicTicketInfo />
        <Footer />
    </div>
  );
}

