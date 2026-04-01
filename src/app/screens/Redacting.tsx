import { useNavigate } from "react-router";
import { Lock } from "lucide-react";
import { MobileFrame } from "../components/MobileFrame";
import { useEffect } from "react";

export function Redacting() {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-navigate to success after 3 seconds
    const timer = setTimeout(() => {
      navigate("/success");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <MobileFrame>
      <div className="h-full flex flex-col bg-white px-5 pt-16 pb-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary mb-2">
            Trwa anonimizacja...
          </h1>
        </div>

        {/* Document preview with redaction rectangles */}
        <div className="flex-1 flex items-center justify-center mb-8">
          <div className="relative w-64 h-80">
            {/* Document mockup */}
            <div className="w-full h-full bg-white rounded-2xl shadow-2xl border-2 border-muted p-6 overflow-hidden">
              {/* Document content lines */}
              <div className="space-y-2 mb-4">
                <div className="h-3 bg-muted rounded"></div>
                <div className="h-3 bg-muted rounded w-5/6"></div>
                <div className="h-3 bg-muted rounded w-4/6"></div>
              </div>
              
              {/* Redacted PESEL - animated */}
              <div className="mb-4">
                <div className="h-3 bg-black rounded w-3/6 animate-pulse"></div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="h-3 bg-muted rounded"></div>
              </div>
              
              {/* Redacted name - animated */}
              <div className="mb-4">
                <div className="h-3 bg-black rounded w-4/6 animate-pulse" style={{ animationDelay: "200ms" }}></div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="h-3 bg-muted rounded w-5/6"></div>
                <div className="h-3 bg-muted rounded w-4/6"></div>
              </div>
              
              {/* Redacted address - animated */}
              <div className="mb-4">
                <div className="h-3 bg-black rounded w-5/6 animate-pulse" style={{ animationDelay: "400ms" }}></div>
              </div>
              
              <div className="space-y-2">
                <div className="h-3 bg-muted rounded"></div>
                
                {/* Redacted phone - animated */}
                <div className="h-3 bg-black rounded w-3/6 animate-pulse" style={{ animationDelay: "600ms" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="bg-muted rounded-full h-2 mb-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full transition-all duration-500 animate-pulse"
              style={{ width: "44%" }}
            ></div>
          </div>
          <div className="text-center text-sm font-medium text-primary">
            Usuwanie danych... 4/9
          </div>
        </div>

        {/* Lock icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
            <Lock className="w-8 h-8 text-accent animate-pulse" strokeWidth={2} />
          </div>
        </div>

        {/* Info text */}
        <p className="text-center text-sm text-muted-foreground">
          Nie zamykaj aplikacji. Proces anonimizacji jest nieodwracalny.
        </p>
      </div>
    </MobileFrame>
  );
}
