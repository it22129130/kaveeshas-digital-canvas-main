import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 animate-fade-up ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          {eyebrow && (
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          {description && <p className="mt-4 text-muted-foreground">{description}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
