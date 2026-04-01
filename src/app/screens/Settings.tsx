import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { MobileFrame } from "../components/MobileFrame";
import * as Switch from "@radix-ui/react-switch";
import * as Slider from "@radix-ui/react-slider";

export function Settings() {
  const navigate = useNavigate();
  const [redactionColor, setRedactionColor] = useState("black");
  const [showLabels, setShowLabels] = useState(true);
  const [safetyMargin, setSafetyMargin] = useState(2);
  const [anonymousStats, setAnonymousStats] = useState(false);

  const [detectionToggles, setDetectionToggles] = useState({
    pesel: true,
    nip: true,
    regon: true,
    idCard: true,
    names: true,
    addresses: true,
    phones: true,
    emails: true,
    iban: true,
    faces: true,
    signatures: true,
    stamps: true
  });

  const toggleDetection = (key: keyof typeof detectionToggles) => {
    setDetectionToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <MobileFrame>
      <div className="h-full flex flex-col bg-white">
        {/* Top bar */}
        <div className="flex items-center px-5 pt-14 pb-4 border-b border-muted">
          <button 
            onClick={() => navigate("/home")}
            className="w-10 h-10 flex items-center justify-center hover:bg-secondary rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </button>
          <h2 className="text-base font-semibold text-primary ml-3">Ustawienia</h2>
        </div>

        {/* Settings content */}
        <div className="flex-1 overflow-auto">
          {/* Redaction section */}
          <div className="px-5 py-6 border-b border-muted">
            <h3 className="text-sm font-semibold text-primary mb-4">Redakcja</h3>
            
            {/* Color selector */}
            <div className="mb-6">
              <label className="text-sm text-muted-foreground mb-3 block">
                Kolor prostokąta
              </label>
              <div className="flex gap-3">
                {["black", "gray", "white", "navy"].map((color) => (
                  <button
                    key={color}
                    onClick={() => setRedactionColor(color)}
                    className={`w-12 h-12 rounded-lg border-2 transition-all ${
                      redactionColor === color ? "border-accent scale-110" : "border-muted"
                    }`}
                    style={{
                      backgroundColor: 
                        color === "black" ? "#000000" :
                        color === "gray" ? "#6B7280" :
                        color === "white" ? "#FFFFFF" :
                        "#1A2B4A"
                    }}
                  >
                    {color === "white" && <div className="w-full h-full border border-muted rounded-lg"></div>}
                  </button>
                ))}
              </div>
            </div>

            {/* Show labels toggle */}
            <div className="flex items-center justify-between mb-6">
              <label className="text-sm text-muted-foreground">
                Pokaż etykiety kategorii
              </label>
              <Switch.Root
                checked={showLabels}
                onCheckedChange={setShowLabels}
                className="w-11 h-6 bg-switch-background rounded-full relative transition-colors data-[state=checked]:bg-accent"
              >
                <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform translate-x-0.5 data-[state=checked]:translate-x-[22px] shadow-md" />
              </Switch.Root>
            </div>

            {/* Safety margin slider */}
            <div className="mb-2">
              <label className="text-sm text-muted-foreground mb-3 block">
                Margines bezpieczeństwa: {safetyMargin}px
              </label>
              <Slider.Root
                value={[safetyMargin]}
                onValueChange={(value) => setSafetyMargin(value[0])}
                min={1}
                max={5}
                step={1}
                className="relative flex items-center w-full h-5"
              >
                <Slider.Track className="bg-muted relative grow h-1 rounded-full">
                  <Slider.Range className="absolute bg-accent h-full rounded-full" />
                </Slider.Track>
                <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-accent rounded-full shadow-md hover:scale-110 transition-transform" />
              </Slider.Root>
            </div>
          </div>

          {/* Detection section */}
          <div className="px-5 py-6 border-b border-muted">
            <h3 className="text-sm font-semibold text-primary mb-4">Detekcja</h3>
            <p className="text-xs text-muted-foreground mb-4">Kategorie do wykrywania:</p>
            
            <div className="space-y-4">
              {[
                { key: "pesel", label: "PESEL" },
                { key: "nip", label: "NIP" },
                { key: "regon", label: "REGON" },
                { key: "idCard", label: "Dowód osobisty" },
                { key: "names", label: "Imiona i nazwiska" },
                { key: "addresses", label: "Adresy" },
                { key: "phones", label: "Telefony" },
                { key: "emails", label: "E-maile" },
                { key: "iban", label: "IBAN" },
                { key: "faces", label: "Twarze" },
                { key: "signatures", label: "Podpisy" },
                { key: "stamps", label: "Pieczątki" }
              ].map((item) => (
                <div key={item.key} className="flex items-center justify-between">
                  <label className="text-sm text-primary">
                    {item.label}
                  </label>
                  <Switch.Root
                    checked={detectionToggles[item.key as keyof typeof detectionToggles]}
                    onCheckedChange={() => toggleDetection(item.key as keyof typeof detectionToggles)}
                    className="w-11 h-6 bg-switch-background rounded-full relative transition-colors data-[state=checked]:bg-accent"
                  >
                    <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform translate-x-0.5 data-[state=checked]:translate-x-[22px] shadow-md" />
                  </Switch.Root>
                </div>
              ))}
            </div>
          </div>

          {/* Application section */}
          <div className="px-5 py-6">
            <h3 className="text-sm font-semibold text-primary mb-4">Aplikacja</h3>
            
            <div className="space-y-4">
              {/* Anonymous stats */}
              <div className="flex items-center justify-between">
                <label className="text-sm text-muted-foreground">
                  Anonimowe statystyki użycia
                </label>
                <Switch.Root
                  checked={anonymousStats}
                  onCheckedChange={setAnonymousStats}
                  className="w-11 h-6 bg-switch-background rounded-full relative transition-colors data-[state=checked]:bg-accent"
                >
                  <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform translate-x-0.5 data-[state=checked]:translate-x-[22px] shadow-md" />
                </Switch.Root>
              </div>

              {/* Version */}
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-muted-foreground">Wersja aplikacji</span>
                <span className="text-sm font-medium text-primary">1.0.0 (MVP)</span>
              </div>

              {/* Check updates button */}
              <button className="w-full h-12 bg-secondary text-primary rounded-lg hover:bg-muted transition-colors text-sm font-medium">
                Sprawdź aktualizacje
              </button>
            </div>

            {/* Footer links */}
            <div className="mt-8 pt-6 border-t border-muted flex justify-center gap-6">
              <button className="text-xs text-accent hover:underline">
                Polityka prywatności
              </button>
              <button className="text-xs text-accent hover:underline">
                Regulamin
              </button>
            </div>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
