export type PolicyType = 'privacy' | 'terms';
export type PolicyLang = 'tr' | 'de' | 'en';

export const POLICY_CONTENT: Record<PolicyType, Record<PolicyLang, { title: string; body: string }>> = {
  privacy: {
    tr: {
      title: 'Gizlilik Politikası',
      body: `Son güncelleme: Mayıs 2026\n\nWortreise uygulaması, gizliliğinize saygı duyar.\n\n1. Toplanan Veriler\nUygulama yalnızca kullanıcı adınızı, günlük hedef tercihinizi ve öğrenme istatistiklerinizi saklar. Bu veriler yalnızca cihazınızda yerel olarak tutulur.\n\n2. Veri Paylaşımı\nHiçbir kişisel veri sunucuya gönderilmez veya üçüncü taraflarla paylaşılmaz.\n\n3. Üçüncü Taraf Hizmetler\nUygulama herhangi bir analitik veya reklam SDK'sı içermez.\n\n4. Her Yaşa Uygun\nUygulama her yaş grubuna yöneliktir. Kişisel veri toplanmadığından herhangi bir yaş kısıtlaması bulunmamaktadır.\n\n5. Geri Bildirim\nUygulamayı uygulama mağazasında değerlendirerek görüşlerinizi iletebilirsiniz.`,
    },
    de: {
      title: 'Datenschutzerklärung',
      body: `Letzte Aktualisierung: Mai 2026\n\nWortreise respektiert Ihre Privatsphäre.\n\n1. Erfasste Daten\nDie App speichert ausschließlich Ihren Benutzernamen, Ihr tägliches Lernziel und Ihre Lernstatistiken. Diese Daten werden nur lokal auf Ihrem Gerät gespeichert.\n\n2. Datenweitergabe\nEs werden keine personenbezogenen Daten an Server übermittelt oder an Dritte weitergegeben.\n\n3. Drittanbieter-Dienste\nDie App enthält kein Analytics- oder Werbe-SDK.\n\n4. Für alle Altersgruppen geeignet\nDie App richtet sich an alle Altersgruppen. Da keine personenbezogenen Daten erfasst werden, gibt es keine Altersbeschränkung.\n\n5. Feedback\nSie können Ihr Feedback über eine Bewertung im App-Store mitteilen.`,
    },
    en: {
      title: 'Privacy Policy',
      body: `Last updated: May 2026\n\nWortreise respects your privacy.\n\n1. Data Collected\nThe app stores only your username, daily learning goal, and learning statistics. This data is stored locally on your device only.\n\n2. Data Sharing\nNo personal data is sent to servers or shared with third parties.\n\n3. Third-Party Services\nThe app does not include any analytics or advertising SDK.\n\n4. Suitable for All Ages\nThe app is suitable for all age groups. Since no personal data is collected, there is no age restriction.\n\n5. Feedback\nYou can share your feedback by leaving a review in the app store.`,
    },
  },
  terms: {
    tr: {
      title: 'Kullanım Koşulları',
      body: `Son güncelleme: Mayıs 2026\n\nWortreise uygulamasını kullanarak aşağıdaki koşulları kabul etmiş olursunuz.\n\n1. Amaç\nUygulama yalnızca eğitim ve kişisel öğrenim amacıyla sunulmaktadır.\n\n2. İçerik\nUygulama içeriği (kelimeler, cümleler, çeviriler) bilgilendirme amaçlıdır; olası hatalar için sorumluluk kabul edilmez.\n\n3. Değişiklikler\nUygulama ve bu koşullar önceden bildirim yapılmaksızın güncellenebilir.\n\n4. Sorumluluk Sınırlaması\nUygulama "olduğu gibi" sunulmaktadır. Kullanımdan doğabilecek zararlar için sorumluluk kabul edilmez.\n\n5. Geri Bildirim\nUygulamayı uygulama mağazasında değerlendirerek görüşlerinizi iletebilirsiniz.`,
    },
    de: {
      title: 'Nutzungsbedingungen',
      body: `Letzte Aktualisierung: Mai 2026\n\nDurch die Nutzung von Wortreise erklären Sie sich mit den folgenden Bedingungen einverstanden.\n\n1. Zweck\nDie App dient ausschließlich Bildungs- und persönlichen Lernzwecken.\n\n2. Inhalte\nDie App-Inhalte (Wörter, Sätze, Übersetzungen) dienen der Information; für mögliche Fehler wird keine Haftung übernommen.\n\n3. Änderungen\nDie App und diese Bedingungen können ohne vorherige Ankündigung aktualisiert werden.\n\n4. Haftungsbeschränkung\nDie App wird „wie besehen" bereitgestellt. Für Schäden, die aus der Nutzung entstehen, wird keine Haftung übernommen.\n\n5. Feedback\nSie können Ihr Feedback über eine Bewertung im App-Store mitteilen.`,
    },
    en: {
      title: 'Terms of Service',
      body: `Last updated: May 2026\n\nBy using Wortreise, you agree to the following terms.\n\n1. Purpose\nThe app is provided solely for educational and personal learning purposes.\n\n2. Content\nApp content (words, sentences, translations) is for informational purposes; no liability is accepted for possible errors.\n\n3. Changes\nThe app and these terms may be updated without prior notice.\n\n4. Limitation of Liability\nThe app is provided "as is." No liability is accepted for damages arising from use.\n\n5. Feedback\nYou can share your feedback by leaving a review in the app store.`,
    },
  },
};
