import type { FenceStyle } from "@/pages/Index";

type Props = {
  styles: FenceStyle[];
  selected: string;
  onSelect: (id: string) => void;
};

const StepFenceStyle = ({ styles, onSelect }: Props) => {
  return (
    <div className="text-center">
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2">
        Step 1 of 4
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
        Choose Your Fence Style
      </h1>
      <p className="text-muted-foreground mb-10">
        Select a material to continue to the next step.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {styles.map((style) => (
          <button
            key={style.id}
            disabled={!style.available}
            onClick={() => style.available && onSelect(style.id)}
            className="group relative rounded-xl overflow-hidden aspect-[4/5] text-left transition-transform hover:scale-[1.02] disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <img
              src={style.image}
              alt={style.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

{!style.available && (<><div className="absolute inset-0 bg-black/40" /><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12"><span className="inline-block px-4 py-1.5 rounded-full bg-[#333333] text-white text-[10px] font-bold tracking-wider uppercase shadow-xl border border-white/10">COMING SOON</span></div></>)}
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-lg font-bold text-primary-foreground mb-1">{style.name}</h3>
              <p className="text-sm text-primary-foreground/70">{style.description}</p>
              {style.available && (
                <p className="mt-3 text-sm font-medium text-primary-foreground group-hover:underline">
                  Select Style →
                </p>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepFenceStyle;
