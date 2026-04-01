# Sanitizer - Nawigacja po ekranach

## Przepływ użytkownika (User Flow)

### 1. Pierwszy start aplikacji
**/** → Logo z auto-przekierowaniem (2s) → **/onboarding-1**

### 2. Onboarding (3 slidy)
- **/onboarding-1** - Powitanie ("Chroń dane jednym kliknięciem")
- **/onboarding-2** - Jak to działa (3 kroki)
- **/onboarding-3** - Prywatność → przycisk "Rozpocznij" → **/home**

### 3. Główny przepływ
- **/home** - Ekran główny z importem plików i ostatnimi dokumentami
  - Kliknięcie "Wybierz plik" → **/processing**

### 4. Proces anonimizacji
- **/processing** - Analiza dokumentu (auto-przekierowanie 3s) → **/detection-preview**
- **/detection-preview** - Podgląd wykrytych danych
  - Przycisk "Anonimizuj dokument" → modal potwierdzenia → **/redacting**
- **/redacting** - Proces anonimizacji (auto-przekierowanie 3s) → **/success**
- **/success** - Sukces!
  - "Otwórz podgląd" → **/redacted-preview**
  - "Anonimizuj kolejny dokument" → **/home**

### 5. Dodatkowe ekrany
- **/redacted-preview** - Pełny podgląd zanonimizowanego dokumentu
- **/settings** - Ustawienia aplikacji
- **/error-corrupted** - Błąd: uszkodzony plik
- **/empty-result** - Brak wykryć AI

## Nawigacja deweloperska

Użyj pływającego przycisku menu (prawy dolny róg) aby szybko przełączać się między wszystkimi ekranami.

## Kluczowe features UI

### Komponenty wielokrotnego użytku
- `<MobileFrame>` - ramka 390x844px z paskiem statusu
- `<Button>` - uniwersalny przycisk (filled/outlined/text, różne kolory)

### Kolory brandingowe
- Primary (granat): `#1A2B4A` - `bg-primary` / `text-primary`
- Accent (teal): `#00B4A6` - `bg-accent` / `text-accent`
- Alert (czerwony): `#E63946` - `bg-destructive` / `text-destructive`
- Success (zielony): `#2EC4B6` - `bg-success` / `text-success`
- Secondary bg: `#F5F6F8` - `bg-secondary`

### Stan aplikacji
- Wszystkie ekrany działają offline (symulacja)
- Animacje: auto-navigation, progress bars, pulse effects
- Modal: Radix UI Dialog dla potwierdzenia redakcji
- Formularze: Radix UI Switch i Slider w ustawieniach

## Struktura plików
```
/src/app/
├── App.tsx                    # Router provider
├── routes.tsx                 # Konfiguracja routingu
├── components/
│   ├── MobileFrame.tsx       # Wrapper dla mobile UI
│   ├── Button.tsx            # Komponent przycisku
│   └── DevNavigation.tsx     # Menu nawigacyjne
└── screens/
    ├── Logo.tsx
    ├── OnboardingSlide1.tsx
    ├── OnboardingSlide2.tsx
    ├── OnboardingSlide3.tsx
    ├── Home.tsx
    ├── Processing.tsx
    ├── DetectionPreview.tsx
    ├── Redacting.tsx
    ├── Success.tsx
    ├── RedactedPreview.tsx
    ├── Settings.tsx
    ├── ErrorCorrupted.tsx
    └── EmptyResult.tsx
```
