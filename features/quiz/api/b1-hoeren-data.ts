import { Question } from "../model/types";
import { assignTeile, B1_HOEREN_TEILE } from "../lib/examStructure";

// ─── MODELLTEST 1 ────────────────────────────────────────────────────────────

const hoeren1Teil1: Question[] = [
  {
    id: 1,
    type: "multiple-choice",
    question:
      "Wegen Umzugs halten wir für Sie im Sommerschlussverkauf ganz besondere Angebote bereit.",
    context:
      "Nummer 1: Sie hören eine Durchsage in einem Möbelhaus. Wir begrüßen Sie, verehrte Kundschaft, in unserem „Country-Einrichtungshaus“...",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    audioUrl: "/audio/b1/hoeren/test1/teil1_1.mp3",
    teil: 1,
    teilTitle: "Teil 1 – Richtig oder Falsch",
    teilInstruction:
      "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Wählen Sie für die Aufgaben 1 bis 10 die richtige Lösung.",
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Welche Abteilungen sind im Angebot?",
    options: [
      "a) Wohnzimmer und Schlafzimmer.",
      "b) Schlafzimmer und Esszimmer.",
      "c) Wohn-, Schlaf- und Kinderzimmer.",
    ],
    correctAnswer: "a) Wohnzimmer und Schlafzimmer.",
    teil: 1,
  },
  {
    id: 3,
    type: "multiple-choice",
    question:
      "Wer Reisen und Musizieren miteinander verbinden möchte, ist bei „musica viva“ an der richtigen Adresse.",
    context:
      "Nummer 2: Sie hören eine Durchsage im Radio. Und hier ein attraktives Angebot für unsere Zuhörer, die auch im Urlaub gern aktiv sind. Der Spezialveranstalter „musica viva“ bietet...",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    audioUrl: "/audio/b1/hoeren/test1/teil1_2.mp3",
    teil: 1,
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "Das Programmangebot von „musica viva“ gibt es ...",
    options: [
      "a) nur in Österreich.",
      "b) nur in Deutschland.",
      "c) in mehreren Ländern.",
    ],
    correctAnswer: "c) in mehreren Ländern.",
    teil: 1,
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "Sei doch so lieb und kümmere dich schon um das Abendessen.",
    context:
      "Nummer 3: Sie hören eine Nachricht auf dem Anrufbeantworter. Hallo, Liebster, ich bin’s. Du, ich muss heute ein bisschen länger arbeiten. Sei doch so lieb und kümmere dich schon um das Abendessen...",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    audioUrl: "/audio/b1/hoeren/test1/teil1_3.mp3",
    teil: 1,
  },
  {
    id: 6,
    type: "multiple-choice",
    question: "Wie viele Schalter müssen am Herd eingestellt werden?",
    options: ["a) Drei.", "b) Fünf.", "c) Zwei."],
    correctAnswer: "c) Zwei.",
    teil: 1,
  },
  {
    id: 7,
    type: "multiple-choice",
    question: "In ganz Österreich scheint die meiste Zeit die Sonne.",
    context:
      "Nummer 4: Sie hören den Wetterbericht im Radio. Sie hören nun den Wetterbericht für morgen, den 25.3. In ganz Österreich scheint die meiste Zeit die Sonne.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    audioUrl: "/audio/b1/hoeren/test1/teil1_4.mp3",
    teil: 1,
  },
  {
    id: 8,
    type: "multiple-choice",
    question: "Wo ist es am wärmsten?",
    options: ["a) Im Norden.", "b) Im Westen.", "c) Im Osten."],
    correctAnswer: "b) Im Westen.",
    teil: 1,
  },
  {
    id: 9,
    type: "multiple-choice",
    question: "Sie sind mit einer Schokoladenfabrik verbunden.",
    context:
      "Nummer 5: Sie hören eine automatische Telefonauskunft. Schokoladenmuseum Waldenbuch, wir danken für Ihren Anruf!",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    audioUrl: "/audio/b1/hoeren/test1/teil1_5.mp3",
    teil: 1,
  },
  {
    id: 10,
    type: "multiple-choice",
    question: "Wo braucht man nichts zu bezahlen?",
    options: [
      "a) In der Ausstellung.",
      "b) Im Schoko-Laden.",
      "c) In der Schokowerkstatt.",
    ],
    correctAnswer: "b) Im Schoko-Laden.",
    teil: 1,
  },
];

