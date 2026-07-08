import { Section } from "./Section";
import { GraduationCap, Award } from "lucide-react";

const education = [
  { school: "SLIIT", degree: "BSc (Hons) Information Technology", period: "2022 – Present" },
  { school: "ESOFT Metro Campus", degree: "Diploma in Information Technology", period: "Completed" },
];

const certs = [
  {
    name: "Introduction to Azure Virtual Machines",
    issuer: "Microsoft",
    year: "2025",
    image: "/images/certificate-azure.png",
  },
  {
    name: "AWS SimuLearn: Computing Solutions",
    issuer: "AWS Training & Certification",
    year: "2025",
    image: "/images/certificate-aws.png",
  },
];

export function EducationCerts() {
  return (
    <Section id="education" eyebrow="Education & Certifications" title="Learning journey" className="bg-secondary/40">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" /> Education
          </h3>
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.school} className="p-5 rounded-2xl bg-card border border-border shadow-soft hover-lift">
                <div className="flex justify-between flex-wrap gap-2">
                  <h4 className="font-semibold">{e.school}</h4>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">{e.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{e.degree}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" /> Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {certs.map((c) => (
              <div key={c.name} className="rounded-2xl bg-card border border-border shadow-soft hover-lift relative overflow-hidden">
                <img src={c.image} alt={c.name} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <Award className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">{c.year}</span>
                  </div>
                  <h4 className="font-semibold mt-3 text-sm leading-snug">{c.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{c.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
