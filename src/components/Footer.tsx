const Footer = () => {
  return (
    <footer className="bg-foreground py-4 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-2">
        <p className="text-sm text-primary-foreground/60">
          WebApp Powered by{" "}
          <a
            href="https://rgvwebsitedesign.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors underline"
          >
            Rgv Web Design LLC
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
