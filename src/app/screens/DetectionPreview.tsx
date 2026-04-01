import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Filter, AlertTriangle } from "lucide-react";
import { MobileFrame } from "../components/MobileFrame";
import { Button } from "../components/Button";
import * as Dialog from "@radix-ui/react-dialog";

export function DetectionPreview() {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const detectionCategories = [
    { label: "PESEL", count: 2, color: "bg-red-500", active: true },
    { label: "Imiona", count: 3, color: "bg-blue-500", active: true },
    { label: "Adresy", count: 1, color: "bg-purple-500", active: true },
    { label: "Telefony", count: 2, color: "bg-orange-500", active: true },
    { label: "Twarze", count: 1, color: "bg-green-500", active: true }
  ];

  const totalDetections = detectionCategories.reduce((sum, cat) => sum + cat.count, 0);

  return (
    <MobileFrame>
      <div className="h-full flex flex-col bg-white">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 pt-14 pb-4 border-b border-muted">
          <button 
            onClick={() => navigate("/home")}
            className="w-10 h-10 flex items-center justify-center hover:bg-secondary rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </button>
          <h2 className="text-base font-semibold text-primary">Wyniki analizy</h2>
          <button className="w-10 h-10 flex items-center justify-center hover:bg-secondary rounded-lg transition-colors">
            <Filter className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </button>
        </div>

        {/* Document preview */}
        <div className="flex-1 overflow-auto px-5 pt-6">
          <div className="relative w-full h-[400px] bg-white rounded-xl shadow-lg border border-muted p-6 mb-6">
            {/* Document content with bounding boxes */}
            <div className="space-y-3">
              <div className="h-3 bg-muted rounded w-3/4"></div>
              <div className="h-3 bg-muted rounded w-5/6"></div>
              
              {/* PESEL detection */}
              <div className="relative">
                <div className="absolute -left-1 -top-1 px-2 py-0.5 bg-red-500/20 border border-red-500 rounded">
                  <div className="h-3 w-24 bg-red-500/30 rounded"></div>
                </div>
                <span className="absolute -top-5 left-0 text-[10px] font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded">
                  [PESEL]
                </span>
              </div>

              <div className="h-3 bg-muted rounded w-4/6 mt-6"></div>
              
              {/* Name detection */}
              <div className="relative mt-2">
                <div className="absolute -left-1 -top-1 px-2 py-0.5 bg-blue-500/20 border border-blue-500 rounded">
                  <div className="h-3 w-32 bg-blue-500/30 rounded"></div>
                </div>
                <span className="absolute -top-5 left-0 text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                  [IMIĘ I NAZWISKO]
                </span>
              </div>

              <div className="h-3 bg-muted rounded w-5/6 mt-8"></div>
              <div className="h-3 bg-muted rounded w-2/3"></div>

              {/* Address detection */}
              <div className="relative mt-2">
                <div className="absolute -left-1 -top-1 px-2 py-0.5 bg-purple-500/20 border border-purple-500 rounded">
                  <div className="h-3 w-40 bg-purple-500/30 rounded"></div>
                </div>
                <span className="absolute -top-5 left-0 text-[10px] font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                  [ADRES]
                </span>
              </div>

              <div className="h-3 bg-muted rounded w-4/6 mt-8"></div>

              {/* Phone detection */}
              <div className="relative mt-2">
                <div className="absolute -left-1 -top-1 px-2 py-0.5 bg-orange-500/20 border border-orange-500 rounded">
                  <div className="h-3 w-28 bg-orange-500/30 rounded"></div>
                </div>
                <span className="absolute -top-5 left-0 text-[10px] font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                  [TELEFON]
                </span>
              </div>

              <div className="h-3 bg-muted rounded w-3/4 mt-8"></div>

              {/* Face detection */}
              <div className="relative mt-4">
                <div className="w-16 h-16 bg-green-500/20 border-2 border-green-500 rounded-lg"></div>
                <span className="absolute -top-5 left-0 text-[10px] font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">
                  [TWARZ]
                </span>
              </div>
            </div>
          </div>

          {/* Detection chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {detectionCategories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  category.active 
                    ? `${category.color} text-white shadow-md` 
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="px-5 pb-8 pt-4 border-t border-muted bg-white">
          <Button 
            fullWidth 
            onClick={() => setShowConfirmation(true)}
          >
            Anonimizuj dokument
          </Button>
          <p className="text-xs text-center text-muted-foreground mt-2 flex items-center justify-center gap-1">
            <AlertTriangle className="w-3 h-3" strokeWidth={2} />
            Operacja jest nieodwracalna
          </p>
        </div>

        {/* Confirmation Modal */}
        <Dialog.Root open={showConfirmation} onOpenChange={setShowConfirmation}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
            <Dialog.Content className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[390px] bg-white rounded-t-3xl p-6 z-50 animate-slide-up">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-destructive" strokeWidth={2} />
                </div>
                
                <Dialog.Title className="text-xl font-bold text-primary mb-2">
                  Potwierdź anonimizację
                </Dialog.Title>
                
                <Dialog.Description className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Wykryte dane wrażliwe zostaną trwale usunięte z dokumentu. Tej operacji nie można cofnąć.
                </Dialog.Description>

                <div className="bg-secondary rounded-lg p-3 mb-6 w-full">
                  <p className="text-sm font-semibold text-primary">
                    Elementów do redakcji: {totalDetections}
                  </p>
                </div>

                <div className="flex gap-3 w-full">
                  <Button 
                    variant="outlined" 
                    color="secondary" 
                    onClick={() => setShowConfirmation(false)}
                    className="flex-1"
                  >
                    Anuluj
                  </Button>
                  <Button 
                    color="accent"
                    onClick={() => navigate("/redacting")}
                    className="flex-1"
                  >
                    Anonimizuj
                  </Button>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </MobileFrame>
  );
}
