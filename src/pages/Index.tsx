import { useState } from "react";
import Header from "@/components/Header";
import AdminLoginModal from "@/components/AdminLoginModal";
import ProgressBar from "@/components/ProgressBar";
import StepFenceStyle from "@/components/StepFenceStyle";
import StepCustomize from "@/components/StepCustomize";
import StepDetails from "@/components/StepDetails";
import StepSummary from "@/components/StepSummary";
import Footer from "@/components/Footer";

export type FenceStyle = {
  id: string;
  name: string;
  description: string;
  image: string;
  available: boolean;
};

export type QuoteData = {
  fenceStyle: string;
  height: string;
  length: number;
  gates: number;
  gateType: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
};

const FENCE_STYLES: FenceStyle[] = [
  {
    id: "wood-treated-pine",
    name: "Wood Treated Pine",
    description: "Classic warmth and natural beauty for privacy.",
    image: "https://horizons-cdn.hostinger.com/282d192e-39a6-44d9-ba9c-a278dfdcbb2a/b18748671b3b18321cb5361f4e47cf7c.jpg",
    available: true,
  },
  {
    id: "vinyl",
    name: "Vinyl Fence",
    description: "Durable, low-maintenance, modern aesthetic.",
    image: "https://images.unsplash.com/photo-1598285514781-a39c1483329f?w=600&h=400&fit=crop",
    available: false,
  },
  {
    id: "chain-link-4ft",
    name: "Chain Link 4ft",
    description: "Cost-effective security for pets and boundaries.",
    image: "https://images.unsplash.com/photo-1552313828-c94dd727b030?w=600&h=400&fit=crop",
    available: false,
  },
  {
    id: "chain-link-6ft",
    name: "Chain Link 6ft",
    description: "Enhanced security with added height.",
    image: "https://images.unsplash.com/photo-1552313828-c94dd727b030?w=600&h=400&fit=crop",
    available: false,
  },
  {
    id: "corrugated-metal",
    name: "Corrugated Metal Privacy",
    description: "Modern, durable, and zero-maintenance privacy.",
    image: "https://images.unsplash.com/photo-1643019534839-c3d38b197cb2?w=600&h=400&fit=crop",
    available: false,
  },
];

const Index = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [quoteData, setQuoteData] = useState<QuoteData>({
    fenceStyle: "",
    height: "6ft",
    length: 100,
    gates: 1,
    gateType: "single",
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });

  const updateQuoteData = (updates: Partial<QuoteData>) => {
    setQuoteData((prev) => ({ ...prev, ...updates }));
  };

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const [adminOpen, setAdminOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onAdminClick={() => setAdminOpen(true)} />
      <AdminLoginModal open={adminOpen} onOpenChange={setAdminOpen} />
      <ProgressBar currentStep={currentStep} totalSteps={4} />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8 sm:py-12">
        {currentStep === 1 && (
          <StepFenceStyle
            styles={FENCE_STYLES}
            selected={quoteData.fenceStyle}
            onSelect={(id) => {
              updateQuoteData({ fenceStyle: id });
              nextStep();
            }}
          />
        )}
        {currentStep === 2 && (
          <StepCustomize
            data={quoteData}
            onChange={updateQuoteData}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}
        {currentStep === 3 && (
          <StepDetails
            data={quoteData}
            onChange={updateQuoteData}
            onNext={nextStep}
            onBack={prevStep}
          />
        )}
        {currentStep === 4 && (
          <StepSummary
            data={quoteData}
            fenceStyles={FENCE_STYLES}
            onBack={prevStep}
            onReset={() => {
              setCurrentStep(1);
              setQuoteData({
                fenceStyle: "",
                height: "6ft",
                length: 100,
                gates: 1,
                gateType: "single",
                name: "",
                email: "",
                phone: "",
                address: "",
                notes: "",
              });
            }}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
