import { useNavigate } from "react-router";
import { CheckCircle, Share2, Download, Eye, Plus } from "lucide-react";
import { MobileFrame } from "../components/MobileFrame";
import { Button } from "../components/Button";

export function Success() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="h-full flex flex-col bg-white px-5 pt-16 pb-8">
        {/* Success icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center">
            <CheckCircle className="w-16 h-16 text-success" strokeWidth={2} />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary mb-2">
            Dokument zanonimizowany!
          </h1>
          <p className="text-sm text-muted-foreground">
            Wszystkie dane wrażliwe zostały trwale usunięte.
          </p>
        </div>

        {/* Summary card */}
        <div className="bg-secondary rounded-2xl p-6 mb-8 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Nazwa pliku:</span>
            <span className="text-sm font-semibold text-primary">Umowa_SANITIZED.pdf</span>
          </div>
          <div className="h-px bg-muted"></div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Zredagowanych elementów:</span>
            <span className="text-sm font-semibold text-primary">9</span>
          </div>
          <div className="h-px bg-muted"></div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Czas przetwarzania:</span>
            <span className="text-sm font-semibold text-primary">3,2s</span>
          </div>
          <div className="h-px bg-muted"></div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Rozmiar pliku:</span>
            <span className="text-sm font-semibold text-primary">1,4 MB</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-3 mb-6">
          <Button 
            fullWidth 
            icon={<Share2 className="w-5 h-5" strokeWidth={2} />}
          >
            Udostępnij
          </Button>
          <Button 
            fullWidth 
            variant="outlined"
            icon={<Download className="w-5 h-5" strokeWidth={2} />}
          >
            Zapisz do plików
          </Button>
        </div>

        {/* Preview link */}
        <button 
          onClick={() => navigate("/redacted-preview")}
          className="text-sm text-accent font-medium hover:underline mb-6"
        >
          Otwórz podgląd
        </button>

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* New document button */}
        <Button 
          fullWidth
          variant="text"
          color="accent"
          icon={<Plus className="w-5 h-5" strokeWidth={2} />}
          onClick={() => navigate("/home")}
        >
          Anonimizuj kolejny dokument
        </Button>
      </div>
    </MobileFrame>
  );
}
