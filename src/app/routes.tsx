import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { OnboardingSlide1 } from "./screens/OnboardingSlide1";
import { OnboardingSlide2 } from "./screens/OnboardingSlide2";
import { OnboardingSlide3 } from "./screens/OnboardingSlide3";
import { Home } from "./screens/Home";
import { Processing } from "./screens/Processing";
import { DetectionPreview } from "./screens/DetectionPreview";
import { Redacting } from "./screens/Redacting";
import { Success } from "./screens/Success";
import { RedactedPreview } from "./screens/RedactedPreview";
import { Settings } from "./screens/Settings";
import { ErrorCorrupted } from "./screens/ErrorCorrupted";
import { EmptyResult } from "./screens/EmptyResult";
import { Logo } from "./screens/Logo";
import { NotFound } from "./screens/NotFound";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Logo />,
      },
      {
        path: "/onboarding-1",
        element: <OnboardingSlide1 />,
      },
      {
        path: "/onboarding-2",
        element: <OnboardingSlide2 />,
      },
      {
        path: "/onboarding-3",
        element: <OnboardingSlide3 />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/processing",
        element: <Processing />,
      },
      {
        path: "/detection-preview",
        element: <DetectionPreview />,
      },
      {
        path: "/redacting",
        element: <Redacting />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/redacted-preview",
        element: <RedactedPreview />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/error-corrupted",
        element: <ErrorCorrupted />,
      },
      {
        path: "/empty-result",
        element: <EmptyResult />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);