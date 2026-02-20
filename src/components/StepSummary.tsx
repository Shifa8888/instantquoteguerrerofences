import type { QuoteData, FenceStyle } from "@/pages/Index";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

type Props = {
  data: QuoteData;
  fenceStyles: FenceStyle[];
  onBack: () => void;
  onReset: () => void;
};

const PRICE_PER_FT: Record<string, number> = {
  "wood-treated-pine": 32,
  vinyl: 38,
  "chain-link-4ft": 18,
  "chain-link-6ft": 22,
  "corrugated-metal": 45,
};

const GATE_PRICE: Record<string, number> = {
  single: 250,
  double: 450,
  sliding: 800,
};

const StepSummary = ({ data, fenceStyles, onBack, onReset }: Props) => {
  const style = fenceStyles.find((s) => s.id === data.fenceStyle);
  const pricePerFt = PRICE_PER_FT[data.fenceStyle] || 30;
  const fenceCost = data.length * pricePerFt;
  const gateCost = data.gates * (GATE_PRICE[data.gateType] || 250);
  const totalEstimate = fenceCost + gateCost;

  return (
    <div className="max-w-xl mx-auto">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2 text-center">
        Step 4 of 4
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 text-center">
        Your Estimate
      </h1>
      <p className="text-muted-foreground mb-10 text-center">
        Here's a summary of your instant fence quote.
      </p>

      <div className="bg-card rounded-xl p-6 sm:p-8 border border-border shadow-sm space-y-6">
        {/* Style */}
        <div className="flex items-center gap-4">
          {style && (
            <img
              src={style.image}
              alt={style.name}
              className="w-20 h-20 rounded-lg object-cover"
            />
          )}
          <div>
            <p className="text-sm text-muted-foreground">Fence Style</p>
            <p className="font-semibold text-foreground">{style?.name || data.fenceStyle}</p>
          </div>
        </div>

        <hr className="border-border" />

        {/* Details */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Height</p>
            <p className="font-medium text-foreground">{data.height}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Length</p>
            <p className="font-medium text-foreground">{data.length} ft</p>
          </div>
          <div>
            <p className="text-muted-foreground">Gates</p>
            <p className="font-medium text-foreground">{data.gates}x {data.gateType}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Contact</p>
            <p className="font-medium text-foreground">{data.name}</p>
          </div>
        </div>

        <hr className="border-border" />

        {/* Pricing */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Fencing ({data.length} ft × ${pricePerFt}/ft)</span>
            <span className="font-medium text-foreground">${fenceCost.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Gates ({data.gates}x {data.gateType})</span>
            <span className="font-medium text-foreground">${gateCost.toLocaleString()}</span>
          </div>
          <hr className="border-border" />
          <div className="flex justify-between text-lg font-bold">
            <span className="text-foreground">Estimated Total</span>
            <span className="text-primary">${totalEstimate.toLocaleString()}</span>
          </div>
        </div>

        <div className="bg-secondary rounded-lg p-4 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            This is an estimate. A Guerrero Fences team member will contact you within 24 hours with a detailed quote.
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack} className="gap-2">
          <ArrowLeft className="w-4 h-4" /> Back
        </Button>
        <Button onClick={onReset}>
          Start New Quote
        </Button>
      </div>
    </div>
  );
};

export default StepSummary;