const hoeren1Teil2: Question[] = [
  {
    id: 11,
    type: "multiple-choice",
    question: "Wer fährt mit ins Camp?",
    context:
      "Teil 2: Sie sind auf dem Eltern-Informationsabend für eine Schülerreise in ein Feriencamp. Guten Abend, liebe Eltern! Schön, dass Sie so zahlreich zu unserem Informationsabend erschienen sind...",
    options: [
      "a) Der Direktor der Schule.",
      "b) Der Techniker der Schule.",
      "c) Lehrer der Schule.",
    ],
    correctAnswer: "c) Lehrer der Schule.",
    audioUrl: "/audio/b1/hoeren/test1/teil2.mp3",
    teil: 2,
    teilTitle: "Teil 2 – Multiple Choice",
    teilInstruction:
      "Sie hören einen Text. Sie hören den Text einmal. Wählen Sie für die Aufgaben 11 bis 15 die richtige Lösung a, b oder c.",
  },
  {
    id: 12,
    type: "multiple-choice",
    question: "Was ist den Eltern bereits bekannt?",
    options: [
      "a) Wann die Schüler abfliegen und ankommen.",
      "b) Was jeden Tag auf dem Programm steht.",
      "c) Wie das Feriencamp aussieht.",
    ],
    correctAnswer: "a) Wann die Schüler abfliegen und ankommen.",
    teil: 2,
  },
  {
    id: 13,
    type: "multiple-choice",
    question: "Die Kinder und ihre Begleiter fahren mit dem Bus ...",
    options: ["a) nach Brandenburg.", "b) nach Papstdorf.", "c) nach Dresden."],
    correctAnswer: "b) nach Papstdorf.",
    teil: 2,
  },
  {
    id: 14,
    type: "multiple-choice",
    question: "Wie viele Kinder wohnen in einem Bungalow?",
    options: ["a) Acht.", "b) Vier.", "c) Zwei."],
    correctAnswer: "a) Acht.",
    teil: 2,
  },
  {
    id: 15,
    type: "multiple-choice",
    question: "Die Kinder essen ...",
    options: [
      "a) jeden Tag in Gaststätten.",
      "b) dreimal am Tag.",
      "c) an einem Kiosk.",
    ],
    correctAnswer: "b) dreimal am Tag.",
    teil: 2,
  },
];

const hoeren1Teil3: Question[] = [
  {
    id: 16,
    type: "multiple-choice",
    question: "Selina will wegen ihrer Geburtstagsparty in die Stadt fahren.",
    context:
      "Teil 3: Sie warten an einer Bushaltestelle und hören, wie sich zwei Jugendliche über eine Geburtstagsparty unterhalten.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    audioUrl: "/audio/b1/hoeren/test1/teil3.mp3",
    teil: 3,
    teilTitle: "Teil 3 – Richtig oder Falsch",
    teilInstruction:
      "Sie hören ein Gespräch. Sie hören das Gespräch einmal. Wählen Sie für die Aufgaben 16 bis 22 die richtige Lösung.",
  },
  {
    id: 17,
    type: "multiple-choice",
    question: "Selina will bei sich zu Hause keine Party machen.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 3,
  },
  {
    id: 18,
    type: "multiple-choice",
    question: "Selinas Eltern sind gegen die Party.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    teil: 3,
  },
  {
    id: 19,
    type: "multiple-choice",
    question: "Für Selinas Berufswunsch ist die Reise nach England wichtig.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 3,
  },
  {
    id: 20,
    type: "multiple-choice",
    question: "Jan hat dieselbe Meinung wie Selinas Eltern.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 3,
  },
  {
    id: 21,
    type: "multiple-choice",
    question: "Selina mag Pascal nicht.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 3,
  },
  {
    id: 22,
    type: "multiple-choice",
    question: "Pascals Party hat viel Geld gekostet.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    teil: 3,
  },
];

