import { useNavigate } from "react-router";
import { Shield, FileText, Lock } from "lucide-react";
import { MobileFrame } from "../components/MobileFrame";
import { Button } from "../components/Button";

export function OnboardingSlide1() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="h-full flex flex-col px-5 pt-16 pb-8">
        {/* Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-64 h-64">
            {/* Document background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-56 bg-white rounded-2xl shadow-xl border-2 border-muted flex flex-col p-6">
                <div className="h-2 bg-muted rounded mb-2"></div>
                <div className="h-2 bg-muted rounded w-3/4 mb-4"></div>
                <div className="h-2 bg-muted rounded mb-2"></div>
                <div className="h-2 bg-muted rounded mb-2"></div>
                <div className="h-2 bg-muted rounded w-2/3"></div>
              </div>
            </div>
            
            {/* Shield overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 bg-gradient-to-br from-accent to-accent/80 rounded-full shadow-2xl flex items-center justify-center">
                <Shield className="w-16 h-16 text-white" strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-3">
            Chroń dane jednym kliknięciem
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Automatyczna anonimizacja dokumentów PDF z AI. Bez chmury, bez ryzyka.
          </p>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <div className="w-2 h-2 bg-muted rounded-full"></div>
          <div className="w-2 h-2 bg-muted rounded-full"></div>
        </div>

        {/* CTA */}
        <Button fullWidth onClick={() => navigate("/onboarding-2")}>
          Dalej
        </Button>
      </div>
    </MobileFrame>
  );
}
