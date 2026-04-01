import { ReactNode } from "react";

interface MobileFrameProps {
  children: ReactNode;
  showStatusBar?: boolean;
}

export function MobileFrame({ children, showStatusBar = true }: MobileFrameProps) {
  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-8">
      <div className="relative w-[390px] h-[844px] bg-white rounded-[40px] shadow-2xl overflow-hidden border-8 border-[#1A2B4A]">
        {/* Status Bar */}
        {showStatusBar && (
          <div className="absolute top-0 left-0 right-0 h-11 flex items-center justify-between px-6 text-xs z-50 bg-white/80 backdrop-blur-sm">
            <span className="font-semibold">9:41</span>
            <div className="flex items-center gap-1">
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                <rect x="0.5" y="0.5" width="3" height="11" rx="1" fill="currentColor" />
                <rect x="5" y="2.5" width="3" height="9" rx="1" fill="currentColor" />
                <rect x="9.5" y="4.5" width="3" height="7" rx="1" fill="currentColor" />
                <rect x="14" y="6.5" width="3" height="5" rx="1" fill="currentColor" />
              </svg>
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                <rect opacity="0.4" x="0.5" y="0.5" width="16" height="11" rx="2.5" stroke="currentColor" />
                <rect x="2" y="2" width="11" height="8" rx="1" fill="currentColor" />
              </svg>
            </div>
          </div>
        )}
        
        {/* Content */}
        <div className="h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}