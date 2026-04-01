Zaprojektuj kompletny UI mobilnej aplikacji "Sanitizer" — narzędzia Legal-Tech do automatycznej, nieodwracalnej anonimizacji danych wrażliwych w dokumentach PDF. Aplikacja działa w 100% offline, na urządzeniu użytkownika, z silnikiem AI wykrywającym dane osobowe.

STYL WIZUALNY:
- Minimalistyczny, czysty, dużo białej przestrzeni (white space)
- Neutralne tło: #FFFFFF z subtelnymi szarymi akcentami (#F5F6F8 jako secondary background)
- Kolor główny (primary): ciemny granat #1A2B4A (zaufanie, profesjonalizm, legal)
- Kolor akcent (CTA / akcje): intensywny teal #00B4A6 (ochrona, prywatność, RODO)
- Kolor alertów / redakcji: ciepły czerwony #E63946 (uwaga, dane wrażliwe)
- Kolor sukcesu: zielony #2EC4B6
- Typografia: Inter lub SF Pro — czytelna, nowoczesna, sans-serif
- Zaokrąglenia: 12–16px na kartach i przyciskach
- Cienie: subtelne, miękkie (0 2px 8px rgba(0,0,0,0.06))
- Ikony: outline, 1.5px stroke, zaokrąglone końcówki (styl Lucide/Phosphor)
- Platforma: uniwersalny design (nie stricte iOS ani Android), ramka 390×844px

JĘZYK INTERFEJSU: polski (wszystkie labele, przyciski, opisy po polsku).

---

EKRAN 0: LOGO I IKONA APLIKACJI

Zaprojektuj logo i ikonę aplikacji "Sanitizer":
- Koncept: tarcza ochronna + dokument + element AI/skanowania
- Minimalistyczne, geometryczne, dobrze czytelne w małych rozmiarach (ikon App Store)
- Kolorystyka: granat #1A2B4A jako baza, teal #00B4A6 jako akcent
- Wersje: ikona kwadratowa (1024×1024 App Store), logo horyzontalne z napisem "Sanitizer", mała ikona monochromatyczna
- Styl: flat/semi-flat, bez gradientów lub z bardzo subtelnym gradientem
- Tagline pod logo: "Anonimizacja bez kompromisów"

---

EKRAN 1: ONBOARDING — SLIDE 1 (Powitanie)

- Duża, centralna ilustracja: minimalistyczny dokument z tarczą ochronną / zamkiem
- Nagłówek: "Chroń dane jednym kliknięciem"
- Podtytuł: "Automatyczna anonimizacja dokumentów PDF z AI. Bez chmury, bez ryzyka."
- Na dole: przycisk "Dalej" (teal, pełna szerokość, zaokrąglony)
- Wskaźnik kroków: 3 kropki, pierwsza aktywna
- Tło: białe z subtelnym gradientem na ilustracji

EKRAN 2: ONBOARDING — SLIDE 2 (Jak to działa)

- 3 mini-ikony w pionie z krótkimi opisami:
  • Ikona dokumentu → "Wybierz PDF z telefonu"
  • Ikona AI/mózgu → "AI wykryje dane wrażliwe"
  • Ikona tarczy/zamka → "Dane zostaną trwale usunięte"
- Nagłówek: "Trzy kroki do bezpieczeństwa"
- Przycisk "Dalej"
- Wskaźnik kroków: 3 kropki, druga aktywna

EKRAN 3: ONBOARDING — SLIDE 3 (Prywatność)

- Centralna ikona: telefon z tarczą i przekreślona chmura
- Nagłówek: "Twoje dane nigdy nie opuszczą telefonu"
- Podtytuł: "Całe przetwarzanie odbywa się lokalnie na Twoim urządzeniu. Zgodność z RODO."
- Przycisk główny: "Rozpocznij" (teal, pełna szerokość)
- Wskaźnik kroków: 3 kropki, trzecia aktywna

---

EKRAN 4: EKRAN GŁÓWNY (Home / Import)

