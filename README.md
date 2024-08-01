## Cel biznesowy

Celem projektu jest stworzenie aplikacji pozwalającej na zarządzanie ogłoszeniami online - tablica ogłoszeń.

Każde ogłoszenie ma:
- tytuł
- opis
- autora
- kategorię (jedną)
- tagi (jeden lub więcej)
- cenę
- ... (miejsce na Twoje pomysły, najlepsze będą punktowane dodatkowo)

Interfejs graficzny nie jest wymagany. Funkcjonalność będzie sprawdzona przy pomocy Postmana. Należy pamiętać o obsłudze błędów, nazewnictwie endpointów, obsłudze metod HTTP oraz zwracanych kodów odpowiedzi HTTP.

Lista funkcji:

0. Aplikacja jest udokumentowana za pomocą Postmana - kolekcją zawierającą przykłady żądań do wszystkich przygotowanych funkcji.

1. [1 punkt] Port z którego korzysta aplikacja powinien być ustawiany za pomocą zmiennych środowiskowych.

2. [1 punkt] Na żądania wysłane pod adres `/heartbeat` aplikacja odpowiada zwracając aktualną datę i godzinę.

3. [1 punkt] Aplikacja umożliwia dodawanie ogłoszenia.

4. [1 punkt] Aplikacja umożliwia zwracanie pojedynczego ogłoszenia. W zależności od nagłówka żądania `Accept` dane są zwracane w odpowiednim formacie (przykładowe nagłówki: `text/plain`, `text/html`, `application/json`). Można wykorzystać funkcję `Express` `res.format()`.

5. [1 punkt] Aplikacja umożliwia zwracanie wszystkich ogłoszeń.

6. [1 punkt] Aplikacja umożliwia usuwanie wybranego ogłoszenia.

7. [1 punkt] Aplikacja umożliwia modyfikowanie wybranego ogłoszenia.

8. [1 punkt za każde kryterium wyszukiwania/maksymalnie 5 punktów] Aplikacja pozwala na wyszukiwanie ogłoszeń według różnych kryteriów (tytuł, opis, zakres dat, zakres cen itp).

9. [4-8 punktów] Aplikacja zapisuje ogłoszenia w bazie danych [max 8 punktów] lub plikach [max 4 punkty].

10. [2 punkty] Usuwanie i modyfikowanie ogłoszeń jest zabezpieczone hasłem, przy braku dostępu zwracany jest stosowny komunikat i kod odpowiedzi HTTP. Nie jest wymagane zabezpieczenie na poziomie *produkcyjnym*, raczej podstawowe rozwiązanie (za wyjątkowo dobre rozwiązania możliwe dodatkowe punkty).

11. [4 punkty] Aplikacja ma 3 zdefiniowanych na stałe użytkowników. Każdy z nich może usuwać i modyfikować tylko te ogłoszenia które sam dodał> Przy braku uprawnień do wykonania operacji, zwracany jest stosowny komunikat i kod odpowiedzi HTTP.

12. [3 punkty] Po uruchomieniu z parametrem `debug` (np `node app.js debug`) aplikacja zapisuje w pliku tekstowym czas odebrania każdego żądania, metodę HTTP oraz adres na który przyszło żądanie.

13. [2 punkty] Po odebraniu żądania wysłanego na adres który nie istnieje, aplikacja powinna zwracać statyczny obrazek zamiast domyślnej strony błędu 404.

14. [2 punkty] W przypadku wystąpienia błędów aplikacji, szczegóły błędu wyświetlane są za pomocą console.log a klient dostaje stosowny komunikat i kod odpowiedzi HTTP.
