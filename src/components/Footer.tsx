const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mohith R. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
