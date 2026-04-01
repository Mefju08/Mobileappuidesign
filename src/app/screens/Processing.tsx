import { useNavigate } from "react-router";
import { CheckCircle, Circle } from "lucide-react";
import { MobileFrame } from "../components/MobileFrame";
import { Button } from "../components/Button";
import { useEffect } from "react";

export function Processing() {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-navigate to detection preview after 3 seconds
    const timer = setTimeout(() => {
      navigate("/detection-preview");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  const steps = [
    { label: "Rozpoznawanie tekstu (OCR)", status: "completed" },
    { label: "Wykrywanie danych wrażliwych (AI)", status: "active" },
    { label: "Analiza elementów graficznych", status: "pending" }
  ];

  return (
    <MobileFrame>
      <div className="h-full flex flex-col bg-white px-5 pt-16 pb-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary mb-2">
            Analizuję dokument...
          </h1>
        </div>

        {/* Document preview with scan line */}
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
              <div className="space-y-2 mb-4">
                <div className="h-3 bg-destructive/30 rounded w-3/6"></div>
                <div className="h-3 bg-muted rounded"></div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="h-3 bg-muted rounded w-5/6"></div>
                <div className="h-3 bg-accent/30 rounded w-4/6"></div>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-muted rounded"></div>
                <div className="h-3 bg-muted rounded w-3/6"></div>
              </div>
            </div>

            {/* Animated scan line */}
            <div className="absolute left-0 right-0 top-[40%] h-1 bg-gradient-to-r from-transparent via-accent to-transparent shadow-lg shadow-accent/50 animate-pulse">
              <div className="absolute inset-0 bg-accent blur-md opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="bg-muted rounded-full h-2 mb-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full transition-all duration-500"
              style={{ width: "67%" }}
            ></div>
          </div>
          <div className="text-center text-sm font-semibold text-accent">67%</div>
        </div>

        {/* Status steps */}
        <div className="space-y-4 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0">
                {step.status === "completed" && (
                  <CheckCircle className="w-5 h-5 text-success" strokeWidth={2} />
                )}
                {step.status === "active" && (
                  <div className="w-5 h-5 bg-accent rounded-full animate-pulse"></div>
                )}
                {step.status === "pending" && (
                  <Circle className="w-5 h-5 text-muted" strokeWidth={2} />
                )}
              </div>
              <span 
                className={`text-sm ${
                  step.status === "completed" 
                    ? "text-success font-medium" 
                    : step.status === "active"
                    ? "text-accent font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>

        {/* Cancel button */}
        <Button variant="text" color="secondary" fullWidth>
          Anuluj
        </Button>
      </div>
    </MobileFrame>
  );
}
