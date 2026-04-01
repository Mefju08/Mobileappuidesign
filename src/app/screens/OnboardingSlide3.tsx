import { useNavigate } from "react-router";
import { Smartphone, Shield, CloudOff } from "lucide-react";
import { MobileFrame } from "../components/MobileFrame";
import { Button } from "../components/Button";

export function OnboardingSlide3() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="h-full flex flex-col px-5 pt-16 pb-8">
        {/* Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-64 h-64">
            {/* Phone */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-60 bg-primary rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="w-36 h-56 bg-white/10 rounded-2xl"></div>
                
                {/* Shield badge */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-success to-accent rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="w-10 h-10 text-white" strokeWidth={2} fill="white" />
                </div>
              </div>
            </div>

            {/* Crossed cloud */}
            <div className="absolute bottom-8 -left-4 w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center">
              <CloudOff className="w-10 h-10 text-destructive" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-3">
            Twoje dane nigdy nie opuszczą telefonu
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Całe przetwarzanie odbywa się lokalnie na Twoim urządzeniu. Zgodność z RODO.
          </p>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-2 h-2 bg-muted rounded-full"></div>
          <div className="w-2 h-2 bg-muted rounded-full"></div>
          <div className="w-2 h-2 bg-accent rounded-full"></div>
        </div>

        {/* CTA */}
        <Button fullWidth onClick={() => navigate("/home")}>
          Rozpocznij
        </Button>
      </div>
    </MobileFrame>
  );
}