const hoeren1Teil4: Question[] = [
  {
    id: 23,
    type: "matching",
    question: "Die Auswahl an Projekten ist alles andere als gering.",
    context:
      "Teil 4: Eine Moderatorin diskutiert mit Iris Berger und Kai Weser über „Workcamps“.\n\na) Moderatorin\nb) Iris Berger\nc) Kai Weser",
    options: ["a", "b", "c"],
    correctAnswer: "a",
    audioUrl: "/audio/b1/hoeren/test1/teil4.mp3",
    teil: 4,
    teilTitle: "Teil 4 – Wer sagt was?",
    teilInstruction:
      "Sie hören eine Diskussion. Sie hören die Diskussion zweimal. Wählen Sie für die Aufgaben 23 bis 30: Wer sagt das?",
  },
  {
    id: 24,
    type: "matching",
    question:
      "Iris durfte nach Griechenland, weil es dort ein großes Freizeitangebot gibt.",
    options: ["a", "b", "c"],
    correctAnswer: "b",
    teil: 4,
  },
  {
    id: 25,
    type: "matching",
    question: "Kai wollte in Ecuador auch seine Spanischkenntnisse verbessern.",
    options: ["a", "b", "c"],
    correctAnswer: "c",
    teil: 4,
  },
  {
    id: 26,
    type: "matching",
    question:
      "Freiwilligenarbeit in einem Lebenslauf macht immer einen guten Eindruck.",
    options: ["a", "b", "c"],
    correctAnswer: "a",
    teil: 4,
  },
  {
    id: 27,
    type: "matching",
    question: "Iris hat versucht, Helfer und Sponsoren zu werben.",
    options: ["a", "b", "c"],
    correctAnswer: "b",
    teil: 4,
  },
  {
    id: 28,
    type: "matching",
    question:
      "Kai findet es wichtig, die Bevölkerung über den Umweltschutz aufzuklären.",
    options: ["a", "b", "c"],
    correctAnswer: "c",
    teil: 4,
  },
  {
    id: 29,
    type: "matching",
    question:
      "Kai war überrascht von den Lebensbedingungen in Ecuador (Kulturschock).",
    options: ["a", "b", "c"],
    correctAnswer: "c",
    teil: 4,
  },
  {
    id: 30,
    type: "matching",
    question:
      "Am Ende hat man das Gefühl, etwas für einen guten Zweck getan zu haben.",
    options: ["a", "b", "c"],
    correctAnswer: "b",
    teil: 4,
  },
];

export const b1Hoeren1: Question[] = assignTeile(
  [...hoeren1Teil1, ...hoeren1Teil2, ...hoeren1Teil3, ...hoeren1Teil4],
  B1_HOEREN_TEILE,
);

// ─── MODELLTEST 2 ────────────────────────────────────────────────────────────

