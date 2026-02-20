import { Settings } from "lucide-react";
import logo from "@/assets/guerrero-logo.webp";

type Props = {
  onAdminClick: () => void;
};

const Header = ({ onAdminClick }: Props) => {
  return (
    <header className="bg-card border-b border-border">
      <div className="max-w-6xl mx-auto w-full px-4 flex items-center justify-between h-16">
        <a href="https://guerrerofences.com/" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Guerrero Fences" className="h-10 object-contain" />
        </a>
        <button
          onClick={onAdminClick}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors"
        >
          <Settings className="w-4 h-4" />
          Admin
        </button>
      </div>
    </header>
  );
};

export default Header;
