import { useNavigate } from "react-router";
import { FileText, Brain, ShieldCheck } from "lucide-react";
import { MobileFrame } from "../components/MobileFrame";
import { Button } from "../components/Button";

export function OnboardingSlide2() {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <FileText className="w-12 h-12 text-accent" strokeWidth={1.5} />,
      title: "Wybierz PDF z telefonu",
      description: "Zaimportuj dokument z galerii lub aplikacji plików"
    },
    {
      icon: <Brain className="w-12 h-12 text-accent" strokeWidth={1.5} />,
      title: "AI wykryje dane wrażliwe",
      description: "Automatyczne rozpoznawanie PESEL, nazwisk, adresów"
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-accent" strokeWidth={1.5} />,
      title: "Dane zostaną trwale usunięte",
      description: "Nieodwracalna anonimizacja zgodna z RODO"
    }
  ];

  return (
    <MobileFrame>
      <div className="h-full flex flex-col px-5 pt-16 pb-8">
        {/* Content */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primary mb-3">
            Trzy kroki do bezpieczeństwa
          </h1>
        </div>

        {/* Steps */}
        <div className="flex-1 flex flex-col justify-center gap-10 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                {step.icon}
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-base font-semibold text-primary mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-2 h-2 bg-muted rounded-full"></div>
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <div className="w-2 h-2 bg-muted rounded-full"></div>
        </div>

        {/* CTA */}
        <Button fullWidth onClick={() => navigate("/onboarding-3")}>
          Dalej
        </Button>
      </div>
    </MobileFrame>
  );
}