const hoeren2Teil1: Question[] = [
  {
    id: 1,
    type: "multiple-choice",
    question: "Die Rednerin empfiehlt den Park am Fluss.",
    context:
      "Text 1: Hallo, ich bin gerade am Hauptbahnhof angekommen. Gibt es hier in der Nähe einen schönen Park? – Ja, geh einfach geradeaus und dann links. Der Stadtpark ist nur 5 Minuten entfernt. Den Park am Fluss würde ich nicht empfehlen, der ist gerade wegen Bauarbeiten gesperrt.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Wie weit ist der Stadtpark entfernt?",
    options: ["2 Minuten", "5 Minuten", "15 Minuten"],
    correctAnswer: "5 Minuten",
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Der Supermarkt hat heute Nachmittag geöffnet.",
    context:
      "Text 2: Liebe Kundinnen und Kunden, heute am Feiertag hat unser Markt von 8:00 bis 13:00 Uhr geöffnet. Ab morgen gelten wieder die normalen Öffnungszeiten. Vergessen Sie nicht: Diese Woche gibt es 20 Prozent Rabatt auf alle Milchprodukte.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "Was gibt es diese Woche im Angebot?",
    options: ["Obst und Gemüse", "Milchprodukte", "Brot und Kuchen"],
    correctAnswer: "Milchprodukte",
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "Frau Lehmann ruft an, weil sie einen Termin absagen möchte.",
    context:
      "Text 3: Guten Tag, hier ist Lehmann. Ich habe morgen um 10 Uhr einen Termin bei Doktor Schmidt. Leider muss ich den Termin verschieben, weil mein Sohn krank geworden ist. Könnten Sie mir einen neuen Termin nächste Woche geben? Am besten nachmittags.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 6,
    type: "multiple-choice",
    question: "Wann hätte Frau Lehmann gern den neuen Termin?",
    options: ["Morgen früh", "Diese Woche abends", "Nächste Woche nachmittags"],
    correctAnswer: "Nächste Woche nachmittags",
  },
  {
    id: 7,
    type: "multiple-choice",
    question: "Die S-Bahn Linie 3 fährt heute nicht.",
    context:
      "Text 4: Achtung, eine Durchsage der Berliner Verkehrsbetriebe. Wegen einer technischen Störung fällt die S-Bahn-Linie 3 zwischen Alexanderplatz und Friedrichstraße heute aus. Bitte benutzen Sie die U-Bahn-Linie 6 als Alternative.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 8,
    type: "multiple-choice",
    question: "Was sollen die Fahrgäste als Alternative nehmen?",
    options: ["Einen Bus", "Die U-Bahn-Linie 6", "Ein Taxi"],
    correctAnswer: "Die U-Bahn-Linie 6",
  },
  {
    id: 9,
    type: "multiple-choice",
    question: "Die Bibliothek bietet einen kostenlosen Workshop an.",
    context:
      "Text 5: Die Stadtbibliothek lädt alle Interessierten zum Digitalworkshop ein. Diesen Samstag von 14 bis 16 Uhr lernen Sie, wie man sichere Passwörter erstellt und sich im Internet schützt. Die Teilnahme ist kostenlos, aber eine Anmeldung ist erforderlich.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 10,
    type: "multiple-choice",
    question: "Was muss man tun, um am Workshop teilzunehmen?",
    options: [
      "Nichts, man kann einfach kommen",
      "Sich anmelden",
      "Eine Gebühr zahlen",
    ],
    correctAnswer: "Sich anmelden",
  },
];

const hoeren2Teil2: Question[] = [
  {
    id: 11,
    type: "multiple-choice",
    question: "Worüber spricht die Frau?",
    context:
      'Monolog: Eine Mitarbeiterin des Stadtmuseums erklärt den Besuchern die Geschichte des Gebäudes und das aktuelle Ausstellungsprogramm. Sie spricht über die Sonderausstellung „Leben in der Stadt 1900–2000" und gibt praktische Hinweise.',
    options: [
      "Über einen Sprachkurs",
      "Über ein Museum und seine Ausstellung",
      "Über ein Konzert",
    ],
    correctAnswer: "Über ein Museum und seine Ausstellung",
  },
  {
    id: 12,
    type: "multiple-choice",
    question: "Wie alt ist das Museumsgebäude?",
    options: ["50 Jahre", "Etwa 150 Jahre", "300 Jahre"],
    correctAnswer: "Etwa 150 Jahre",
  },
  {
    id: 13,
    type: "multiple-choice",
    question: "Was zeigt die Sonderausstellung?",
    options: [
      "Moderne Kunst",
      "Das Leben in der Stadt von 1900 bis 2000",
      "Dinosaurier und Fossilien",
    ],
    correctAnswer: "Das Leben in der Stadt von 1900 bis 2000",
  },
  {
    id: 14,
    type: "multiple-choice",
    question: "Wo befindet sich das Café im Museum?",
    options: ["Im Erdgeschoss", "Im ersten Stock", "Im Keller"],
    correctAnswer: "Im Erdgeschoss",
  },
  {
    id: 15,
    type: "multiple-choice",
    question: "Was darf man in der Ausstellung nicht tun?",
    options: ["Notizen machen", "Fotografieren mit Blitz", "Fragen stellen"],
    correctAnswer: "Fotografieren mit Blitz",
  },
];

