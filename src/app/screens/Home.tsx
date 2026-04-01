import { useNavigate } from "react-router";
import { Settings, Upload, FileText, CheckCircle, Shield } from "lucide-react";
import { MobileFrame } from "../components/MobileFrame";
import { Button } from "../components/Button";

export function Home() {
  const navigate = useNavigate();

  const recentFiles = [
    { name: "Umowa_najmu_2024.pdf", date: "31 marca 2026", status: "Zanonimizowany" },
    { name: "CV_Jan_Kowalski.pdf", date: "28 marca 2026", status: "Zanonimizowany" },
    { name: "Deklaracja_podatkowa.pdf", date: "25 marca 2026", status: "Zanonimizowany" }
  ];

  return (
    <MobileFrame>
      <div className="h-full flex flex-col bg-white">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 pt-14 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-accent" strokeWidth={2} />
            </div>
            <span className="text-lg font-bold text-primary">Sanitizer</span>
          </div>
          <button 
            onClick={() => navigate("/settings")}
            className="w-10 h-10 flex items-center justify-center hover:bg-secondary rounded-lg transition-colors"
          >
            <Settings className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 flex flex-col px-5 pt-8">
          {/* Import area */}
          <div className="mb-8">
            <div 
              onClick={() => navigate("/processing")}
              className="border-2 border-dashed border-primary/30 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[200px] hover:border-accent hover:bg-accent/5 transition-all cursor-pointer"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Upload className="w-8 h-8 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Wybierz plik PDF
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                lub udostępnij dokument z innej aplikacji
              </p>
            </div>

            <div className="mt-4">
              <Button 
                fullWidth 
                variant="outlined" 
                onClick={() => navigate("/processing")}
              >
                Wybierz z plików
              </Button>
            </div>
          </div>

          {/* Recent documents */}
          <div className="flex-1">
            <h3 className="text-base font-semibold text-primary mb-4">
              Ostatnie dokumenty
            </h3>
            
            <div className="space-y-3">
              {recentFiles.map((file, index) => (
                <div 
                  key={index}
                  onClick={() => navigate("/redacted-preview")}
                  className="bg-secondary rounded-xl p-4 flex items-start gap-3 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-destructive" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-primary truncate mb-1">
                      {file.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {file.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-success text-xs font-medium flex-shrink-0">
                    <CheckCircle className="w-4 h-4" strokeWidth={2} />
                    <span className="hidden sm:inline">{file.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer info */}
          <div className="py-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Shield className="w-4 h-4" strokeWidth={1.5} />
            <span>Przetwarzanie 100% lokalne • Zgodne z RODO</span>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
