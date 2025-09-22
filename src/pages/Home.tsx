import Cover from "@/components/ui/Cover";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ServicePoint from "@/components/ui/ServicePoint";

export default function Home() {
  return (
    <div>
        <Header />
        <Cover />
        <ServicePoint />
        {/* <Episode /> */}
        <Footer />
    </div>
  );
}