const hoeren2Teil3: Question[] = [
  {
    id: 16,
    type: "multiple-choice",
    question: "Stefan und Laura planen eine gemeinsame Reise.",
    context:
      "Gespräch zwischen Stefan und Laura. Sie sprechen über ihre Urlaubspläne für den Sommer und versuchen, einen gemeinsamen Plan zu finden.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 17,
    type: "multiple-choice",
    question: "Laura möchte ans Meer fahren.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 18,
    type: "multiple-choice",
    question: "Stefan findet Strandurlaub langweilig.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 19,
    type: "multiple-choice",
    question: "Sie einigen sich auf eine Kreuzfahrt.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 20,
    type: "multiple-choice",
    question: "Laura hat Angst vor dem Fliegen.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 21,
    type: "multiple-choice",
    question: "Sie wollen maximal 1.500 Euro pro Person ausgeben.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 22,
    type: "multiple-choice",
    question: "Am Ende entscheiden sie sich für Kroatien.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
];

const hoeren2Teil4: Question[] = [
  {
    id: 23,
    type: "matching",
    question: "23. Hat schon Erfahrung mit vegetarischer Ernährung.",
    context:
      "Lesen Sie die Aufgaben 23 bis 30. Wer sagt was?\n\nDiskussion im Radio: Moderator Herr Fischer spricht mit Frau Sommer (Ärztin) und Herrn Meier (Koch) über vegetarische Ernährung.\n\na) Moderator (Herr Fischer)\nb) Ärztin (Frau Sommer)\nc) Koch (Herr Meier)",
    options: ["a", "b", "c"],
    correctAnswer: "c",
  },
  {
    id: 24,
    type: "matching",
    question: "24. Spricht über die gesundheitlichen Vorteile.",
    options: ["a", "b", "c"],
    correctAnswer: "b",
  },
  {
    id: 25,
    type: "matching",
    question: "25. Meint, dass vegetarisches Essen nicht langweilig sein muss.",
    options: ["a", "b", "c"],
    correctAnswer: "c",
  },
  {
    id: 26,
    type: "matching",
    question: "26. Warnt vor möglichem Nährstoffmangel.",
    options: ["a", "b", "c"],
    correctAnswer: "b",
  },
  {
    id: 27,
    type: "matching",
    question:
      "27. Erwähnt, dass die Nachfrage nach vegetarischen Gerichten steigt.",
    options: ["a", "b", "c"],
    correctAnswer: "c",
  },
  {
    id: 28,
    type: "matching",
    question: "28. Empfiehlt, regelmäßig Bluttests machen zu lassen.",
    options: ["a", "b", "c"],
    correctAnswer: "b",
  },
  {
    id: 29,
    type: "matching",
    question: "29. Hat in seinem Lokal die Speisekarte geändert.",
    options: ["a", "b", "c"],
    correctAnswer: "c",
  },
  {
    id: 30,
    type: "matching",
    question: "30. Fragt am Ende nach einem konkreten Rezept-Tipp.",
    options: ["a", "b", "c"],
    correctAnswer: "a",
  },
];

export const b1Hoeren2: Question[] = assignTeile(
  [...hoeren2Teil1, ...hoeren2Teil2, ...hoeren2Teil3, ...hoeren2Teil4],
  B1_HOEREN_TEILE,
);

// ─── MODELLTEST 3 ────────────────────────────────────────────────────────────

const hoeren3Teil1: Question[] = [
  {
    id: 1,
    type: "multiple-choice",
    question: "Die Frau hat ihren Schlüssel verloren.",
    context:
      "Text 1: Hallo, ich bin es. Ich stehe vor der Tür, aber ich habe meinen Schlüssel im Büro vergessen. Kannst du mir bitte aufmachen? Ich bin in fünf Minuten da.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Wo ist der Schlüssel?",
    options: ["Zu Hause", "Im Büro", "Im Auto"],
    correctAnswer: "Im Büro",
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Das Konzert findet wie geplant statt.",
    context:
      "Text 2: Liebe Konzertbesucher, aufgrund des starken Regens wird das Open-Air-Konzert heute Abend in die Stadthalle verlegt. Ihre Tickets behalten ihre Gültigkeit. Einlass ab 19:00 Uhr.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "Wohin wird das Konzert verlegt?",
    options: ["In ein Restaurant", "In die Stadthalle", "Auf nächste Woche"],
    correctAnswer: "In die Stadthalle",
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "Der Anrufer möchte einen Kuchen bestellen.",
    context:
      "Text 3: Guten Tag, hier ist die Bäckerei Müller. Sie haben gestern eine Torte für Samstag bestellt. Leider können wir die Erdbeertorte nicht machen, weil wir keine frischen Erdbeeren bekommen haben. Dürfen wir Ihnen stattdessen eine Himbeertorte anbieten?",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 6,
    type: "multiple-choice",
    question: "Warum ruft die Bäckerei an?",
    options: [
      "Die Bestellung ist fertig",
      "Eine Zutat ist nicht verfügbar",
      "Die Bäckerei ist am Samstag geschlossen",
    ],
    correctAnswer: "Eine Zutat ist nicht verfügbar",
  },
  {
    id: 7,
    type: "multiple-choice",
    question: "Der Deutschkurs beginnt pünktlich.",
    context:
      "Text 4: Liebe Kursteilnehmer, heute beginnt der Unterricht 15 Minuten später, also um 9:15 Uhr, weil unsere Lehrerin im Stau steht. Bitte warten Sie im Aufenthaltsraum.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 8,
    type: "multiple-choice",
    question: "Warum beginnt der Kurs später?",
    options: [
      "Der Raum ist noch nicht frei",
      "Die Lehrerin steht im Stau",
      "Es gibt technische Probleme",
    ],
    correctAnswer: "Die Lehrerin steht im Stau",
  },
  {
    id: 9,
    type: "multiple-choice",
    question: "Man kann den Fahrradverleih nur am Wochenende nutzen.",
    context:
      "Text 5: Herzlich willkommen in unserem Hotel! Unseren Gästen steht ein kostenloser Fahrradverleih zur Verfügung. Montag bis Sonntag von 7:00 bis 21:00 Uhr. Bitte melden Sie sich an der Rezeption an.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 10,
    type: "multiple-choice",
    question: "Wo meldet man sich für den Fahrradverleih an?",
    options: ["Im Restaurant", "An der Rezeption", "Im Fitnessraum"],
    correctAnswer: "An der Rezeption",
  },
];

const hoeren3Teil2: Question[] = [
  {
    id: 11,
    type: "multiple-choice",
    question: "Was ist das Thema der Führung?",
    context:
      "Monolog: Ein Stadtführer zeigt einer Gruppe die Altstadt von Heidelberg und erklärt die Geschichte der Stadt, die berühmte Universität und das Schloss.",
    options: [
      "Die Geschichte von Heidelberg",
      "Deutsche Küche",
      "Moderne Architektur in Deutschland",
    ],
    correctAnswer: "Die Geschichte von Heidelberg",
  },
  {
    id: 12,
    type: "multiple-choice",
    question: "Wie alt ist die Universität Heidelberg ungefähr?",
    options: ["200 Jahre", "Über 600 Jahre", "100 Jahre"],
    correctAnswer: "Über 600 Jahre",
  },
  {
    id: 13,
    type: "multiple-choice",
    question: "Was passierte mit dem Schloss im 17. Jahrhundert?",
    options: ["Es wurde gebaut", "Es wurde zerstört", "Es wurde ein Museum"],
    correctAnswer: "Es wurde zerstört",
  },
  {
    id: 14,
    type: "multiple-choice",
    question: "Wie lange dauert die Führung insgesamt?",
    options: ["Eine Stunde", "Zwei Stunden", "Drei Stunden"],
    correctAnswer: "Zwei Stunden",
  },
  {
    id: 15,
    type: "multiple-choice",
    question: "Wo endet die Stadtführung?",
    options: ["Am Bahnhof", "Am Marktplatz", "Am Schloss"],
    correctAnswer: "Am Marktplatz",
  },
];

const hoeren3Teil3: Question[] = [
  {
    id: 16,
    type: "multiple-choice",
    question: "Eva und Jan sprechen über ihre Wohnsituation.",
    context:
      "Gespräch zwischen Eva und Jan. Eva überlegt, von der Stadt aufs Land zu ziehen. Jan ist vor einem Jahr aufs Land gezogen und erzählt von seinen Erfahrungen.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 17,
    type: "multiple-choice",
    question: "Jan bereut seinen Umzug aufs Land.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 18,
    type: "multiple-choice",
    question: "Eva findet die Mieten in der Stadt zu hoch.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 19,
    type: "multiple-choice",
    question: "Jan hat auf dem Land schnell Freunde gefunden.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 20,
    type: "multiple-choice",
    question: "Eva macht sich Sorgen wegen der schlechten Verkehrsanbindung.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 21,
    type: "multiple-choice",
    question: "Jan fährt jeden Tag mit dem Auto zur Arbeit.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 22,
    type: "multiple-choice",
    question: "Eva will sich nächste Woche Häuser auf dem Land anschauen.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
];

const hoeren3Teil4: Question[] = [
  {
    id: 23,
    type: "matching",
    question: "23. Hatte als Kind Musikunterricht.",
    context:
      "Lesen Sie die Aufgaben 23 bis 30. Wer sagt was?\n\nDiskussion im Radio: Moderatorin Frau Berger spricht mit Herrn Wolf (Musiklehrer) und Frau Lang (Mutter von drei Kindern) über musikalische Erziehung.\n\na) Moderatorin (Frau Berger)\nb) Musiklehrer (Herr Wolf)\nc) Mutter (Frau Lang)",
    options: ["a", "b", "c"],
    correctAnswer: "b",
  },
  {
    id: 24,
    type: "matching",
    question: "24. Findet, dass jedes Kind ein Instrument lernen sollte.",
    options: ["a", "b", "c"],
    correctAnswer: "b",
  },
  {
    id: 25,
    type: "matching",
    question: "25. Meint, dass Musikunterricht zu teuer sein kann.",
    options: ["a", "b", "c"],
    correctAnswer: "c",
  },
  {
    id: 26,
    type: "matching",
    question:
      "26. Schlägt vor, kostenlose Musikkurse in der Schule anzubieten.",
    options: ["a", "b", "c"],
    correctAnswer: "b",
  },
  {
    id: 27,
    type: "matching",
    question: "27. Erzählt, dass ein Kind schnell das Interesse verlor.",
    options: ["a", "b", "c"],
    correctAnswer: "c",
  },
  {
    id: 28,
    type: "matching",
    question: "28. Spricht über Musik und bessere Schulnoten.",
    options: ["a", "b", "c"],
    correctAnswer: "b",
  },
  {
    id: 29,
    type: "matching",
    question: "29. Kinder sollten selbst entscheiden, ob sie spielen.",
    options: ["a", "b", "c"],
    correctAnswer: "c",
  },
  {
    id: 30,
    type: "matching",
    question: "30. Erwähnt Studien über Musik und das Gehirn.",
    options: ["a", "b", "c"],
    correctAnswer: "b",
  },
];

export const b1Hoeren3: Question[] = assignTeile(
  [...hoeren3Teil1, ...hoeren3Teil2, ...hoeren3Teil3, ...hoeren3Teil4],
  B1_HOEREN_TEILE,
);
