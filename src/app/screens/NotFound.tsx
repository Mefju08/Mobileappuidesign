import { useNavigate } from "react-router";
import { Home } from "lucide-react";
import { MobileFrame } from "../components/MobileFrame";
import { Button } from "../components/Button";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="h-full flex flex-col items-center justify-center bg-white px-5">
        <div className="text-8xl font-bold text-muted mb-4">404</div>
        <h1 className="text-2xl font-bold text-primary mb-2 text-center">
          Strona nie znaleziona
        </h1>
        <p className="text-sm text-muted-foreground text-center mb-8">
          Podana strona nie istnieje
        </p>
        <Button 
          icon={<Home className="w-5 h-5" strokeWidth={2} />}
          onClick={() => navigate("/home")}
        >
          Wróć do strony głównej
        </Button>
      </div>
    </MobileFrame>
  );
}
