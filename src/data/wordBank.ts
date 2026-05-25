import { Sentence } from '../types';

export interface WordEntry {
  id: string;
  word: string;
  tr?: string;
  sentences: Sentence[];
}

export const wordBank: WordEntry[] = [
  {
    id: 'ab',
    word: 'ab',
    tr: '-den itibaren',
    sentences: [
      {
        id: 'ab-1',
        targetWord: 'Ab',
        german: 'Ab morgen muss ich wieder arbeiten.',
        germanWithBlank: '___ morgen muss ich wieder arbeiten.',
        translationTR: 'Yarından itibaren tekrar çalışmam gerekiyor.',
        translationEN: 'Starting tomorrow, I have to work again.',
        glossary: {
          morgen: { tr: 'yarın', en: 'tomorrow' },
          wieder: { tr: 'tekrar', en: 'again' },
          arbeiten: { tr: 'çalışmak', en: 'to work' },
        },
      },
    ],
  },
  {
    id: 'aber',
    word: 'aber',
    tr: 'ama / fakat',
    sentences: [
      {
        id: 'aber-1',
        targetWord: 'aber',
        german: 'Ich bin oft im Büro, aber nur für wenige Stunden.',
        germanWithBlank: 'Ich bin oft im Büro, ___ nur für wenige Stunden.',
        translationTR: 'Sık sık ofisteyim, ama sadece birkaç saatliğine.',
        translationEN: 'I am often in the office, but only for a few hours.',
        glossary: {
          bin: { tr: '-im (olmak)', en: 'am', de: 'sein', trDict: 'olmak' },
          oft: { tr: 'sık sık', en: 'often' },
          büro: { tr: 'ofis', en: 'office' },
          wenige: { tr: 'az, birkaç', en: 'few' },
          stunden: { tr: 'saatler', en: 'hours' },
        },
      },
    ],
  },
  {
    id: 'abfahren',
    word: 'abfahren',
    tr: 'hareket etmek',
    sentences: [
      {
        id: 'abfahren-1',
        targetWord: 'abgefahren',
        german: 'Der Zug ist pünktlich abgefahren.',
        germanWithBlank: 'Der Zug ist pünktlich ___.',
        translationTR: 'Tren tam zamanında hareket etti.',
        translationEN: 'The train departed on time.',
        glossary: {
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'fahren': { tr: 'gitmek (araçla)', en: 'travel/go', de: 'fahren' },
          'um': { tr: 'saat ... -de (zaman)', en: 'at (time)', de: 'um' },
          'zwölf': { tr: 'on iki (sayı)', en: 'twelve', de: 'zwölf' },
          'uhr': { tr: 'saat', en: 'o\'clock', de: 'die Uhr' },
        },
      },
    ],
  },
  {
    id: 'die-abfahrt',
    word: 'die Abfahrt',
    tr: 'kalkış',
    sentences: [
      {
        id: 'abfahrt-1',
        targetWord: 'die Abfahrt',
        german: 'Vor der Abfahrt rufe ich an.',
        germanWithBlank: 'Vor der ___ rufe ich an.',
        translationTR: 'Kalkıştan önce arayacağım.',
        translationEN: 'I will call before the departure.',
        glossary: {
          vor: { tr: 'önce', en: 'before' },
          rufe: { tr: 'arıyorum (anrufen)', en: 'I call (to call)', de: 'anrufen', trDict: 'aramak' },
          an: { tr: 'arıyorum (anrufen)', en: 'I call (to call)' },
        },
      },
    ],
  },
  {
    id: 'abgeben',
    word: 'abgeben',
    tr: 'teslim etmek',
    sentences: [
      {
        id: 'abgeben-1',
        targetWord: 'abgeben',
        german: 'Ich muss meine Schlüssel abgeben.',
        germanWithBlank: 'Ich muss meine Schlüssel ___.',
        translationTR: 'Anahtarlarımı teslim etmem gerekiyor.',
        translationEN: 'I have to hand in my keys.',
        glossary: {
          muss: { tr: 'zorundayım', en: 'must' },
          meine: { tr: 'benim', en: 'my' },
          schlüssel: { tr: 'anahtarlar', en: 'keys' },
        },
      },
    ],
  },
  {
    id: 'abholen',
    word: 'abholen',
    tr: 'gidip almak',
    sentences: [
      {
        id: 'abholen-1',
        targetWord: 'abholen',
        german: 'Wann kann ich den Schrank bei dir abholen?',
        germanWithBlank: 'Wann kann ich den Schrank bei dir ___?',
        translationTR: 'Dolabı senden ne zaman alabilirim?',
        translationEN: 'When can I pick up the wardrobe from you?',
        glossary: {
          wann: { tr: 'ne zaman', en: 'when' },
          kann: { tr: '-ebilirim', en: 'can' },
          schrank: { tr: 'dolap', en: 'wardrobe' },
          bei: { tr: 'yanında, -de', en: 'at, by' },
          dir: { tr: 'sana, sende', en: 'you (dative)' },
        },
      },
      {
        id: 'abholen-2',
        targetWord: 'abholen',
        german: 'Wir müssen noch meinen Bruder abholen.',
        germanWithBlank: 'Wir müssen noch meinen Bruder ___.',
        translationTR: 'Kardeşimi de almamız gerekiyor.',
        translationEN: 'We still need to pick up my brother.',
        glossary: {
          müssen: { tr: 'zorunda olmak', en: 'must' },
          noch: { tr: 'henüz, hâlâ', en: 'still' },
          meinen: { tr: 'benim', en: 'my' },
          bruder: { tr: 'erkek kardeş', en: 'brother' },
        },
      },
    ],
  },
  {
    id: 'der-absender',
    word: 'der Absender',
    tr: 'gönderen',
    sentences: [
      {
        id: 'absender-1',
        targetWord: 'der Absender',
        german: 'Da ist ein Brief für dich ohne Absender.',
        germanWithBlank: 'Da ist ein Brief für dich ohne ___.',
        translationTR: 'Sana gönderen adresi olmayan bir mektup var.',
        translationEN: 'There is a letter for you without a sender.',
        glossary: {
          da: { tr: 'orada, işte', en: 'there' },
          ist: { tr: '-dır (olmak)', en: 'is' },
          brief: { tr: 'mektup', en: 'letter' },
          für: { tr: 'için', en: 'for' },
          dich: { tr: 'seni, sana', en: 'you (accusative)' },
          ohne: { tr: '-sız, -siz', en: 'without' },
        },
      },
    ],
  },
  {
    id: 'achtung',
    word: 'Achtung',
    sentences: [
      {
        id: 'achtung-1',
        targetWord: 'Achtung',
        german: 'Achtung! Das dürfen Sie nicht tun.',
        germanWithBlank: '___! Das dürfen Sie nicht tun.',
        translationTR: 'Dikkat! Bunu yapmamalısınız.',
        translationEN: 'Attention! You must not do that.',
        glossary: {
          das: { tr: 'bunu, onu', en: 'that' },
          dürfen: { tr: 'izinli olmak', en: 'may, be allowed' },
          nicht: { tr: 'değil', en: 'not' },
          tun: { tr: 'yapmak', en: 'to do' },
        },
      },
    ],
  },
  {
    id: 'die-adresse',
    word: 'die Adresse',
    tr: 'adres',
    sentences: [
      {
        id: 'adresse-1',
        targetWord: 'die Adresse',
        german: 'Können Sie mir seine Adresse sagen?',
        germanWithBlank: 'Können Sie mir seine ___ sagen?',
        translationTR: 'Bana onun adresini söyleyebilir misiniz?',
        translationEN: 'Can you tell me his address?',
        glossary: {
          können: { tr: '-ebilir misiniz', en: 'can' },
          mir: { tr: 'bana', en: 'me (dative)' },
          seine: { tr: 'onun', en: 'his' },
          sagen: { tr: 'söylemek', en: 'to say, to tell' },
        },
      },
    ],
  },
  {
    id: 'alt',
    word: 'alt',
    tr: 'eski / yaşlı',
    sentences: [
      {
        id: 'alt-1',
        targetWord: 'alte',
        german: 'Köln ist eine alte Stadt.',
        germanWithBlank: 'Köln ist eine ___ Stadt.',
        translationTR: 'Köln eski bir şehirdir.',
        translationEN: 'Cologne is an old city.',
        glossary: {
          Stadt: { tr: 'şehir', en: 'city' },
        },
      },
    ],
  },
  {
    id: 'anrufen',
    word: 'anrufen',
    tr: 'telefonla aramak',
    sentences: [
      {
        id: 'anrufen-1',
        targetWord: 'anrufen',
        german: 'Kannst du mich morgen anrufen?',
        germanWithBlank: 'Kannst du mich morgen ___?',
        translationTR: 'Yarın beni arayabilir misin?',
        translationEN: 'Can you call me tomorrow?',
        glossary: {
          kannst: { tr: '-ebilir misin', en: 'can you' },
          mich: { tr: 'beni', en: 'me' },
          morgen: { tr: 'yarın', en: 'tomorrow' },
        },
      },
    ],
  },
  {
    id: 'der-arzt',
    word: 'der Arzt',
    tr: 'doktor',
    sentences: [
      {
        id: 'arzt-1',
        targetWord: 'Arzt',
        german: 'Ich habe morgen einen Termin beim Arzt.',
        germanWithBlank: 'Ich habe morgen einen Termin beim ___.',
        translationTR: 'Yarın doktorda randevum var.',
        translationEN: 'I have an appointment with the doctor tomorrow.',
        glossary: {
          habe: { tr: 'var (sahip olmak)', en: 'have' },
          morgen: { tr: 'yarın', en: 'tomorrow' },
          termin: { tr: 'randevu', en: 'appointment' },
          beim: { tr: '-de, yanında', en: 'at the' },
        },
      },
    ],
  },
  {
    id: 'aufstehen',
    word: 'aufstehen',
    tr: 'ayağa kalkmak / yataktan kalkmak',
    sentences: [
      {
        id: 'aufstehen-1',
        targetWord: 'aufstehen',
        german: 'Ich muss morgen früh aufstehen.',
        germanWithBlank: 'Ich muss morgen früh ___.',
        translationTR: 'Yarın sabah erkenden kalkmam gerekiyor.',
        translationEN: 'I have to get up early tomorrow.',
        glossary: {
          muss: { tr: 'zorundayım', en: 'must' },
          morgen: { tr: 'yarın', en: 'tomorrow' },
          früh: { tr: 'erken', en: 'early' },
        },
      },
    ],
  },
  {
    id: 'der-bahnhof',
    word: 'der Bahnhof',
    tr: 'istasyon',
    sentences: [
      {
        id: 'bahnhof-1',
        targetWord: 'Bahnhof',
        german: 'Wo ist der nächste Bahnhof?',
        germanWithBlank: 'Wo ist der nächste ___?',
        translationTR: 'En yakın tren istasyonu nerede?',
        translationEN: 'Where is the nearest train station?',
        glossary: {
          wo: { tr: 'nerede', en: 'where' },
          ist: { tr: '-dır (olmak)', en: 'is' },
          nächste: { tr: 'en yakın', en: 'nearest' },
        },
      },
    ],
  },
  {
    id: 'bestellen',
    word: 'bestellen',
    tr: 'sipariş etmek',
    sentences: [
      {
        id: 'bestellen-1',
        targetWord: 'bestellen',
        german: 'Ich möchte ein Wasser bestellen.',
        germanWithBlank: 'Ich möchte ein Wasser ___.',
        translationTR: 'Bir su sipariş etmek istiyorum.',
        translationEN: 'I would like to order a water.',
        glossary: {
          möchte: { tr: 'istiyorum', en: 'would like' },
          wasser: { tr: 'su', en: 'water' },
        },
      },
    ],
  },
  {
    id: 'bezahlen',
    word: 'bezahlen',
    tr: 'ödemek',
    sentences: [
      {
        id: 'bezahlen-1',
        targetWord: 'bezahlen',
        german: 'Kann ich mit Karte bezahlen?',
        germanWithBlank: 'Kann ich mit Karte ___?',
        translationTR: 'Kartla ödeme yapabilir miyim?',
        translationEN: 'Can I pay by card?',
        glossary: {
          kann: { tr: '-ebilirim', en: 'can' },
          mit: { tr: 'ile', en: 'with' },
          karte: { tr: 'kart', en: 'card' },
        },
      },
    ],
  },
  {
    id: 'das-bier',
    word: 'das Bier',
    tr: 'bira',
    sentences: [
      {
        id: 'bier-1',
        targetWord: 'Bier',
        german: 'Ich möchte ein Bier, bitte.',
        germanWithBlank: 'Ich möchte ein ___, bitte.',
        translationTR: 'Bir bira istiyorum, lütfen.',
        translationEN: 'I would like a beer, please.',
        glossary: {
          möchte: { tr: 'istiyorum', en: 'would like' },
          bitte: { tr: 'lütfen', en: 'please' },
        },
      },
    ],
  },
  {
    id: 'das-buch',
    word: 'das Buch',
    tr: 'kitap',
    sentences: [
      {
        id: 'buch-1',
        targetWord: 'Buch',
        german: 'Das Buch kostet zehn Euro.',
        germanWithBlank: 'Das ___ kostet zehn Euro.',
        translationTR: 'Kitap on Euro.',
        translationEN: 'The book costs ten euros.',
        glossary: {
          kostet: { tr: 'eder, değer', en: 'costs' },
          zehn: { tr: 'on', en: 'ten' },
          euro: { tr: 'Euro', en: 'euro' },
        },
      },
    ],
  },
  {
    id: 'der-bus',
    word: 'der Bus',
    sentences: [
      {
        id: 'bus-1',
        targetWord: 'Bus',
        german: 'Der Bus kommt in fünf Minuten.',
        germanWithBlank: 'Der ___ kommt in fünf Minuten.',
        translationTR: 'Otobüs beş dakika sonra geliyor.',
        translationEN: 'The bus comes in five minutes.',
        glossary: {
          kommt: { tr: 'geliyor', en: 'comes', de: 'kommen', trDict: 'gelmek' },
          fünf: { tr: 'beş', en: 'five' },
          minuten: { tr: 'dakika', en: 'minutes' },
        },
      },
    ],
  },
  {
    id: 'das-cafe',
    word: 'das Café',
    sentences: [
      {
        id: 'cafe-1',
        targetWord: 'Café',
        german: 'Wir treffen uns um drei Uhr im Café.',
        germanWithBlank: 'Wir treffen uns um drei Uhr im ___.',
        translationTR: 'Saat üçte kafede buluşuyoruz.',
        translationEN: "We meet at three o'clock at the café.",
        glossary: {
          treffen: { tr: 'buluşmak', en: 'to meet' },
          uns: { tr: 'bizi, bizimle', en: 'us' },
          drei: { tr: 'üç', en: 'three' },
          uhr: { tr: 'saat', en: "o'clock" },
        },
      },
    ],
  },
  {
    id: 'das-ei',
    word: 'das Ei',
    tr: 'yumurta',
    sentences: [
      {
        id: 'ei-1',
        targetWord: 'Ei',
        german: 'Ich esse zum Frühstück ein Ei.',
        germanWithBlank: 'Ich esse zum Frühstück ein ___.',
        translationTR: 'Kahvaltıda bir yumurta yiyorum.',
        translationEN: 'I eat an egg for breakfast.',
        glossary: {
          esse: { tr: 'yiyorum', en: 'eat', de: 'essen', trDict: 'yemek' },
          frühstück: { tr: 'kahvaltı', en: 'breakfast' },
        },
      },
    ],
  },
  {
    id: 'einkaufen',
    word: 'einkaufen',
    tr: 'alışveriş yapmak',
    sentences: [
      {
        id: 'einkaufen-1',
        targetWord: 'einkaufen',
        german: 'Wir gehen heute einkaufen.',
        germanWithBlank: 'Wir gehen heute ___.',
        translationTR: 'Bugün alışverişe gidiyoruz.',
        translationEN: 'We are going shopping today.',
        glossary: {
          gehen: { tr: 'gitmek', en: 'to go' },
          heute: { tr: 'bugün', en: 'today' },
        },
      },
    ],
  },
  {
    id: 'fahren',
    word: 'fahren',
    tr: '(bilgisayarı) kapatmak',
    sentences: [
      {
        id: 'fahren-1',
        targetWord: 'fahren',
        german: 'Wir können mit dem Zug fahren.',
        germanWithBlank: 'Wir können mit dem Zug ___.',
        translationTR: 'Trenle gidebiliriz.',
        translationEN: 'We can travel by train.',
        glossary: {
          können: { tr: '-ebiliriz', en: 'can' },
          mit: { tr: 'ile', en: 'with, by' },
          zug: { tr: 'tren', en: 'train' },
        },
      },
    ],
  },
  {
    id: 'die-familie',
    word: 'die Familie',
    tr: 'aile',
    sentences: [
      {
        id: 'familie-1',
        targetWord: 'Familie',
        german: 'Meine Familie wohnt in München.',
        germanWithBlank: 'Meine ___ wohnt in München.',
        translationTR: "Ailem Münih'te yaşıyor.",
        translationEN: 'My family lives in Munich.',
        glossary: {
          meine: { tr: 'benim', en: 'my' },
          wohnt: { tr: 'yaşıyor', en: 'lives', trDict: 'yaşamak' },
        },
      },
    ],
  },
  {
    id: 'das-fieber',
    word: 'das Fieber',
    tr: 'ateş (hastalık)',
    sentences: [
      {
        id: 'fieber-1',
        targetWord: 'Fieber',
        german: 'Ich habe Fieber und muss zum Arzt.',
        germanWithBlank: 'Ich habe ___ und muss zum Arzt.',
        translationTR: 'Ateşim var ve doktora gitmem gerekiyor.',
        translationEN: 'I have a fever and have to go to the doctor.',
        glossary: {
          habe: { tr: 'var (sahip olmak)', en: 'have' },
          muss: { tr: 'zorundayım', en: 'must' },
          arzt: { tr: 'doktor', en: 'doctor' },
        },
      },
    ],
  },
  {
    id: 'der-film',
    word: 'der Film',
    tr: 'film',
    sentences: [
      {
        id: 'film-1',
        targetWord: 'Film',
        german: 'Der Film beginnt um acht Uhr.',
        germanWithBlank: 'Der ___ beginnt um acht Uhr.',
        translationTR: 'Film saat sekizde başlıyor.',
        translationEN: "The film starts at eight o'clock.",
        glossary: {
          beginnt: { tr: 'başlıyor', en: 'starts', trDict: 'başlamak' },
          acht: { tr: 'sekiz', en: 'eight' },
          uhr: { tr: 'saat', en: "o'clock" },
        },
      },
    ],
  },
  {
    id: 'frei',
    word: 'frei',
    tr: 'serbest / boş / özgür',
    sentences: [
      {
        id: 'frei-1',
        targetWord: 'frei',
        german: 'Ist dieser Platz noch frei?',
        germanWithBlank: 'Ist dieser Platz noch ___?',
        translationTR: 'Bu yer hâlâ boş mu?',
        translationEN: 'Is this seat still free?',
        glossary: {
          dieser: { tr: 'bu', en: 'this' },
          platz: { tr: 'yer, alan', en: 'seat, place' },
          noch: { tr: 'hâlâ', en: 'still' },
        },
      },
    ],
  },
  {
    id: 'der-freund',
    word: 'der Freund',
    tr: 'arkadaş / dost',
    sentences: [
      {
        id: 'freund-1',
        targetWord: 'Freund',
        german: 'Mein Freund kommt aus Deutschland.',
        germanWithBlank: 'Mein ___ kommt aus Deutschland.',
        translationTR: "Arkadaşım Almanya'dan geliyor.",
        translationEN: 'My friend comes from Germany.',
        glossary: {
          mein: { tr: 'benim', en: 'my' },
          kommt: { tr: 'geliyor', en: 'comes', de: 'kommen', trDict: 'gelmek' },
          aus: { tr: '-den, -dan', en: 'from' },
        },
      },
    ],
  },
  {
    id: 'das-frühstück',
    word: 'das Frühstück',
    tr: 'kahvaltı',
    sentences: [
      {
        id: 'frühstück-1',
        targetWord: 'Frühstück',
        german: 'Das Frühstück ist von sieben bis zehn Uhr.',
        germanWithBlank: 'Das ___ ist von sieben bis zehn Uhr.',
        translationTR: 'Kahvaltı yediden ona kadar.',
        translationEN: "Breakfast is from seven to ten o'clock.",
        glossary: {
          von: { tr: '-den', en: 'from' },
          bis: { tr: '-e kadar', en: 'until' },
          sieben: { tr: 'yedi', en: 'seven' },
          uhr: { tr: 'saat', en: "o'clock" },
        },
      },
    ],
  },
  {
    id: 'der-garten',
    word: 'der Garten',
    tr: 'bahçe',
    sentences: [
      {
        id: 'garten-1',
        targetWord: 'Garten',
        german: 'Wir essen im Sommer oft im Garten.',
        germanWithBlank: 'Wir essen im Sommer oft im ___.',
        translationTR: 'Yazın sık sık bahçede yiyoruz.',
        translationEN: 'We often eat in the garden in summer.',
        glossary: {
          essen: { tr: 'yemek', en: 'to eat' },
          sommer: { tr: 'yaz', en: 'summer' },
          oft: { tr: 'sık sık', en: 'often' },
        },
      },
    ],
  },
  {
    id: 'der-geburtstag',
    word: 'der Geburtstag',
    tr: 'doğum günü',
    sentences: [
      {
        id: 'geburtstag-1',
        targetWord: 'Geburtstag',
        german: 'Wann hast du Geburtstag?',
        germanWithBlank: 'Wann hast du ___?',
        translationTR: 'Doğum günün ne zaman?',
        translationEN: 'When is your birthday?',
        glossary: {
          wann: { tr: 'ne zaman', en: 'when' },
          hast: { tr: 'var mı (sahip olmak)', en: 'have', de: 'haben', trDict: 'sahip olmak' },
          du: { tr: 'sen', en: 'you' },
        },
      },
    ],
  },
  {
    id: 'gehen',
    word: 'gehen',
    tr: 'gitmek / yürümek / işlemek',
    sentences: [
      {
        id: 'gehen-1',
        targetWord: 'gehen',
        german: 'Wir wollen heute Abend ins Kino gehen.',
        germanWithBlank: 'Wir wollen heute Abend ins Kino ___.',
        translationTR: 'Bu akşam sinemaya gitmek istiyoruz.',
        translationEN: 'We want to go to the cinema tonight.',
        glossary: {
          wollen: { tr: 'istemek', en: 'want to' },
          heute: { tr: 'bugün', en: 'today' },
          abend: { tr: 'akşam', en: 'evening' },
          kino: { tr: 'sinema', en: 'cinema' },
        },
      },
    ],
  },
  {
    id: 'das-geld',
    word: 'das Geld',
    tr: 'para',
    sentences: [
      {
        id: 'geld-1',
        targetWord: 'Geld',
        german: 'Ich habe kein Geld dabei.',
        germanWithBlank: 'Ich habe kein ___ dabei.',
        translationTR: 'Yanımda hiç para yok.',
        translationEN: 'I have no money with me.',
        glossary: {
          habe: { tr: 'var (sahip olmak)', en: 'have' },
          kein: { tr: 'hiç yok', en: 'no, none' },
          dabei: { tr: 'yanımda', en: 'with me' },
        },
      },
    ],
  },
  {
    id: 'das-gepäck',
    word: 'das Gepäck',
    tr: 'bagaj',
    sentences: [
      {
        id: 'gepäck-1',
        targetWord: 'Gepäck',
        german: 'Mein Gepäck ist sehr schwer.',
        germanWithBlank: 'Mein ___ ist sehr schwer.',
        translationTR: 'Bagajım çok ağır.',
        translationEN: 'My luggage is very heavy.',
        glossary: {
          mein: { tr: 'benim', en: 'my' },
          sehr: { tr: 'çok', en: 'very' },
          schwer: { tr: 'ağır, zor', en: 'heavy, difficult' },
        },
      },
    ],
  },
  {
    id: 'helfen',
    word: 'helfen',
    tr: 'yardım etmek',
    sentences: [
      {
        id: 'helfen-1',
        targetWord: 'helfen',
        german: 'Können Sie mir helfen?',
        germanWithBlank: 'Können Sie mir ___?',
        translationTR: 'Bana yardım edebilir misiniz?',
        translationEN: 'Can you help me?',
        glossary: {
          können: { tr: '-ebilir misiniz', en: 'can' },
          sie: { tr: 'siz', en: 'you (formal)' },
          mir: { tr: 'bana', en: 'me (dative)' },
        },
      },
    ],
  },
  {
    id: 'das-hotel',
    word: 'das Hotel',
    tr: 'otel',
    sentences: [
      {
        id: 'hotel-1',
        targetWord: 'Hotel',
        german: 'Das Hotel liegt direkt am Bahnhof.',
        germanWithBlank: 'Das ___ liegt direkt am Bahnhof.',
        translationTR: 'Otel doğrudan tren istasyonunun yanında.',
        translationEN: 'The hotel is located directly at the train station.',
        glossary: {
          liegt: { tr: 'bulunuyor', en: 'is located', de: 'liegen', trDict: 'yer almak' },
          direkt: { tr: 'doğrudan', en: 'directly' },
          bahnhof: { tr: 'tren istasyonu', en: 'train station' },
        },
      },
    ],
  },
  {
    id: 'der-hunger',
    word: 'der Hunger',
    tr: 'açlık',
    sentences: [
      {
        id: 'hunger-1',
        targetWord: 'Hunger',
        german: 'Ich habe großen Hunger.',
        germanWithBlank: 'Ich habe großen ___.',
        translationTR: 'Çok acıktım.',
        translationEN: 'I am very hungry.',
        glossary: {
          habe: { tr: 'var (sahip olmak)', en: 'have' },
          großen: { tr: 'büyük', en: 'great, big' },
        },
      },
    ],
  },
  {
    id: 'der-kaffee',
    word: 'der Kaffee',
    tr: 'kahve',
    sentences: [
      {
        id: 'kaffee-1',
        targetWord: 'Kaffee',
        german: 'Möchten Sie Kaffee oder Tee?',
        germanWithBlank: 'Möchten Sie ___ oder Tee?',
        translationTR: 'Kahve mi yoksa çay mı istersiniz?',
        translationEN: 'Would you like coffee or tea?',
        glossary: {
          möchten: { tr: 'ister misiniz', en: 'would like' },
          oder: { tr: 'yoksa, ya da', en: 'or' },
          tee: { tr: 'çay', en: 'tea' },
        },
      },
    ],
  },
  {
    id: 'das-kind',
    word: 'das Kind',
    tr: 'çocuk',
    sentences: [
      {
        id: 'kind-1',
        targetWord: 'Kind',
        german: 'Das Kind spielt im Park.',
        germanWithBlank: 'Das ___ spielt im Park.',
        translationTR: 'Çocuk parkta oynuyor.',
        translationEN: 'The child plays in the park.',
        glossary: {
          spielt: { tr: 'oynuyor', en: 'plays', trDict: 'oynamak' },
          park: { tr: 'park', en: 'park' },
        },
      },
    ],
  },
  {
    id: 'das-kino',
    word: 'das Kino',
    tr: 'sinema',
    sentences: [
      {
        id: 'kino-1',
        targetWord: 'Kino',
        german: 'Wir gehen heute Abend ins Kino.',
        germanWithBlank: 'Wir gehen heute Abend ins ___.',
        translationTR: 'Bu akşam sinemaya gidiyoruz.',
        translationEN: 'We are going to the cinema this evening.',
        glossary: {
          gehen: { tr: 'gitmek', en: 'to go' },
          heute: { tr: 'bugün', en: 'today' },
          abend: { tr: 'akşam', en: 'evening' },
        },
      },
    ],
  },
  {
    id: 'kochen',
    word: 'kochen',
    tr: 'pişirmek / yemek yapmak',
    sentences: [
      {
        id: 'kochen-1',
        targetWord: 'kochen',
        german: 'Meine Mutter kann sehr gut kochen.',
        germanWithBlank: 'Meine Mutter kann sehr gut ___.',
        translationTR: 'Annem çok iyi yemek yapabilir.',
        translationEN: 'My mother can cook very well.',
        glossary: {
          mutter: { tr: 'anne', en: 'mother' },
          kann: { tr: '-ebilir', en: 'can' },
          sehr: { tr: 'çok', en: 'very' },
          gut: { tr: 'iyi', en: 'good, well' },
        },
      },
    ],
  },
  {
    id: 'der-kollege',
    word: 'der Kollege',
    tr: 'meslektaş',
    sentences: [
      {
        id: 'kollege-1',
        targetWord: 'Kollege',
        german: 'Mein Kollege kommt morgen nicht zur Arbeit.',
        germanWithBlank: 'Mein ___ kommt morgen nicht zur Arbeit.',
        translationTR: 'İş arkadaşım yarın işe gelmiyor.',
        translationEN: 'My colleague is not coming to work tomorrow.',
        glossary: {
          mein: { tr: 'benim', en: 'my' },
          morgen: { tr: 'yarın', en: 'tomorrow' },
          nicht: { tr: 'değil', en: 'not' },
          arbeit: { tr: 'iş', en: 'work' },
        },
      },
    ],
  },
  {
    id: 'krank',
    word: 'krank',
    tr: 'hasta',
    sentences: [
      {
        id: 'krank-1',
        targetWord: 'krank',
        german: 'Ich bin krank und bleibe zu Hause.',
        germanWithBlank: 'Ich bin ___ und bleibe zu Hause.',
        translationTR: 'Hastayım ve evde kalıyorum.',
        translationEN: 'I am sick and staying at home.',
        glossary: {
          bin: { tr: '-im (olmak)', en: 'am', de: 'sein', trDict: 'olmak' },
          bleibe: { tr: 'kalıyorum', en: 'am staying', de: 'bleiben', trDict: 'kalmak' },
          hause: { tr: 'ev', en: 'home' },
        },
      },
    ],
  },
  {
    id: 'lernen',
    word: 'lernen',
    tr: 'öğrenmek',
    sentences: [
      {
        id: 'lernen-1',
        targetWord: 'lernen',
        german: 'Ich möchte mehr Deutsch lernen.',
        germanWithBlank: 'Ich möchte mehr Deutsch ___.',
        translationTR: 'Daha fazla Almanca öğrenmek istiyorum.',
        translationEN: 'I would like to learn more German.',
        glossary: {
          möchte: { tr: 'istiyorum', en: 'would like' },
          mehr: { tr: 'daha fazla', en: 'more' },
          deutsch: { tr: 'Almanca', en: 'German' },
        },
      },
    ],
  },
  {
    id: 'mieten',
    word: 'mieten',
    tr: 'kiralamak',
    sentences: [
      {
        id: 'mieten-1',
        targetWord: 'mieten',
        german: 'Wir möchten eine Wohnung mieten.',
        germanWithBlank: 'Wir möchten eine Wohnung ___.',
        translationTR: 'Bir daire kiralamak istiyoruz.',
        translationEN: 'We would like to rent an apartment.',
        glossary: {
          möchten: { tr: 'istiyoruz', en: 'would like', de: 'möchten', trDict: 'istemek' },
          wohnung: { tr: 'daire, konut', en: 'apartment' },
        },
      },
    ],
  },
  {
    id: 'die-milch',
    word: 'die Milch',
    tr: 'süt',
    sentences: [
      {
        id: 'milch-1',
        targetWord: 'Milch',
        german: 'Ich trinke Kaffee ohne Milch.',
        germanWithBlank: 'Ich trinke Kaffee ohne ___.',
        translationTR: 'Kahvemi sütsüz içiyorum.',
        translationEN: 'I drink coffee without milk.',
        glossary: {
          trinke: { tr: 'içiyorum', en: 'drink', de: 'trinken', trDict: 'içmek' },
          kaffee: { tr: 'kahve', en: 'coffee' },
          ohne: { tr: '-sız, -siz', en: 'without' },
        },
      },
    ],
  },
  {
    id: 'die-mutter',
    word: 'die Mutter',
    tr: 'anne',
    sentences: [
      {
        id: 'mutter-1',
        targetWord: 'Mutter',
        german: 'Meine Mutter arbeitet als Ärztin.',
        germanWithBlank: 'Meine ___ arbeitet als Ärztin.',
        translationTR: 'Annem doktor olarak çalışıyor.',
        translationEN: 'My mother works as a doctor.',
        glossary: {
          meine: { tr: 'benim', en: 'my' },
          arbeitet: { tr: 'çalışıyor', en: 'works', trDict: 'çalışmak' },
          als: { tr: 'olarak', en: 'as' },
          ärztin: { tr: 'bayan doktor', en: 'female doctor' },
        },
      },
    ],
  },
  {
    id: 'müde',
    word: 'müde',
    tr: 'yorgun',
    sentences: [
      {
        id: 'müde-1',
        targetWord: 'müde',
        german: 'Ich bin sehr müde.',
        germanWithBlank: 'Ich bin sehr ___.',
        translationTR: 'Çok yorgunum.',
        translationEN: 'I am very tired.',
        glossary: {
          bin: { tr: '-im (olmak)', en: 'am', de: 'sein', trDict: 'olmak' },
          sehr: { tr: 'çok', en: 'very' },
        },
      },
    ],
  },
  {
    id: 'neu',
    word: 'neu',
    tr: 'yeni',
    sentences: [
      {
        id: 'neu-1',
        targetWord: 'neu',
        german: 'Das Fahrrad ist ganz neu.',
        germanWithBlank: 'Das Fahrrad ist ganz ___.',
        translationTR: 'Bisiklet tamamen yeni.',
        translationEN: 'The bicycle is completely new.',
        glossary: {
          fahrrad: { tr: 'bisiklet', en: 'bicycle' },
          ist: { tr: '-dır (olmak)', en: 'is' },
          ganz: { tr: 'tamamen', en: 'completely' },
        },
      },
    ],
  },
  {
    id: 'pünktlich',
    word: 'pünktlich',
    tr: 'dakik / vaktinde',
    sentences: [
      {
        id: 'pünktlich-1',
        targetWord: 'pünktlich',
        german: 'Der Zug ist heute pünktlich.',
        germanWithBlank: 'Der Zug ist heute ___.',
        translationTR: 'Tren bugün zamanında.',
        translationEN: 'The train is on time today.',
        glossary: {
          zug: { tr: 'tren', en: 'train' },
          ist: { tr: '-dır (olmak)', en: 'is' },
          heute: { tr: 'bugün', en: 'today' },
        },
      },
    ],
  },
  {
    id: 'die-schwester',
    word: 'die Schwester',
    tr: 'kız kardeş',
    sentences: [
      {
        id: 'schwester-1',
        targetWord: 'Schwester',
        german: 'Meine Schwester lebt in Wien.',
        germanWithBlank: 'Meine ___ lebt in Wien.',
        translationTR: "Kız kardeşim Viyana'da yaşıyor.",
        translationEN: 'My sister lives in Vienna.',
        glossary: {
          meine: { tr: 'benim', en: 'my' },
          lebt: { tr: 'yaşıyor', en: 'lives', trDict: 'yaşamak' },
        },
      },
    ],
  },
  {
    id: 'die-stadt',
    word: 'die Stadt',
    tr: 'şehir',
    sentences: [
      {
        id: 'stadt-1',
        targetWord: 'Stadt',
        german: 'Ich wohne in einer kleinen Stadt.',
        germanWithBlank: 'Ich wohne in einer kleinen ___.',
        translationTR: 'Küçük bir şehirde yaşıyorum.',
        translationEN: 'I live in a small city.',
        glossary: {
          wohne: { tr: 'yaşıyorum', en: 'live' },
          kleinen: { tr: 'küçük', en: 'small' },
        },
      },
    ],
  },
  {
    id: 'telefonieren',
    word: 'telefonieren',
    tr: 'telefonla konuşmak',
    sentences: [
      {
        id: 'telefonieren-1',
        targetWord: 'telefonieren',
        german: 'Er kann jetzt nicht telefonieren.',
        germanWithBlank: 'Er kann jetzt nicht ___.',
        translationTR: 'Şu an konuşamaz.',
        translationEN: 'He cannot talk on the phone right now.',
        glossary: {
          kann: { tr: '-ebilir', en: 'can' },
          jetzt: { tr: 'şimdi', en: 'now' },
          nicht: { tr: 'değil', en: 'not' },
        },
      },
    ],
  },
  {
    id: 'teuer',
    word: 'teuer',
    tr: 'pahalı',
    sentences: [
      {
        id: 'teuer-1',
        targetWord: 'teuer',
        german: 'Das Zimmer ist zu teuer.',
        germanWithBlank: 'Das Zimmer ist zu ___.',
        translationTR: 'Oda çok pahalı.',
        translationEN: 'The room is too expensive.',
        glossary: {
          zimmer: { tr: 'oda', en: 'room' },
          ist: { tr: '-dır (olmak)', en: 'is' },
          zu: { tr: 'çok, fazla', en: 'too' },
        },
      },
    ],
  },
  {
    id: 'der-urlaub',
    word: 'der Urlaub',
    sentences: [
      {
        id: 'urlaub-1',
        targetWord: 'Urlaub',
        german: 'Im Sommer mache ich drei Wochen Urlaub.',
        germanWithBlank: 'Im Sommer mache ich drei Wochen ___.',
        translationTR: 'Yazın üç haftalık tatil yapıyorum.',
        translationEN: 'In summer I take three weeks of vacation.',
        glossary: {
          sommer: { tr: 'yaz', en: 'summer' },
          mache: { tr: 'yapıyorum', en: 'make, do' },
          drei: { tr: 'üç', en: 'three' },
          wochen: { tr: 'haftalar', en: 'weeks' },
        },
      },
    ],
  },
  {
    id: 'der-vater',
    word: 'der Vater',
    tr: 'baba',
    sentences: [
      {
        id: 'vater-1',
        targetWord: 'Vater',
        german: 'Mein Vater ist Ingenieur.',
        germanWithBlank: 'Mein ___ ist Ingenieur.',
        translationTR: 'Babam mühendis.',
        translationEN: 'My father is an engineer.',
        glossary: {
          mein: { tr: 'benim', en: 'my' },
          ist: { tr: '-dır (olmak)', en: 'is' },
          ingenieur: { tr: 'mühendis', en: 'engineer' },
        },
      },
    ],
  },
  {
    id: 'verstehen',
    word: 'verstehen',
    tr: 'anlamak',
    sentences: [
      {
        id: 'verstehen-1',
        targetWord: 'verstehen',
        german: 'Kannst du mich gut verstehen?',
        germanWithBlank: 'Kannst du mich gut ___?',
        translationTR: 'Beni iyi anlayabiliyor musun?',
        translationEN: 'Can you understand me well?',
        glossary: {
          kannst: { tr: '-ebilir misin', en: 'can you' },
          mich: { tr: 'beni', en: 'me' },
          gut: { tr: 'iyi', en: 'well' },
        },
      },
    ],
  },
  {
    id: 'warten',
    word: 'warten',
    tr: 'beklemek',
    sentences: [
      {
        id: 'warten-1',
        targetWord: 'warten',
        german: 'Ich muss hier auf den Bus warten.',
        germanWithBlank: 'Ich muss hier auf den Bus ___.',
        translationTR: 'Burada otobüsü beklemem gerekiyor.',
        translationEN: 'I have to wait here for the bus.',
        glossary: {
          muss: { tr: 'zorundayım', en: 'must' },
          hier: { tr: 'burada', en: 'here' },
          bus: { tr: 'otobüs', en: 'bus' },
        },
      },
    ],
  },
  {
    id: 'wohnen',
    word: 'wohnen',
    sentences: [
      {
        id: 'wohnen-1',
        targetWord: 'wohnen',
        german: 'Möchtest du allein wohnen?',
        germanWithBlank: 'Möchtest du allein ___?',
        translationTR: 'Yalnız yaşamak ister misin?',
        translationEN: 'Would you like to live alone?',
        glossary: {
          möchtest: { tr: 'ister misin', en: 'would you like' },
          du: { tr: 'sen', en: 'you' },
          allein: { tr: 'yalnız', en: 'alone' },
        },
      },
    ],
  },
  {
    id: 'die-wohnung',
    word: 'die Wohnung',
    sentences: [
      {
        id: 'wohnung-1',
        targetWord: 'Wohnung',
        german: 'Die Wohnung hat zwei Zimmer und eine Küche.',
        germanWithBlank: 'Die ___ hat zwei Zimmer und eine Küche.',
        translationTR: 'Dairede iki oda ve bir mutfak var.',
        translationEN: 'The apartment has two rooms and a kitchen.',
        glossary: {
          hat: { tr: 'var (sahip olmak)', en: 'has' },
          zwei: { tr: 'iki', en: 'two' },
          zimmer: { tr: 'oda', en: 'room' },
          küche: { tr: 'mutfak', en: 'kitchen' },
        },
      },
    ],
  },
  {
    id: 'die-zeit',
    word: 'die Zeit',
    tr: 'zaman / vakit',
    sentences: [
      {
        id: 'zeit-1',
        targetWord: 'Zeit',
        german: 'Haben Sie kurz Zeit für mich?',
        germanWithBlank: 'Haben Sie kurz ___ für mich?',
        translationTR: 'Benim için bir dakikanız var mı?',
        translationEN: 'Do you have a moment for me?',
        glossary: {
          haben: { tr: 'var mı (sahip olmak)', en: 'have' },
          sie: { tr: 'siz', en: 'you (formal)' },
          kurz: { tr: 'kısa, bir dakika', en: 'briefly' },
          für: { tr: 'için', en: 'for' },
        },
      },
    ],
  },
  {
    id: 'der-zug',
    word: 'der Zug',
    tr: 'tren',
    sentences: [
      {
        id: 'zug-1',
        targetWord: 'Zug',
        german: 'Der Zug fährt um neun Uhr ab.',
        germanWithBlank: 'Der ___ fährt um neun Uhr ab.',
        translationTR: 'Tren saat dokuzda kalkıyor.',
        translationEN: "The train departs at nine o'clock.",
        glossary: {
          fährt: { tr: 'gidiyor', en: 'travels', de: 'fahren', trDict: 'sürmek, götürmek' },
          neun: { tr: 'dokuz', en: 'nine' },
          uhr: { tr: 'saat', en: "o'clock" },
          ab: { tr: 'kalkmak, hareket etmek', en: 'departs' },
        },
      },
    ],
  },

  // ── Verbs ──────────────────────────────────────────────────────────────────
  {
    id: 'arbeiten',
    word: 'arbeiten',
    tr: 'çalışmak',
    sentences: [
      {
        id: 'arbeiten-1',
        targetWord: 'arbeiten',
        german: 'Ich möchte hier arbeiten.',
        germanWithBlank: 'Ich möchte hier ___.',
        translationTR: 'Burada çalışmak istiyorum.',
        translationEN: 'I would like to work here.',
        glossary: {
          möchte: { tr: 'istiyorum', en: 'would like' },
          hier: { tr: 'burada', en: 'here' },
        },
      },
    ],
  },
  {
    id: 'aufmachen',
    word: 'aufmachen',
    sentences: [
      {
        id: 'aufmachen-1',
        targetWord: 'aufmachen',
        german: 'Kannst du bitte das Fenster aufmachen?',
        germanWithBlank: 'Kannst du bitte das Fenster ___?',
        translationTR: 'Pencereyi açar mısın lütfen?',
        translationEN: 'Can you please open the window?',
        glossary: {
          kannst: { tr: '-ebilir misin', en: 'can you' },
          bitte: { tr: 'lütfen', en: 'please' },
          fenster: { tr: 'pencere', en: 'window' },
        },
      },
    ],
  },
  {
    id: 'aufräumen',
    word: 'aufräumen',
    tr: 'toplamak / düzenlemek',
    sentences: [
      {
        id: 'aufräumen-1',
        targetWord: 'aufräumen',
        german: 'Ich muss mein Zimmer aufräumen.',
        germanWithBlank: 'Ich muss mein Zimmer ___.',
        translationTR: 'Odamı toparlamam gerekiyor.',
        translationEN: 'I have to tidy up my room.',
        glossary: {
          muss: { tr: 'zorundayım', en: 'must' },
          zimmer: { tr: 'oda', en: 'room' },
        },
      },
    ],
  },
  {
    id: 'besuchen',
    word: 'besuchen',
    tr: 'ziyaret etmek',
    sentences: [
      {
        id: 'besuchen-1',
        targetWord: 'besuchen',
        german: 'Wir möchten morgen meine Eltern besuchen.',
        germanWithBlank: 'Wir möchten morgen meine Eltern ___.',
        translationTR: 'Yarın ailemi ziyaret etmek istiyoruz.',
        translationEN: 'We would like to visit my parents tomorrow.',
        glossary: {
          morgen: { tr: 'yarın', en: 'tomorrow' },
          eltern: { tr: 'ebeveynler', en: 'parents' },
        },
      },
    ],
  },
  {
    id: 'bleiben',
    word: 'bleiben',
    tr: 'kalmak',
    sentences: [
      {
        id: 'bleiben-1',
        targetWord: 'bleiben',
        german: 'Ich möchte zwei Nächte bleiben.',
        germanWithBlank: 'Ich möchte zwei Nächte ___.',
        translationTR: 'İki gece kalmak istiyorum.',
        translationEN: 'I would like to stay for two nights.',
        glossary: {
          möchte: { tr: 'istiyorum', en: 'would like' },
          zwei: { tr: 'iki', en: 'two' },
          nächte: { tr: 'geceler', en: 'nights' },
        },
      },
    ],
  },
  {
    id: 'brauchen',
    word: 'brauchen',
    tr: 'ihtiyacı olmak',
    sentences: [
      {
        id: 'brauchen-1',
        targetWord: 'brauchen',
        german: 'Ich brauche einen neuen Ausweis.',
        germanWithBlank: 'Ich ___ einen neuen Ausweis.',
        translationTR: 'Yeni bir kimliğe ihtiyacım var.',
        translationEN: 'I need a new ID card.',
        glossary: {
          neuen: { tr: 'yeni', en: 'new' },
          ausweis: { tr: 'kimlik', en: 'ID card' },
        },
      },
    ],
  },
  {
    id: 'bringen',
    word: 'bringen',
    tr: 'getirmek',
    sentences: [
      {
        id: 'bringen-1',
        targetWord: 'bringen',
        german: 'Kannst du mir das Buch bringen?',
        germanWithBlank: 'Kannst du mir das Buch ___?',
        translationTR: 'Bana kitabı getirebilir misin?',
        translationEN: 'Can you bring me the book?',
        glossary: {
          kannst: { tr: '-ebilir misin', en: 'can you' },
          mir: { tr: 'bana', en: 'me (dative)' },
          buch: { tr: 'kitap', en: 'book' },
        },
      },
    ],
  },
  {
    id: 'essen',
    word: 'essen',
    tr: 'yemek',
    sentences: [
      {
        id: 'essen-1',
        targetWord: 'essen',
        german: 'Was möchten Sie essen?',
        germanWithBlank: 'Was möchten Sie ___?',
        translationTR: 'Ne yemek istersiniz?',
        translationEN: 'What would you like to eat?',
        glossary: {
          was: { tr: 'ne', en: 'what' },
          möchten: { tr: 'ister misiniz', en: 'would like' },
          sie: { tr: 'siz', en: 'you (formal)' },
        },
      },
    ],
  },
  {
    id: 'finden',
    word: 'finden',
    tr: 'bulmak / düşünmek (fikir)',
    sentences: [
      {
        id: 'finden-1',
        targetWord: 'finden',
        german: 'Ich kann meinen Schlüssel nicht finden.',
        germanWithBlank: 'Ich kann meinen Schlüssel nicht ___.',
        translationTR: 'Anahtarımı bulamıyorum.',
        translationEN: 'I cannot find my key.',
        glossary: {
          kann: { tr: '-ebiliyorum', en: 'can' },
          meinen: { tr: 'benim', en: 'my' },
          schlüssel: { tr: 'anahtar', en: 'key' },
          nicht: { tr: 'değil', en: 'not' },
        },
      },
    ],
  },
  {
    id: 'fragen',
    word: 'fragen',
    tr: 'sormak',
    sentences: [
      {
        id: 'fragen-1',
        targetWord: 'fragen',
        german: 'Darf ich Sie etwas fragen?',
        germanWithBlank: 'Darf ich Sie etwas ___?',
        translationTR: 'Size bir şey sorabilir miyim?',
        translationEN: 'May I ask you something?',
        glossary: {
          darf: { tr: '-ebilir miyim', en: 'may I' },
          sie: { tr: 'sizi', en: 'you (formal)' },
          etwas: { tr: 'bir şey', en: 'something' },
        },
      },
    ],
  },
  {
    id: 'kaufen',
    word: 'kaufen',
    tr: 'satın almak',
    sentences: [
      {
        id: 'kaufen-1',
        targetWord: 'kaufen',
        german: 'Ich möchte ein Ticket kaufen.',
        germanWithBlank: 'Ich möchte ein Ticket ___.',
        translationTR: 'Bir bilet satın almak istiyorum.',
        translationEN: 'I would like to buy a ticket.',
        glossary: {
          möchte: { tr: 'istiyorum', en: 'would like' },
          ticket: { tr: 'bilet', en: 'ticket' },
        },
      },
    ],
  },
  {
    id: 'kommen',
    word: 'kommen',
    tr: 'gelmek',
    sentences: [
      {
        id: 'kommen-1',
        targetWord: 'kommen',
        german: 'Wann können Sie kommen?',
        germanWithBlank: 'Wann können Sie ___?',
        translationTR: 'Ne zaman gelebilirsiniz?',
        translationEN: 'When can you come?',
        glossary: {
          wann: { tr: 'ne zaman', en: 'when' },
          können: { tr: '-ebilir misiniz', en: 'can' },
          sie: { tr: 'siz', en: 'you (formal)' },
        },
      },
    ],
  },
  {
    id: 'kosten',
    word: 'kosten',
    tr: 'masraflar / giderler',
    sentences: [
      {
        id: 'kosten-1',
        targetWord: 'kostet',
        german: 'Was kostet das Zimmer pro Nacht?',
        germanWithBlank: 'Was ___ das Zimmer pro Nacht?',
        translationTR: 'Oda gecelik ne kadar?',
        translationEN: 'How much does the room cost per night?',
        glossary: {
          was: { tr: 'ne kadar, ne', en: 'what, how much' },
          zimmer: { tr: 'oda', en: 'room' },
          nacht: { tr: 'gece', en: 'night' },
        },
      },
    ],
  },
  {
    id: 'laufen',
    word: 'laufen',
    tr: 'koşmak / yürümek / işlemek',
    sentences: [
      {
        id: 'laufen-1',
        targetWord: 'laufen',
        german: 'Wir müssen schnell laufen.',
        germanWithBlank: 'Wir müssen schnell ___.',
        translationTR: 'Hızlı koşmamız gerekiyor.',
        translationEN: 'We have to run fast.',
        glossary: {
          müssen: { tr: 'zorunda olmak', en: 'must' },
          schnell: { tr: 'hızlı', en: 'fast' },
        },
      },
    ],
  },
  {
    id: 'lesen',
    word: 'lesen',
    tr: 'okumak',
    sentences: [
      {
        id: 'lesen-1',
        targetWord: 'lesen',
        german: 'Ich möchte die Zeitung lesen.',
        germanWithBlank: 'Ich möchte die Zeitung ___.',
        translationTR: 'Gazeteyi okumak istiyorum.',
        translationEN: 'I would like to read the newspaper.',
        glossary: {
          möchte: { tr: 'istiyorum', en: 'would like' },
          zeitung: { tr: 'gazete', en: 'newspaper' },
        },
      },
    ],
  },
  {
    id: 'machen',
    word: 'machen',
    tr: 'yapmak',
    sentences: [
      {
        id: 'machen-1',
        targetWord: 'machen',
        german: 'Was möchtest du am Wochenende machen?',
        germanWithBlank: 'Was möchtest du am Wochenende ___?',
        translationTR: 'Hafta sonu ne yapmak istiyorsun?',
        translationEN: 'What would you like to do at the weekend?',
        glossary: {
          was: { tr: 'ne', en: 'what' },
          wochenende: { tr: 'hafta sonu', en: 'weekend' },
        },
      },
    ],
  },
  {
    id: 'nehmen',
    word: 'nehmen',
    tr: 'almak',
    sentences: [
      {
        id: 'nehmen-1',
        targetWord: 'nehmen',
        german: 'Soll ich das Taxi nehmen?',
        germanWithBlank: 'Soll ich das Taxi ___?',
        translationTR: 'Taksiyle mi gideyim?',
        translationEN: 'Should I take the taxi?',
        glossary: {
          soll: { tr: '-meli miyim', en: 'should' },
          taxi: { tr: 'taksi', en: 'taxi' },
        },
      },
    ],
  },
  {
    id: 'öffnen',
    word: 'öffnen',
    tr: 'açmak',
    sentences: [
      {
        id: 'öffnen-1',
        targetWord: 'öffnen',
        german: 'Wann beginnt das Geschäft zu öffnen?',
        germanWithBlank: 'Kann ich das Fenster ___?',
        translationTR: 'Pencereyi açabilir miyim?',
        translationEN: 'Can I open the window?',
        glossary: {
          kann: { tr: '-ebilir miyim', en: 'can I' },
          fenster: { tr: 'pencere', en: 'window' },
        },
      },
    ],
  },
  {
    id: 'schlafen',
    word: 'schlafen',
    tr: 'uyumak',
    sentences: [
      {
        id: 'schlafen-1',
        targetWord: 'schlafen',
        german: 'Kinder müssen viel schlafen.',
        germanWithBlank: 'Kinder müssen viel ___.',
        translationTR: 'Çocukların çok uyuması gerekir.',
        translationEN: 'Children need to sleep a lot.',
        glossary: {
          kinder: { tr: 'çocuklar', en: 'children' },
          müssen: { tr: 'zorunda olmak', en: 'must' },
          viel: { tr: 'çok', en: 'a lot' },
        },
      },
    ],
  },
  {
    id: 'schreiben',
    word: 'schreiben',
    tr: 'yazmak',
    sentences: [
      {
        id: 'schreiben-1',
        targetWord: 'schreiben',
        german: 'Ich möchte eine E-Mail schreiben.',
        germanWithBlank: 'Ich möchte eine E-Mail ___.',
        translationTR: 'Bir e-posta yazmak istiyorum.',
        translationEN: 'I would like to write an email.',
        glossary: {
          möchte: { tr: 'istiyorum', en: 'would like' },
          mail: { tr: 'e-posta', en: 'email' },
        },
      },
    ],
  },
  {
    id: 'sehen',
    word: 'sehen',
    tr: 'görmek',
    sentences: [
      {
        id: 'sehen-1',
        targetWord: 'sehen',
        german: 'Ich kann Sie morgen sehen.',
        germanWithBlank: 'Ich kann Sie morgen ___.',
        translationTR: 'Sizi yarın görebilirim.',
        translationEN: 'I can see you tomorrow.',
        glossary: {
          kann: { tr: '-ebilirim', en: 'can' },
          morgen: { tr: 'yarın', en: 'tomorrow' },
        },
      },
    ],
  },
  {
    id: 'sein',
    word: 'sein',
    sentences: [
      {
        id: 'sein-1',
        targetWord: 'sein',
        german: 'Das kann nicht sein.',
        germanWithBlank: 'Das kann nicht ___.',
        translationTR: 'Bu olamaz.',
        translationEN: 'That cannot be.',
        glossary: {
          das: { tr: 'bu, o', en: 'that' },
          kann: { tr: '-ebilir', en: 'can' },
          nicht: { tr: 'değil', en: 'not' },
        },
      },
    ],
  },
  {
    id: 'spielen',
    word: 'spielen',
    tr: 'oynamak / çalmak',
    sentences: [
      {
        id: 'spielen-1',
        targetWord: 'spielen',
        german: 'Ich möchte Tennis spielen.',
        germanWithBlank: 'Ich möchte Tennis ___.',
        translationTR: 'Tenis oynamak istiyorum.',
        translationEN: 'I would like to play tennis.',
        glossary: {
          möchte: { tr: 'istiyorum', en: 'would like' },
          tennis: { tr: 'tenis', en: 'tennis' },
        },
      },
    ],
  },
  {
    id: 'sprechen',
    word: 'sprechen',
    sentences: [
      {
        id: 'sprechen-1',
        targetWord: 'Sprechen',
        german: 'Sprechen Sie Deutsch?',
        germanWithBlank: '___ Sie Deutsch?',
        translationTR: 'Almanca konuşuyor musunuz?',
        translationEN: 'Do you speak German?',
        glossary: {
          sie: { tr: 'siz', en: 'you (formal)' },
          deutsch: { tr: 'Almanca', en: 'German' },
        },
      },
    ],
  },
  {
    id: 'suchen',
    word: 'suchen',
    tr: 'aramak',
    sentences: [
      {
        id: 'suchen-1',
        targetWord: 'suchen',
        german: 'Wir suchen eine günstige Wohnung.',
        germanWithBlank: 'Wir ___ eine günstige Wohnung.',
        translationTR: 'Uygun fiyatlı bir daire arıyoruz.',
        translationEN: 'We are looking for an affordable apartment.',
        glossary: {
          günstige: { tr: 'uygun fiyatlı', en: 'affordable' },
          wohnung: { tr: 'daire', en: 'apartment' },
        },
      },
    ],
  },
  {
    id: 'trinken',
    word: 'trinken',
    tr: 'içmek',
    sentences: [
      {
        id: 'trinken-1',
        targetWord: 'trinken',
        german: 'Was möchten Sie trinken?',
        germanWithBlank: 'Was möchten Sie ___?',
        translationTR: 'Ne içmek istersiniz?',
        translationEN: 'What would you like to drink?',
        glossary: {
          was: { tr: 'ne', en: 'what' },
          möchten: { tr: 'ister misiniz', en: 'would like' },
        },
      },
    ],
  },
  {
    id: 'wissen',
    word: 'wissen',
    tr: 'bilgi',
    sentences: [
      {
        id: 'wissen-1',
        targetWord: 'wissen',
        german: 'Ich möchte wissen, wann der Zug kommt.',
        germanWithBlank: 'Ich möchte ___, wann der Zug kommt.',
        translationTR: 'Trenin ne zaman geleceğini öğrenmek istiyorum.',
        translationEN: 'I would like to know when the train comes.',
        glossary: {
          möchte: { tr: 'istiyorum', en: 'would like' },
          wann: { tr: 'ne zaman', en: 'when' },
          zug: { tr: 'tren', en: 'train' },
        },
      },
    ],
  },
  {
    id: 'wollen',
    word: 'wollen',
    sentences: [
      {
        id: 'wollen-1',
        targetWord: 'wollen',
        german: 'Was wollen Sie bestellen?',
        germanWithBlank: 'Was ___ Sie bestellen?',
        translationTR: 'Ne sipariş etmek istiyorsunuz?',
        translationEN: 'What do you want to order?',
        glossary: {
          was: { tr: 'ne', en: 'what' },
          sie: { tr: 'siz', en: 'you (formal)' },
          bestellen: { tr: 'sipariş etmek', en: 'to order' },
        },
      },
    ],
  },
  {
    id: 'zahlen',
    word: 'zahlen',
    tr: 'ödemek',
    sentences: [
      {
        id: 'zahlen-1',
        targetWord: 'zahlen',
        german: 'Ich möchte zahlen, bitte.',
        germanWithBlank: 'Ich möchte ___, bitte.',
        translationTR: 'Hesabı ödemek istiyorum, lütfen.',
        translationEN: 'I would like to pay, please.',
        glossary: {
          möchte: { tr: 'istiyorum', en: 'would like' },
          bitte: { tr: 'lütfen', en: 'please' },
        },
      },
    ],
  },
  {
    id: 'zeigen',
    word: 'zeigen',
    tr: 'göstermek',
    sentences: [
      {
        id: 'zeigen-1',
        targetWord: 'zeigen',
        german: 'Können Sie mir den Weg zeigen?',
        germanWithBlank: 'Können Sie mir den Weg ___?',
        translationTR: 'Bana yolu gösterebilir misiniz?',
        translationEN: 'Can you show me the way?',
        glossary: {
          können: { tr: '-ebilir misiniz', en: 'can' },
          mir: { tr: 'bana', en: 'me (dative)' },
          weg: { tr: 'yol', en: 'way' },
        },
      },
    ],
  },

  // ── Nouns ─────────────────────────────────────────────────────────────────
  {
    id: 'der-abend',
    word: 'der Abend',
    sentences: [
      {
        id: 'abend-1',
        targetWord: 'Abend',
        german: 'Am Abend gehe ich spazieren.',
        germanWithBlank: 'Am ___ gehe ich spazieren.',
        translationTR: 'Akşamları yürüyüşe çıkıyorum.',
        translationEN: 'In the evening I go for a walk.',
        glossary: {
          gehe: { tr: 'gidiyorum', en: 'go', de: 'gehen', trDict: 'gitmek' },
          spazieren: { tr: 'yürüyüş', en: 'for a walk' },
        },
      },
    ],
  },
  {
    id: 'die-antwort',
    word: 'die Antwort',
    tr: 'cevap',
    sentences: [
      {
        id: 'antwort-1',
        targetWord: 'Antwort',
        german: 'Ich kenne die Antwort nicht.',
        germanWithBlank: 'Ich kenne die ___ nicht.',
        translationTR: 'Cevabı bilmiyorum.',
        translationEN: 'I do not know the answer.',
        glossary: {
          kenne: { tr: 'biliyorum', en: 'know', de: 'kennen', trDict: 'tanımak' },
          nicht: { tr: 'değil', en: 'not' },
        },
      },
    ],
  },
  {
    id: 'die-apotheke',
    word: 'die Apotheke',
    tr: 'eczane',
    sentences: [
      {
        id: 'apotheke-1',
        targetWord: 'Apotheke',
        german: 'Die Apotheke ist gleich um die Ecke.',
        germanWithBlank: 'Die ___ ist gleich um die Ecke.',
        translationTR: 'Eczane hemen köşede.',
        translationEN: 'The pharmacy is just around the corner.',
        glossary: {
          gleich: { tr: 'hemen', en: 'just' },
          ecke: { tr: 'köşe', en: 'corner' },
        },
      },
    ],
  },
  {
    id: 'die-arbeit',
    word: 'die Arbeit',
    tr: 'iş',
    sentences: [
      {
        id: 'arbeit-1',
        targetWord: 'Arbeit',
        german: 'Ich fahre jeden Tag zur Arbeit.',
        germanWithBlank: 'Ich fahre jeden Tag zur ___.',
        translationTR: 'Her gün işe gidiyorum.',
        translationEN: 'I go to work every day.',
        glossary: {
          fahre: { tr: 'gidiyorum', en: 'go (by vehicle)', de: 'fahren', trDict: 'sürmek, götürmek' },
          jeden: { tr: 'her', en: 'every' },
          tag: { tr: 'gün', en: 'day' },
        },
      },
    ],
  },
  {
    id: 'das-auto',
    word: 'das Auto',
    tr: 'araba',
    sentences: [
      {
        id: 'auto-1',
        targetWord: 'Auto',
        german: 'Mein Auto ist kaputt.',
        germanWithBlank: 'Mein ___ ist kaputt.',
        translationTR: 'Arabam bozuk.',
        translationEN: 'My car is broken.',
        glossary: {
          mein: { tr: 'benim', en: 'my' },
          kaputt: { tr: 'bozuk', en: 'broken' },
        },
      },
    ],
  },
  {
    id: 'die-bäckerei',
    word: 'die Bäckerei',
    tr: 'fırın',
    sentences: [
      {
        id: 'bäckerei-1',
        targetWord: 'Bäckerei',
        german: 'Die Bäckerei öffnet um sieben Uhr.',
        germanWithBlank: 'Die ___ öffnet um sieben Uhr.',
        translationTR: 'Fırın saat yedide açılıyor.',
        translationEN: 'The bakery opens at seven o\'clock.',
        glossary: {
          öffnet: { tr: 'açılıyor', en: 'opens', trDict: 'açmak' },
          sieben: { tr: 'yedi', en: 'seven' },
          uhr: { tr: 'saat', en: "o'clock" },
        },
      },
    ],
  },
  {
    id: 'der-berg',
    word: 'der Berg',
    tr: 'dağ',
    sentences: [
      {
        id: 'berg-1',
        targetWord: 'Berg',
        german: 'Der Berg ist sehr hoch.',
        germanWithBlank: 'Der ___ ist sehr hoch.',
        translationTR: 'Dağ çok yüksek.',
        translationEN: 'The mountain is very high.',
        glossary: {
          sehr: { tr: 'çok', en: 'very' },
          hoch: { tr: 'yüksek', en: 'high' },
        },
      },
    ],
  },
  {
    id: 'die-blume',
    word: 'die Blume',
    tr: 'çiçek',
    sentences: [
      {
        id: 'blume-1',
        targetWord: 'Blume',
        german: 'Die Blume ist sehr schön.',
        germanWithBlank: 'Die ___ ist sehr schön.',
        translationTR: 'Çiçek çok güzel.',
        translationEN: 'The flower is very beautiful.',
        glossary: {
          sehr: { tr: 'çok', en: 'very' },
          schön: { tr: 'güzel', en: 'beautiful' },
        },
      },
    ],
  },
  {
    id: 'das-brötchen',
    word: 'das Brötchen',
    tr: 'sandviç ekmeği',
    sentences: [
      {
        id: 'brötchen-1',
        targetWord: 'Brötchen',
        german: 'Zum Frühstück esse ich ein Brötchen.',
        germanWithBlank: 'Zum Frühstück esse ich ein ___.',
        translationTR: 'Kahvaltıda bir ekmek yiyorum.',
        translationEN: 'For breakfast I eat a bread roll.',
        glossary: {
          frühstück: { tr: 'kahvaltı', en: 'breakfast' },
          esse: { tr: 'yiyorum', en: 'eat', de: 'essen', trDict: 'yemek' },
        },
      },
    ],
  },
  {
    id: 'der-bruder',
    word: 'der Bruder',
    tr: 'erkek kardeş',
    sentences: [
      {
        id: 'bruder-1',
        targetWord: 'Bruder',
        german: 'Mein Bruder wohnt in Hamburg.',
        germanWithBlank: 'Mein ___ wohnt in Hamburg.',
        translationTR: 'Erkek kardeşim Hamburg\'da yaşıyor.',
        translationEN: 'My brother lives in Hamburg.',
        glossary: {
          mein: { tr: 'benim', en: 'my' },
          wohnt: { tr: 'yaşıyor', en: 'lives', trDict: 'yaşamak' },
        },
      },
    ],
  },
  {
    id: 'die-butter',
    word: 'die Butter',
    sentences: [
      {
        id: 'butter-1',
        targetWord: 'Butter',
        german: 'Ich brauche Butter für den Kuchen.',
        germanWithBlank: 'Ich brauche ___ für den Kuchen.',
        translationTR: 'Pasta için tereyağına ihtiyacım var.',
        translationEN: 'I need butter for the cake.',
        glossary: {
          brauche: { tr: 'ihtiyacım var', en: 'need' },
          kuchen: { tr: 'pasta', en: 'cake' },
        },
      },
    ],
  },
  {
    id: 'das-datum',
    word: 'das Datum',
    tr: 'tarih',
    sentences: [
      {
        id: 'datum-1',
        targetWord: 'Datum',
        german: 'Was ist heute das Datum?',
        germanWithBlank: 'Was ist heute das ___?',
        translationTR: 'Bugün tarih kaç?',
        translationEN: 'What is today\'s date?',
        glossary: {
          was: { tr: 'ne', en: 'what' },
          heute: { tr: 'bugün', en: 'today' },
        },
      },
    ],
  },
  {
    id: 'der-durst',
    word: 'der Durst',
    tr: 'susuzluk',
    sentences: [
      {
        id: 'durst-1',
        targetWord: 'Durst',
        german: 'Ich habe großen Durst.',
        germanWithBlank: 'Ich habe großen ___.',
        translationTR: 'Çok susamdım.',
        translationEN: 'I am very thirsty.',
        glossary: {
          habe: { tr: 'var (sahip olmak)', en: 'have' },
          großen: { tr: 'büyük', en: 'great, big' },
        },
      },
    ],
  },
  {
    id: 'die-dusche',
    word: 'die Dusche',
    tr: 'duş',
    sentences: [
      {
        id: 'dusche-1',
        targetWord: 'Dusche',
        german: 'Das Zimmer hat eine Dusche.',
        germanWithBlank: 'Das Zimmer hat eine ___.',
        translationTR: 'Odada duş var.',
        translationEN: 'The room has a shower.',
        glossary: {
          zimmer: { tr: 'oda', en: 'room' },
          hat: { tr: 'var (sahip olmak)', en: 'has' },
        },
      },
    ],
  },
  {
    id: 'die-eltern',
    word: 'die Eltern',
    tr: 'ebeveyn (anne-baba)',
    sentences: [
      {
        id: 'eltern-1',
        targetWord: 'Eltern',
        german: 'Meine Eltern wohnen in der Türkei.',
        germanWithBlank: 'Meine ___ wohnen in der Türkei.',
        translationTR: 'Ailem Türkiye\'de yaşıyor.',
        translationEN: 'My parents live in Turkey.',
        glossary: {
          meine: { tr: 'benim', en: 'my' },
          wohnen: { tr: 'yaşamak', en: 'live' },
        },
      },
    ],
  },
  {
    id: 'die-erkältung',
    word: 'die Erkältung',
    tr: 'soğuk algınlığı',
    sentences: [
      {
        id: 'erkältung-1',
        targetWord: 'Erkältung',
        german: 'Ich habe eine Erkältung.',
        germanWithBlank: 'Ich habe eine ___.',
        translationTR: 'Nezlem var.',
        translationEN: 'I have a cold.',
        glossary: {
          habe: { tr: 'var (sahip olmak)', en: 'have' },
        },
      },
    ],
  },
  {
    id: 'die-fahrkarte',
    word: 'die Fahrkarte',
    tr: 'bilet (yolculuk)',
    sentences: [
      {
        id: 'fahrkarte-1',
        targetWord: 'Fahrkarte',
        german: 'Ich möchte eine Fahrkarte nach Berlin.',
        germanWithBlank: 'Ich möchte eine ___ nach Berlin.',
        translationTR: 'Berlin\'e bir bilet istiyorum.',
        translationEN: 'I would like a ticket to Berlin.',
        glossary: {
          möchte: { tr: 'istiyorum', en: 'would like' },
          nach: { tr: '-e, -a', en: 'to' },
        },
      },
    ],
  },
  {
    id: 'das-fahrrad',
    word: 'das Fahrrad',
    tr: 'bisiklet',
    sentences: [
      {
        id: 'fahrrad-1',
        targetWord: 'Fahrrad',
        german: 'Ich fahre mit dem Fahrrad zur Arbeit.',
        germanWithBlank: 'Ich fahre mit dem ___ zur Arbeit.',
        translationTR: 'İşe bisikletle gidiyorum.',
        translationEN: 'I cycle to work.',
        glossary: {
          fahre: { tr: 'gidiyorum', en: 'go (by vehicle)', de: 'fahren', trDict: 'sürmek, götürmek' },
          mit: { tr: 'ile', en: 'with, by' },
          arbeit: { tr: 'iş', en: 'work' },
        },
      },
    ],
  },
  {
    id: 'die-farbe',
    word: 'die Farbe',
    tr: 'renk',
    sentences: [
      {
        id: 'farbe-1',
        targetWord: 'Farbe',
        german: 'Welche Farbe hat das Auto?',
        germanWithBlank: 'Welche ___ hat das Auto?',
        translationTR: 'Arabanın rengi ne?',
        translationEN: 'What colour is the car?',
        glossary: {
          welche: { tr: 'hangi', en: 'which' },
          hat: { tr: 'var (sahip olmak)', en: 'has' },
          auto: { tr: 'araba', en: 'car' },
        },
      },
    ],
  },
  {
    id: 'das-fenster',
    word: 'das Fenster',
    tr: 'pencere',
    sentences: [
      {
        id: 'fenster-1',
        targetWord: 'Fenster',
        german: 'Bitte mach das Fenster zu.',
        germanWithBlank: 'Bitte mach das ___ zu.',
        translationTR: 'Lütfen pencereyi kapat.',
        translationEN: 'Please close the window.',
        glossary: {
          bitte: { tr: 'lütfen', en: 'please' },
          mach: { tr: 'yap, kapat', en: 'do, close', de: 'machen', trDict: 'yapmak' },
          zu: { tr: 'kapalı', en: 'closed' },
        },
      },
    ],
  },
  {
    id: 'der-fisch',
    word: 'der Fisch',
    sentences: [
      {
        id: 'fisch-1',
        targetWord: 'Fisch',
        german: 'Ich esse gern Fisch.',
        germanWithBlank: 'Ich esse gern ___.',
        translationTR: 'Balık yemeyi severim.',
        translationEN: 'I like eating fish.',
        glossary: {
          esse: { tr: 'yiyorum', en: 'eat', de: 'essen', trDict: 'yemek' },
          gern: { tr: 'severek, isteyerek', en: 'gladly, like to' },
        },
      },
    ],
  },
  {
    id: 'das-fleisch',
    word: 'das Fleisch',
    tr: 'et',
    sentences: [
      {
        id: 'fleisch-1',
        targetWord: 'Fleisch',
        german: 'Er isst kein Fleisch.',
        germanWithBlank: 'Er isst kein ___.',
        translationTR: 'Et yemiyor.',
        translationEN: 'He does not eat meat.',
        glossary: {
          isst: { tr: 'yiyor', en: 'eats', de: 'essen', trDict: 'yemek' },
          kein: { tr: 'hiç yok', en: 'no, none' },
        },
      },
    ],
  },
  {
    id: 'die-frau',
    word: 'die Frau',
    tr: 'kadın / eş / hanım',
    sentences: [
      {
        id: 'frau-1',
        targetWord: 'Frau',
        german: 'Die Frau wartet am Bahnhof.',
        germanWithBlank: 'Die ___ wartet am Bahnhof.',
        translationTR: 'Kadın tren istasyonunda bekliyor.',
        translationEN: 'The woman is waiting at the station.',
        glossary: {
          wartet: { tr: 'bekliyor', en: 'waits', de: 'warten', trDict: 'beklemek' },
          bahnhof: { tr: 'tren istasyonu', en: 'train station' },
        },
      },
    ],
  },
  {
    id: 'die-freizeit',
    word: 'die Freizeit',
    tr: 'boş zaman',
    sentences: [
      {
        id: 'freizeit-1',
        targetWord: 'Freizeit',
        german: 'In meiner Freizeit lese ich gern.',
        germanWithBlank: 'In meiner ___ lese ich gern.',
        translationTR: 'Boş zamanlarımda okumayı severim.',
        translationEN: 'In my free time I like to read.',
        glossary: {
          meiner: { tr: 'benim', en: 'my' },
          lese: { tr: 'okuyorum', en: 'read', de: 'lesen', trDict: 'okumak' },
          gern: { tr: 'severek', en: 'gladly' },
        },
      },
    ],
  },
  {
    id: 'das-glas',
    word: 'das Glas',
    tr: 'bardak / cam',
    sentences: [
      {
        id: 'glas-1',
        targetWord: 'Glas',
        german: 'Ein Glas Wasser, bitte.',
        germanWithBlank: 'Ein ___ Wasser, bitte.',
        translationTR: 'Bir bardak su, lütfen.',
        translationEN: 'A glass of water, please.',
        glossary: {
          wasser: { tr: 'su', en: 'water' },
          bitte: { tr: 'lütfen', en: 'please' },
        },
      },
    ],
  },
  {
    id: 'das-haus',
    word: 'das Haus',
    tr: 'ev',
    sentences: [
      {
        id: 'haus-1',
        targetWord: 'Haus',
        german: 'Das Haus hat einen großen Garten.',
        germanWithBlank: 'Das ___ hat einen großen Garten.',
        translationTR: 'Evin büyük bir bahçesi var.',
        translationEN: 'The house has a large garden.',
        glossary: {
          hat: { tr: 'var (sahip olmak)', en: 'has' },
          großen: { tr: 'büyük', en: 'large' },
          garten: { tr: 'bahçe', en: 'garden' },
        },
      },
    ],
  },
  {
    id: 'das-jahr',
    word: 'das Jahr',
    tr: 'yıl / sene',
    sentences: [
      {
        id: 'jahr-1',
        targetWord: 'Jahr',
        german: 'Ich lerne seit einem Jahr Deutsch.',
        germanWithBlank: 'Ich lerne seit einem ___ Deutsch.',
        translationTR: 'Bir yıldır Almanca öğreniyorum.',
        translationEN: 'I have been learning German for a year.',
        glossary: {
          lerne: { tr: 'öğreniyorum', en: 'learn', de: 'lernen', trDict: 'öğrenmek' },
          seit: { tr: '-den beri', en: 'since, for' },
          deutsch: { tr: 'Almanca', en: 'German' },
        },
      },
    ],
  },
  {
    id: 'die-jacke',
    word: 'die Jacke',
    tr: 'ceket',
    sentences: [
      {
        id: 'jacke-1',
        targetWord: 'Jacke',
        german: 'Ich brauche eine warme Jacke.',
        germanWithBlank: 'Ich brauche eine warme ___.',
        translationTR: 'Sıcak bir cekete ihtiyacım var.',
        translationEN: 'I need a warm jacket.',
        glossary: {
          brauche: { tr: 'ihtiyacım var', en: 'need' },
          warme: { tr: 'sıcak', en: 'warm' },
        },
      },
    ],
  },
  {
    id: 'die-kasse',
    word: 'die Kasse',
    tr: 'kasa',
    sentences: [
      {
        id: 'kasse-1',
        targetWord: 'Kasse',
        german: 'Bitte bezahlen Sie an der Kasse.',
        germanWithBlank: 'Bitte bezahlen Sie an der ___.',
        translationTR: 'Lütfen kasada ödeyin.',
        translationEN: 'Please pay at the cash desk.',
        glossary: {
          bitte: { tr: 'lütfen', en: 'please' },
          bezahlen: { tr: 'ödemek', en: 'to pay' },
          sie: { tr: 'siz', en: 'you (formal)' },
        },
      },
    ],
  },
  {
    id: 'die-kirche',
    word: 'die Kirche',
    tr: 'kilise',
    sentences: [
      {
        id: 'kirche-1',
        targetWord: 'Kirche',
        german: 'Die Kirche liegt in der Stadtmitte.',
        germanWithBlank: 'Die ___ liegt in der Stadtmitte.',
        translationTR: 'Kilise şehir merkezinde.',
        translationEN: 'The church is in the city centre.',
        glossary: {
          liegt: { tr: 'bulunuyor', en: 'is located', de: 'liegen', trDict: 'yer almak' },
          stadtmitte: { tr: 'şehir merkezi', en: 'city centre' },
        },
      },
    ],
  },
  {
    id: 'die-küche',
    word: 'die Küche',
    tr: 'mutfak',
    sentences: [
      {
        id: 'küche-1',
        targetWord: 'Küche',
        german: 'Die Küche ist sehr groß.',
        germanWithBlank: 'Die ___ ist sehr groß.',
        translationTR: 'Mutfak çok büyük.',
        translationEN: 'The kitchen is very large.',
        glossary: {
          sehr: { tr: 'çok', en: 'very' },
          groß: { tr: 'büyük', en: 'large' },
        },
      },
    ],
  },
  {
    id: 'das-land',
    word: 'das Land',
    tr: 'ülke / memleket / köy',
    sentences: [
      {
        id: 'land-1',
        targetWord: 'Land',
        german: 'Deutschland ist ein schönes Land.',
        germanWithBlank: 'Deutschland ist ein schönes ___.',
        translationTR: 'Almanya güzel bir ülkedir.',
        translationEN: 'Germany is a beautiful country.',
        glossary: {
          schönes: { tr: 'güzel', en: 'beautiful' },
        },
      },
    ],
  },
  {
    id: 'die-leute',
    word: 'die Leute',
    tr: 'insanlar',
    sentences: [
      {
        id: 'leute-1',
        targetWord: 'Leute',
        german: 'Viele Leute fahren mit dem Bus.',
        germanWithBlank: 'Viele ___ fahren mit dem Bus.',
        translationTR: 'Pek çok insan otobüsle gidiyor.',
        translationEN: 'Many people travel by bus.',
        glossary: {
          viele: { tr: 'pek çok', en: 'many' },
          fahren: { tr: 'gidiyorlar', en: 'travel', trDict: 'sürmek, götürmek' },
          bus: { tr: 'otobüs', en: 'bus' },
        },
      },
    ],
  },
  {
    id: 'der-mann',
    word: 'der Mann',
    tr: 'adam / erkek / eş (koca)',
    sentences: [
      {
        id: 'mann-1',
        targetWord: 'Mann',
        german: 'Der Mann trägt eine blaue Jacke.',
        germanWithBlank: 'Der ___ trägt eine blaue Jacke.',
        translationTR: 'Adam mavi bir ceket giyiyor.',
        translationEN: 'The man is wearing a blue jacket.',
        glossary: {
          trägt: { tr: 'giyiyor, taşıyor', en: 'wears, carries', de: 'tragen', trDict: 'taşımak/giymek' },
          blaue: { tr: 'mavi', en: 'blue' },
          jacke: { tr: 'ceket', en: 'jacket' },
        },
      },
    ],
  },
  {
    id: 'der-markt',
    word: 'der Markt',
    tr: 'pazar',
    sentences: [
      {
        id: 'markt-1',
        targetWord: 'Markt',
        german: 'Am Samstag gehe ich auf den Markt.',
        germanWithBlank: 'Am Samstag gehe ich auf den ___.',
        translationTR: 'Cumartesi günleri pazara gidiyorum.',
        translationEN: 'On Saturdays I go to the market.',
        glossary: {
          samstag: { tr: 'cumartesi', en: 'Saturday' },
          gehe: { tr: 'gidiyorum', en: 'go', de: 'gehen', trDict: 'gitmek' },
        },
      },
    ],
  },
  {
    id: 'die-minute',
    word: 'die Minute',
    sentences: [
      {
        id: 'minute-1',
        targetWord: 'Minute',
        german: 'Bitte warten Sie eine Minute.',
        germanWithBlank: 'Bitte warten Sie eine ___.',
        translationTR: 'Lütfen bir dakika bekleyin.',
        translationEN: 'Please wait one minute.',
        glossary: {
          bitte: { tr: 'lütfen', en: 'please' },
          warten: { tr: 'beklemek', en: 'to wait' },
          sie: { tr: 'siz', en: 'you (formal)' },
        },
      },
    ],
  },
  {
    id: 'der-monat',
    word: 'der Monat',
    sentences: [
      {
        id: 'monat-1',
        targetWord: 'Monat',
        german: 'Ein Monat hat dreißig Tage.',
        germanWithBlank: 'Ein ___ hat dreißig Tage.',
        translationTR: 'Bir ayın otuz günü vardır.',
        translationEN: 'A month has thirty days.',
        glossary: {
          hat: { tr: 'var (sahip olmak)', en: 'has' },
          dreißig: { tr: 'otuz', en: 'thirty' },
          tage: { tr: 'günler', en: 'days' },
        },
      },
    ],
  },
  {
    id: 'der-morgen',
    word: 'der Morgen',
    sentences: [
      {
        id: 'morgen-1',
        targetWord: 'Morgen',
        german: 'Guten Morgen!',
        germanWithBlank: 'Guten ___!',
        translationTR: 'Günaydın!',
        translationEN: 'Good morning!',
        glossary: {
          guten: { tr: 'iyi', en: 'good' },
        },
      },
    ],
  },
  {
    id: 'die-nacht',
    word: 'die Nacht',
    sentences: [
      {
        id: 'nacht-1',
        targetWord: 'Nacht',
        german: 'Gute Nacht!',
        germanWithBlank: 'Gute ___!',
        translationTR: 'İyi geceler!',
        translationEN: 'Good night!',
        glossary: {
          gute: { tr: 'iyi', en: 'good' },
        },
      },
    ],
  },
  {
    id: 'die-nummer',
    word: 'die Nummer',
    tr: 'numara',
    sentences: [
      {
        id: 'nummer-1',
        targetWord: 'Nummer',
        german: 'Wie ist Ihre Telefonnummer?',
        germanWithBlank: 'Wie ist Ihre Telefon___?',
        translationTR: 'Telefon numaranız nedir?',
        translationEN: 'What is your telephone number?',
        glossary: {
          wie: { tr: 'nasıl, ne', en: 'how, what' },
          ihre: { tr: 'sizin', en: 'your (formal)' },
        },
      },
    ],
  },
  {
    id: 'der-onkel',
    word: 'der Onkel',
    tr: 'amca / dayı',
    sentences: [
      {
        id: 'onkel-1',
        targetWord: 'Onkel',
        german: 'Mein Onkel lebt in Österreich.',
        germanWithBlank: 'Mein ___ lebt in Österreich.',
        translationTR: 'Amcam Avusturya\'da yaşıyor.',
        translationEN: 'My uncle lives in Austria.',
        glossary: {
          mein: { tr: 'benim', en: 'my' },
          lebt: { tr: 'yaşıyor', en: 'lives', trDict: 'yaşamak' },
        },
      },
    ],
  },
  {
    id: 'der-park',
    word: 'der Park',
    tr: 'park',
    sentences: [
      {
        id: 'park-1',
        targetWord: 'Park',
        german: 'Ich gehe jeden Tag in den Park.',
        germanWithBlank: 'Ich gehe jeden Tag in den ___.',
        translationTR: 'Her gün parka gidiyorum.',
        translationEN: 'I go to the park every day.',
        glossary: {
          gehe: { tr: 'gidiyorum', en: 'go', de: 'gehen', trDict: 'gitmek' },
          jeden: { tr: 'her', en: 'every' },
          tag: { tr: 'gün', en: 'day' },
        },
      },
    ],
  },
  {
    id: 'die-post',
    word: 'die Post',
    tr: 'posta / postane',
    sentences: [
      {
        id: 'post-1',
        targetWord: 'Post',
        german: 'Die Post ist gleich um die Ecke.',
        germanWithBlank: 'Die ___ ist gleich um die Ecke.',
        translationTR: 'Postane hemen köşede.',
        translationEN: 'The post office is just around the corner.',
        glossary: {
          gleich: { tr: 'hemen', en: 'just' },
          ecke: { tr: 'köşe', en: 'corner' },
        },
      },
    ],
  },
  {
    id: 'das-restaurant',
    word: 'das Restaurant',
    tr: 'restoran',
    sentences: [
      {
        id: 'restaurant-1',
        targetWord: 'Restaurant',
        german: 'Das Restaurant öffnet um zwölf Uhr.',
        germanWithBlank: 'Das ___ öffnet um zwölf Uhr.',
        translationTR: 'Restoran saat on ikide açılıyor.',
        translationEN: 'The restaurant opens at twelve o\'clock.',
        glossary: {
          öffnet: { tr: 'açılıyor', en: 'opens', trDict: 'açmak' },
          zwölf: { tr: 'on iki', en: 'twelve' },
          uhr: { tr: 'saat', en: "o'clock" },
        },
      },
    ],
  },
  {
    id: 'die-schule',
    word: 'die Schule',
    tr: 'okul',
    sentences: [
      {
        id: 'schule-1',
        targetWord: 'Schule',
        german: 'Die Schule beginnt um acht Uhr.',
        germanWithBlank: 'Die ___ beginnt um acht Uhr.',
        translationTR: 'Okul saat sekizde başlıyor.',
        translationEN: 'School starts at eight o\'clock.',
        glossary: {
          beginnt: { tr: 'başlıyor', en: 'starts', trDict: 'başlamak' },
          acht: { tr: 'sekiz', en: 'eight' },
          uhr: { tr: 'saat', en: "o'clock" },
        },
      },
    ],
  },
  {
    id: 'die-sprache',
    word: 'die Sprache',
    sentences: [
      {
        id: 'sprache-1',
        targetWord: 'Sprache',
        german: 'Welche Sprache lernen Sie?',
        germanWithBlank: 'Welche ___ lernen Sie?',
        translationTR: 'Hangi dili öğreniyorsunuz?',
        translationEN: 'Which language are you learning?',
        glossary: {
          welche: { tr: 'hangi', en: 'which' },
          lernen: { tr: 'öğrenmek', en: 'to learn' },
          sie: { tr: 'siz', en: 'you (formal)' },
        },
      },
    ],
  },
  {
    id: 'die-straße',
    word: 'die Straße',
    sentences: [
      {
        id: 'straße-1',
        targetWord: 'Straße',
        german: 'Die Straße ist sehr lang.',
        germanWithBlank: 'Die ___ ist sehr lang.',
        translationTR: 'Cadde çok uzun.',
        translationEN: 'The street is very long.',
        glossary: {
          sehr: { tr: 'çok', en: 'very' },
          lang: { tr: 'uzun', en: 'long' },
        },
      },
    ],
  },
  {
    id: 'der-supermarkt',
    word: 'der Supermarkt',
    sentences: [
      {
        id: 'supermarkt-1',
        targetWord: 'Supermarkt',
        german: 'Gibt es hier einen Supermarkt?',
        germanWithBlank: 'Gibt es hier einen ___?',
        translationTR: 'Burada bir süpermarket var mı?',
        translationEN: 'Is there a supermarket here?',
        glossary: {
          gibt: { tr: 'var mı', en: 'is there' },
          hier: { tr: 'burada', en: 'here' },
        },
      },
    ],
  },
  {
    id: 'der-tag',
    word: 'der Tag',
    sentences: [
      {
        id: 'tag-1',
        targetWord: 'Tag',
        german: 'Schönen Tag noch!',
        germanWithBlank: 'Schönen ___ noch!',
        translationTR: 'İyi günler!',
        translationEN: 'Have a nice day!',
        glossary: {
          schönen: { tr: 'güzel', en: 'nice' },
          noch: { tr: 'daha', en: 'still, yet' },
        },
      },
    ],
  },
  {
    id: 'die-tablette',
    word: 'die Tablette',
    tr: 'hap / tablet',
    sentences: [
      {
        id: 'tablette-1',
        targetWord: 'Tablette',
        german: 'Nehmen Sie diese Tablette dreimal täglich.',
        germanWithBlank: 'Nehmen Sie diese ___ dreimal täglich.',
        translationTR: 'Bu hapı günde üç kez alın.',
        translationEN: 'Take this tablet three times daily.',
        glossary: {
          nehmen: { tr: 'almak', en: 'to take' },
          dreimal: { tr: 'üç kez', en: 'three times' },
          täglich: { tr: 'günlük', en: 'daily' },
        },
      },
    ],
  },
  {
    id: 'die-tante',
    word: 'die Tante',
    tr: 'teyze / hala',
    sentences: [
      {
        id: 'tante-1',
        targetWord: 'Tante',
        german: 'Meine Tante backt sehr gut.',
        germanWithBlank: 'Meine ___ backt sehr gut.',
        translationTR: 'Halama/Teyzeam çok iyi pişirme yapar.',
        translationEN: 'My aunt bakes very well.',
        glossary: {
          meine: { tr: 'benim', en: 'my' },
          backt: { tr: 'pişiriyor', en: 'bakes', de: 'backen', trDict: 'pişirmek' },
          gut: { tr: 'iyi', en: 'well' },
        },
      },
    ],
  },
  {
    id: 'die-tasse',
    word: 'die Tasse',
    tr: 'fincan',
    sentences: [
      {
        id: 'tasse-1',
        targetWord: 'Tasse',
        german: 'Ich trinke eine Tasse Tee.',
        germanWithBlank: 'Ich trinke eine ___ Tee.',
        translationTR: 'Bir fincan çay içiyorum.',
        translationEN: 'I am drinking a cup of tea.',
        glossary: {
          trinke: { tr: 'içiyorum', en: 'drink', de: 'trinken', trDict: 'içmek' },
          tee: { tr: 'çay', en: 'tea' },
        },
      },
    ],
  },
  {
    id: 'das-taxi',
    word: 'das Taxi',
    sentences: [
      {
        id: 'taxi-1',
        targetWord: 'Taxi',
        german: 'Ich nehme ein Taxi zum Bahnhof.',
        germanWithBlank: 'Ich nehme ein ___ zum Bahnhof.',
        translationTR: 'İstasyona taksiyle gidiyorum.',
        translationEN: 'I am taking a taxi to the station.',
        glossary: {
          nehme: { tr: 'alıyorum, biniyorum', en: 'take', de: 'nehmen', trDict: 'almak' },
          bahnhof: { tr: 'tren istasyonu', en: 'train station' },
        },
      },
    ],
  },
  {
    id: 'das-telefon',
    word: 'das Telefon',
    tr: 'telefon',
    sentences: [
      {
        id: 'telefon-1',
        targetWord: 'Telefon',
        german: 'Das Telefon klingelt.',
        germanWithBlank: 'Das ___ klingelt.',
        translationTR: 'Telefon çalıyor.',
        translationEN: 'The telephone is ringing.',
        glossary: {
          klingelt: { tr: 'çalıyor', en: 'rings', trDict: 'çalmak' },
        },
      },
    ],
  },
  {
    id: 'der-tisch',
    word: 'der Tisch',
    sentences: [
      {
        id: 'tisch-1',
        targetWord: 'Tisch',
        german: 'Das Essen steht auf dem Tisch.',
        germanWithBlank: 'Das Essen steht auf dem ___.',
        translationTR: 'Yemek masada duruyor.',
        translationEN: 'The food is on the table.',
        glossary: {
          essen: { tr: 'yemek', en: 'food' },
          steht: { tr: 'duruyor', en: 'stands, is', trDict: 'durmak' },
          auf: { tr: 'üzerinde', en: 'on' },
        },
      },
    ],
  },
  {
    id: 'die-toilette',
    word: 'die Toilette',
    tr: 'tuvalet',
    sentences: [
      {
        id: 'toilette-1',
        targetWord: 'Toilette',
        german: 'Wo ist die Toilette, bitte?',
        germanWithBlank: 'Wo ist die ___, bitte?',
        translationTR: 'Tuvalet nerede, lütfen?',
        translationEN: 'Where is the toilet, please?',
        glossary: {
          wo: { tr: 'nerede', en: 'where' },
          ist: { tr: '-dir', en: 'is' },
          bitte: { tr: 'lütfen', en: 'please' },
        },
      },
    ],
  },
  {
    id: 'der-verkehr',
    word: 'der Verkehr',
    tr: 'trafik',
    sentences: [
      {
        id: 'verkehr-1',
        targetWord: 'Verkehr',
        german: 'Es gibt viel Verkehr in der Stadt.',
        germanWithBlank: 'Es gibt viel ___ in der Stadt.',
        translationTR: 'Şehirde çok trafik var.',
        translationEN: 'There is a lot of traffic in the city.',
        glossary: {
          gibt: { tr: 'var', en: 'there is' },
          viel: { tr: 'çok', en: 'a lot' },
          stadt: { tr: 'şehir', en: 'city' },
        },
      },
    ],
  },
  {
    id: 'das-wasser',
    word: 'das Wasser',
    tr: 'su',
    sentences: [
      {
        id: 'wasser-1',
        targetWord: 'Wasser',
        german: 'Ich trinke täglich viel Wasser.',
        germanWithBlank: 'Ich trinke täglich viel ___.',
        translationTR: 'Her gün çok su içiyorum.',
        translationEN: 'I drink a lot of water every day.',
        glossary: {
          trinke: { tr: 'içiyorum', en: 'drink', de: 'trinken', trDict: 'içmek' },
          täglich: { tr: 'her gün', en: 'every day' },
          viel: { tr: 'çok', en: 'a lot' },
        },
      },
    ],
  },
  {
    id: 'der-weg',
    word: 'der Weg',
    tr: 'yol',
    sentences: [
      {
        id: 'weg-1',
        targetWord: 'Weg',
        german: 'Der Weg zum Bahnhof ist nicht weit.',
        germanWithBlank: 'Der ___ zum Bahnhof ist nicht weit.',
        translationTR: 'İstasyona giden yol uzak değil.',
        translationEN: 'The way to the station is not far.',
        glossary: {
          bahnhof: { tr: 'istasyon', en: 'station' },
          nicht: { tr: 'değil', en: 'not' },
          weit: { tr: 'uzak', en: 'far' },
        },
      },
    ],
  },
  {
    id: 'die-woche',
    word: 'die Woche',
    sentences: [
      {
        id: 'woche-1',
        targetWord: 'Woche',
        german: 'Ich lerne zweimal pro Woche Deutsch.',
        germanWithBlank: 'Ich lerne zweimal pro ___ Deutsch.',
        translationTR: 'Haftada iki kez Almanca öğreniyorum.',
        translationEN: 'I learn German twice a week.',
        glossary: {
          lerne: { tr: 'öğreniyorum', en: 'learn', de: 'lernen', trDict: 'öğrenmek' },
          zweimal: { tr: 'iki kez', en: 'twice' },
          deutsch: { tr: 'Almanca', en: 'German' },
        },
      },
    ],
  },
  {
    id: 'das-wochenende',
    word: 'das Wochenende',
    sentences: [
      {
        id: 'wochenende-1',
        targetWord: 'Wochenende',
        german: 'Was machst du am Wochenende?',
        germanWithBlank: 'Was machst du am ___?',
        translationTR: 'Hafta sonu ne yapıyorsun?',
        translationEN: 'What are you doing at the weekend?',
        glossary: {
          was: { tr: 'ne', en: 'what' },
          machst: { tr: 'yapıyorsun', en: 'do', de: 'machen', trDict: 'yapmak' },
          du: { tr: 'sen', en: 'you' },
        },
      },
    ],
  },
  {
    id: 'das-zimmer',
    word: 'das Zimmer',
    tr: 'oda',
    sentences: [
      {
        id: 'zimmer-1',
        targetWord: 'Zimmer',
        german: 'Das Zimmer kostet achtzig Euro pro Nacht.',
        germanWithBlank: 'Das ___ kostet achtzig Euro pro Nacht.',
        translationTR: 'Oda gecelik seksen Euro.',
        translationEN: 'The room costs eighty euros per night.',
        glossary: {
          kostet: { tr: 'eder, değer', en: 'costs' },
          achtzig: { tr: 'seksen', en: 'eighty' },
          nacht: { tr: 'gece', en: 'night' },
        },
      },
    ],
  },

  // ── Adjectives ────────────────────────────────────────────────────────────
  {
    id: 'billig',
    word: 'billig',
    tr: 'ucuz',
    sentences: [
      {
        id: 'billig-1',
        targetWord: 'billig',
        german: 'Das Ticket ist sehr billig.',
        germanWithBlank: 'Das Ticket ist sehr ___.',
        translationTR: 'Bilet çok ucuz.',
        translationEN: 'The ticket is very cheap.',
        glossary: {
          ticket: { tr: 'bilet', en: 'ticket' },
          sehr: { tr: 'çok', en: 'very' },
        },
      },
    ],
  },
  {
    id: 'dunkel',
    word: 'dunkel',
    tr: 'karanlık / koyu',
    sentences: [
      {
        id: 'dunkel-1',
        targetWord: 'dunkel',
        german: 'Im Winter wird es früh dunkel.',
        germanWithBlank: 'Im Winter wird es früh ___.',
        translationTR: 'Kışın erken karanlık oluyor.',
        translationEN: 'In winter it gets dark early.',
        glossary: {
          winter: { tr: 'kış', en: 'winter' },
          früh: { tr: 'erken', en: 'early' },
        },
      },
    ],
  },
  {
    id: 'einfach',
    word: 'einfach',
    tr: 'basit / kolay / sadece',
    sentences: [
      {
        id: 'einfach-1',
        targetWord: 'einfach',
        german: 'Die Aufgabe ist sehr einfach.',
        germanWithBlank: 'Die Aufgabe ist sehr ___.',
        translationTR: 'Görev çok kolay.',
        translationEN: 'The task is very easy.',
        glossary: {
          aufgabe: { tr: 'görev, ödev', en: 'task' },
          sehr: { tr: 'çok', en: 'very' },
        },
      },
    ],
  },
  {
    id: 'fertig',
    word: 'fertig',
    tr: 'hazır / bitmiş',
    sentences: [
      {
        id: 'fertig-1',
        targetWord: 'fertig',
        german: 'Ich bin mit der Aufgabe fertig.',
        germanWithBlank: 'Ich bin mit der Aufgabe ___.',
        translationTR: 'Görevi bitirdim.',
        translationEN: 'I am done with the task.',
        glossary: {
          bin: { tr: '-im (olmak)', en: 'am', de: 'sein', trDict: 'olmak' },
          aufgabe: { tr: 'görev', en: 'task' },
        },
      },
    ],
  },
  {
    id: 'froh',
    word: 'froh',
    tr: 'memnun / mutlu',
    sentences: [
      {
        id: 'froh-1',
        targetWord: 'froh',
        german: 'Ich bin froh, dass du da bist.',
        germanWithBlank: 'Ich bin ___, dass du da bist.',
        translationTR: 'Orada olduğun için mutluyum.',
        translationEN: 'I am glad that you are there.',
        glossary: {
          bin: { tr: '-im (olmak)', en: 'am', de: 'sein', trDict: 'olmak' },
          dass: { tr: '-diğine', en: 'that' },
          da: { tr: 'orada', en: 'there' },
        },
      },
    ],
  },
  {
    id: 'früh',
    word: 'früh',
    sentences: [
      {
        id: 'früh-1',
        targetWord: 'früh',
        german: 'Es ist noch zu früh.',
        germanWithBlank: 'Es ist noch zu ___.',
        translationTR: 'Daha çok erken.',
        translationEN: 'It is still too early.',
        glossary: {
          noch: { tr: 'hâlâ', en: 'still' },
          zu: { tr: 'çok, fazla', en: 'too' },
        },
      },
    ],
  },
  {
    id: 'ganz',
    word: 'ganz',
    tr: 'bütün / tamamen / sağlam',
    sentences: [
      {
        id: 'ganz-1',
        targetWord: 'ganz',
        german: 'Das ist ganz einfach.',
        germanWithBlank: 'Das ist ___ einfach.',
        translationTR: 'Bu tamamen kolay.',
        translationEN: 'That is quite simple.',
        glossary: {
          das: { tr: 'bu', en: 'that' },
          einfach: { tr: 'kolay, basit', en: 'simple' },
        },
      },
    ],
  },
  {
    id: 'groß',
    word: 'groß',
    tr: 'büyük / boyu uzun',
    sentences: [
      {
        id: 'groß-1',
        targetWord: 'groß',
        german: 'Mein Bruder ist sehr groß.',
        germanWithBlank: 'Mein Bruder ist sehr ___.',
        translationTR: 'Erkek kardeşim çok uzun boylu.',
        translationEN: 'My brother is very tall.',
        glossary: {
          bruder: { tr: 'erkek kardeş', en: 'brother' },
          sehr: { tr: 'çok', en: 'very' },
        },
      },
    ],
  },
  {
    id: 'gut',
    word: 'gut',
    tr: 'iyi',
    sentences: [
      {
        id: 'gut-1',
        targetWord: 'gut',
        german: 'Das Essen war sehr gut.',
        germanWithBlank: 'Das Essen war sehr ___.',
        translationTR: 'Yemek çok iyiydi.',
        translationEN: 'The food was very good.',
        glossary: {
          essen: { tr: 'yemek', en: 'food' },
          war: { tr: '-dı, -di (geçmiş)', en: 'was' },
          sehr: { tr: 'çok', en: 'very' },
        },
      },
    ],
  },
  {
    id: 'heiß',
    word: 'heiß',
    tr: 'sıcak (çok sıcak)',
    sentences: [
      {
        id: 'heiß-1',
        targetWord: 'heiß',
        german: 'Der Kaffee ist zu heiß.',
        germanWithBlank: 'Der Kaffee ist zu ___.',
        translationTR: 'Kahve çok sıcak.',
        translationEN: 'The coffee is too hot.',
        glossary: {
          kaffee: { tr: 'kahve', en: 'coffee' },
          zu: { tr: 'çok, fazla', en: 'too' },
        },
      },
    ],
  },
  {
    id: 'hell',
    word: 'hell',
    tr: 'aydınlık / açık (renk)',
    sentences: [
      {
        id: 'hell-1',
        targetWord: 'hell',
        german: 'Das Zimmer ist sehr hell.',
        germanWithBlank: 'Das Zimmer ist sehr ___.',
        translationTR: 'Oda çok aydınlık.',
        translationEN: 'The room is very bright.',
        glossary: {
          zimmer: { tr: 'oda', en: 'room' },
          sehr: { tr: 'çok', en: 'very' },
        },
      },
    ],
  },
  {
    id: 'hoch',
    word: 'hoch',
    tr: 'yüksek',
    sentences: [
      {
        id: 'hoch-1',
        targetWord: 'hoch',
        german: 'Die Miete ist sehr hoch.',
        germanWithBlank: 'Die Miete ist sehr ___.',
        translationTR: 'Kira çok yüksek.',
        translationEN: 'The rent is very high.',
        glossary: {
          miete: { tr: 'kira', en: 'rent' },
          sehr: { tr: 'çok', en: 'very' },
        },
      },
    ],
  },
  {
    id: 'jung',
    word: 'jung',
    tr: 'genç',
    sentences: [
      {
        id: 'jung-1',
        targetWord: 'jung',
        german: 'Sie ist noch sehr jung.',
        germanWithBlank: 'Sie ist noch sehr ___.',
        translationTR: 'O daha çok genç.',
        translationEN: 'She is still very young.',
        glossary: {
          sie: { tr: 'o (kadın)', en: 'she' },
          noch: { tr: 'hâlâ', en: 'still' },
          sehr: { tr: 'çok', en: 'very' },
        },
      },
    ],
  },
  {
    id: 'kalt',
    word: 'kalt',
    tr: 'soğuk',
    sentences: [
      {
        id: 'kalt-1',
        targetWord: 'kalt',
        german: 'Das Wetter ist heute sehr kalt.',
        germanWithBlank: 'Das Wetter ist heute sehr ___.',
        translationTR: 'Bugün hava çok soğuk.',
        translationEN: 'The weather is very cold today.',
        glossary: {
          wetter: { tr: 'hava', en: 'weather' },
          heute: { tr: 'bugün', en: 'today' },
          sehr: { tr: 'çok', en: 'very' },
        },
      },
    ],
  },
  {
    id: 'kaputt',
    word: 'kaputt',
    tr: 'bozuk / kırık / yorgun',
    sentences: [
      {
        id: 'kaputt-1',
        targetWord: 'kaputt',
        german: 'Mein Handy ist kaputt.',
        germanWithBlank: 'Mein Handy ist ___.',
        translationTR: 'Telefonum bozuk.',
        translationEN: 'My phone is broken.',
        glossary: {
          mein: { tr: 'benim', en: 'my' },
          handy: { tr: 'cep telefonu', en: 'mobile phone' },
        },
      },
    ],
  },
  {
    id: 'klar',
    word: 'klar',
    tr: 'açık / net / tabii',
    sentences: [
      {
        id: 'klar-1',
        targetWord: 'klar',
        german: 'Alles klar?',
        germanWithBlank: 'Alles ___?',
        translationTR: 'Her şey anlaşıldı mı?',
        translationEN: 'All clear?',
        glossary: {
          alles: { tr: 'her şey', en: 'everything' },
        },
      },
    ],
  },
  {
    id: 'klein',
    word: 'klein',
    tr: 'küçük',
    sentences: [
      {
        id: 'klein-1',
        targetWord: 'klein',
        german: 'Das Kind ist noch sehr klein.',
        germanWithBlank: 'Das Kind ist noch sehr ___.',
        translationTR: 'Çocuk henüz çok küçük.',
        translationEN: 'The child is still very small.',
        glossary: {
          kind: { tr: 'çocuk', en: 'child' },
          noch: { tr: 'hâlâ', en: 'still' },
          sehr: { tr: 'çok', en: 'very' },
        },
      },
    ],
  },
  {
    id: 'lang',
    word: 'lang',
    tr: 'uzun',
    sentences: [
      {
        id: 'lang-1',
        targetWord: 'lang',
        german: 'Der Film war sehr lang.',
        germanWithBlank: 'Der Film war sehr ___.',
        translationTR: 'Film çok uzundu.',
        translationEN: 'The film was very long.',
        glossary: {
          film: { tr: 'film', en: 'film' },
          war: { tr: '-dı, -di (geçmiş)', en: 'was' },
          sehr: { tr: 'çok', en: 'very' },
        },
      },
    ],
  },
  {
    id: 'langsam',
    word: 'langsam',
    tr: 'yavaş',
    sentences: [
      {
        id: 'langsam-1',
        targetWord: 'langsam',
        german: 'Bitte sprechen Sie langsam!',
        germanWithBlank: 'Bitte sprechen Sie ___!',
        translationTR: 'Lütfen yavaş konuşun!',
        translationEN: 'Please speak slowly!',
        glossary: {
          bitte: { tr: 'lütfen', en: 'please' },
          sprechen: { tr: 'konuşmak', en: 'to speak' },
          sie: { tr: 'siz', en: 'you (formal)' },
        },
      },
    ],
  },
  {
    id: 'laut',
    word: 'laut',
    tr: 'yüksek sesli / ...-e göre',
    sentences: [
      {
        id: 'laut-1',
        targetWord: 'laut',
        german: 'Die Musik ist zu laut.',
        germanWithBlank: 'Die Musik ist zu ___.',
        translationTR: 'Müzik çok gürültülü.',
        translationEN: 'The music is too loud.',
        glossary: {
          musik: { tr: 'müzik', en: 'music' },
          zu: { tr: 'çok, fazla', en: 'too' },
        },
      },
    ],
  },
  {
    id: 'leicht',
    word: 'leicht',
    tr: 'hafif / kolay',
    sentences: [
      {
        id: 'leicht-1',
        targetWord: 'leicht',
        german: 'Das ist sehr leicht.',
        germanWithBlank: 'Das ist sehr ___.',
        translationTR: 'Bu çok kolay.',
        translationEN: 'That is very easy.',
        glossary: {
          das: { tr: 'bu, o', en: 'that' },
          sehr: { tr: 'çok', en: 'very' },
        },
      },
    ],
  },
  {
    id: 'leise',
    word: 'leise',
    tr: 'sessiz',
    sentences: [
      {
        id: 'leise-1',
        targetWord: 'leise',
        german: 'Bitte sprich leise, das Baby schläft.',
        germanWithBlank: 'Bitte sprich ___, das Baby schläft.',
        translationTR: 'Lütfen sessizce konuş, bebek uyuyor.',
        translationEN: 'Please speak quietly, the baby is sleeping.',
        glossary: {
          bitte: { tr: 'lütfen', en: 'please' },
          sprich: { tr: 'konuş', en: 'speak' },
          baby: { tr: 'bebek', en: 'baby' },
          schläft: { tr: 'uyuyor', en: 'sleeps', trDict: 'uyumak' },
        },
      },
    ],
  },
  {
    id: 'lustig',
    word: 'lustig',
    tr: 'komik / neşeli',
    sentences: [
      {
        id: 'lustig-1',
        targetWord: 'lustig',
        german: 'Der Film war sehr lustig.',
        germanWithBlank: 'Der Film war sehr ___.',
        translationTR: 'Film çok komikti.',
        translationEN: 'The film was very funny.',
        glossary: {
          film: { tr: 'film', en: 'film' },
          war: { tr: '-dı, -di (geçmiş)', en: 'was' },
          sehr: { tr: 'çok', en: 'very' },
        },
      },
    ],
  },
  {
    id: 'nett',
    word: 'nett',
    tr: 'nazik / hoş',
    sentences: [
      {
        id: 'nett-1',
        targetWord: 'nett',
        german: 'Die Leute hier sind sehr nett.',
        germanWithBlank: 'Die Leute hier sind sehr ___.',
        translationTR: 'Buradaki insanlar çok nazik.',
        translationEN: 'The people here are very nice.',
        glossary: {
          leute: { tr: 'insanlar', en: 'people' },
          hier: { tr: 'burada', en: 'here' },
          sehr: { tr: 'çok', en: 'very' },
        },
      },
    ],
  },
  {
    id: 'schön',
    word: 'schön',
    tr: 'güzel',
    sentences: [
      {
        id: 'schön-1',
        targetWord: 'schön',
        german: 'Das Wetter ist heute schön.',
        germanWithBlank: 'Das Wetter ist heute ___.',
        translationTR: 'Bugün hava güzel.',
        translationEN: 'The weather is nice today.',
        glossary: {
          wetter: { tr: 'hava', en: 'weather' },
          heute: { tr: 'bugün', en: 'today' },
        },
      },
    ],
  },
  {
    id: 'schwer',
    word: 'schwer',
    tr: 'ağır / zor',
    sentences: [
      {
        id: 'schwer-1',
        targetWord: 'schwer',
        german: 'Das ist nicht schwer.',
        germanWithBlank: 'Das ist nicht ___.',
        translationTR: 'Bu zor değil.',
        translationEN: 'That is not difficult.',
        glossary: {
          das: { tr: 'bu, o', en: 'that' },
          nicht: { tr: 'değil', en: 'not' },
        },
      },
    ],
  },
  {
    id: 'spät',
    word: 'spät',
    tr: 'geç',
    sentences: [
      {
        id: 'spät-1',
        targetWord: 'spät',
        german: 'Es ist schon sehr spät.',
        germanWithBlank: 'Es ist schon sehr ___.',
        translationTR: 'Zaten çok geç.',
        translationEN: 'It is already very late.',
        glossary: {
          schon: { tr: 'zaten', en: 'already' },
          sehr: { tr: 'çok', en: 'very' },
        },
      },
    ],
  },
  {
    id: 'toll',
    word: 'toll',
    tr: 'harika / müthiş',
    sentences: [
      {
        id: 'toll-1',
        targetWord: 'toll',
        german: 'Das war wirklich toll!',
        germanWithBlank: 'Das war wirklich ___!',
        translationTR: 'Bu gerçekten harikaydı!',
        translationEN: 'That was really great!',
        glossary: {
          war: { tr: '-dı, -di (geçmiş)', en: 'was' },
          wirklich: { tr: 'gerçekten', en: 'really' },
        },
      },
    ],
  },
  {
    id: 'warm',
    word: 'warm',
    tr: 'sıcak / ılık',
    sentences: [
      {
        id: 'warm-1',
        targetWord: 'warm',
        german: 'Das Wasser ist warm.',
        germanWithBlank: 'Das Wasser ist ___.',
        translationTR: 'Su sıcak.',
        translationEN: 'The water is warm.',
        glossary: {
          wasser: { tr: 'su', en: 'water' },
          ist: { tr: '-dır (olmak)', en: 'is' },
        },
      },
    ],
  },
  {
    id: 'weit',
    word: 'weit',
    tr: 'uzak / geniş',
    sentences: [
      {
        id: 'weit-1',
        targetWord: 'weit',
        german: 'Der Bahnhof ist nicht weit.',
        germanWithBlank: 'Der Bahnhof ist nicht ___.',
        translationTR: 'İstasyon uzak değil.',
        translationEN: 'The station is not far.',
        glossary: {
          bahnhof: { tr: 'istasyon', en: 'station' },
          nicht: { tr: 'değil', en: 'not' },
        },
      },
    ],
  },
  {
    id: 'wenig',
    word: 'wenig',
    sentences: [
      {
        id: 'wenig-1',
        targetWord: 'wenig',
        german: 'Ich habe wenig Zeit.',
        germanWithBlank: 'Ich habe ___ Zeit.',
        translationTR: 'Az zamanım var.',
        translationEN: 'I have little time.',
        glossary: {
          habe: { tr: 'var (sahip olmak)', en: 'have' },
          zeit: { tr: 'zaman', en: 'time' },
        },
      },
    ],
  },
  {
    id: 'wichtig',
    word: 'wichtig',
    sentences: [
      {
        id: 'wichtig-1',
        targetWord: 'wichtig',
        german: 'Das ist sehr wichtig.',
        germanWithBlank: 'Das ist sehr ___.',
        translationTR: 'Bu çok önemli.',
        translationEN: 'That is very important.',
        glossary: {
          das: { tr: 'bu, o', en: 'that' },
          sehr: { tr: 'çok', en: 'very' },
        },
      },
    ],
  },

  // ── Common words ──────────────────────────────────────────────────────────
  {
    id: 'heute',
    word: 'heute',
    tr: 'bugün',
    sentences: [
      {
        id: 'heute-1',
        targetWord: 'Heute',
        german: 'Heute ist Montag.',
        germanWithBlank: '___ ist Montag.',
        translationTR: 'Bugün Pazartesi.',
        translationEN: 'Today is Monday.',
        glossary: {
          ist: { tr: '-dır (olmak)', en: 'is' },
          montag: { tr: 'Pazartesi', en: 'Monday' },
        },
      },
    ],
  },
  {
    id: 'jetzt',
    word: 'jetzt',
    tr: 'şimdi',
    sentences: [
      {
        id: 'jetzt-1',
        targetWord: 'jetzt',
        german: 'Ich kann jetzt nicht sprechen.',
        germanWithBlank: 'Ich kann ___ nicht sprechen.',
        translationTR: 'Şu an konuşamıyorum.',
        translationEN: 'I cannot speak right now.',
        glossary: {
          kann: { tr: '-ebiliyorum', en: 'can' },
          nicht: { tr: 'değil', en: 'not' },
          sprechen: { tr: 'konuşmak', en: 'to speak' },
        },
      },
    ],
  },
  {
    id: 'noch',
    word: 'noch',
    tr: 'henüz / hala / daha',
    sentences: [
      {
        id: 'noch-1',
        targetWord: 'noch',
        german: 'Ich lerne noch Deutsch.',
        germanWithBlank: 'Ich lerne ___ Deutsch.',
        translationTR: 'Hâlâ Almanca öğreniyorum.',
        translationEN: 'I am still learning German.',
        glossary: {
          lerne: { tr: 'öğreniyorum', en: 'learn', de: 'lernen', trDict: 'öğrenmek' },
          deutsch: { tr: 'Almanca', en: 'German' },
        },
      },
    ],
  },
  {
    id: 'schon',
    word: 'schon',
    tr: 'zaten / çoktan',
    sentences: [
      {
        id: 'schon-1',
        targetWord: 'schon',
        german: 'Ich bin schon fertig.',
        germanWithBlank: 'Ich bin ___ fertig.',
        translationTR: 'Zaten bittim.',
        translationEN: 'I am already done.',
        glossary: {
          bin: { tr: '-im (olmak)', en: 'am', de: 'sein', trDict: 'olmak' },
          fertig: { tr: 'hazır, bitmiş', en: 'done, finished' },
        },
      },
    ],
  },
  {
    id: 'sehr',
    word: 'sehr',
    tr: 'çok',
    sentences: [
      {
        id: 'sehr-1',
        targetWord: 'sehr',
        german: 'Ich freue mich sehr.',
        germanWithBlank: 'Ich freue mich ___.',
        translationTR: 'Çok memnunum.',
        translationEN: 'I am very pleased.',
        glossary: {
          freue: { tr: 'memnunum', en: 'am pleased', de: 'sich freuen', trDict: 'sevinmek' },
          mich: { tr: 'kendimi', en: 'myself' },
        },
      },
    ],
  },
  {
    id: 'viel',
    word: 'viel',
    sentences: [
      {
        id: 'viel-1',
        targetWord: 'viel',
        german: 'Ich habe viel zu tun.',
        germanWithBlank: 'Ich habe ___ zu tun.',
        translationTR: 'Yapacak çok işim var.',
        translationEN: 'I have a lot to do.',
        glossary: {
          habe: { tr: 'var (sahip olmak)', en: 'have' },
          tun: { tr: 'yapmak', en: 'to do' },
        },
      },
    ],
  },
  {
    id: 'warum',
    word: 'warum',
    tr: 'neden',
    sentences: [
      {
        id: 'warum-1',
        targetWord: 'Warum',
        german: 'Warum lernst du Deutsch?',
        germanWithBlank: '___ lernst du Deutsch?',
        translationTR: 'Neden Almanca öğreniyorsun?',
        translationEN: 'Why are you learning German?',
        glossary: {
          lernst: { tr: 'öğreniyorsun', en: 'learn' },
          du: { tr: 'sen', en: 'you' },
          deutsch: { tr: 'Almanca', en: 'German' },
        },
      },
    ],
  },
  {
    id: 'weil',
    word: 'weil',
    tr: 'çünkü / -diği için',
    sentences: [
      {
        id: 'weil-1',
        targetWord: 'weil',
        german: 'Ich lerne Deutsch, weil es interessant ist.',
        germanWithBlank: 'Ich lerne Deutsch, ___ es interessant ist.',
        translationTR: 'Almanca öğreniyorum çünkü ilginç.',
        translationEN: 'I am learning German because it is interesting.',
        glossary: {
          interessant: { tr: 'ilginç', en: 'interesting' },
          ist: { tr: '-dır (olmak)', en: 'is' },
        },
      },
    ],
  },
  {
    id: 'wenn',
    word: 'wenn',
    tr: 'eğer / ne zaman',
    sentences: [
      {
        id: 'wenn-1',
        targetWord: 'Wenn',
        german: 'Wenn ich Zeit habe, lese ich.',
        germanWithBlank: '___ ich Zeit habe, lese ich.',
        translationTR: 'Zamanım olduğunda okuyorum.',
        translationEN: 'When I have time, I read.',
        glossary: {
          zeit: { tr: 'zaman', en: 'time' },
          habe: { tr: 'var (sahip olmak)', en: 'have' },
          lese: { tr: 'okuyorum', en: 'read', de: 'lesen', trDict: 'okumak' },
        },
      },
    ],
  },
  {
    id: 'der-winter',
    word: 'der Winter',
    sentences: [
      {
        id: 'winter-1',
        targetWord: 'Winter',
        german: 'Im Winter ist es sehr kalt.',
        germanWithBlank: 'Im ___ ist es sehr kalt.',
        translationTR: 'Kışın çok soğuk oluyor.',
        translationEN: 'In winter it is very cold.',
        glossary: {
          sehr: { tr: 'çok', en: 'very' },
          kalt: { tr: 'soğuk', en: 'cold' },
        },
      },
    ],
  },
  {
    id: 'der-herbst',
    word: 'der Herbst',
    sentences: [
      {
        id: 'herbst-1',
        targetWord: 'Herbst',
        german: 'Im Herbst fallen die Blätter.',
        germanWithBlank: 'Im ___ fallen die Blätter.',
        translationTR: 'Sonbaharda yapraklar düşüyor.',
        translationEN: 'In autumn the leaves fall.',
        glossary: {
          fallen: { tr: 'düşüyor', en: 'fall', trDict: 'düşmek' },
          blätter: { tr: 'yapraklar', en: 'leaves' },
        },
      },
    ],
  },
  {
    id: 'der-frühling',
    word: 'der Frühling',
    sentences: [
      {
        id: 'frühling-1',
        targetWord: 'Frühling',
        german: 'Im Frühling wird es wärmer.',
        germanWithBlank: 'Im ___ wird es wärmer.',
        translationTR: 'İlkbaharda hava ısınıyor.',
        translationEN: 'In spring it gets warmer.',
        glossary: {
          wird: { tr: 'oluyor', en: 'becomes', trDict: 'olmak' },
          wärmer: { tr: 'daha sıcak', en: 'warmer' },
        },
      },
    ],
  },
  {
    id: 'die-stunde',
    word: 'die Stunde',
    sentences: [
      {
        id: 'stunde-1',
        targetWord: 'Stunde',
        german: 'Ich lerne eine Stunde pro Tag.',
        germanWithBlank: 'Ich lerne eine ___ pro Tag.',
        translationTR: 'Günde bir saat çalışıyorum.',
        translationEN: 'I study one hour per day.',
        glossary: {
          lerne: { tr: 'öğreniyorum', en: 'study, learn', de: 'lernen', trDict: 'öğrenmek' },
          pro: { tr: 'her, başına', en: 'per' },
          tag: { tr: 'gün', en: 'day' },
        },
      },
    ],
  },
  {
    id: 'alle',
    word: 'alle',
    tr: 'hepsi / tümü',
    sentences: [
      {
        id: 'alle-1',
        targetWord: 'alle',
        german: 'Alle Kinder spielen im Park.',
        germanWithBlank: '___ Kinder spielen im Park.',
        translationTR: 'Bütün çocuklar parkta oynuyor.',
        translationEN: 'All children are playing in the park.',
        glossary: {
          kinder: { tr: 'çocuklar', en: 'children' },
          spielen: { tr: 'oynuyor', en: 'play', de: 'spielen', trDict: 'oynamak' },
          im: { tr: '-de (in + dem)', en: 'in the' },
          park: { tr: 'park', en: 'park' },
        },
      },
    ],
  },
  {
    id: 'alles',
    word: 'alles',
    sentences: [
      {
        id: 'alles-1',
        targetWord: 'alles',
        german: 'Ich habe alles verstanden.',
        germanWithBlank: 'Ich habe ___ verstanden.',
        translationTR: 'Her şeyi anladım.',
        translationEN: 'I understood everything.',
        glossary: {
          habe: { tr: '-dim (Perfekt)', en: 'have (perfect)', de: 'haben' },
          verstanden: { tr: 'anladım', en: 'understood', de: 'verstehen', trDict: 'anlamak' },
        },
      },
    ],
  },
  {
    id: 'als',
    word: 'als',
    tr: '... dığı zaman / ...-den daha',
    sentences: [
      {
        id: 'als-1',
        targetWord: 'als',
        german: 'Hector ist jünger als seine Schwester.',
        germanWithBlank: 'Hector ist jünger ___ seine Schwester.',
        translationTR: 'Hector kız kardeşinden daha gençtir.',
        translationEN: 'Hector is younger than his sister.',
        glossary: {
          jünger: { tr: 'daha genç', en: 'younger' },
          Schwester: { tr: 'kız kardeş', en: 'sister' },
        },
      },
    ],
  },
  {
    id: 'also',
    word: 'also',
    tr: 'yani / o halde',
    sentences: [
      {
        id: 'also-1',
        targetWord: 'also',
        german: 'Also, wann treffen wir uns?',
        germanWithBlank: '___, wann treffen wir uns?',
        translationTR: 'Peki, ne zaman buluşuyoruz?',
        translationEN: 'So, when are we meeting?',
        glossary: {
          wann: { tr: 'ne zaman', en: 'when' },
          treffen: { tr: 'buluşmak', en: 'meet', de: 'treffen', trDict: 'buluşmak' },
          wir: { tr: 'biz', en: 'we' },
          uns: { tr: 'bizi / birbirimiz', en: 'us / each other' },
        },
      },
    ],
  },
  {
    id: 'das-alter',
    word: 'das Alter',
    tr: 'yaş',
    sentences: [
      {
        id: 'alter-1',
        targetWord: 'Alter',
        german: 'In welchem Alter haben Sie geheiratet?',
        germanWithBlank: 'In welchem ___ haben Sie geheiratet?',
        translationTR: 'Kaç yaşında evlendiniz?',
        translationEN: 'At what age did you get married?',
        glossary: {
          in: { tr: '-de', en: 'at' },
          welchem: { tr: 'hangi', en: 'which' },
          haben: { tr: '-diniz (Perfekt)', en: 'have (perfect)' },
          sie: { tr: 'siz', en: 'you (formal)' },
          geheiratet: { tr: 'evlendim', en: 'got married', de: 'heiraten', trDict: 'evlenmek' },
        },
      },
    ],
  },
  {
    id: 'an',
    word: 'an',
    sentences: [
      {
        id: 'an-1',
        targetWord: 'am',
        german: 'Wir treffen uns am Bahnhof.',
        germanWithBlank: 'Wir treffen uns ___ Bahnhof.',
        translationTR: 'İstasyonda buluşuyoruz.',
        translationEN: 'We meet at the train station.',
        glossary: {
          treffen: { tr: 'buluşmak', en: 'to meet' },
          Bahnhof: { tr: 'tren istasyonu', en: 'train station' },
        },
      },
    ],
  },
  {
    id: 'die-ankunft',
    word: 'die Ankunft',
    tr: 'varış',
    sentences: [
      {
        id: 'ankunft-1',
        targetWord: 'Ankunft',
        german: 'Die Ankunft des Zuges ist um 15 Uhr.',
        germanWithBlank: 'Die ___ des Zuges ist um 15 Uhr.',
        translationTR: 'Trenin varışı saat 15:00\'te.',
        translationEN: 'The arrival of the train is at 3 p.m.',
        glossary: {
          des: { tr: '-in (genitif)', en: 'of the' },
          zuges: { tr: 'trenin', en: "of the train" },
          ist: { tr: '-dır', en: 'is', de: 'sein', trDict: 'olmak' },
          um: { tr: 'saat (zaman belirteç)', en: 'at (time)' },
          uhr: { tr: 'saat', en: "o'clock" },
        },
      },
    ],
  },
  {
    id: 'ankommen',
    word: 'ankommen',
    tr: 'varmak',
    sentences: [
      {
        id: 'ankommen-1',
        targetWord: 'angekommen',
        german: 'Der Zug ist in Berlin angekommen.',
        germanWithBlank: 'Der Zug ist in Berlin ___.',
        translationTR: 'Tren Berlin\'e vardı.',
        translationEN: 'The train arrived in Berlin.',
        glossary: {
          Zug: { tr: 'tren', en: 'train' },
          ist: { tr: '... -di (yardımcı fiil)', en: 'has/is (auxiliary)' },
        },
      },
    ],
  },
  {
    id: 'anmachen',
    word: 'anmachen',
    sentences: [
      {
        id: 'anmachen-1',
        targetWord: 'angemacht',
        german: 'Er hat das Licht angemacht.',
        germanWithBlank: 'Er hat das Licht ___.',
        translationTR: 'Işığı açtı.',
        translationEN: 'He turned on the light.',
        glossary: {
          Licht: { tr: 'ışık', en: 'light' },
          hat: { tr: '... -di (yardımcı fiil)', en: 'has (auxiliary)' },
        },
      },
    ],
  },
  {
    id: 'antworten',
    word: 'antworten',
    tr: 'cevap vermek',
    sentences: [
      {
        id: 'antworten-1',
        targetWord: 'antworten',
        german: 'Kannst du mir bitte antworten?',
        germanWithBlank: 'Kannst du mir bitte ___?',
        translationTR: 'Lütfen bana cevap verebilir misin?',
        translationEN: 'Can you please answer me?',
        glossary: {
          kannst: { tr: '-ebilir misin', en: 'can you', de: 'können', trDict: 'yapabilmek' },
          du: { tr: 'sen', en: 'you' },
          mir: { tr: 'bana', en: 'to me' },
          bitte: { tr: 'lütfen', en: 'please' },
        },
      },
    ],
  },
  {
    id: 'auf',
    word: 'auf',
    tr: 'üzerinde / açık / -e doğru',
    sentences: [
      {
        id: 'auf-1',
        targetWord: 'auf',
        german: 'Das Wörterbuch liegt auf dem Tisch.',
        germanWithBlank: 'Das Wörterbuch liegt ___ dem Tisch.',
        translationTR: 'Sözlük masanın üzerinde duruyor.',
        translationEN: 'The dictionary is on the table.',
        glossary: {
          Wörterbuch: { tr: 'sözlük', en: 'dictionary' },
          Tisch: { tr: 'masa', en: 'table' },
          liegt: { tr: 'duruyor / yatıyor', en: 'lies / is', trDict: 'yatmak' },
        },
      },
    ],
  },
  {
    id: 'aufschreiben',
    word: 'aufschreiben',
    sentences: [
      {
        id: 'aufschreiben-1',
        targetWord: 'aufgeschrieben',
        german: 'Er hat die Adresse aufgeschrieben.',
        germanWithBlank: 'Er hat die Adresse ___.',
        translationTR: 'Adresi yazdı.',
        translationEN: 'He wrote down the address.',
        glossary: {
          adresse: { tr: 'adres', en: 'address' },
          hat: { tr: '... -di (yardımcı fiil)', en: 'has (auxiliary)' },
        },
      },
    ],
  },
  {
    id: 'aus',
    word: 'aus',
    tr: '-den / dışarı / kapalı',
    sentences: [
      {
        id: 'aus-1',
        targetWord: 'aus',
        german: 'Michele kommt aus Brasilien.',
        germanWithBlank: 'Michele kommt ___ Brasilien.',
        translationTR: "Michele Brezilya'dan geliyor.",
        translationEN: 'Michele comes from Brazil.',
        glossary: {
          kommt: { tr: 'geliyor', en: 'comes', trDict: 'gelmek' },
        },
      },
    ],
  },
  {
    id: 'aussteigen',
    word: 'aussteigen',
    sentences: [
      {
        id: 'aussteigen-1',
        targetWord: 'aussteigen',
        german: 'Wo müssen wir aussteigen?',
        germanWithBlank: 'Wo müssen wir ___?',
        translationTR: 'Nerede inmemiz gerekiyor?',
        translationEN: 'Where do we have to get off?',
        glossary: {
          müssen: { tr: 'zorunda olmak', en: 'must' },
        },
      },
    ],
  },
  {
    id: 'ausziehen',
    word: 'ausziehen',
    tr: 'taşınmak / soyunmak',
    sentences: [
      {
        id: 'ausziehen-1',
        targetWord: 'aus',
        german: 'Er zieht das Hemd aus.',
        germanWithBlank: 'Er zieht das Hemd ___.',
        translationTR: 'Gömleğini çıkarıyor.',
        translationEN: 'He takes off his shirt.',
        glossary: {
          er: { tr: 'o (erkek)', en: 'he' },
          zieht: { tr: 'çekiyor / çıkarıyor', en: 'takes off', de: 'ausziehen', trDict: 'çıkarmak' },
          hemd: { tr: 'gömlek', en: 'shirt' },
        },
      },
    ],
  },
  {
    id: 'backen',
    word: 'backen',
    tr: 'fırında pişirmek',
    sentences: [
      {
        id: 'backen-1',
        targetWord: 'backen',
        german: 'Meine Mutter backt gern Kuchen.',
        germanWithBlank: 'Meine Mutter ___ gern Kuchen.',
        translationTR: 'Annem pasta yapmayı seviyor.',
        translationEN: 'My mother likes to bake cakes.',
        glossary: {
          meine: { tr: 'benim', en: 'my' },
          mutter: { tr: 'anne', en: 'mother' },
          gern: { tr: 'severek / isteyerek', en: 'gladly / likes to' },
          kuchen: { tr: 'kek / pasta', en: 'cake' },
        },
      },
    ],
  },
  {
    id: 'das-bad',
    word: 'das Bad',
    tr: 'banyo',
    sentences: [
      {
        id: 'bad-1',
        targetWord: 'Bad',
        german: 'Das Haus hat kein Bad.',
        germanWithBlank: 'Das Haus hat kein ___.',
        translationTR: 'Evin banyosu yok.',
        translationEN: 'The house has no bathroom.',
        glossary: {
          Haus: { tr: 'ev', en: 'house' },
        },
      },
    ],
  },
  {
    id: 'bald',
    word: 'bald',
    tr: 'yakında',
    sentences: [
      {
        id: 'bald-1',
        targetWord: 'bald',
        german: 'Ich komme bald zurück.',
        germanWithBlank: 'Ich komme ___ zurück.',
        translationTR: 'Yakında geri dönüyorum.',
        translationEN: 'I will be back soon.',
        glossary: {
          komme: { tr: 'geliyorum', en: 'I come', de: 'kommen', trDict: 'gelmek' },
          zurück: { tr: 'geri', en: 'back' },
        },
      },
    ],
  },
  {
    id: 'die-bank',
    word: 'die Bank',
    tr: 'banka',
    sentences: [
      {
        id: 'bank-1',
        targetWord: 'Bank',
        german: 'Ich muss zur Bank gehen.',
        germanWithBlank: 'Ich muss zur ___ gehen.',
        translationTR: 'Bankaya gitmem gerekiyor.',
        translationEN: 'I have to go to the bank.',
        glossary: {
          muss: { tr: 'zorundayım', en: 'must', de: 'müssen', trDict: 'zorunda olmak' },
          zur: { tr: '-e (zu + der)', en: 'to the' },
          gehen: { tr: 'gitmek', en: 'to go', de: 'gehen', trDict: 'gitmek' },
        },
      },
    ],
  },
  {
    id: 'beginnen',
    word: 'beginnen',
    tr: 'başlamak',
    sentences: [
      {
        id: 'beginnen-1',
        targetWord: 'beginnt',
        german: 'Der Kurs beginnt um neun Uhr.',
        germanWithBlank: 'Der Kurs ___ um neun Uhr.',
        translationTR: 'Kurs saat dokuzda başlıyor.',
        translationEN: 'The course starts at nine o\'clock.',
        glossary: {
          kurs: { tr: 'kurs', en: 'course' },
          um: { tr: 'saat … -de', en: 'at (time)' },
          neun: { tr: 'dokuz', en: 'nine' },
          uhr: { tr: 'saat', en: "o'clock" },
        },
      },
    ],
  },
  {
    id: 'bekommen',
    word: 'bekommen',
    tr: 'almak / edinmek',
    sentences: [
      {
        id: 'bekommen-1',
        targetWord: 'bekomme',
        german: 'Ich bekomme viele E-Mails.',
        germanWithBlank: 'Ich ___ viele E-Mails.',
        translationTR: 'Çok fazla e-posta alıyorum.',
        translationEN: 'I receive a lot of e-mails.',
        glossary: {
          viele: { tr: 'çok', en: 'many / a lot of' },
        },
      },
    ],
  },
  {
    id: 'bequem',
    word: 'bequem',
    tr: 'rahat',
    sentences: [
      {
        id: 'bequem-1',
        targetWord: 'bequem',
        german: 'Das Sofa ist sehr bequem.',
        germanWithBlank: 'Das Sofa ist sehr ___.',
        translationTR: 'Kanepe çok rahat.',
        translationEN: 'The sofa is very comfortable.',
        glossary: {
          sofa: { tr: 'kanepe', en: 'sofa' },
          ist: { tr: '-dır', en: 'is', de: 'sein', trDict: 'olmak' },
          sehr: { tr: 'çok', en: 'very' },
        },
      },
    ],
  },
  {
    id: 'besser',
    word: 'besser',
    sentences: [
      {
        id: 'besser-1',
        targetWord: 'besser',
        german: 'Heute geht es mir besser.',
        germanWithBlank: 'Heute geht es mir ___.',
        translationTR: 'Bugün kendimi daha iyi hissediyorum.',
        translationEN: 'Today I feel better.',
        glossary: {
          heute: { tr: 'bugün', en: 'today' },
          geht: { tr: 'gidiyor (es geht mir = kendimi hissediyorum)', en: 'goes (I feel)', de: 'gehen' },
          es: { tr: 'bu / o', en: 'it' },
          mir: { tr: 'bana', en: 'to me' },
        },
      },
    ],
  },
  {
    id: 'der-besuch',
    word: 'der Besuch',
    tr: 'ziyaret',
    sentences: [
      {
        id: 'besuch-1',
        targetWord: 'Besuch',
        german: 'Ich bekomme morgen Besuch.',
        germanWithBlank: 'Ich bekomme morgen ___.',
        translationTR: 'Yarın misafirim geliyor.',
        translationEN: 'I have a visitor coming tomorrow.',
        glossary: {
          bekomme: { tr: 'alıyorum / misafirim geliyor', en: 'I receive', de: 'bekommen', trDict: 'almak' },
          morgen: { tr: 'yarın', en: 'tomorrow' },
        },
      },
    ],
  },
  {
    id: 'die-bibliothek',
    word: 'die Bibliothek',
    tr: 'kütüphane',
    sentences: [
      {
        id: 'bibliothek-1',
        targetWord: 'Bibliothek',
        german: 'Ich leihe Bücher aus der Bibliothek.',
        germanWithBlank: 'Ich leihe Bücher aus der ___.',
        translationTR: 'Kütüphaneden kitap ödünç alıyorum.',
        translationEN: 'I borrow books from the library.',
        glossary: {
          leihe: { tr: 'ödünç alıyorum', en: 'I borrow', de: 'ausleihen', trDict: 'ödünç almak' },
          bücher: { tr: 'kitaplar', en: 'books' },
        },
      },
    ],
  },
  {
    id: 'bis',
    word: 'bis',
    tr: '-e kadar',
    sentences: [
      {
        id: 'bis-1',
        targetWord: 'bis',
        german: 'Das Geschäft ist bis 20 Uhr geöffnet.',
        germanWithBlank: 'Das Geschäft ist ___ 20 Uhr geöffnet.',
        translationTR: 'Dükkan saat 20:00\'ye kadar açık.',
        translationEN: 'The shop is open until 8 p.m.',
        glossary: {
          geschäft: { tr: 'dükkan / mağaza', en: 'shop' },
          ist: { tr: '-dır', en: 'is', de: 'sein', trDict: 'olmak' },
          uhr: { tr: 'saat', en: "o'clock" },
          geöffnet: { tr: 'açık', en: 'open', de: 'öffnen', trDict: 'açmak' },
        },
      },
    ],
  },
  {
    id: 'bitte',
    word: 'bitte',
    tr: 'lütfen',
    sentences: [
      {
        id: 'bitte-1',
        targetWord: 'bitte',
        german: 'Einen Kaffee, bitte.',
        germanWithBlank: 'Einen Kaffee, ___.',
        translationTR: 'Bir kahve, lütfen.',
        translationEN: 'A coffee, please.',
        glossary: {
          einen: { tr: 'bir (akkusativ)', en: 'a/an (acc.)' },
          kaffee: { tr: 'kahve', en: 'coffee' },
        },
      },
    ],
  },
  {
    id: 'der-brief',
    word: 'der Brief',
    tr: 'mektup',
    sentences: [
      {
        id: 'brief-1',
        targetWord: 'Brief',
        german: 'Ich schreibe einen Brief an meine Oma.',
        germanWithBlank: 'Ich schreibe einen ___ an meine Oma.',
        translationTR: 'Büyükanneime bir mektup yazıyorum.',
        translationEN: 'I am writing a letter to my grandma.',
        glossary: {
          schreibe: { tr: 'yazıyorum', en: 'I write', de: 'schreiben', trDict: 'yazmak' },
          einen: { tr: 'bir (akkusativ)', en: 'a/an (acc.)' },
          an: { tr: '-e (yön)', en: 'to' },
          meine: { tr: 'benim', en: 'my' },
          oma: { tr: 'büyükanne', en: 'grandma' },
        },
      },
    ],
  },
  {
    id: 'die-briefmarke',
    word: 'die Briefmarke',
    tr: 'posta pulu',
    sentences: [
      {
        id: 'briefmarke-1',
        targetWord: 'Briefmarke',
        german: 'Ich brauche eine Briefmarke.',
        germanWithBlank: 'Ich brauche eine ___.',
        translationTR: 'Bir posta puluna ihtiyacım var.',
        translationEN: 'I need a stamp.',
        glossary: {
          brauche: { tr: 'ihtiyacım var', en: 'I need', de: 'brauchen', trDict: 'ihtiyacı olmak' },
          eine: { tr: 'bir', en: 'a/an' },
        },
      },
    ],
  },
  {
    id: 'das-brot',
    word: 'das Brot',
    tr: 'ekmek',
    sentences: [
      {
        id: 'brot-1',
        targetWord: 'Brot',
        german: 'Ich esse zum Frühstück Brot mit Käse.',
        germanWithBlank: 'Ich esse zum Frühstück ___ mit Käse.',
        translationTR: 'Kahvaltıda peynirli ekmek yiyorum.',
        translationEN: 'I eat bread with cheese for breakfast.',
        glossary: {
          esse: { tr: 'yiyorum', en: 'I eat', de: 'essen', trDict: 'yemek' },
          zum: { tr: 'için (zu + dem)', en: 'for' },
          frühstück: { tr: 'kahvaltı', en: 'breakfast' },
          mit: { tr: 'ile', en: 'with' },
          käse: { tr: 'peynir', en: 'cheese' },
        },
      },
    ],
  },
  {
    id: 'buchstabieren',
    word: 'buchstabieren',
    sentences: [
      {
        id: 'buchstabieren-1',
        targetWord: 'buchstabieren',
        german: 'Können Sie Ihren Namen buchstabieren?',
        germanWithBlank: 'Können Sie Ihren Namen ___?',
        translationTR: 'Adınızı heceleyebilir misiniz?',
        translationEN: 'Can you spell your name?',
        glossary: {
          können: { tr: '-ebilir misiniz', en: 'can you', de: 'können', trDict: 'yapabilmek' },
          sie: { tr: 'siz (resmi)', en: 'you (formal)' },
          ihren: { tr: 'sizin', en: 'your (formal acc.)' },
          namen: { tr: 'adı / ismi', en: 'name (acc.)' },
        },
      },
    ],
  },
  {
    id: 'da',
    word: 'da',
    tr: 'orada / o zaman / olduğu için',
    sentences: [
      {
        id: 'da-1',
        targetWord: 'Da',
        german: 'Da ist die Post.',
        germanWithBlank: '___ ist die Post.',
        translationTR: 'İşte postane orada.',
        translationEN: 'There is the post office.',
        glossary: {
          ist: { tr: 'var / -dır', en: 'is', de: 'sein', trDict: 'olmak' },
          post: { tr: 'postane', en: 'post office' },
        },
      },
    ],
  },
  {
    id: 'danke',
    word: 'danke',
    tr: 'teşekkür ederim',
    sentences: [
      {
        id: 'danke-1',
        targetWord: 'Danke',
        german: 'Danke sehr!',
        germanWithBlank: '___ sehr!',
        translationTR: 'Çok teşekkür ederim!',
        translationEN: 'Thank you very much!',
        glossary: {
          sehr: { tr: 'çok', en: 'very / a lot' },
        },
      },
    ],
  },
  {
    id: 'dann',
    word: 'dann',
    tr: 'o zaman / sonra',
    sentences: [
      {
        id: 'dann-1',
        targetWord: 'dann',
        german: 'Erst esse ich, dann gehe ich.',
        germanWithBlank: 'Erst esse ich, ___ gehe ich.',
        translationTR: 'Önce yiyorum, sonra gidiyorum.',
        translationEN: 'First I eat, then I go.',
        glossary: {
          erst: { tr: 'önce', en: 'first' },
          esse: { tr: 'yiyorum', en: 'I eat', de: 'essen', trDict: 'yemek' },
          gehe: { tr: 'gidiyorum', en: 'I go', de: 'gehen', trDict: 'gitmek' },
        },
      },
    ],
  },
  {
    id: 'denn',
    word: 'denn',
    tr: 'çünkü / acaba',
    sentences: [
      {
        id: 'denn-1',
        targetWord: 'denn',
        german: 'Ich gehe nicht aus, denn es regnet.',
        germanWithBlank: 'Ich gehe nicht aus, ___ es regnet.',
        translationTR: 'Dışarı çıkmıyorum çünkü yağmur yağıyor.',
        translationEN: 'I am not going out, because it is raining.',
        glossary: {
          gehe: { tr: 'gidiyorum', en: 'I go', de: 'gehen', trDict: 'gitmek' },
          nicht: { tr: 'değil', en: 'not' },
          aus: { tr: 'dışarı', en: 'out' },
          es: { tr: 'o (hava)', en: 'it' },
          regnet: { tr: 'yağıyor (yağmur)', en: 'is raining', de: 'regnen', trDict: 'yağmak' },
        },
      },
    ],
  },
  {
    id: 'durch',
    word: 'durch',
    tr: 'içinden / aracılığıyla',
    sentences: [
      {
        id: 'durch-1',
        targetWord: 'durch',
        german: 'Wir fahren durch den Tunnel.',
        germanWithBlank: 'Wir fahren ___ den Tunnel.',
        translationTR: 'Tünelden geçiyoruz.',
        translationEN: 'We drive through the tunnel.',
        glossary: {
          wir: { tr: 'biz', en: 'we' },
          fahren: { tr: 'gidiyoruz / sürüyoruz', en: 'we drive', de: 'fahren', trDict: 'sürmek' },
          den: { tr: 'the (akkusativ)', en: 'the (acc.)' },
          tunnel: { tr: 'tünel', en: 'tunnel' },
        },
      },
    ],
  },
  {
    id: 'dürfen',
    word: 'dürfen',
    tr: 'izinli olmak / -ebilmek',
    sentences: [
      {
        id: 'dürfen-1',
        targetWord: 'Darf',
        german: 'Darf ich hier parken?',
        germanWithBlank: '___ ich hier parken?',
        translationTR: 'Buraya park edebilir miyim?',
        translationEN: 'Am I allowed to park here?',
        glossary: {
          ich: { tr: 'ben', en: 'I' },
          hier: { tr: 'burada', en: 'here' },
          parken: { tr: 'park etmek', en: 'to park', de: 'parken', trDict: 'park etmek' },
        },
      },
    ],
  },
  {
    id: 'einladen',
    word: 'einladen',
    tr: 'davet etmek',
    sentences: [
      {
        id: 'einladen-1',
        targetWord: 'eingeladen',
        german: 'Ich habe dich zum Essen eingeladen.',
        germanWithBlank: 'Ich habe dich zum Essen ___.',
        translationTR: 'Seni yemeğe davet ettim.',
        translationEN: 'I invited you to dinner.',
        glossary: {
          habe: { tr: '... -dim (yardımcı fiil)', en: 'have (auxiliary)' },
          dich: { tr: 'seni', en: 'you (acc.)' },
          zum: { tr: 'için (zu + dem)', en: 'to / for the' },
          essen: { tr: 'yemek', en: 'dinner / meal' },
        },
      },
    ],
  },
  {
    id: 'einsteigen',
    word: 'einsteigen',
    tr: '(araca) binmek',
    sentences: [
      {
        id: 'einsteigen-1',
        targetWord: 'eingestiegen',
        german: 'Er ist in den Bus eingestiegen.',
        germanWithBlank: 'Er ist in den Bus ___.',
        translationTR: 'Otobüse bindi.',
        translationEN: 'He got on the bus.',
        glossary: {
          ist: { tr: '... -di (yardımcı fiil)', en: 'has/is (auxiliary)' },
          in: { tr: '-e (yön)', en: 'into / onto' },
          den: { tr: 'the (akkusativ)', en: 'the (acc.)' },
          bus: { tr: 'otobüs', en: 'bus' },
        },
      },
    ],
  },
  {
    id: 'die-e-mail',
    word: 'die E-Mail',
    sentences: [
      {
        id: 'e-mail-1',
        targetWord: 'E-Mail',
        german: 'Schick mir bitte eine E-Mail.',
        germanWithBlank: 'Schick mir bitte eine ___.',
        translationTR: 'Lütfen bana bir e-posta gönder.',
        translationEN: 'Please send me an e-mail.',
        glossary: {
          schick: { tr: 'gönder', en: 'send', de: 'schicken', trDict: 'göndermek' },
          mir: { tr: 'bana', en: 'to me' },
          bitte: { tr: 'lütfen', en: 'please' },
          eine: { tr: 'bir', en: 'a/an' },
        },
      },
    ],
  },
  {
    id: 'endlich',
    word: 'endlich',
    tr: 'sonunda',
    sentences: [
      {
        id: 'endlich-1',
        targetWord: 'Endlich',
        german: 'Endlich bin ich zu Hause!',
        germanWithBlank: '___ bin ich zu Hause!',
        translationTR: 'Sonunda evdeyim!',
        translationEN: 'Finally I am home!',
        glossary: {
          bin: { tr: '-im (olmak)', en: 'I am', de: 'sein', trDict: 'olmak' },
          zu: { tr: '-de (ev için)', en: 'at' },
          hause: { tr: 'evde (zu Hause)', en: 'at home' },
        },
      },
    ],
  },
  {
    id: 'die-entschuldigung',
    word: 'die Entschuldigung',
    tr: 'özür / mazeret',
    sentences: [
      {
        id: 'entschuldigung-1',
        targetWord: 'Entschuldigung',
        german: 'Entschuldigung, wo ist der Bahnhof?',
        germanWithBlank: '___, wo ist der Bahnhof?',
        translationTR: 'Pardon, tren istasyonu nerede?',
        translationEN: 'Excuse me, where is the train station?',
        glossary: {
          wo: { tr: 'nerede', en: 'where' },
          ist: { tr: '-dır', en: 'is', de: 'sein', trDict: 'olmak' },
          der: { tr: 'the (maskulin)', en: 'the (masc.)' },
          bahnhof: { tr: 'tren istasyonu', en: 'train station' },
        },
      },
    ],
  },
  {
    id: 'erklären',
    word: 'erklären',
    tr: 'açıklamak',
    sentences: [
      {
        id: 'erklären-1',
        targetWord: 'erklären',
        german: 'Kannst du mir das erklären?',
        germanWithBlank: 'Kannst du mir das ___?',
        translationTR: 'Bunu bana açıklayabilir misin?',
        translationEN: 'Can you explain that to me?',
        glossary: {
          kannst: { tr: '-ebilir misin', en: 'can you', de: 'können', trDict: 'yapabilmek' },
          du: { tr: 'sen', en: 'you' },
          mir: { tr: 'bana', en: 'to me' },
          das: { tr: 'bunu / bunu (akkusativ)', en: 'that (acc.)' },
        },
      },
    ],
  },
  {
    id: 'für',
    word: 'für',
    tr: 'için',
    sentences: [
      {
        id: 'für-1',
        targetWord: 'für',
        german: 'Das Geschenk ist für dich.',
        germanWithBlank: 'Das Geschenk ist ___ dich.',
        translationTR: 'Hediye senin için.',
        translationEN: 'The gift is for you.',
        glossary: {
          geschenk: { tr: 'hediye', en: 'gift' },
          ist: { tr: '-dır', en: 'is', de: 'sein', trDict: 'olmak' },
          dich: { tr: 'seni', en: 'you (acc.)' },
        },
      },
    ],
  },
  {
    id: 'geben',
    word: 'geben',
    tr: 'vermek',
    sentences: [
      {
        id: 'geben-1',
        targetWord: 'geben',
        german: 'Kannst du mir bitte das Salz geben?',
        germanWithBlank: 'Kannst du mir bitte das Salz ___?',
        translationTR: 'Bana tuzu verebilir misin?',
        translationEN: 'Can you give me the salt please?',
        glossary: {
          kannst: { tr: '-ebilir misin', en: 'can you', de: 'können', trDict: 'yapabilmek' },
          du: { tr: 'sen', en: 'you' },
          mir: { tr: 'bana', en: 'to me' },
          bitte: { tr: 'lütfen', en: 'please' },
          salz: { tr: 'tuz', en: 'salt' },
        },
      },
    ],
  },
  {
    id: 'gern',
    word: 'gern',
    sentences: [
      {
        id: 'gern-1',
        targetWord: 'gern',
        german: 'Ich esse gern Fisch.',
        germanWithBlank: 'Ich esse ___ Fisch.',
        translationTR: 'Balık yemeyi severim.',
        translationEN: 'I like eating fish.',
        glossary: {
          esse: { tr: 'yiyorum', en: 'I eat', de: 'essen', trDict: 'yemek' },
          fisch: { tr: 'balık', en: 'fish' },
        },
      },
    ],
  },
  {
    id: 'gleich',
    word: 'gleich',
    tr: 'aynı / birazdan',
    sentences: [
      {
        id: 'gleich-1',
        targetWord: 'gleich',
        german: 'Ich komme gleich!',
        germanWithBlank: 'Ich komme ___!',
        translationTR: 'Hemen geliyorum!',
        translationEN: 'I\'ll be right there!',
        glossary: {
          komme: { tr: 'geliyorum', en: 'I come', de: 'kommen', trDict: 'gelmek' },
        },
      },
    ],
  },
  {
    id: 'haben',
    word: 'haben',
    tr: 'sahip olmak',
    sentences: [
      {
        id: 'haben-1',
        targetWord: 'habe',
        german: 'Ich habe keine Zeit.',
        germanWithBlank: 'Ich ___ keine Zeit.',
        translationTR: 'Zamanım yok.',
        translationEN: 'I have no time.',
        glossary: {
          keine: { tr: 'hiç / yok', en: 'no / not any' },
          zeit: { tr: 'zaman', en: 'time' },
        },
      },
    ],
  },
  {
    id: 'heißen',
    word: 'heißen',
    tr: 'adı olmak / anlamına gelmek',
    sentences: [
      {
        id: 'heißen-1',
        targetWord: 'heißen',
        german: 'Wie heißen Sie?',
        germanWithBlank: 'Wie ___ Sie?',
        translationTR: 'Adınız ne?',
        translationEN: 'What is your name?',
        glossary: {
          wie: { tr: 'nasıl / ne', en: 'how / what' },
          sie: { tr: 'siz (resmi)', en: 'you (formal)' },
        },
      },
    ],
  },
  {
    id: 'hier',
    word: 'hier',
    sentences: [
      {
        id: 'hier-1',
        targetWord: 'hier',
        german: 'Das Café ist hier rechts.',
        germanWithBlank: 'Das Café ist ___ rechts.',
        translationTR: 'Kafe burada sağda.',
        translationEN: 'The café is here on the right.',
        glossary: {
          café: { tr: 'kafe', en: 'café' },
          ist: { tr: '-dır', en: 'is', de: 'sein', trDict: 'olmak' },
          rechts: { tr: 'sağda', en: 'on the right' },
        },
      },
    ],
  },
  {
    id: 'hören',
    word: 'hören',
    tr: 'duymak / dinlemek',
    sentences: [
      {
        id: 'hören-1',
        targetWord: 'höre',
        german: 'Ich höre gern Musik.',
        germanWithBlank: 'Ich ___ gern Musik.',
        translationTR: 'Müzik dinlemeyi severim.',
        translationEN: 'I like listening to music.',
        glossary: {
          gern: { tr: 'severek', en: 'gladly' },
          musik: { tr: 'müzik', en: 'music' },
        },
      },
    ],
  },
  {
    id: 'immer',
    word: 'immer',
    tr: 'her zaman',
    sentences: [
      {
        id: 'immer-1',
        targetWord: 'immer',
        german: 'Er kommt immer pünktlich.',
        germanWithBlank: 'Er kommt ___ pünktlich.',
        translationTR: 'Her zaman zamanında geliyor.',
        translationEN: 'He always comes on time.',
        glossary: {
          er: { tr: 'o (erkek)', en: 'he' },
          kommt: { tr: 'geliyor', en: 'comes', de: 'kommen', trDict: 'gelmek' },
          pünktlich: { tr: 'zamanında / dakik', en: 'on time / punctual' },
        },
      },
    ],
  },
  {
    id: 'interessant',
    word: 'interessant',
    tr: 'ilginç',
    sentences: [
      {
        id: 'interessant-1',
        targetWord: 'interessant',
        german: 'Das Buch ist sehr interessant.',
        germanWithBlank: 'Das Buch ist sehr ___.',
        translationTR: 'Kitap çok ilginç.',
        translationEN: 'The book is very interesting.',
        glossary: {
          buch: { tr: 'kitap', en: 'book' },
          ist: { tr: '-dır', en: 'is', de: 'sein', trDict: 'olmak' },
          sehr: { tr: 'çok', en: 'very' },
        },
      },
    ],
  },
  {
    id: 'ja',
    word: 'ja',
    tr: 'evet / (vurgu)',
    sentences: [
      {
        id: 'ja-1',
        targetWord: 'Ja',
        german: 'Ja, ich spreche Deutsch.',
        germanWithBlank: '___, ich spreche Deutsch.',
        translationTR: 'Evet, Almanca konuşuyorum.',
        translationEN: 'Yes, I speak German.',
        glossary: {
          ich: { tr: 'ben', en: 'I' },
          spreche: { tr: 'konuşuyorum', en: 'I speak', de: 'sprechen', trDict: 'konuşmak' },
          deutsch: { tr: 'Almanca', en: 'German' },
        },
      },
    ],
  },
  {
    id: 'kennen',
    word: 'kennen',
    tr: 'tanımak / bilmek',
    sentences: [
      {
        id: 'kennen-1',
        targetWord: 'kenne',
        german: 'Ich kenne diese Stadt nicht.',
        germanWithBlank: 'Ich ___ diese Stadt nicht.',
        translationTR: 'Bu şehri tanımıyorum.',
        translationEN: 'I don\'t know this city.',
        glossary: {
          diese: { tr: 'bu', en: 'this' },
          stadt: { tr: 'şehir', en: 'city' },
          nicht: { tr: 'değil', en: 'not' },
        },
      },
    ],
  },
  {
    id: 'können',
    word: 'können',
    tr: '-ebilmek / yapabilmek',
    sentences: [
      {
        id: 'können-1',
        targetWord: 'kannst',
        german: 'Kannst du Gitarre spielen?',
        germanWithBlank: '___ du Gitarre spielen?',
        translationTR: 'Gitar çalabiliyor musun?',
        translationEN: 'Can you play the guitar?',
        glossary: {
          du: { tr: 'sen', en: 'you' },
          gitarre: { tr: 'gitar', en: 'guitar' },
          spielen: { tr: 'çalmak / oynamak', en: 'play', de: 'spielen', trDict: 'oynamak' },
        },
      },
    ],
  },
  {
    id: 'das-krankenhaus',
    word: 'das Krankenhaus',
    tr: 'hastane',
    sentences: [
      {
        id: 'krankenhaus-1',
        targetWord: 'Krankenhaus',
        german: 'Er liegt im Krankenhaus.',
        germanWithBlank: 'Er liegt im ___.',
        translationTR: 'Hastanede yatıyor.',
        translationEN: 'He is in hospital.',
        glossary: {
          er: { tr: 'o (erkek)', en: 'he' },
          liegt: { tr: 'yatıyor', en: 'is lying', de: 'liegen', trDict: 'yatmak' },
          im: { tr: '-de (in + dem)', en: 'in the' },
        },
      },
    ],
  },
  {
    id: 'kurz',
    word: 'kurz',
    tr: 'kısa',
    sentences: [
      {
        id: 'kurz-1',
        targetWord: 'kurz',
        german: 'Haben Sie kurz Zeit?',
        germanWithBlank: 'Haben Sie ___ Zeit?',
        translationTR: 'Kısa bir dakikanız var mı?',
        translationEN: 'Do you have a moment?',
        glossary: {
          haben: { tr: 'var mı / sahip misiniz', en: 'do you have', de: 'haben', trDict: 'sahip olmak' },
          sie: { tr: 'siz (resmi)', en: 'you (formal)' },
          zeit: { tr: 'zaman', en: 'time / a moment' },
        },
      },
    ],
  },
  {
    id: 'leben',
    word: 'leben',
    tr: 'hayat / yaşam',
    sentences: [
      {
        id: 'leben-1',
        targetWord: 'lebe',
        german: 'Ich lebe seit zehn Jahren in Berlin.',
        germanWithBlank: 'Ich ___ seit zehn Jahren in Berlin.',
        translationTR: 'On yıldır Berlin\'de yaşıyorum.',
        translationEN: 'I have been living in Berlin for ten years.',
        glossary: {
          seit: { tr: '-den beri', en: 'since / for' },
          zehn: { tr: 'on', en: 'ten' },
          jahren: { tr: 'yıl', en: 'years' },
          in: { tr: '-de', en: 'in' },
        },
      },
    ],
  },
  {
    id: 'lieben',
    word: 'lieben',
    tr: 'sevmek',
    sentences: [
      {
        id: 'lieben-1',
        targetWord: 'liebe',
        german: 'Ich liebe meinen Beruf.',
        germanWithBlank: 'Ich ___ meinen Beruf.',
        translationTR: 'Mesleğimi seviyorum.',
        translationEN: 'I love my job.',
        glossary: {
          meinen: { tr: 'benim (akkusativ)', en: 'my (acc.)' },
          beruf: { tr: 'meslek', en: 'job / profession' },
        },
      },
    ],
  },
  {
    id: 'links',
    word: 'links',
    tr: 'solda / sola',
    sentences: [
      {
        id: 'links-1',
        targetWord: 'links',
        german: 'Das Hotel ist links.',
        germanWithBlank: 'Das Hotel ist ___.',
        translationTR: 'Otel solda.',
        translationEN: 'The hotel is on the left.',
        glossary: {
          hotel: { tr: 'otel', en: 'hotel' },
          ist: { tr: '-dır', en: 'is', de: 'sein', trDict: 'olmak' },
        },
      },
    ],
  },
  {
    id: 'manchmal',
    word: 'manchmal',
    tr: 'bazen',
    sentences: [
      {
        id: 'manchmal-1',
        targetWord: 'Manchmal',
        german: 'Manchmal gehe ich joggen.',
        germanWithBlank: '___ gehe ich joggen.',
        translationTR: 'Bazen koşuya çıkıyorum.',
        translationEN: 'Sometimes I go jogging.',
        glossary: {
          gehe: { tr: 'gidiyorum', en: 'I go', de: 'gehen', trDict: 'gitmek' },
          ich: { tr: 'ben', en: 'I' },
          joggen: { tr: 'koşmak / jogging yapmak', en: 'jogging' },
        },
      },
    ],
  },
  {
    id: 'mit',
    word: 'mit',
    tr: 'ile',
    sentences: [
      {
        id: 'mit-1',
        targetWord: 'mit',
        german: 'Ich fahre mit dem Zug.',
        germanWithBlank: 'Ich fahre ___ dem Zug.',
        translationTR: 'Trenle gidiyorum.',
        translationEN: 'I travel by train.',
        glossary: {
          fahre: { tr: 'gidiyorum (araçla)', en: 'I travel', de: 'fahren', trDict: 'sürmek' },
          dem: { tr: 'the (datif)', en: 'the (dat.)' },
          zug: { tr: 'tren', en: 'train' },
        },
      },
    ],
  },
  {
    id: 'möchten',
    word: 'möchten',
    tr: 'istemek (arzu etmek)',
    sentences: [
      {
        id: 'möchten-1',
        targetWord: 'möchte',
        german: 'Ich möchte einen Tee, bitte.',
        germanWithBlank: 'Ich ___ einen Tee, bitte.',
        translationTR: 'Bir çay istiyorum, lütfen.',
        translationEN: 'I would like a tea, please.',
        glossary: {
          einen: { tr: 'bir (akkusativ)', en: 'a/an (acc.)' },
          tee: { tr: 'çay', en: 'tea' },
          bitte: { tr: 'lütfen', en: 'please' },
        },
      },
    ],
  },
  {
    id: 'mögen',
    word: 'mögen',
    sentences: [
      {
        id: 'mögen-1',
        targetWord: 'mag',
        german: 'Ich mag keine Zwiebeln.',
        germanWithBlank: 'Ich ___ keine Zwiebeln.',
        translationTR: 'Soğanı sevmiyorum.',
        translationEN: 'I don\'t like onions.',
        glossary: {
          keine: { tr: 'hiç / sevmiyorum', en: 'no / not any' },
          zwiebeln: { tr: 'soğanlar', en: 'onions' },
        },
      },
    ],
  },
  {
    id: 'müssen',
    word: 'müssen',
    tr: '-malı / -meli / mecbur olmak',
    sentences: [
      {
        id: 'müssen-1',
        targetWord: 'muss',
        german: 'Ich muss heute früh aufstehen.',
        germanWithBlank: 'Ich ___ heute früh aufstehen.',
        translationTR: 'Bugün erken kalkmam gerekiyor.',
        translationEN: 'I have to get up early today.',
        glossary: {
          heute: { tr: 'bugün', en: 'today' },
          früh: { tr: 'erken', en: 'early' },
          aufstehen: { tr: 'kalkmak', en: 'to get up', de: 'aufstehen', trDict: 'kalkmak' },
        },
      },
    ],
  },
  {
    id: 'nach',
    word: 'nach',
    tr: '-e doğru / sonra',
    sentences: [
      {
        id: 'nach-1',
        targetWord: 'nach',
        german: 'Ich fahre nach München.',
        germanWithBlank: 'Ich fahre ___ München.',
        translationTR: 'Münih\'e gidiyorum.',
        translationEN: 'I am going to Munich.',
        glossary: {
          fahre: { tr: 'gidiyorum (araçla)', en: 'I go / travel', de: 'fahren', trDict: 'gitmek' },
          münchen: { tr: 'Münih', en: 'Munich' },
        },
      },
    ],
  },
  {
    id: 'nein',
    word: 'nein',
    tr: 'hayır',
    sentences: [
      {
        id: 'nein-1',
        targetWord: 'Nein',
        german: 'Nein, das stimmt nicht.',
        germanWithBlank: '___, das stimmt nicht.',
        translationTR: 'Hayır, bu doğru değil.',
        translationEN: 'No, that is not correct.',
        glossary: {
          das: { tr: 'bu / o', en: 'that' },
          stimmt: { tr: 'doğru / uyuyor', en: 'is correct', de: 'stimmen', trDict: 'doğru olmak' },
          nicht: { tr: 'değil', en: 'not' },
        },
      },
    ],
  },
  {
    id: 'nicht',
    word: 'nicht',
    tr: 'değil',
    sentences: [
      {
        id: 'nicht-1',
        targetWord: 'nicht',
        german: 'Ich verstehe das nicht.',
        germanWithBlank: 'Ich verstehe das ___.',
        translationTR: 'Bunu anlamıyorum.',
        translationEN: 'I don\'t understand that.',
        glossary: {
          verstehe: { tr: 'anlıyorum', en: 'I understand', de: 'verstehen', trDict: 'anlamak' },
          das: { tr: 'bunu / bunu', en: 'that' },
        },
      },
    ],
  },
  {
    id: 'nichts',
    word: 'nichts',
    tr: 'hiçbir şey',
    sentences: [
      {
        id: 'nichts-1',
        targetWord: 'nichts',
        german: 'Ich habe nichts gegessen.',
        germanWithBlank: 'Ich habe ___ gegessen.',
        translationTR: 'Hiçbir şey yemedim.',
        translationEN: 'I have eaten nothing.',
        glossary: {
          habe: { tr: '-dim (Perfekt)', en: 'have (perfect)', de: 'haben' },
          gegessen: { tr: 'yedim', en: 'eaten', de: 'essen', trDict: 'yemek' },
        },
      },
    ],
  },
  {
    id: 'nie',
    word: 'nie',
    tr: 'asla',
    sentences: [
      {
        id: 'nie-1',
        targetWord: 'nie',
        german: 'Ich trinke nie Alkohol.',
        germanWithBlank: 'Ich trinke ___ Alkohol.',
        translationTR: 'Hiç alkol içmiyorum.',
        translationEN: 'I never drink alcohol.',
        glossary: {
          trinke: { tr: 'içiyorum', en: 'I drink', de: 'trinken', trDict: 'içmek' },
          alkohol: { tr: 'alkol', en: 'alcohol' },
        },
      },
    ],
  },
  {
    id: 'oben',
    word: 'oben',
    tr: 'yukarıda / üstte',
    sentences: [
      {
        id: 'oben-1',
        targetWord: 'oben',
        german: 'Das Schlafzimmer ist oben.',
        germanWithBlank: 'Das Schlafzimmer ist ___.',
        translationTR: 'Yatak odası üstte.',
        translationEN: 'The bedroom is upstairs.',
        glossary: {
          schlafzimmer: { tr: 'yatak odası', en: 'bedroom' },
          ist: { tr: '-dır', en: 'is', de: 'sein', trDict: 'olmak' },
        },
      },
    ],
  },
  {
    id: 'oder',
    word: 'oder',
    tr: 'veya / yoksa',
    sentences: [
      {
        id: 'oder-1',
        targetWord: 'oder',
        german: 'Möchtest du Kaffee oder Tee?',
        germanWithBlank: 'Möchtest du Kaffee ___ Tee?',
        translationTR: 'Kahve mi yoksa çay mı istersin?',
        translationEN: 'Would you like coffee or tea?',
        glossary: {
          möchtest: { tr: 'ister misin', en: 'would you like', de: 'möchten', trDict: 'istemek' },
          du: { tr: 'sen', en: 'you' },
          kaffee: { tr: 'kahve', en: 'coffee' },
          tee: { tr: 'çay', en: 'tea' },
        },
      },
    ],
  },
  {
    id: 'oft',
    word: 'oft',
    sentences: [
      {
        id: 'oft-1',
        targetWord: 'oft',
        german: 'Ich gehe oft spazieren.',
        germanWithBlank: 'Ich gehe ___ spazieren.',
        translationTR: 'Sık sık yürüyüşe çıkıyorum.',
        translationEN: 'I often go for a walk.',
        glossary: {
          gehe: { tr: 'gidiyorum', en: 'I go', de: 'gehen', trDict: 'gitmek' },
          spazieren: { tr: 'yürüyüş (spazieren gehen)', en: 'for a walk' },
        },
      },
    ],
  },
  {
    id: 'ohne',
    word: 'ohne',
    tr: '-sız / -siz',
    sentences: [
      {
        id: 'ohne-1',
        targetWord: 'ohne',
        german: 'Ich trinke Kaffee ohne Milch.',
        germanWithBlank: 'Ich trinke Kaffee ___ Milch.',
        translationTR: 'Kahvemi sütsüz içiyorum.',
        translationEN: 'I drink coffee without milk.',
        glossary: {
          trinke: { tr: 'içiyorum', en: 'I drink', de: 'trinken', trDict: 'içmek' },
          kaffee: { tr: 'kahve', en: 'coffee' },
          milch: { tr: 'süt', en: 'milk' },
        },
      },
    ],
  },
  {
    id: 'rechts',
    word: 'rechts',
    tr: 'sağda / sağa',
    sentences: [
      {
        id: 'rechts-1',
        targetWord: 'rechts',
        german: 'Das Museum ist rechts.',
        germanWithBlank: 'Das Museum ist ___.',
        translationTR: 'Müze sağda.',
        translationEN: 'The museum is on the right.',
        glossary: {
          museum: { tr: 'müze', en: 'museum' },
          ist: { tr: '-dır', en: 'is', de: 'sein', trDict: 'olmak' },
        },
      },
    ],
  },
  {
    id: 'richtig',
    word: 'richtig',
    tr: 'doğru',
    sentences: [
      {
        id: 'richtig-1',
        targetWord: 'richtig',
        german: 'Das ist die richtige Antwort.',
        germanWithBlank: 'Das ist die ___ Antwort.',
        translationTR: 'Bu doğru cevap.',
        translationEN: 'That is the correct answer.',
        glossary: {
          ist: { tr: '-dır', en: 'is', de: 'sein', trDict: 'olmak' },
          die: { tr: 'the (dişil)', en: 'the (fem.)' },
          antwort: { tr: 'cevap', en: 'answer' },
        },
      },
    ],
  },
  {
    id: 'ruhig',
    word: 'ruhig',
    tr: 'sakin / sessiz',
    sentences: [
      {
        id: 'ruhig-1',
        targetWord: 'ruhig',
        german: 'Das Zimmer ist sehr ruhig.',
        germanWithBlank: 'Das Zimmer ist sehr ___.',
        translationTR: 'Oda çok sessiz.',
        translationEN: 'The room is very quiet.',
        glossary: {
          zimmer: { tr: 'oda', en: 'room' },
          ist: { tr: '-dır', en: 'is', de: 'sein', trDict: 'olmak' },
          sehr: { tr: 'çok', en: 'very' },
        },
      },
    ],
  },
  {
    id: 'sauber',
    word: 'sauber',
    tr: 'temiz',
    sentences: [
      {
        id: 'sauber-1',
        targetWord: 'sauber',
        german: 'Die Wohnung ist sauber.',
        germanWithBlank: 'Die Wohnung ist ___.',
        translationTR: 'Daire temiz.',
        translationEN: 'The apartment is clean.',
        glossary: {
          wohnung: { tr: 'daire', en: 'apartment' },
          ist: { tr: '-dır', en: 'is', de: 'sein', trDict: 'olmak' },
        },
      },
    ],
  },
  {
    id: 'schnell',
    word: 'schnell',
    tr: 'hızlı / çabuk',
    sentences: [
      {
        id: 'schnell-1',
        targetWord: 'schnell',
        german: 'Der Zug fährt sehr schnell.',
        germanWithBlank: 'Der Zug fährt sehr ___.',
        translationTR: 'Tren çok hızlı gidiyor.',
        translationEN: 'The train travels very fast.',
        glossary: {
          zug: { tr: 'tren', en: 'train' },
          fährt: { tr: 'gidiyor', en: 'travels', de: 'fahren', trDict: 'gitmek / sürmek' },
          sehr: { tr: 'çok', en: 'very' },
        },
      },
    ],
  },
  {
    id: 'singen',
    word: 'singen',
    tr: 'şarkı söylemek',
    sentences: [
      {
        id: 'singen-1',
        targetWord: 'singt',
        german: 'Sie singt sehr schön.',
        germanWithBlank: 'Sie ___ sehr schön.',
        translationTR: 'Çok güzel şarkı söylüyor.',
        translationEN: 'She sings very beautifully.',
        glossary: {
          sie: { tr: 'o (kadın)', en: 'she' },
          sehr: { tr: 'çok', en: 'very' },
          schön: { tr: 'güzel', en: 'beautifully' },
        },
      },
    ],
  },
  {
    id: 'sofort',
    word: 'sofort',
    tr: 'hemen / derhal',
    sentences: [
      {
        id: 'sofort-1',
        targetWord: 'sofort',
        german: 'Ich komme sofort!',
        germanWithBlank: 'Ich komme ___!',
        translationTR: 'Hemen geliyorum!',
        translationEN: 'I\'m coming right away!',
        glossary: {
          komme: { tr: 'geliyorum', en: 'I come', de: 'kommen', trDict: 'gelmek' },
        },
      },
    ],
  },
  {
    id: 'sollen',
    word: 'sollen',
    tr: '-malı / -meli',
    sentences: [
      {
        id: 'sollen-1',
        targetWord: 'soll',
        german: 'Was soll ich machen?',
        germanWithBlank: 'Was ___ ich machen?',
        translationTR: 'Ne yapmalıyım?',
        translationEN: 'What should I do?',
        glossary: {
          was: { tr: 'ne', en: 'what' },
          ich: { tr: 'ben', en: 'I' },
          machen: { tr: 'yapmak', en: 'to do', de: 'machen', trDict: 'yapmak' },
        },
      },
    ],
  },
  {
    id: 'tanzen',
    word: 'tanzen',
    tr: 'dans etmek',
    sentences: [
      {
        id: 'tanzen-1',
        targetWord: 'tanzen',
        german: 'Kannst du tanzen?',
        germanWithBlank: 'Kannst du ___?',
        translationTR: 'Dans edebiliyor musun?',
        translationEN: 'Can you dance?',
        glossary: {
          kannst: { tr: '-ebilir misin', en: 'can you', de: 'können', trDict: 'yapabilmek' },
          du: { tr: 'sen', en: 'you' },
        },
      },
    ],
  },
  {
    id: 'tun',
    word: 'tun',
    tr: 'yapmak / etmek',
    sentences: [
      {
        id: 'tun-1',
        targetWord: 'tun',
        german: 'Was soll ich jetzt tun?',
        germanWithBlank: 'Was soll ich jetzt ___?',
        translationTR: 'Şimdi ne yapmalıyım?',
        translationEN: 'What should I do now?',
        glossary: {
          was: { tr: 'ne', en: 'what' },
          soll: { tr: 'yapmalıyım', en: 'should', de: 'sollen', trDict: 'gerekmek' },
          ich: { tr: 'ben', en: 'I' },
          jetzt: { tr: 'şimdi', en: 'now' },
        },
      },
    ],
  },
  {
    id: 'um',
    word: 'um',
    tr: '-da / -de / etrafında',
    sentences: [
      {
        id: 'um-1',
        targetWord: 'um',
        german: 'Wir essen um 12 Uhr.',
        germanWithBlank: 'Wir essen ___ 12 Uhr.',
        translationTR: 'Saat 12\'de yiyoruz.',
        translationEN: 'We eat at 12 o\'clock.',
        glossary: {
          wir: { tr: 'biz', en: 'we' },
          essen: { tr: 'yiyoruz', en: 'we eat', de: 'essen', trDict: 'yemek' },
          uhr: { tr: 'saat', en: "o'clock" },
        },
      },
    ],
  },
  {
    id: 'und',
    word: 'und',
    tr: 've',
    sentences: [
      {
        id: 'und-1',
        targetWord: 'und',
        german: 'Ich lerne Deutsch und Englisch.',
        germanWithBlank: 'Ich lerne Deutsch ___ Englisch.',
        translationTR: 'Almanca ve İngilizce öğreniyorum.',
        translationEN: 'I am learning German and English.',
        glossary: {
          lerne: { tr: 'öğreniyorum', en: 'I learn', de: 'lernen', trDict: 'öğrenmek' },
          deutsch: { tr: 'Almanca', en: 'German' },
          englisch: { tr: 'İngilizce', en: 'English' },
        },
      },
    ],
  },
  {
    id: 'unten',
    word: 'unten',
    tr: 'aşağıda',
    sentences: [
      {
        id: 'unten-1',
        targetWord: 'unten',
        german: 'Das Bad ist unten.',
        germanWithBlank: 'Das Bad ist ___.',
        translationTR: 'Banyo altta.',
        translationEN: 'The bathroom is downstairs.',
        glossary: {
          bad: { tr: 'banyo', en: 'bathroom' },
          ist: { tr: '-dır', en: 'is', de: 'sein', trDict: 'olmak' },
        },
      },
    ],
  },
  {
    id: 'vielleicht',
    word: 'vielleicht',
    tr: 'belki',
    sentences: [
      {
        id: 'vielleicht-1',
        targetWord: 'Vielleicht',
        german: 'Vielleicht komme ich morgen.',
        germanWithBlank: '___ komme ich morgen.',
        translationTR: 'Belki yarın gelirim.',
        translationEN: 'Maybe I will come tomorrow.',
        glossary: {
          komme: { tr: 'geliyorum / geleceğim', en: 'I come', de: 'kommen', trDict: 'gelmek' },
          ich: { tr: 'ben', en: 'I' },
          morgen: { tr: 'yarın', en: 'tomorrow' },
        },
      },
    ],
  },
  {
    id: 'von',
    word: 'von',
    sentences: [
      {
        id: 'von-1',
        targetWord: 'von',
        german: 'Ich komme von der Arbeit.',
        germanWithBlank: 'Ich komme ___ der Arbeit.',
        translationTR: 'İşten geliyorum.',
        translationEN: 'I am coming from work.',
        glossary: {
          komme: { tr: 'geliyorum', en: 'I come', de: 'kommen', trDict: 'gelmek' },
          der: { tr: 'the (datif dişil)', en: 'the (dat. fem.)' },
          arbeit: { tr: 'iş', en: 'work' },
        },
      },
    ],
  },
  {
    id: 'vor',
    word: 'vor',
    tr: 'önünde / önce / -den dolayı',
    sentences: [
      {
        id: 'vor-1',
        targetWord: 'vor',
        german: 'Das Café ist vor dem Bahnhof.',
        germanWithBlank: 'Das Café ist ___ dem Bahnhof.',
        translationTR: 'Kafe istasyonun önünde.',
        translationEN: 'The café is in front of the station.',
        glossary: {
          café: { tr: 'kafe', en: 'café' },
          ist: { tr: '-dır', en: 'is', de: 'sein', trDict: 'olmak' },
          dem: { tr: 'the (datif)', en: 'the (dat.)' },
          bahnhof: { tr: 'tren istasyonu', en: 'train station' },
        },
      },
    ],
  },
  {
    id: 'wie',
    word: 'wie',
    sentences: [
      {
        id: 'wie-1',
        targetWord: 'Wie',
        german: 'Wie heißt du?',
        germanWithBlank: '___ heißt du?',
        translationTR: 'Adın ne?',
        translationEN: 'What is your name?',
        glossary: {
          heißt: { tr: 'adın ne / adı ne', en: 'is called', de: 'heißen', trDict: 'adı olmak' },
          du: { tr: 'sen', en: 'you' },
        },
      },
    ],
  },
  {
    id: 'wie-viel',
    word: 'wie viel',
    sentences: [
      {
        id: 'wie-viel-1',
        targetWord: 'viel',
        german: 'Wie viel kostet das?',
        germanWithBlank: 'Wie ___ kostet das?',
        translationTR: 'Bu ne kadar tutuyor?',
        translationEN: 'How much does this cost?',
        glossary: {
          wie: { tr: 'ne kadar / nasıl', en: 'how much' },
          kostet: { tr: 'tutuyor / fiyatı', en: 'costs', de: 'kosten', trDict: 'tutmak' },
          das: { tr: 'bu', en: 'this' },
        },
      },
    ],
  },
  {
    id: 'wo',
    word: 'wo',
    tr: 'nerede',
    sentences: [
      {
        id: 'wo-1',
        targetWord: 'Wo',
        german: 'Wo wohnst du?',
        germanWithBlank: '___ wohnst du?',
        translationTR: 'Nerede oturuyorsun?',
        translationEN: 'Where do you live?',
        glossary: {
          wohnst: { tr: 'oturuyorsun', en: 'you live', de: 'wohnen', trDict: 'oturmak' },
          du: { tr: 'sen', en: 'you' },
        },
      },
    ],
  },
  {
    id: 'woher',
    word: 'woher',
    tr: 'nereden',
    sentences: [
      {
        id: 'woher-1',
        targetWord: 'Woher',
        german: 'Woher kommst du?',
        germanWithBlank: '___ kommst du?',
        translationTR: 'Nerelisin?',
        translationEN: 'Where are you from?',
        glossary: {
          kommst: { tr: 'geliyorsun', en: 'you come', de: 'kommen', trDict: 'gelmek' },
          du: { tr: 'sen', en: 'you' },
        },
      },
    ],
  },
  {
    id: 'wohin',
    word: 'wohin',
    tr: 'nereye',
    sentences: [
      {
        id: 'wohin-1',
        targetWord: 'Wohin',
        german: 'Wohin fährst du im Urlaub?',
        germanWithBlank: '___ fährst du im Urlaub?',
        translationTR: 'Tatilde nereye gidiyorsun?',
        translationEN: 'Where are you going on holiday?',
        glossary: {
          fährst: { tr: 'gidiyorsun', en: 'you go', de: 'fahren', trDict: 'gitmek' },
          du: { tr: 'sen', en: 'you' },
          im: { tr: '-de (in + dem)', en: 'in the' },
          urlaub: { tr: 'tatil', en: 'holiday' },
        },
      },
    ],
  },
  {
    id: 'zu',
    word: 'zu',
    sentences: [
      {
        id: 'zu-1',
        targetWord: 'zu',
        german: 'Ich gehe zu Fuß.',
        germanWithBlank: 'Ich gehe ___ Fuß.',
        translationTR: 'Yürüyerek gidiyorum.',
        translationEN: 'I go on foot.',
        glossary: {
          gehe: { tr: 'gidiyorum', en: 'I go', de: 'gehen', trDict: 'gitmek' },
          fuß: { tr: 'ayak', en: 'foot (zu Fuß = on foot)' },
        },
      },
    ],
  },
  {
    id: 'zumachen',
    word: 'zumachen',
    tr: 'kapatmak',
    sentences: [
      {
        id: 'zumachen-1',
        targetWord: 'zugemacht',
        german: 'Er hat die Tür zugemacht.',
        germanWithBlank: 'Er hat die Tür ___.',
        translationTR: 'Kapıyı kapattı.',
        translationEN: 'He closed the door.',
        glossary: {
          'mach': { tr: 'yapmak / kapamak (emir)', en: 'close/do (imperative)', de: 'machen/zumachen' },
          'bitte': { tr: 'lütfen', en: 'please', de: 'bitte' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'tür': { tr: 'kapı', en: 'door', de: 'die Tür' },
        },
      },
    ],
  },
  {
    id: 'zusammen',
    word: 'zusammen',
    sentences: [
      {
        id: 'zusammen-1',
        targetWord: 'zusammen',
        german: 'Wir kochen heute zusammen.',
        germanWithBlank: 'Wir kochen heute ___.',
        translationTR: 'Bugün birlikte yemek yapıyoruz.',
        translationEN: 'We are cooking together today.',
        glossary: {
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'kochen': { tr: 'yemek pişirmek', en: 'cook', de: 'kochen' },
          'heute': { tr: 'bugün', en: 'today', de: 'heute' },
        },
      },
    ],
  },
  {
    id: 'zwischen',
    word: 'zwischen',
    tr: 'arasında',
    sentences: [
      {
        id: 'zwischen-1',
        targetWord: 'zwischen',
        german: 'Das Café ist zwischen dem Hotel und der Bank.',
        germanWithBlank: 'Das Café ist ___ dem Hotel und der Bank.',
        translationTR: 'Kafe otel ile banka arasında.',
        translationEN: 'The café is between the hotel and the bank.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'café': { tr: 'kafe', en: 'café', de: 'das Café' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'dem': { tr: 'belirli artikel (yansız/eril, datif)', en: 'the (dative)', de: 'dem' },
          'hotel': { tr: 'otel', en: 'hotel', de: 'das Hotel' },
          'und': { tr: 've', en: 'and', de: 'und' },
          'der': { tr: 'belirli artikel (dişil, datif)', en: 'the (dative)', de: 'der' },
          'bank': { tr: 'banka', en: 'bank', de: 'die Bank' },
        },
      },
    ],
  },
  {
    id: 'der-sommer',
    word: 'der Sommer',
    sentences: [
      {
        id: 'sommer-1',
        targetWord: 'Sommer',
        german: 'Im Sommer gehe ich schwimmen.',
        germanWithBlank: 'Im ___ gehe ich schwimmen.',
        translationTR: 'Yazın yüzmeye gidiyorum.',
        translationEN: 'In summer I go swimming.',
        glossary: {
          'im': { tr: '-de/-da (mevsimlerde)', en: 'in (seasons)', de: 'im' },
          'gehe': { tr: 'gitmek (ben)', en: 'go', de: 'gehen' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'schwimmen': { tr: 'yüzmek', en: 'swim/swimming', de: 'schwimmen' },
        },
      },
    ],
  },
  {
    id: 'der-januar',
    word: 'der Januar',
    sentences: [
      {
        id: 'januar-1',
        targetWord: 'Januar',
        german: 'Im Januar ist es sehr kalt.',
        germanWithBlank: 'Im ___ ist es sehr kalt.',
        translationTR: 'Ocakta çok soğuk oluyor.',
        translationEN: 'In January it is very cold.',
        glossary: {
          'im': { tr: '-de/-da (aylarda)', en: 'in (months)', de: 'im' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'es': { tr: 'o (kişisiz özne)', en: 'it', de: 'es' },
          'sehr': { tr: 'çok', en: 'very', de: 'sehr' },
          'kalt': { tr: 'soğuk', en: 'cold', de: 'kalt' },
        },
      },
    ],
  },
  {
    id: 'der-februar',
    word: 'der Februar',
    sentences: [
      {
        id: 'februar-1',
        targetWord: 'Februar',
        german: 'Im Februar gibt es oft Schnee.',
        germanWithBlank: 'Im ___ gibt es oft Schnee.',
        translationTR: 'Şubatta sık sık kar yağıyor.',
        translationEN: 'In February there is often snow.',
        glossary: {
          'im': { tr: '-de/-da (aylarda)', en: 'in (months)', de: 'im' },
          'gibt': { tr: 'var olmak / vermek', en: 'there is', de: 'geben' },
          'es': { tr: 'var (gibt es ile)', en: 'it (there is)', de: 'es' },
          'oft': { tr: 'sık sık', en: 'often', de: 'oft' },
          'schnee': { tr: 'kar', en: 'snow', de: 'der Schnee' },
        },
      },
    ],
  },
  {
    id: 'der-märz',
    word: 'der März',
    sentences: [
      {
        id: 'märz-1',
        targetWord: 'März',
        german: 'Im März beginnt der Frühling.',
        germanWithBlank: 'Im ___ beginnt der Frühling.',
        translationTR: 'Martta ilkbahar başlıyor.',
        translationEN: 'In March spring begins.',
        glossary: {
          'im': { tr: '-de/-da (aylarda)', en: 'in (months)', de: 'im' },
          'beginnt': { tr: 'başlamak', en: 'begins', de: 'beginnen' },
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'frühling': { tr: 'ilkbahar', en: 'spring', de: 'der Frühling' },
        },
      },
    ],
  },
  {
    id: 'der-april',
    word: 'der April',
    sentences: [
      {
        id: 'april-1',
        targetWord: 'April',
        german: 'Im April regnet es oft.',
        germanWithBlank: 'Im ___ regnet es oft.',
        translationTR: 'Nisanda çok sık yağmur yağıyor.',
        translationEN: 'In April it often rains.',
        glossary: {
          'im': { tr: '-de/-da (aylarda)', en: 'in (months)', de: 'im' },
          'regnet': { tr: 'yağmur yağmak', en: 'rains', de: 'regnen' },
          'es': { tr: 'o (kişisiz özne)', en: 'it', de: 'es' },
          'oft': { tr: 'sık sık', en: 'often', de: 'oft' },
        },
      },
    ],
  },
  {
    id: 'der-mai',
    word: 'der Mai',
    sentences: [
      {
        id: 'mai-1',
        targetWord: 'Mai',
        german: 'Im Mai blühen die Blumen.',
        germanWithBlank: 'Im ___ blühen die Blumen.',
        translationTR: 'Mayısta çiçekler açıyor.',
        translationEN: 'In May the flowers bloom.',
        glossary: {
          'im': { tr: '-de/-da (aylarda)', en: 'in (months)', de: 'im' },
          'blühen': { tr: 'çiçek açmak', en: 'bloom/flower', de: 'blühen' },
          'die': { tr: 'belirli artikel (çoğul)', en: 'the (plural)', de: 'die' },
          'blumen': { tr: 'çiçekler', en: 'flowers', de: 'die Blume' },
        },
      },
    ],
  },
  {
    id: 'der-juni',
    word: 'der Juni',
    tr: 'haziran',
    sentences: [
      {
        id: 'juni-1',
        targetWord: 'Juni',
        german: 'Im Juni beginnt der Sommer.',
        germanWithBlank: 'Im ___ beginnt der Sommer.',
        translationTR: 'Haziranda yaz başlıyor.',
        translationEN: 'In June summer begins.',
        glossary: {
          'im': { tr: '-de/-da (aylarda)', en: 'in (months)', de: 'im' },
          'beginnt': { tr: 'başlamak', en: 'begins', de: 'beginnen' },
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'sommer': { tr: 'yaz', en: 'summer', de: 'der Sommer' },
        },
      },
    ],
  },
  {
    id: 'der-juli',
    word: 'der Juli',
    tr: 'temmuz',
    sentences: [
      {
        id: 'juli-1',
        targetWord: 'Juli',
        german: 'Im Juli fahre ich in Urlaub.',
        germanWithBlank: 'Im ___ fahre ich in Urlaub.',
        translationTR: 'Temmuzda tatile gidiyorum.',
        translationEN: 'In July I go on holiday.',
        glossary: {
          'im': { tr: '-de/-da (aylarda)', en: 'in (months)', de: 'im' },
          'fahre': { tr: 'gitmek (araçla, ben)', en: 'go/travel', de: 'fahren' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'in': { tr: '-e (yön)', en: 'on/into', de: 'in' },
          'urlaub': { tr: 'tatil', en: 'holiday/vacation', de: 'der Urlaub' },
        },
      },
    ],
  },
  {
    id: 'der-august',
    word: 'der August',
    sentences: [
      {
        id: 'august-1',
        targetWord: 'August',
        german: 'Im August ist es sehr heiß.',
        germanWithBlank: 'Im ___ ist es sehr heiß.',
        translationTR: 'Ağustosta çok sıcak oluyor.',
        translationEN: 'In August it is very hot.',
        glossary: {
          'im': { tr: '-de/-da (aylarda kullanılır)', en: 'in (used with months)', de: 'im' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'es': { tr: 'o (tarafsız)', en: 'it', de: 'es' },
          'sehr': { tr: 'çok', en: 'very', de: 'sehr' },
          'heiß': { tr: 'sıcak', en: 'hot', de: 'heiß' },
        },
      },
    ],
  },
  {
    id: 'der-september',
    word: 'der September',
    sentences: [
      {
        id: 'september-1',
        targetWord: 'September',
        german: 'Im September beginnt die Schule wieder.',
        germanWithBlank: 'Im ___ beginnt die Schule wieder.',
        translationTR: 'Eylülde okul yeniden başlıyor.',
        translationEN: 'In September school starts again.',
        glossary: {
          'im': { tr: '-de/-da (aylarda kullanılır)', en: 'in (used with months)', de: 'im' },
          'beginnt': { tr: 'başlamak', en: 'starts', de: 'beginnen' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'schule': { tr: 'okul', en: 'school', de: 'die Schule' },
          'wieder': { tr: 'yeniden, tekrar', en: 'again', de: 'wieder' },
        },
      },
    ],
  },
  {
    id: 'der-oktober',
    word: 'der Oktober',
    tr: 'ekim',
    sentences: [
      {
        id: 'oktober-1',
        targetWord: 'Oktober',
        german: 'Im Oktober wird es kühler.',
        germanWithBlank: 'Im ___ wird es kühler.',
        translationTR: 'Ekimde hava serinliyor.',
        translationEN: 'In October it gets cooler.',
        glossary: {
          'im': { tr: '-de/-da (aylarda kullanılır)', en: 'in (used with months)', de: 'im' },
          'wird': { tr: 'olmak (gelecek/durum değişimi)', en: 'gets/becomes', de: 'werden' },
          'es': { tr: 'o (tarafsız)', en: 'it', de: 'es' },
          'kühler': { tr: 'daha serin', en: 'cooler', de: 'kühl' },
        },
      },
    ],
  },
  {
    id: 'der-november',
    word: 'der November',
    sentences: [
      {
        id: 'november-1',
        targetWord: 'November',
        german: 'Im November ist es oft grau und kalt.',
        germanWithBlank: 'Im ___ ist es oft grau und kalt.',
        translationTR: 'Kasımda hava çoğunlukla gri ve soğuk oluyor.',
        translationEN: 'In November it is often grey and cold.',
        glossary: {
          'im': { tr: '-de/-da (aylarda kullanılır)', en: 'in (used with months)', de: 'im' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'es': { tr: 'o (tarafsız)', en: 'it', de: 'es' },
          'oft': { tr: 'sık sık', en: 'often', de: 'oft' },
          'grau': { tr: 'gri', en: 'grey', de: 'grau' },
          'und': { tr: 've', en: 'and', de: 'und' },
          'kalt': { tr: 'soğuk', en: 'cold', de: 'kalt' },
        },
      },
    ],
  },
  {
    id: 'der-dezember',
    word: 'der Dezember',
    sentences: [
      {
        id: 'dezember-1',
        targetWord: 'Dezember',
        german: 'Im Dezember ist Weihnachten.',
        germanWithBlank: 'Im ___ ist Weihnachten.',
        translationTR: 'Aralıkta Noel var.',
        translationEN: 'In December it is Christmas.',
        glossary: {
          'im': { tr: '-de/-da (aylarda kullanılır)', en: 'in (used with months)', de: 'im' },
          'ist': { tr: 'olmak / var olmak', en: 'is / there is', de: 'sein' },
          'weihnachten': { tr: 'Noel', en: 'Christmas', de: 'Weihnachten' },
        },
      },
    ],
  },
  {
    id: 'der-montag',
    word: 'der Montag',
    sentences: [
      {
        id: 'montag-1',
        targetWord: 'Montag',
        german: 'Am Montag gehe ich ins Büro.',
        germanWithBlank: 'Am ___ gehe ich ins Büro.',
        translationTR: 'Pazartesi ofise gidiyorum.',
        translationEN: 'On Monday I go to the office.',
        glossary: {
          'am': { tr: '-de/-da (günlerde kullanılır)', en: 'on (used with days)', de: 'am' },
          'gehe': { tr: 'gitmek (ben)', en: 'go', de: 'gehen' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'ins': { tr: '...a/-e (içeri)', en: 'into the', de: 'ins' },
          'büro': { tr: 'ofis', en: 'office', de: 'das Büro' },
        },
      },
    ],
  },
  {
    id: 'der-dienstag',
    word: 'der Dienstag',
    sentences: [
      {
        id: 'dienstag-1',
        targetWord: 'Dienstag',
        german: 'Am Dienstag habe ich einen Termin.',
        germanWithBlank: 'Am ___ habe ich einen Termin.',
        translationTR: 'Salı günü randevum var.',
        translationEN: 'On Tuesday I have an appointment.',
        glossary: {
          'am': { tr: '-de/-da (günlerde kullanılır)', en: 'on (used with days)', de: 'am' },
          'habe': { tr: 'sahip olmak (ben)', en: 'have', de: 'haben' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'einen': { tr: 'bir (eril belirtisiz)', en: 'a/an (masculine accusative)', de: 'einen' },
          'termin': { tr: 'randevu', en: 'appointment', de: 'der Termin' },
        },
      },
    ],
  },
  {
    id: 'der-mittwoch',
    word: 'der Mittwoch',
    sentences: [
      {
        id: 'mittwoch-1',
        targetWord: 'Mittwoch',
        german: 'Mittwoch ist mein freier Tag.',
        germanWithBlank: '___ ist mein freier Tag.',
        translationTR: 'Çarşamba benim serbest günüm.',
        translationEN: 'Wednesday is my day off.',
        glossary: {
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'mein': { tr: 'benim', en: 'my', de: 'mein' },
          'freier': { tr: 'serbest (eril)', en: 'free/day off', de: 'frei' },
          'tag': { tr: 'gün', en: 'day', de: 'der Tag' },
        },
      },
    ],
  },
  {
    id: 'der-donnerstag',
    word: 'der Donnerstag',
    sentences: [
      {
        id: 'donnerstag-1',
        targetWord: 'Donnerstag',
        german: 'Am Donnerstag gehe ich einkaufen.',
        germanWithBlank: 'Am ___ gehe ich einkaufen.',
        translationTR: 'Perşembe alışveriş yapıyorum.',
        translationEN: 'On Thursday I go shopping.',
        glossary: {
          'am': { tr: '-de/-da (günlerde kullanılır)', en: 'on (used with days)', de: 'am' },
          'gehe': { tr: 'gitmek (ben)', en: 'go', de: 'gehen' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'einkaufen': { tr: 'alışveriş yapmak', en: 'to go shopping', de: 'einkaufen' },
        },
      },
    ],
  },
  {
    id: 'der-freitag',
    word: 'der Freitag',
    sentences: [
      {
        id: 'freitag-1',
        targetWord: 'Freitag',
        german: 'Am Freitag machen wir Party.',
        germanWithBlank: 'Am ___ machen wir Party.',
        translationTR: 'Cuma günü parti yapıyoruz.',
        translationEN: 'On Friday we have a party.',
        glossary: {
          'am': { tr: '-de/-da (günlerde kullanılır)', en: 'on (used with days)', de: 'am' },
          'machen': { tr: 'yapmak', en: 'to make/do', de: 'machen' },
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'party': { tr: 'parti', en: 'party', de: 'die Party' },
        },
      },
    ],
  },
  {
    id: 'der-samstag',
    word: 'der Samstag',
    sentences: [
      {
        id: 'samstag-1',
        targetWord: 'Samstag',
        german: 'Am Samstag schlafe ich lange.',
        germanWithBlank: 'Am ___ schlafe ich lange.',
        translationTR: 'Cumartesi uzun uyuyorum.',
        translationEN: 'On Saturday I sleep in.',
        glossary: {
          'am': { tr: '-de/-da (günlerde kullanılır)', en: 'on (used with days)', de: 'am' },
          'schlafe': { tr: 'uyumak (ben)', en: 'sleep', de: 'schlafen' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'lange': { tr: 'uzun süre', en: 'long/for a long time', de: 'lange' },
        },
      },
    ],
  },
  {
    id: 'der-sonntag',
    word: 'der Sonntag',
    sentences: [
      {
        id: 'sonntag-1',
        targetWord: 'Sonntag',
        german: 'Am Sonntag besuche ich meine Familie.',
        germanWithBlank: 'Am ___ besuche ich meine Familie.',
        translationTR: 'Pazar günü ailemi ziyaret ediyorum.',
        translationEN: 'On Sunday I visit my family.',
        glossary: {
          'am': { tr: '-de/-da (günlerde kullanılır)', en: 'on (used with days)', de: 'am' },
          'besuche': { tr: 'ziyaret etmek (ben)', en: 'visit', de: 'besuchen' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'meine': { tr: 'benim (dişil/çoğul)', en: 'my', de: 'mein' },
          'familie': { tr: 'aile', en: 'family', de: 'die Familie' },
        },
      },
    ],
  },
  {
    id: 'blau',
    word: 'blau',
    sentences: [
      {
        id: 'blau-1',
        targetWord: 'blau',
        german: 'Der Himmel ist heute blau.',
        germanWithBlank: 'Der Himmel ist heute ___.',
        translationTR: 'Bugün gökyüzü mavi.',
        translationEN: 'The sky is blue today.',
        glossary: {
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'himmel': { tr: 'gökyüzü', en: 'sky', de: 'der Himmel' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'heute': { tr: 'bugün', en: 'today', de: 'heute' },
        },
      },
    ],
  },
  {
    id: 'gelb',
    word: 'gelb',
    sentences: [
      {
        id: 'gelb-1',
        targetWord: 'gelb',
        german: 'Die Banane ist gelb.',
        germanWithBlank: 'Die Banane ist ___.',
        translationTR: 'Muz sarıdır.',
        translationEN: 'The banana is yellow.',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'banane': { tr: 'muz', en: 'banana', de: 'die Banane' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
        },
      },
    ],
  },
  {
    id: 'grün',
    word: 'grün',
    sentences: [
      {
        id: 'grün-1',
        targetWord: 'grün',
        german: 'Das Gras ist grün.',
        germanWithBlank: 'Das Gras ist ___.',
        translationTR: 'Çimen yeşildir.',
        translationEN: 'The grass is green.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'gras': { tr: 'çimen, çim', en: 'grass', de: 'das Gras' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
        },
      },
    ],
  },
  {
    id: 'rot',
    word: 'rot',
    sentences: [
      {
        id: 'rot-1',
        targetWord: 'rot',
        german: 'Die Tomate ist rot.',
        germanWithBlank: 'Die Tomate ist ___.',
        translationTR: 'Domates kırmızıdır.',
        translationEN: 'The tomato is red.',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'tomate': { tr: 'domates', en: 'tomato', de: 'die Tomate' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
        },
      },
    ],
  },
  {
    id: 'schwarz',
    word: 'schwarz',
    sentences: [
      {
        id: 'schwarz-1',
        targetWord: 'schwarz',
        german: 'Meine Jacke ist schwarz.',
        germanWithBlank: 'Meine Jacke ist ___.',
        translationTR: 'Ceketim siyah.',
        translationEN: 'My jacket is black.',
        glossary: {
          'meine': { tr: 'benim (dişil/çoğul)', en: 'my', de: 'mein' },
          'jacke': { tr: 'ceket', en: 'jacket', de: 'die Jacke' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
        },
      },
    ],
  },
  {
    id: 'weiß',
    word: 'weiß',
    sentences: [
      {
        id: 'weiß-1',
        targetWord: 'weiß',
        german: 'Schnee ist weiß.',
        germanWithBlank: 'Schnee ist ___.',
        translationTR: 'Kar beyazdır.',
        translationEN: 'Snow is white.',
        glossary: {
          'schnee': { tr: 'kar', en: 'snow', de: 'der Schnee' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
        },
      },
    ],
  },
  {
    id: 'braun',
    word: 'braun',
    sentences: [
      {
        id: 'braun-1',
        targetWord: 'braun',
        german: 'Der Tisch ist braun.',
        germanWithBlank: 'Der Tisch ist ___.',
        translationTR: 'Masa kahverengi.',
        translationEN: 'The table is brown.',
        glossary: {
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'tisch': { tr: 'masa', en: 'table', de: 'der Tisch' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
        },
      },
    ],
  },
  {
    id: 'grau',
    word: 'grau',
    sentences: [
      {
        id: 'grau-1',
        targetWord: 'grau',
        german: 'Heute ist der Himmel grau.',
        germanWithBlank: 'Heute ist der Himmel ___.',
        translationTR: 'Bugün gökyüzü gri.',
        translationEN: 'Today the sky is grey.',
        glossary: {
          'heute': { tr: 'bugün', en: 'today', de: 'heute' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'himmel': { tr: 'gökyüzü', en: 'sky', de: 'der Himmel' },
        },
      },
    ],
  },
  {
    id: 'das-hemd',
    word: 'das Hemd',
    tr: 'gömlek',
    sentences: [
      {
        id: 'hemd-1',
        targetWord: 'Hemd',
        german: 'Er trägt ein weißes Hemd.',
        germanWithBlank: 'Er trägt ein weißes ___.',
        translationTR: 'Beyaz bir gömlek giyiyor.',
        translationEN: 'He is wearing a white shirt.',
        glossary: {
          'er': { tr: 'o (erkek)', en: 'he', de: 'er' },
          'trägt': { tr: 'giymek, taşımak', en: 'wears', de: 'tragen' },
          'ein': { tr: 'bir (yansız belirtisiz)', en: 'a/an (neuter)', de: 'ein' },
          'weißes': { tr: 'beyaz (yansız)', en: 'white (neuter)', de: 'weiß' },
        },
      },
    ],
  },
  {
    id: 'die-hose',
    word: 'die Hose',
    tr: 'pantolon',
    sentences: [
      {
        id: 'hose-1',
        targetWord: 'Hose',
        german: 'Ich suche eine blaue Hose.',
        germanWithBlank: 'Ich suche eine blaue ___.',
        translationTR: 'Mavi bir pantolon arıyorum.',
        translationEN: 'I am looking for blue trousers.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'suche': { tr: 'aramak (ben)', en: 'look for', de: 'suchen' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
          'blaue': { tr: 'mavi (dişil)', en: 'blue (feminine)', de: 'blau' },
        },
      },
    ],
  },
  {
    id: 'der-schuh',
    word: 'der Schuh',
    tr: 'ayakkabı',
    sentences: [
      {
        id: 'schuh-1',
        targetWord: 'Schuhe',
        german: 'Meine Schuhe sind kaputt.',
        germanWithBlank: 'Meine ___ sind kaputt.',
        translationTR: 'Ayakkabılarım bozuk.',
        translationEN: 'My shoes are broken.',
        glossary: {
          'meine': { tr: 'benim (çoğul)', en: 'my', de: 'mein' },
          'sind': { tr: 'olmak (çoğul)', en: 'are', de: 'sein' },
          'kaputt': { tr: 'bozuk, kırık', en: 'broken', de: 'kaputt' },
        },
      },
    ],
  },
  {
    id: 'der-mantel',
    word: 'der Mantel',
    tr: 'palto / manto',
    sentences: [
      {
        id: 'mantel-1',
        targetWord: 'Mantel',
        german: 'Im Winter brauche ich einen Mantel.',
        germanWithBlank: 'Im Winter brauche ich einen ___.',
        translationTR: 'Kışın bir palto gerekiyor.',
        translationEN: 'In winter I need a coat.',
        glossary: {
          'im': { tr: '-de/-da (mevsimlerde)', en: 'in the (seasons)', de: 'im' },
          'winter': { tr: 'kış', en: 'winter', de: 'der Winter' },
          'brauche': { tr: 'ihtiyaç duymak (ben)', en: 'need', de: 'brauchen' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'einen': { tr: 'bir (eril belirtisiz, -i hali)', en: 'a/an (masc. accusative)', de: 'einen' },
        },
      },
    ],
  },
  {
    id: 'das-kleid',
    word: 'das Kleid',
    tr: 'elbise',
    sentences: [
      {
        id: 'kleid-1',
        targetWord: 'Kleid',
        german: 'Sie trägt ein rotes Kleid.',
        germanWithBlank: 'Sie trägt ein rotes ___.',
        translationTR: 'Kırmızı bir elbise giyiyor.',
        translationEN: 'She is wearing a red dress.',
        glossary: {
          'sie': { tr: 'o (kadın)', en: 'she', de: 'sie' },
          'trägt': { tr: 'giymek, taşımak', en: 'wears', de: 'tragen' },
          'ein': { tr: 'bir (yansız belirtisiz)', en: 'a/an (neuter)', de: 'ein' },
          'rotes': { tr: 'kırmızı (yansız)', en: 'red (neuter)', de: 'rot' },
        },
      },
    ],
  },
  {
    id: 'der-arm',
    word: 'der Arm',
    tr: 'kol',
    sentences: [
      {
        id: 'arm-1',
        targetWord: 'arm',
        german: 'Sie haben nicht viel Geld, sie sind arm.',
        germanWithBlank: 'Sie haben nicht viel Geld, sie sind ___.',
        translationTR: 'Çok paraları yok, fakirler.',
        translationEN: 'They do not have much money, they are poor.',
        glossary: {
          Geld: { tr: 'para', en: 'money' },
          viel: { tr: 'çok', en: 'much' },
        },
      },
    ],
  },
  {
    id: 'das-auge',
    word: 'das Auge',
    tr: 'göz',
    sentences: [
      {
        id: 'auge-1',
        targetWord: 'Augen',
        german: 'Sie hat blaue Augen.',
        germanWithBlank: 'Sie hat blaue ___.',
        translationTR: 'Mavi gözleri var.',
        translationEN: 'She has blue eyes.',
        glossary: {
          'sie': { tr: 'o (kadın)', en: 'she', de: 'sie' },
          'hat': { tr: 'sahip olmak', en: 'has', de: 'haben' },
          'blaue': { tr: 'mavi (çoğul)', en: 'blue (plural)', de: 'blau' },
        },
      },
    ],
  },
  {
    id: 'das-bein',
    word: 'das Bein',
    tr: 'bacak',
    sentences: [
      {
        id: 'bein-1',
        targetWord: 'Bein',
        german: 'Mein Bein tut weh.',
        germanWithBlank: 'Mein ___ tut weh.',
        translationTR: 'Bacağım acıyor.',
        translationEN: 'My leg hurts.',
        glossary: {
          'mein': { tr: 'benim (eril/yansız)', en: 'my', de: 'mein' },
          'tut': { tr: 'yapmak', en: 'does', de: 'tun' },
          'weh': { tr: 'acıyor (tut weh = acıyor)', en: 'hurt (tut weh = hurts)', de: 'weh' },
        },
      },
    ],
  },
  {
    id: 'der-fuß',
    word: 'der Fuß',
    tr: 'ayak',
    sentences: [
      {
        id: 'fuß-1',
        targetWord: 'Fuß',
        german: 'Ich habe mir den Fuß verletzt.',
        germanWithBlank: 'Ich habe mir den ___ verletzt.',
        translationTR: 'Ayağımı yaraladım.',
        translationEN: 'I have injured my foot.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'habe': { tr: 'sahip olmak / yardımcı fiil (ben)', en: 'have (auxiliary)', de: 'haben' },
          'mir': { tr: 'bana, kendime (dativ)', en: 'myself (dative)', de: 'mir' },
          'den': { tr: 'belirli artikel (eril, -i hali)', en: 'the (masc. accusative)', de: 'den' },
          'verletzt': { tr: 'yaralamak (geçmiş)', en: 'injured', de: 'verletzen' },
        },
      },
    ],
  },
  {
    id: 'der-kopf',
    word: 'der Kopf',
    tr: 'baş / kafa',
    sentences: [
      {
        id: 'kopf-1',
        targetWord: 'Kopf',
        german: 'Ich habe Kopfschmerzen.',
        germanWithBlank: 'Ich habe ___schmerzen.',
        translationTR: 'Baş ağrım var.',
        translationEN: 'I have a headache.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'habe': { tr: 'sahip olmak (ben)', en: 'have', de: 'haben' },
          'schmerzen': { tr: 'ağrılar', en: 'pains/ache', de: 'der Schmerz' },
        },
      },
    ],
  },
  {
    id: 'der-mund',
    word: 'der Mund',
    tr: 'ağız',
    sentences: [
      {
        id: 'mund-1',
        targetWord: 'Mund',
        german: 'Öffnen Sie bitte den Mund!',
        germanWithBlank: 'Öffnen Sie bitte den ___!',
        translationTR: 'Lütfen ağzınızı açın!',
        translationEN: 'Please open your mouth!',
        glossary: {
          'öffnen': { tr: 'açmak', en: 'to open', de: 'öffnen' },
          'sie': { tr: 'siz (resmi hitap)', en: 'you (formal)', de: 'Sie' },
          'bitte': { tr: 'lütfen', en: 'please', de: 'bitte' },
          'den': { tr: 'belirli artikel (eril, -i hali)', en: 'the (masc. accusative)', de: 'den' },
        },
      },
    ],
  },
  {
    id: 'die-nase',
    word: 'die Nase',
    tr: 'burun',
    sentences: [
      {
        id: 'nase-1',
        targetWord: 'Nase',
        german: 'Meine Nase läuft.',
        germanWithBlank: 'Meine ___ läuft.',
        translationTR: 'Burnum akıyor.',
        translationEN: 'My nose is running.',
        glossary: {
          'meine': { tr: 'benim (dişil)', en: 'my', de: 'mein' },
          'läuft': { tr: 'akmak / koşmak', en: 'runs', de: 'laufen' },
        },
      },
    ],
  },
  {
    id: 'der-rücken',
    word: 'der Rücken',
    tr: 'sırt',
    sentences: [
      {
        id: 'rücken-1',
        targetWord: 'Rücken',
        german: 'Mein Rücken schmerzt.',
        germanWithBlank: 'Mein ___ schmerzt.',
        translationTR: 'Sırtım ağrıyor.',
        translationEN: 'My back hurts.',
        glossary: {
          'mein': { tr: 'benim (eril/yansız)', en: 'my', de: 'mein' },
          'schmerzt': { tr: 'ağrımak', en: 'hurts', de: 'schmerzen' },
        },
      },
    ],
  },
  {
    id: 'der-zahn',
    word: 'der Zahn',
    tr: 'diş',
    sentences: [
      {
        id: 'zahn-1',
        targetWord: 'Zahn',
        german: 'Ich habe Zahnschmerzen.',
        germanWithBlank: 'Ich habe ___schmerzen.',
        translationTR: 'Diş ağrım var.',
        translationEN: 'I have a toothache.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'habe': { tr: 'sahip olmak (ben)', en: 'have', de: 'haben' },
          'schmerzen': { tr: 'ağrılar', en: 'pains/ache', de: 'der Schmerz' },
        },
      },
    ],
  },
  {
    id: 'der-apfel',
    word: 'der Apfel',
    tr: 'elma',
    sentences: [
      {
        id: 'apfel-1',
        targetWord: 'Apfel',
        german: 'Ich esse täglich einen Apfel.',
        germanWithBlank: 'Ich esse täglich einen ___.',
        translationTR: 'Her gün bir elma yiyorum.',
        translationEN: 'I eat an apple every day.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'esse': { tr: 'yemek (ben)', en: 'eat', de: 'essen' },
          'täglich': { tr: 'her gün, günlük', en: 'daily, every day', de: 'täglich' },
          'einen': { tr: 'bir (eril belirtisiz, -i hali)', en: 'a/an (masc. accusative)', de: 'einen' },
        },
      },
    ],
  },
  {
    id: 'die-banane',
    word: 'die Banane',
    tr: 'muz',
    sentences: [
      {
        id: 'banane-1',
        targetWord: 'Bananen',
        german: 'Ich mag Bananen.',
        germanWithBlank: 'Ich mag ___.',
        translationTR: 'Muz severim.',
        translationEN: 'I like bananas.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'mag': { tr: 'sevmek (ben)', en: 'like', de: 'mögen' },
        },
      },
    ],
  },
  {
    id: 'die-kartoffel',
    word: 'die Kartoffel',
    tr: 'patates',
    sentences: [
      {
        id: 'kartoffel-1',
        targetWord: 'Kartoffeln',
        german: 'Wir essen Kartoffeln zum Abendessen.',
        germanWithBlank: 'Wir essen ___ zum Abendessen.',
        translationTR: 'Akşam yemeğinde patates yiyoruz.',
        translationEN: 'We eat potatoes for dinner.',
        glossary: {
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'essen': { tr: 'yemek (biz)', en: 'eat', de: 'essen' },
          'zum': { tr: '...a/-e (zu+dem)', en: 'for/to the', de: 'zu dem' },
          'abendessen': { tr: 'akşam yemeği', en: 'dinner', de: 'das Abendessen' },
        },
      },
    ],
  },
  {
    id: 'der-käse',
    word: 'der Käse',
    tr: 'peynir',
    sentences: [
      {
        id: 'käse-1',
        targetWord: 'Käse',
        german: 'Ich esse Brot mit Käse.',
        germanWithBlank: 'Ich esse Brot mit ___.',
        translationTR: 'Peynirli ekmek yiyorum.',
        translationEN: 'I eat bread with cheese.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'esse': { tr: 'yemek (ben)', en: 'eat', de: 'essen' },
          'brot': { tr: 'ekmek', en: 'bread', de: 'das Brot' },
          'mit': { tr: 'ile, birlikte', en: 'with', de: 'mit' },
        },
      },
    ],
  },
  {
    id: 'die-orange',
    word: 'die Orange',
    tr: 'portakal',
    sentences: [
      {
        id: 'orange-1',
        targetWord: 'Orange',
        german: 'Eine Orange hat viel Vitamin C.',
        germanWithBlank: 'Eine ___ hat viel Vitamin C.',
        translationTR: 'Portakalda çok vitamin C var.',
        translationEN: 'An orange has a lot of vitamin C.',
        glossary: {
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
          'hat': { tr: 'sahip olmak / içermek', en: 'has/contains', de: 'haben' },
          'viel': { tr: 'çok (miktarda)', en: 'a lot of', de: 'viel' },
        },
      },
    ],
  },
  {
    id: 'der-salat',
    word: 'der Salat',
    tr: 'salata',
    sentences: [
      {
        id: 'salat-1',
        targetWord: 'Salat',
        german: 'Ich esse zum Mittagessen einen Salat.',
        germanWithBlank: 'Ich esse zum Mittagessen einen ___.',
        translationTR: 'Öğle yemeğinde salata yiyorum.',
        translationEN: 'I eat a salad for lunch.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'esse': { tr: 'yemek (ben)', en: 'eat', de: 'essen' },
          'zum': { tr: '...a/-e (zu+dem)', en: 'for/to the', de: 'zu dem' },
          'mittagessen': { tr: 'öğle yemeği', en: 'lunch', de: 'das Mittagessen' },
          'einen': { tr: 'bir (eril belirtisiz, -i hali)', en: 'a/an (masc. accusative)', de: 'einen' },
        },
      },
    ],
  },
  {
    id: 'der-wein',
    word: 'der Wein',
    tr: 'şarap',
    sentences: [
      {
        id: 'wein-1',
        targetWord: 'Wein',
        german: 'Ein Glas Wein, bitte.',
        germanWithBlank: 'Ein Glas ___, bitte.',
        translationTR: 'Bir bardak şarap lütfen.',
        translationEN: 'A glass of wine, please.',
        glossary: {
          'ein': { tr: 'bir (yansız belirtisiz)', en: 'a/an (neuter)', de: 'ein' },
          'glas': { tr: 'bardak, cam', en: 'glass', de: 'das Glas' },
          'bitte': { tr: 'lütfen', en: 'please', de: 'bitte' },
        },
      },
    ],
  },
  {
    id: 'der-saft',
    word: 'der Saft',
    tr: 'meyve suyu',
    sentences: [
      {
        id: 'saft-1',
        targetWord: 'Saft',
        german: 'Ich trinke gern Orangensaft.',
        germanWithBlank: 'Ich trinke gern Orangen___.',
        translationTR: 'Portakal suyunu severim.',
        translationEN: 'I like drinking orange juice.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'trinke': { tr: 'içmek (ben)', en: 'drink', de: 'trinken' },
          'gern': { tr: 'severek, isteyerek', en: 'gladly, like to', de: 'gern' },
          'orangensaft': { tr: 'portakal suyu', en: 'orange juice', de: 'der Orangensaft' },
        },
      },
    ],
  },
  {
    id: 'das-bett',
    word: 'das Bett',
    tr: 'yatak',
    sentences: [
      {
        id: 'bett-1',
        targetWord: 'Bett',
        german: 'Ich gehe jetzt ins Bett.',
        germanWithBlank: 'Ich gehe jetzt ins ___.',
        translationTR: 'Şimdi yatağa gidiyorum.',
        translationEN: 'I am going to bed now.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'gehe': { tr: 'gitmek (ben)', en: 'go', de: 'gehen' },
          'jetzt': { tr: 'şimdi', en: 'now', de: 'jetzt' },
          'ins': { tr: '...a/-e (içeri, in+das)', en: 'into the (neuter)', de: 'ins' },
        },
      },
    ],
  },
  {
    id: 'der-herd',
    word: 'der Herd',
    tr: 'ocak',
    sentences: [
      {
        id: 'herd-1',
        targetWord: 'Herd',
        german: 'Das Essen ist auf dem Herd.',
        germanWithBlank: 'Das Essen ist auf dem ___.',
        translationTR: 'Yemek ocakta.',
        translationEN: 'The food is on the stove.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'essen': { tr: 'yemek (isim)', en: 'food/meal', de: 'das Essen' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'auf': { tr: 'üstünde', en: 'on', de: 'auf' },
          'dem': { tr: 'belirli artikel (-e hali, eril/yansız)', en: 'the (dative)', de: 'dem' },
        },
      },
    ],
  },
  {
    id: 'der-kühlschrank',
    word: 'der Kühlschrank',
    tr: 'buzdolabı',
    sentences: [
      {
        id: 'kühlschrank-1',
        targetWord: 'Kühlschrank',
        german: 'Die Milch ist im Kühlschrank.',
        germanWithBlank: 'Die Milch ist im ___.',
        translationTR: 'Süt buzdolabında.',
        translationEN: 'The milk is in the fridge.',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'milch': { tr: 'süt', en: 'milk', de: 'die Milch' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'im': { tr: 'içinde (in+dem)', en: 'in the', de: 'im' },
        },
      },
    ],
  },
  {
    id: 'die-lampe',
    word: 'die Lampe',
    tr: 'lamba',
    sentences: [
      {
        id: 'lampe-1',
        targetWord: 'Lampe',
        german: 'Die Lampe ist kaputt.',
        germanWithBlank: 'Die ___ ist kaputt.',
        translationTR: 'Lamba bozuk.',
        translationEN: 'The lamp is broken.',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'kaputt': { tr: 'bozuk, kırık', en: 'broken', de: 'kaputt' },
        },
      },
    ],
  },
  {
    id: 'der-schrank',
    word: 'der Schrank',
    tr: 'dolap',
    sentences: [
      {
        id: 'schrank-1',
        targetWord: 'Schrank',
        german: 'Meine Kleider sind im Schrank.',
        germanWithBlank: 'Meine Kleider sind im ___.',
        translationTR: 'Kıyafetlerim dolabın içinde.',
        translationEN: 'My clothes are in the wardrobe.',
        glossary: {
          'meine': { tr: 'benim (çoğul)', en: 'my', de: 'mein' },
          'kleider': { tr: 'kıyafetler', en: 'clothes', de: 'das Kleid / die Kleider' },
          'sind': { tr: 'olmak (çoğul)', en: 'are', de: 'sein' },
          'im': { tr: 'içinde (in+dem)', en: 'in the', de: 'im' },
        },
      },
    ],
  },
  {
    id: 'der-stuhl',
    word: 'der Stuhl',
    sentences: [
      {
        id: 'stuhl-1',
        targetWord: 'Stuhl',
        german: 'Setz dich bitte auf den Stuhl.',
        germanWithBlank: 'Setz dich bitte auf den ___.',
        translationTR: 'Lütfen sandalyeye otur.',
        translationEN: 'Please sit down on the chair.',
        glossary: {
          'setz': { tr: 'oturmak (emir)', en: 'sit (imperative)', de: 'setzen' },
          'dich': { tr: 'seni / kendini', en: 'yourself', de: 'dich' },
          'bitte': { tr: 'lütfen', en: 'please', de: 'bitte' },
          'auf': { tr: 'üstüne', en: 'on/onto', de: 'auf' },
          'den': { tr: 'belirli artikel (eril, -i hali)', en: 'the (masc. accusative)', de: 'den' },
        },
      },
    ],
  },
  {
    id: 'das-sofa',
    word: 'das Sofa',
    sentences: [
      {
        id: 'sofa-1',
        targetWord: 'Sofa',
        german: 'Ich liege auf dem Sofa.',
        germanWithBlank: 'Ich liege auf dem ___.',
        translationTR: 'Kanepede uzanıyorum.',
        translationEN: 'I am lying on the sofa.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'liege': { tr: 'uzanmak, yatmak (ben)', en: 'lie/am lying', de: 'liegen' },
          'auf': { tr: 'üstünde', en: 'on', de: 'auf' },
          'dem': { tr: 'belirli artikel (-e hali, yansız)', en: 'the (dative neuter)', de: 'dem' },
        },
      },
    ],
  },
  {
    id: 'das-baby',
    word: 'das Baby',
    sentences: [
      {
        id: 'baby-1',
        targetWord: 'Baby',
        german: 'Das Baby schläft gerade.',
        germanWithBlank: 'Das ___ schläft gerade.',
        translationTR: 'Bebek şu an uyuyor.',
        translationEN: 'The baby is sleeping right now.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'schläft': { tr: 'uyumak', en: 'sleeps/is sleeping', de: 'schlafen' },
          'gerade': { tr: 'şu an, tam şimdi', en: 'right now/just', de: 'gerade' },
        },
      },
    ],
  },
  {
    id: 'das-mädchen',
    word: 'das Mädchen',
    tr: 'kız çocuk',
    sentences: [
      {
        id: 'mädchen-1',
        targetWord: 'Mädchen',
        german: 'Das Mädchen spielt im Garten.',
        germanWithBlank: 'Das ___ spielt im Garten.',
        translationTR: 'Kız çocuk bahçede oynuyor.',
        translationEN: 'The girl is playing in the garden.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'spielt': { tr: 'oynamak', en: 'plays/is playing', de: 'spielen' },
          'im': { tr: 'içinde (in+dem)', en: 'in the', de: 'im' },
          'garten': { tr: 'bahçe', en: 'garden', de: 'der Garten' },
        },
      },
    ],
  },
  {
    id: 'der-junge',
    word: 'der Junge',
    tr: 'erkek çocuk',
    sentences: [
      {
        id: 'junge-1',
        targetWord: 'Junge',
        german: 'Der Junge liest ein Buch.',
        germanWithBlank: 'Der ___ liest ein Buch.',
        translationTR: 'Erkek çocuk kitap okuyor.',
        translationEN: 'The boy is reading a book.',
        glossary: {
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'liest': { tr: 'okumak', en: 'reads/is reading', de: 'lesen' },
          'ein': { tr: 'bir (yansız belirtisiz)', en: 'a/an (neuter)', de: 'ein' },
          'buch': { tr: 'kitap', en: 'book', de: 'das Buch' },
        },
      },
    ],
  },
  {
    id: 'der-lehrer',
    word: 'der Lehrer',
    tr: 'öğretmen',
    sentences: [
      {
        id: 'lehrer-1',
        targetWord: 'Lehrer',
        german: 'Der Lehrer erklärt die Grammatik.',
        germanWithBlank: 'Der ___ erklärt die Grammatik.',
        translationTR: 'Öğretmen grameri açıklıyor.',
        translationEN: 'The teacher explains the grammar.',
        glossary: {
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'erklärt': { tr: 'açıklamak', en: 'explains', de: 'erklären' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'grammatik': { tr: 'gramer, dil bilgisi', en: 'grammar', de: 'die Grammatik' },
        },
      },
    ],
  },
  {
    id: 'der-chef',
    word: 'der Chef',
    tr: 'patron / şef',
    sentences: [
      {
        id: 'chef-1',
        targetWord: 'Chef',
        german: 'Mein Chef ist sehr nett.',
        germanWithBlank: 'Mein ___ ist sehr nett.',
        translationTR: 'Patronum çok nazik.',
        translationEN: 'My boss is very nice.',
        glossary: {
          'mein': { tr: 'benim (eril/yansız)', en: 'my', de: 'mein' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'sehr': { tr: 'çok', en: 'very', de: 'sehr' },
          'nett': { tr: 'nazik, güzel', en: 'nice/kind', de: 'nett' },
        },
      },
    ],
  },
  {
    id: 'der-kellner',
    word: 'der Kellner',
    tr: 'garson',
    sentences: [
      {
        id: 'kellner-1',
        targetWord: 'Kellner',
        german: 'Der Kellner bringt die Speisekarte.',
        germanWithBlank: 'Der ___ bringt die Speisekarte.',
        translationTR: 'Garson menüyü getiriyor.',
        translationEN: 'The waiter brings the menu.',
        glossary: {
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'bringt': { tr: 'getirmek', en: 'brings', de: 'bringen' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'speisekarte': { tr: 'menü, yemek listesi', en: 'menu', de: 'die Speisekarte' },
        },
      },
    ],
  },
  {
    id: 'das-büro',
    word: 'das Büro',
    sentences: [
      {
        id: 'büro-1',
        targetWord: 'Büro',
        german: 'Ich arbeite im Büro.',
        germanWithBlank: 'Ich arbeite im ___.',
        translationTR: 'Ofiste çalışıyorum.',
        translationEN: 'I work in the office.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'arbeite': { tr: 'çalışmak (ben)', en: 'work', de: 'arbeiten' },
          'im': { tr: 'içinde (in+dem)', en: 'in the', de: 'im' },
        },
      },
    ],
  },
  {
    id: 'das-geschäft',
    word: 'das Geschäft',
    tr: 'dükkan / iş',
    sentences: [
      {
        id: 'geschäft-1',
        targetWord: 'Geschäft',
        german: 'Das Geschäft ist geschlossen.',
        germanWithBlank: 'Das ___ ist geschlossen.',
        translationTR: 'Dükkan kapalı.',
        translationEN: 'The shop is closed.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'geschlossen': { tr: 'kapalı', en: 'closed', de: 'schließen' },
        },
      },
    ],
  },
  {
    id: 'der-flughafen',
    word: 'der Flughafen',
    tr: 'havalimanı',
    sentences: [
      {
        id: 'flughafen-1',
        targetWord: 'Flughafen',
        german: 'Wir fahren zum Flughafen.',
        germanWithBlank: 'Wir fahren zum ___.',
        translationTR: 'Havaalanına gidiyoruz.',
        translationEN: 'We are going to the airport.',
        glossary: {
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'fahren': { tr: 'gitmek (araçla)', en: 'drive/go by vehicle', de: 'fahren' },
          'zum': { tr: '...a/-e (zu+dem)', en: 'to the', de: 'zu dem' },
        },
      },
    ],
  },
  {
    id: 'das-flugzeug',
    word: 'das Flugzeug',
    tr: 'uçak',
    sentences: [
      {
        id: 'flugzeug-1',
        targetWord: 'Flugzeug',
        german: 'Das Flugzeug startet um zehn Uhr.',
        germanWithBlank: 'Das ___ startet um zehn Uhr.',
        translationTR: 'Uçak saat onda kalkıyor.',
        translationEN: 'The plane takes off at ten o\'clock.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'startet': { tr: 'kalkmak, başlamak', en: 'takes off/starts', de: 'starten' },
          'um': { tr: 'saat ... -de (zaman)', en: 'at (time)', de: 'um' },
          'zehn': { tr: 'on (sayı)', en: 'ten', de: 'zehn' },
          'uhr': { tr: 'saat', en: 'o\'clock', de: 'die Uhr' },
        },
      },
    ],
  },
  {
    id: 'das-schwimmbad',
    word: 'das Schwimmbad',
    sentences: [
      {
        id: 'schwimmbad-1',
        targetWord: 'Schwimmbad',
        german: 'Im Sommer gehe ich ins Schwimmbad.',
        germanWithBlank: 'Im Sommer gehe ich ins ___.',
        translationTR: 'Yazın yüzme havuzuna gidiyorum.',
        translationEN: 'In summer I go to the swimming pool.',
        glossary: {
          'im': { tr: '-de/-da (mevsimlerde)', en: 'in the (seasons)', de: 'im' },
          'sommer': { tr: 'yaz', en: 'summer', de: 'der Sommer' },
          'gehe': { tr: 'gitmek (ben)', en: 'go', de: 'gehen' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'ins': { tr: '...a/-e (içeri, in+das)', en: 'into the (neuter)', de: 'ins' },
        },
      },
    ],
  },
  {
    id: 'das-konzert',
    word: 'das Konzert',
    tr: 'konser',
    sentences: [
      {
        id: 'konzert-1',
        targetWord: 'Konzert',
        german: 'Heute Abend gehe ich ins Konzert.',
        germanWithBlank: 'Heute Abend gehe ich ins ___.',
        translationTR: 'Bu akşam konsere gidiyorum.',
        translationEN: 'This evening I am going to a concert.',
        glossary: {
          'heute': { tr: 'bugün', en: 'today', de: 'heute' },
          'abend': { tr: 'akşam', en: 'evening', de: 'der Abend' },
          'gehe': { tr: 'gitmek (ben)', en: 'go', de: 'gehen' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'ins': { tr: '...a/-e (içeri, in+das)', en: 'into the (neuter)', de: 'ins' },
        },
      },
    ],
  },
  {
    id: 'die-musik',
    word: 'die Musik',
    tr: 'müzik',
    sentences: [
      {
        id: 'musik-1',
        targetWord: 'Musik',
        german: 'Ich höre gern Musik.',
        germanWithBlank: 'Ich höre gern ___.',
        translationTR: 'Müzik dinlemeyi severim.',
        translationEN: 'I like listening to music.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'höre': { tr: 'duymak, dinlemek (ben)', en: 'listen/hear', de: 'hören' },
          'gern': { tr: 'severek, isteyerek', en: 'gladly, like to', de: 'gern' },
        },
      },
    ],
  },
  {
    id: 'der-name',
    word: 'der Name',
    tr: 'isim',
    sentences: [
      {
        id: 'name-1',
        targetWord: 'Name',
        german: 'Wie ist Ihr Name?',
        germanWithBlank: 'Wie ist Ihr ___?',
        translationTR: 'Adınız nedir?',
        translationEN: 'What is your name?',
        glossary: {
          'wie': { tr: 'nasıl', en: 'how/what', de: 'wie' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'ihr': { tr: 'sizin (resmi)', en: 'your (formal)', de: 'Ihr' },
        },
      },
    ],
  },
  {
    id: 'das-problem',
    word: 'das Problem',
    tr: 'sorun / problem',
    sentences: [
      {
        id: 'problem-1',
        targetWord: 'Problem',
        german: 'Ich habe ein Problem.',
        germanWithBlank: 'Ich habe ein ___.',
        translationTR: 'Bir sorunum var.',
        translationEN: 'I have a problem.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'habe': { tr: 'sahip olmak (ben)', en: 'have', de: 'haben' },
          'ein': { tr: 'bir (yansız belirtisiz)', en: 'a/an (neuter)', de: 'ein' },
        },
      },
    ],
  },
  {
    id: 'der-termin',
    word: 'der Termin',
    tr: 'randevu / tarih',
    sentences: [
      {
        id: 'termin-1',
        targetWord: 'Termin',
        german: 'Ich habe einen Termin beim Arzt.',
        germanWithBlank: 'Ich habe einen ___ beim Arzt.',
        translationTR: 'Doktorda randevum var.',
        translationEN: 'I have an appointment with the doctor.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'habe': { tr: 'sahip olmak (ben)', en: 'have', de: 'haben' },
          'einen': { tr: 'bir (eril belirtisiz, -i hali)', en: 'a/an (masc. accusative)', de: 'einen' },
          'beim': { tr: '...da/-de, yanında (bei+dem)', en: 'at/with the', de: 'bei dem' },
          'arzt': { tr: 'doktor', en: 'doctor', de: 'der Arzt' },
        },
      },
    ],
  },
  {
    id: 'die-uhr',
    word: 'die Uhr',
    tr: 'saat',
    sentences: [
      {
        id: 'uhr-1',
        targetWord: 'Uhr',
        german: 'Wie viel Uhr ist es?',
        germanWithBlank: 'Wie viel ___ ist es?',
        translationTR: 'Saat kaç?',
        translationEN: 'What time is it?',
        glossary: {
          'wie': { tr: 'nasıl', en: 'how', de: 'wie' },
          'viel': { tr: 'çok, kadar', en: 'much/how much', de: 'viel' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'es': { tr: 'o (tarafsız)', en: 'it', de: 'es' },
        },
      },
    ],
  },
  {
    id: 'das-wetter',
    word: 'das Wetter',
    sentences: [
      {
        id: 'wetter-1',
        targetWord: 'Wetter',
        german: 'Das Wetter ist heute schön.',
        germanWithBlank: 'Das ___ ist heute schön.',
        translationTR: 'Bugün hava güzel.',
        translationEN: 'The weather is nice today.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'heute': { tr: 'bugün', en: 'today', de: 'heute' },
          'schön': { tr: 'güzel', en: 'nice/beautiful', de: 'schön' },
        },
      },
    ],
  },
  {
    id: 'das-foto',
    word: 'das Foto',
    tr: 'fotoğraf',
    sentences: [
      {
        id: 'foto-1',
        targetWord: 'Foto',
        german: 'Ich mache ein Foto.',
        germanWithBlank: 'Ich mache ein ___.',
        translationTR: 'Bir fotoğraf çekiyorum.',
        translationEN: 'I am taking a photo.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'mache': { tr: 'yapmak / çekmek (ben)', en: 'make/take', de: 'machen' },
          'ein': { tr: 'bir (yansız belirtisiz)', en: 'a/an (neuter)', de: 'ein' },
        },
      },
    ],
  },
  {
    id: 'das-geschenk',
    word: 'das Geschenk',
    tr: 'hediye',
    sentences: [
      {
        id: 'geschenk-1',
        targetWord: 'Geschenk',
        german: 'Das Geschenk ist für dich.',
        germanWithBlank: 'Das ___ ist für dich.',
        translationTR: 'Hediye senin için.',
        translationEN: 'The gift is for you.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'für': { tr: 'için', en: 'for', de: 'für' },
          'dich': { tr: 'seni (belirtme hali)', en: 'you (accusative)', de: 'dich' },
        },
      },
    ],
  },
  {
    id: 'die-gitarre',
    word: 'die Gitarre',
    tr: 'gitar',
    sentences: [
      {
        id: 'gitarre-1',
        targetWord: 'Gitarre',
        german: 'Er spielt sehr gut Gitarre.',
        germanWithBlank: 'Er spielt sehr gut ___.',
        translationTR: 'Çok iyi gitar çalıyor.',
        translationEN: 'He plays the guitar very well.',
        glossary: {
          'er': { tr: 'o (erkek)', en: 'he', de: 'er' },
          'spielt': { tr: 'oynamak / çalmak', en: 'plays', de: 'spielen' },
          'sehr': { tr: 'çok', en: 'very', de: 'sehr' },
          'gut': { tr: 'iyi', en: 'well/good', de: 'gut' },
        },
      },
    ],
  },
  {
    id: 'das-internet',
    word: 'das Internet',
    sentences: [
      {
        id: 'internet-1',
        targetWord: 'Internet',
        german: 'Ich schaue das im Internet nach.',
        germanWithBlank: 'Ich schaue das im ___ nach.',
        translationTR: 'Bunu internetten bakıyorum.',
        translationEN: 'I look that up on the internet.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'schaue': { tr: 'bakmak (ben)', en: 'look', de: 'schauen' },
          'das': { tr: 'bunu / onu', en: 'that/it', de: 'das' },
          'im': { tr: 'içinde (in+dem)', en: 'in the', de: 'im' },
          'nach': { tr: 'sonra, ardından (nachschauen = araştırmak)', en: 'up (look up)', de: 'nach' },
        },
      },
    ],
  },
  {
    id: 'der-sport',
    word: 'der Sport',
    tr: 'spor',
    sentences: [
      {
        id: 'sport-1',
        targetWord: 'Sport',
        german: 'Sport ist gesund.',
        germanWithBlank: '___ ist gesund.',
        translationTR: 'Spor sağlıklıdır.',
        translationEN: 'Sport is healthy.',
        glossary: {
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'gesund': { tr: 'sağlıklı', en: 'healthy', de: 'gesund' },
        },
      },
    ],
  },
  {
    id: 'der-fußball',
    word: 'der Fußball',
    tr: 'futbol / futbol topu',
    sentences: [
      {
        id: 'fußball-1',
        targetWord: 'Fußball',
        german: 'Ich spiele gern Fußball.',
        germanWithBlank: 'Ich spiele gern ___.',
        translationTR: 'Futbol oynamayı severim.',
        translationEN: 'I like playing football.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'spiele': { tr: 'oynamak (ben)', en: 'play', de: 'spielen' },
          'gern': { tr: 'severek, isteyerek', en: 'gladly, like to', de: 'gern' },
        },
      },
    ],
  },
  {
    id: 'das-mittagessen',
    word: 'das Mittagessen',
    sentences: [
      {
        id: 'mittagessen-1',
        targetWord: 'Mittagessen',
        german: 'Wir essen zusammen Mittagessen.',
        germanWithBlank: 'Wir essen zusammen ___.',
        translationTR: 'Birlikte öğle yemeği yiyoruz.',
        translationEN: 'We eat lunch together.',
        glossary: {
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'essen': { tr: 'yemek (biz)', en: 'eat', de: 'essen' },
          'zusammen': { tr: 'birlikte', en: 'together', de: 'zusammen' },
        },
      },
    ],
  },
  {
    id: 'das-abendessen',
    word: 'das Abendessen',
    sentences: [
      {
        id: 'abendessen-1',
        targetWord: 'Abendessen',
        german: 'Was gibt es heute zum Abendessen?',
        germanWithBlank: 'Was gibt es heute zum ___?',
        translationTR: 'Bugün akşam yemeğinde ne var?',
        translationEN: 'What is there for dinner today?',
        glossary: {
          'was': { tr: 'ne', en: 'what', de: 'was' },
          'gibt': { tr: 'vermek / var olmak', en: 'gives / there is', de: 'geben' },
          'es': { tr: 'o (tarafsız)', en: 'it', de: 'es' },
          'heute': { tr: 'bugün', en: 'today', de: 'heute' },
          'zum': { tr: '...a/-e (zu+dem)', en: 'for/to the', de: 'zu dem' },
        },
      },
    ],
  },
  {
    id: 'der-beruf',
    word: 'der Beruf',
    tr: 'meslek',
    sentences: [
      {
        id: 'beruf-1',
        targetWord: 'Beruf',
        german: 'Was ist Ihr Beruf?',
        germanWithBlank: 'Was ist Ihr ___?',
        translationTR: 'Mesleğiniz nedir?',
        translationEN: 'What is your profession?',
        glossary: {
          'was': { tr: 'ne', en: 'what', de: 'was' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'ihr': { tr: 'sizin (resmi)', en: 'your (formal)', de: 'Ihr' },
        },
      },
    ],
  },
  {
    id: 'das-formular',
    word: 'das Formular',
    tr: 'form / belge',
    sentences: [
      {
        id: 'formular-1',
        targetWord: 'Formular',
        german: 'Bitte füllen Sie das Formular aus.',
        germanWithBlank: 'Bitte füllen Sie das ___ aus.',
        translationTR: 'Lütfen formu doldurun.',
        translationEN: 'Please fill in the form.',
        glossary: {
          'bitte': { tr: 'lütfen', en: 'please', de: 'bitte' },
          'füllen': { tr: 'doldurmak', en: 'fill', de: 'füllen' },
          'sie': { tr: 'siz (resmi hitap)', en: 'you (formal)', de: 'Sie' },
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'aus': { tr: 'dışarı (ausfüllen = doldurmak)', en: 'out (ausfüllen = fill out)', de: 'aus' },
        },
      },
    ],
  },
  {
    id: 'die-hausaufgabe',
    word: 'die Hausaufgabe',
    tr: 'ev ödevi',
    sentences: [
      {
        id: 'hausaufgabe-1',
        targetWord: 'Hausaufgaben',
        german: 'Ich mache meine Hausaufgaben.',
        germanWithBlank: 'Ich mache meine ___.',
        translationTR: 'Ödevlerimi yapıyorum.',
        translationEN: 'I am doing my homework.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'mache': { tr: 'yapmak (ben)', en: 'do/make', de: 'machen' },
          'meine': { tr: 'benim (çoğul)', en: 'my', de: 'mein' },
        },
      },
    ],
  },
  {
    id: 'das-rezept',
    word: 'das Rezept',
    tr: 'reçete / yemek tarifi',
    sentences: [
      {
        id: 'rezept-1',
        targetWord: 'Rezept',
        german: 'Der Arzt gibt mir ein Rezept.',
        germanWithBlank: 'Der Arzt gibt mir ein ___.',
        translationTR: 'Doktor bana bir reçete veriyor.',
        translationEN: 'The doctor gives me a prescription.',
        glossary: {
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'arzt': { tr: 'doktor', en: 'doctor', de: 'der Arzt' },
          'gibt': { tr: 'vermek', en: 'gives', de: 'geben' },
          'mir': { tr: 'bana (yönelme hali)', en: 'me (dative)', de: 'mir' },
          'ein': { tr: 'bir (yansız belirtisiz)', en: 'a/an (neuter)', de: 'ein' },
        },
      },
    ],
  },
  {
    id: 'die-praxis',
    word: 'die Praxis',
    tr: 'uygulama / muayenehane',
    sentences: [
      {
        id: 'praxis-1',
        targetWord: 'Praxis',
        german: 'Die Praxis ist um 8 Uhr geöffnet.',
        germanWithBlank: 'Die ___ ist um 8 Uhr geöffnet.',
        translationTR: 'Muayenehane saat 8\'de açılıyor.',
        translationEN: 'The medical practice opens at 8 o\'clock.',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'um': { tr: 'saat ... -de (zaman)', en: 'at (time)', de: 'um' },
          'uhr': { tr: 'saat', en: 'o\'clock', de: 'die Uhr' },
          'geöffnet': { tr: 'açık (geçmiş/sıfat)', en: 'open/opened', de: 'öffnen' },
        },
      },
    ],
  },
  {
    id: 'der-unterricht',
    word: 'der Unterricht',
    tr: 'ders',
    sentences: [
      {
        id: 'unterricht-1',
        targetWord: 'Unterricht',
        german: 'Der Unterricht beginnt um 8 Uhr.',
        germanWithBlank: 'Der ___ beginnt um 8 Uhr.',
        translationTR: 'Ders saat 8\'de başlıyor.',
        translationEN: 'The class starts at 8 o\'clock.',
        glossary: {
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'beginnt': { tr: 'başlamak', en: 'starts/begins', de: 'beginnen' },
          'um': { tr: 'saat ... -de (zaman)', en: 'at (time)', de: 'um' },
          'uhr': { tr: 'saat', en: 'o\'clock', de: 'die Uhr' },
        },
      },
    ],
  },
  {
    id: 'der-kurs',
    word: 'der Kurs',
    tr: 'kurs',
    sentences: [
      {
        id: 'kurs-1',
        targetWord: 'Kurs',
        german: 'Ich mache einen Deutschkurs.',
        germanWithBlank: 'Ich mache einen Deutsch___.',
        translationTR: 'Almanca kursu yapıyorum.',
        translationEN: 'I am taking a German course.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'mache': { tr: 'yapmak / katılmak (ben)', en: 'do/take', de: 'machen' },
          'einen': { tr: 'bir (eril belirtisiz, -i hali)', en: 'a/an (masc. accusative)', de: 'einen' },
          'deutschkurs': { tr: 'Almanca kursu', en: 'German course', de: 'der Deutschkurs' },
        },
      },
    ],
  },
  {
    id: 'der-kindergarten',
    word: 'der Kindergarten',
    tr: 'anaokulu',
    sentences: [
      {
        id: 'kindergarten-1',
        targetWord: 'Kindergarten',
        german: 'Das Kind geht in den Kindergarten.',
        germanWithBlank: 'Das Kind geht in den ___.',
        translationTR: 'Çocuk anaokuluna gidiyor.',
        translationEN: 'The child goes to kindergarten.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'kind': { tr: 'çocuk', en: 'child', de: 'das Kind' },
          'geht': { tr: 'gitmek', en: 'goes', de: 'gehen' },
          'in': { tr: 'içine, ...a/-e', en: 'into', de: 'in' },
          'den': { tr: 'belirli artikel (eril, -i hali)', en: 'the (masc. accusative)', de: 'den' },
        },
      },
    ],
  },
  {
    id: 'das-rathaus',
    word: 'das Rathaus',
    tr: 'belediye binası',
    sentences: [
      {
        id: 'rathaus-1',
        targetWord: 'Rathaus',
        german: 'Das Rathaus ist in der Stadtmitte.',
        germanWithBlank: 'Das ___ ist in der Stadtmitte.',
        translationTR: 'Belediye binası şehir merkezinde.',
        translationEN: 'The town hall is in the city centre.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'in': { tr: 'içinde', en: 'in', de: 'in' },
          'der': { tr: 'belirli artikel (dişil, -e hali)', en: 'the (fem. dative)', de: 'der' },
          'stadtmitte': { tr: 'şehir merkezi', en: 'city centre', de: 'die Stadtmitte' },
        },
      },
    ],
  },
  {
    id: 'das-obst',
    word: 'das Obst',
    tr: 'meyve',
    sentences: [
      {
        id: 'obst-1',
        targetWord: 'Obst',
        german: 'Obst ist gesund.',
        germanWithBlank: '___ ist gesund.',
        translationTR: 'Meyve sağlıklıdır.',
        translationEN: 'Fruit is healthy.',
        glossary: {
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'gesund': { tr: 'sağlıklı', en: 'healthy', de: 'gesund' },
        },
      },
    ],
  },
  {
    id: 'das-gemüse',
    word: 'das Gemüse',
    tr: 'sebze',
    sentences: [
      {
        id: 'gemüse-1',
        targetWord: 'Gemüse',
        german: 'Ich esse jeden Tag Gemüse.',
        germanWithBlank: 'Ich esse jeden Tag ___.',
        translationTR: 'Her gün sebze yiyorum.',
        translationEN: 'I eat vegetables every day.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'esse': { tr: 'yemek (ben)', en: 'eat', de: 'essen' },
          'jeden': { tr: 'her (eril, -i hali)', en: 'every (masc. accusative)', de: 'jeder' },
          'tag': { tr: 'gün', en: 'day', de: 'der Tag' },
        },
      },
    ],
  },
  {
    id: 'die-tomate',
    word: 'die Tomate',
    tr: 'domates',
    sentences: [
      {
        id: 'tomate-1',
        targetWord: 'Tomaten',
        german: 'Ich kaufe Tomaten auf dem Markt.',
        germanWithBlank: 'Ich kaufe ___ auf dem Markt.',
        translationTR: 'Pazarda domates alıyorum.',
        translationEN: 'I buy tomatoes at the market.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'kaufe': { tr: 'satın almak (ben)', en: 'buy', de: 'kaufen' },
          'auf': { tr: 'üstünde / ...da', en: 'at/on', de: 'auf' },
          'dem': { tr: 'belirli artikel (-e hali, eril/yansız)', en: 'the (dative)', de: 'dem' },
          'markt': { tr: 'pazar, çarşı', en: 'market', de: 'der Markt' },
        },
      },
    ],
  },
  {
    id: 'die-zwiebel',
    word: 'die Zwiebel',
    tr: 'soğan',
    sentences: [
      {
        id: 'zwiebel-1',
        targetWord: 'Zwiebeln',
        german: 'Ich mag keine Zwiebeln.',
        germanWithBlank: 'Ich mag keine ___.',
        translationTR: 'Soğan sevmiyorum.',
        translationEN: 'I don\'t like onions.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'mag': { tr: 'sevmek (ben)', en: 'like', de: 'mögen' },
          'keine': { tr: 'hiç (olumsuz belirtisiz)', en: 'no/not any', de: 'kein' },
        },
      },
    ],
  },
  {
    id: 'der-zucker',
    word: 'der Zucker',
    tr: 'şeker',
    sentences: [
      {
        id: 'zucker-1',
        targetWord: 'Zucker',
        german: 'Ich nehme keinen Zucker im Kaffee.',
        germanWithBlank: 'Ich nehme keinen ___ im Kaffee.',
        translationTR: 'Kahveme şeker koymuyorum.',
        translationEN: 'I don\'t take sugar in my coffee.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'nehme': { tr: 'almak (ben)', en: 'take', de: 'nehmen' },
          'keinen': { tr: 'hiç (eril, -i hali, olumsuz)', en: 'no/not any (masc. accusative)', de: 'kein' },
          'im': { tr: 'içinde (in+dem)', en: 'in the', de: 'im' },
          'kaffee': { tr: 'kahve', en: 'coffee', de: 'der Kaffee' },
        },
      },
    ],
  },
  {
    id: 'das-salz',
    word: 'das Salz',
    tr: 'tuz',
    sentences: [
      {
        id: 'salz-1',
        targetWord: 'Salz',
        german: 'Kannst du mir das Salz geben?',
        germanWithBlank: 'Kannst du mir das ___ geben?',
        translationTR: 'Tuzu verebilir misin?',
        translationEN: 'Can you pass me the salt?',
        glossary: {
          'kannst': { tr: 'yapabilmek (sen)', en: 'can (you)', de: 'können' },
          'du': { tr: 'sen', en: 'you', de: 'du' },
          'mir': { tr: 'bana (yönelme hali)', en: 'me (dative)', de: 'mir' },
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'geben': { tr: 'vermek', en: 'to give', de: 'geben' },
        },
      },
    ],
  },
  {
    id: 'der-kuchen',
    word: 'der Kuchen',
    tr: 'kek / pasta',
    sentences: [
      {
        id: 'kuchen-1',
        targetWord: 'Kuchen',
        german: 'Meine Oma backt einen Kuchen.',
        germanWithBlank: 'Meine Oma backt einen ___.',
        translationTR: 'Büyünannem pasta pişiriyor.',
        translationEN: 'My grandma bakes a cake.',
        glossary: {
          'meine': { tr: 'benim (dişil)', en: 'my', de: 'mein' },
          'oma': { tr: 'büyükanne, babaanne', en: 'grandma', de: 'die Oma' },
          'backt': { tr: 'pişirmek, fırında yapmak', en: 'bakes', de: 'backen' },
          'einen': { tr: 'bir (eril belirtisiz, -i hali)', en: 'a/an (masc. accusative)', de: 'einen' },
        },
      },
    ],
  },
  {
    id: 'die-schokolade',
    word: 'die Schokolade',
    sentences: [
      {
        id: 'schokolade-1',
        targetWord: 'Schokolade',
        german: 'Ich liebe Schokolade.',
        germanWithBlank: 'Ich liebe ___.',
        translationTR: 'Çikolatayı seviyorum.',
        translationEN: 'I love chocolate.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'liebe': { tr: 'sevmek, aşık olmak (ben)', en: 'love', de: 'lieben' },
        },
      },
    ],
  },
  {
    id: 'der-tee',
    word: 'der Tee',
    tr: 'çay',
    sentences: [
      {
        id: 'tee-1',
        targetWord: 'Tee',
        german: 'Ich trinke gern Tee.',
        germanWithBlank: 'Ich trinke gern ___.',
        translationTR: 'Çay içmeyi severim.',
        translationEN: 'I like drinking tea.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'trinke': { tr: 'içmek (ben)', en: 'drink', de: 'trinken' },
          'gern': { tr: 'severek, isteyerek', en: 'gladly, like to', de: 'gern' },
        },
      },
    ],
  },
  {
    id: 'das-wohnzimmer',
    word: 'das Wohnzimmer',
    sentences: [
      {
        id: 'wohnzimmer-1',
        targetWord: 'Wohnzimmer',
        german: 'Wir sitzen im Wohnzimmer.',
        germanWithBlank: 'Wir sitzen im ___.',
        translationTR: 'Oturma odasında oturuyoruz.',
        translationEN: 'We are sitting in the living room.',
        glossary: {
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'sitzen': { tr: 'oturmak (biz)', en: 'sit/are sitting', de: 'sitzen' },
          'im': { tr: 'içinde (in+dem)', en: 'in the', de: 'im' },
        },
      },
    ],
  },
  {
    id: 'das-schlafzimmer',
    word: 'das Schlafzimmer',
    sentences: [
      {
        id: 'schlafzimmer-1',
        targetWord: 'Schlafzimmer',
        german: 'Das Schlafzimmer ist ruhig.',
        germanWithBlank: 'Das ___ ist ruhig.',
        translationTR: 'Yatak odası sessiz.',
        translationEN: 'The bedroom is quiet.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'ruhig': { tr: 'sessiz, sakin', en: 'quiet/calm', de: 'ruhig' },
        },
      },
    ],
  },
  {
    id: 'der-balkon',
    word: 'der Balkon',
    tr: 'balkon',
    sentences: [
      {
        id: 'balkon-1',
        targetWord: 'Balkon',
        german: 'Ich sitze auf dem Balkon.',
        germanWithBlank: 'Ich sitze auf dem ___.',
        translationTR: 'Balkonda oturuyorum.',
        translationEN: 'I am sitting on the balcony.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'sitze': { tr: 'oturmak (ben)', en: 'sit/am sitting', de: 'sitzen' },
          'auf': { tr: 'üstünde', en: 'on', de: 'auf' },
          'dem': { tr: 'belirli artikel (-e hali, eril/yansız)', en: 'the (dative)', de: 'dem' },
        },
      },
    ],
  },
  {
    id: 'der-eingang',
    word: 'der Eingang',
    tr: 'giriş',
    sentences: [
      {
        id: 'eingang-1',
        targetWord: 'Eingang',
        german: 'Der Eingang ist vorne.',
        germanWithBlank: 'Der ___ ist vorne.',
        translationTR: 'Giriş önde.',
        translationEN: 'The entrance is at the front.',
        glossary: {
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'vorne': { tr: 'önde, ön tarafta', en: 'at the front', de: 'vorne' },
        },
      },
    ],
  },
  {
    id: 'der-ausgang',
    word: 'der Ausgang',
    tr: 'çıkış',
    sentences: [
      {
        id: 'ausgang-1',
        targetWord: 'Ausgang',
        german: 'Wo ist der Ausgang?',
        germanWithBlank: 'Wo ist der ___?',
        translationTR: 'Çıkış nerede?',
        translationEN: 'Where is the exit?',
        glossary: {
          'wo': { tr: 'nerede', en: 'where', de: 'wo' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
        },
      },
    ],
  },
  {
    id: 'die-tür',
    word: 'die Tür',
    tr: 'kapı',
    sentences: [
      {
        id: 'tür-1',
        targetWord: 'Tür',
        german: 'Bitte mach die Tür zu!',
        germanWithBlank: 'Bitte mach die ___ zu!',
        translationTR: 'Lütfen kapıyı kapat!',
        translationEN: 'Please close the door!',
        glossary: {
          'bitte': { tr: 'lütfen', en: 'please', de: 'bitte' },
          'mach': { tr: 'yapmak, kapatmak (emir)', en: 'make/close (imperative)', de: 'machen' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'zu': { tr: 'kapalı (zumachen = kapatmak)', en: 'closed (zumachen = close)', de: 'zu' },
        },
      },
    ],
  },
  {
    id: 'die-treppe',
    word: 'die Treppe',
    sentences: [
      {
        id: 'treppe-1',
        targetWord: 'Treppe',
        german: 'Geh die Treppe hoch!',
        germanWithBlank: 'Geh die ___ hoch!',
        translationTR: 'Merdivenden çık!',
        translationEN: 'Go up the stairs!',
        glossary: {
          'geh': { tr: 'gitmek (emir)', en: 'go (imperative)', de: 'gehen' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'hoch': { tr: 'yukarı', en: 'up/high', de: 'hoch' },
        },
      },
    ],
  },
  {
    id: 'der-aufzug',
    word: 'der Aufzug',
    tr: 'asansör',
    sentences: [
      {
        id: 'aufzug-1',
        targetWord: 'Aufzug',
        german: 'Nehmen Sie den Aufzug!',
        germanWithBlank: 'Nehmen Sie den ___!',
        translationTR: 'Asansörü kullanın!',
        translationEN: 'Take the lift!',
        glossary: {
          'nehmen': { tr: 'almak, binmek (emir - resmi)', en: 'take (formal imperative)', de: 'nehmen' },
          'sie': { tr: 'siz (resmi hitap)', en: 'you (formal)', de: 'Sie' },
          'den': { tr: 'belirli artikel (eril, -i hali)', en: 'the (masc. accusative)', de: 'den' },
        },
      },
    ],
  },
  {
    id: 'die-haltestelle',
    word: 'die Haltestelle',
    tr: 'durak',
    sentences: [
      {
        id: 'haltestelle-1',
        targetWord: 'Haltestelle',
        german: 'Die nächste Haltestelle ist der Markt.',
        germanWithBlank: 'Die nächste ___ ist der Markt.',
        translationTR: 'Bir sonraki durak pazar yeri.',
        translationEN: 'The next stop is the market.',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'nächste': { tr: 'bir sonraki, en yakın', en: 'next/nearest', de: 'nächste' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'markt': { tr: 'pazar, çarşı', en: 'market', de: 'der Markt' },
        },
      },
    ],
  },
  {
    id: 'der-fahrplan',
    word: 'der Fahrplan',
    tr: 'tarife / hareket çizelgesi',
    sentences: [
      {
        id: 'fahrplan-1',
        targetWord: 'Fahrplan',
        german: 'Wo ist der Fahrplan?',
        germanWithBlank: 'Wo ist der ___?',
        translationTR: 'Tarife nerede?',
        translationEN: 'Where is the timetable?',
        glossary: {
          'wo': { tr: 'nerede', en: 'where', de: 'wo' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
        },
      },
    ],
  },
  {
    id: 'das-ticket',
    word: 'das Ticket',
    tr: 'bilet',
    sentences: [
      {
        id: 'ticket-1',
        targetWord: 'Ticket',
        german: 'Ich kaufe ein Ticket online.',
        germanWithBlank: 'Ich kaufe ein ___ online.',
        translationTR: 'Çevrimiçi bilet alıyorum.',
        translationEN: 'I buy a ticket online.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'kaufe': { tr: 'satın almak (ben)', en: 'buy', de: 'kaufen' },
          'ein': { tr: 'bir (yansız belirtisiz)', en: 'a/an (neuter)', de: 'ein' },
          'online': { tr: 'çevrimiçi', en: 'online', de: 'online' },
        },
      },
    ],
  },
  {
    id: 'der-flug',
    word: 'der Flug',
    tr: 'uçuş',
    sentences: [
      {
        id: 'flug-1',
        targetWord: 'Flug',
        german: 'Der Flug dauert zwei Stunden.',
        germanWithBlank: 'Der ___ dauert zwei Stunden.',
        translationTR: 'Uçuş iki saat sürüyor.',
        translationEN: 'The flight takes two hours.',
        glossary: {
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'dauert': { tr: 'sürmek', en: 'takes/lasts', de: 'dauern' },
          'zwei': { tr: 'iki (sayı)', en: 'two', de: 'zwei' },
          'stunden': { tr: 'saatler (çoğul)', en: 'hours', de: 'die Stunde' },
        },
      },
    ],
  },
  {
    id: 'die-reise',
    word: 'die Reise',
    tr: 'seyahat / yolculuk',
    sentences: [
      {
        id: 'reise-1',
        targetWord: 'Reise',
        german: 'Die Reise war sehr schön.',
        germanWithBlank: 'Die ___ war sehr schön.',
        translationTR: 'Yolculuk çok güzeldi.',
        translationEN: 'The journey was very nice.',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'war': { tr: 'olmak (geçmiş, o/o/o)', en: 'was', de: 'sein' },
          'sehr': { tr: 'çok', en: 'very', de: 'sehr' },
          'schön': { tr: 'güzel', en: 'nice/beautiful', de: 'schön' },
        },
      },
    ],
  },
  {
    id: 'das-wort',
    word: 'das Wort',
    sentences: [
      {
        id: 'wort-1',
        targetWord: 'Wort',
        german: 'Ich kenne dieses Wort nicht.',
        germanWithBlank: 'Ich kenne dieses ___ nicht.',
        translationTR: 'Bu kelimeyi bilmiyorum.',
        translationEN: 'I don\'t know this word.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'kenne': { tr: 'tanımak, bilmek (ben)', en: 'know', de: 'kennen' },
          'dieses': { tr: 'bu (yansız)', en: 'this (neuter)', de: 'dies' },
          'nicht': { tr: 'değil, hayır', en: 'not', de: 'nicht' },
        },
      },
    ],
  },
  {
    id: 'der-satz',
    word: 'der Satz',
    tr: 'cümle',
    sentences: [
      {
        id: 'satz-1',
        targetWord: 'Satz',
        german: 'Schreib bitte einen Satz!',
        germanWithBlank: 'Schreib bitte einen ___!',
        translationTR: 'Lütfen bir cümle yaz!',
        translationEN: 'Please write a sentence!',
        glossary: {
          'schreib': { tr: 'yazmak (emir)', en: 'write (imperative)', de: 'schreiben' },
          'bitte': { tr: 'lütfen', en: 'please', de: 'bitte' },
          'einen': { tr: 'bir (eril belirtisiz, -i hali)', en: 'a/an (masc. accusative)', de: 'einen' },
        },
      },
    ],
  },
  {
    id: 'die-grammatik',
    word: 'die Grammatik',
    sentences: [
      {
        id: 'grammatik-1',
        targetWord: 'Grammatik',
        german: 'Die deutsche Grammatik ist nicht leicht.',
        germanWithBlank: 'Die deutsche ___ ist nicht leicht.',
        translationTR: 'Alman grameri kolay değil.',
        translationEN: 'German grammar is not easy.',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'deutsche': { tr: 'Alman (sıfat)', en: 'German (adjective)', de: 'deutsch' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'nicht': { tr: 'değil', en: 'not', de: 'nicht' },
          'leicht': { tr: 'kolay, hafif', en: 'easy/light', de: 'leicht' },
        },
      },
    ],
  },
  {
    id: 'die-übung',
    word: 'die Übung',
    tr: 'alıştırma / pratik',
    sentences: [
      {
        id: 'übung-1',
        targetWord: 'Übung',
        german: 'Mach bitte die Übung!',
        germanWithBlank: 'Mach bitte die ___!',
        translationTR: 'Lütfen alıştırmayı yap!',
        translationEN: 'Please do the exercise!',
        glossary: {
          'mach': { tr: 'yapmak (emir)', en: 'do/make (imperative)', de: 'machen' },
          'bitte': { tr: 'lütfen', en: 'please', de: 'bitte' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
        },
      },
    ],
  },
  {
    id: 'die-frage',
    word: 'die Frage',
    tr: 'soru',
    sentences: [
      {
        id: 'frage-1',
        targetWord: 'Frage',
        german: 'Ich habe eine Frage.',
        germanWithBlank: 'Ich habe eine ___.',
        translationTR: 'Bir sorum var.',
        translationEN: 'I have a question.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'habe': { tr: 'sahip olmak (ben)', en: 'have', de: 'haben' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
        },
      },
    ],
  },
  {
    id: 'die-anmeldung',
    word: 'die Anmeldung',
    tr: 'kayıt',
    sentences: [
      {
        id: 'anmeldung-1',
        targetWord: 'Anmeldung',
        german: 'Die Anmeldung ist hier.',
        germanWithBlank: 'Die ___ ist hier.',
        translationTR: 'Kayıt işlemleri burada.',
        translationEN: 'The registration is here.',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'hier': { tr: 'burada', en: 'here', de: 'hier' },
        },
      },
    ],
  },
  {
    id: 'der-ausweis',
    word: 'der Ausweis',
    tr: 'kimlik',
    sentences: [
      {
        id: 'ausweis-1',
        targetWord: 'Ausweis',
        german: 'Haben Sie Ihren Ausweis dabei?',
        germanWithBlank: 'Haben Sie Ihren ___ dabei?',
        translationTR: 'Kimliğiniz yanınızda mı?',
        translationEN: 'Do you have your ID with you?',
        glossary: {
          'haben': { tr: 'sahip olmak', en: 'have', de: 'haben' },
          'sie': { tr: 'siz (resmi hitap)', en: 'you (formal)', de: 'Sie' },
          'ihren': { tr: 'sizin (eril, -i hali)', en: 'your (formal, masc. accusative)', de: 'Ihr' },
          'dabei': { tr: 'yanında, beraberinde', en: 'with you/along', de: 'dabei' },
        },
      },
    ],
  },
  {
    id: 'der-pass',
    word: 'der Pass',
    tr: 'pasaport',
    sentences: [
      {
        id: 'pass-1',
        targetWord: 'Pass',
        german: 'Ich brauche meinen Pass.',
        germanWithBlank: 'Ich brauche meinen ___.',
        translationTR: 'Pasaportuma ihtiyacım var.',
        translationEN: 'I need my passport.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'brauche': { tr: 'ihtiyaç duymak (ben)', en: 'need', de: 'brauchen' },
          'meinen': { tr: 'benim (eril, -i hali)', en: 'my (masc. accusative)', de: 'mein' },
        },
      },
    ],
  },
  {
    id: 'der-schlüssel',
    word: 'der Schlüssel',
    tr: 'anahtar',
    sentences: [
      {
        id: 'schlüssel-extra-1',
        targetWord: 'Schlüssel',
        german: 'Wo ist mein Schlüssel?',
        germanWithBlank: 'Wo ist mein ___?',
        translationTR: 'Anahtarım nerede?',
        translationEN: 'Where is my key?',
        glossary: {
          'wo': { tr: 'nerede', en: 'where', de: 'wo' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'mein': { tr: 'benim (eril/yansız)', en: 'my', de: 'mein' },
        },
      },
    ],
  },
  {
    id: 'die-miete',
    word: 'die Miete',
    tr: 'kira',
    sentences: [
      {
        id: 'miete-1',
        targetWord: 'Miete',
        german: 'Die Miete ist teuer.',
        germanWithBlank: 'Die ___ ist teuer.',
        translationTR: 'Kira pahalı.',
        translationEN: 'The rent is expensive.',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'teuer': { tr: 'pahalı', en: 'expensive', de: 'teuer' },
        },
      },
    ],
  },
  {
    id: 'das-stockwerk',
    word: 'das Stockwerk',
    sentences: [
      {
        id: 'stockwerk-1',
        targetWord: 'Stockwerk',
        german: 'Ich wohne im zweiten Stockwerk.',
        germanWithBlank: 'Ich wohne im zweiten ___.',
        translationTR: 'İkinci katta oturuyorum.',
        translationEN: 'I live on the second floor.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'wohne': { tr: 'oturmak, yaşamak (ben)', en: 'live', de: 'wohnen' },
          'im': { tr: 'içinde / -de/-da (in+dem)', en: 'in the', de: 'im' },
          'zweiten': { tr: 'ikinci (-e/-da hali)', en: 'second (dative)', de: 'zweite' },
        },
      },
    ],
  },
  {
    id: 'die-etage',
    word: 'die Etage',
    sentences: [
      {
        id: 'etage-1',
        targetWord: 'Etage',
        german: 'Das Zimmer ist in der dritten Etage.',
        germanWithBlank: 'Das Zimmer ist in der dritten ___.',
        translationTR: 'Oda üçüncü katta.',
        translationEN: 'The room is on the third floor.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'zimmer': { tr: 'oda', en: 'room', de: 'das Zimmer' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'in': { tr: 'içinde', en: 'in/on', de: 'in' },
          'der': { tr: 'belirli artikel (dişil, -e hali)', en: 'the (fem. dative)', de: 'der' },
          'dritten': { tr: 'üçüncü (-e/-da hali)', en: 'third (dative)', de: 'dritte' },
        },
      },
    ],
  },
  {
    id: 'das-erdgeschoss',
    word: 'das Erdgeschoss',
    sentences: [
      {
        id: 'erdgeschoss-1',
        targetWord: 'Erdgeschoss',
        german: 'Das Café ist im Erdgeschoss.',
        germanWithBlank: 'Das Café ist im ___.',
        translationTR: 'Kafe zemin katta.',
        translationEN: 'The café is on the ground floor.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'café': { tr: 'kafe', en: 'café', de: 'das Café' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'im': { tr: 'içinde / -de (in+dem)', en: 'in the', de: 'im' },
        },
      },
    ],
  },
  {
    id: 'die-krankenversicherung',
    word: 'die Krankenversicherung',
    sentences: [
      {
        id: 'krankenversicherung-1',
        targetWord: 'Krankenversicherung',
        german: 'Ich habe eine Krankenversicherung.',
        germanWithBlank: 'Ich habe eine ___.',
        translationTR: 'Sağlık sigortam var.',
        translationEN: 'I have health insurance.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'habe': { tr: 'sahip olmak (ben)', en: 'have', de: 'haben' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
        },
      },
    ],
  },
  {
    id: 'der-haushalt',
    word: 'der Haushalt',
    tr: 'ev işleri / hane',
    sentences: [
      {
        id: 'haushalt-1',
        targetWord: 'Haushalt',
        german: 'Ich helfe im Haushalt.',
        germanWithBlank: 'Ich helfe im ___.',
        translationTR: 'Ev işlerinde yardım ediyorum.',
        translationEN: 'I help with the household.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'helfe': { tr: 'yardım etmek (ben)', en: 'help', de: 'helfen' },
          'im': { tr: 'içinde / -de (in+dem)', en: 'in the', de: 'im' },
        },
      },
    ],
  },
  {
    id: 'die-wäsche',
    word: 'die Wäsche',
    tr: 'çamaşır',
    sentences: [
      {
        id: 'wäsche-1',
        targetWord: 'Wäsche',
        german: 'Ich wasche heute die Wäsche.',
        germanWithBlank: 'Ich wasche heute die ___.',
        translationTR: 'Bugün çamaşır yıkıyorum.',
        translationEN: 'I am doing the laundry today.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'wasche': { tr: 'yıkamak (ben)', en: 'wash', de: 'waschen' },
          'heute': { tr: 'bugün', en: 'today', de: 'heute' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
        },
      },
    ],
  },
  {
    id: 'putzen',
    word: 'putzen',
    tr: 'temizlemek / fırçalamak',
    sentences: [
      {
        id: 'putzen-1',
        targetWord: 'putzen',
        german: 'Ich muss das Bad putzen.',
        germanWithBlank: 'Ich muss das Bad ___.',
        translationTR: 'Banyoyu temizlemem gerekiyor.',
        translationEN: 'I need to clean the bathroom.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'muss': { tr: 'zorunda olmak (ben)', en: 'must/have to', de: 'müssen' },
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'bad': { tr: 'banyo', en: 'bathroom', de: 'das Bad' },
        },
      },
    ],
  },
  {
    id: 'waschen',
    word: 'waschen (sich)',
    tr: 'yıkamak / yıkanmak',
    sentences: [
      {
        id: 'waschen-1',
        targetWord: 'waschen',
        german: 'Ich muss mir die Haare waschen.',
        germanWithBlank: 'Ich muss mir die Haare ___.',
        translationTR: 'Saçımı yıkamam gerekiyor.',
        translationEN: 'I need to wash my hair.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'muss': { tr: 'zorunda olmak (ben)', en: 'must/have to', de: 'müssen' },
          'mir': { tr: 'kendime (dativ)', en: 'myself (dative)', de: 'mir' },
          'die': { tr: 'belirli artikel (çoğul)', en: 'the (plural)', de: 'die' },
          'haare': { tr: 'saçlar', en: 'hair', de: 'das Haar' },
        },
      },
    ],
  },
  {
    id: 'schicken',
    word: 'schicken',
    tr: 'göndermek',
    sentences: [
      {
        id: 'schicken-1',
        targetWord: 'schicken',
        german: 'Ich möchte ein Paket schicken.',
        germanWithBlank: 'Ich möchte ein Paket ___.',
        translationTR: 'Bir paket göndermek istiyorum.',
        translationEN: 'I would like to send a package.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'möchte': { tr: 'istemek (nazik)', en: 'would like', de: 'möchten' },
          'ein': { tr: 'bir (yansız belirtisiz)', en: 'a/an (neuter)', de: 'ein' },
          'paket': { tr: 'paket, koli', en: 'package/parcel', de: 'das Paket' },
        },
      },
    ],
  },
  {
    id: 'empfehlen',
    word: 'empfehlen',
    tr: 'tavsiye etmek',
    sentences: [
      {
        id: 'empfehlen-1',
        targetWord: 'empfehlen',
        german: 'Können Sie mir ein Restaurant empfehlen?',
        germanWithBlank: 'Können Sie mir ein Restaurant ___?',
        translationTR: 'Bana bir restoran tavsiye edebilir misiniz?',
        translationEN: 'Can you recommend a restaurant to me?',
        glossary: {
          'können': { tr: 'yapabilmek', en: 'can/be able to', de: 'können' },
          'sie': { tr: 'siz (resmi hitap)', en: 'you (formal)', de: 'Sie' },
          'mir': { tr: 'bana (yönelme hali)', en: 'me (dative)', de: 'mir' },
          'ein': { tr: 'bir (yansız belirtisiz)', en: 'a/an (neuter)', de: 'ein' },
          'restaurant': { tr: 'restoran', en: 'restaurant', de: 'das Restaurant' },
        },
      },
    ],
  },
  {
    id: 'reservieren',
    word: 'reservieren',
    tr: 'yer ayırtmak / rezerve etmek',
    sentences: [
      {
        id: 'reservieren-1',
        targetWord: 'reservieren',
        german: 'Ich möchte einen Tisch reservieren.',
        germanWithBlank: 'Ich möchte einen Tisch ___.',
        translationTR: 'Bir masa rezervasyonu yapmak istiyorum.',
        translationEN: 'I would like to reserve a table.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'möchte': { tr: 'istemek (nazik)', en: 'would like', de: 'möchten' },
          'einen': { tr: 'bir (eril belirtisiz, -i hali)', en: 'a/an (masc. accusative)', de: 'einen' },
          'tisch': { tr: 'masa', en: 'table', de: 'der Tisch' },
        },
      },
    ],
  },
  {
    id: 'die-rechnung',
    word: 'die Rechnung',
    tr: 'fatura / hesap',
    sentences: [
      {
        id: 'rechnung-1',
        targetWord: 'Rechnung',
        german: 'Die Rechnung, bitte!',
        germanWithBlank: 'Die ___, bitte!',
        translationTR: 'Hesabı getirir misiniz?',
        translationEN: 'The bill, please!',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'bitte': { tr: 'lütfen', en: 'please', de: 'bitte' },
        },
      },
    ],
  },
  {
    id: 'das-trinkgeld',
    word: 'das Trinkgeld',
    tr: 'bahşiş',
    sentences: [
      {
        id: 'trinkgeld-1',
        targetWord: 'Trinkgeld',
        german: 'Ich gebe dem Kellner Trinkgeld.',
        germanWithBlank: 'Ich gebe dem Kellner ___.',
        translationTR: 'Garsona bahşiş veriyorum.',
        translationEN: 'I give the waiter a tip.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'gebe': { tr: 'vermek (ben)', en: 'give', de: 'geben' },
          'dem': { tr: 'belirli artikel (-e hali, eril)', en: 'the (masc. dative)', de: 'dem' },
          'kellner': { tr: 'garson', en: 'waiter', de: 'der Kellner' },
        },
      },
    ],
  },
  {
    id: 'die-speisekarte',
    word: 'die Speisekarte',
    sentences: [
      {
        id: 'speisekarte-1',
        targetWord: 'Speisekarte',
        german: 'Kann ich die Speisekarte sehen?',
        germanWithBlank: 'Kann ich die ___ sehen?',
        translationTR: 'Menüyü görebilir miyim?',
        translationEN: 'Can I see the menu?',
        glossary: {
          'kann': { tr: 'yapabilmek (ben)', en: 'can (I)', de: 'können' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'sehen': { tr: 'görmek', en: 'to see', de: 'sehen' },
        },
      },
    ],
  },
  {
    id: 'das-gericht',
    word: 'das Gericht',
    tr: 'mahkeme / yemek',
    sentences: [
      {
        id: 'gericht-1',
        targetWord: 'Gericht',
        german: 'Was ist das Gericht des Tages?',
        germanWithBlank: 'Was ist das ___ des Tages?',
        translationTR: 'Günün yemeği nedir?',
        translationEN: 'What is the dish of the day?',
        glossary: {
          'was': { tr: 'ne', en: 'what', de: 'was' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'des': { tr: 'belirli artikel (iyelik/sahiplik)', en: 'the (genitive)', de: 'des' },
          'tages': { tr: 'günün (sahiplik hali)', en: 'of the day', de: 'der Tag' },
        },
      },
    ],
  },
  {
    id: 'der-nachtisch',
    word: 'der Nachtisch',
    sentences: [
      {
        id: 'nachtisch-1',
        targetWord: 'Nachtisch',
        german: 'Was möchten Sie als Nachtisch?',
        germanWithBlank: 'Was möchten Sie als ___?',
        translationTR: 'Tatlı olarak ne istersiniz?',
        translationEN: 'What would you like for dessert?',
        glossary: {
          'was': { tr: 'ne', en: 'what', de: 'was' },
          'möchten': { tr: 'istemek (nazik, siz)', en: 'would like', de: 'möchten' },
          'sie': { tr: 'siz (resmi hitap)', en: 'you (formal)', de: 'Sie' },
          'als': { tr: 'olarak', en: 'as/for', de: 'als' },
        },
      },
    ],
  },
  {
    id: 'das-paket',
    word: 'das Paket',
    tr: 'paket',
    sentences: [
      {
        id: 'paket-1',
        targetWord: 'Paket',
        german: 'Ich habe ein Paket bekommen.',
        germanWithBlank: 'Ich habe ein ___ bekommen.',
        translationTR: 'Bir paket aldım.',
        translationEN: 'I received a package.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'habe': { tr: 'sahip olmak / yardımcı fiil (ben)', en: 'have (auxiliary)', de: 'haben' },
          'ein': { tr: 'bir (yansız belirtisiz)', en: 'a/an (neuter)', de: 'ein' },
          'bekommen': { tr: 'almak, teslim almak (geçmiş)', en: 'received', de: 'bekommen' },
        },
      },
    ],
  },
  {
    id: 'der-empfänger',
    word: 'der Empfänger',
    tr: 'alıcı',
    sentences: [
      {
        id: 'empfänger-1',
        targetWord: 'Empfänger',
        german: 'Der Empfänger ist meine Mutter.',
        germanWithBlank: 'Der ___ ist meine Mutter.',
        translationTR: 'Alıcı annem.',
        translationEN: 'The recipient is my mother.',
        glossary: {
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'meine': { tr: 'benim (dişil)', en: 'my', de: 'mein' },
          'mutter': { tr: 'anne', en: 'mother', de: 'die Mutter' },
        },
      },
    ],
  },
  {
    id: 'die-briefkasten',
    word: 'der Briefkasten',
    tr: 'posta kutusu',
    sentences: [
      {
        id: 'briefkasten-1',
        targetWord: 'Briefkasten',
        german: 'Ich werfe den Brief in den Briefkasten.',
        germanWithBlank: 'Ich werfe den Brief in den ___.',
        translationTR: 'Mektubu posta kutusuna atıyorum.',
        translationEN: 'I drop the letter into the postbox.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'werfe': { tr: 'atmak (ben)', en: 'throw/drop', de: 'werfen' },
          'den': { tr: 'belirli artikel (eril, -i hali)', en: 'the (masc. accusative)', de: 'den' },
          'brief': { tr: 'mektup', en: 'letter', de: 'der Brief' },
          'in': { tr: 'içine', en: 'into', de: 'in' },
        },
      },
    ],
  },
  {
    id: 'die-postkarte',
    word: 'die Postkarte',
    sentences: [
      {
        id: 'postkarte-1',
        targetWord: 'Postkarte',
        german: 'Ich schreibe eine Postkarte aus dem Urlaub.',
        germanWithBlank: 'Ich schreibe eine ___ aus dem Urlaub.',
        translationTR: 'Tatilden bir kartpostal yazıyorum.',
        translationEN: 'I am writing a postcard from my holiday.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'schreibe': { tr: 'yazmak (ben)', en: 'write', de: 'schreiben' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
          'aus': { tr: '-den/-dan (kaynak)', en: 'from', de: 'aus' },
          'dem': { tr: 'belirli artikel (-e hali, eril/yansız)', en: 'the (dative)', de: 'dem' },
          'urlaub': { tr: 'tatil', en: 'holiday/vacation', de: 'der Urlaub' },
        },
      },
    ],
  },
  {
    id: 'das-handy',
    word: 'das Handy',
    tr: 'cep telefonu',
    sentences: [
      {
        id: 'handy-1',
        targetWord: 'Handy',
        german: 'Ich rufe dich auf dem Handy an.',
        germanWithBlank: 'Ich rufe dich auf dem ___ an.',
        translationTR: 'Seni cep telefonunda arıyorum.',
        translationEN: 'I call you on the mobile phone.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'rufe': { tr: 'aramak (ben)', en: 'call', de: 'rufen / anrufen' },
          'dich': { tr: 'seni (belirtme hali)', en: 'you (accusative)', de: 'dich' },
          'auf': { tr: 'üstünde / üzerinden', en: 'on', de: 'auf' },
          'dem': { tr: 'belirli artikel (-e hali, yansız)', en: 'the (dative neuter)', de: 'dem' },
          'an': { tr: 'aramak (anrufen = aramak)', en: 'call (anrufen = to call)', de: 'an' },
        },
      },
    ],
  },
  {
    id: 'die-nachricht',
    word: 'die Nachricht',
    tr: 'haber / mesaj',
    sentences: [
      {
        id: 'nachricht-1',
        targetWord: 'Nachricht',
        german: 'Ich habe eine Nachricht bekommen.',
        germanWithBlank: 'Ich habe eine ___ bekommen.',
        translationTR: 'Bir mesaj aldım.',
        translationEN: 'I received a message.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'habe': { tr: 'sahip olmak / yardımcı fiil (ben)', en: 'have (auxiliary)', de: 'haben' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
          'bekommen': { tr: 'almak, teslim almak (geçmiş)', en: 'received', de: 'bekommen' },
        },
      },
    ],
  },
  {
    id: 'die-verabredung',
    word: 'die Verabredung',
    tr: 'randevu / sözleşme',
    sentences: [
      {
        id: 'verabredung-1',
        targetWord: 'Verabredung',
        german: 'Ich habe heute eine Verabredung.',
        germanWithBlank: 'Ich habe heute eine ___.',
        translationTR: 'Bugün bir randevum var.',
        translationEN: 'I have an appointment today.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'habe': { tr: 'sahip olmak (ben)', en: 'have', de: 'haben' },
          'heute': { tr: 'bugün', en: 'today', de: 'heute' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
        },
      },
    ],
  },
  {
    id: 'einziehen',
    word: 'einziehen',
    tr: '(eve) taşınmak',
    sentences: [
      {
        id: 'einziehen-1',
        targetWord: 'eingezogen',
        german: 'Wir sind in die neue Wohnung eingezogen.',
        germanWithBlank: 'Wir sind in die neue Wohnung ___.',
        translationTR: 'Yeni daireye taşındık.',
        translationEN: 'We moved into the new apartment.',
        glossary: {
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'ziehen': { tr: 'taşınmak (einziehen = taşınmak)', en: 'move (einziehen = move in)', de: 'ziehen' },
          'nächsten': { tr: 'gelecek (eril, -i hali)', en: 'next (masc. accusative)', de: 'nächste' },
          'monat': { tr: 'ay', en: 'month', de: 'der Monat' },
          'in': { tr: 'içine', en: 'into', de: 'in' },
          'die': { tr: 'belirli artikel (dişil, -i hali)', en: 'the (fem. accusative)', de: 'die' },
          'neue': { tr: 'yeni (dişil)', en: 'new (feminine)', de: 'neu' },
          'wohnung': { tr: 'daire, konut', en: 'apartment', de: 'die Wohnung' },
        },
      },
    ],
  },
  {
    id: 'umziehen',
    word: 'umziehen (sich)',
    tr: 'üstünü değiştirmek',
    sentences: [
      {
        id: 'umziehen-1',
        targetWord: 'umziehen',
        german: 'Wir wollen in eine größere Wohnung umziehen.',
        germanWithBlank: 'Wir wollen in eine größere Wohnung ___.',
        translationTR: 'Daha büyük bir daireye taşınmak istiyoruz.',
        translationEN: 'We want to move to a bigger apartment.',
        glossary: {
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'wollen': { tr: 'istemek (biz)', en: 'want to', de: 'wollen' },
          'in': { tr: 'içine', en: 'into', de: 'in' },
          'eine': { tr: 'bir (dişil belirtisiz, -i hali)', en: 'a/an (fem. accusative)', de: 'eine' },
          'größere': { tr: 'daha büyük (dişil)', en: 'bigger (feminine)', de: 'groß' },
          'wohnung': { tr: 'daire, konut', en: 'apartment', de: 'die Wohnung' },
        },
      },
    ],
  },
  {
    id: 'das-haar',
    word: 'das Haar',
    tr: 'saç',
    sentences: [
      {
        id: 'haar-1',
        targetWord: 'Haare',
        german: 'Sie hat lange Haare.',
        germanWithBlank: 'Sie hat lange ___.',
        translationTR: 'Uzun saçları var.',
        translationEN: 'She has long hair.',
        glossary: {
          'sie': { tr: 'o (kadın)', en: 'she', de: 'sie' },
          'hat': { tr: 'sahip olmak', en: 'has', de: 'haben' },
          'lange': { tr: 'uzun (çoğul)', en: 'long', de: 'lang' },
        },
      },
    ],
  },
  {
    id: 'das-ohr',
    word: 'das Ohr',
    tr: 'kulak',
    sentences: [
      {
        id: 'ohr-1',
        targetWord: 'Ohren',
        german: 'Meine Ohren tun weh.',
        germanWithBlank: 'Meine ___ tun weh.',
        translationTR: 'Kulaklarım acıyor.',
        translationEN: 'My ears hurt.',
        glossary: {
          'meine': { tr: 'benim (çoğul)', en: 'my', de: 'mein' },
          'tun': { tr: 'yapmak (çoğul)', en: 'do', de: 'tun' },
          'weh': { tr: 'acıyor (tut weh = acıyor)', en: 'hurt (tut weh = hurts)', de: 'weh' },
        },
      },
    ],
  },
  {
    id: 'der-bauch',
    word: 'der Bauch',
    tr: 'karın',
    sentences: [
      {
        id: 'bauch-1',
        targetWord: 'Bauch',
        german: 'Ich habe Bauchschmerzen.',
        germanWithBlank: 'Ich habe ___schmerzen.',
        translationTR: 'Karın ağrım var.',
        translationEN: 'I have a stomachache.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'habe': { tr: 'sahip olmak (ben)', en: 'have', de: 'haben' },
          'schmerzen': { tr: 'ağrılar', en: 'pains/ache', de: 'der Schmerz' },
        },
      },
    ],
  },
  {
    id: 'der-hals',
    word: 'der Hals',
    tr: 'boğaz / boyun',
    sentences: [
      {
        id: 'hals-1',
        targetWord: 'Hals',
        german: 'Mein Hals tut weh.',
        germanWithBlank: 'Mein ___ tut weh.',
        translationTR: 'Boğazım acıyor.',
        translationEN: 'My throat hurts.',
        glossary: {
          'mein': { tr: 'benim (eril/yansız)', en: 'my', de: 'mein' },
          'tut': { tr: 'yapmak', en: 'does', de: 'tun' },
          'weh': { tr: 'acıyor (tut weh = acıyor)', en: 'hurt (tut weh = hurts)', de: 'weh' },
        },
      },
    ],
  },
  {
    id: 'das-gesicht',
    word: 'das Gesicht',
    tr: 'yüz',
    sentences: [
      {
        id: 'gesicht-1',
        targetWord: 'Gesicht',
        german: 'Sie hat ein freundliches Gesicht.',
        germanWithBlank: 'Sie hat ein freundliches ___.',
        translationTR: 'Güler yüzlü bir suratı var.',
        translationEN: 'She has a friendly face.',
        glossary: {
          'sie': { tr: 'o (kadın)', en: 'she', de: 'sie' },
          'hat': { tr: 'sahip olmak', en: 'has', de: 'haben' },
          'ein': { tr: 'bir (yansız belirtisiz)', en: 'a/an (neuter)', de: 'ein' },
          'freundliches': { tr: 'dostane, güler yüzlü (yansız)', en: 'friendly (neuter)', de: 'freundlich' },
        },
      },
    ],
  },
  {
    id: 'der-schmerz',
    word: 'der Schmerz',
    tr: 'ağrı / acı',
    sentences: [
      {
        id: 'schmerz-1',
        targetWord: 'Schmerzen',
        german: 'Ich habe starke Schmerzen.',
        germanWithBlank: 'Ich habe starke ___.',
        translationTR: 'Şiddetli ağrım var.',
        translationEN: 'I have severe pain.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'habe': { tr: 'sahip olmak (ben)', en: 'have', de: 'haben' },
          'starke': { tr: 'güçlü, şiddetli (çoğul)', en: 'strong/severe (plural)', de: 'stark' },
        },
      },
    ],
  },
  {
    id: 'die-medizin',
    word: 'die Medizin',
    tr: 'tıp / ilaç',
    sentences: [
      {
        id: 'medizin-1',
        targetWord: 'Medizin',
        german: 'Der Arzt gibt mir Medizin.',
        germanWithBlank: 'Der Arzt gibt mir ___.',
        translationTR: 'Doktor bana ilaç veriyor.',
        translationEN: 'The doctor gives me medicine.',
        glossary: {
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'arzt': { tr: 'doktor', en: 'doctor', de: 'der Arzt' },
          'gibt': { tr: 'vermek', en: 'gives', de: 'geben' },
          'mir': { tr: 'bana (yönelme hali)', en: 'me (dative)', de: 'mir' },
        },
      },
    ],
  },
  {
    id: 'gesund',
    word: 'gesund',
    tr: 'sağlıklı',
    sentences: [
      {
        id: 'gesund-1',
        targetWord: 'gesund',
        german: 'Ich bin wieder gesund.',
        germanWithBlank: 'Ich bin wieder ___.',
        translationTR: 'Tekrar sağlıklıyım.',
        translationEN: 'I am healthy again.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'bin': { tr: 'olmak (ben)', en: 'am', de: 'sein' },
          'wieder': { tr: 'yeniden, tekrar', en: 'again', de: 'wieder' },
        },
      },
    ],
  },
  {
    id: 'der-schnupfen',
    word: 'der Schnupfen',
    sentences: [
      {
        id: 'schnupfen-1',
        targetWord: 'Schnupfen',
        german: 'Ich habe Schnupfen.',
        germanWithBlank: 'Ich habe ___.',
        translationTR: 'Nezlem var.',
        translationEN: 'I have a cold.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'habe': { tr: 'sahip olmak (ben)', en: 'have', de: 'haben' },
        },
      },
    ],
  },
  {
    id: 'der-husten',
    word: 'der Husten',
    tr: 'öksürük',
    sentences: [
      {
        id: 'husten-1',
        targetWord: 'Husten',
        german: 'Ich habe Husten.',
        germanWithBlank: 'Ich habe ___.',
        translationTR: 'Öksürüğüm var.',
        translationEN: 'I have a cough.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'habe': { tr: 'sahip olmak (ben)', en: 'have', de: 'haben' },
        },
      },
    ],
  },
  {
    id: 'die-ferien',
    word: 'die Ferien',
    tr: 'tatil',
    sentences: [
      {
        id: 'ferien-1',
        targetWord: 'Ferien',
        german: 'In den Ferien fahren wir ans Meer.',
        germanWithBlank: 'In den ___ fahren wir ans Meer.',
        translationTR: 'Tatilde denize gidiyoruz.',
        translationEN: 'During the holidays we go to the sea.',
        glossary: {
          'in': { tr: 'içinde, sırasında', en: 'during/in', de: 'in' },
          'den': { tr: 'belirli artikel (çoğul, -e hali)', en: 'the (dative plural)', de: 'den' },
          'fahren': { tr: 'gitmek (araçla, biz)', en: 'go by vehicle', de: 'fahren' },
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'ans': { tr: '...a/-e (an+das)', en: 'to the', de: 'an das' },
          'meer': { tr: 'deniz', en: 'sea', de: 'das Meer' },
        },
      },
    ],
  },
  {
    id: 'das-meer',
    word: 'das Meer',
    tr: 'deniz',
    sentences: [
      {
        id: 'meer-1',
        targetWord: 'Meer',
        german: 'Im Sommer fahren wir ans Meer.',
        germanWithBlank: 'Im Sommer fahren wir ans ___.',
        translationTR: 'Yazın denize gidiyoruz.',
        translationEN: 'In summer we go to the sea.',
        glossary: {
          'im': { tr: '-de/-da (mevsimlerde)', en: 'in the (seasons)', de: 'im' },
          'sommer': { tr: 'yaz', en: 'summer', de: 'der Sommer' },
          'fahren': { tr: 'gitmek (araçla, biz)', en: 'go by vehicle', de: 'fahren' },
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'ans': { tr: '...a/-e (an+das)', en: 'to the', de: 'an das' },
        },
      },
    ],
  },
  {
    id: 'der-strand',
    word: 'der Strand',
    sentences: [
      {
        id: 'strand-1',
        targetWord: 'Strand',
        german: 'Wir liegen am Strand.',
        germanWithBlank: 'Wir liegen am ___.',
        translationTR: 'Sahilde uzanıyoruz.',
        translationEN: 'We are lying on the beach.',
        glossary: {
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'liegen': { tr: 'uzanmak, yatmak (biz)', en: 'lie/are lying', de: 'liegen' },
          'am': { tr: '...da/-de (an+dem)', en: 'at/on the', de: 'an dem' },
        },
      },
    ],
  },
  {
    id: 'spazieren-gehen',
    word: 'spazieren gehen',
    sentences: [
      {
        id: 'spazieren-1',
        targetWord: 'spazieren',
        german: 'Ich gehe gern spazieren.',
        germanWithBlank: 'Ich gehe gern ___.',
        translationTR: 'Yürüyüşe çıkmayı severim.',
        translationEN: 'I like going for a walk.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'gehe': { tr: 'gitmek (ben)', en: 'go', de: 'gehen' },
          'gern': { tr: 'severek, isteyerek', en: 'gladly, like to', de: 'gern' },
        },
      },
    ],
  },
  {
    id: 'schwimmen',
    word: 'schwimmen',
    tr: 'yüzmek',
    sentences: [
      {
        id: 'schwimmen-1',
        targetWord: 'schwimmen',
        german: 'Ich kann gut schwimmen.',
        germanWithBlank: 'Ich kann gut ___.',
        translationTR: 'İyi yüzebiliyorum.',
        translationEN: 'I can swim well.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'kann': { tr: 'yapabilmek (ben)', en: 'can', de: 'können' },
          'gut': { tr: 'iyi', en: 'well/good', de: 'gut' },
        },
      },
    ],
  },
  {
    id: 'die-schachtel',
    word: 'die Schachtel',
    sentences: [
      {
        id: 'schachtel-1',
        targetWord: 'Schachtel',
        german: 'Gib mir die Schachtel!',
        germanWithBlank: 'Gib mir die ___!',
        translationTR: 'Kutuyu ver bana!',
        translationEN: 'Give me the box!',
        glossary: {
          'gib': { tr: 'vermek (emir)', en: 'give (imperative)', de: 'geben' },
          'mir': { tr: 'bana (yönelme hali)', en: 'me (dative)', de: 'mir' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
        },
      },
    ],
  },
  {
    id: 'die-flasche',
    word: 'die Flasche',
    tr: 'şişe',
    sentences: [
      {
        id: 'flasche-1',
        targetWord: 'Flasche',
        german: 'Ich kaufe eine Flasche Wasser.',
        germanWithBlank: 'Ich kaufe eine ___ Wasser.',
        translationTR: 'Bir şişe su alıyorum.',
        translationEN: 'I buy a bottle of water.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'kaufe': { tr: 'satın almak (ben)', en: 'buy', de: 'kaufen' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
          'wasser': { tr: 'su', en: 'water', de: 'das Wasser' },
        },
      },
    ],
  },
  {
    id: 'die-dose',
    word: 'die Dose',
    tr: 'kutu / konserve',
    sentences: [
      {
        id: 'dose-1',
        targetWord: 'Dose',
        german: 'Ich kaufe eine Dose Tomaten.',
        germanWithBlank: 'Ich kaufe eine ___ Tomaten.',
        translationTR: 'Bir kutu domates alıyorum.',
        translationEN: 'I buy a can of tomatoes.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'kaufe': { tr: 'satın almak (ben)', en: 'buy', de: 'kaufen' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
          'tomaten': { tr: 'domatesler', en: 'tomatoes', de: 'die Tomate' },
        },
      },
    ],
  },
  {
    id: 'die-tüte',
    word: 'die Tüte',
    sentences: [
      {
        id: 'tüte-1',
        targetWord: 'Tüte',
        german: 'Brauchen Sie eine Tüte?',
        germanWithBlank: 'Brauchen Sie eine ___?',
        translationTR: 'Poşet ister misiniz?',
        translationEN: 'Do you need a bag?',
        glossary: {
          'brauchen': { tr: 'ihtiyaç duymak', en: 'need', de: 'brauchen' },
          'sie': { tr: 'siz (resmi hitap)', en: 'you (formal)', de: 'Sie' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
        },
      },
    ],
  },
  {
    id: 'das-kilogramm',
    word: 'das Kilogramm',
    sentences: [
      {
        id: 'kilogramm-1',
        targetWord: 'Kilogramm',
        german: 'Ich kaufe ein Kilogramm Tomaten.',
        germanWithBlank: 'Ich kaufe ein ___ Tomaten.',
        translationTR: 'Bir kilogram domates alıyorum.',
        translationEN: 'I buy one kilogram of tomatoes.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'kaufe': { tr: 'satın almak (ben)', en: 'buy', de: 'kaufen' },
          'ein': { tr: 'bir (yansız, miktar)', en: 'one', de: 'ein' },
          'tomaten': { tr: 'domatesler', en: 'tomatoes', de: 'die Tomate' },
        },
      },
    ],
  },
  {
    id: 'der-euro',
    word: 'der Euro',
    sentences: [
      {
        id: 'euro-1',
        targetWord: 'Euro',
        german: 'Das kostet fünf Euro.',
        germanWithBlank: 'Das kostet fünf ___.',
        translationTR: 'Bu beş Euro tutuyor.',
        translationEN: 'That costs five euros.',
        glossary: {
          'das': { tr: 'bu / o (yansız)', en: 'that/it', de: 'das' },
          'kostet': { tr: 'tutmak, mal olmak', en: 'costs', de: 'kosten' },
          'fünf': { tr: 'beş (sayı)', en: 'five', de: 'fünf' },
        },
      },
    ],
  },
  {
    id: 'der-cent',
    word: 'der Cent',
    sentences: [
      {
        id: 'cent-1',
        targetWord: 'Cent',
        german: 'Das kostet neunzig Cent.',
        germanWithBlank: 'Das kostet neunzig ___.',
        translationTR: 'Bu doksan sent tutuyor.',
        translationEN: 'That costs ninety cents.',
        glossary: {
          'das': { tr: 'bu / o (yansız)', en: 'that/it', de: 'das' },
          'kostet': { tr: 'tutmak, mal olmak', en: 'costs', de: 'kosten' },
          'neunzig': { tr: 'doksan (sayı)', en: 'ninety', de: 'neunzig' },
        },
      },
    ],
  },
  {
    id: 'die-kreditkarte',
    word: 'die Kreditkarte',
    tr: 'kredi kartı',
    sentences: [
      {
        id: 'kreditkarte-1',
        targetWord: 'Kreditkarte',
        german: 'Kann ich mit Kreditkarte zahlen?',
        germanWithBlank: 'Kann ich mit ___ zahlen?',
        translationTR: 'Kredi kartıyla ödeyebilir miyim?',
        translationEN: 'Can I pay by credit card?',
        glossary: {
          'kann': { tr: 'yapabilmek (ben)', en: 'can (I)', de: 'können' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'mit': { tr: 'ile, kullanarak', en: 'with/by', de: 'mit' },
          'zahlen': { tr: 'ödemek', en: 'to pay', de: 'zahlen' },
        },
      },
    ],
  },
  {
    id: 'die-öffnungszeit',
    word: 'die Öffnungszeit',
    sentences: [
      {
        id: 'öffnungszeit-1',
        targetWord: 'Öffnungszeiten',
        german: 'Was sind die Öffnungszeiten?',
        germanWithBlank: 'Was sind die ___?',
        translationTR: 'Açılış saatleri nelerdir?',
        translationEN: 'What are the opening hours?',
        glossary: {
          'was': { tr: 'ne', en: 'what', de: 'was' },
          'sind': { tr: 'olmak (çoğul)', en: 'are', de: 'sein' },
          'die': { tr: 'belirli artikel (çoğul)', en: 'the (plural)', de: 'die' },
        },
      },
    ],
  },
  {
    id: 'geschlossen',
    word: 'geschlossen',
    sentences: [
      {
        id: 'geschlossen-1',
        targetWord: 'geschlossen',
        german: 'Das Geschäft ist heute geschlossen.',
        germanWithBlank: 'Das Geschäft ist heute ___.',
        translationTR: 'Dükkan bugün kapalı.',
        translationEN: 'The shop is closed today.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'geschäft': { tr: 'dükkan, mağaza', en: 'shop/store', de: 'das Geschäft' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'heute': { tr: 'bugün', en: 'today', de: 'heute' },
        },
      },
    ],
  },
  {
    id: 'geöffnet',
    word: 'geöffnet',
    sentences: [
      {
        id: 'geöffnet-1',
        targetWord: 'geöffnet',
        german: 'Die Apotheke ist bis 20 Uhr geöffnet.',
        germanWithBlank: 'Die Apotheke ist bis 20 Uhr ___.',
        translationTR: 'Eczane saat 20:00\'ye kadar açık.',
        translationEN: 'The pharmacy is open until 8 p.m.',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'apotheke': { tr: 'eczane', en: 'pharmacy', de: 'die Apotheke' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'bis': { tr: 'kadar, ...e kadar', en: 'until/up to', de: 'bis' },
          'uhr': { tr: 'saat', en: 'o\'clock', de: 'die Uhr' },
        },
      },
    ],
  },
  {
    id: 'freundlich',
    word: 'freundlich',
    tr: 'nazik / güler yüzlü',
    sentences: [
      {
        id: 'freundlich-1',
        targetWord: 'freundlich',
        german: 'Die Mitarbeiter sind sehr freundlich.',
        germanWithBlank: 'Die Mitarbeiter sind sehr ___.',
        translationTR: 'Çalışanlar çok dostane.',
        translationEN: 'The staff are very friendly.',
        glossary: {
          'die': { tr: 'belirli artikel (çoğul)', en: 'the (plural)', de: 'die' },
          'mitarbeiter': { tr: 'çalışanlar, personel', en: 'employees/staff', de: 'der Mitarbeiter' },
          'sind': { tr: 'olmak (çoğul)', en: 'are', de: 'sein' },
          'sehr': { tr: 'çok', en: 'very', de: 'sehr' },
        },
      },
    ],
  },
  {
    id: 'möglich',
    word: 'möglich',
    tr: 'mümkün',
    sentences: [
      {
        id: 'möglich-1',
        targetWord: 'möglich',
        german: 'Ist das möglich?',
        germanWithBlank: 'Ist das ___?',
        translationTR: 'Bu mümkün mü?',
        translationEN: 'Is that possible?',
        glossary: {
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'das': { tr: 'bu / o (yansız)', en: 'that/it', de: 'das' },
        },
      },
    ],
  },
  {
    id: 'benutzen',
    word: 'benutzen',
    tr: 'kullanmak',
    sentences: [
      {
        id: 'benutzen-1',
        targetWord: 'benutzen',
        german: 'Darf ich dein Telefon benutzen?',
        germanWithBlank: 'Darf ich dein Telefon ___?',
        translationTR: 'Telefonunu kullanabilir miyim?',
        translationEN: 'May I use your phone?',
        glossary: {
          'darf': { tr: 'izin sahip olmak (ben)', en: 'may/am allowed to', de: 'dürfen' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'dein': { tr: 'senin (yansız/eril)', en: 'your', de: 'dein' },
          'telefon': { tr: 'telefon', en: 'phone', de: 'das Telefon' },
        },
      },
    ],
  },
  {
    id: 'dauern',
    word: 'dauern',
    tr: 'sürmek (zaman)',
    sentences: [
      {
        id: 'dauern-1',
        targetWord: 'dauert',
        german: 'Die Fahrt dauert eine Stunde.',
        germanWithBlank: 'Die Fahrt ___ eine Stunde.',
        translationTR: 'Yolculuk bir saat sürüyor.',
        translationEN: 'The journey takes one hour.',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'fahrt': { tr: 'yolculuk, sürüş', en: 'journey/ride', de: 'die Fahrt' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
          'stunde': { tr: 'saat (zaman birimi)', en: 'hour', de: 'die Stunde' },
        },
      },
    ],
  },
  {
    id: 'denken',
    word: 'denken',
    tr: 'düşünmek',
    sentences: [
      {
        id: 'denken-1',
        targetWord: 'denke',
        german: 'Ich denke, das ist eine gute Idee.',
        germanWithBlank: 'Ich ___, das ist eine gute Idee.',
        translationTR: 'Bunun iyi bir fikir olduğunu düşünüyorum.',
        translationEN: 'I think that is a good idea.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'das': { tr: 'bu / o (yansız)', en: 'that/it', de: 'das' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
          'gute': { tr: 'iyi (dişil)', en: 'good (feminine)', de: 'gut' },
          'idee': { tr: 'fikir', en: 'idea', de: 'die Idee' },
        },
      },
    ],
  },
  {
    id: 'erzählen',
    word: 'erzählen',
    tr: 'anlatmak',
    sentences: [
      {
        id: 'erzählen-1',
        targetWord: 'erzählt',
        german: 'Er erzählt eine Geschichte.',
        germanWithBlank: 'Er ___ eine Geschichte.',
        translationTR: 'Bir hikaye anlatıyor.',
        translationEN: 'He is telling a story.',
        glossary: {
          'er': { tr: 'o (erkek)', en: 'he', de: 'er' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
          'geschichte': { tr: 'hikaye, tarih', en: 'story/history', de: 'die Geschichte' },
        },
      },
    ],
  },
  {
    id: 'fernsehen',
    word: 'fernsehen',
    tr: 'televizyon (yayın)',
    sentences: [
      {
        id: 'fernsehen-1',
        targetWord: 'fern',
        german: 'Abends sehe ich gern fern.',
        germanWithBlank: 'Abends sehe ich gern ___.',
        translationTR: 'Akşamları televizyon izlemeyi severim.',
        translationEN: 'In the evenings I like to watch TV.',
        glossary: {
          'abends': { tr: 'akşamları', en: 'in the evenings', de: 'abends' },
          'sehe': { tr: 'görmek (ben)', en: 'see/watch', de: 'sehen' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'gern': { tr: 'severek, isteyerek', en: 'gladly, like to', de: 'gern' },
        },
      },
    ],
  },
  {
    id: 'feiern',
    word: 'feiern',
    tr: 'kutlamak',
    sentences: [
      {
        id: 'feiern-1',
        targetWord: 'feiern',
        german: 'Wir wollen Geburtstag feiern.',
        germanWithBlank: 'Wir wollen Geburtstag ___.',
        translationTR: 'Doğum gününü kutlamak istiyoruz.',
        translationEN: 'We want to celebrate a birthday.',
        glossary: {
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'wollen': { tr: 'istemek (biz)', en: 'want to', de: 'wollen' },
          'geburtstag': { tr: 'doğum günü', en: 'birthday', de: 'der Geburtstag' },
        },
      },
    ],
  },
  {
    id: 'frühstücken',
    word: 'frühstücken',
    tr: 'kahvaltı yapmak',
    sentences: [
      {
        id: 'frühstücken-1',
        targetWord: 'frühstücke',
        german: 'Ich frühstücke um sieben Uhr.',
        germanWithBlank: 'Ich ___ um sieben Uhr.',
        translationTR: 'Saat yedide kahvaltı yapıyorum.',
        translationEN: 'I have breakfast at seven o\'clock.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'um': { tr: 'saat ... -de (zaman)', en: 'at (time)', de: 'um' },
          'sieben': { tr: 'yedi (sayı)', en: 'seven', de: 'sieben' },
          'uhr': { tr: 'saat', en: 'o\'clock', de: 'die Uhr' },
        },
      },
    ],
  },
  {
    id: 'glauben',
    word: 'glauben',
    tr: 'inanmak / sanmak',
    sentences: [
      {
        id: 'glauben-1',
        targetWord: 'glaube',
        german: 'Ich glaube, er kommt bald.',
        germanWithBlank: 'Ich ___, er kommt bald.',
        translationTR: 'Sanırım yakında gelecek.',
        translationEN: 'I believe he will come soon.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'er': { tr: 'o (erkek)', en: 'he', de: 'er' },
          'kommt': { tr: 'gelmek', en: 'comes', de: 'kommen' },
          'bald': { tr: 'yakında', en: 'soon', de: 'bald' },
        },
      },
    ],
  },
  {
    id: 'heiraten',
    word: 'heiraten',
    tr: 'evlenmek',
    sentences: [
      {
        id: 'heiraten-1',
        targetWord: 'heiraten',
        german: 'Sie möchten im Sommer heiraten.',
        germanWithBlank: 'Sie möchten im Sommer ___.',
        translationTR: 'Yazın evlenmek istiyorlar.',
        translationEN: 'They want to get married in summer.',
        glossary: {
          'sie': { tr: 'onlar', en: 'they', de: 'sie' },
          'möchten': { tr: 'istemek (onlar)', en: 'want to/would like', de: 'möchten' },
          'im': { tr: '-de/-da (mevsimlerde)', en: 'in the (seasons)', de: 'im' },
          'sommer': { tr: 'yaz', en: 'summer', de: 'der Sommer' },
        },
      },
    ],
  },
  {
    id: 'hoffen',
    word: 'hoffen',
    tr: 'ummak / umut etmek',
    sentences: [
      {
        id: 'hoffen-1',
        targetWord: 'hoffe',
        german: 'Ich hoffe, das Wetter wird besser.',
        germanWithBlank: 'Ich ___, das Wetter wird besser.',
        translationTR: 'Havanın düzeleceğini umuyorum.',
        translationEN: 'I hope the weather will get better.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'das': { tr: 'bu / o (yansız)', en: 'the/that', de: 'das' },
          'wetter': { tr: 'hava (durumu)', en: 'weather', de: 'das Wetter' },
          'wird': { tr: 'olacak / olur', en: 'will become', de: 'werden' },
          'besser': { tr: 'daha iyi', en: 'better', de: 'gut' },
        },
      },
    ],
  },
  {
    id: 'kennenlernen',
    word: 'kennenlernen',
    tr: 'tanışmak',
    sentences: [
      {
        id: 'kennenlernen-1',
        targetWord: 'kennenlernen',
        german: 'Ich möchte neue Leute kennenlernen.',
        germanWithBlank: 'Ich möchte neue Leute ___.',
        translationTR: 'Yeni insanlar tanımak istiyorum.',
        translationEN: 'I would like to get to know new people.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'möchte': { tr: 'istemek / arzulamak (ben)', en: 'would like', de: 'mögen' },
          'neue': { tr: 'yeni (çoğul)', en: 'new', de: 'neu' },
          'leute': { tr: 'insanlar', en: 'people', de: 'die Leute' },
        },
      },
    ],
  },
  {
    id: 'klingeln',
    word: 'klingeln',
    tr: 'zili çalmak',
    sentences: [
      {
        id: 'klingeln-1',
        targetWord: 'klingelt',
        german: 'Es klingelt an der Tür.',
        germanWithBlank: 'Es ___ an der Tür.',
        translationTR: 'Kapı zili çalıyor.',
        translationEN: 'The doorbell is ringing.',
        glossary: {
          'es': { tr: 'o (kişisiz özne)', en: 'it', de: 'es' },
          'an': { tr: '-de/-da (yüzeyler için)', en: 'at/on', de: 'an' },
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'tür': { tr: 'kapı', en: 'door', de: 'die Tür' },
        },
      },
    ],
  },
  {
    id: 'mitkommen',
    word: 'mitkommen',
    sentences: [
      {
        id: 'mitkommen-1',
        targetWord: 'mit',
        german: 'Kommst du mit?',
        germanWithBlank: 'Kommst du ___?',
        translationTR: 'Beraber geliyor musun?',
        translationEN: 'Are you coming along?',
        glossary: {
          'kommst': { tr: 'gelmek (sen)', en: 'come (you)', de: 'kommen' },
          'du': { tr: 'sen', en: 'you', de: 'du' },
        },
      },
    ],
  },
  {
    id: 'passen',
    word: 'passen',
    tr: 'uymak / yakışmak',
    sentences: [
      {
        id: 'passen-1',
        targetWord: 'passt',
        german: 'Das Kleid passt mir gut.',
        germanWithBlank: 'Das Kleid ___ mir gut.',
        translationTR: 'Elbise bana iyi uyuyor.',
        translationEN: 'The dress fits me well.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'kleid': { tr: 'elbise', en: 'dress', de: 'das Kleid' },
          'mir': { tr: 'bana', en: 'me (dative)', de: 'ich' },
          'gut': { tr: 'iyi', en: 'well/good', de: 'gut' },
        },
      },
    ],
  },
  {
    id: 'planen',
    word: 'planen',
    tr: 'planlamak',
    sentences: [
      {
        id: 'planen-1',
        targetWord: 'planen',
        german: 'Wir planen eine Reise nach Italien.',
        germanWithBlank: 'Wir ___ eine Reise nach Italien.',
        translationTR: 'İtalya\'ya bir yolculuk planlıyoruz.',
        translationEN: 'We are planning a trip to Italy.',
        glossary: {
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
          'reise': { tr: 'yolculuk, seyahat', en: 'trip/journey', de: 'die Reise' },
          'nach': { tr: '-e doğru (ülkeler için)', en: 'to (countries)', de: 'nach' },
          'italien': { tr: 'İtalya', en: 'Italy', de: 'Italien' },
        },
      },
    ],
  },
  {
    id: 'regnen',
    word: 'regnen',
    tr: 'yağmur yağması',
    sentences: [
      {
        id: 'regnen-1',
        targetWord: 'regnet',
        german: 'Es regnet heute.',
        germanWithBlank: 'Es ___ heute.',
        translationTR: 'Bugün yağmur yağıyor.',
        translationEN: 'It is raining today.',
        glossary: {
          'es': { tr: 'o (kişisiz özne)', en: 'it', de: 'es' },
          'heute': { tr: 'bugün', en: 'today', de: 'heute' },
        },
      },
    ],
  },
  {
    id: 'reparieren',
    word: 'reparieren',
    tr: 'tamir etmek',
    sentences: [
      {
        id: 'reparieren-1',
        targetWord: 'reparieren',
        german: 'Kannst du das Fahrrad reparieren?',
        germanWithBlank: 'Kannst du das Fahrrad ___?',
        translationTR: 'Bisikleti tamir edebilir misin?',
        translationEN: 'Can you repair the bicycle?',
        glossary: {
          'kannst': { tr: '-ebilir misin', en: 'can you', de: 'können' },
          'du': { tr: 'sen', en: 'you', de: 'du' },
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'fahrrad': { tr: 'bisiklet', en: 'bicycle', de: 'das Fahrrad' },
        },
      },
    ],
  },
  {
    id: 'reisen',
    word: 'reisen',
    tr: 'seyahat etmek',
    sentences: [
      {
        id: 'reisen-1',
        targetWord: 'reise',
        german: 'Ich reise gern in andere Länder.',
        germanWithBlank: 'Ich ___ gern in andere Länder.',
        translationTR: 'Başka ülkelere seyahat etmeyi severim.',
        translationEN: 'I like travelling to other countries.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'gern': { tr: 'severek, isteyerek', en: 'gladly/like to', de: 'gern' },
          'in': { tr: '-e (yön)', en: 'to/into', de: 'in' },
          'andere': { tr: 'başka, diğer', en: 'other', de: 'ander-' },
          'länder': { tr: 'ülkeler', en: 'countries', de: 'das Land' },
        },
      },
    ],
  },
  {
    id: 'schauen',
    word: 'schauen',
    tr: 'bakmak',
    sentences: [
      {
        id: 'schauen-1',
        targetWord: 'schaue',
        german: 'Ich schaue aus dem Fenster.',
        germanWithBlank: 'Ich ___ aus dem Fenster.',
        translationTR: 'Pencereden bakıyorum.',
        translationEN: 'I am looking out of the window.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'aus': { tr: '-den/-dan', en: 'out of', de: 'aus' },
          'dem': { tr: 'belirli artikel (yansız/eril, datif)', en: 'the (dative)', de: 'dem' },
          'fenster': { tr: 'pencere', en: 'window', de: 'das Fenster' },
        },
      },
    ],
  },
  {
    id: 'schmecken',
    word: 'schmecken',
    sentences: [
      {
        id: 'schmecken-1',
        targetWord: 'schmeckt',
        german: 'Die Suppe schmeckt sehr gut.',
        germanWithBlank: 'Die Suppe ___ sehr gut.',
        translationTR: 'Çorba çok lezzetli.',
        translationEN: 'The soup tastes very good.',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'suppe': { tr: 'çorba', en: 'soup', de: 'die Suppe' },
          'sehr': { tr: 'çok', en: 'very', de: 'sehr' },
          'gut': { tr: 'iyi, lezzetli', en: 'good', de: 'gut' },
        },
      },
    ],
  },
  {
    id: 'stehen',
    word: 'stehen',
    sentences: [
      {
        id: 'stehen-1',
        targetWord: 'steht',
        german: 'Der Bus steht vor der Schule.',
        germanWithBlank: 'Der Bus ___ vor der Schule.',
        translationTR: 'Otobüs okulun önünde duruyor.',
        translationEN: 'The bus is standing in front of the school.',
        glossary: {
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'bus': { tr: 'otobüs', en: 'bus', de: 'der Bus' },
          'vor': { tr: 'önünde', en: 'in front of', de: 'vor' },
          'schule': { tr: 'okul', en: 'school', de: 'die Schule' },
        },
      },
    ],
  },
  {
    id: 'stimmen',
    word: 'stimmen',
    tr: 'doğru olmak',
    sentences: [
      {
        id: 'stimmen-1',
        targetWord: 'stimmt',
        german: 'Das stimmt nicht.',
        germanWithBlank: 'Das ___ nicht.',
        translationTR: 'Bu doğru değil.',
        translationEN: 'That is not correct.',
        glossary: {
          'das': { tr: 'bu / o (yansız)', en: 'that/it', de: 'das' },
          'nicht': { tr: 'değil', en: 'not', de: 'nicht' },
        },
      },
    ],
  },
  {
    id: 'tragen',
    word: 'tragen',
    sentences: [
      {
        id: 'tragen-1',
        targetWord: 'trägt',
        german: 'Er trägt eine Brille.',
        germanWithBlank: 'Er ___ eine Brille.',
        translationTR: 'Gözlük takıyor.',
        translationEN: 'He wears glasses.',
        glossary: {
          'er': { tr: 'o (erkek)', en: 'he', de: 'er' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
          'brille': { tr: 'gözlük', en: 'glasses', de: 'die Brille' },
        },
      },
    ],
  },
  {
    id: 'treffen',
    word: 'treffen (sich)',
    sentences: [
      {
        id: 'treffen-1',
        targetWord: 'treffen',
        german: 'Wir treffen uns um 18 Uhr.',
        germanWithBlank: 'Wir ___ uns um 18 Uhr.',
        translationTR: 'Saat 18\'de buluşuyoruz.',
        translationEN: 'We are meeting at 6 p.m.',
        glossary: {
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'uns': { tr: 'birbirimizi / bizi', en: 'ourselves/each other', de: 'wir' },
          'um': { tr: 'saat ... -de (zaman)', en: 'at (time)', de: 'um' },
          'uhr': { tr: 'saat', en: 'o\'clock', de: 'die Uhr' },
        },
      },
    ],
  },
  {
    id: 'üben',
    word: 'üben',
    sentences: [
      {
        id: 'üben-1',
        targetWord: 'üben',
        german: 'Ich muss mehr Deutsch üben.',
        germanWithBlank: 'Ich muss mehr Deutsch ___.',
        translationTR: 'Daha fazla Almanca pratik yapmam gerekiyor.',
        translationEN: 'I need to practise more German.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'muss': { tr: 'zorunda olmak (ben)', en: 'must/need to', de: 'müssen' },
          'mehr': { tr: 'daha fazla', en: 'more', de: 'mehr' },
          'deutsch': { tr: 'Almanca', en: 'German', de: 'Deutsch' },
        },
      },
    ],
  },
  {
    id: 'umsteigen',
    word: 'umsteigen',
    tr: 'aktarma yapmak',
    sentences: [
      {
        id: 'umsteigen-1',
        targetWord: 'um',
        german: 'Sie müssen in Frankfurt umsteigen.',
        germanWithBlank: 'Sie müssen in Frankfurt ___steigen.',
        translationTR: 'Frankfurt\'ta aktarma yapmanız gerekiyor.',
        translationEN: 'You need to change trains in Frankfurt.',
        glossary: {
          'sie': { tr: 'siz (resmi)', en: 'you (formal)', de: 'Sie' },
          'müssen': { tr: 'zorunda olmak', en: 'must/need to', de: 'müssen' },
          'in': { tr: '-de/-da', en: 'in', de: 'in' },
          'frankfurt': { tr: 'Frankfurt', en: 'Frankfurt', de: 'Frankfurt' },
        },
      },
    ],
  },
  {
    id: 'vergessen',
    word: 'vergessen',
    tr: 'unutmak',
    sentences: [
      {
        id: 'vergessen-1',
        targetWord: 'vergessen',
        german: 'Ich habe meinen Schlüssel vergessen.',
        germanWithBlank: 'Ich habe meinen Schlüssel ___.',
        translationTR: 'Anahtarımı unuttum.',
        translationEN: 'I have forgotten my key.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'habe': { tr: 'sahip olmak / geçmiş zaman yardımcısı (ben)', en: 'have', de: 'haben' },
          'meinen': { tr: 'benim (eril, akuzatif)', en: 'my (accusative)', de: 'mein' },
          'schlüssel': { tr: 'anahtar', en: 'key', de: 'der Schlüssel' },
        },
      },
    ],
  },
  {
    id: 'verlieren',
    word: 'verlieren',
    tr: 'kaybetmek',
    sentences: [
      {
        id: 'verlieren-1',
        targetWord: 'verloren',
        german: 'Ich habe meinen Pass verloren.',
        germanWithBlank: 'Ich habe meinen Pass ___.',
        translationTR: 'Pasaportumu kaybettim.',
        translationEN: 'I have lost my passport.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'habe': { tr: 'geçmiş zaman yardımcısı (ben)', en: 'have', de: 'haben' },
          'meinen': { tr: 'benim (eril, akuzatif)', en: 'my (accusative)', de: 'mein' },
          'pass': { tr: 'pasaport', en: 'passport', de: 'der Pass' },
        },
      },
    ],
  },
  {
    id: 'vorstellen',
    word: 'vorstellen (sich)',
    tr: 'tanıtmak / hayal etmek',
    sentences: [
      {
        id: 'vorstellen-1',
        targetWord: 'vor',
        german: 'Darf ich mich vorstellen? Ich heiße Maria.',
        germanWithBlank: 'Darf ich mich ___stellen? Ich heiße Maria.',
        translationTR: 'Kendimi tanıtabilir miyim? Benim adım Maria.',
        translationEN: 'May I introduce myself? My name is Maria.',
        glossary: {
          'darf': { tr: 'izin sahip olmak (ben)', en: 'may/am allowed to', de: 'dürfen' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'mich': { tr: 'kendimi / beni', en: 'myself/me', de: 'ich' },
          'heiße': { tr: 'adım ... (ben)', en: 'my name is', de: 'heißen' },
          'maria': { tr: 'Maria (özel isim)', en: 'Maria', de: 'Maria' },
        },
      },
    ],
  },
  {
    id: 'zeichnen',
    word: 'zeichnen',
    tr: 'çizmek / resim yapmak',
    sentences: [
      {
        id: 'zeichnen-1',
        targetWord: 'zeichnen',
        german: 'Ich lerne zeichnen.',
        germanWithBlank: 'Ich lerne ___.',
        translationTR: 'Resim yapmayı öğreniyorum.',
        translationEN: 'I am learning to draw.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'lerne': { tr: 'öğrenmek (ben)', en: 'learn', de: 'lernen' },
        },
      },
    ],
  },
  {
    id: 'aufwachen',
    word: 'aufwachen',
    tr: 'uyanmak',
    sentences: [
      {
        id: 'aufwachen-1',
        targetWord: 'aufgewacht',
        german: 'Ich bin heute früh aufgewacht.',
        germanWithBlank: 'Ich bin heute früh ___.',
        translationTR: 'Bugün erken uyandım.',
        translationEN: 'I woke up early today.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'wache': { tr: 'uyanmak (ben)', en: 'wake (I)', de: 'aufwachen' },
          'jeden': { tr: 'her (eril, akuzatif)', en: 'every', de: 'jeder' },
          'morgen': { tr: 'sabah', en: 'morning', de: 'der Morgen' },
          'um': { tr: 'saat ... -de (zaman)', en: 'at (time)', de: 'um' },
          'sechs': { tr: 'altı (sayı)', en: 'six', de: 'sechs' },
          'uhr': { tr: 'saat', en: 'o\'clock', de: 'die Uhr' },
        },
      },
    ],
  },
  {
    id: 'fotografieren',
    word: 'fotografieren',
    tr: 'fotoğraf çekmek',
    sentences: [
      {
        id: 'fotografieren-1',
        targetWord: 'fotografieren',
        german: 'Ich möchte die Stadt fotografieren.',
        germanWithBlank: 'Ich möchte die Stadt ___.',
        translationTR: 'Şehri fotoğraflamak istiyorum.',
        translationEN: 'I would like to photograph the city.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'möchte': { tr: 'istemek / arzulamak (ben)', en: 'would like', de: 'mögen' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'stadt': { tr: 'şehir', en: 'city', de: 'die Stadt' },
        },
      },
    ],
  },
  {
    id: 'trainieren',
    word: 'trainieren',
    sentences: [
      {
        id: 'trainieren-1',
        targetWord: 'trainiert',
        german: 'Er trainiert dreimal pro Woche.',
        germanWithBlank: 'Er ___ dreimal pro Woche.',
        translationTR: 'Haftada üç kez antrenman yapıyor.',
        translationEN: 'He trains three times a week.',
        glossary: {
          'er': { tr: 'o (erkek)', en: 'he', de: 'er' },
          'dreimal': { tr: 'üç kez', en: 'three times', de: 'dreimal' },
          'pro': { tr: 'başına, -de/-da', en: 'per', de: 'pro' },
          'woche': { tr: 'hafta', en: 'week', de: 'die Woche' },
        },
      },
    ],
  },
  {
    id: 'spazieren',
    word: 'spazieren',
    sentences: [
      {
        id: 'spazieren-extra-1',
        targetWord: 'spazieren',
        german: 'Wir gehen am Wochenende spazieren.',
        germanWithBlank: 'Wir gehen am Wochenende ___.',
        translationTR: 'Haftasonu yürüyüşe çıkıyoruz.',
        translationEN: 'We go for a walk at the weekend.',
        glossary: {
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'gehen': { tr: 'gitmek', en: 'go', de: 'gehen' },
          'am': { tr: '... -de (zaman için)', en: 'at the/on the', de: 'am' },
          'wochenende': { tr: 'haftasonu', en: 'weekend', de: 'das Wochenende' },
        },
      },
    ],
  },
  {
    id: 'sich-fühlen',
    word: 'sich fühlen',
    tr: 'hissetmek',
    sentences: [
      {
        id: 'sich-fühlen-1',
        targetWord: 'fühle',
        german: 'Ich fühle mich heute nicht gut.',
        germanWithBlank: 'Ich ___ mich heute nicht gut.',
        translationTR: 'Bugün kendimi iyi hissetmiyorum.',
        translationEN: 'I don\'t feel well today.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'mich': { tr: 'kendimi / beni', en: 'myself/me', de: 'ich' },
          'heute': { tr: 'bugün', en: 'today', de: 'heute' },
          'nicht': { tr: 'değil', en: 'not', de: 'nicht' },
          'gut': { tr: 'iyi', en: 'well/good', de: 'gut' },
        },
      },
    ],
  },
  {
    id: 'einschlafen',
    word: 'einschlafen',
    sentences: [
      {
        id: 'einschlafen-1',
        targetWord: 'einschlafen',
        german: 'Ich kann nicht einschlafen.',
        germanWithBlank: 'Ich kann nicht ___.',
        translationTR: 'Uyuyamıyorum.',
        translationEN: 'I can\'t fall asleep.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'kann': { tr: '-ebilmek (ben)', en: 'can', de: 'können' },
          'nicht': { tr: 'değil', en: 'not', de: 'nicht' },
        },
      },
    ],
  },
  {
    id: 'wiederholen',
    word: 'wiederholen',
    sentences: [
      {
        id: 'wiederholen-1',
        targetWord: 'wiederholen',
        german: 'Können Sie das bitte wiederholen?',
        germanWithBlank: 'Können Sie das bitte ___?',
        translationTR: 'Bunu tekrar edebilir misiniz?',
        translationEN: 'Can you please repeat that?',
        glossary: {
          'können': { tr: '-ebilmek', en: 'can', de: 'können' },
          'sie': { tr: 'siz (resmi)', en: 'you (formal)', de: 'Sie' },
          'das': { tr: 'bunu / onu (yansız)', en: 'that', de: 'das' },
          'bitte': { tr: 'lütfen', en: 'please', de: 'bitte' },
        },
      },
    ],
  },
  {
    id: 'die-ärztin',
    word: 'die Ärztin',
    sentences: [
      {
        id: 'ärztin-1',
        targetWord: 'Ärztin',
        german: 'Meine Ärztin ist sehr nett.',
        germanWithBlank: 'Meine ___ ist sehr nett.',
        translationTR: 'Doktorum çok nazik.',
        translationEN: 'My doctor is very nice.',
        glossary: {
          'meine': { tr: 'benim (dişil)', en: 'my (feminine)', de: 'mein' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'sehr': { tr: 'çok', en: 'very', de: 'sehr' },
          'nett': { tr: 'nazik, sevimli', en: 'nice', de: 'nett' },
        },
      },
    ],
  },
  {
    id: 'das-boot',
    word: 'das Boot',
    tr: 'bot / tekne',
    sentences: [
      {
        id: 'boot-1',
        targetWord: 'Boot',
        german: 'Wir fahren mit dem Boot.',
        germanWithBlank: 'Wir fahren mit dem ___.',
        translationTR: 'Tekneyle gidiyoruz.',
        translationEN: 'We travel by boat.',
        glossary: {
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'fahren': { tr: 'gitmek (araçla)', en: 'travel/go', de: 'fahren' },
          'mit': { tr: 'ile, -la/-le', en: 'with/by', de: 'mit' },
          'dem': { tr: 'belirli artikel (yansız/eril, datif)', en: 'the (dative)', de: 'dem' },
        },
      },
    ],
  },
  {
    id: 'die-disco',
    word: 'die Disco',
    sentences: [
      {
        id: 'disco-1',
        targetWord: 'Disco',
        german: 'Am Samstag gehen wir in die Disco.',
        germanWithBlank: 'Am Samstag gehen wir in die ___.',
        translationTR: 'Cumartesi disko\'ya gidiyoruz.',
        translationEN: 'On Saturday we go to the disco.',
        glossary: {
          'am': { tr: '... -de (gün için)', en: 'on (days)', de: 'am' },
          'samstag': { tr: 'cumartesi', en: 'Saturday', de: 'der Samstag' },
          'gehen': { tr: 'gitmek', en: 'go', de: 'gehen' },
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'in': { tr: '-e (yön)', en: 'to/into', de: 'in' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
        },
      },
    ],
  },
  {
    id: 'die-einladung',
    word: 'die Einladung',
    tr: 'davet',
    sentences: [
      {
        id: 'einladung-1',
        targetWord: 'Einladung',
        german: 'Danke für die Einladung!',
        germanWithBlank: 'Danke für die ___!',
        translationTR: 'Davet için teşekkürler!',
        translationEN: 'Thank you for the invitation!',
        glossary: {
          'danke': { tr: 'teşekkür ederim', en: 'thank you', de: 'danke' },
          'für': { tr: 'için', en: 'for', de: 'für' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
        },
      },
    ],
  },
  {
    id: 'die-firma',
    word: 'die Firma',
    tr: 'firma / şirket',
    sentences: [
      {
        id: 'firma-1',
        targetWord: 'Firma',
        german: 'Er arbeitet in einer großen Firma.',
        germanWithBlank: 'Er arbeitet in einer großen ___.',
        translationTR: 'Büyük bir şirkette çalışıyor.',
        translationEN: 'He works in a large company.',
        glossary: {
          'er': { tr: 'o (erkek)', en: 'he', de: 'er' },
          'arbeitet': { tr: 'çalışmak', en: 'works', de: 'arbeiten' },
          'in': { tr: '-de/-da', en: 'in', de: 'in' },
          'einer': { tr: 'bir (dişil, datif)', en: 'a/an (dative)', de: 'einer' },
          'großen': { tr: 'büyük (datif)', en: 'large/big', de: 'groß' },
        },
      },
    ],
  },
  {
    id: 'das-gespräch',
    word: 'das Gespräch',
    tr: 'görüşme / konuşma',
    sentences: [
      {
        id: 'gespräch-1',
        targetWord: 'Gespräch',
        german: 'Das Gespräch war sehr nett.',
        germanWithBlank: 'Das ___ war sehr nett.',
        translationTR: 'Konuşma çok güzeldi.',
        translationEN: 'The conversation was very nice.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'war': { tr: 'olmak (geçmiş)', en: 'was', de: 'sein' },
          'sehr': { tr: 'çok', en: 'very', de: 'sehr' },
          'nett': { tr: 'güzel, nazik', en: 'nice', de: 'nett' },
        },
      },
    ],
  },
  {
    id: 'das-glück',
    word: 'das Glück',
    tr: 'şans / mutluluk',
    sentences: [
      {
        id: 'glück-1',
        targetWord: 'Glück',
        german: 'Viel Glück!',
        germanWithBlank: 'Viel ___!',
        translationTR: 'Bol şans!',
        translationEN: 'Good luck!',
        glossary: {
          'viel': { tr: 'çok, bol', en: 'much/a lot of', de: 'viel' },
        },
      },
    ],
  },
  {
    id: 'das-hobby',
    word: 'das Hobby',
    tr: 'hobi',
    sentences: [
      {
        id: 'hobby-1',
        targetWord: 'Hobby',
        german: 'Was ist dein Hobby?',
        germanWithBlank: 'Was ist dein ___?',
        translationTR: 'Hobin nedir?',
        translationEN: 'What is your hobby?',
        glossary: {
          'was': { tr: 'ne / neler', en: 'what', de: 'was' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'dein': { tr: 'senin (yansız/eril)', en: 'your', de: 'dein' },
        },
      },
    ],
  },
  {
    id: 'die-information',
    word: 'die Information',
    tr: 'bilgi',
    sentences: [
      {
        id: 'information-1',
        targetWord: 'Information',
        german: 'Haben Sie eine Information für mich?',
        germanWithBlank: 'Haben Sie eine ___ für mich?',
        translationTR: 'Benim için bir bilginiz var mı?',
        translationEN: 'Do you have any information for me?',
        glossary: {
          'haben': { tr: 'sahip olmak', en: 'have', de: 'haben' },
          'sie': { tr: 'siz (resmi)', en: 'you (formal)', de: 'Sie' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
          'für': { tr: 'için', en: 'for', de: 'für' },
          'mich': { tr: 'beni / benim için', en: 'me', de: 'ich' },
        },
      },
    ],
  },
  {
    id: 'der-job',
    word: 'der Job',
    sentences: [
      {
        id: 'job-1',
        targetWord: 'Job',
        german: 'Ich suche einen neuen Job.',
        germanWithBlank: 'Ich suche einen neuen ___.',
        translationTR: 'Yeni bir iş arıyorum.',
        translationEN: 'I am looking for a new job.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'suche': { tr: 'aramak (ben)', en: 'look for', de: 'suchen' },
          'einen': { tr: 'bir (eril, akuzatif)', en: 'a/an (accusative)', de: 'ein' },
          'neuen': { tr: 'yeni (eril, akuzatif)', en: 'new', de: 'neu' },
        },
      },
    ],
  },
  {
    id: 'der-koffer',
    word: 'der Koffer',
    tr: 'valiz',
    sentences: [
      {
        id: 'koffer-1',
        targetWord: 'Koffer',
        german: 'Mein Koffer ist sehr schwer.',
        germanWithBlank: 'Mein ___ ist sehr schwer.',
        translationTR: 'Valizim çok ağır.',
        translationEN: 'My suitcase is very heavy.',
        glossary: {
          'mein': { tr: 'benim (eril/yansız)', en: 'my', de: 'mein' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'sehr': { tr: 'çok', en: 'very', de: 'sehr' },
          'schwer': { tr: 'ağır', en: 'heavy', de: 'schwer' },
        },
      },
    ],
  },
  {
    id: 'der-kunde',
    word: 'der Kunde',
    tr: 'müşteri',
    sentences: [
      {
        id: 'kunde-1',
        targetWord: 'Kunde',
        german: 'Der Kunde kauft viel ein.',
        germanWithBlank: 'Der ___ kauft viel ein.',
        translationTR: 'Müşteri çok alışveriş yapıyor.',
        translationEN: 'The customer buys a lot.',
        glossary: {
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'kauft': { tr: 'satın almak', en: 'buys', de: 'kaufen' },
          'viel': { tr: 'çok', en: 'a lot/much', de: 'viel' },
          'ein': { tr: 'alışveriş (einkaufen parçalanmış)', en: 'shopping (separable verb part)', de: 'einkaufen' },
        },
      },
    ],
  },
  {
    id: 'die-lebensmittel',
    word: 'die Lebensmittel',
    tr: 'gıda maddeleri',
    sentences: [
      {
        id: 'lebensmittel-1',
        targetWord: 'Lebensmittel',
        german: 'Ich kaufe Lebensmittel im Supermarkt.',
        germanWithBlank: 'Ich kaufe ___ im Supermarkt.',
        translationTR: 'Süpermarketten gıda alıyorum.',
        translationEN: 'I buy food at the supermarket.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'kaufe': { tr: 'satın almak (ben)', en: 'buy', de: 'kaufen' },
          'im': { tr: '-de/-da (yerde)', en: 'in the', de: 'im' },
          'supermarkt': { tr: 'süpermarket', en: 'supermarket', de: 'der Supermarkt' },
        },
      },
    ],
  },
  {
    id: 'die-meinung',
    word: 'die Meinung',
    tr: 'fikir / görüş',
    sentences: [
      {
        id: 'meinung-1',
        targetWord: 'Meinung',
        german: 'Was ist deine Meinung?',
        germanWithBlank: 'Was ist deine ___?',
        translationTR: 'Senin görüşün nedir?',
        translationEN: 'What is your opinion?',
        glossary: {
          'was': { tr: 'ne / neler', en: 'what', de: 'was' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'deine': { tr: 'senin (dişil)', en: 'your (feminine)', de: 'dein' },
        },
      },
    ],
  },
  {
    id: 'der-mittag',
    word: 'der Mittag',
    sentences: [
      {
        id: 'mittag-1',
        targetWord: 'Mittag',
        german: 'Ich esse zu Mittag.',
        germanWithBlank: 'Ich esse zu ___.',
        translationTR: 'Öğle yemeği yiyorum.',
        translationEN: 'I am having lunch.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'esse': { tr: 'yemek (ben)', en: 'eat', de: 'essen' },
          'zu': { tr: '-e (yemek zamanları için)', en: 'for/at', de: 'zu' },
        },
      },
    ],
  },
  {
    id: 'der-nachmittag',
    word: 'der Nachmittag',
    sentences: [
      {
        id: 'nachmittag-1',
        targetWord: 'Nachmittag',
        german: 'Am Nachmittag trinken wir Kaffee.',
        germanWithBlank: 'Am ___ trinken wir Kaffee.',
        translationTR: 'Öğleden sonra kahve içiyoruz.',
        translationEN: 'In the afternoon we drink coffee.',
        glossary: {
          'am': { tr: '... -de (zaman için)', en: 'in the', de: 'am' },
          'trinken': { tr: 'içmek', en: 'drink', de: 'trinken' },
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'kaffee': { tr: 'kahve', en: 'coffee', de: 'der Kaffee' },
        },
      },
    ],
  },
  {
    id: 'die-natur',
    word: 'die Natur',
    tr: 'doğa',
    sentences: [
      {
        id: 'natur-1',
        targetWord: 'Natur',
        german: 'Ich liebe die Natur.',
        germanWithBlank: 'Ich liebe die ___.',
        translationTR: 'Doğayı seviyorum.',
        translationEN: 'I love nature.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'liebe': { tr: 'sevmek / aşk (ben)', en: 'love', de: 'lieben' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
        },
      },
    ],
  },
  {
    id: 'der-ort',
    word: 'der Ort',
    tr: 'yer / mahal',
    sentences: [
      {
        id: 'ort-1',
        targetWord: 'Ort',
        german: 'Dieser Ort ist sehr schön.',
        germanWithBlank: 'Dieser ___ ist sehr schön.',
        translationTR: 'Bu yer çok güzel.',
        translationEN: 'This place is very beautiful.',
        glossary: {
          'dieser': { tr: 'bu (eril)', en: 'this (masculine)', de: 'dieser' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'sehr': { tr: 'çok', en: 'very', de: 'sehr' },
          'schön': { tr: 'güzel', en: 'beautiful', de: 'schön' },
        },
      },
    ],
  },
  {
    id: 'das-paar',
    word: 'das Paar',
    tr: 'çift',
    sentences: [
      {
        id: 'paar-1',
        targetWord: 'Paar',
        german: 'Das Paar macht Urlaub in Italien.',
        germanWithBlank: 'Das ___ macht Urlaub in Italien.',
        translationTR: 'Çift İtalya\'da tatil yapıyor.',
        translationEN: 'The couple is on holiday in Italy.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'macht': { tr: 'yapmak', en: 'makes/does', de: 'machen' },
          'urlaub': { tr: 'tatil', en: 'holiday/vacation', de: 'der Urlaub' },
          'in': { tr: '-de/-da', en: 'in', de: 'in' },
          'italien': { tr: 'İtalya', en: 'Italy', de: 'Italien' },
        },
      },
    ],
  },
  {
    id: 'das-papier',
    word: 'das Papier',
    tr: 'kağıt',
    sentences: [
      {
        id: 'papier-1',
        targetWord: 'Papier',
        german: 'Haben Sie ein Blatt Papier?',
        germanWithBlank: 'Haben Sie ein Blatt ___?',
        translationTR: 'Bir kağıt var mı?',
        translationEN: 'Do you have a sheet of paper?',
        glossary: {
          'haben': { tr: 'sahip olmak', en: 'have', de: 'haben' },
          'sie': { tr: 'siz (resmi)', en: 'you (formal)', de: 'Sie' },
          'ein': { tr: 'bir (yansız belirtisiz)', en: 'a/an (neuter)', de: 'ein' },
          'blatt': { tr: 'yaprak, kağıt yaprağı', en: 'sheet/leaf', de: 'das Blatt' },
        },
      },
    ],
  },
  {
    id: 'die-person',
    word: 'die Person',
    tr: 'kişi',
    sentences: [
      {
        id: 'person-1',
        targetWord: 'Person',
        german: 'Ich bin eine ruhige Person.',
        germanWithBlank: 'Ich bin eine ruhige ___.',
        translationTR: 'Ben sakin bir insanım.',
        translationEN: 'I am a calm person.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'bin': { tr: 'olmak (ben)', en: 'am', de: 'sein' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
          'ruhige': { tr: 'sakin (dişil)', en: 'calm/quiet', de: 'ruhig' },
        },
      },
    ],
  },
  {
    id: 'die-polizei',
    word: 'die Polizei',
    tr: 'polis',
    sentences: [
      {
        id: 'polizei-1',
        targetWord: 'Polizei',
        german: 'Ich rufe die Polizei.',
        germanWithBlank: 'Ich rufe die ___.',
        translationTR: 'Polisi arıyorum.',
        translationEN: 'I am calling the police.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'rufe': { tr: 'aramak / çağırmak (ben)', en: 'call', de: 'rufen' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
        },
      },
    ],
  },
  {
    id: 'das-radio',
    word: 'das Radio',
    tr: 'radyo',
    sentences: [
      {
        id: 'radio-1',
        targetWord: 'Radio',
        german: 'Ich höre Radio im Auto.',
        germanWithBlank: 'Ich höre ___ im Auto.',
        translationTR: 'Arabada radyo dinliyorum.',
        translationEN: 'I listen to the radio in the car.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'höre': { tr: 'dinlemek / duymak (ben)', en: 'listen/hear', de: 'hören' },
          'im': { tr: '-de/-da (yerde)', en: 'in the', de: 'im' },
          'auto': { tr: 'araba', en: 'car', de: 'das Auto' },
        },
      },
    ],
  },
  {
    id: 'die-reparatur',
    word: 'die Reparatur',
    tr: 'tamir / onarım',
    sentences: [
      {
        id: 'reparatur-1',
        targetWord: 'Reparatur',
        german: 'Die Reparatur kostet viel Geld.',
        germanWithBlank: 'Die ___ kostet viel Geld.',
        translationTR: 'Tamir çok para tutuyor.',
        translationEN: 'The repair costs a lot of money.',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'kostet': { tr: 'maliyeti olmak', en: 'costs', de: 'kosten' },
          'viel': { tr: 'çok', en: 'a lot of', de: 'viel' },
          'geld': { tr: 'para', en: 'money', de: 'das Geld' },
        },
      },
    ],
  },
  {
    id: 'das-schiff',
    word: 'das Schiff',
    tr: 'gemi',
    sentences: [
      {
        id: 'schiff-1',
        targetWord: 'Schiff',
        german: 'Das Schiff fährt nach Hamburg.',
        germanWithBlank: 'Das ___ fährt nach Hamburg.',
        translationTR: 'Gemi Hamburg\'a gidiyor.',
        translationEN: 'The ship is going to Hamburg.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'fährt': { tr: 'gitmek (araçla, o/o/o)', en: 'goes/travels', de: 'fahren' },
          'nach': { tr: '-e doğru (şehirler için)', en: 'to (cities)', de: 'nach' },
          'hamburg': { tr: 'Hamburg', en: 'Hamburg', de: 'Hamburg' },
        },
      },
    ],
  },
  {
    id: 'die-seife',
    word: 'die Seife',
    sentences: [
      {
        id: 'seife-1',
        targetWord: 'Seife',
        german: 'Wo ist die Seife?',
        germanWithBlank: 'Wo ist die ___?',
        translationTR: 'Sabun nerede?',
        translationEN: 'Where is the soap?',
        glossary: {
          'wo': { tr: 'nerede', en: 'where', de: 'wo' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
        },
      },
    ],
  },
  {
    id: 'die-straßenbahn',
    word: 'die Straßenbahn',
    sentences: [
      {
        id: 'straßenbahn-1',
        targetWord: 'Straßenbahn',
        german: 'Ich fahre mit der Straßenbahn.',
        germanWithBlank: 'Ich fahre mit der ___.',
        translationTR: 'Tramvayla gidiyorum.',
        translationEN: 'I travel by tram.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'fahre': { tr: 'gitmek (araçla, ben)', en: 'travel/go', de: 'fahren' },
          'mit': { tr: 'ile, -la/-le', en: 'with/by', de: 'mit' },
          'der': { tr: 'belirli artikel (dişil, datif)', en: 'the (dative)', de: 'der' },
        },
      },
    ],
  },
  {
    id: 'die-suppe',
    word: 'die Suppe',
    sentences: [
      {
        id: 'suppe-1',
        targetWord: 'Suppe',
        german: 'Die Suppe ist heiß.',
        germanWithBlank: 'Die ___ ist heiß.',
        translationTR: 'Çorba sıcak.',
        translationEN: 'The soup is hot.',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'heiß': { tr: 'sıcak', en: 'hot', de: 'heiß' },
        },
      },
    ],
  },
  {
    id: 'die-tour',
    word: 'die Tour',
    sentences: [
      {
        id: 'tour-1',
        targetWord: 'Tour',
        german: 'Wir machen eine Tour durch die Stadt.',
        germanWithBlank: 'Wir machen eine ___ durch die Stadt.',
        translationTR: 'Şehir turu yapıyoruz.',
        translationEN: 'We are taking a tour of the city.',
        glossary: {
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'machen': { tr: 'yapmak', en: 'make/do', de: 'machen' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
          'durch': { tr: 'boyunca, içinden', en: 'through', de: 'durch' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'stadt': { tr: 'şehir', en: 'city', de: 'die Stadt' },
        },
      },
    ],
  },
  {
    id: 'der-verein',
    word: 'der Verein',
    tr: 'dernek / kulüp',
    sentences: [
      {
        id: 'verein-1',
        targetWord: 'Verein',
        german: 'Ich bin in einem Sportverein.',
        germanWithBlank: 'Ich bin in einem Sport___.',
        translationTR: 'Bir spor kulübündeyim.',
        translationEN: 'I am in a sports club.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'bin': { tr: 'olmak (ben)', en: 'am', de: 'sein' },
          'in': { tr: '-de/-da', en: 'in', de: 'in' },
          'einem': { tr: 'bir (eril/yansız, datif)', en: 'a/an (dative)', de: 'ein' },
          'sport': { tr: 'spor', en: 'sport', de: 'der Sport' },
        },
      },
    ],
  },
  {
    id: 'die-verspätung',
    word: 'die Verspätung',
    tr: 'gecikme / rötar',
    sentences: [
      {
        id: 'verspätung-1',
        targetWord: 'Verspätung',
        german: 'Der Zug hat Verspätung.',
        germanWithBlank: 'Der Zug hat ___.',
        translationTR: 'Tren gecikiyor.',
        translationEN: 'The train is delayed.',
        glossary: {
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'zug': { tr: 'tren', en: 'train', de: 'der Zug' },
          'hat': { tr: 'sahip olmak', en: 'has', de: 'haben' },
        },
      },
    ],
  },
  {
    id: 'die-tasche',
    word: 'die Tasche',
    tr: 'çanta / cep',
    sentences: [
      {
        id: 'tasche-1',
        targetWord: 'Tasche',
        german: 'Meine Tasche ist sehr schwer.',
        germanWithBlank: 'Meine ___ ist sehr schwer.',
        translationTR: 'Çantam çok ağır.',
        translationEN: 'My bag is very heavy.',
        glossary: {
          'meine': { tr: 'benim (dişil)', en: 'my (feminine)', de: 'mein' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'sehr': { tr: 'çok', en: 'very', de: 'sehr' },
          'schwer': { tr: 'ağır', en: 'heavy', de: 'schwer' },
        },
      },
    ],
  },
  {
    id: 'die-zahl',
    word: 'die Zahl',
    tr: 'sayı / rakam',
    sentences: [
      {
        id: 'zahl-1',
        targetWord: 'Zahl',
        german: 'Welche Zahl ist richtig?',
        germanWithBlank: 'Welche ___ ist richtig?',
        translationTR: 'Hangi sayı doğru?',
        translationEN: 'Which number is correct?',
        glossary: {
          'welche': { tr: 'hangi (dişil)', en: 'which (feminine)', de: 'welcher' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'richtig': { tr: 'doğru', en: 'correct/right', de: 'richtig' },
        },
      },
    ],
  },
  {
    id: 'die-wand',
    word: 'die Wand',
    tr: 'duvar',
    sentences: [
      {
        id: 'wand-1',
        targetWord: 'Wand',
        german: 'Das Bild hängt an der Wand.',
        germanWithBlank: 'Das Bild hängt an der ___.',
        translationTR: 'Resim duvarda asılıyor.',
        translationEN: 'The picture is hanging on the wall.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'bild': { tr: 'resim, fotoğraf', en: 'picture', de: 'das Bild' },
          'hängt': { tr: 'asılı olmak', en: 'is hanging', de: 'hängen' },
          'an': { tr: '-de/-da (yüzey)', en: 'on/at', de: 'an' },
          'der': { tr: 'belirli artikel (dişil, datif)', en: 'the (dative)', de: 'der' },
        },
      },
    ],
  },
  {
    id: 'das-essen',
    word: 'das Essen',
    tr: 'yemek',
    sentences: [
      {
        id: 'essen-n-1',
        targetWord: 'Essen',
        german: 'Das Essen im Restaurant war lecker.',
        germanWithBlank: 'Das ___ im Restaurant war lecker.',
        translationTR: 'Restoranda yemek lezzetliydi.',
        translationEN: 'The food in the restaurant was delicious.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'im': { tr: '-de/-da (yerde)', en: 'in the', de: 'im' },
          'restaurant': { tr: 'restoran', en: 'restaurant', de: 'das Restaurant' },
          'war': { tr: 'olmak (geçmiş)', en: 'was', de: 'sein' },
          'lecker': { tr: 'lezzetli', en: 'delicious', de: 'lecker' },
        },
      },
    ],
  },
  {
    id: 'die-badewanne',
    word: 'die Badewanne',
    tr: 'banyo küveti',
    sentences: [
      {
        id: 'badewanne-1',
        targetWord: 'Badewanne',
        german: 'Ich nehme ein Bad in der Badewanne.',
        germanWithBlank: 'Ich nehme ein Bad in der ___.',
        translationTR: 'Küvette banyo yapıyorum.',
        translationEN: 'I am taking a bath in the bathtub.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'nehme': { tr: 'almak (ben)', en: 'take', de: 'nehmen' },
          'ein': { tr: 'bir (yansız belirtisiz)', en: 'a/an (neuter)', de: 'ein' },
          'bad': { tr: 'banyo', en: 'bath', de: 'das Bad' },
          'in': { tr: '-de/-da', en: 'in', de: 'in' },
          'der': { tr: 'belirli artikel (dişil, datif)', en: 'the (dative)', de: 'der' },
        },
      },
    ],
  },
  {
    id: 'der-student',
    word: 'der Student',
    sentences: [
      {
        id: 'student-1',
        targetWord: 'Student',
        german: 'Er ist Student an der Universität.',
        germanWithBlank: 'Er ist ___ an der Universität.',
        translationTR: 'Üniversitede öğrenci.',
        translationEN: 'He is a student at the university.',
        glossary: {
          'er': { tr: 'o (erkek)', en: 'he', de: 'er' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'an': { tr: '-de/-da (kurumlarda)', en: 'at', de: 'an' },
          'der': { tr: 'belirli artikel (dişil, datif)', en: 'the (dative)', de: 'der' },
          'universität': { tr: 'üniversite', en: 'university', de: 'die Universität' },
        },
      },
    ],
  },
  {
    id: 'die-universität',
    word: 'die Universität',
    tr: 'üniversite',
    sentences: [
      {
        id: 'universität-1',
        targetWord: 'Universität',
        german: 'Sie studiert an der Universität.',
        germanWithBlank: 'Sie studiert an der ___.',
        translationTR: 'Üniversitede okuyor.',
        translationEN: 'She studies at the university.',
        glossary: {
          'sie': { tr: 'o (kadın)', en: 'she', de: 'sie' },
          'studiert': { tr: 'okumak / üniversitede okumak', en: 'studies', de: 'studieren' },
          'an': { tr: '-de/-da (kurumlarda)', en: 'at', de: 'an' },
          'der': { tr: 'belirli artikel (dişil, datif)', en: 'the (dative)', de: 'der' },
        },
      },
    ],
  },
  {
    id: 'studieren',
    word: 'studieren',
    tr: 'üniversite okumak',
    sentences: [
      {
        id: 'studieren-1',
        targetWord: 'studiert',
        german: 'Er studiert Medizin.',
        germanWithBlank: 'Er ___ Medizin.',
        translationTR: 'Tıp okuyor.',
        translationEN: 'He is studying medicine.',
        glossary: {
          'er': { tr: 'o (erkek)', en: 'he', de: 'er' },
          'medizin': { tr: 'tıp', en: 'medicine', de: 'die Medizin' },
        },
      },
    ],
  },
  {
    id: 'der-vorname',
    word: 'der Vorname',
    sentences: [
      {
        id: 'vorname-1',
        targetWord: 'Vorname',
        german: 'Was ist Ihr Vorname?',
        germanWithBlank: 'Was ist Ihr ___?',
        translationTR: 'Adınız nedir?',
        translationEN: 'What is your first name?',
        glossary: {
          'was': { tr: 'ne / neler', en: 'what', de: 'was' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'ihr': { tr: 'sizin (resmi)', en: 'your (formal)', de: 'Ihr' },
        },
      },
    ],
  },
  {
    id: 'der-nachname',
    word: 'der Nachname',
    sentences: [
      {
        id: 'nachname-1',
        targetWord: 'Nachname',
        german: 'Was ist Ihr Nachname?',
        germanWithBlank: 'Was ist Ihr ___?',
        translationTR: 'Soyadınız nedir?',
        translationEN: 'What is your surname?',
        glossary: {
          'was': { tr: 'ne / neler', en: 'what', de: 'was' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'ihr': { tr: 'sizin (resmi)', en: 'your (formal)', de: 'Ihr' },
        },
      },
    ],
  },
  {
    id: 'die-nationalität',
    word: 'die Nationalität',
    sentences: [
      {
        id: 'nationalität-1',
        targetWord: 'Nationalität',
        german: 'Was ist Ihre Nationalität?',
        germanWithBlank: 'Was ist Ihre ___?',
        translationTR: 'Milliyetiniz nedir?',
        translationEN: 'What is your nationality?',
        glossary: {
          'was': { tr: 'ne / neler', en: 'what', de: 'was' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'ihre': { tr: 'sizin (resmi, dişil)', en: 'your (formal, feminine)', de: 'Ihr' },
        },
      },
    ],
  },
  {
    id: 'die-muttersprache',
    word: 'die Muttersprache',
    sentences: [
      {
        id: 'muttersprache-1',
        targetWord: 'Muttersprache',
        german: 'Meine Muttersprache ist Türkisch.',
        germanWithBlank: 'Meine ___ ist Türkisch.',
        translationTR: 'Anadilim Türkçe.',
        translationEN: 'My mother tongue is Turkish.',
        glossary: {
          'meine': { tr: 'benim (dişil)', en: 'my (feminine)', de: 'mein' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'türkisch': { tr: 'Türkçe', en: 'Turkish', de: 'Türkisch' },
        },
      },
    ],
  },
  {
    id: 'das-ausland',
    word: 'das Ausland',
    tr: 'yurt dışı',
    sentences: [
      {
        id: 'ausland-1',
        targetWord: 'Ausland',
        german: 'Ich war noch nie im Ausland.',
        germanWithBlank: 'Ich war noch nie im ___.',
        translationTR: 'Hiç yurt dışına gitmedim.',
        translationEN: 'I have never been abroad.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'war': { tr: 'olmak / gitmek (geçmiş, ben)', en: 'was/have been', de: 'sein' },
          'noch': { tr: 'henüz, hâlâ', en: 'yet/still', de: 'noch' },
          'nie': { tr: 'hiç', en: 'never', de: 'nie' },
          'im': { tr: '-de/-da (yerde)', en: 'in the', de: 'im' },
        },
      },
    ],
  },
  {
    id: 'die-hauptstadt',
    word: 'die Hauptstadt',
    tr: 'başkent',
    sentences: [
      {
        id: 'hauptstadt-1',
        targetWord: 'Hauptstadt',
        german: 'Berlin ist die Hauptstadt von Deutschland.',
        germanWithBlank: 'Berlin ist die ___ von Deutschland.',
        translationTR: 'Berlin, Almanya\'nın başkenti.',
        translationEN: 'Berlin is the capital of Germany.',
        glossary: {
          'berlin': { tr: 'Berlin', en: 'Berlin', de: 'Berlin' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'von': { tr: '-nın/-nin', en: 'of', de: 'von' },
          'deutschland': { tr: 'Almanya', en: 'Germany', de: 'Deutschland' },
        },
      },
    ],
  },
  {
    id: 'die-ampel',
    word: 'die Ampel',
    tr: 'trafik ışığı',
    sentences: [
      {
        id: 'ampel-1',
        targetWord: 'Ampel',
        german: 'Bitte warten Sie an der Ampel.',
        germanWithBlank: 'Bitte warten Sie an der ___.',
        translationTR: 'Lütfen trafik ışığında bekleyin.',
        translationEN: 'Please wait at the traffic light.',
        glossary: {
          'bitte': { tr: 'lütfen', en: 'please', de: 'bitte' },
          'warten': { tr: 'beklemek', en: 'wait', de: 'warten' },
          'sie': { tr: 'siz (resmi, emir)', en: 'you (formal, imperative)', de: 'Sie' },
          'an': { tr: '-de/-da (yüzey)', en: 'at', de: 'an' },
          'der': { tr: 'belirli artikel (dişil, datif)', en: 'the (dative)', de: 'der' },
        },
      },
    ],
  },
  {
    id: 'die-brille',
    word: 'die Brille',
    tr: 'gözlük',
    sentences: [
      {
        id: 'brille-1',
        targetWord: 'Brille',
        german: 'Er trägt eine Brille.',
        germanWithBlank: 'Er trägt eine ___.',
        translationTR: 'Gözlük takıyor.',
        translationEN: 'He wears glasses.',
        glossary: {
          'er': { tr: 'o (erkek)', en: 'he', de: 'er' },
          'trägt': { tr: 'giymek / takmak', en: 'wears', de: 'tragen' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
        },
      },
    ],
  },
  {
    id: 'der-regenschirm',
    word: 'der Regenschirm',
    sentences: [
      {
        id: 'regenschirm-1',
        targetWord: 'Regenschirm',
        german: 'Nimm deinen Regenschirm mit!',
        germanWithBlank: 'Nimm deinen ___ mit!',
        translationTR: 'Şemsiyeni al!',
        translationEN: 'Take your umbrella with you!',
        glossary: {
          'nimm': { tr: 'almak (emir, sen)', en: 'take (imperative)', de: 'nehmen' },
          'deinen': { tr: 'senin (eril, akuzatif)', en: 'your (accusative)', de: 'dein' },
          'mit': { tr: 'yanına, birlikte', en: 'with you/along', de: 'mit' },
        },
      },
    ],
  },
  {
    id: 'das-gymnasium',
    word: 'das Gymnasium',
    sentences: [
      {
        id: 'gymnasium-1',
        targetWord: 'Gymnasium',
        german: 'Ich gehe aufs Gymnasium.',
        germanWithBlank: 'Ich gehe aufs ___.',
        translationTR: 'Liseye gidiyorum.',
        translationEN: 'I go to grammar school.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'gehe': { tr: 'gitmek (ben)', en: 'go', de: 'gehen' },
          'aufs': { tr: '... üzerine / -e (kısaltılmış)', en: 'to the (contraction)', de: 'auf das' },
        },
      },
    ],
  },
  {
    id: 'die-klasse',
    word: 'die Klasse',
    tr: 'sınıf',
    sentences: [
      {
        id: 'klasse-1',
        targetWord: 'Klasse',
        german: 'Ich bin in der fünften Klasse.',
        germanWithBlank: 'Ich bin in der fünften ___.',
        translationTR: 'Beşinci sınıftayım.',
        translationEN: 'I am in the fifth class.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'bin': { tr: 'olmak (ben)', en: 'am', de: 'sein' },
          'in': { tr: '-de/-da', en: 'in', de: 'in' },
          'der': { tr: 'belirli artikel (dişil, datif)', en: 'the (dative)', de: 'der' },
          'fünften': { tr: 'beşinci (sıra sayısı)', en: 'fifth', de: 'fünfte' },
        },
      },
    ],
  },
  {
    id: 'der-kugelschreiber',
    word: 'der Kugelschreiber',
    tr: 'tükenmez kalem',
    sentences: [
      {
        id: 'kugelschreiber-1',
        targetWord: 'Kugelschreiber',
        german: 'Haben Sie einen Kugelschreiber?',
        germanWithBlank: 'Haben Sie einen ___?',
        translationTR: 'Tükenmez kaleminiz var mı?',
        translationEN: 'Do you have a pen?',
        glossary: {
          'haben': { tr: 'sahip olmak', en: 'have', de: 'haben' },
          'sie': { tr: 'siz (resmi)', en: 'you (formal)', de: 'Sie' },
          'einen': { tr: 'bir (eril, akuzatif)', en: 'a/an (accusative)', de: 'ein' },
        },
      },
    ],
  },
  {
    id: 'das-heft',
    word: 'das Heft',
    tr: 'defter',
    sentences: [
      {
        id: 'heft-1',
        targetWord: 'Heft',
        german: 'Ich schreibe in mein Heft.',
        germanWithBlank: 'Ich schreibe in mein ___.',
        translationTR: 'Defterime yazıyorum.',
        translationEN: 'I am writing in my exercise book.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'schreibe': { tr: 'yazmak (ben)', en: 'write', de: 'schreiben' },
          'in': { tr: '-de/-da', en: 'in', de: 'in' },
          'mein': { tr: 'benim (yansız/eril)', en: 'my', de: 'mein' },
        },
      },
    ],
  },
  {
    id: 'der-bleistift',
    word: 'der Bleistift',
    tr: 'kurşun kalem',
    sentences: [
      {
        id: 'bleistift-1',
        targetWord: 'Bleistift',
        german: 'Ich zeichne mit einem Bleistift.',
        germanWithBlank: 'Ich zeichne mit einem ___.',
        translationTR: 'Kalemle çizim yapıyorum.',
        translationEN: 'I am drawing with a pencil.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'zeichne': { tr: 'çizmek (ben)', en: 'draw', de: 'zeichnen' },
          'mit': { tr: 'ile, -la/-le', en: 'with', de: 'mit' },
          'einem': { tr: 'bir (eril/yansız, datif)', en: 'a/an (dative)', de: 'ein' },
        },
      },
    ],
  },
  {
    id: 'der-ausflug',
    word: 'der Ausflug',
    tr: 'gezi / piknik',
    sentences: [
      {
        id: 'ausflug-1',
        targetWord: 'Ausflug',
        german: 'Wir machen einen Ausflug ins Grüne.',
        germanWithBlank: 'Wir machen einen ___ ins Grüne.',
        translationTR: 'Yeşilliğe bir gezi yapıyoruz.',
        translationEN: 'We are going on a trip to the countryside.',
        glossary: {
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'machen': { tr: 'yapmak', en: 'make/do', de: 'machen' },
          'einen': { tr: 'bir (eril, akuzatif)', en: 'a/an (accusative)', de: 'ein' },
          'ins': { tr: '-e (kısaltılmış)', en: 'into the', de: 'ins' },
          'grüne': { tr: 'yeşillik, doğa', en: 'green/countryside', de: 'das Grüne' },
        },
      },
    ],
  },
  {
    id: 'das-museum',
    word: 'das Museum',
    tr: 'müze',
    sentences: [
      {
        id: 'museum-1',
        targetWord: 'Museum',
        german: 'Wir besuchen das Museum.',
        germanWithBlank: 'Wir besuchen das ___.',
        translationTR: 'Müzeyi ziyaret ediyoruz.',
        translationEN: 'We are visiting the museum.',
        glossary: {
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'besuchen': { tr: 'ziyaret etmek', en: 'visit', de: 'besuchen' },
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
        },
      },
    ],
  },
  {
    id: 'das-theater',
    word: 'das Theater',
    tr: 'tiyatro',
    sentences: [
      {
        id: 'theater-1',
        targetWord: 'Theater',
        german: 'Heute Abend gehen wir ins Theater.',
        germanWithBlank: 'Heute Abend gehen wir ins ___.',
        translationTR: 'Bu akşam tiyatroya gidiyoruz.',
        translationEN: 'This evening we are going to the theatre.',
        glossary: {
          'heute': { tr: 'bugün', en: 'today', de: 'heute' },
          'abend': { tr: 'akşam', en: 'evening', de: 'der Abend' },
          'gehen': { tr: 'gitmek', en: 'go', de: 'gehen' },
          'wir': { tr: 'biz', en: 'we', de: 'wir' },
          'ins': { tr: '-e (kısaltılmış)', en: 'into the', de: 'ins' },
        },
      },
    ],
  },
  {
    id: 'der-zoo',
    word: 'der Zoo',
    tr: 'hayvanat bahçesi',
    sentences: [
      {
        id: 'zoo-1',
        targetWord: 'Zoo',
        german: 'Die Kinder gehen gern in den Zoo.',
        germanWithBlank: 'Die Kinder gehen gern in den ___.',
        translationTR: 'Çocuklar hayvanat bahçesine gitmeyi seviyor.',
        translationEN: 'The children like going to the zoo.',
        glossary: {
          'die': { tr: 'belirli artikel (çoğul)', en: 'the (plural)', de: 'die' },
          'kinder': { tr: 'çocuklar', en: 'children', de: 'das Kind' },
          'gehen': { tr: 'gitmek', en: 'go', de: 'gehen' },
          'gern': { tr: 'severek', en: 'gladly/like to', de: 'gern' },
          'in': { tr: '-e (yön)', en: 'to/into', de: 'in' },
          'den': { tr: 'belirli artikel (eril, akuzatif)', en: 'the (accusative)', de: 'den' },
        },
      },
    ],
  },
  {
    id: 'falsch',
    word: 'falsch',
    tr: 'yanlış',
    sentences: [
      {
        id: 'falsch-1',
        targetWord: 'falsch',
        german: 'Die Antwort ist falsch.',
        germanWithBlank: 'Die Antwort ist ___.',
        translationTR: 'Cevap yanlış.',
        translationEN: 'The answer is wrong.',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'antwort': { tr: 'cevap', en: 'answer', de: 'die Antwort' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
        },
      },
    ],
  },
  {
    id: 'frisch',
    word: 'frisch',
    tr: 'taze',
    sentences: [
      {
        id: 'frisch-1',
        targetWord: 'frisch',
        german: 'Das Brot ist frisch.',
        germanWithBlank: 'Das Brot ist ___.',
        translationTR: 'Ekmek taze.',
        translationEN: 'The bread is fresh.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'brot': { tr: 'ekmek', en: 'bread', de: 'das Brot' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
        },
      },
    ],
  },
  {
    id: 'hungrig',
    word: 'hungrig',
    tr: 'aç',
    sentences: [
      {
        id: 'hungrig-1',
        targetWord: 'hungrig',
        german: 'Ich bin sehr hungrig.',
        germanWithBlank: 'Ich bin sehr ___.',
        translationTR: 'Çok açım.',
        translationEN: 'I am very hungry.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'bin': { tr: 'olmak (ben)', en: 'am', de: 'sein' },
          'sehr': { tr: 'çok', en: 'very', de: 'sehr' },
        },
      },
    ],
  },
  {
    id: 'offen',
    word: 'offen',
    tr: 'açık / samimi',
    sentences: [
      {
        id: 'offen-1',
        targetWord: 'offen',
        german: 'Das Fenster ist offen.',
        germanWithBlank: 'Das Fenster ist ___.',
        translationTR: 'Pencere açık.',
        translationEN: 'The window is open.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'fenster': { tr: 'pencere', en: 'window', de: 'das Fenster' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
        },
      },
    ],
  },
  {
    id: 'schlecht',
    word: 'schlecht',
    tr: 'kötü',
    sentences: [
      {
        id: 'schlecht-1',
        targetWord: 'schlecht',
        german: 'Das Wetter ist schlecht.',
        germanWithBlank: 'Das Wetter ist ___.',
        translationTR: 'Hava kötü.',
        translationEN: 'The weather is bad.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'wetter': { tr: 'hava (durumu)', en: 'weather', de: 'das Wetter' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
        },
      },
    ],
  },
  {
    id: 'stark',
    word: 'stark',
    tr: 'güçlü / sert',
    sentences: [
      {
        id: 'stark-1',
        targetWord: 'stark',
        german: 'Er ist sehr stark.',
        germanWithBlank: 'Er ist sehr ___.',
        translationTR: 'Çok güçlü.',
        translationEN: 'He is very strong.',
        glossary: {
          'er': { tr: 'o (erkek)', en: 'he', de: 'er' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'sehr': { tr: 'çok', en: 'very', de: 'sehr' },
        },
      },
    ],
  },
  {
    id: 'traurig',
    word: 'traurig',
    tr: 'üzgün',
    sentences: [
      {
        id: 'traurig-1',
        targetWord: 'traurig',
        german: 'Sie ist heute traurig.',
        germanWithBlank: 'Sie ist heute ___.',
        translationTR: 'Bugün üzgün.',
        translationEN: 'She is sad today.',
        glossary: {
          'sie': { tr: 'o (kadın)', en: 'she', de: 'sie' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'heute': { tr: 'bugün', en: 'today', de: 'heute' },
        },
      },
    ],
  },
  {
    id: 'wirklich',
    word: 'wirklich',
    tr: 'gerçekten',
    sentences: [
      {
        id: 'wirklich-1',
        targetWord: 'wirklich',
        german: 'Das ist wirklich schön.',
        germanWithBlank: 'Das ist ___ schön.',
        translationTR: 'Bu gerçekten güzel.',
        translationEN: 'That is really beautiful.',
        glossary: {
          'das': { tr: 'bu / o (yansız)', en: 'that/it', de: 'das' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'schön': { tr: 'güzel', en: 'beautiful', de: 'schön' },
        },
      },
    ],
  },
  {
    id: 'natürlich',
    word: 'natürlich',
    tr: 'doğal olarak / tabii ki',
    sentences: [
      {
        id: 'natürlich-1',
        targetWord: 'Natürlich',
        german: 'Natürlich helfe ich dir!',
        germanWithBlank: '___ helfe ich dir!',
        translationTR: 'Tabii ki sana yardım ediyorum!',
        translationEN: 'Of course I will help you!',
        glossary: {
          'helfe': { tr: 'yardım etmek (ben)', en: 'help', de: 'helfen' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'dir': { tr: 'sana', en: 'you (dative)', de: 'du' },
        },
      },
    ],
  },
  {
    id: 'leider',
    word: 'leider',
    tr: 'maalesef',
    sentences: [
      {
        id: 'leider-1',
        targetWord: 'leider',
        german: 'Ich kann leider nicht kommen.',
        germanWithBlank: 'Ich kann ___ nicht kommen.',
        translationTR: 'Maalesef gelemiyorum.',
        translationEN: 'Unfortunately I cannot come.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'kann': { tr: '-ebilmek (ben)', en: 'can', de: 'können' },
          'nicht': { tr: 'değil', en: 'not', de: 'nicht' },
          'kommen': { tr: 'gelmek', en: 'come', de: 'kommen' },
        },
      },
    ],
  },
  {
    id: 'meistens',
    word: 'meistens',
    sentences: [
      {
        id: 'meistens-1',
        targetWord: 'meistens',
        german: 'Ich esse meistens zu Hause.',
        germanWithBlank: 'Ich esse ___ zu Hause.',
        translationTR: 'Çoğunlukla evde yiyorum.',
        translationEN: 'I usually eat at home.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'esse': { tr: 'yemek (ben)', en: 'eat', de: 'essen' },
          'zu': { tr: '-de (evde)', en: 'at', de: 'zu' },
          'hause': { tr: 'ev (yerde)', en: 'home', de: 'das Haus' },
        },
      },
    ],
  },
  {
    id: 'deshalb',
    word: 'deshalb',
    tr: 'bu yüzden',
    sentences: [
      {
        id: 'deshalb-1',
        targetWord: 'deshalb',
        german: 'Es regnet, deshalb bleibe ich zu Hause.',
        germanWithBlank: 'Es regnet, ___ bleibe ich zu Hause.',
        translationTR: 'Yağmur yağıyor, bu yüzden evde kalıyorum.',
        translationEN: 'It is raining, therefore I am staying at home.',
        glossary: {
          'es': { tr: 'o (kişisiz özne)', en: 'it', de: 'es' },
          'regnet': { tr: 'yağmur yağmak', en: 'rains', de: 'regnen' },
          'bleibe': { tr: 'kalmak (ben)', en: 'stay', de: 'bleiben' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'zu': { tr: '-de (evde)', en: 'at', de: 'zu' },
          'hause': { tr: 'ev (yerde)', en: 'home', de: 'das Haus' },
        },
      },
    ],
  },
  {
    id: 'dort',
    word: 'dort',
    tr: 'orada',
    sentences: [
      {
        id: 'dort-1',
        targetWord: 'dort',
        german: 'Meine Familie wohnt dort.',
        germanWithBlank: 'Meine Familie wohnt ___.',
        translationTR: 'Ailem orada oturuyor.',
        translationEN: 'My family lives there.',
        glossary: {
          'meine': { tr: 'benim (dişil)', en: 'my (feminine)', de: 'mein' },
          'familie': { tr: 'aile', en: 'family', de: 'die Familie' },
          'wohnt': { tr: 'yaşamak', en: 'lives', de: 'wohnen' },
        },
      },
    ],
  },
  {
    id: 'eigentlich',
    word: 'eigentlich',
    tr: 'aslında',
    sentences: [
      {
        id: 'eigentlich-1',
        targetWord: 'eigentlich',
        german: 'Eigentlich wollte ich heute schlafen.',
        germanWithBlank: '___ wollte ich heute schlafen.',
        translationTR: 'Aslında bugün uyumak istiyordum.',
        translationEN: 'Actually I wanted to sleep today.',
        glossary: {
          'wollte': { tr: 'istemek (geçmiş, ben)', en: 'wanted', de: 'wollen' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'heute': { tr: 'bugün', en: 'today', de: 'heute' },
          'schlafen': { tr: 'uyumak', en: 'sleep', de: 'schlafen' },
        },
      },
    ],
  },
  {
    id: 'erst',
    word: 'erst',
    tr: 'sadece / henüz / ilk önce',
    sentences: [
      {
        id: 'erst-1',
        targetWord: 'erst',
        german: 'Ich komme erst um 20 Uhr.',
        germanWithBlank: 'Ich komme ___ um 20 Uhr.',
        translationTR: 'Ancak saat 20\'de geliyorum.',
        translationEN: 'I won\'t be there until 8 p.m.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'komme': { tr: 'gelmek (ben)', en: 'come', de: 'kommen' },
          'um': { tr: 'saat ... -de (zaman)', en: 'at (time)', de: 'um' },
          'uhr': { tr: 'saat', en: 'o\'clock', de: 'die Uhr' },
        },
      },
    ],
  },
  {
    id: 'genug',
    word: 'genug',
    tr: 'yeterli',
    sentences: [
      {
        id: 'genug-1',
        targetWord: 'genug',
        german: 'Ich habe genug gegessen.',
        germanWithBlank: 'Ich habe ___ gegessen.',
        translationTR: 'Yeterince yedim.',
        translationEN: 'I have eaten enough.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'habe': { tr: 'geçmiş zaman yardımcısı (ben)', en: 'have', de: 'haben' },
          'gegessen': { tr: 'yemek (geçmiş zaman)', en: 'eaten', de: 'essen' },
        },
      },
    ],
  },
  {
    id: 'gerade',
    word: 'gerade',
    tr: 'düz / şu an / henüz',
    sentences: [
      {
        id: 'gerade-1',
        targetWord: 'gerade',
        german: 'Ich esse gerade Mittag.',
        germanWithBlank: 'Ich esse ___ Mittag.',
        translationTR: 'Şu an öğle yemeği yiyorum.',
        translationEN: 'I am just having lunch.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'esse': { tr: 'yemek (ben)', en: 'eat', de: 'essen' },
          'mittag': { tr: 'öğle', en: 'midday/lunch', de: 'der Mittag' },
        },
      },
    ],
  },
  {
    id: 'sondern',
    word: 'sondern',
    sentences: [
      {
        id: 'sondern-1',
        targetWord: 'sondern',
        german: 'Nicht Kaffee, sondern Tee.',
        germanWithBlank: 'Nicht Kaffee, ___ Tee.',
        translationTR: 'Kahve değil, çay.',
        translationEN: 'Not coffee, but tea.',
        glossary: {
          'nicht': { tr: 'değil', en: 'not', de: 'nicht' },
          'kaffee': { tr: 'kahve', en: 'coffee', de: 'der Kaffee' },
          'tee': { tr: 'çay', en: 'tea', de: 'der Tee' },
        },
      },
    ],
  },
  {
    id: 'ungefähr',
    word: 'ungefähr',
    tr: 'yaklaşık',
    sentences: [
      {
        id: 'ungefähr-1',
        targetWord: 'ungefähr',
        german: 'Es dauert ungefähr eine Stunde.',
        germanWithBlank: 'Es dauert ___ eine Stunde.',
        translationTR: 'Yaklaşık bir saat sürüyor.',
        translationEN: 'It takes approximately one hour.',
        glossary: {
          'es': { tr: 'o (kişisiz özne)', en: 'it', de: 'es' },
          'dauert': { tr: 'sürmek', en: 'takes/lasts', de: 'dauern' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
          'stunde': { tr: 'saat (zaman birimi)', en: 'hour', de: 'die Stunde' },
        },
      },
    ],
  },
  {
    id: 'nochmal',
    word: 'nochmal',
    sentences: [
      {
        id: 'nochmal-1',
        targetWord: 'nochmal',
        german: 'Kannst du das nochmal sagen?',
        germanWithBlank: 'Kannst du das ___ sagen?',
        translationTR: 'Bunu bir daha söyleyebilir misin?',
        translationEN: 'Can you say that again?',
        glossary: {
          'kannst': { tr: '-ebilir misin', en: 'can you', de: 'können' },
          'du': { tr: 'sen', en: 'you', de: 'du' },
          'das': { tr: 'bunu / onu (yansız)', en: 'that', de: 'das' },
          'sagen': { tr: 'söylemek', en: 'say', de: 'sagen' },
        },
      },
    ],
  },
  {
    id: 'zuerst',
    word: 'zuerst',
    tr: 'ilk önce / ilk olarak',
    sentences: [
      {
        id: 'zuerst-1',
        targetWord: 'Zuerst',
        german: 'Zuerst lese ich die E-Mails.',
        germanWithBlank: '___ lese ich die E-Mails.',
        translationTR: 'Önce e-postaları okuyorum.',
        translationEN: 'First I read the e-mails.',
        glossary: {
          'lese': { tr: 'okumak (ben)', en: 'read', de: 'lesen' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'die': { tr: 'belirli artikel (çoğul)', en: 'the (plural)', de: 'die' },
          'e-mails': { tr: 'e-postalar', en: 'e-mails', de: 'die E-Mail' },
        },
      },
    ],
  },
  {
    id: 'danach',
    word: 'danach',
    tr: 'ondan sonra',
    sentences: [
      {
        id: 'danach-1',
        targetWord: 'danach',
        german: 'Ich esse, danach gehe ich spazieren.',
        germanWithBlank: 'Ich esse, ___ gehe ich spazieren.',
        translationTR: 'Yiyorum, sonra yürüyüşe çıkıyorum.',
        translationEN: 'I eat, afterwards I go for a walk.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'esse': { tr: 'yemek (ben)', en: 'eat', de: 'essen' },
          'gehe': { tr: 'gitmek (ben)', en: 'go', de: 'gehen' },
          'spazieren': { tr: 'yürüyüş yapmak', en: 'walk', de: 'spazieren gehen' },
        },
      },
    ],
  },
  {
    id: 'trotzdem',
    word: 'trotzdem',
    sentences: [
      {
        id: 'trotzdem-1',
        targetWord: 'trotzdem',
        german: 'Es regnet, ich gehe trotzdem spazieren.',
        germanWithBlank: 'Es regnet, ich gehe ___ spazieren.',
        translationTR: 'Yağmur yağıyor, yine de yürüyüşe çıkıyorum.',
        translationEN: 'It is raining, but I go for a walk anyway.',
        glossary: {
          'es': { tr: 'o (kişisiz özne)', en: 'it', de: 'es' },
          'regnet': { tr: 'yağmur yağmak', en: 'rains', de: 'regnen' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'gehe': { tr: 'gitmek (ben)', en: 'go', de: 'gehen' },
          'spazieren': { tr: 'yürüyüş yapmak', en: 'walk', de: 'spazieren gehen' },
        },
      },
    ],
  },
  {
    id: 'nämlich',
    word: 'nämlich',
    tr: 'yani / çünkü',
    sentences: [
      {
        id: 'nämlich-1',
        targetWord: 'nämlich',
        german: 'Ich komme nicht, ich bin nämlich krank.',
        germanWithBlank: 'Ich komme nicht, ich bin ___ krank.',
        translationTR: 'Gelmiyorum, zira hastayım.',
        translationEN: 'I am not coming, you see I am ill.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'komme': { tr: 'gelmek (ben)', en: 'come', de: 'kommen' },
          'nicht': { tr: 'değil', en: 'not', de: 'nicht' },
          'bin': { tr: 'olmak (ben)', en: 'am', de: 'sein' },
          'krank': { tr: 'hasta', en: 'ill/sick', de: 'krank' },
        },
      },
    ],
  },
  {
    id: 'überall',
    word: 'überall',
    tr: 'her yer / her yerde',
    sentences: [
      {
        id: 'überall-1',
        targetWord: 'überall',
        german: 'Ich suche überall meinen Schlüssel.',
        germanWithBlank: 'Ich suche ___ meinen Schlüssel.',
        translationTR: 'Her yerde anahtarımı arıyorum.',
        translationEN: 'I am looking for my key everywhere.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'suche': { tr: 'aramak (ben)', en: 'look for', de: 'suchen' },
          'meinen': { tr: 'benim (eril, akuzatif)', en: 'my (accusative)', de: 'mein' },
          'schlüssel': { tr: 'anahtar', en: 'key', de: 'der Schlüssel' },
        },
      },
    ],
  },
  {
    id: 'zu-hause',
    word: 'zu Hause',
    sentences: [
      {
        id: 'zu-hause-1',
        targetWord: 'Hause',
        german: 'Ich bleibe heute zu Hause.',
        germanWithBlank: 'Ich bleibe heute zu ___.',
        translationTR: 'Bugün evde kalıyorum.',
        translationEN: 'I am staying at home today.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'bleibe': { tr: 'kalmak (ben)', en: 'stay', de: 'bleiben' },
          'heute': { tr: 'bugün', en: 'today', de: 'heute' },
          'zu': { tr: '-de (evde)', en: 'at', de: 'zu' },
        },
      },
    ],
  },
  {
    id: 'orange',
    word: 'orange',
    tr: 'portakal',
    sentences: [
      {
        id: 'orange-adj-1',
        targetWord: 'orange',
        german: 'Das T-Shirt ist orange.',
        germanWithBlank: 'Das T-Shirt ist ___.',
        translationTR: 'Tişört turuncu.',
        translationEN: 'The T-shirt is orange.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          't-shirt': { tr: 'tişört', en: 'T-shirt', de: 'das T-Shirt' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
        },
      },
    ],
  },
  {
    id: 'lila',
    word: 'lila',
    sentences: [
      {
        id: 'lila-1',
        targetWord: 'lila',
        german: 'Die Blume ist lila.',
        germanWithBlank: 'Die Blume ist ___.',
        translationTR: 'Çiçek mor.',
        translationEN: 'The flower is purple.',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'blume': { tr: 'çiçek', en: 'flower', de: 'die Blume' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
        },
      },
    ],
  },
  {
    id: 'das-t-shirt',
    word: 'das T-Shirt',
    sentences: [
      {
        id: 't-shirt-1',
        targetWord: 'T-Shirt',
        german: 'Ich trage ein rotes T-Shirt.',
        germanWithBlank: 'Ich trage ein rotes ___.',
        translationTR: 'Kırmızı bir tişört giyiyorum.',
        translationEN: 'I am wearing a red T-shirt.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'trage': { tr: 'giymek / taşımak (ben)', en: 'wear', de: 'tragen' },
          'ein': { tr: 'bir (yansız belirtisiz)', en: 'a/an (neuter)', de: 'ein' },
          'rotes': { tr: 'kırmızı (yansız)', en: 'red (neuter)', de: 'rot' },
        },
      },
    ],
  },
  {
    id: 'die-socke',
    word: 'die Socke',
    sentences: [
      {
        id: 'socke-1',
        targetWord: 'Socken',
        german: 'Ich brauche neue Socken.',
        germanWithBlank: 'Ich brauche neue ___.',
        translationTR: 'Yeni çoraplara ihtiyacım var.',
        translationEN: 'I need new socks.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'brauche': { tr: 'ihtiyacı olmak (ben)', en: 'need', de: 'brauchen' },
          'neue': { tr: 'yeni (çoğul)', en: 'new (plural)', de: 'neu' },
        },
      },
    ],
  },
  {
    id: 'der-pullover',
    word: 'der Pullover',
    tr: 'kazak',
    sentences: [
      {
        id: 'pullover-1',
        targetWord: 'Pullover',
        german: 'Im Winter trage ich einen Pullover.',
        germanWithBlank: 'Im Winter trage ich einen ___.',
        translationTR: 'Kışın kazak giyiyorum.',
        translationEN: 'In winter I wear a sweater.',
        glossary: {
          'im': { tr: '-de/-da (mevsimlerde)', en: 'in (seasons)', de: 'im' },
          'winter': { tr: 'kış', en: 'winter', de: 'der Winter' },
          'trage': { tr: 'giymek (ben)', en: 'wear', de: 'tragen' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'einen': { tr: 'bir (eril, akuzatif)', en: 'a/an (accusative)', de: 'ein' },
        },
      },
    ],
  },
  {
    id: 'die-mütze',
    word: 'die Mütze',
    sentences: [
      {
        id: 'mütze-1',
        targetWord: 'Mütze',
        german: 'Es ist kalt, zieh eine Mütze an!',
        germanWithBlank: 'Es ist kalt, zieh eine ___ an!',
        translationTR: 'Soğuk, bere tak!',
        translationEN: 'It is cold, put a hat on!',
        glossary: {
          'es': { tr: 'o (kişisiz özne)', en: 'it', de: 'es' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'kalt': { tr: 'soğuk', en: 'cold', de: 'kalt' },
          'zieh': { tr: 'giymek (emir)', en: 'put on (imperative)', de: 'anziehen' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
          'an': { tr: 'giymek (ayrılabilir önek)', en: 'on (separable prefix)', de: 'an' },
        },
      },
    ],
  },
  {
    id: 'der-handschuh',
    word: 'der Handschuh',
    sentences: [
      {
        id: 'handschuh-1',
        targetWord: 'Handschuhe',
        german: 'Im Winter brauche ich Handschuhe.',
        germanWithBlank: 'Im Winter brauche ich ___.',
        translationTR: 'Kışın eldivene ihtiyacım var.',
        translationEN: 'In winter I need gloves.',
        glossary: {
          'im': { tr: '-de/-da (mevsimlerde)', en: 'in (seasons)', de: 'im' },
          'winter': { tr: 'kış', en: 'winter', de: 'der Winter' },
          'brauche': { tr: 'ihtiyacı olmak (ben)', en: 'need', de: 'brauchen' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
        },
      },
    ],
  },
  {
    id: 'die-vorspeise',
    word: 'die Vorspeise',
    sentences: [
      {
        id: 'vorspeise-1',
        targetWord: 'Vorspeise',
        german: 'Als Vorspeise nehme ich die Suppe.',
        germanWithBlank: 'Als ___ nehme ich die Suppe.',
        translationTR: 'Başlangıç olarak çorba alıyorum.',
        translationEN: 'As a starter I will have the soup.',
        glossary: {
          'als': { tr: 'olarak', en: 'as', de: 'als' },
          'nehme': { tr: 'almak (ben)', en: 'take/have', de: 'nehmen' },
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'suppe': { tr: 'çorba', en: 'soup', de: 'die Suppe' },
        },
      },
    ],
  },
  {
    id: 'das-hauptgericht',
    word: 'das Hauptgericht',
    sentences: [
      {
        id: 'hauptgericht-1',
        targetWord: 'Hauptgericht',
        german: 'Was ist das Hauptgericht?',
        germanWithBlank: 'Was ist das ___?',
        translationTR: 'Ana yemek nedir?',
        translationEN: 'What is the main course?',
        glossary: {
          'was': { tr: 'ne / neler', en: 'what', de: 'was' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
        },
      },
    ],
  },
  {
    id: 'das-getränk',
    word: 'das Getränk',
    tr: 'içecek',
    sentences: [
      {
        id: 'getränk-1',
        targetWord: 'Getränk',
        german: 'Was möchten Sie als Getränk?',
        germanWithBlank: 'Was möchten Sie als ___?',
        translationTR: 'İçecek olarak ne istersiniz?',
        translationEN: 'What would you like as a drink?',
        glossary: {
          'was': { tr: 'ne / neler', en: 'what', de: 'was' },
          'möchten': { tr: 'istemek (siz/onlar)', en: 'would like', de: 'möchten' },
          'sie': { tr: 'siz (resmi)', en: 'you (formal)', de: 'Sie' },
          'als': { tr: 'olarak', en: 'as', de: 'als' },
        },
      },
    ],
  },
  {
    id: 'der-schnee',
    word: 'der Schnee',
    tr: 'kar',
    sentences: [
      {
        id: 'schnee-1',
        targetWord: 'Schnee',
        german: 'Im Winter gibt es viel Schnee.',
        germanWithBlank: 'Im Winter gibt es viel ___.',
        translationTR: 'Kışın çok kar yağıyor.',
        translationEN: 'In winter there is a lot of snow.',
        glossary: {
          'im': { tr: '-de/-da (mevsimlerde)', en: 'in (seasons)', de: 'im' },
          'winter': { tr: 'kış', en: 'winter', de: 'der Winter' },
          'gibt': { tr: 'var olmak / vermek', en: 'there is', de: 'geben' },
          'es': { tr: 'var (gibt es ile)', en: 'it (there is)', de: 'es' },
          'viel': { tr: 'çok', en: 'a lot of', de: 'viel' },
        },
      },
    ],
  },
  {
    id: 'die-sonne',
    word: 'die Sonne',
    tr: 'güneş',
    sentences: [
      {
        id: 'sonne-1',
        targetWord: 'Sonne',
        german: 'Die Sonne scheint heute.',
        germanWithBlank: 'Die ___ scheint heute.',
        translationTR: 'Bugün güneş parlıyor.',
        translationEN: 'The sun is shining today.',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'scheint': { tr: 'parlamak / görünmek', en: 'shines', de: 'scheinen' },
          'heute': { tr: 'bugün', en: 'today', de: 'heute' },
        },
      },
    ],
  },
  {
    id: 'der-regen',
    word: 'der Regen',
    tr: 'yağmur',
    sentences: [
      {
        id: 'regen-1',
        targetWord: 'Regen',
        german: 'Der Regen hört nicht auf.',
        germanWithBlank: 'Der ___ hört nicht auf.',
        translationTR: 'Yağmur durmuyor.',
        translationEN: 'The rain does not stop.',
        glossary: {
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'hört': { tr: 'durmak / dinlemek', en: 'stops/hears', de: 'aufhören' },
          'nicht': { tr: 'değil', en: 'not', de: 'nicht' },
          'auf': { tr: 'durmak (ayrılabilir önek)', en: 'up/stop (separable prefix)', de: 'auf' },
        },
      },
    ],
  },
  {
    id: 'der-wind',
    word: 'der Wind',
    tr: 'rüzgar',
    sentences: [
      {
        id: 'wind-1',
        targetWord: 'Wind',
        german: 'Es ist viel Wind heute.',
        germanWithBlank: 'Es ist viel ___ heute.',
        translationTR: 'Bugün çok rüzgar var.',
        translationEN: 'There is a lot of wind today.',
        glossary: {
          'es': { tr: 'o (kişisiz özne)', en: 'it', de: 'es' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'viel': { tr: 'çok', en: 'a lot of', de: 'viel' },
          'heute': { tr: 'bugün', en: 'today', de: 'heute' },
        },
      },
    ],
  },
  {
    id: 'kühl',
    word: 'kühl',
    tr: 'serin',
    sentences: [
      {
        id: 'kühl-1',
        targetWord: 'kühl',
        german: 'Es ist heute kühl.',
        germanWithBlank: 'Es ist heute ___.',
        translationTR: 'Bugün serin.',
        translationEN: 'It is cool today.',
        glossary: {
          'es': { tr: 'o (kişisiz özne)', en: 'it', de: 'es' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'heute': { tr: 'bugün', en: 'today', de: 'heute' },
        },
      },
    ],
  },
  {
    id: 'bewölkt',
    word: 'bewölkt',
    sentences: [
      {
        id: 'bewölkt-1',
        targetWord: 'bewölkt',
        german: 'Es ist heute bewölkt.',
        germanWithBlank: 'Es ist heute ___.',
        translationTR: 'Bugün bulutlu.',
        translationEN: 'It is cloudy today.',
        glossary: {
          'es': { tr: 'o (kişisiz özne)', en: 'it', de: 'es' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'heute': { tr: 'bugün', en: 'today', de: 'heute' },
        },
      },
    ],
  },
  {
    id: 'sonnig',
    word: 'sonnig',
    sentences: [
      {
        id: 'sonnig-1',
        targetWord: 'sonnig',
        german: 'Das Wetter ist sonnig.',
        germanWithBlank: 'Das Wetter ist ___.',
        translationTR: 'Hava güneşli.',
        translationEN: 'The weather is sunny.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'wetter': { tr: 'hava (durumu)', en: 'weather', de: 'das Wetter' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
        },
      },
    ],
  },
  {
    id: 'der-himmel',
    word: 'der Himmel',
    tr: 'gökyüzü',
    sentences: [
      {
        id: 'himmel-1',
        targetWord: 'Himmel',
        german: 'Der Himmel ist blau.',
        germanWithBlank: 'Der ___ ist blau.',
        translationTR: 'Gökyüzü mavi.',
        translationEN: 'The sky is blue.',
        glossary: {
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'blau': { tr: 'mavi', en: 'blue', de: 'blau' },
        },
      },
    ],
  },
  {
    id: 'der-fluss',
    word: 'der Fluss',
    tr: 'nehir / ırmak',
    sentences: [
      {
        id: 'fluss-1',
        targetWord: 'Fluss',
        german: 'Der Fluss ist sehr breit.',
        germanWithBlank: 'Der ___ ist sehr breit.',
        translationTR: 'Nehir çok geniş.',
        translationEN: 'The river is very wide.',
        glossary: {
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'sehr': { tr: 'çok', en: 'very', de: 'sehr' },
          'breit': { tr: 'geniş', en: 'wide', de: 'breit' },
        },
      },
    ],
  },
  {
    id: 'die-brücke',
    word: 'die Brücke',
    tr: 'köprü',
    sentences: [
      {
        id: 'brücke-1',
        targetWord: 'Brücke',
        german: 'Geh über die Brücke!',
        germanWithBlank: 'Geh über die ___!',
        translationTR: 'Köprüden geç!',
        translationEN: 'Go over the bridge!',
        glossary: {
          'geh': { tr: 'gitmek (emir, sen)', en: 'go (imperative)', de: 'gehen' },
          'über': { tr: 'üzerinden, karşıdan', en: 'over/across', de: 'über' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
        },
      },
    ],
  },
  {
    id: 'die-ecke',
    word: 'die Ecke',
    tr: 'köşe',
    sentences: [
      {
        id: 'ecke-1',
        targetWord: 'Ecke',
        german: 'Das Restaurant ist an der Ecke.',
        germanWithBlank: 'Das Restaurant ist an der ___.',
        translationTR: 'Restoran köşede.',
        translationEN: 'The restaurant is on the corner.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'restaurant': { tr: 'restoran', en: 'restaurant', de: 'das Restaurant' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'an': { tr: '-de/-da (yüzey/yer)', en: 'at/on', de: 'an' },
          'der': { tr: 'belirli artikel (dişil, datif)', en: 'the (dative)', de: 'der' },
        },
      },
    ],
  },
  {
    id: 'geradeaus',
    word: 'geradeaus',
    tr: 'dümdüz',
    sentences: [
      {
        id: 'geradeaus-1',
        targetWord: 'geradeaus',
        german: 'Gehen Sie geradeaus!',
        germanWithBlank: 'Gehen Sie ___!',
        translationTR: 'Düz gidin!',
        translationEN: 'Go straight ahead!',
        glossary: {
          'gehen': { tr: 'gitmek', en: 'go', de: 'gehen' },
          'sie': { tr: 'siz (resmi, emir)', en: 'you (formal, imperative)', de: 'Sie' },
        },
      },
    ],
  },
  {
    id: 'die-richtung',
    word: 'die Richtung',
    tr: 'yön',
    sentences: [
      {
        id: 'richtung-1',
        targetWord: 'Richtung',
        german: 'In welche Richtung geht es?',
        germanWithBlank: 'In welche ___ geht es?',
        translationTR: 'Hangi yöne gidiliyor?',
        translationEN: 'In which direction is it?',
        glossary: {
          'in': { tr: '-de/-da / -e (yön)', en: 'in/to', de: 'in' },
          'welche': { tr: 'hangi (dişil)', en: 'which (feminine)', de: 'welcher' },
          'geht': { tr: 'gitmek', en: 'goes', de: 'gehen' },
          'es': { tr: 'o (kişisiz özne)', en: 'it', de: 'es' },
        },
      },
    ],
  },
  {
    id: 'nah',
    word: 'nah',
    tr: 'yakın',
    sentences: [
      {
        id: 'nah-1',
        targetWord: 'nah',
        german: 'Der Bahnhof ist nah.',
        germanWithBlank: 'Der Bahnhof ist ___.',
        translationTR: 'İstasyon yakında.',
        translationEN: 'The station is nearby.',
        glossary: {
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'bahnhof': { tr: 'tren istasyonu', en: 'train station', de: 'der Bahnhof' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
        },
      },
    ],
  },
  {
    id: 'die-strecke',
    word: 'die Strecke',
    sentences: [
      {
        id: 'strecke-1',
        targetWord: 'Strecke',
        german: 'Die Strecke ist sehr lang.',
        germanWithBlank: 'Die ___ ist sehr lang.',
        translationTR: 'Yol çok uzun.',
        translationEN: 'The route is very long.',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'sehr': { tr: 'çok', en: 'very', de: 'sehr' },
          'lang': { tr: 'uzun', en: 'long', de: 'lang' },
        },
      },
    ],
  },
  {
    id: 'der-abstand',
    word: 'der Abstand',
    sentences: [
      {
        id: 'abstand-1',
        targetWord: 'Abstand',
        german: 'Bitte halten Sie Abstand.',
        germanWithBlank: 'Bitte halten Sie ___.',
        translationTR: 'Lütfen mesafe koruyun.',
        translationEN: 'Please keep your distance.',
        glossary: {
          'bitte': { tr: 'lütfen', en: 'please', de: 'bitte' },
          'halten': { tr: 'tutmak / korumak', en: 'keep/hold', de: 'halten' },
          'sie': { tr: 'siz (resmi, emir)', en: 'you (formal, imperative)', de: 'Sie' },
        },
      },
    ],
  },
  {
    id: 'das-tier',
    word: 'das Tier',
    tr: 'hayvan',
    sentences: [
      {
        id: 'tier-1',
        targetWord: 'Tiere',
        german: 'Ich mag Tiere sehr.',
        germanWithBlank: 'Ich mag ___ sehr.',
        translationTR: 'Hayvanları çok severim.',
        translationEN: 'I like animals very much.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'mag': { tr: 'sevmek / hoşlanmak (ben)', en: 'like', de: 'mögen' },
          'sehr': { tr: 'çok', en: 'very much', de: 'sehr' },
        },
      },
    ],
  },
  {
    id: 'der-hund',
    word: 'der Hund',
    sentences: [
      {
        id: 'hund-1',
        targetWord: 'Hund',
        german: 'Ich habe einen Hund.',
        germanWithBlank: 'Ich habe einen ___.',
        translationTR: 'Bir köpeğim var.',
        translationEN: 'I have a dog.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'habe': { tr: 'sahip olmak (ben)', en: 'have', de: 'haben' },
          'einen': { tr: 'bir (eril, akuzatif)', en: 'a/an (accusative)', de: 'ein' },
        },
      },
    ],
  },
  {
    id: 'die-katze',
    word: 'die Katze',
    sentences: [
      {
        id: 'katze-1',
        targetWord: 'Katze',
        german: 'Meine Katze heißt Mia.',
        germanWithBlank: 'Meine ___ heißt Mia.',
        translationTR: 'Kedimin adı Mia.',
        translationEN: 'My cat is called Mia.',
        glossary: {
          'meine': { tr: 'benim (dişil)', en: 'my (feminine)', de: 'mein' },
          'heißt': { tr: 'adı ... olmak', en: 'is called', de: 'heißen' },
          'mia': { tr: 'Mia (özel isim)', en: 'Mia', de: 'Mia' },
        },
      },
    ],
  },
  {
    id: 'das-lied',
    word: 'das Lied',
    tr: 'şarkı',
    sentences: [
      {
        id: 'lied-1',
        targetWord: 'Lied',
        german: 'Das ist mein Lieblingslied.',
        germanWithBlank: 'Das ist mein Lieblings___.',
        translationTR: 'Bu benim favori şarkım.',
        translationEN: 'That is my favourite song.',
        glossary: {
          'das': { tr: 'bu / o (yansız)', en: 'that/it', de: 'das' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'mein': { tr: 'benim (eril/yansız)', en: 'my', de: 'mein' },
          'lieblings': { tr: 'favori- (önek)', en: 'favourite (prefix)', de: 'Lieblings-' },
        },
      },
    ],
  },
  {
    id: 'die-veranstaltung',
    word: 'die Veranstaltung',
    tr: 'etkinlik / organizasyon',
    sentences: [
      {
        id: 'veranstaltung-1',
        targetWord: 'Veranstaltung',
        german: 'Wann beginnt die Veranstaltung?',
        germanWithBlank: 'Wann beginnt die ___?',
        translationTR: 'Etkinlik ne zaman başlıyor?',
        translationEN: 'When does the event start?',
        glossary: {
          'wann': { tr: 'ne zaman', en: 'when', de: 'wann' },
          'beginnt': { tr: 'başlamak', en: 'starts/begins', de: 'beginnen' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
        },
      },
    ],
  },
  {
    id: 'der-schlafraum',
    word: 'der Schlafraum',
    sentences: [
      {
        id: 'schlafraum-1',
        targetWord: 'Schlafraum',
        german: 'Der Schlafraum ist sehr gemütlich.',
        germanWithBlank: 'Der ___ ist sehr gemütlich.',
        translationTR: 'Uyku odası çok rahat.',
        translationEN: 'The sleeping room is very cosy.',
        glossary: {
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'sehr': { tr: 'çok', en: 'very', de: 'sehr' },
          'gemütlich': { tr: 'rahat, şirin', en: 'cosy', de: 'gemütlich' },
        },
      },
    ],
  },
  {
    id: 'gemütlich',
    word: 'gemütlich',
    tr: 'rahat / keyifli / hoş',
    sentences: [
      {
        id: 'gemütlich-1',
        targetWord: 'gemütlich',
        german: 'Das Café ist sehr gemütlich.',
        germanWithBlank: 'Das Café ist sehr ___.',
        translationTR: 'Kafe çok şirin.',
        translationEN: 'The café is very cosy.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'café': { tr: 'kafe', en: 'café', de: 'das Café' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'sehr': { tr: 'çok', en: 'very', de: 'sehr' },
        },
      },
    ],
  },
  {
    id: 'lecker',
    word: 'lecker',
    tr: 'lezzetli',
    sentences: [
      {
        id: 'lecker-1',
        targetWord: 'lecker',
        german: 'Das Essen ist lecker.',
        germanWithBlank: 'Das Essen ist ___.',
        translationTR: 'Yemek lezzetli.',
        translationEN: 'The food is delicious.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'essen': { tr: 'yemek (isim)', en: 'food/meal', de: 'das Essen' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
        },
      },
    ],
  },
  {
    id: 'süß',
    word: 'süß',
    tr: 'tatlı',
    sentences: [
      {
        id: 'süß-1',
        targetWord: 'süß',
        german: 'Der Kuchen ist sehr süß.',
        germanWithBlank: 'Der Kuchen ist sehr ___.',
        translationTR: 'Pasta çok tatlı.',
        translationEN: 'The cake is very sweet.',
        glossary: {
          'der': { tr: 'belirli artikel (eril)', en: 'the (masculine)', de: 'der' },
          'kuchen': { tr: 'kek / pasta', en: 'cake', de: 'der Kuchen' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'sehr': { tr: 'çok', en: 'very', de: 'sehr' },
        },
      },
    ],
  },
  {
    id: 'sauer',
    word: 'sauer',
    tr: 'ekşi / kızgın',
    sentences: [
      {
        id: 'sauer-1',
        targetWord: 'sauer',
        german: 'Die Zitrone ist sauer.',
        germanWithBlank: 'Die Zitrone ist ___.',
        translationTR: 'Limon ekşi.',
        translationEN: 'The lemon is sour.',
        glossary: {
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'zitrone': { tr: 'limon', en: 'lemon', de: 'die Zitrone' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
        },
      },
    ],
  },
  {
    id: 'scharf',
    word: 'scharf',
    tr: 'acı / keskin',
    sentences: [
      {
        id: 'scharf-1',
        targetWord: 'scharf',
        german: 'Das Essen ist zu scharf.',
        germanWithBlank: 'Das Essen ist zu ___.',
        translationTR: 'Yemek çok acı.',
        translationEN: 'The food is too spicy.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'essen': { tr: 'yemek (isim)', en: 'food', de: 'das Essen' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'zu': { tr: 'çok (aşırı)', en: 'too (excessive)', de: 'zu' },
        },
      },
    ],
  },
  {
    id: 'die-zitrone',
    word: 'die Zitrone',
    tr: 'limon',
    sentences: [
      {
        id: 'zitrone-1',
        targetWord: 'Zitrone',
        german: 'Ich möchte Tee mit Zitrone.',
        germanWithBlank: 'Ich möchte Tee mit ___.',
        translationTR: 'Limonlu çay istiyorum.',
        translationEN: 'I would like tea with lemon.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'möchte': { tr: 'istemek / arzulamak (ben)', en: 'would like', de: 'mögen' },
          'tee': { tr: 'çay', en: 'tea', de: 'der Tee' },
          'mit': { tr: 'ile, -la/-le', en: 'with', de: 'mit' },
        },
      },
    ],
  },
  {
    id: 'der-tipp',
    word: 'der Tipp',
    sentences: [
      {
        id: 'tipp-1',
        targetWord: 'Tipp',
        german: 'Haben Sie einen Tipp für mich?',
        germanWithBlank: 'Haben Sie einen ___ für mich?',
        translationTR: 'Benim için bir ipucunuz var mı?',
        translationEN: 'Do you have a tip for me?',
        glossary: {
          'haben': { tr: 'sahip olmak', en: 'have', de: 'haben' },
          'sie': { tr: 'siz (resmi)', en: 'you (formal)', de: 'Sie' },
          'einen': { tr: 'bir (eril, akuzatif)', en: 'a/an (accusative)', de: 'ein' },
          'für': { tr: 'için', en: 'for', de: 'für' },
          'mich': { tr: 'beni / benim için', en: 'me', de: 'ich' },
        },
      },
    ],
  },
  {
    id: 'die-idee',
    word: 'die Idee',
    tr: 'fikir / düşünce',
    sentences: [
      {
        id: 'idee-1',
        targetWord: 'Idee',
        german: 'Das ist eine gute Idee.',
        germanWithBlank: 'Das ist eine gute ___.',
        translationTR: 'Bu iyi bir fikir.',
        translationEN: 'That is a good idea.',
        glossary: {
          'das': { tr: 'bu / o (yansız)', en: 'that/it', de: 'das' },
          'ist': { tr: 'olmak', en: 'is', de: 'sein' },
          'eine': { tr: 'bir (dişil belirtisiz)', en: 'a/an (feminine)', de: 'eine' },
          'gute': { tr: 'iyi (dişil)', en: 'good (feminine)', de: 'gut' },
        },
      },
    ],
  },
  {
    id: 'das-wörterbuch',
    word: 'das Wörterbuch',
    sentences: [
      {
        id: 'wörterbuch-1',
        targetWord: 'Wörterbuch',
        german: 'Kann ich dein Wörterbuch benutzen?',
        germanWithBlank: 'Kann ich dein ___ benutzen?',
        translationTR: 'Sözlüğünü kullanabilir miyim?',
        translationEN: 'Can I use your dictionary?',
        glossary: {
          kann: { tr: '-ebilir miyim', en: 'can I' },
          dein: { tr: 'senin', en: 'your' },
          benutzen: { tr: 'kullanmak', en: 'to use' },
        },
      },
    ],
  },
  {
    id: 'stellen',
    word: 'stellen',
    tr: 'koymak (dik)',
    sentences: [
      {
        id: 'stellen-1',
        targetWord: 'stellen',
        german: 'Kannst du die Flasche auf den Tisch stellen?',
        germanWithBlank: 'Kannst du die Flasche auf den Tisch ___?',
        translationTR: 'Şişeyi masaya koyabilir misin?',
        translationEN: 'Can you put the bottle on the table?',
        glossary: {
          'kannst': { tr: '-ebilir misin', en: 'can you', de: 'können' },
          'du': { tr: 'sen', en: 'you', de: 'du' },
          'die': { tr: 'belirli artikel (dişil)', en: 'the (feminine)', de: 'die' },
          'flasche': { tr: 'şişe', en: 'bottle', de: 'die Flasche' },
          'auf': { tr: 'üzerine', en: 'on/onto', de: 'auf' },
          'den': { tr: 'belirli artikel (eril, akuzatif)', en: 'the (accusative)', de: 'den' },
          'tisch': { tr: 'masa', en: 'table', de: 'der Tisch' },
        },
      },
    ],
  },
  {
    id: 'sitzen',
    word: 'sitzen',
    tr: 'oturmak',
    sentences: [
      {
        id: 'sitzen-1',
        targetWord: 'sitzen',
        german: 'Ich sitze gern am Fenster.',
        germanWithBlank: 'Ich ___ gern am Fenster.',
        translationTR: 'Pencere kenarında oturmayı severim.',
        translationEN: 'I like to sit by the window.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'gern': { tr: 'severek', en: 'gladly/like to', de: 'gern' },
          'am': { tr: '-de/-da (yerde)', en: 'at the', de: 'am' },
          'fenster': { tr: 'pencere', en: 'window', de: 'das Fenster' },
        },
      },
    ],
  },
  {
    id: 'liegen',
    word: 'liegen',
    tr: 'uzanmak / durmak / bulunmak',
    sentences: [
      {
        id: 'liegen-1',
        targetWord: 'liegt',
        german: 'Das Buch liegt auf dem Tisch.',
        germanWithBlank: 'Das Buch ___ auf dem Tisch.',
        translationTR: 'Kitap masanın üzerinde duruyor.',
        translationEN: 'The book is lying on the table.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'buch': { tr: 'kitap', en: 'book', de: 'das Buch' },
          'auf': { tr: 'üzerinde', en: 'on', de: 'auf' },
          'dem': { tr: 'belirli artikel (yansız/eril, datif)', en: 'the (dative)', de: 'dem' },
          'tisch': { tr: 'masa', en: 'table', de: 'der Tisch' },
        },
      },
    ],
  },
  {
    id: 'legen',
    word: 'legen',
    sentences: [
      {
        id: 'legen-1',
        targetWord: 'legen',
        german: 'Bitte legen Sie das Formular auf den Tisch.',
        germanWithBlank: 'Bitte ___ Sie das Formular auf den Tisch.',
        translationTR: 'Lütfen formu masaya koyun.',
        translationEN: 'Please put the form on the table.',
        glossary: {
          'bitte': { tr: 'lütfen', en: 'please', de: 'bitte' },
          'sie': { tr: 'siz (resmi, emir)', en: 'you (formal, imperative)', de: 'Sie' },
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'formular': { tr: 'form', en: 'form', de: 'das Formular' },
          'auf': { tr: 'üzerine', en: 'on/onto', de: 'auf' },
          'den': { tr: 'belirli artikel (eril, akuzatif)', en: 'the (accusative)', de: 'den' },
          'tisch': { tr: 'masa', en: 'table', de: 'der Tisch' },
        },
      },
    ],
  },
  {
    id: 'gefallen',
    word: 'gefallen',
    sentences: [
      {
        id: 'gefallen-1',
        targetWord: 'gefällt',
        german: 'Das Kleid gefällt mir sehr gut.',
        germanWithBlank: 'Das Kleid ___ mir sehr gut.',
        translationTR: 'Elbiseyi çok beğendim.',
        translationEN: 'I like the dress very much.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'kleid': { tr: 'elbise', en: 'dress', de: 'das Kleid' },
          'mir': { tr: 'bana', en: 'me (dative)', de: 'ich' },
          'sehr': { tr: 'çok', en: 'very much', de: 'sehr' },
          'gut': { tr: 'iyi, güzel', en: 'well/good', de: 'gut' },
        },
      },
    ],
  },
  {
    id: 'gehören',
    word: 'gehören',
    tr: 'ait olmak',
    sentences: [
      {
        id: 'gehören-1',
        targetWord: 'gehört',
        german: 'Dieser Schlüssel gehört mir.',
        germanWithBlank: 'Dieser Schlüssel ___ mir.',
        translationTR: 'Bu anahtar bana ait.',
        translationEN: 'This key belongs to me.',
        glossary: {
          'dieser': { tr: 'bu (eril)', en: 'this (masculine)', de: 'dieser' },
          'schlüssel': { tr: 'anahtar', en: 'key', de: 'der Schlüssel' },
          'mir': { tr: 'bana', en: 'me (dative)', de: 'ich' },
        },
      },
    ],
  },
  {
    id: 'anziehen',
    word: 'anziehen',
    tr: 'giyinmek',
    sentences: [
      {
        id: 'anziehen-1',
        targetWord: 'angezogen',
        german: 'Er hat sich warm angezogen.',
        germanWithBlank: 'Er hat sich warm ___.',
        translationTR: 'Kendini sıcak giydirdi.',
        translationEN: 'He dressed warmly.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'ziehe': { tr: 'giymek (ben)', en: 'put on', de: 'anziehen' },
          'morgens': { tr: 'sabahları', en: 'in the mornings', de: 'morgens' },
          'immer': { tr: 'her zaman', en: 'always', de: 'immer' },
          'zuerst': { tr: 'önce', en: 'first', de: 'zuerst' },
          'die': { tr: 'belirli artikel (çoğul)', en: 'the (plural)', de: 'die' },
          'schuhe': { tr: 'ayakkabılar', en: 'shoes', de: 'der Schuh' },
        },
      },
    ],
  },
  {
    id: 'unterschreiben',
    word: 'unterschreiben',
    tr: 'imzalamak',
    sentences: [
      {
        id: 'unterschreiben-1',
        targetWord: 'unterschreiben',
        german: 'Bitte hier unterschreiben.',
        germanWithBlank: 'Bitte hier ___.',
        translationTR: 'Lütfen buraya imzalayın.',
        translationEN: 'Please sign here.',
        glossary: {
          'bitte': { tr: 'lütfen', en: 'please', de: 'bitte' },
          'hier': { tr: 'burada', en: 'here', de: 'hier' },
        },
      },
    ],
  },
  {
    id: 'passieren',
    word: 'passieren',
    tr: 'olmak / vuku bulmak',
    sentences: [
      {
        id: 'passieren-1',
        targetWord: 'passiert',
        german: 'Was ist passiert?',
        germanWithBlank: 'Was ist ___?',
        translationTR: 'Ne oldu?',
        translationEN: 'What happened?',
        glossary: {
          'was': { tr: 'ne / neler', en: 'what', de: 'was' },
          'ist': { tr: 'olmak (geçmiş yardımcısı)', en: 'is/has', de: 'sein' },
        },
      },
    ],
  },
  {
    id: 'funktionieren',
    word: 'funktionieren',
    tr: 'çalışmak / işlemek',
    sentences: [
      {
        id: 'funktionieren-1',
        targetWord: 'funktioniert',
        german: 'Das Telefon funktioniert nicht.',
        germanWithBlank: 'Das Telefon ___ nicht.',
        translationTR: 'Telefon çalışmıyor.',
        translationEN: 'The phone is not working.',
        glossary: {
          'das': { tr: 'belirli artikel (yansız)', en: 'the (neuter)', de: 'das' },
          'telefon': { tr: 'telefon', en: 'phone', de: 'das Telefon' },
          'nicht': { tr: 'değil', en: 'not', de: 'nicht' },
        },
      },
    ],
  },
  {
    id: 'wütend',
    word: 'wütend',
    tr: 'kızgın / öfkeli',
    sentences: [
      {
        id: 'wütend-1',
        targetWord: 'wütend',
        german: 'Ich bin sehr wütend.',
        germanWithBlank: 'Ich bin sehr ___.',
        translationTR: 'Çok kızgınım.',
        translationEN: 'I am very angry.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'bin': { tr: 'olmak (ben)', en: 'am', de: 'sein' },
          'sehr': { tr: 'çok', en: 'very', de: 'sehr' },
        },
      },
    ],
  },
  {
    id: 'stolz',
    word: 'stolz',
    sentences: [
      {
        id: 'stolz-1',
        targetWord: 'stolz',
        german: 'Ich bin stolz auf dich.',
        germanWithBlank: 'Ich bin ___ auf dich.',
        translationTR: 'Seninle gurur duyuyorum.',
        translationEN: 'I am proud of you.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'bin': { tr: 'olmak (ben)', en: 'am', de: 'sein' },
          'auf': { tr: '-den/-dan dolayı (gurur için)', en: 'of (with pride)', de: 'auf' },
          'dich': { tr: 'seni', en: 'you (accusative)', de: 'du' },
        },
      },
    ],
  },
  {
    id: 'allein',
    word: 'allein',
    tr: 'yalnız / tek başına',
    sentences: [
      {
        id: 'allein-1',
        targetWord: 'allein',
        german: 'Ich wohne allein.',
        germanWithBlank: 'Ich wohne ___.',
        translationTR: 'Yalnız yaşıyorum.',
        translationEN: 'I live alone.',
        glossary: {
          'ich': { tr: 'ben', en: 'I', de: 'ich' },
          'wohne': { tr: 'yaşamak (ben)', en: 'live', de: 'wohnen' },
        },
      },
    ],
  },

  // ─── MISSING A1 NOUNS ────────────────────────────────────────────────────────

  {
    id: 'der-sohn',
    word: 'der Sohn',
    sentences: [
      {
        id: 'sohn-1',
        targetWord: 'Sohn',
        german: 'Mein Sohn ist sechs Jahre alt.',
        germanWithBlank: 'Mein ___ ist sechs Jahre alt.',
        translationTR: 'Oğlum altı yaşında.',
        translationEN: 'My son is six years old.',
        glossary: {
          mein: { tr: 'benim', en: 'my' },
          ist: { tr: '-dır (olmak)', en: 'is', de: 'sein', trDict: 'olmak' },
          jahre: { tr: 'yıllar', en: 'years' },
          alt: { tr: 'yaşında / eski', en: 'old' },
        },
      },
    ],
  },
  {
    id: 'die-tochter',
    word: 'die Tochter',
    tr: 'kız evlat',
    sentences: [
      {
        id: 'tochter-1',
        targetWord: 'Tochter',
        german: 'Meine Tochter geht in die Schule.',
        germanWithBlank: 'Meine ___ geht in die Schule.',
        translationTR: 'Kızım okula gidiyor.',
        translationEN: 'My daughter goes to school.',
        glossary: {
          meine: { tr: 'benim', en: 'my' },
          geht: { tr: 'gidiyor', en: 'goes', de: 'gehen', trDict: 'gitmek' },
          in: { tr: '-e', en: 'to' },
          schule: { tr: 'okul', en: 'school' },
        },
      },
    ],
  },
  {
    id: 'die-oma',
    word: 'die Oma',
    tr: 'büyükanne / nene',
    sentences: [
      {
        id: 'oma-1',
        targetWord: 'Oma',
        german: 'Meine Oma backt jeden Sonntag Kuchen.',
        germanWithBlank: 'Meine ___ backt jeden Sonntag Kuchen.',
        translationTR: 'Büyükannem her pazar kek pişiriyor.',
        translationEN: 'My grandma bakes a cake every Sunday.',
        glossary: {
          meine: { tr: 'benim', en: 'my' },
          backt: { tr: 'pişiriyor (fırında)', en: 'bakes', de: 'backen', trDict: 'fırında pişirmek' },
          jeden: { tr: 'her', en: 'every' },
          sonntag: { tr: 'pazar', en: 'Sunday' },
          kuchen: { tr: 'kek / pasta', en: 'cake' },
        },
      },
    ],
  },
  {
    id: 'der-opa',
    word: 'der Opa',
    tr: 'büyükbaba / dede',
    sentences: [
      {
        id: 'opa-1',
        targetWord: 'Opa',
        german: 'Mein Opa liest jeden Morgen die Zeitung.',
        germanWithBlank: 'Mein ___ liest jeden Morgen die Zeitung.',
        translationTR: 'Büyükbabam her sabah gazete okuyor.',
        translationEN: 'My grandpa reads the newspaper every morning.',
        glossary: {
          mein: { tr: 'benim', en: 'my' },
          liest: { tr: 'okuyor', en: 'reads', de: 'lesen', trDict: 'okumak' },
          jeden: { tr: 'her', en: 'every' },
          morgen: { tr: 'sabah', en: 'morning' },
          zeitung: { tr: 'gazete', en: 'newspaper' },
        },
      },
    ],
  },
  {
    id: 'die-freundin',
    word: 'die Freundin',
    sentences: [
      {
        id: 'freundin-1',
        targetWord: 'Freundin',
        german: 'Meine Freundin kommt morgen zu Besuch.',
        germanWithBlank: 'Meine ___ kommt morgen zu Besuch.',
        translationTR: 'Kız arkadaşım yarın ziyarete geliyor.',
        translationEN: 'My (female) friend is coming to visit tomorrow.',
        glossary: {
          meine: { tr: 'benim', en: 'my' },
          kommt: { tr: 'geliyor', en: 'comes', de: 'kommen', trDict: 'gelmek' },
          morgen: { tr: 'yarın', en: 'tomorrow' },
          zu: { tr: '-e', en: 'to' },
          besuch: { tr: 'ziyaret', en: 'visit' },
        },
      },
    ],
  },
  {
    id: 'der-schüler',
    word: 'der Schüler',
    sentences: [
      {
        id: 'schüler-1',
        targetWord: 'Schüler',
        german: 'Der Schüler vergisst seine Hausaufgaben nie.',
        germanWithBlank: 'Der ___ vergisst seine Hausaufgaben nie.',
        translationTR: 'Öğrenci ödevini hiç unutmuyor.',
        translationEN: 'The pupil never forgets his homework.',
        glossary: {
          vergisst: { tr: 'unutuyor', en: 'forgets', de: 'vergessen', trDict: 'unutmak' },
          seine: { tr: 'onun', en: 'his' },
          hausaufgaben: { tr: 'ödevler', en: 'homework' },
          nie: { tr: 'hiçbir zaman', en: 'never' },
        },
      },
    ],
  },
  {
    id: 'die-schülerin',
    word: 'die Schülerin',
    sentences: [
      {
        id: 'schülerin-1',
        targetWord: 'Schülerin',
        german: 'Die Schülerin fragt den Lehrer um Hilfe.',
        germanWithBlank: 'Die ___ fragt den Lehrer um Hilfe.',
        translationTR: 'Kız öğrenci öğretmenden yardım istiyor.',
        translationEN: 'The (female) pupil asks the teacher for help.',
        glossary: {
          fragt: { tr: 'soruyor', en: 'asks', de: 'fragen', trDict: 'sormak' },
          den: { tr: 'the (belirli tanımlık, akkusativ)', en: 'the (acc.)' },
          lehrer: { tr: 'öğretmen', en: 'teacher' },
          um: { tr: 'için', en: 'for' },
          hilfe: { tr: 'yardım', en: 'help' },
        },
      },
    ],
  },
  {
    id: 'die-lehrerin',
    word: 'die Lehrerin',
    sentences: [
      {
        id: 'lehrerin-1',
        targetWord: 'Lehrerin',
        german: 'Unsere Lehrerin erklärt alles sehr gut.',
        germanWithBlank: 'Unsere ___ erklärt alles sehr gut.',
        translationTR: 'Öğretmenimiz her şeyi çok iyi anlatıyor.',
        translationEN: 'Our (female) teacher explains everything very well.',
        glossary: {
          unsere: { tr: 'bizim', en: 'our' },
          erklärt: { tr: 'açıklıyor', en: 'explains', de: 'erklären', trDict: 'açıklamak' },
          alles: { tr: 'her şey', en: 'everything' },
          sehr: { tr: 'çok', en: 'very' },
          gut: { tr: 'iyi', en: 'well' },
        },
      },
    ],
  },
  {
    id: 'der-computer',
    word: 'der Computer',
    sentences: [
      {
        id: 'computer-1',
        targetWord: 'Computer',
        german: 'Ich lerne Deutsch am Computer.',
        germanWithBlank: 'Ich lerne Deutsch am ___.',
        translationTR: 'Bilgisayarda Almanca öğreniyorum.',
        translationEN: 'I learn German on the computer.',
        glossary: {
          lerne: { tr: 'öğreniyorum', en: 'I learn', de: 'lernen', trDict: 'öğrenmek' },
          deutsch: { tr: 'Almanca', en: 'German' },
          am: { tr: '-de (an + dem)', en: 'on the' },
        },
      },
    ],
  },
  {
    id: 'der-laptop',
    word: 'der Laptop',
    sentences: [
      {
        id: 'laptop-1',
        targetWord: 'Laptop',
        german: 'Ich arbeite oft mit meinem Laptop.',
        germanWithBlank: 'Ich arbeite oft mit meinem ___.',
        translationTR: 'Sık sık dizüstü bilgisayarımla çalışıyorum.',
        translationEN: 'I often work with my laptop.',
        glossary: {
          arbeite: { tr: 'çalışıyorum', en: 'I work', de: 'arbeiten', trDict: 'çalışmak' },
          oft: { tr: 'sık sık', en: 'often' },
          mit: { tr: 'ile', en: 'with' },
          meinem: { tr: 'benim (datif)', en: 'my (dat.)' },
        },
      },
    ],
  },
  {
    id: 'der-zahnarzt',
    word: 'der Zahnarzt',
    sentences: [
      {
        id: 'zahnarzt-1',
        targetWord: 'Zahnarzt',
        german: 'Ich habe morgen einen Termin beim Zahnarzt.',
        germanWithBlank: 'Ich habe morgen einen Termin beim ___.',
        translationTR: 'Yarın diş hekiminde randevum var.',
        translationEN: 'I have a dentist appointment tomorrow.',
        glossary: {
          habe: { tr: 'var / sahibim', en: 'have', de: 'haben', trDict: 'sahip olmak' },
          morgen: { tr: 'yarın', en: 'tomorrow' },
          einen: { tr: 'bir (akkusativ)', en: 'a (acc.)' },
          termin: { tr: 'randevu', en: 'appointment' },
          beim: { tr: '-de (bei + dem)', en: 'at the' },
        },
      },
    ],
  },
  {
    id: 'die-wurst',
    word: 'die Wurst',
    tr: 'sosis / sucuk',
    sentences: [
      {
        id: 'wurst-1',
        targetWord: 'Wurst',
        german: 'Zum Frühstück esse ich Brot mit Wurst.',
        germanWithBlank: 'Zum Frühstück esse ich Brot mit ___.',
        translationTR: 'Kahvaltıda ekmekle salam yerim.',
        translationEN: 'For breakfast I eat bread with sausage.',
        glossary: {
          zum: { tr: 'için (zu + dem)', en: 'for' },
          frühstück: { tr: 'kahvaltı', en: 'breakfast' },
          esse: { tr: 'yiyorum', en: 'I eat', de: 'essen', trDict: 'yemek' },
          brot: { tr: 'ekmek', en: 'bread' },
          mit: { tr: 'ile', en: 'with' },
        },
      },
    ],
  },
  {
    id: 'der-reis',
    word: 'der Reis',
    tr: 'pirinç / pilav',
    sentences: [
      {
        id: 'reis-1',
        targetWord: 'Reis',
        german: 'Ich koche heute Abend Reis mit Gemüse.',
        germanWithBlank: 'Ich koche heute Abend ___ mit Gemüse.',
        translationTR: 'Bu akşam sebzeli pilav pişiriyorum.',
        translationEN: 'I am cooking rice with vegetables tonight.',
        glossary: {
          koche: { tr: 'pişiriyorum', en: 'I cook', de: 'kochen', trDict: 'pişirmek' },
          heute: { tr: 'bugün', en: 'today' },
          abend: { tr: 'akşam', en: 'evening' },
          mit: { tr: 'ile', en: 'with' },
          gemüse: { tr: 'sebze', en: 'vegetable(s)' },
        },
      },
    ],
  },
  {
    id: 'die-nudeln',
    word: 'die Nudeln',
    sentences: [
      {
        id: 'nudeln-1',
        targetWord: 'Nudeln',
        german: 'Ich esse gerne Nudeln mit Tomatensauce.',
        germanWithBlank: 'Ich esse gerne ___ mit Tomatensauce.',
        translationTR: 'Domates soslu makarna yemeyi severim.',
        translationEN: 'I like eating pasta with tomato sauce.',
        glossary: {
          esse: { tr: 'yiyorum', en: 'I eat', de: 'essen', trDict: 'yemek' },
          gerne: { tr: 'severek / memnuniyetle', en: 'gladly' },
          mit: { tr: 'ile', en: 'with' },
          tomatensauce: { tr: 'domates sosu', en: 'tomato sauce' },
        },
      },
    ],
  },
  {
    id: 'der-joghurt',
    word: 'der Joghurt',
    sentences: [
      {
        id: 'joghurt-1',
        targetWord: 'Joghurt',
        german: 'Zum Frühstück esse ich Joghurt mit Früchten.',
        germanWithBlank: 'Zum Frühstück esse ich ___ mit Früchten.',
        translationTR: 'Kahvaltıda meyveli yoğurt yerim.',
        translationEN: 'For breakfast I eat yogurt with fruit.',
        glossary: {
          zum: { tr: 'için (zu + dem)', en: 'for' },
          frühstück: { tr: 'kahvaltı', en: 'breakfast' },
          esse: { tr: 'yiyorum', en: 'I eat', de: 'essen', trDict: 'yemek' },
          mit: { tr: 'ile', en: 'with' },
          früchten: { tr: 'meyveler (çoğul)', en: 'fruits' },
        },
      },
    ],
  },
  {
    id: 'die-marmelade',
    word: 'die Marmelade',
    tr: 'reçel',
    sentences: [
      {
        id: 'marmelade-1',
        targetWord: 'Marmelade',
        german: 'Ich esse Brot mit Butter und Marmelade.',
        germanWithBlank: 'Ich esse Brot mit Butter und ___.',
        translationTR: 'Tereyağı ve reçelli ekmek yiyorum.',
        translationEN: 'I eat bread with butter and jam.',
        glossary: {
          esse: { tr: 'yiyorum', en: 'I eat', de: 'essen', trDict: 'yemek' },
          brot: { tr: 'ekmek', en: 'bread' },
          mit: { tr: 'ile', en: 'with' },
          butter: { tr: 'tereyağı', en: 'butter' },
          und: { tr: 've', en: 'and' },
        },
      },
    ],
  },
  {
    id: 'das-eis',
    word: 'das Eis',
    tr: 'buz / dondurma',
    sentences: [
      {
        id: 'eis-1',
        targetWord: 'Eis',
        german: 'Im Sommer esse ich gerne Eis.',
        germanWithBlank: 'Im Sommer esse ich gerne ___.',
        translationTR: 'Yazın dondurma yemeyi severim.',
        translationEN: 'In summer I like to eat ice cream.',
        glossary: {
          im: { tr: '-de (in + dem)', en: 'in the' },
          sommer: { tr: 'yaz', en: 'summer' },
          esse: { tr: 'yiyorum', en: 'I eat', de: 'essen', trDict: 'yemek' },
          gerne: { tr: 'severek', en: 'gladly' },
        },
      },
    ],
  },
  {
    id: 'die-birne',
    word: 'die Birne',
    tr: 'armut',
    sentences: [
      {
        id: 'birne-1',
        targetWord: 'Birne',
        german: 'Ich kaufe eine reife Birne auf dem Markt.',
        germanWithBlank: 'Ich kaufe eine reife ___ auf dem Markt.',
        translationTR: 'Pazarda olgun bir armut alıyorum.',
        translationEN: 'I buy a ripe pear at the market.',
        glossary: {
          kaufe: { tr: 'alıyorum', en: 'I buy', de: 'kaufen', trDict: 'satın almak' },
          eine: { tr: 'bir', en: 'a/an' },
          reife: { tr: 'olgun', en: 'ripe' },
          auf: { tr: '-de', en: 'at' },
          markt: { tr: 'pazar', en: 'market' },
        },
      },
    ],
  },
  {
    id: 'die-erdbeere',
    word: 'die Erdbeere',
    sentences: [
      {
        id: 'erdbeere-1',
        targetWord: 'Erdbeeren',
        german: 'Im Sommer esse ich gerne Erdbeeren.',
        germanWithBlank: 'Im Sommer esse ich gerne ___.',
        translationTR: 'Yazın çilek yemeyi severim.',
        translationEN: 'In summer I like eating strawberries.',
        glossary: {
          im: { tr: '-de (in + dem)', en: 'in the' },
          sommer: { tr: 'yaz', en: 'summer' },
          esse: { tr: 'yiyorum', en: 'I eat', de: 'essen', trDict: 'yemek' },
          gerne: { tr: 'severek', en: 'gladly' },
        },
      },
    ],
  },
  {
    id: 'die-gurke',
    word: 'die Gurke',
    sentences: [
      {
        id: 'gurke-1',
        targetWord: 'Gurke',
        german: 'Ich schneide eine Gurke für den Salat.',
        germanWithBlank: 'Ich schneide eine ___ für den Salat.',
        translationTR: 'Salata için bir salatalık kesiyorum.',
        translationEN: 'I am cutting a cucumber for the salad.',
        glossary: {
          schneide: { tr: 'kesiyorum', en: 'I cut', de: 'schneiden', trDict: 'kesmek' },
          eine: { tr: 'bir', en: 'a/an' },
          für: { tr: 'için', en: 'for' },
          den: { tr: 'the (akkusativ)', en: 'the (acc.)' },
          salat: { tr: 'salata', en: 'salad' },
        },
      },
    ],
  },
  {
    id: 'der-paprika',
    word: 'der Paprika',
    sentences: [
      {
        id: 'paprika-1',
        targetWord: 'Paprika',
        german: 'Der rote Paprika ist sehr gesund.',
        germanWithBlank: 'Der rote ___ ist sehr gesund.',
        translationTR: 'Kırmızı biber çok sağlıklı.',
        translationEN: 'The red bell pepper is very healthy.',
        glossary: {
          rote: { tr: 'kırmızı', en: 'red' },
          ist: { tr: '-dır', en: 'is', de: 'sein', trDict: 'olmak' },
          sehr: { tr: 'çok', en: 'very' },
          gesund: { tr: 'sağlıklı', en: 'healthy' },
        },
      },
    ],
  },
  {
    id: 'das-hähnchen',
    word: 'das Hähnchen',
    sentences: [
      {
        id: 'hähnchen-1',
        targetWord: 'Hähnchen',
        german: 'Zum Mittagessen gibt es gegrilltes Hähnchen.',
        germanWithBlank: 'Zum Mittagessen gibt es gegrilltes ___.',
        translationTR: 'Öğle yemeğinde ızgara tavuk var.',
        translationEN: 'For lunch there is grilled chicken.',
        glossary: {
          zum: { tr: 'için (zu + dem)', en: 'for the' },
          mittagessen: { tr: 'öğle yemeği', en: 'lunch' },
          gibt: { tr: 'var (es gibt)', en: 'there is', de: 'geben', trDict: 'vermek' },
          gegrilltes: { tr: 'ızgara', en: 'grilled' },
        },
      },
    ],
  },
  {
    id: 'der-finger',
    word: 'der Finger',
    tr: 'parmak',
    sentences: [
      {
        id: 'finger-1',
        targetWord: 'Finger',
        german: 'Ich habe mir den Finger verletzt.',
        germanWithBlank: 'Ich habe mir den ___ verletzt.',
        translationTR: 'Parmağımı yaraladım.',
        translationEN: 'I hurt my finger.',
        glossary: {
          habe: { tr: '-dim (Perfekt yardımcı)', en: 'have (perfect)', de: 'haben' },
          mir: { tr: 'kendime / bana', en: 'myself / for me' },
          den: { tr: 'the (akkusativ)', en: 'the (acc.)' },
          verletzt: { tr: 'yaraladım', en: 'hurt', de: 'verletzen', trDict: 'yaralamak' },
        },
      },
    ],
  },
  {
    id: 'die-schulter',
    word: 'die Schulter',
    sentences: [
      {
        id: 'schulter-1',
        targetWord: 'Schulter',
        german: 'Meine Schulter tut weh.',
        germanWithBlank: 'Meine ___ tut weh.',
        translationTR: 'Omzum ağrıyor.',
        translationEN: 'My shoulder hurts.',
        glossary: {
          meine: { tr: 'benim', en: 'my' },
          tut: { tr: 'yapıyor', en: 'does', de: 'tun', trDict: 'yapmak' },
          weh: { tr: 'ağrı / acı', en: 'pain (wehtun = to hurt)' },
        },
      },
    ],
  },
  {
    id: 'das-knie',
    word: 'das Knie',
    tr: 'diz',
    sentences: [
      {
        id: 'knie-1',
        targetWord: 'Knie',
        german: 'Mein Knie schmerzt nach dem Sport.',
        germanWithBlank: 'Mein ___ schmerzt nach dem Sport.',
        translationTR: 'Spordan sonra dizim ağrıyor.',
        translationEN: 'My knee hurts after sport.',
        glossary: {
          mein: { tr: 'benim', en: 'my' },
          schmerzt: { tr: 'ağrıyor', en: 'hurts', de: 'schmerzen', trDict: 'ağrımak' },
          nach: { tr: 'sonra', en: 'after' },
          dem: { tr: 'the (datif)', en: 'the (dat.)' },
          sport: { tr: 'spor', en: 'sport' },
        },
      },
    ],
  },
  {
    id: 'der-rock',
    word: 'der Rock',
    tr: 'etek',
    sentences: [
      {
        id: 'rock-1',
        targetWord: 'Rock',
        german: 'Sie trägt heute einen roten Rock.',
        germanWithBlank: 'Sie trägt heute einen roten ___.',
        translationTR: 'Bugün kırmızı bir etek giyiyor.',
        translationEN: 'She is wearing a red skirt today.',
        glossary: {
          sie: { tr: 'o (kadın)', en: 'she' },
          trägt: { tr: 'giyiyor', en: 'wears', de: 'tragen', trDict: 'giymek' },
          heute: { tr: 'bugün', en: 'today' },
          einen: { tr: 'bir (akkusativ)', en: 'a/an (acc.)' },
          roten: { tr: 'kırmızı (akkusativ)', en: 'red (acc.)' },
        },
      },
    ],
  },
  {
    id: 'die-bluse',
    word: 'die Bluse',
    tr: 'bluz',
    sentences: [
      {
        id: 'bluse-1',
        targetWord: 'Bluse',
        german: 'Diese weiße Bluse gefällt mir sehr gut.',
        germanWithBlank: 'Diese weiße ___ gefällt mir sehr gut.',
        translationTR: 'Bu beyaz bluz bana çok yakışıyor.',
        translationEN: 'This white blouse suits me very well.',
        glossary: {
          diese: { tr: 'bu', en: 'this' },
          weiße: { tr: 'beyaz', en: 'white' },
          gefällt: { tr: 'hoşuma gidiyor', en: 'pleases', de: 'gefallen', trDict: 'hoşuna gitmek' },
          mir: { tr: 'bana', en: 'to me' },
          sehr: { tr: 'çok', en: 'very' },
          gut: { tr: 'iyi', en: 'well' },
        },
      },
    ],
  },
  {
    id: 'der-stiefel',
    word: 'der Stiefel',
    sentences: [
      {
        id: 'stiefel-1',
        targetWord: 'Stiefel',
        german: 'Im Winter trage ich warme Stiefel.',
        germanWithBlank: 'Im Winter trage ich warme ___.',
        translationTR: 'Kışın sıcak çizmeler giyiyorum.',
        translationEN: 'In winter I wear warm boots.',
        glossary: {
          im: { tr: '-de (in + dem)', en: 'in the' },
          winter: { tr: 'kış', en: 'winter' },
          trage: { tr: 'giyiyorum', en: 'I wear', de: 'tragen', trDict: 'giymek' },
          warme: { tr: 'sıcak', en: 'warm' },
        },
      },
    ],
  },
  {
    id: 'das-handtuch',
    word: 'das Handtuch',
    sentences: [
      {
        id: 'handtuch-1',
        targetWord: 'Handtuch',
        german: 'Bitte bring mir ein sauberes Handtuch.',
        germanWithBlank: 'Bitte bring mir ein sauberes ___.',
        translationTR: 'Lütfen bana temiz bir havlu getir.',
        translationEN: 'Please bring me a clean towel.',
        glossary: {
          bitte: { tr: 'lütfen', en: 'please' },
          bring: { tr: 'getir', en: 'bring', de: 'bringen', trDict: 'getirmek' },
          mir: { tr: 'bana', en: 'to me' },
          ein: { tr: 'bir', en: 'a/an' },
          sauberes: { tr: 'temiz', en: 'clean' },
        },
      },
    ],
  },
  {
    id: 'das-kissen',
    word: 'das Kissen',
    tr: 'yastık',
    sentences: [
      {
        id: 'kissen-1',
        targetWord: 'Kissen',
        german: 'Ich schlafe gerne mit zwei Kissen.',
        germanWithBlank: 'Ich schlafe gerne mit zwei ___.',
        translationTR: 'İki yastıkla uyumayı severim.',
        translationEN: 'I like sleeping with two pillows.',
        glossary: {
          schlafe: { tr: 'uyuyorum', en: 'I sleep', de: 'schlafen', trDict: 'uyumak' },
          gerne: { tr: 'severek', en: 'gladly' },
          mit: { tr: 'ile', en: 'with' },
          zwei: { tr: 'iki', en: 'two' },
        },
      },
    ],
  },
  {
    id: 'der-spiegel',
    word: 'der Spiegel',
    sentences: [
      {
        id: 'spiegel-1',
        targetWord: 'Spiegel',
        german: 'Der Spiegel im Badezimmer ist groß.',
        germanWithBlank: 'Der ___ im Badezimmer ist groß.',
        translationTR: 'Banyodaki ayna büyük.',
        translationEN: 'The mirror in the bathroom is big.',
        glossary: {
          im: { tr: '-de (in + dem)', en: 'in the' },
          badezimmer: { tr: 'banyo', en: 'bathroom' },
          ist: { tr: '-dır', en: 'is', de: 'sein', trDict: 'olmak' },
          groß: { tr: 'büyük', en: 'big' },
        },
      },
    ],
  },
  {
    id: 'der-flur',
    word: 'der Flur',
    sentences: [
      {
        id: 'flur-1',
        targetWord: 'Flur',
        german: 'Im Flur hängen die Jacken.',
        germanWithBlank: 'Im ___ hängen die Jacken.',
        translationTR: 'Koridorda ceketler asılı duruyor.',
        translationEN: 'The jackets are hanging in the hallway.',
        glossary: {
          im: { tr: '-de (in + dem)', en: 'in the' },
          hängen: { tr: 'asılı duruyor', en: 'hang', de: 'hängen', trDict: 'asılmak' },
          jacken: { tr: 'ceketler', en: 'jackets' },
        },
      },
    ],
  },
  {
    id: 'die-pause',
    word: 'die Pause',
    tr: 'ara / mola',
    sentences: [
      {
        id: 'pause-1',
        targetWord: 'Pause',
        german: 'In der Pause trinke ich Wasser.',
        germanWithBlank: 'In der ___ trinke ich Wasser.',
        translationTR: 'Teneffüste su içiyorum.',
        translationEN: 'During the break I drink water.',
        glossary: {
          in: { tr: '-de', en: 'in / during' },
          der: { tr: 'the (datif)', en: 'the (dat.)' },
          trinke: { tr: 'içiyorum', en: 'I drink', de: 'trinken', trDict: 'içmek' },
          wasser: { tr: 'su', en: 'water' },
        },
      },
    ],
  },
  {
    id: 'der-nachbar',
    word: 'der Nachbar',
    tr: 'komşu',
    sentences: [
      {
        id: 'nachbar-1',
        targetWord: 'Nachbar',
        german: 'Mein Nachbar ist sehr freundlich.',
        germanWithBlank: 'Mein ___ ist sehr freundlich.',
        translationTR: 'Komşum çok kibar.',
        translationEN: 'My neighbor is very friendly.',
        glossary: {
          mein: { tr: 'benim', en: 'my' },
          ist: { tr: '-dır', en: 'is', de: 'sein', trDict: 'olmak' },
          sehr: { tr: 'çok', en: 'very' },
          freundlich: { tr: 'kibar / dost canlısı', en: 'friendly' },
        },
      },
    ],
  },
  {
    id: 'zwei',
    word: 'zwei',
    sentences: [
      {
        id: 'zwei-1',
        targetWord: 'zwei',
        german: 'Ich habe zwei Kinder.',
        germanWithBlank: 'Ich habe ___ Kinder.',
        translationTR: 'İki çocuğum var.',
        translationEN: 'I have two children.',
        glossary: {
          habe: { tr: 'var (bende)', en: 'have', de: 'haben', trDict: 'sahip olmak' },
          kinder: { tr: 'çocuklar', en: 'children', de: 'das Kind' },
        },
      },
    ],
  },
  {
    id: 'drei',
    word: 'drei',
    sentences: [
      {
        id: 'drei-1',
        targetWord: 'drei',
        german: 'Wir treffen uns in drei Stunden.',
        germanWithBlank: 'Wir treffen uns in ___ Stunden.',
        translationTR: 'Üç saat içinde buluşuyoruz.',
        translationEN: 'We are meeting in three hours.',
        glossary: {
          treffen: { tr: 'buluşmak', en: 'to meet', trDict: 'buluşmak' },
          stunden: { tr: 'saatler', en: 'hours', de: 'die Stunde' },
        },
      },
    ],
  },
  {
    id: 'vier',
    word: 'vier',
    sentences: [
      {
        id: 'vier-1',
        targetWord: 'vier',
        german: 'Das Konzert beginnt um vier Uhr.',
        germanWithBlank: 'Das Konzert beginnt um ___ Uhr.',
        translationTR: 'Konser saat dörtte başlıyor.',
        translationEN: 'The concert starts at four o\'clock.',
        glossary: {
          konzert: { tr: 'konser', en: 'concert', de: 'das Konzert' },
          beginnt: { tr: 'başlıyor', en: 'starts', de: 'beginnen', trDict: 'başlamak' },
          uhr: { tr: 'saat', en: 'o\'clock', de: 'die Uhr' },
        },
      },
    ],
  },
  {
    id: 'fünf',
    word: 'fünf',
    sentences: [
      {
        id: 'fünf-1',
        targetWord: 'fünf',
        german: 'Der Kurs dauert fünf Wochen.',
        germanWithBlank: 'Der Kurs dauert ___ Wochen.',
        translationTR: 'Kurs beş hafta sürer.',
        translationEN: 'The course lasts five weeks.',
        glossary: {
          kurs: { tr: 'kurs', en: 'course', de: 'der Kurs' },
          dauert: { tr: 'sürer', en: 'lasts', de: 'dauern', trDict: 'sürmek' },
          wochen: { tr: 'haftalar', en: 'weeks', de: 'die Woche' },
        },
      },
    ],
  },
  {
    id: 'sechs',
    word: 'sechs',
    sentences: [
      {
        id: 'sechs-1',
        targetWord: 'sechs',
        german: 'Es gibt sechs Eier im Kühlschrank.',
        germanWithBlank: 'Es gibt ___ Eier im Kühlschrank.',
        translationTR: 'Buzdolabında altı yumurta var.',
        translationEN: 'There are six eggs in the refrigerator.',
        glossary: {
          gibt: { tr: 'var', en: 'there are', de: 'geben', trDict: 'vermek / olmak' },
          eier: { tr: 'yumurtalar', en: 'eggs', de: 'das Ei' },
          kühlschrank: { tr: 'buzdolabı', en: 'refrigerator', de: 'der Kühlschrank' },
        },
      },
    ],
  },
  {
    id: 'sieben',
    word: 'sieben',
    sentences: [
      {
        id: 'sieben-1',
        targetWord: 'sieben',
        german: 'Die Woche hat sieben Tage.',
        germanWithBlank: 'Die Woche hat ___ Tage.',
        translationTR: 'Haftanın yedi günü vardır.',
        translationEN: 'The week has seven days.',
        glossary: {
          woche: { tr: 'hafta', en: 'week', de: 'die Woche' },
          tage: { tr: 'günler', en: 'days', de: 'der Tag' },
        },
      },
    ],
  },
  {
    id: 'acht',
    word: 'acht',
    sentences: [
      {
        id: 'acht-1',
        targetWord: 'acht',
        german: 'Ich arbeite acht Stunden am Tag.',
        germanWithBlank: 'Ich arbeite ___ Stunden am Tag.',
        translationTR: 'Günde sekiz saat çalışıyorum.',
        translationEN: 'I work eight hours a day.',
        glossary: {
          arbeite: { tr: 'çalışıyorum', en: 'I work', de: 'arbeiten', trDict: 'çalışmak' },
          stunden: { tr: 'saatler', en: 'hours', de: 'die Stunde' },
        },
      },
    ],
  },
  {
    id: 'neun',
    word: 'neun',
    sentences: [
      {
        id: 'neun-1',
        targetWord: 'neun',
        german: 'Das Kind ist neun Jahre alt.',
        germanWithBlank: 'Das Kind ist ___ Jahre alt.',
        translationTR: 'Çocuk dokuz yaşında.',
        translationEN: 'The child is nine years old.',
        glossary: {
          kind: { tr: 'çocuk', en: 'child', de: 'das Kind' },
          jahre: { tr: 'yıllar / yaşında', en: 'years old', de: 'das Jahr' },
          alt: { tr: 'yaşında', en: 'old' },
        },
      },
    ],
  },
  {
    id: 'zehn',
    word: 'zehn',
    sentences: [
      {
        id: 'zehn-1',
        targetWord: 'zehn',
        german: 'Ich warte seit zehn Minuten.',
        germanWithBlank: 'Ich warte seit ___ Minuten.',
        translationTR: 'On dakikadır bekliyorum.',
        translationEN: 'I have been waiting for ten minutes.',
        glossary: {
          warte: { tr: 'bekliyorum', en: 'I am waiting', de: 'warten', trDict: 'beklemek' },
          seit: { tr: 'beri / süredir', en: 'for / since', trDict: 'beri' },
          minuten: { tr: 'dakikalar', en: 'minutes', de: 'die Minute' },
        },
      },
    ],
  },
  {
    id: 'elf',
    word: 'elf',
    sentences: [
      {
        id: 'elf-1',
        targetWord: 'elf',
        german: 'Der Zug fährt um elf Uhr ab.',
        germanWithBlank: 'Der Zug fährt um ___ Uhr ab.',
        translationTR: 'Tren saat on birde kalkıyor.',
        translationEN: 'The train departs at eleven o\'clock.',
        glossary: {
          zug: { tr: 'tren', en: 'train', de: 'der Zug' },
          fährt: { tr: 'gidiyor / kalkıyor', en: 'departs', de: 'fahren', trDict: 'gitmek' },
          ab: { tr: '(ayrılmak - önek)', en: 'off / away' },
        },
      },
    ],
  },
  {
    id: 'zwölf',
    word: 'zwölf',
    sentences: [
      {
        id: 'zwölf-1',
        targetWord: 'zwölf',
        german: 'Es ist zwölf Uhr mittags.',
        germanWithBlank: 'Es ist ___ Uhr mittags.',
        translationTR: 'Öğle saati on iki.',
        translationEN: 'It is twelve o\'clock noon.',
        glossary: {
          uhr: { tr: 'saat', en: 'o\'clock', de: 'die Uhr' },
          mittags: { tr: 'öğleyin', en: 'at noon', de: 'der Mittag' },
        },
      },
    ],
  },
  {
    id: 'dreizehn',
    word: 'dreizehn',
    sentences: [
      {
        id: 'dreizehn-1',
        targetWord: 'dreizehn',
        german: 'Das Mädchen ist dreizehn Jahre alt.',
        germanWithBlank: 'Das Mädchen ist ___ Jahre alt.',
        translationTR: 'Kız çocuğu on üç yaşında.',
        translationEN: 'The girl is thirteen years old.',
        glossary: {
          mädchen: { tr: 'kız çocuğu', en: 'girl', de: 'das Mädchen' },
          jahre: { tr: 'yıl / yaşında', en: 'years', de: 'das Jahr' },
          alt: { tr: 'yaşında', en: 'old' },
        },
      },
    ],
  },
  {
    id: 'vierzehn',
    word: 'vierzehn',
    sentences: [
      {
        id: 'vierzehn-1',
        targetWord: 'vierzehn',
        german: 'Die Ferien dauern vierzehn Tage.',
        germanWithBlank: 'Die Ferien dauern ___ Tage.',
        translationTR: 'Tatil on dört gün sürer.',
        translationEN: 'The holidays last fourteen days.',
        glossary: {
          ferien: { tr: 'tatil', en: 'holidays', de: 'die Ferien' },
          dauern: { tr: 'sürer', en: 'last', trDict: 'sürmek' },
          tage: { tr: 'günler', en: 'days', de: 'der Tag' },
        },
      },
    ],
  },
  {
    id: 'fünfzehn',
    word: 'fünfzehn',
    sentences: [
      {
        id: 'fünfzehn-1',
        targetWord: 'fünfzehn',
        german: 'Ich brauche fünfzehn Minuten zu Fuß.',
        germanWithBlank: 'Ich brauche ___ Minuten zu Fuß.',
        translationTR: 'Yürüyerek on beş dakikam lazım.',
        translationEN: 'I need fifteen minutes on foot.',
        glossary: {
          brauche: { tr: 'ihtiyacım var', en: 'I need', de: 'brauchen', trDict: 'ihtiyaç duymak' },
          minuten: { tr: 'dakikalar', en: 'minutes', de: 'die Minute' },
          fuß: { tr: 'ayak / yürüyerek', en: 'foot / on foot', de: 'der Fuß' },
        },
      },
    ],
  },
  {
    id: 'sechzehn',
    word: 'sechzehn',
    sentences: [
      {
        id: 'sechzehn-1',
        targetWord: 'sechzehn',
        german: 'Sie ist sechzehn Jahre alt.',
        germanWithBlank: 'Sie ist ___ Jahre alt.',
        translationTR: 'O on altı yaşında.',
        translationEN: 'She is sixteen years old.',
        glossary: {
          jahre: { tr: 'yıl / yaşında', en: 'years', de: 'das Jahr' },
          alt: { tr: 'yaşında', en: 'old' },
        },
      },
    ],
  },
  {
    id: 'siebzehn',
    word: 'siebzehn',
    sentences: [
      {
        id: 'siebzehn-1',
        targetWord: 'siebzehn',
        german: 'Der Bus kommt um siebzehn Uhr.',
        germanWithBlank: 'Der Bus kommt um ___ Uhr.',
        translationTR: 'Otobüs saat on yedide geliyor.',
        translationEN: 'The bus comes at seventeen o\'clock.',
        glossary: {
          bus: { tr: 'otobüs', en: 'bus', de: 'der Bus' },
          kommt: { tr: 'geliyor', en: 'comes', de: 'kommen', trDict: 'gelmek' },
          uhr: { tr: 'saat', en: 'o\'clock', de: 'die Uhr' },
        },
      },
    ],
  },
  {
    id: 'achtzehn',
    word: 'achtzehn',
    sentences: [
      {
        id: 'achtzehn-1',
        targetWord: 'achtzehn',
        german: 'Mit achtzehn Jahren darf man Auto fahren.',
        germanWithBlank: 'Mit ___ Jahren darf man Auto fahren.',
        translationTR: 'On sekiz yaşında araba kullanabilirsin.',
        translationEN: 'At eighteen you are allowed to drive a car.',
        glossary: {
          jahren: { tr: 'yaşında', en: 'years old', de: 'das Jahr' },
          darf: { tr: 'izni var', en: 'is allowed to', de: 'dürfen', trDict: 'izni olmak' },
          auto: { tr: 'araba', en: 'car', de: 'das Auto' },
          fahren: { tr: 'sürmek / gitmek', en: 'to drive', trDict: 'sürmek' },
        },
      },
    ],
  },
  {
    id: 'neunzehn',
    word: 'neunzehn',
    sentences: [
      {
        id: 'neunzehn-1',
        targetWord: 'neunzehn',
        german: 'Es sind neunzehn Studenten in der Klasse.',
        germanWithBlank: 'Es sind ___ Studenten in der Klasse.',
        translationTR: 'Sınıfta on dokuz öğrenci var.',
        translationEN: 'There are nineteen students in the class.',
        glossary: {
          studenten: { tr: 'öğrenciler', en: 'students', de: 'der Student' },
          klasse: { tr: 'sınıf', en: 'class', de: 'die Klasse' },
        },
      },
    ],
  },
  {
    id: 'zwanzig',
    word: 'zwanzig',
    sentences: [
      {
        id: 'zwanzig-1',
        targetWord: 'zwanzig',
        german: 'Das Buch kostet zwanzig Euro.',
        germanWithBlank: 'Das Buch kostet ___ Euro.',
        translationTR: 'Kitap yirmi Euro tutuyor.',
        translationEN: 'The book costs twenty euros.',
        glossary: {
          buch: { tr: 'kitap', en: 'book', de: 'das Buch' },
          kostet: { tr: 'tutuyor / fiyatı', en: 'costs', de: 'kosten', trDict: 'mal olmak' },
          euro: { tr: 'euro', en: 'euro', de: 'der Euro' },
        },
      },
    ],
  },
  {
    id: 'dreißig',
    word: 'dreißig',
    sentences: [
      {
        id: 'dreißig-1',
        targetWord: 'dreißig',
        german: 'Er ist dreißig Jahre alt.',
        germanWithBlank: 'Er ist ___ Jahre alt.',
        translationTR: 'O otuz yaşında.',
        translationEN: 'He is thirty years old.',
        glossary: {
          jahre: { tr: 'yıl / yaşında', en: 'years', de: 'das Jahr' },
          alt: { tr: 'yaşında', en: 'old' },
        },
      },
    ],
  },
  {
    id: 'vierzig',
    word: 'vierzig',
    sentences: [
      {
        id: 'vierzig-1',
        targetWord: 'vierzig',
        german: 'Die Stadt ist vierzig Kilometer entfernt.',
        germanWithBlank: 'Die Stadt ist ___ Kilometer entfernt.',
        translationTR: 'Şehir kırk kilometre uzakta.',
        translationEN: 'The city is forty kilometers away.',
        glossary: {
          stadt: { tr: 'şehir', en: 'city', de: 'die Stadt' },
          kilometer: { tr: 'kilometre', en: 'kilometers' },
          entfernt: { tr: 'uzakta', en: 'away / distant' },
        },
      },
    ],
  },
  {
    id: 'fünfzig',
    word: 'fünfzig',
    sentences: [
      {
        id: 'fünfzig-1',
        targetWord: 'fünfzig',
        german: 'Das Hotel kostet fünfzig Euro pro Nacht.',
        germanWithBlank: 'Das Hotel kostet ___ Euro pro Nacht.',
        translationTR: 'Otel gecelik elli Euro tutuyor.',
        translationEN: 'The hotel costs fifty euros per night.',
        glossary: {
          hotel: { tr: 'otel', en: 'hotel', de: 'das Hotel' },
          kostet: { tr: 'tutuyor', en: 'costs', de: 'kosten', trDict: 'mal olmak' },
          nacht: { tr: 'gece', en: 'night', de: 'die Nacht' },
        },
      },
    ],
  },
  {
    id: 'sechzig',
    word: 'sechzig',
    sentences: [
      {
        id: 'sechzig-1',
        targetWord: 'sechzig',
        german: 'Mein Onkel ist sechzig Jahre alt.',
        germanWithBlank: 'Mein Onkel ist ___ Jahre alt.',
        translationTR: 'Amcam altmış yaşında.',
        translationEN: 'My uncle is sixty years old.',
        glossary: {
          onkel: { tr: 'amca / dayı', en: 'uncle', de: 'der Onkel' },
          jahre: { tr: 'yıl / yaşında', en: 'years', de: 'das Jahr' },
          alt: { tr: 'yaşında', en: 'old' },
        },
      },
    ],
  },
  {
    id: 'siebzig',
    word: 'siebzig',
    sentences: [
      {
        id: 'siebzig-1',
        targetWord: 'siebzig',
        german: 'Er fährt siebzig Kilometer pro Stunde.',
        germanWithBlank: 'Er fährt ___ Kilometer pro Stunde.',
        translationTR: 'Saatte yetmiş kilometre gidiyor.',
        translationEN: 'He drives seventy kilometers per hour.',
        glossary: {
          fährt: { tr: 'gidiyor', en: 'drives', de: 'fahren', trDict: 'gitmek / sürmek' },
          kilometer: { tr: 'kilometre', en: 'kilometers' },
          stunde: { tr: 'saat', en: 'hour', de: 'die Stunde' },
        },
      },
    ],
  },
  {
    id: 'achtzig',
    word: 'achtzig',
    sentences: [
      {
        id: 'achtzig-1',
        targetWord: 'achtzig',
        german: 'Meine Großmutter ist achtzig Jahre alt.',
        germanWithBlank: 'Meine Großmutter ist ___ Jahre alt.',
        translationTR: 'Büyükannem seksen yaşında.',
        translationEN: 'My grandmother is eighty years old.',
        glossary: {
          großmutter: { tr: 'büyükanne', en: 'grandmother', de: 'die Großmutter' },
          jahre: { tr: 'yıl / yaşında', en: 'years', de: 'das Jahr' },
          alt: { tr: 'yaşında', en: 'old' },
        },
      },
    ],
  },
  {
    id: 'neunzig',
    word: 'neunzig',
    sentences: [
      {
        id: 'neunzig-1',
        targetWord: 'neunzig',
        german: 'Der Kurs kostet neunzig Euro.',
        germanWithBlank: 'Der Kurs kostet ___ Euro.',
        translationTR: 'Kurs doksan Euro tutuyor.',
        translationEN: 'The course costs ninety euros.',
        glossary: {
          kurs: { tr: 'kurs', en: 'course', de: 'der Kurs' },
          kostet: { tr: 'tutuyor', en: 'costs', de: 'kosten', trDict: 'mal olmak' },
        },
      },
    ],
  },
  {
    id: 'hundert',
    word: 'hundert',
    sentences: [
      {
        id: 'hundert-1',
        targetWord: 'hundert',
        german: 'Das Ticket kostet hundert Euro.',
        germanWithBlank: 'Das Ticket kostet ___ Euro.',
        translationTR: 'Bilet yüz Euro tutuyor.',
        translationEN: 'The ticket costs one hundred euros.',
        glossary: {
          ticket: { tr: 'bilet', en: 'ticket', de: 'das Ticket' },
          kostet: { tr: 'tutuyor', en: 'costs', de: 'kosten', trDict: 'mal olmak' },
        },
      },
    ],
  },
  {
    id: 'tausend',
    word: 'tausend',
    sentences: [
      {
        id: 'tausend-1',
        targetWord: 'tausend',
        german: 'Das Auto kostet zehntausend Euro.',
        germanWithBlank: 'Das Auto kostet zehn___ Euro.',
        translationTR: 'Araba on bin Euro tutuyor.',
        translationEN: 'The car costs ten thousand euros.',
        glossary: {
          auto: { tr: 'araba', en: 'car', de: 'das Auto' },
          kostet: { tr: 'tutuyor', en: 'costs', de: 'kosten', trDict: 'mal olmak' },
        },
      },
    ],
  },
  {
    id: 'sagen',
    word: 'sagen',
    tr: 'söylemek / demek',
    sentences: [
      {
        id: 'sagen-1',
        targetWord: 'sagen',
        german: 'Kannst du das noch einmal sagen?',
        germanWithBlank: 'Kannst du das noch einmal ___?',
        translationTR: 'Bunu bir daha söyleyebilir misin?',
        translationEN: 'Can you say that once more?',
        glossary: {
          kannst: { tr: 'yapabilirsin', en: 'can you', de: 'können', trDict: 'yapabilmek' },
          noch: { tr: 'daha / henüz', en: 'still / yet' },
          einmal: { tr: 'bir kez / bir daha', en: 'once / once more' },
        },
      },
    ],
  },
  {
    id: 'duschen',
    word: 'duschen',
    tr: 'duş almak',
    sentences: [
      {
        id: 'duschen-1',
        targetWord: 'duschen',
        german: 'Ich dusche jeden Morgen.',
        germanWithBlank: 'Ich ___ jeden Morgen.',
        translationTR: 'Her sabah duş alıyorum.',
        translationEN: 'I shower every morning.',
        glossary: {
          jeden: { tr: 'her', en: 'every' },
          morgen: { tr: 'sabah', en: 'morning', de: 'der Morgen' },
        },
      },
    ],
  },
  {
    id: 'lachen',
    word: 'lachen',
    tr: 'gülmek',
    sentences: [
      {
        id: 'lachen-1',
        targetWord: 'lachen',
        german: 'Das Kind lacht laut.',
        germanWithBlank: 'Das Kind ___ laut.',
        translationTR: 'Çocuk yüksek sesle gülüyor.',
        translationEN: 'The child laughs loudly.',
        glossary: {
          kind: { tr: 'çocuk', en: 'child', de: 'das Kind' },
          laut: { tr: 'yüksek sesle / gürültülü', en: 'loudly / loud' },
        },
      },
    ],
  },
  {
    id: 'holen',
    word: 'holen',
    tr: 'gidip getirmek / almak',
    sentences: [
      {
        id: 'holen-1',
        targetWord: 'holen',
        german: 'Kannst du mir ein Glas Wasser holen?',
        germanWithBlank: 'Kannst du mir ein Glas Wasser ___?',
        translationTR: 'Bana bir bardak su getirebilir misin?',
        translationEN: 'Can you get me a glass of water?',
        glossary: {
          kannst: { tr: 'yapabilirsin', en: 'can you', de: 'können', trDict: 'yapabilmek' },
          glas: { tr: 'bardak', en: 'glass', de: 'das Glas' },
          wasser: { tr: 'su', en: 'water', de: 'das Wasser' },
        },
      },
    ],
  },
  {
    id: 'verkaufen',
    word: 'verkaufen',
    tr: 'satmak',
    sentences: [
      {
        id: 'verkaufen-1',
        targetWord: 'verkaufen',
        german: 'Er möchte sein Auto verkaufen.',
        germanWithBlank: 'Er möchte sein Auto ___.',
        translationTR: 'Arabasını satmak istiyor.',
        translationEN: 'He wants to sell his car.',
        glossary: {
          möchte: { tr: 'istiyor', en: 'wants to', de: 'möchten', trDict: 'istemek' },
          auto: { tr: 'araba', en: 'car', de: 'das Auto' },
        },
      },
    ],
  },
  {
    id: 'verdienen',
    word: 'verdienen',
    tr: 'kazanmak / hak etmek',
    sentences: [
      {
        id: 'verdienen-1',
        targetWord: 'verdienen',
        german: 'Sie verdient gut bei ihrer neuen Arbeit.',
        germanWithBlank: 'Sie ___ gut bei ihrer neuen Arbeit.',
        translationTR: 'Yeni işinde iyi para kazanıyor.',
        translationEN: 'She earns well at her new job.',
        glossary: {
          gut: { tr: 'iyi', en: 'well / good' },
          arbeit: { tr: 'iş', en: 'work / job', de: 'die Arbeit' },
          neuen: { tr: 'yeni', en: 'new', de: 'neu' },
        },
      },
    ],
  },
  {
    id: 'wandern',
    word: 'wandern',
    tr: 'doğa yürüyüşü yapmak',
    sentences: [
      {
        id: 'wandern-1',
        targetWord: 'wandern',
        german: 'Wir wandern am Wochenende in den Bergen.',
        germanWithBlank: 'Wir ___ am Wochenende in den Bergen.',
        translationTR: 'Hafta sonu dağlarda yürüyüş yapıyoruz.',
        translationEN: 'We go hiking in the mountains on the weekend.',
        glossary: {
          wochenende: { tr: 'hafta sonu', en: 'weekend', de: 'das Wochenende' },
          bergen: { tr: 'dağlar', en: 'mountains', de: 'der Berg' },
        },
      },
    ],
  },
  {
    id: 'rauchen',
    word: 'rauchen',
    tr: 'sigara içmek',
    sentences: [
      {
        id: 'rauchen-1',
        targetWord: 'rauchen',
        german: 'Hier darf man nicht rauchen.',
        germanWithBlank: 'Hier darf man nicht ___.',
        translationTR: 'Burada sigara içmek yasak.',
        translationEN: 'Smoking is not allowed here.',
        glossary: {
          hier: { tr: 'burada', en: 'here' },
          darf: { tr: 'izni var', en: 'is allowed to', de: 'dürfen', trDict: 'izni olmak' },
          nicht: { tr: 'değil / hayır', en: 'not' },
        },
      },
    ],
  },
  {
    id: 'riechen',
    word: 'riechen',
    tr: 'koklamak / kokmak',
    sentences: [
      {
        id: 'riechen-1',
        targetWord: 'riechen',
        german: 'Die Blumen riechen sehr schön.',
        germanWithBlank: 'Die Blumen ___ sehr schön.',
        translationTR: 'Çiçekler çok güzel kokuyor.',
        translationEN: 'The flowers smell very nice.',
        glossary: {
          blumen: { tr: 'çiçekler', en: 'flowers', de: 'die Blume' },
          sehr: { tr: 'çok', en: 'very' },
          schön: { tr: 'güzel', en: 'nice / beautiful' },
        },
      },
    ],
  },
  {
    id: 'schließen',
    word: 'schließen',
    tr: 'kapatmak / kilitlemek',
    sentences: [
      {
        id: 'schließen-1',
        targetWord: 'schließen',
        german: 'Das Geschäft schließt um 20 Uhr.',
        germanWithBlank: 'Das Geschäft ___ um 20 Uhr.',
        translationTR: 'Dükkan saat 20\'de kapanıyor.',
        translationEN: 'The shop closes at 8 p.m.',
        glossary: {
          geschäft: { tr: 'dükkan / işyeri', en: 'shop / business', de: 'das Geschäft' },
          uhr: { tr: 'saat', en: 'o\'clock', de: 'die Uhr' },
        },
      },
    ],
  },
  {
    id: 'bedeuten',
    word: 'bedeuten',
    sentences: [
      {
        id: 'bedeuten-1',
        targetWord: 'bedeuten',
        german: 'Was bedeutet dieses Wort auf Deutsch?',
        germanWithBlank: 'Was ___ dieses Wort auf Deutsch?',
        translationTR: 'Bu kelime Almancada ne anlama geliyor?',
        translationEN: 'What does this word mean in German?',
        glossary: {
          was: { tr: 'ne', en: 'what' },
          wort: { tr: 'kelime', en: 'word', de: 'das Wort' },
          deutsch: { tr: 'Almanca', en: 'German' },
        },
      },
    ],
  },
  {
    id: 'besichtigen',
    word: 'besichtigen',
    tr: 'gezip görmek',
    sentences: [
      {
        id: 'besichtigen-1',
        targetWord: 'besichtigen',
        german: 'Wir möchten das Museum besichtigen.',
        germanWithBlank: 'Wir möchten das Museum ___.',
        translationTR: 'Müzeyi gezmek istiyoruz.',
        translationEN: 'We would like to visit the museum.',
        glossary: {
          möchten: { tr: 'istemek (礼貌)', en: 'would like to', trDict: 'istemek' },
          museum: { tr: 'müze', en: 'museum', de: 'das Museum' },
        },
      },
    ],
  },
  {
    id: 'aufhören',
    word: 'aufhören',
    sentences: [
      {
        id: 'aufhören-1',
        targetWord: 'aufhören',
        german: 'Hör bitte auf zu reden!',
        germanWithBlank: '___ bitte auf zu reden!',
        translationTR: 'Lütfen konuşmayı bırak!',
        translationEN: 'Please stop talking!',
        glossary: {
          bitte: { tr: 'lütfen', en: 'please' },
          reden: { tr: 'konuşmak', en: 'to talk', trDict: 'konuşmak' },
        },
      },
    ],
  },
  {
    id: 'gratulieren',
    word: 'gratulieren',
    tr: 'tebrik etmek',
    sentences: [
      {
        id: 'gratulieren-1',
        targetWord: 'gratulieren',
        german: 'Ich gratuliere dir zum Geburtstag!',
        germanWithBlank: 'Ich ___ dir zum Geburtstag!',
        translationTR: 'Seni doğum günün için tebrik ederim!',
        translationEN: 'I congratulate you on your birthday!',
        glossary: {
          dir: { tr: 'seni / sana', en: 'you (dative)', trDict: 'sen' },
          geburtstag: { tr: 'doğum günü', en: 'birthday', de: 'der Geburtstag' },
        },
      },
    ],
  },
  {
    id: 'grillen',
    word: 'grillen',
    sentences: [
      {
        id: 'grillen-1',
        targetWord: 'grillen',
        german: 'Wir grillen heute im Garten.',
        germanWithBlank: 'Wir ___ heute im Garten.',
        translationTR: 'Bugün bahçede mangal yapıyoruz.',
        translationEN: 'We are grilling in the garden today.',
        glossary: {
          heute: { tr: 'bugün', en: 'today' },
          garten: { tr: 'bahçe', en: 'garden', de: 'der Garten' },
        },
      },
    ],
  },
  {
    id: 'gewinnen',
    word: 'gewinnen',
    sentences: [
      {
        id: 'gewinnen-1',
        targetWord: 'gewinnen',
        german: 'Unser Team hat das Spiel gewonnen.',
        germanWithBlank: 'Unser Team hat das Spiel ___.',
        translationTR: 'Takımımız maçı kazandı.',
        translationEN: 'Our team won the game.',
        glossary: {
          team: { tr: 'takım', en: 'team' },
          spiel: { tr: 'oyun / maç', en: 'game / match', de: 'das Spiel' },
        },
      },
    ],
  },
  {
    id: 'fliegen',
    word: 'fliegen',
    sentences: [
      {
        id: 'fliegen-1',
        targetWord: 'fliegen',
        german: 'Ich fliege morgen nach Berlin.',
        germanWithBlank: 'Ich ___ morgen nach Berlin.',
        translationTR: 'Yarın Berlin\'e uçuyorum.',
        translationEN: 'I am flying to Berlin tomorrow.',
        glossary: {
          morgen: { tr: 'yarın', en: 'tomorrow' },
          nach: { tr: '-a/-e (yön)', en: 'to (direction)' },
        },
      },
    ],
  },
  {
    id: 'sich-freuen',
    word: 'sich freuen',
    tr: 'sevinmek',
    sentences: [
      {
        id: 'sich-freuen-1',
        targetWord: 'freuen',
        german: 'Ich freue mich auf den Urlaub.',
        germanWithBlank: 'Ich ___ mich auf den Urlaub.',
        translationTR: 'Tatile dört gözle bekliyorum.',
        translationEN: 'I am looking forward to the holiday.',
        glossary: {
          mich: { tr: 'kendimi (yansıma)', en: 'myself (reflexive)', trDict: 'ben' },
          auf: { tr: '... için sabırsızlanmak (freuen auf)', en: 'looking forward to' },
          urlaub: { tr: 'tatil', en: 'holiday / vacation', de: 'der Urlaub' },
        },
      },
    ],
  },
  {
    id: 'der-baum',
    word: 'der Baum',
    sentences: [
      {
        id: 'baum-1',
        targetWord: 'Baum',
        german: 'Im Garten steht ein großer Baum.',
        germanWithBlank: 'Im Garten steht ein großer ___.',
        translationTR: 'Bahçede büyük bir ağaç duruyor.',
        translationEN: 'There is a big tree in the garden.',
        glossary: {
          garten: { tr: 'bahçe', en: 'garden', de: 'der Garten' },
          steht: { tr: 'duruyor', en: 'stands / is standing', de: 'stehen', trDict: 'durmak' },
          großer: { tr: 'büyük', en: 'big / large', de: 'groß' },
        },
      },
    ],
  },
  {
    id: 'der-mensch',
    word: 'der Mensch',
    tr: 'insan',
    sentences: [
      {
        id: 'mensch-1',
        targetWord: 'Mensch',
        german: 'Der Mensch braucht Wasser zum Leben.',
        germanWithBlank: 'Der ___ braucht Wasser zum Leben.',
        translationTR: 'İnsanın yaşamak için suya ihtiyacı var.',
        translationEN: 'A person needs water to live.',
        glossary: {
          braucht: { tr: 'ihtiyacı var', en: 'needs', de: 'brauchen', trDict: 'ihtiyaç duymak' },
          wasser: { tr: 'su', en: 'water', de: 'das Wasser' },
          leben: { tr: 'yaşamak / hayat', en: 'to live / life', de: 'das Leben' },
        },
      },
    ],
  },
  {
    id: 'die-welt',
    word: 'die Welt',
    tr: 'dünya',
    sentences: [
      {
        id: 'welt-1',
        targetWord: 'Welt',
        german: 'Die Welt ist groß und schön.',
        germanWithBlank: 'Die ___ ist groß und schön.',
        translationTR: 'Dünya büyük ve güzel.',
        translationEN: 'The world is big and beautiful.',
        glossary: {
          groß: { tr: 'büyük', en: 'big / large' },
          schön: { tr: 'güzel', en: 'beautiful / nice' },
        },
      },
    ],
  },
  {
    id: 'die-hand',
    word: 'die Hand',
    sentences: [
      {
        id: 'hand-1',
        targetWord: 'Hand',
        german: 'Gib mir bitte deine Hand.',
        germanWithBlank: 'Gib mir bitte deine ___.',
        translationTR: 'Lütfen elini ver.',
        translationEN: 'Please give me your hand.',
        glossary: {
          gib: { tr: 'ver', en: 'give', de: 'geben', trDict: 'vermek' },
          mir: { tr: 'bana', en: 'me (dative)', trDict: 'ben' },
          bitte: { tr: 'lütfen', en: 'please' },
          deine: { tr: 'senin', en: 'your', de: 'dein' },
        },
      },
    ],
  },
  {
    id: 'der-plan',
    word: 'der Plan',
    sentences: [
      {
        id: 'plan-1',
        targetWord: 'Plan',
        german: 'Was ist der Plan für heute?',
        germanWithBlank: 'Was ist der ___ für heute?',
        translationTR: 'Bugün için plan ne?',
        translationEN: 'What is the plan for today?',
        glossary: {
          was: { tr: 'ne', en: 'what' },
          heute: { tr: 'bugün', en: 'today' },
          für: { tr: 'için', en: 'for' },
        },
      },
    ],
  },
  {
    id: 'der-platz',
    word: 'der Platz',
    tr: 'yer / meydan / koltuk',
    sentences: [
      {
        id: 'platz-1',
        targetWord: 'Platz',
        german: 'Gibt es noch einen freien Platz?',
        germanWithBlank: 'Gibt es noch einen freien ___?',
        translationTR: 'Hâlâ boş bir yer var mı?',
        translationEN: 'Is there still a free seat?',
        glossary: {
          gibt: { tr: 'var mı', en: 'is there', de: 'geben', trDict: 'var olmak' },
          noch: { tr: 'hâlâ / daha', en: 'still / yet' },
          freien: { tr: 'boş / serbest', en: 'free / available', de: 'frei' },
        },
      },
    ],
  },
  {
    id: 'die-prüfung',
    word: 'die Prüfung',
    tr: 'sınav',
    sentences: [
      {
        id: 'prüfung-1',
        targetWord: 'Prüfung',
        german: 'Morgen habe ich eine wichtige Prüfung.',
        germanWithBlank: 'Morgen habe ich eine wichtige ___.',
        translationTR: 'Yarın önemli bir sınavım var.',
        translationEN: 'Tomorrow I have an important exam.',
        glossary: {
          morgen: { tr: 'yarın', en: 'tomorrow' },
          wichtige: { tr: 'önemli', en: 'important', de: 'wichtig' },
        },
      },
    ],
  },
  {
    id: 'der-preis',
    word: 'der Preis',
    tr: 'fiyat / ödül',
    sentences: [
      {
        id: 'preis-1',
        targetWord: 'Preis',
        german: 'Was ist der Preis für das Zimmer?',
        germanWithBlank: 'Was ist der ___ für das Zimmer?',
        translationTR: 'Oda için fiyat nedir?',
        translationEN: 'What is the price for the room?',
        glossary: {
          was: { tr: 'ne', en: 'what' },
          zimmer: { tr: 'oda', en: 'room', de: 'das Zimmer' },
          für: { tr: 'için', en: 'for' },
        },
      },
    ],
  },
  {
    id: 'der-teil',
    word: 'der Teil',
    tr: 'bölüm / kısım',
    sentences: [
      {
        id: 'teil-1',
        targetWord: 'Teil',
        german: 'Das ist der schönste Teil der Stadt.',
        germanWithBlank: 'Das ist der schönste ___ der Stadt.',
        translationTR: 'Bu şehrin en güzel bölümü.',
        translationEN: 'This is the most beautiful part of the city.',
        glossary: {
          schönste: { tr: 'en güzel', en: 'most beautiful', de: 'schön' },
          stadt: { tr: 'şehir', en: 'city', de: 'die Stadt' },
        },
      },
    ],
  },
  {
    id: 'das-licht',
    word: 'das Licht',
    tr: 'ışık',
    sentences: [
      {
        id: 'licht-1',
        targetWord: 'Licht',
        german: 'Bitte mach das Licht an.',
        germanWithBlank: 'Bitte mach das ___ an.',
        translationTR: 'Lütfen ışığı aç.',
        translationEN: 'Please turn on the light.',
        glossary: {
          bitte: { tr: 'lütfen', en: 'please' },
          mach: { tr: 'yap / aç', en: 'make / turn on', de: 'machen', trDict: 'yapmak' },
          an: { tr: 'açık (anmachen = açmak)', en: 'on (anmachen = to turn on)' },
        },
      },
    ],
  },
  {
    id: 'die-möbel',
    word: 'die Möbel',
    tr: 'mobilya',
    sentences: [
      {
        id: 'möbel-1',
        targetWord: 'Möbel',
        german: 'Die Möbel in der neuen Wohnung sind sehr modern.',
        germanWithBlank: 'Die ___ in der neuen Wohnung sind sehr modern.',
        translationTR: 'Yeni dairenin mobilyaları çok modern.',
        translationEN: 'The furniture in the new apartment is very modern.',
        glossary: {
          wohnung: { tr: 'daire / konut', en: 'apartment', de: 'die Wohnung' },
          modern: { tr: 'modern', en: 'modern' },
          neuen: { tr: 'yeni', en: 'new', de: 'neu' },
        },
      },
    ],
  },
  {
    id: 'der-raum',
    word: 'der Raum',
    tr: 'oda / alan',
    sentences: [
      {
        id: 'raum-1',
        targetWord: 'Raum',
        german: 'Der Raum ist groß und hell.',
        germanWithBlank: 'Der ___ ist groß und hell.',
        translationTR: 'Oda büyük ve aydınlık.',
        translationEN: 'The room is big and bright.',
        glossary: {
          groß: { tr: 'büyük', en: 'big' },
          hell: { tr: 'aydınlık / açık renkli', en: 'bright / light' },
        },
      },
    ],
  },
  {
    id: 'die-sehenswürdigkeit',
    word: 'die Sehenswürdigkeit',
    sentences: [
      {
        id: 'sehenswürdigkeit-1',
        targetWord: 'Sehenswürdigkeit',
        german: 'Das Brandenburger Tor ist eine bekannte Sehenswürdigkeit.',
        germanWithBlank: 'Das Brandenburger Tor ist eine bekannte ___.',
        translationTR: 'Brandenburg Kapısı ünlü bir turistik yerdir.',
        translationEN: 'The Brandenburg Gate is a famous sight.',
        glossary: {
          bekannte: { tr: 'tanınmış / ünlü', en: 'famous / well-known', de: 'bekannt' },
          tor: { tr: 'kapı', en: 'gate', de: 'das Tor' },
        },
      },
    ],
  },
  {
    id: 'die-großmutter',
    word: 'die Großmutter',
    sentences: [
      {
        id: 'großmutter-1',
        targetWord: 'Großmutter',
        german: 'Meine Großmutter kocht sehr gut.',
        germanWithBlank: 'Meine ___ kocht sehr gut.',
        translationTR: 'Büyükannem çok iyi yemek yapıyor.',
        translationEN: 'My grandmother cooks very well.',
        glossary: {
          kocht: { tr: 'yemek yapıyor', en: 'cooks', de: 'kochen', trDict: 'yemek yapmak' },
          sehr: { tr: 'çok', en: 'very' },
          gut: { tr: 'iyi', en: 'well / good' },
        },
      },
    ],
  },
  {
    id: 'der-großvater',
    word: 'der Großvater',
    sentences: [
      {
        id: 'großvater-1',
        targetWord: 'Großvater',
        german: 'Mein Großvater liest gern Zeitung.',
        germanWithBlank: 'Mein ___ liest gern Zeitung.',
        translationTR: 'Büyükbabam gazete okumayı sever.',
        translationEN: 'My grandfather likes to read the newspaper.',
        glossary: {
          liest: { tr: 'okuyor', en: 'reads', de: 'lesen', trDict: 'okumak' },
          gern: { tr: 'severek / isteyerek', en: 'gladly / likes to' },
          zeitung: { tr: 'gazete', en: 'newspaper', de: 'die Zeitung' },
        },
      },
    ],
  },
  {
    id: 'die-großeltern',
    word: 'die Großeltern',
    sentences: [
      {
        id: 'großeltern-1',
        targetWord: 'Großeltern',
        german: 'Meine Großeltern wohnen auf dem Land.',
        germanWithBlank: 'Meine ___ wohnen auf dem Land.',
        translationTR: 'Büyükannem ve büyükbabam kırsal kesimde yaşıyor.',
        translationEN: 'My grandparents live in the countryside.',
        glossary: {
          wohnen: { tr: 'yaşıyor / oturuyor', en: 'live', de: 'wohnen', trDict: 'yaşamak' },
          land: { tr: 'kır / ülke', en: 'countryside / country', de: 'das Land' },
        },
      },
    ],
  },
  {
    id: 'der-glückwunsch',
    word: 'der Glückwunsch',
    tr: 'tebrik / iyi dilek',
    sentences: [
      {
        id: 'glückwunsch-1',
        targetWord: 'Glückwunsch',
        german: 'Herzlichen Glückwunsch zum Geburtstag!',
        germanWithBlank: 'Herzlichen ___ zum Geburtstag!',
        translationTR: 'Doğum günün kutlu olsun!',
        translationEN: 'Heartfelt congratulations on your birthday!',
        glossary: {
          herzlichen: { tr: 'içten / kalp dolu', en: 'heartfelt / sincere', de: 'herzlich' },
          geburtstag: { tr: 'doğum günü', en: 'birthday', de: 'der Geburtstag' },
        },
      },
    ],
  },
  {
    id: 'der-norden',
    word: 'der Norden',
    sentences: [
      {
        id: 'norden-1',
        targetWord: 'Norden',
        german: 'Hamburg liegt im Norden von Deutschland.',
        germanWithBlank: 'Hamburg liegt im ___ von Deutschland.',
        translationTR: 'Hamburg, Almanya\'nın kuzeyinde yer alıyor.',
        translationEN: 'Hamburg is located in the north of Germany.',
        glossary: {
          liegt: { tr: 'yer alıyor / bulunuyor', en: 'is located', de: 'liegen', trDict: 'yatmak / bulunmak' },
          deutschland: { tr: 'Almanya', en: 'Germany' },
        },
      },
    ],
  },
  {
    id: 'der-süden',
    word: 'der Süden',
    sentences: [
      {
        id: 'süden-1',
        targetWord: 'Süden',
        german: 'München liegt im Süden von Deutschland.',
        germanWithBlank: 'München liegt im ___ von Deutschland.',
        translationTR: 'Münih, Almanya\'nın güneyinde yer alıyor.',
        translationEN: 'Munich is located in the south of Germany.',
        glossary: {
          liegt: { tr: 'yer alıyor / bulunuyor', en: 'is located', de: 'liegen', trDict: 'yatmak / bulunmak' },
          deutschland: { tr: 'Almanya', en: 'Germany' },
        },
      },
    ],
  },
  {
    id: 'der-osten',
    word: 'der Osten',
    tr: 'doğu',
    sentences: [
      {
        id: 'osten-1',
        targetWord: 'Osten',
        german: 'Dresden liegt im Osten von Deutschland.',
        germanWithBlank: 'Dresden liegt im ___ von Deutschland.',
        translationTR: 'Dresden, Almanya\'nın doğusunda yer alıyor.',
        translationEN: 'Dresden is located in the east of Germany.',
        glossary: {
          liegt: { tr: 'yer alıyor / bulunuyor', en: 'is located', de: 'liegen', trDict: 'yatmak / bulunmak' },
          deutschland: { tr: 'Almanya', en: 'Germany' },
        },
      },
    ],
  },
  {
    id: 'der-westen',
    word: 'der Westen',
    sentences: [
      {
        id: 'westen-1',
        targetWord: 'Westen',
        german: 'Köln liegt im Westen von Deutschland.',
        germanWithBlank: 'Köln liegt im ___ von Deutschland.',
        translationTR: 'Köln, Almanya\'nın batısında yer alıyor.',
        translationEN: 'Cologne is located in the west of Germany.',
        glossary: {
          liegt: { tr: 'yer alıyor / bulunuyor', en: 'is located', de: 'liegen', trDict: 'yatmak / bulunmak' },
          deutschland: { tr: 'Almanya', en: 'Germany' },
        },
      },
    ],
  },
  {
    id: 'das-bild',
    word: 'das Bild',
    tr: 'resim',
    sentences: [
      {
        id: 'bild-1',
        targetWord: 'Bild',
        german: 'Das Bild hängt an der Wand.',
        germanWithBlank: 'Das ___ hängt an der Wand.',
        translationTR: 'Tablo duvarda asılı.',
        translationEN: 'The picture is hanging on the wall.',
        glossary: {
          hängt: { tr: 'asılı / asılıyor', en: 'hangs / is hanging', de: 'hängen', trDict: 'asmak' },
          wand: { tr: 'duvar', en: 'wall', de: 'die Wand' },
        },
      },
    ],
  },
  {
    id: 'die-lösung',
    word: 'die Lösung',
    tr: 'çözüm',
    sentences: [
      {
        id: 'lösung-1',
        targetWord: 'Lösung',
        german: 'Hast du die Lösung für das Problem?',
        germanWithBlank: 'Hast du die ___ für das Problem?',
        translationTR: 'Sorun için çözümün var mı?',
        translationEN: 'Do you have the solution to the problem?',
        glossary: {
          hast: { tr: 'var mı (sende)', en: 'do you have', de: 'haben', trDict: 'sahip olmak' },
          problem: { tr: 'sorun / problem', en: 'problem', de: 'das Problem' },
        },
      },
    ],
  },
  {
    id: 'die-gruppe',
    word: 'die Gruppe',
    tr: 'grup',
    sentences: [
      {
        id: 'gruppe-1',
        targetWord: 'Gruppe',
        german: 'Wir arbeiten in einer Gruppe.',
        germanWithBlank: 'Wir arbeiten in einer ___.',
        translationTR: 'Bir grup içinde çalışıyoruz.',
        translationEN: 'We are working in a group.',
        glossary: {
          arbeiten: { tr: 'çalışmak', en: 'to work', trDict: 'çalışmak' },
          einer: { tr: 'bir (dişil belirtisiz, yön hali)', en: 'a/an (feminine dative)', de: 'eine' },
        },
      },
    ],
  },
  {
    id: 'der-stock',
    word: 'der Stock',
    sentences: [
      {
        id: 'stock-1',
        targetWord: 'Stock',
        german: 'Das Büro ist im dritten Stock.',
        germanWithBlank: 'Das Büro ist im dritten ___.',
        translationTR: 'Ofis üçüncü katta.',
        translationEN: 'The office is on the third floor.',
        glossary: {
          büro: { tr: 'ofis / büro', en: 'office', de: 'das Büro' },
          dritten: { tr: 'üçüncü', en: 'third', de: 'dritte' },
        },
      },
    ],
  },
  {
    id: 'die-stelle',
    word: 'die Stelle',
    sentences: [
      {
        id: 'stelle-1',
        targetWord: 'Stelle',
        german: 'Ich suche eine Stelle als Lehrerin.',
        germanWithBlank: 'Ich suche eine ___ als Lehrerin.',
        translationTR: 'Öğretmen olarak bir iş arıyorum.',
        translationEN: 'I am looking for a position as a teacher.',
        glossary: {
          suche: { tr: 'arıyorum', en: 'I am looking for', de: 'suchen', trDict: 'aramak' },
          als: { tr: 'olarak', en: 'as' },
          lehrerin: { tr: 'öğretmen (kadın)', en: 'teacher (female)', de: 'die Lehrerin' },
        },
      },
    ],
  },
  {
    id: 'die-s-bahn',
    word: 'die S-Bahn',
    sentences: [
      {
        id: 's-bahn-1',
        targetWord: 'S-Bahn',
        german: 'Ich fahre mit der S-Bahn zur Arbeit.',
        germanWithBlank: 'Ich fahre mit der ___ zur Arbeit.',
        translationTR: 'İşe banliyö trenle gidiyorum.',
        translationEN: 'I go to work by S-Bahn.',
        glossary: {
          fahre: { tr: 'gidiyorum', en: 'I go / I travel', de: 'fahren', trDict: 'gitmek' },
          arbeit: { tr: 'iş', en: 'work', de: 'die Arbeit' },
        },
      },
    ],
  },
  {
    id: 'die-geschwister',
    word: 'die Geschwister',
    tr: 'kardeşler',
    sentences: [
      {
        id: 'geschwister-1',
        targetWord: 'Geschwister',
        german: 'Hast du Geschwister?',
        germanWithBlank: 'Hast du ___?',
        translationTR: 'Kardeşin var mı?',
        translationEN: 'Do you have siblings?',
        glossary: {
          hast: { tr: 'var mı (sende)', en: 'do you have', de: 'haben', trDict: 'sahip olmak' },
        },
      },
    ],
  },
  {
    id: 'das-studium',
    word: 'das Studium',
    sentences: [
      {
        id: 'studium-1',
        targetWord: 'Studium',
        german: 'Das Studium dauert drei Jahre.',
        germanWithBlank: 'Das ___ dauert drei Jahre.',
        translationTR: 'Üniversite eğitimi üç yıl sürer.',
        translationEN: 'The university studies last three years.',
        glossary: {
          dauert: { tr: 'sürer', en: 'lasts', de: 'dauern', trDict: 'sürmek' },
          jahre: { tr: 'yıllar', en: 'years', de: 'das Jahr' },
        },
      },
    ],
  },
  {
    id: 'das-gleis',
    word: 'das Gleis',
    tr: 'ray / peron hattı',
    sentences: [
      {
        id: 'gleis-1',
        targetWord: 'Gleis',
        german: 'Der Zug fährt auf Gleis fünf ab.',
        germanWithBlank: 'Der Zug fährt auf ___ fünf ab.',
        translationTR: 'Tren beş numaralı perondan kalkıyor.',
        translationEN: 'The train departs from platform five.',
        glossary: {
          zug: { tr: 'tren', en: 'train', de: 'der Zug' },
          fährt: { tr: 'gidiyor / kalkıyor', en: 'departs', de: 'fahren', trDict: 'gitmek' },
          ab: { tr: 'kalkıyor (önek)', en: 'off / departs' },
        },
      },
    ],
  },
  {
    id: 'die-rezeption',
    word: 'die Rezeption',
    tr: 'resepsiyon',
    sentences: [
      {
        id: 'rezeption-1',
        targetWord: 'Rezeption',
        german: 'Bitte melden Sie sich an der Rezeption an.',
        germanWithBlank: 'Bitte melden Sie sich an der ___ an.',
        translationTR: 'Lütfen resepsiyonda giriş yapın.',
        translationEN: 'Please check in at the reception.',
        glossary: {
          bitte: { tr: 'lütfen', en: 'please' },
          melden: { tr: 'bildirmek / kayıt yaptırmak', en: 'to register / check in', trDict: 'bildirmek' },
          sie: { tr: 'siz (resmi hitap)', en: 'you (formal)', de: 'Sie' },
        },
      },
    ],
  },
  {
    id: 'der-verkäufer',
    word: 'der Verkäufer',
    tr: 'satıcı',
    sentences: [
      {
        id: 'verkäufer-1',
        targetWord: 'Verkäufer',
        german: 'Der Verkäufer hilft mir bei der Auswahl.',
        germanWithBlank: 'Der ___ hilft mir bei der Auswahl.',
        translationTR: 'Satıcı seçim yapmamda yardımcı oluyor.',
        translationEN: 'The salesperson helps me with the selection.',
        glossary: {
          hilft: { tr: 'yardım ediyor', en: 'helps', de: 'helfen', trDict: 'yardım etmek' },
          mir: { tr: 'bana', en: 'me (dative)', trDict: 'ben' },
          auswahl: { tr: 'seçim / tercih', en: 'selection', de: 'die Auswahl' },
        },
      },
    ],
  },
  {
    id: 'die-hochzeit',
    word: 'die Hochzeit',
    tr: 'düğün',
    sentences: [
      {
        id: 'hochzeit-1',
        targetWord: 'Hochzeit',
        german: 'Die Hochzeit ist im nächsten Monat.',
        germanWithBlank: 'Die ___ ist im nächsten Monat.',
        translationTR: 'Düğün gelecek ay.',
        translationEN: 'The wedding is next month.',
        glossary: {
          nächsten: { tr: 'bir sonraki / gelecek', en: 'next', de: 'nächste' },
          monat: { tr: 'ay', en: 'month', de: 'der Monat' },
        },
      },
    ],
  },
  {
    id: 'die-hilfe',
    word: 'die Hilfe',
    tr: 'yardım',
    sentences: [
      {
        id: 'hilfe-1',
        targetWord: 'Hilfe',
        german: 'Danke für deine Hilfe!',
        germanWithBlank: 'Danke für deine ___!',
        translationTR: 'Yardımın için teşekkürler!',
        translationEN: 'Thank you for your help!',
        glossary: {
          danke: { tr: 'teşekkürler', en: 'thank you' },
          für: { tr: 'için', en: 'for' },
          deine: { tr: 'senin', en: 'your', de: 'dein' },
        },
      },
    ],
  },
  {
    id: 'das-ende',
    word: 'das Ende',
    tr: 'son',
    sentences: [
      {
        id: 'ende-1',
        targetWord: 'Ende',
        german: 'Am Ende des Films war ich sehr müde.',
        germanWithBlank: 'Am ___ des Films war ich sehr müde.',
        translationTR: 'Filmin sonunda çok yorgundum.',
        translationEN: 'At the end of the film I was very tired.',
        glossary: {
          films: { tr: 'filmin', en: 'of the film', de: 'der Film' },
          sehr: { tr: 'çok', en: 'very' },
          müde: { tr: 'yorgun', en: 'tired' },
        },
      },
    ],
  },
  {
    id: 'der-anruf',
    word: 'der Anruf',
    tr: 'telefon araması',
    sentences: [
      {
        id: 'anruf-1',
        targetWord: 'Anruf',
        german: 'Ich warte auf einen wichtigen Anruf.',
        germanWithBlank: 'Ich warte auf einen wichtigen ___.',
        translationTR: 'Önemli bir aranmayı bekliyorum.',
        translationEN: 'I am waiting for an important call.',
        glossary: {
          warte: { tr: 'bekliyorum', en: 'I am waiting', de: 'warten', trDict: 'beklemek' },
          auf: { tr: 'beklemek için (warten auf)', en: 'for (waiting for)' },
          wichtigen: { tr: 'önemli', en: 'important', de: 'wichtig' },
        },
      },
    ],
  },
  {
    id: 'der-bahnsteig',
    word: 'der Bahnsteig',
    tr: 'peron',
    sentences: [
      {
        id: 'bahnsteig-1',
        targetWord: 'Bahnsteig',
        german: 'Der Zug kommt auf Bahnsteig drei an.',
        germanWithBlank: 'Der Zug kommt auf ___ drei an.',
        translationTR: 'Tren üç numaralı perona geliyor.',
        translationEN: 'The train arrives at platform three.',
        glossary: {
          zug: { tr: 'tren', en: 'train', de: 'der Zug' },
          kommt: { tr: 'geliyor', en: 'comes / arrives', de: 'kommen', trDict: 'gelmek' },
          an: { tr: 'varıyor (ankommen = varmak)', en: 'arrives (ankommen)' },
        },
      },
    ],
  },
  {
    id: 'der-herr',
    word: 'der Herr',
    tr: 'bey / bay',
    sentences: [
      {
        id: 'herr-1',
        targetWord: 'Herr',
        german: 'Guten Morgen, Herr Müller!',
        germanWithBlank: 'Guten Morgen, ___ Müller!',
        translationTR: 'Günaydın, Bay Müller!',
        translationEN: 'Good morning, Mr. Müller!',
        glossary: {
          guten: { tr: 'iyi (selamlama)', en: 'good', de: 'gut' },
          morgen: { tr: 'sabah', en: 'morning', de: 'der Morgen' },
        },
      },
    ],
  },
  {
    id: 'die-heimat',
    word: 'die Heimat',
    tr: 'memleket / vatan',
    sentences: [
      {
        id: 'heimat-1',
        targetWord: 'Heimat',
        german: 'Deutschland ist meine neue Heimat.',
        germanWithBlank: 'Deutschland ist meine neue ___.',
        translationTR: 'Almanya benim yeni yurdum.',
        translationEN: 'Germany is my new home country.',
        glossary: {
          deutschland: { tr: 'Almanya', en: 'Germany' },
          neue: { tr: 'yeni', en: 'new', de: 'neu' },
        },
      },
    ],
  },
  {
    id: 'der-wochentag',
    word: 'der Wochentag',
    sentences: [
      {
        id: 'wochentag-1',
        targetWord: 'Wochentag',
        german: 'Montag ist ein Wochentag.',
        germanWithBlank: 'Montag ist ein ___.',
        translationTR: 'Pazartesi bir hafta içi günüdür.',
        translationEN: 'Monday is a weekday.',
        glossary: {
          montag: { tr: 'pazartesi', en: 'Monday', de: 'der Montag' },
        },
      },
    ],
  },
  {
    id: 'der-buchstabe',
    word: 'der Buchstabe',
    sentences: [
      {
        id: 'buchstabe-1',
        targetWord: 'Buchstabe',
        german: 'Das Alphabet hat sechsundzwanzig Buchstaben.',
        germanWithBlank: 'Das Alphabet hat sechsundzwanzig ___.',
        translationTR: 'Alfabenin yirmi altı harfi vardır.',
        translationEN: 'The alphabet has twenty-six letters.',
        glossary: {
          alphabet: { tr: 'alfabe', en: 'alphabet' },
          sechsundzwanzig: { tr: 'yirmi altı', en: 'twenty-six' },
        },
      },
    ],
  },
  {
    id: 'das-dorf',
    word: 'das Dorf',
    tr: 'köy',
    sentences: [
      {
        id: 'dorf-1',
        targetWord: 'Dorf',
        german: 'Wir wohnen in einem kleinen Dorf.',
        germanWithBlank: 'Wir wohnen in einem kleinen ___.',
        translationTR: 'Küçük bir köyde yaşıyoruz.',
        translationEN: 'We live in a small village.',
        glossary: {
          wohnen: { tr: 'yaşıyoruz', en: 'we live', de: 'wohnen', trDict: 'yaşamak' },
          kleinen: { tr: 'küçük', en: 'small', de: 'klein' },
        },
      },
    ],
  },
  {
    id: 'das-beispiel',
    word: 'das Beispiel',
    tr: 'örnek',
    sentences: [
      {
        id: 'beispiel-1',
        targetWord: 'Beispiel',
        german: 'Können Sie mir ein Beispiel geben?',
        germanWithBlank: 'Können Sie mir ein ___ geben?',
        translationTR: 'Bana bir örnek verebilir misiniz?',
        translationEN: 'Can you give me an example?',
        glossary: {
          können: { tr: 'yapabilmek', en: 'to be able to / can', trDict: 'yapabilmek' },
          geben: { tr: 'vermek', en: 'to give', trDict: 'vermek' },
          mir: { tr: 'bana', en: 'me (dative)', trDict: 'ben' },
        },
      },
    ],
  },
  {
    id: 'der-moment',
    word: 'der Moment',
    tr: 'an',
    sentences: [
      {
        id: 'moment-1',
        targetWord: 'Moment',
        german: 'Einen Moment bitte, ich bin gleich da.',
        germanWithBlank: 'Einen ___ bitte, ich bin gleich da.',
        translationTR: 'Bir an lütfen, hemen geleceğim.',
        translationEN: 'One moment please, I\'ll be right there.',
        glossary: {
          bitte: { tr: 'lütfen', en: 'please' },
          gleich: { tr: 'hemen / az sonra', en: 'right away / soon' },
          da: { tr: 'orada / burada', en: 'there / here' },
        },
      },
    ],
  },
  {
    id: 'die-ordnung',
    word: 'die Ordnung',
    tr: 'düzen / nizam',
    sentences: [
      {
        id: 'ordnung-1',
        targetWord: 'Ordnung',
        german: 'Hier ist alles in Ordnung.',
        germanWithBlank: 'Hier ist alles in ___.',
        translationTR: 'Burada her şey yolunda.',
        translationEN: 'Everything is in order here.',
        glossary: {
          hier: { tr: 'burada', en: 'here' },
          alles: { tr: 'her şey', en: 'everything' },
        },
      },
    ],
  },
  {
    id: 'die-bahn',
    word: 'die Bahn',
    tr: 'tren / demiryolu',
    sentences: [
      {
        id: 'bahn-1',
        targetWord: 'Bahn',
        german: 'Ich fahre mit der Bahn nach Hamburg.',
        germanWithBlank: 'Ich fahre mit der ___ nach Hamburg.',
        translationTR: 'Trenle Hamburg\'a gidiyorum.',
        translationEN: 'I am travelling by train to Hamburg.',
        glossary: {
          fahre: { tr: 'gidiyorum', en: 'I travel / go', de: 'fahren', trDict: 'gitmek' },
          nach: { tr: '-a/-e (şehirler için)', en: 'to (cities)' },
        },
      },
    ],
  },
  {
    id: 'das-feuer',
    word: 'das Feuer',
    tr: 'ateş / yangın',
    sentences: [
      {
        id: 'feuer-1',
        targetWord: 'Feuer',
        german: 'Bitte machen Sie hier kein Feuer.',
        germanWithBlank: 'Bitte machen Sie hier kein ___.',
        translationTR: 'Lütfen burada ateş yakmayın.',
        translationEN: 'Please do not make a fire here.',
        glossary: {
          bitte: { tr: 'lütfen', en: 'please' },
          hier: { tr: 'burada', en: 'here' },
          kein: { tr: 'hiç / hayır (isim önü)', en: 'no / not any', trDict: 'hiç' },
        },
      },
    ],
  },
  {
    id: 'das-ergebnis',
    word: 'das Ergebnis',
    sentences: [
      {
        id: 'ergebnis-1',
        targetWord: 'Ergebnis',
        german: 'Das Ergebnis der Prüfung war gut.',
        germanWithBlank: 'Das ___ der Prüfung war gut.',
        translationTR: 'Sınavın sonucu iyiydi.',
        translationEN: 'The result of the exam was good.',
        glossary: {
          prüfung: { tr: 'sınav', en: 'exam', de: 'die Prüfung' },
          gut: { tr: 'iyi', en: 'good' },
        },
      },
    ],
  },
  {
    id: 'die-autobahn',
    word: 'die Autobahn',
    tr: 'otoyol',
    sentences: [
      {
        id: 'autobahn-1',
        targetWord: 'Autobahn',
        german: 'Wir fahren auf der Autobahn nach München.',
        germanWithBlank: 'Wir fahren auf der ___ nach München.',
        translationTR: 'Otoyolla Münih\'e gidiyoruz.',
        translationEN: 'We are driving on the motorway to Munich.',
        glossary: {
          fahren: { tr: 'gitmek / sürmek', en: 'to drive / travel', trDict: 'gitmek' },
          nach: { tr: '-a/-e (şehirler için)', en: 'to (cities)' },
        },
      },
    ],
  },
  {
    id: 'der-anfang',
    word: 'der Anfang',
    tr: 'başlangıç',
    sentences: [
      {
        id: 'anfang-1',
        targetWord: 'Anfang',
        german: 'Am Anfang war das Deutsch schwer.',
        germanWithBlank: 'Am ___ war das Deutsch schwer.',
        translationTR: 'Başlangıçta Almanca zordu.',
        translationEN: 'At the beginning, German was difficult.',
        glossary: {
          deutsch: { tr: 'Almanca', en: 'German' },
          schwer: { tr: 'zor / ağır', en: 'difficult / heavy' },
        },
      },
    ],
  },
  {
    id: 'glücklich',
    word: 'glücklich',
    tr: 'mutlu',
    sentences: [
      {
        id: 'glücklich-1',
        targetWord: 'glücklich',
        german: 'Ich bin sehr glücklich mit meiner Arbeit.',
        germanWithBlank: 'Ich bin sehr ___ mit meiner Arbeit.',
        translationTR: 'İşimden çok mutluyum.',
        translationEN: 'I am very happy with my work.',
        glossary: {
          sehr: { tr: 'çok', en: 'very' },
          arbeit: { tr: 'iş', en: 'work', de: 'die Arbeit' },
        },
      },
    ],
  },
  {
    id: 'gültig',
    word: 'gültig',
    tr: 'geçerli',
    sentences: [
      {
        id: 'gültig-1',
        targetWord: 'gültig',
        german: 'Mein Pass ist noch ein Jahr gültig.',
        germanWithBlank: 'Mein Pass ist noch ein Jahr ___.',
        translationTR: 'Pasaportum hâlâ bir yıl geçerli.',
        translationEN: 'My passport is still valid for one year.',
        glossary: {
          pass: { tr: 'pasaport', en: 'passport', de: 'der Pass' },
          noch: { tr: 'hâlâ / daha', en: 'still' },
          jahr: { tr: 'yıl', en: 'year', de: 'das Jahr' },
        },
      },
    ],
  },
  {
    id: 'günstig',
    word: 'günstig',
    tr: 'uygun / ucuz',
    sentences: [
      {
        id: 'günstig-1',
        targetWord: 'günstig',
        german: 'Das Hotel ist günstig und zentral gelegen.',
        germanWithBlank: 'Das Hotel ist ___ und zentral gelegen.',
        translationTR: 'Otel uygun fiyatlı ve merkezi konumda.',
        translationEN: 'The hotel is affordable and centrally located.',
        glossary: {
          hotel: { tr: 'otel', en: 'hotel', de: 'das Hotel' },
          zentral: { tr: 'merkezi', en: 'central' },
          gelegen: { tr: 'konumlanmış', en: 'located', de: 'liegen' },
        },
      },
    ],
  },
  {
    id: 'ledig',
    word: 'ledig',
    tr: 'bekar',
    sentences: [
      {
        id: 'ledig-1',
        targetWord: 'ledig',
        german: 'Im Formular steht: ledig, verheiratet oder geschieden.',
        germanWithBlank: 'Im Formular steht: ___, verheiratet oder geschieden.',
        translationTR: 'Formda yazıyor: bekar, evli ya da boşanmış.',
        translationEN: 'The form says: single, married or divorced.',
        glossary: {
          formular: { tr: 'form', en: 'form', de: 'das Formular' },
          verheiratet: { tr: 'evli', en: 'married' },
          geschieden: { tr: 'boşanmış', en: 'divorced' },
        },
      },
    ],
  },
  {
    id: 'männlich',
    word: 'männlich',
    tr: 'erkek (cinsiyet)',
    sentences: [
      {
        id: 'männlich-1',
        targetWord: 'männlich',
        german: 'Bitte kreuzen Sie an: männlich oder weiblich.',
        germanWithBlank: 'Bitte kreuzen Sie an: ___ oder weiblich.',
        translationTR: 'Lütfen işaretleyin: erkek mi yoksa kadın mı.',
        translationEN: 'Please mark: male or female.',
        glossary: {
          bitte: { tr: 'lütfen', en: 'please' },
          kreuzen: { tr: 'işaretlemek', en: 'to mark / check', trDict: 'işaretlemek' },
          weiblich: { tr: 'kadın / dişil', en: 'female' },
        },
      },
    ],
  },
  {
    id: 'weiblich',
    word: 'weiblich',
    tr: 'kadın (cinsiyet)',
    sentences: [
      {
        id: 'weiblich-1',
        targetWord: 'weiblich',
        german: 'Sie kreuzt das Feld weiblich an.',
        germanWithBlank: 'Sie kreuzt das Feld ___ an.',
        translationTR: 'Kadın kutucuğunu işaretliyor.',
        translationEN: 'She checks the female box.',
        glossary: {
          kreuzt: { tr: 'işaretliyor', en: 'checks / marks', de: 'kreuzen', trDict: 'işaretlemek' },
          feld: { tr: 'alan / kutu', en: 'field / box', de: 'das Feld' },
        },
      },
    ],
  },
  {
    id: 'arbeitslos',
    word: 'arbeitslos',
    tr: 'işsiz',
    sentences: [
      {
        id: 'arbeitslos-1',
        targetWord: 'arbeitslos',
        german: 'Er ist seit drei Monaten arbeitslos.',
        germanWithBlank: 'Er ist seit drei Monaten ___.',
        translationTR: 'Üç aydır işsiz.',
        translationEN: 'He has been unemployed for three months.',
        glossary: {
          seit: { tr: 'beri / süredir', en: 'for / since', trDict: 'beri' },
          monaten: { tr: 'aylardır', en: 'months', de: 'der Monat' },
        },
      },
    ],
  },
  {
    id: 'willkommen',
    word: 'willkommen',
    tr: 'hoş geldiniz',
    sentences: [
      {
        id: 'willkommen-1',
        targetWord: 'willkommen',
        german: 'Herzlich willkommen in Deutschland!',
        germanWithBlank: 'Herzlich ___ in Deutschland!',
        translationTR: 'Almanya\'ya hoş geldiniz!',
        translationEN: 'A warm welcome to Germany!',
        glossary: {
          herzlich: { tr: 'içtenlikle / sıcakça', en: 'warmly / heartily' },
          deutschland: { tr: 'Almanya', en: 'Germany' },
        },
      },
    ],
  },
  {
    id: 'mehr',
    word: 'mehr',
    tr: 'daha fazla',
    sentences: [
      {
        id: 'mehr-1',
        targetWord: 'mehr',
        german: 'Ich brauche mehr Zeit für diese Aufgabe.',
        germanWithBlank: 'Ich brauche ___ Zeit für diese Aufgabe.',
        translationTR: 'Bu görev için daha fazla zamanım gerekiyor.',
        translationEN: 'I need more time for this task.',
        glossary: {
          brauche: { tr: 'ihtiyacım var', en: 'I need', de: 'brauchen', trDict: 'ihtiyaç duymak' },
          zeit: { tr: 'zaman', en: 'time', de: 'die Zeit' },
          aufgabe: { tr: 'görev / ödev', en: 'task', de: 'die Aufgabe' },
        },
      },
    ],
  },
  {
    id: 'nur',
    word: 'nur',
    tr: 'sadece',
    sentences: [
      {
        id: 'nur-1',
        targetWord: 'nur',
        german: 'Ich habe nur fünf Euro dabei.',
        germanWithBlank: 'Ich habe ___ fünf Euro dabei.',
        translationTR: 'Yanımda sadece beş Euro var.',
        translationEN: 'I only have five euros with me.',
        glossary: {
          habe: { tr: 'var (bende)', en: 'I have', de: 'haben', trDict: 'sahip olmak' },
          euro: { tr: 'euro', en: 'euro', de: 'der Euro' },
          dabei: { tr: 'yanımda / beraberimde', en: 'with me' },
        },
      },
    ],
  },
  {
    id: 'wann',
    word: 'wann',
    tr: 'ne zaman',
    sentences: [
      {
        id: 'wann-1',
        targetWord: 'wann',
        german: 'Wann kommt der nächste Zug?',
        germanWithBlank: '___ kommt der nächste Zug?',
        translationTR: 'Bir sonraki tren ne zaman geliyor?',
        translationEN: 'When does the next train come?',
        glossary: {
          nächste: { tr: 'bir sonraki / en yakın', en: 'next', de: 'nächste' },
          zug: { tr: 'tren', en: 'train', de: 'der Zug' },
          kommt: { tr: 'geliyor', en: 'comes', de: 'kommen', trDict: 'gelmek' },
        },
      },
    ],
  },
  {
    id: 'seit',
    word: 'seit',
    tr: '-den beri',
    sentences: [
      {
        id: 'seit-1',
        targetWord: 'seit',
        german: 'Ich lerne seit zwei Jahren Deutsch.',
        germanWithBlank: 'Ich lerne ___ zwei Jahren Deutsch.',
        translationTR: 'İki yıldır Almanca öğreniyorum.',
        translationEN: 'I have been learning German for two years.',
        glossary: {
          lerne: { tr: 'öğreniyorum', en: 'I am learning', de: 'lernen', trDict: 'öğrenmek' },
          jahren: { tr: 'yıllardır', en: 'for years', de: 'das Jahr' },
          deutsch: { tr: 'Almanca', en: 'German' },
        },
      },
    ],
  },
  {
    id: 'welche',
    word: 'welche',
    sentences: [
      {
        id: 'welche-1',
        targetWord: 'welche',
        german: 'Welche Sprachen sprichst du?',
        germanWithBlank: '___ Sprachen sprichst du?',
        translationTR: 'Hangi dilleri konuşuyorsun?',
        translationEN: 'Which languages do you speak?',
        glossary: {
          sprachen: { tr: 'diller', en: 'languages', de: 'die Sprache' },
          sprichst: { tr: 'konuşuyorsun', en: 'you speak', de: 'sprechen', trDict: 'konuşmak' },
        },
      },
    ],
  },
  {
    id: 'wer',
    word: 'wer',
    tr: 'kim',
    sentences: [
      {
        id: 'wer-1',
        targetWord: 'wer',
        german: 'Wer ist das?',
        germanWithBlank: '___ ist das?',
        translationTR: 'Bu kim?',
        translationEN: 'Who is that?',
        glossary: {
          das: { tr: 'bu / o', en: 'this / that' },
        },
      },
    ],
  },
  {
    id: 'was',
    word: 'was',
    tr: 'ne',
    sentences: [
      {
        id: 'was-1',
        targetWord: 'was',
        german: 'Was machst du heute Abend?',
        germanWithBlank: '___ machst du heute Abend?',
        translationTR: 'Bu akşam ne yapıyorsun?',
        translationEN: 'What are you doing this evening?',
        glossary: {
          machst: { tr: 'yapıyorsun', en: 'you do / are doing', de: 'machen', trDict: 'yapmak' },
          heute: { tr: 'bugün', en: 'today' },
          abend: { tr: 'akşam', en: 'evening', de: 'der Abend' },
        },
      },
    ],
  },
  {
    id: 'normal',
    word: 'normal',
    tr: 'normal',
    sentences: [
      {
        id: 'normal-1',
        targetWord: 'normal',
        german: 'Das ist ganz normal.',
        germanWithBlank: 'Das ist ganz ___.',
        translationTR: 'Bu oldukça normal.',
        translationEN: 'That is completely normal.',
        glossary: {
          ganz: { tr: 'tamamen / oldukça', en: 'completely / quite' },
        },
      },
    ],
  },
  {
    id: 'später',
    word: 'später',
    sentences: [
      {
        id: 'später-1',
        targetWord: 'später',
        german: 'Wir sehen uns später.',
        germanWithBlank: 'Wir sehen uns ___.',
        translationTR: 'Sonra görüşürüz.',
        translationEN: 'We\'ll see each other later.',
        glossary: {
          sehen: { tr: 'görmek', en: 'to see', trDict: 'görmek' },
          uns: { tr: 'birbirimizi', en: 'each other / ourselves', trDict: 'biz' },
        },
      },
    ],
  },
  {
    id: 'zurück',
    word: 'zurück',
    sentences: [
      {
        id: 'zurück-1',
        targetWord: 'zurück',
        german: 'Ich komme morgen zurück.',
        germanWithBlank: 'Ich komme morgen ___.',
        translationTR: 'Yarın geri döneceğim.',
        translationEN: 'I am coming back tomorrow.',
        glossary: {
          komme: { tr: 'geliyorum / döneceğim', en: 'I come / return', de: 'kommen', trDict: 'gelmek' },
          morgen: { tr: 'yarın', en: 'tomorrow' },
        },
      },
    ],
  },
  {
    id: 'wunderbar',
    word: 'wunderbar',
    sentences: [
      {
        id: 'wunderbar-1',
        targetWord: 'wunderbar',
        german: 'Das Essen war wunderbar!',
        germanWithBlank: 'Das Essen war ___!',
        translationTR: 'Yemek harikaydı!',
        translationEN: 'The food was wonderful!',
        glossary: {
          essen: { tr: 'yemek', en: 'food / meal', de: 'das Essen' },
        },
      },
    ],
  },
  {
    id: 'hallo',
    word: 'hallo',
    tr: 'merhaba',
    sentences: [
      {
        id: 'hallo-1',
        targetWord: 'hallo',
        german: 'Hallo! Wie geht es dir heute?',
        germanWithBlank: '___! Wie geht es dir heute?',
        translationTR: 'Merhaba! Bugün nasılsın?',
        translationEN: 'Hello! How are you today?',
        glossary: {
          geht: { tr: 'gidiyor / nasıl gidiyor', en: 'goes / how are you', de: 'gehen', trDict: 'gitmek' },
          heute: { tr: 'bugün', en: 'today' },
          dir: { tr: 'sana / senin', en: 'you (dative)', trDict: 'sen' },
        },
      },
    ],
  },
  {
    id: 'die-zeitung',
    word: 'die Zeitung',
    tr: 'gazete',
    sentences: [
      {
        id: 'zeitung-1',
        targetWord: 'Zeitung',
        german: 'Ich lese jeden Morgen die Zeitung.',
        germanWithBlank: 'Ich lese jeden Morgen die ___.',
        translationTR: 'Her sabah gazete okuyorum.',
        translationEN: 'I read the newspaper every morning.',
        glossary: {
          lese: { tr: 'okuyorum', en: 'I read', de: 'lesen', trDict: 'okumak' },
          jeden: { tr: 'her', en: 'every' },
          morgen: { tr: 'sabah', en: 'morning' },
        },
      },
    ],
  },
];
