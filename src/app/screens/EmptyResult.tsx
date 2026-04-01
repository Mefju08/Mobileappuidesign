import { useNavigate } from "react-router";
import { FileSearch, HelpCircle } from "lucide-react";
import { MobileFrame } from "../components/MobileFrame";
import { Button } from "../components/Button";

export function EmptyResult() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="h-full flex flex-col bg-white px-5 pt-16 pb-8">
        {/* Icon */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mb-6">
            <FileSearch className="w-16 h-16 text-muted-foreground" strokeWidth={1.5} />
          </div>

          <h1 className="text-2xl font-bold text-primary mb-3 text-center">
            Nie wykryto danych wrażliwych
          </h1>
          
          <p className="text-sm text-muted-foreground text-center leading-relaxed max-w-sm">
            AI nie znalazł danych do anonimizacji w tym dokumencie.
          </p>
        </div>

        {/* Action buttons */}
        <div className="space-y-3 mb-6">
          <Button fullWidth>
            Zaznacz ręcznie
          </Button>
          
          <Button fullWidth variant="outlined" onClick={() => navigate("/home")}>
            Wybierz inny plik
          </Button>
        </div>

        {/* Help info */}
        <div className="flex items-start gap-2 bg-accent/5 rounded-lg p-4 border border-accent/20">
          <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={1.5} />
          <p className="text-xs text-primary leading-relaxed">
            Możesz ręcznie zaznaczyć obszary do anonimizacji, jeśli AI pominął jakieś dane wrażliwe.
          </p>
        </div>
      </div>
    </MobileFrame>
  );
}
