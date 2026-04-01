import { useNavigate } from "react-router";
import { Shield, FileText, Sparkles } from "lucide-react";
import { MobileFrame } from "../components/MobileFrame";
import { useEffect } from "react";

export function Logo() {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-navigate to onboarding after 2 seconds
    const timer = setTimeout(() => {
      navigate("/onboarding-1");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <MobileFrame showStatusBar={false}>
      <div className="h-full flex flex-col items-center justify-center bg-gradient-to-b from-white to-secondary px-5">
        {/* App Icon */}
        <div className="relative mb-8">
          {/* Icon Background */}
          <div className="w-32 h-32 bg-primary rounded-3xl shadow-xl flex items-center justify-center relative overflow-hidden">
            {/* Accent gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent"></div>
            
            {/* Icon content */}
            <div className="relative z-10 flex items-center justify-center">
              <Shield className="w-16 h-16 text-white" strokeWidth={1.5} />
              <FileText className="w-8 h-8 text-accent absolute bottom-2 right-2" strokeWidth={2} />
              <Sparkles className="w-6 h-6 text-accent absolute top-2 left-2" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Logo Text */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-2">Sanitizer</h1>
          <p className="text-sm text-muted-foreground italic">Anonimizacja bez kompromisów</p>
        </div>

        {/* Loading indicator */}
        <div className="mt-12 flex gap-2">
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </MobileFrame>
  );
}
