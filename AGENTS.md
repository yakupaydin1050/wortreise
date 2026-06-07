# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v54.0.0/ before writing any code.

---

# Word Bank Data Rules

## Trennbare Verben (Separable Verbs) — targetWord Kuralı

Ayrılabilir fiillerde `targetWord` ve `germanWithBlank` şu kurala göre belirlenir:

**Kural 1 — Fiil sonda tek parçaysa** (infinitif, Perfekt, modal yapısı):
- `targetWord` = tam fiil formu
- Boşluk fiilin tamamını kapsar

```
german:          'Wann kann ich den Schrank bei dir abholen?'
germanWithBlank: 'Wann kann ich den Schrank bei dir ___?'
targetWord:      'abholen'

german:          'Der Zug ist pünktlich abgefahren.'
germanWithBlank: 'Der Zug ist pünktlich ___.'
targetWord:      'abgefahren'
```

**Kural 2 — Fiil cümle içinde ayrılmışsa** (Präsens/Präteritum split):
- `targetWord` = yalnızca sondaki prefix
- Boşluk yalnızca prefix'i kapsar; kök cümlede görünür kalır

```
german:          'Das Spiel findet auch bei Regen statt.'
germanWithBlank: 'Das Spiel findet auch bei Regen ___.'
targetWord:      'statt'

german:          'Ich rufe dich morgen an.'
germanWithBlank: 'Ich rufe dich morgen ___.'
targetWord:      'an'
```
