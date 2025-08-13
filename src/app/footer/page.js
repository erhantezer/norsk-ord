export default function Footer() {
  // Sabit yükseklik + iOS safe-area desteği
  const height = "56px";
  const safe = "env(safe-area-inset-bottom)";

  return (
    <footer
      className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white/90 backdrop-blur-md
                 text-sm text-zinc-600 dark:bg-zinc-900/80 dark:border-zinc-800 dark:text-zinc-300
                 flex items-center justify-center px-4"
      style={{
        height: `calc(${height} + ${safe})`,
        paddingBottom: safe, // iOS alt çentik
      }}
      role="contentinfo"
      aria-label="Sidefot"
    >
      Dette prosjektet er laget av <span className="mx-1 font-semibold">Erhan TEZER</span>.
    </footer>
  );
}
