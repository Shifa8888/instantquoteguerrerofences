import type { QuoteData } from "@/pages/Index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

type Props = {
  data: QuoteData;
  onChange: (updates: Partial<QuoteData>) => void;
  onNext: () => void;
  onBack: () => void;
};

const StepDetails = ({ data, onChange, onNext, onBack }: Props) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!data.name.trim()) errs.name = "Name is required";
    if (!data.email.trim()) errs.email = "Email is required";
    if (!data.phone.trim()) errs.phone = "Phone is required";
    if (!data.address.trim()) errs.address = "Address is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) onNext();
  };

  return (
    <div className="max-w-xl mx-auto">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2 text-center">
        Step 3 of 4
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 text-center">
        Your Details
      </h1>
      <p className="text-muted-foreground mb-10 text-center">
        Tell us how to reach you with your quote.
      </p>

      <div className="space-y-5 bg-card rounded-xl p-6 sm:p-8 border border-border shadow-sm">
        <div className="space-y-2">
          <Label>Full Name *</Label>
          <Input
            value={data.name}
            onChange={(e) => onChange({ name: e.target.value })}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <Label>Email *</Label>
          <Input
            type="email"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>
        <div className="space-y-2">
          <Label>Phone *</Label>
          <Input
            type="tel"
            value={data.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            placeholder="(555) 123-4567"
          />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div className="space-y-2">
          <Label>Property Address *</Label>
          <Input
            value={data.address}
            onChange={(e) => onChange({ address: e.target.value })}
            placeholder="123 Main St, City, TX"
          />
          {errors.address && <p className="text-xs text-destructive">{errors.address}</p>}
        </div>
        <div className="space-y-2">
          <Label>Additional Notes</Label>
          <Textarea
            value={data.notes}
            onChange={(e) => onChange({ notes: e.target.value })}
            placeholder="Any special requirements or details..."
            rows={3}
          />
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={onBack} className="gap-2">
          <ArrowLeft className="w-4 h-4" /> Back
        </Button>
        <Button onClick={handleSubmit} className="gap-2">
          Get My Quote <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default StepDetails;
