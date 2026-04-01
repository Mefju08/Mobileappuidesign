import { useNavigate, useLocation } from "react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

export function DevNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const screens = [
    { path: "/", label: "Logo" },
    { path: "/onboarding-1", label: "Onboarding 1" },
    { path: "/onboarding-2", label: "Onboarding 2" },
    { path: "/onboarding-3", label: "Onboarding 3" },
    { path: "/home", label: "Home" },
    { path: "/processing", label: "Processing" },
    { path: "/detection-preview", label: "Detection Preview" },
    { path: "/redacting", label: "Redacting" },
    { path: "/success", label: "Success" },
    { path: "/redacted-preview", label: "Redacted Preview" },
    { path: "/settings", label: "Settings" },
    { path: "/error-corrupted", label: "Error - Corrupted" },
    { path: "/empty-result", label: "Empty Result" },
    { path: "/404", label: "Not Found" }
  ];

  return (
    <>
      {/* Floating menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-[100] w-14 h-14 bg-primary text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        title="Navigation Menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Menu overlay */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-[90]"
            onClick={() => setIsOpen(false)}
          ></div>
          
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[95] bg-white rounded-2xl shadow-2xl p-6 max-h-[80vh] overflow-auto w-[90%] max-w-md">
            <h3 className="text-lg font-bold text-primary mb-4">Screen Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              {screens.map((screen) => (
                <button
                  key={screen.path}
                  onClick={() => {
                    navigate(screen.path);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-3 text-sm rounded-lg transition-all ${
                    location.pathname === screen.path
                      ? "bg-accent text-white font-semibold"
                      : "bg-secondary text-primary hover:bg-muted"
                  }`}
                >
                  {screen.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}