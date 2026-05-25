import { CharacterType } from '../utils/storage';

export { CharacterType };

export const CHARACTER_EMOJIS: Record<CharacterType, string> = {
  erkek: '👨',
  kadin: '👩',
  cesit: '🧑',
};

export type NPCReaction = 'pleased' | 'uncertain' | 'confused' | 'disappointed';

export interface DialogFeedback {
  type: 'correct' | 'partial' | 'wrong';
  npcReaction: NPCReaction;
  hint?: string;
  allowRetry?: boolean;
}

export interface DialogChoice {
  text: string;
  reply: string;
  coins: number;
  isCorrect: boolean;  // Explicit correct/wrong flag
  feedback?: DialogFeedback;  // Detailed NPC reaction and guidance
}

export interface DialogScript {
  opening: string[];
  choices: DialogChoice[];
}

export interface Building {
  id: string;
  name: string;
  nameTR: string;
  icon: string;
  color: string;
  bgColor: string;
  npcName: string;
  npcEmoji: string;
  dialog: DialogScript;
  active?: boolean;
}

export interface Neighborhood {
  id: string;
  name: string;
  nameTR: string;
  icon: string;
  color: string;
  bgColor: string;
  description: string;
  buildingIds: string[];
}

// ─── Neighborhoods ────────────────────────────────────────────────────────────

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    id: 'behoerden',
    name: 'Behördenviertel',
    nameTR: 'Resmi Mahalle',
    icon: '🏛️',
    color: '#4A4A8A',
    bgColor: '#F3F3FF',
    description: 'Offizielle Behörden und Ämter',
    buildingIds: ['rathaus', 'postamt', 'auslaenderbehoerde', 'polizei', 'standesamt', 'arbeitsamt'],
  },
  {
    id: 'gesundheit',
    name: 'Gesundheitsviertel',
    nameTR: 'Sağlık Mahallesi',
    icon: '🏥',
    color: '#C0392B',
    bgColor: '#FFF5F5',
    description: 'Ärzte, Kliniken und Apotheken',
    buildingIds: ['arztpraxis', 'krankenhaus', 'krankenversicherung', 'apotheke', 'zahnarzt'],
  },
  {
    id: 'markt',
    name: 'Marktstraße',
    nameTR: 'Çarşı',
    icon: '🛍️',
    color: '#C97C2E',
    bgColor: '#FFF8EE',
    description: 'Einkaufen, Essen und Dienstleistungen',
    buildingIds: ['baeckerei', 'supermarkt', 'cafe', 'friseur', 'buchhandlung', 'blumenladen', 'autowerkstatt', 'kiosk'],
  },
  {
    id: 'wohnen',
    name: 'Wohnviertel',
    nameTR: 'Yaşam Mahallesi',
    icon: '🏡',
    color: '#1A9E6E',
    bgColor: '#F0FFF8',
    description: 'Alltag, Nachbarn und Freizeit',
    buildingIds: ['nachbarhaus', 'bahnhof', 'spielplatz', 'feuerwehr', 'tankstelle'],
  },
  {
    id: 'bildung',
    name: 'Bildung & Kultur',
    nameTR: 'Eğitim & Kültür',
    icon: '📚',
    color: '#3B7DD8',
    bgColor: '#EEF5FF',
    description: 'Bibliothek, Museum und Sprachkurse',
    buildingIds: ['bibliothek', 'museum', 'sprachschule', 'restaurant', 'marktplatz', 'kirche'],
  },
];

// ─── Buildings ────────────────────────────────────────────────────────────────

