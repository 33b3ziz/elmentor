import LandingSection from "@/components/LandingSection";
import OffersSection from "@/components/OffersSection";
import ReviewsSection from "@/components/ReviewsSection";
import SubscribeSection from "@/components/SubscribeSection";
import TopMentorsSection from "@/components/TopMentorsSection";

const LandingPage = () => {
  return (
    <main className="px-16">
      <LandingSection />
      <TopMentorsSection />
      <TopMentorsSection />
      <OffersSection />
      <ReviewsSection />
      <SubscribeSection />
    </main>
  );
};

export default LandingPage;
