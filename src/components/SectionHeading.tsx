import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: React.ReactNode;
  centered?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = true }: SectionHeadingProps) => (
  <div className={`mb-10 ${centered ? "text-center" : ""}`}>
    <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-3">{title}</h2>
    <div className="w-24 h-0.5 gradient-saffron mx-auto mb-4 rounded-full" />
    {subtitle && <div className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">{subtitle}</div>}
  </div>
);

export default SectionHeading;
