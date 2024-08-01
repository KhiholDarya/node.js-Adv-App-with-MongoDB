## Cel biznesowy

Celem projektu jest stworzenie aplikacji pozwalającej na zarządzanie ogłoszeniami online - tablica ogłoszeń.

Każde ogłoszenie ma:
- tytuł
- opis
- autora
- kategorię (jedną)
- tagi (jeden lub więcej)
- cenę
- ... 
Funkcjonalność będzie sprawdzona przy pomocy Postmana.

Lista funkcji:

0. Aplikacja jest udokumentowana za pomocą Postmana - kolekcją zawierającą przykłady żądań do wszystkich przygotowanych funkcji.

1. Port z którego korzysta aplikacja został ustawiony za pomocą zmiennych środowiskowych.

2. Na żądania wysłane pod adres `/heartbeat` aplikacja odpowiada zwracając aktualną datę i godzinę.

3. Aplikacja umożliwia dodawanie ogłoszenia.

4. Aplikacja umożliwia zwracanie pojedynczego ogłoszenia. W zależności od nagłówka żądania `Accept` dane są zwracane w odpowiednim formacie (przykładowe nagłówki: `text/plain`, `text/html`, `application/json`).

5. Aplikacja umożliwia zwracanie wszystkich ogłoszeń.

6. Aplikacja umożliwia usuwanie wybranego ogłoszenia.

7. Aplikacja umożliwia modyfikowanie wybranego ogłoszenia.

8. Aplikacja pozwala na wyszukiwanie ogłoszeń według różnych kryteriów (tytuł, opis, zakres dat, zakres cen itp).

9. Aplikacja zapisuje ogłoszenia w bazie danych.

10. Usuwanie i modyfikowanie ogłoszeń jest zabezpieczone hasłem, przy braku dostępu zwracany jest stosowny komunikat i kod odpowiedzi HTTP.

11. Aplikacja ma 3 zdefiniowanych na stałe użytkowników. Każdy z nich może usuwać i modyfikować tylko te ogłoszenia które sam dodał> Przy braku uprawnień do wykonania operacji, zwracany jest stosowny komunikat i kod odpowiedzi HTTP.

12. Po uruchomieniu z parametrem `debug` (np `node app.js debug`) aplikacja zapisuje w pliku tekstowym czas odebrania każdego żądania, metodę HTTP oraz adres na który przyszło żądanie.

13. Po odebraniu żądania wysłanego na adres który nie istnieje, aplikacja zwraca statyczny obrazek zamiast domyślnej strony błędu 404.

14. W przypadku wystąpienia błędów aplikacji, szczegóły błędu wyświetlane są za pomocą console.log a klient dostaje stosowny komunikat i kod odpowiedzi HTTP.