export const BUILDINGS: Building[] = [

  // ── Behördenviertel ──────────────────────────────────────────────────────

  {
    id: 'rathaus',
    name: 'Rathaus',
    nameTR: 'Belediye',
    icon: '🏛️',
    color: '#4A4A8A',
    bgColor: '#F3F3FF',
    npcName: 'Herr Schulz',
    npcEmoji: '👨‍💼',
    active: true,
    dialog: {
      opening: [
        'Guten Morgen! Haben Sie einen Termin?',
        'Womit kann ich Ihnen behilflich sein?',
      ],
      choices: [
        {
          text: 'Ich möchte mich anmelden. Ich bin neu in der Stadt.',
          reply: 'Herzlich willkommen! Für die Anmeldung benötige ich Ihren Reisepass und Ihre neue Adresse. Das ist die häufigste Aufgabe hier.',
          coins: 25,
          isCorrect: true,
          feedback: {
            type: 'correct',
            npcReaction: 'pleased',
          },
        },
        {
          text: 'Ich brauche eine Bescheinigung.',
          reply: 'Ah ja, eine Bescheinigung — das ist möglich. Aber: Welche Art? Meldebescheinigung oder Einkommensbescheinigung? Bitte sei spezifischer.',
          coins: 12,
          isCorrect: false,
          feedback: {
            type: 'partial',
            npcReaction: 'uncertain',
            hint: 'Das ist eine gute Frage, aber du brauchst zuerst dich anmelden. Das ist der erste Schritt!',
            allowRetry: true,
          },
        },
        {
          text: 'Wann ist die Öffnungszeit?',
          reply: 'Das ist eine gute Frage, aber ich denke, du brauchst zuerst den wichtigsten Service: die Anmeldung!',
          coins: 3,
          isCorrect: false,
          feedback: {
            type: 'wrong',
            npcReaction: 'confused',
            hint: 'Du bist neu in der Stadt — was brauchst du zuerst im Rathaus? Anmeldung! Versuche es nochmal.',
            allowRetry: true,
          },
        },
      ],
    },
  },

  {
    id: 'postamt',
    name: 'Postamt',
    nameTR: 'Postane',
    icon: '📮',
    color: '#E8A000',
    bgColor: '#FFFBEE',
    npcName: 'Frau Müller',
    npcEmoji: '👩‍💼',
    active: true,
    dialog: {
      opening: [
        'Guten Tag! Was kann ich für Sie tun?',
        'Möchten Sie ein Paket aufgeben oder abholen?',
      ],
      choices: [
        {
          text: 'Ich möchte dieses Paket nach Istanbul schicken.',
          reply: 'Nach Istanbul? Das dauert etwa 5 Werktage. Ich fülle das Formular aus. Ihr Name bitte?',
          coins: 20,
          correct: true,
        },
        {
          text: 'Ich möchte eine Briefmarke kaufen.',
          reply: 'Eine Briefmarke für Deutschland kostet 0,85 Euro. Hier, bitte schön!',
          coins: 10,
        },
        {
          text: 'Wo ist der Briefkasten?',
          reply: 'Der Briefkasten ist direkt vor dem Eingang, auf der linken Seite.',
          coins: 5,
        },
      ],
    },
  },

  {
    id: 'auslaenderbehoerde',
    name: 'Ausländerbehörde',
    nameTR: 'Yabancılar Şubesi',
    icon: '🪪',
    color: '#5C3D8F',
    bgColor: '#F5F0FF',
    npcName: 'Frau Wagner',
    npcEmoji: '👩‍💼',
    active: true,
    dialog: {
      opening: [
        'Guten Morgen. Haben Sie einen Termin?',
        'Bitte nehmen Sie Platz und halten Sie Ihre Unterlagen bereit.',
      ],
      choices: [
        {
          text: 'Ja, ich habe einen Termin zur Verlängerung meiner Aufenthaltserlaubnis.',
          reply: 'Gut. Ich benötige Ihren Pass, Ihren aktuellen Aufenthaltstitel und Ihren Arbeitsvertrag. Haben Sie alles dabei?',
          coins: 30,
          correct: true,
        },
        {
          text: 'Ich möchte meinen Aufenthaltstitel in eine Niederlassungserlaubnis umwandeln.',
          reply: 'Dafür müssen Sie mindestens 5 Jahre in Deutschland gelebt haben und ausreichend Deutschkenntnisse nachweisen.',
          coins: 20,
        },
        {
          text: 'Mein Visum läuft in 2 Wochen ab. Was soll ich tun?',
          reply: 'Das ist dringend! Sie müssen sofort einen Antrag auf Verlängerung stellen. Ich gebe Ihnen die notwendigen Formulare.',
          coins: 15,
        },
      ],
    },
  },

  {
    id: 'polizei',
    name: 'Polizeiwache',
    nameTR: 'Karakol',
    icon: '🚔',
    color: '#1A3A6A',
    bgColor: '#EEF2FF',
    npcName: 'Beamtin Schneider',
    npcEmoji: '👮‍♀️',
    active: false,
    dialog: { opening: [], choices: [] },
  },

  {
    id: 'standesamt',
    name: 'Standesamt',
    nameTR: 'Nüfus Müdürlüğü',
    icon: '📋',
    color: '#4A4A8A',
    bgColor: '#F3F3FF',
    npcName: 'Herr Fischer',
    npcEmoji: '👨‍💼',
    active: false,
    dialog: { opening: [], choices: [] },
  },

  {
    id: 'arbeitsamt',
    name: 'Arbeitsamt',
    nameTR: 'İş Kur',
    icon: '💼',
    color: '#2C5F8A',
    bgColor: '#EEF5FF',
    npcName: 'Frau Bauer',
    npcEmoji: '👩‍💼',
    active: false,
    dialog: { opening: [], choices: [] },
  },

  // ── Gesundheitsviertel ───────────────────────────────────────────────────

  {
    id: 'arztpraxis',
    name: 'Arztpraxis',
    nameTR: 'Doktor Muayenesi',
    icon: '🩺',
    color: '#C0392B',
    bgColor: '#FFF5F5',
    npcName: 'Dr. Schmidt',
    npcEmoji: '👨‍⚕️',
    active: true,
    dialog: {
      opening: [
        'Guten Tag! Was fehlt Ihnen?',
        'Bitte beschreiben Sie Ihre Beschwerden.',
      ],
      choices: [
        {
          text: 'Ich habe Kopfschmerzen und Fieber seit zwei Tagen.',
          reply: 'Das klingt nach einer Erkältung. Ich verschreibe Ihnen etwas. Ruhen Sie sich aus und trinken Sie viel Wasser.',
          coins: 20,
          correct: true,
        },
        {
          text: 'Mir ist schwindelig und ich bin müde.',
          reply: 'Haben Sie heute gegessen? Ich messe kurz Ihren Blutdruck. Bitte setzen Sie sich.',
          coins: 12,
        },
        {
          text: 'Ich brauche eine Krankmeldung für die Arbeit.',
          reply: 'Ich schaue mir das an. Wie lange sind Sie schon krank? Seit wann haben Sie die Beschwerden?',
          coins: 8,
        },
      ],
    },
  },

  {
    id: 'krankenhaus',
    name: 'Krankenhaus',
    nameTR: 'Hastane',
    icon: '🏥',
    color: '#E63946',
    bgColor: '#FFF0F0',
    npcName: 'Schwester Maria',
    npcEmoji: '👩‍⚕️',
    active: true,
    dialog: {
      opening: [
        'Notaufnahme — was ist Ihr Anliegen?',
        'Sind Sie der Patient oder begleiten Sie jemanden?',
      ],
      choices: [
        {
          text: 'Ich bin der Patient. Ich habe starke Bauchschmerzen.',
          reply: 'Wie lange haben Sie die Schmerzen schon? Bitte kommen Sie mit, ich bringe Sie sofort zu einem Arzt.',
          coins: 20,
          correct: true,
        },
        {
          text: 'Ich hatte einen Unfall — mein Arm tut sehr weh.',
          reply: 'Zeigen Sie mir bitte Ihren Arm. Wir machen sofort ein Röntgenbild. Setzen Sie sich bitte hier hin.',
          coins: 15,
        },
        {
          text: 'Ich begleite meinen Freund. Er spricht kein Deutsch.',
          reply: 'Kein Problem! Sie können dolmetschen. Kommen Sie bitte beide mit ins Zimmer.',
          coins: 10,
        },
      ],
    },
  },

  {
    id: 'krankenversicherung',
    name: 'Krankenkasse',
    nameTR: 'Sağlık Sigortası',
    icon: '🏢',
    color: '#2E86AB',
    bgColor: '#EEF8FF',
    npcName: 'Herr Hoffmann',
    npcEmoji: '👨‍💼',
    active: false,
    dialog: { opening: [], choices: [] },
  },

  {
    id: 'apotheke',
    name: 'Apotheke',
    nameTR: 'Eczane',
    icon: '💊',
    color: '#C0392B',
    bgColor: '#FFF5F5',
    npcName: 'Apothekerin Petra',
    npcEmoji: '👩‍⚕️',
    active: false,
    dialog: { opening: [], choices: [] },
  },

  {
    id: 'zahnarzt',
    name: 'Zahnarzt',
    nameTR: 'Diş Hekimi',
    icon: '🦷',
    color: '#4A9E8A',
    bgColor: '#F0FFFC',
    npcName: 'Dr. Klein',
    npcEmoji: '🧑‍⚕️',
    active: false,
    dialog: { opening: [], choices: [] },
  },

  // ── Marktstraße ──────────────────────────────────────────────────────────

  {
    id: 'baeckerei',
    name: 'Bäckerei',
    nameTR: 'Fırın',
    icon: '🥐',
    color: '#C97C2E',
    bgColor: '#FFF8EE',
    npcName: 'Bäcker Hans',
    npcEmoji: '👨‍🍳',
    active: true,
    dialog: {
      opening: [
        'Guten Morgen! Herzlich willkommen in unserer Bäckerei.',
        'Wir haben heute frische Brötchen, Brot und leckere Kuchen.',
        'Was darf es sein?',
      ],
      choices: [
        {
          text: 'Ich möchte drei Brötchen, bitte.',
          reply: 'Sehr gerne! Drei Brötchen — das macht 1,50 Euro. Guten Appetit!',
          coins: 15,
          correct: true,
        },
        {
          text: 'Haben Sie Schwarzbrot?',
          reply: 'Ja natürlich! Das Schwarzbrot ist frisch gebacken. Es kostet 2,80 Euro.',
          coins: 10,
        },
        {
          text: 'Nichts, danke.',
          reply: 'Kein Problem! Einen schönen Tag noch!',
          coins: 3,
        },
      ],
    },
  },

  {
    id: 'supermarkt',
    name: 'Supermarkt',
    nameTR: 'Süpermarket',
    icon: '🛒',
    color: '#2E8B57',
    bgColor: '#F0FFF4',
    npcName: 'Kassierer Tom',
    npcEmoji: '🧑‍💼',
    active: true,
    dialog: {
      opening: [
        'Hallo! Alles gefunden?',
        'Haben Sie eine Kundenkarte?',
      ],
      choices: [
        {
          text: 'Ja, alles gefunden. Nein, keine Kundenkarte.',
          reply: 'Kein Problem! Das macht zusammen 12,40 Euro. Bar oder Karte?',
          coins: 15,
          correct: true,
        },
        {
          text: 'Wo finde ich die Milch?',
          reply: 'Die Milch finden Sie in Gang 3, links neben den Joghurts.',
          coins: 8,
        },
        {
          text: 'Haben Sie Tüten?',
          reply: 'Ja, wir haben Papiertüten für 0,10 Euro und Plastiktüten für 0,25 Euro.',
          coins: 5,
        },
      ],
    },
  },

  {
    id: 'cafe',
    name: 'Café',
    nameTR: 'Kafe',
    icon: '☕',
    color: '#6F4E37',
    bgColor: '#FFF8F0',
    npcName: 'Kellnerin Anna',
    npcEmoji: '👩‍🍳',
    active: true,
    dialog: {
      opening: [
        'Willkommen im Café Sonnenschein!',
        'Darf ich Ihnen die Speisekarte bringen?',
      ],
      choices: [
        {
          text: 'Ja, bitte. Und einen Kaffee schon mal, bitte.',
          reply: 'Natürlich! Möchten Sie Milch oder Zucker dazu? Wir haben auch frischen Kuchen.',
          coins: 12,
          correct: true,
        },
        {
          text: 'Ich hätte gerne ein Stück Kuchen.',
          reply: 'Heute haben wir Apfelkuchen und Schokoladentorte. Was nehmen Sie?',
          coins: 10,
        },
        {
          text: 'Haben Sie WLAN?',
          reply: 'Ja! Das Passwort ist "Sonnenschein2024". Viel Spaß!',
          coins: 5,
        },
      ],
    },
  },

  {
    id: 'friseur',
    name: 'Friseur',
    nameTR: 'Kuaför',
    icon: '✂️',
    color: '#8E44AD',
    bgColor: '#F9F0FF',
    npcName: 'Friseurin Lena',
    npcEmoji: '💇‍♀️',
    active: false,
    dialog: { opening: [], choices: [] },
  },

  {
    id: 'buchhandlung',
    name: 'Buchhandlung',
    nameTR: 'Kitapçı',
    icon: '📖',
    color: '#5D4037',
    bgColor: '#FFF8F5',
    npcName: 'Buchhändler Max',
    npcEmoji: '🧑‍💼',
    active: false,
    dialog: { opening: [], choices: [] },
  },

  {
    id: 'blumenladen',
    name: 'Blumenladen',
    nameTR: 'Çiçekçi',
    icon: '🌸',
    color: '#E91E8C',
    bgColor: '#FFF0F8',
    npcName: 'Floristin Rosa',
    npcEmoji: '👩',
    active: false,
    dialog: { opening: [], choices: [] },
  },

  {
    id: 'autowerkstatt',
    name: 'Autowerkstatt',
    nameTR: 'Araba Tamircisi',
    icon: '🔧',
    color: '#455A64',
    bgColor: '#F5F7F8',
    npcName: 'Mechaniker Kurt',
    npcEmoji: '👨‍🔧',
    active: false,
    dialog: { opening: [], choices: [] },
  },

  {
    id: 'kiosk',
    name: 'Kiosk',
    nameTR: 'Büfe',
    icon: '🗞️',
    color: '#E67E22',
    bgColor: '#FFF5E6',
    npcName: 'Kioskbesitzer Ali',
    npcEmoji: '🧑',
    active: false,
    dialog: { opening: [], choices: [] },
  },

  // ── Wohnviertel ──────────────────────────────────────────────────────────

  {
    id: 'nachbarhaus',
    name: 'Nachbarhaus',
    nameTR: 'Komşu Evi',
    icon: '🏡',
    color: '#1A9E6E',
    bgColor: '#F0FFF8',
    npcName: 'Nachbarin Petra',
    npcEmoji: '👩',
    active: true,
    dialog: {
      opening: [
        'Oh, hallo! Sie sind neu hier, oder?',
        'Ich bin Petra, Ihre Nachbarin aus der zweiten Etage. Schön, Sie kennenzulernen!',
      ],
      choices: [
        {
          text: 'Hallo Petra! Ich bin neu eingezogen. Freut mich, Sie kennenzulernen!',
          reply: 'Wie schön! Wenn Sie Fragen haben oder etwas brauchen — klopfen Sie einfach. Die Nachbarschaft ist sehr nett hier.',
          coins: 15,
          correct: true,
        },
        {
          text: 'Gibt es in der Nähe einen guten Supermarkt?',
          reply: 'Ja! Der REWE ist nur 5 Minuten zu Fuß. Gehen Sie die Hauptstraße entlang, dann links.',
          coins: 10,
        },
        {
          text: 'Wie ist die Müllabfuhr hier?',
          reply: 'Restmüll kommt dienstags, Altpapier jeden zweiten Freitag. Die Tonnen stehen im Hinterhof.',
          coins: 8,
        },
      ],
    },
  },

  {
    id: 'bahnhof',
    name: 'Bahnhof',
    nameTR: 'Tren İstasyonu',
    icon: '🚂',
    color: '#C0392B',
    bgColor: '#FFF5F5',
    npcName: 'Schaffner Klaus',
    npcEmoji: '👨‍✈️',
    active: true,
    dialog: {
      opening: [
        'Guten Tag! Wohin möchten Sie fahren?',
        'Wir haben stündliche Verbindungen nach München und Frankfurt.',
      ],
      choices: [
        {
          text: 'Eine Fahrkarte nach München, bitte. Einfach.',
          reply: 'Einfach nach München — das kostet 39 Euro. Wann möchten Sie fahren?',
          coins: 18,
          correct: true,
        },
        {
          text: 'Wann fährt der nächste Zug nach Berlin?',
          reply: 'Der nächste Zug nach Berlin fährt um 14:32 Uhr von Gleis 7.',
          coins: 10,
        },
        {
          text: 'Gibt es eine Ermäßigung für Studenten?',
          reply: 'Ja! Mit einer gültigen Studentencard bekommen Sie 25% Rabatt.',
          coins: 12,
        },
      ],
    },
  },

  {
    id: 'spielplatz',
    name: 'Spielplatz',
    nameTR: 'Oyun Parkı',
    icon: '🛝',
    color: '#F39C12',
    bgColor: '#FFFBEE',
    npcName: 'Nachbar Stefan',
    npcEmoji: '👨',
    active: false,
    dialog: { opening: [], choices: [] },
  },

  {
    id: 'feuerwehr',
    name: 'Feuerwehr',
    nameTR: 'İtfaiye',
    icon: '🚒',
    color: '#E74C3C',
    bgColor: '#FFF5F5',
    npcName: 'Feuerwehrmann Ralf',
    npcEmoji: '👨‍🚒',
    active: false,
    dialog: { opening: [], choices: [] },
  },

  {
    id: 'tankstelle',
    name: 'Tankstelle',
    nameTR: 'Benzin İstasyonu',
    icon: '⛽',
    color: '#2C3E50',
    bgColor: '#F5F6F7',
    npcName: 'Tankwart Jens',
    npcEmoji: '🧑',
    active: false,
    dialog: { opening: [], choices: [] },
  },

  // ── Bildung & Kultur ─────────────────────────────────────────────────────

  {
    id: 'bibliothek',
    name: 'Bibliothek',
    nameTR: 'Kütüphane',
    icon: '📚',
    color: '#3B7DD8',
    bgColor: '#EEF5FF',
    npcName: 'Bibliothekarin Hanna',
    npcEmoji: '👩‍🏫',
    active: true,
    dialog: {
      opening: [
        'Willkommen in der Stadtbibliothek!',
        'Haben Sie einen Bibliotheksausweis? Wir haben über 50.000 Bücher und freies WLAN.',
      ],
      choices: [
        {
          text: 'Nein, ich möchte einen Ausweis beantragen.',
          reply: 'Gerne! Ich brauche Ihren Personalausweis oder Reisepass. Der Ausweis ist kostenlos und gilt ein Jahr.',
          coins: 15,
          correct: true,
        },
        {
          text: 'Ich suche Bücher zum Deutschlernen.',
          reply: 'Die Sprachlernmaterialien finden Sie in Reihe 4, links von der Treppe. Darf ich Ihnen etwas empfehlen?',
          coins: 12,
        },
        {
          text: 'Gibt es hier auch Veranstaltungen?',
          reply: 'Ja! Jeden Dienstag haben wir Lesekreis und freitags einen Deutschkurs für Anfänger. Alles kostenlos!',
          coins: 10,
        },
      ],
    },
  },

  {
    id: 'museum',
    name: 'Museum',
    nameTR: 'Müze',
    icon: '🏛️',
    color: '#7D6B4A',
    bgColor: '#FFF9F0',
    npcName: 'Museumswächter Otto',
    npcEmoji: '👴',
    active: false,
    dialog: { opening: [], choices: [] },
  },

  {
    id: 'sprachschule',
    name: 'Sprachschule',
    nameTR: 'Dil Okulu',
    icon: '🎓',
    color: '#3B5BDB',
    bgColor: '#EEF1FF',
    npcName: 'Lehrerin Frau Koch',
    npcEmoji: '👩‍🏫',
    active: false,
    dialog: { opening: [], choices: [] },
  },

  {
    id: 'restaurant',
    name: 'Restaurant',
    nameTR: 'Restoran',
    icon: '🍽️',
    color: '#8E3A12',
    bgColor: '#FFF5F0',
    npcName: 'Kellner Marco',
    npcEmoji: '🧑‍🍳',
    active: false,
    dialog: { opening: [], choices: [] },
  },

  {
    id: 'marktplatz',
    name: 'Marktplatz',
    nameTR: 'Pazar Yeri',
    icon: '🥦',
    color: '#2E7D32',
    bgColor: '#F0FFF0',
    npcName: 'Händlerin Gabi',
    npcEmoji: '👩',
    active: false,
    dialog: { opening: [], choices: [] },
  },

  {
    id: 'kirche',
    name: 'Kirche',
    nameTR: 'Kilise',
    icon: '⛪',
    color: '#78909C',
    bgColor: '#F5F7F8',
    npcName: 'Pfarrer Thomas',
    npcEmoji: '👨',
    active: false,
    dialog: { opening: [], choices: [] },
  },
];
