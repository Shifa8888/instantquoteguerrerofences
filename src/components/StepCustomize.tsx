import type { QuoteData } from "@/pages/Index";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  data: QuoteData;
  onChange: (updates: Partial<QuoteData>) => void;
  onNext: () => void;
  onBack: () => void;
};

const StepCustomize = ({ data, onChange, onNext, onBack }: Props) => {
  return (
    <div className="max-w-xl mx-auto">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2 text-center">
        Step 2 of 4
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 text-center">
        Customize Your Fence
      </h1>
      <p className="text-muted-foreground mb-10 text-center">
        Configure height, length, and gate options.
      </p>

      <div className="space-y-8 bg-card rounded-xl p-6 sm:p-8 border border-border shadow-sm">
        {/* Height */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Fence Height</Label>
          <Select value={data.height} onValueChange={(v) => onChange({ height: v })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4ft">4 ft</SelectItem>
              <SelectItem value="6ft">6 ft</SelectItem>
              <SelectItem value="8ft">8 ft</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Length */}
        <div className="space-y-3">
          <div className="flex justify-between">
            <Label className="text-sm font-medium">Fence Length</Label>
            <span className="text-sm font-semibold text-primary">{data.length} ft</span>
          </div>
          <Slider
            value={[data.length]}
            onValueChange={([v]) => onChange({ length: v })}
            min={20}
            max={500}
            step={5}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>20 ft</span>
            <span>500 ft</span>
          </div>
        </div>

        {/* Gates */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Number of Gates</Label>
            <Select value={String(data.gates)} onValueChange={(v) => onChange({ gates: Number(v) })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[0, 1, 2, 3, 4].map((n) => (
                  <SelectItem key={n} value={String(n)}>
                    {n}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium">Gate Type</Label>
            <Select value={data.gateType} onValueChange={(v) => onChange({ gateType: v })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single Gate</SelectItem>
                <SelectItem value="double">Double Gate</SelectItem>
                <SelectItem value="sliding">Sliding Gate</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack} className="gap-2">
          <ArrowLeft className="w-4 h-4" /> Back
        </Button>
        <Button onClick={onNext} className="gap-2">
          Continue <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default StepCustomize;
