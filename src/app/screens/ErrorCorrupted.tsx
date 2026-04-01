import { useNavigate } from "react-router";
import { FileX, AlertCircle } from "lucide-react";
import { MobileFrame } from "../components/MobileFrame";
import { Button } from "../components/Button";

export function ErrorCorrupted() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="h-full flex flex-col bg-white px-5 pt-16 pb-8">
        {/* Error icon */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-24 h-24 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
            <FileX className="w-16 h-16 text-destructive" strokeWidth={1.5} />
          </div>

          <h1 className="text-2xl font-bold text-primary mb-3 text-center">
            Nie udało się otworzyć pliku
          </h1>
          
          <p className="text-sm text-muted-foreground text-center leading-relaxed max-w-sm">
            Plik może być uszkodzony lub zaszyfrowany hasłem. Spróbuj z innym plikiem.
          </p>
        </div>

        {/* Action buttons */}
        <div className="space-y-3">
          <Button fullWidth onClick={() => navigate("/home")}>
            Wybierz inny plik
          </Button>
          
          <button 
            onClick={() => navigate("/home")}
            className="w-full text-sm text-accent font-medium hover:underline py-2"
          >
            Wróć do ekranu głównego
          </button>
        </div>

        {/* Help info */}
        <div className="mt-6 flex items-start gap-2 bg-secondary rounded-lg p-4">
          <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" strokeWidth={1.5} />
          <p className="text-xs text-muted-foreground leading-relaxed">
            Sanitizer obsługuje tylko niezaszyfrowane pliki PDF. Jeśli dokument jest chroniony hasłem, najpierw usuń zabezpieczenie.
          </p>
        </div>
      </div>
    </MobileFrame>
  );
}
