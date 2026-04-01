import { useNavigate } from "react-router";
import { ArrowLeft, Share2, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { MobileFrame } from "../components/MobileFrame";
import { Button } from "../components/Button";

export function RedactedPreview() {
  const navigate = useNavigate();

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
          <h2 className="text-base font-semibold text-primary">Podgląd</h2>
          <button className="w-10 h-10 flex items-center justify-center hover:bg-secondary rounded-lg transition-colors">
            <Share2 className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </button>
        </div>

        {/* Document preview */}
        <div className="flex-1 overflow-auto bg-secondary p-5">
          <div className="w-full h-[600px] bg-white rounded-xl shadow-lg border border-muted p-6">
            {/* Document content with black redaction boxes */}
            <div className="space-y-3">
              <div className="h-3 bg-muted rounded w-3/4"></div>
              <div className="h-3 bg-muted rounded w-5/6"></div>
              
              {/* Redacted PESEL */}
              <div className="relative my-4">
                <div className="h-3 bg-black rounded w-2/5 relative">
                  <span className="absolute left-2 top-0 text-[9px] font-medium text-white">
                    [PESEL]
                  </span>
                </div>
              </div>

              <div className="h-3 bg-muted rounded w-4/6"></div>
              
              {/* Redacted name */}
              <div className="relative my-4">
                <div className="h-3 bg-black rounded w-3/5 relative">
                  <span className="absolute left-2 top-0 text-[9px] font-medium text-white">
                    [IMIĘ I NAZWISKO]
                  </span>
                </div>
              </div>

              <div className="h-3 bg-muted rounded w-5/6"></div>
              <div className="h-3 bg-muted rounded w-2/3"></div>

              {/* Redacted address */}
              <div className="relative my-4">
                <div className="h-3 bg-black rounded w-4/5 relative">
                  <span className="absolute left-2 top-0 text-[9px] font-medium text-white">
                    [ADRES]
                  </span>
                </div>
              </div>

              <div className="h-3 bg-muted rounded w-4/6"></div>

              {/* Redacted phone */}
              <div className="relative my-4">
                <div className="h-3 bg-black rounded w-2/5 relative">
                  <span className="absolute left-2 top-0 text-[9px] font-medium text-white">
                    [TELEFON]
                  </span>
                </div>
              </div>

              <div className="h-3 bg-muted rounded w-3/4"></div>

              {/* Redacted face/image */}
              <div className="relative my-4">
                <div className="w-16 h-16 bg-black rounded-lg relative flex items-center justify-center">
                  <span className="text-[9px] font-medium text-white">
                    [TWARZ]
                  </span>
                </div>
              </div>

              <div className="h-3 bg-muted rounded w-5/6"></div>
              <div className="h-3 bg-muted rounded w-4/6"></div>
            </div>
          </div>
        </div>

        {/* Bottom floating bar */}
        <div className="px-5 py-4 bg-white border-t border-muted">
          <div className="flex items-center gap-3 mb-4">
            <Button 
              color="accent"
              icon={<Share2 className="w-5 h-5" strokeWidth={2} />}
              className="flex-1"
            >
              Udostępnij
            </Button>
            <Button 
              variant="outlined"
              color="accent"
              icon={<Download className="w-5 h-5" strokeWidth={2} />}
              className="flex-1"
            >
              Zapisz
            </Button>
          </div>

          {/* Page navigation */}
          <div className="flex items-center justify-center gap-4">
            <button className="w-8 h-8 flex items-center justify-center hover:bg-secondary rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5 text-muted-foreground" strokeWidth={2} />
            </button>
            <span className="text-sm font-medium text-primary">Strona 1/3</span>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-secondary rounded-lg transition-colors">
              <ChevronRight className="w-5 h-5 text-primary" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
