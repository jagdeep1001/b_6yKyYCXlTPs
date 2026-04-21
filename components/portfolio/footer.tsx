export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-foreground/50">
          Jagdeep Kaur -- Senior AI/ML Engineer
        </p>
        <p className="text-sm text-foreground/40">
          {new Date().getFullYear()} -- Built with passion for AI innovation
        </p>
      </div>
    </footer>
  )
}