- Top bar: logo "Sanitizer" (mały, lewy górny) + ikona ustawień (prawy górny, outline gear)
- Centrum ekranu: duży obszar importu w stylu drag & drop:
  • Przerywana ramka (dashed border, kolor granat #1A2B4A z opacity 30%)
  • Ikona dokumentu ze strzałką w górę (upload)
  • Tekst główny: "Wybierz plik PDF"
  • Tekst pomocniczy: "lub udostępnij dokument z innej aplikacji"
- Pod spodem: przycisk "Wybierz z plików" (teal, outlined lub filled)
- Sekcja "Ostatnie dokumenty" (opcjonalnie):
  • Lista 2–3 ostatnich plików z datą, nazwą i statusem (zanonimizowany ✓)
  • Każdy plik jako karta z ikoną PDF, nazwą, datą, badge statusu
- Bottom: delikatny tekst "Przetwarzanie 100% lokalne • Zgodne z RODO" z ikoną tarczy

---

EKRAN 5: ANALIZA W TOKU (Processing)

- Nagłówek: "Analizuję dokument..."
- Miniatura dokumentu PDF (podgląd pierwszej strony, lekko przyciemniony)
- Na miniaturze: animowana linia skanowania (moving scan line) — pokaż jako statyczną pozycję w ~40% dokumentu z efektem glow (teal)
- Pod miniaturą: pasek postępu (progress bar):
  • Tło: jasnoszare
  • Wypełnienie: gradient teal
  • Tekst procentowy: "67%"
- Pod paskiem: dynamiczny status w 3 krokach (step indicator):
  • ✓ "Rozpoznawanie tekstu (OCR)" — ukończony, kolor sukcesu
  • ● "Wykrywanie danych wrażliwych (AI)" — aktywny, pulsujący teal
  • ○ "Analiza elementów graficznych" — oczekujący, szary
- Na dole: przycisk "Anuluj" (text button, szary)

---

EKRAN 6: PODGLĄD WYNIKÓW DETEKCJI (Preview)

- Top bar: strzałka wstecz + "Wyniki analizy" + ikona filtrowania (lejek)
- Podgląd dokumentu PDF zajmujący ~60% ekranu:
  • Na dokumencie widoczne kolorowe prostokąty (bounding boxes) na wykrytych danych:
    — Czerwony półprzezroczysty prostokąt na numerze PESEL z etykietą "[PESEL]"
    — Niebieski prostokąt na imieniu i nazwisku z etykietą "[IMIĘ I NAZWISKO]"
    — Fioletowy prostokąt na adresie z etykietą "[ADRES]"
    — Pomarańczowy prostokąt na numerze telefonu z etykietą "[TELEFON]"
    — Zielony prostokąt na twarzy/zdjęciu z etykietą "[TWARZ]"
  • Etykiety jako małe badge'e nad prostokątami
- Pod podglądem: podsumowanie w formie kart/chipsów:
  • "PESEL (2)" "Imiona (3)" "Adresy (1)" "Telefony (2)" "Twarze (1)"
  • Każdy chip w kolorze swojej kategorii, z liczbą wykryć
  • Chipy klikalne (toggle on/off danej kategorii)
- Na dole: duży przycisk CTA "Anonimizuj dokument" (teal, pełna szerokość)
- Mały tekst pod przyciskiem: "⚠ Operacja jest nieodwracalna"

---

EKRAN 7: POTWIERDZENIE REDAKCJI (Confirmation modal)

- Modal / bottom sheet z tłem przyciemnionym
- Ikona ostrzeżenia: trójkąt z wykrzyknikiem (czerwony #E63946)
- Nagłówek: "Potwierdź anonimizację"
- Treść: "Wykryte dane wrażliwe zostaną trwale usunięte z dokumentu. Tej operacji nie można cofnąć."
- Podsumowanie: "Elementów do redakcji: 9"
- Dwa przyciski:
  • "Anonimizuj" — czerwony/teal, filled, główny
  • "Anuluj" — szary, outlined

---

EKRAN 8: REDAKCJA W TOKU (Redacting)

- Podobny do ekranu analizy, ale z innym komunikatem
- Nagłówek: "Trwa anonimizacja..."
- Miniatura dokumentu z animowanymi czarnymi prostokątami pojawiającymi się jeden po drugim na wykrytych obszarach
- Pasek postępu z tekstem "Usuwanie danych... 4/9"
- Ikona kłódki pod paskiem postępu
- Brak przycisku anulowania (operacja nieodwracalna)

---

EKRAN 9: SUKCES / EKSPORT (Success)

- Duża ikona sukcesu: zielony okrąg z checkmarkiem (animacja lottie — pokaż statycznie)
- Nagłówek: "Dokument zanonimizowany!"
- Podtytuł: "Wszystkie dane wrażliwe zostały trwale usunięte."
- Karta podsumowania:
  • Nazwa pliku: "Umowa_SANITIZED.pdf"
  • Zredagowanych elementów: 9
  • Czas przetwarzania: 3,2s
  • Rozmiar pliku: 1,4 MB
- Dwa przyciski:
  • "Udostępnij" (teal, filled, ikona share) — główny CTA
  • "Zapisz do plików" (outlined, ikona download)
- Pod przyciskami: "Otwórz podgląd" (text link)
- Na dole: "Anonimizuj kolejny dokument" (text button z ikoną +)

---

EKRAN 10: PODGLĄD ZANONIMIZOWANEGO DOKUMENTU (Redacted preview)

- Top bar: strzałka wstecz + "Podgląd" + ikona share
- Pełnoekranowy podgląd dokumentu PDF:
  • Widoczne czarne prostokąty w miejscach zredagowanych danych
  • Na prostokątach opcjonalne etykiety: "[PESEL]", "[ADRES]" itp. białym tekstem
- Bottom bar pływający:
  • Przycisk "Udostępnij" (teal) + "Zapisz" (outlined)
  • Nawigacja stron: "Strona 1/3" z strzałkami

---

EKRAN 11: USTAWIENIA (Settings)

- Top bar: strzałka wstecz + "Ustawienia"
- Sekcje z prostymi przełącznikami i opcjami:

Sekcja "Redakcja":
  • Kolor prostokąta: selektor (czarny domyślnie, szary, biały, granat)
  • Pokaż etykiety kategorii: toggle (ON/OFF)
  • Margines bezpieczeństwa: suwak (1–5px)

Sekcja "Detekcja":
  • Kategorie do wykrywania: lista z toggleami:
    — PESEL ✓, NIP ✓, REGON ✓, Dowód osobisty ✓
    — Imiona i nazwiska ✓, Adresy ✓
    — Telefony ✓, E-maile ✓, IBAN ✓
    — Twarze ✓, Podpisy ✓, Pieczątki ✓

Sekcja "Aplikacja":
  • Anonimowe statystyki użycia: toggle (OFF domyślnie)
  • Wersja aplikacji: "1.0.0 (MVP)"
  • Sprawdź aktualizacje

- Na dole: link "Polityka prywatności" + "Regulamin"

---

EKRAN 12: STAN BŁĘDU — Plik uszkodzony

- Ikona: dokument z czerwonym X
- Nagłówek: "Nie udało się otworzyć pliku"
- Podtytuł: "Plik może być uszkodzony lub zaszyfrowany hasłem. Spróbuj z innym plikiem."
- Przycisk: "Wybierz inny plik" (teal, filled)
- Pod przyciskiem: "Wróć do ekranu głównego" (text link)

EKRAN 13: STAN PUSTEGO WYNIKU — Brak wykryć

- Ikona: dokument z lupą i znakiem zapytania
- Nagłówek: "Nie wykryto danych wrażliwych"
- Podtytuł: "AI nie znalazł danych do anonimizacji w tym dokumencie."
- Dwa przyciski:
  • "Zaznacz ręcznie" (teal, filled) — otwiera tryb ręcznego zaznaczania
  • "Wybierz inny plik" (outlined)

---

DODATKOWE WYTYCZNE:
- Zachowaj spójność wizualną między ekranami (te same marginesy, wielkości fontu, kolory)
- Użyj siatki 8px
- Główny font nagłówków: Inter Bold, 24–28px
- Podtytuły: Inter Regular, 14–16px, kolor #6B7280
- Body: Inter Regular, 14px, kolor #1F2937
- Przyciski: Inter SemiBold, 16px, wysokość 52px, zaokrąglenie 12px
- Chipy/badge: Inter Medium, 12px, zaokrąglenie 20px (pill shape)
- Zachowaj bezpieczne marginesy od krawędzi: 20px po bokach
- Status bar na górze każdego ekranu (czas, bateria, zasięg — standardowy)