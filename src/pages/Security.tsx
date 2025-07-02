import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import SecurityAppeal1 from "@/components/ui/SecurityAppeal1";
import SecurityAppeal2 from "@/components/ui/SecurityAppeal2";
import SecurityAppeal3 from "@/components/ui/SecurityAppeal3";
import SecurityAppeal4 from "@/components/ui/SecurityAppeal4";

export default function Security() {
  return (
    <div>
        <Header />
        <SecurityAppeal1 />
        <SecurityAppeal4 />
        <SecurityAppeal2 />
        <SecurityAppeal3 />
        <Footer />
    </div>
  );
}

