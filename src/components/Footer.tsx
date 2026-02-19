export default function Footer() {
  return (
    <footer className="border-t border-black/5">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-8 text-sm text-black/60">
        <p>© {new Date().getFullYear()} Georgia</p>
        <p>Built with Next.js + TypeScript</p>
      </div>
    </footer>
  );
}
