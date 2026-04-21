import { Question } from "../model/types";
import { assignTeile, B1_LESEN_TEILE } from "../lib/examStructure";

// ─── MODELLTEST 1 ────────────────────────────────────────────────────────────

const lesen1Teil1: Question[] = [
  {
    id: 1,
    type: "multiple-choice",
    question: "Susanne möchte sich bei Tabea für die Einladung bedanken.",
    context: `Liebe Tabea,

vielen Dank für Deine Einladung! Ich habe mich sehr darüber gefreut. Natürlich komme ich gern zu Deiner Party am Samstag. Es ist toll, dass Du Deinen Geburtstag so groß feierst.

Ich habe aber noch eine Frage: Soll ich etwas mitbringen? Ich könnte zum Beispiel einen Salat oder einen Kuchen machen. Oder brauchst Du noch Getränke? Sag mir einfach Bescheid.

Eine schlechte Nachricht habe ich leider auch: Ich kann nicht lange bleiben, weil ich am Sonntag früh aufstehen muss. Ich hoffe, Du bist mir nicht böse.

Bis Samstag!
Viele Grüße
Susanne`,
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Susanne bietet an, Essen oder Getränke mitzubringen.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Susanne bleibt bis zum Ende der Party.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "Die Telefonnummer der Bank war in der Brieftasche.",
    context:
      "Text 2: Susannes Brieftasche war weg. Sie hat überall gesucht, aber nichts gefunden. Zum Glück war die Telefonnummer der Bank in der Brieftasche, also hat der Finder angerufen.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "In Susannes Brieftasche fehlte nichts.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 6,
    type: "multiple-choice",
    question:
      "Susanne konnte dem Finder persönlich für seine Ehrlichkeit danken.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
];

const lesen1Teil2: Question[] = [
  {
    id: 7,
    type: "multiple-choice",
    question: "Was ist das Hauptthema des Artikels?",
    context: `Digitales Lernen an Schulen

Immer mehr Schulen in Deutschland setzen auf digitale Medien im Unterricht. Seit der Pandemie haben viele Schulen Tablets und Laptops für ihre Schüler angeschafft. Die Lehrkräfte nutzen spezielle Lernplattformen, auf denen die Schüler Aufgaben bearbeiten und ihre Ergebnisse direkt einreichen können.

Allerdings gibt es auch Kritik: Einige Eltern befürchten, dass die Kinder zu viel Zeit vor dem Bildschirm verbringen. Experten empfehlen deshalb eine Mischung aus digitalem und traditionellem Unterricht. Optimal seien etwa zwei bis drei Stunden digitales Lernen pro Tag.

Eine aktuelle Studie zeigt: Schüler, die regelmäßig mit digitalen Medien arbeiten, sind oft motivierter und erzielen bessere Ergebnisse in Mathematik und Naturwissenschaften.`,
    options: [
      "Die Nachteile von Computern in Schulen",
      "Die zunehmende Digitalisierung des Unterrichts",
      "Die Ausbildung von Informatik-Lehrern",
    ],
    correctAnswer: "Die zunehmende Digitalisierung des Unterrichts",
  },
  {
    id: 8,
    type: "multiple-choice",
    question: "Warum kritisieren einige Eltern den digitalen Unterricht?",
    options: [
      "Die Tablets sind zu teuer",
      "Die Kinder könnten zu viel Bildschirmzeit haben",
      "Die Lehrer sind nicht gut ausgebildet",
    ],
    correctAnswer: "Die Kinder könnten zu viel Bildschirmzeit haben",
  },
  {
    id: 9,
    type: "multiple-choice",
    question: "Was empfehlen Experten?",
    options: [
      "Nur noch digital zu unterrichten",
      "Digitale Medien komplett abzuschaffen",
      "Digitalen und traditionellen Unterricht zu kombinieren",
    ],
    correctAnswer: "Digitalen und traditionellen Unterricht zu kombinieren",
  },
  {
    id: 10,
    type: "multiple-choice",
    question: "Warum haben viele Schulen digitale Geräte gekauft?",
    context: `Ehrenamtliches Engagement in Deutschland

In Deutschland engagieren sich rund 30 Millionen Menschen ehrenamtlich. Sie arbeiten in Sportvereinen, helfen bei der Feuerwehr oder unterstützen ältere Nachbarn. Besonders bei jungen Leuten zwischen 14 und 29 Jahren steigt die Bereitschaft, sich freiwillig zu engagieren.

Der Hauptgrund für ehrenamtliche Arbeit ist der Wunsch, anderen zu helfen. Viele finden es aber auch wichtig, neue Leute kennenzulernen und praktische Erfahrungen zu sammeln. Etwa 40 Prozent der Ehrenamtlichen geben an, dass die Arbeit ihnen selbst guttut.

Die Regierung unterstützt das Engagement durch Programme wie den Bundesfreiwilligendienst, bei dem junge Erwachsene ein Jahr lang in sozialen Einrichtungen mitarbeiten können.`,
    options: [
      "Die Regierung hat es vorgeschrieben",
      "Wegen der Pandemie",
      "Weil die alten Geräte kaputt waren",
    ],
    correctAnswer: "Wegen der Pandemie",
  },
  {
    id: 11,
    type: "multiple-choice",
    question: "Was ist der Hauptgrund für ehrenamtliche Arbeit?",
    options: [
      "Man verdient viel Geld damit",
      "Der Wunsch, anderen Menschen zu helfen",
      "Es ist gesetzlich vorgeschrieben",
    ],
    correctAnswer: "Der Wunsch, anderen Menschen zu helfen",
  },
  {
    id: 12,
    type: "multiple-choice",
    question: "Was ist der Bundesfreiwilligendienst?",
    options: [
      "Ein bezahlter Job bei der Regierung",
      "Ein Programm, bei dem junge Erwachsene in sozialen Einrichtungen mitarbeiten",
      "Ein Sportverein für Jugendliche",
    ],
    correctAnswer:
      "Ein Programm, bei dem junge Erwachsene in sozialen Einrichtungen mitarbeiten",
  },
];

const lesen1Teil3: Question[] = [
  {
    id: 13,
    type: "matching",
    question: "13. Susanne sucht einen günstigen Laptop für ihr Studium.",
    context: `Lesen Sie die Anzeigen a–j. Welche Anzeige passt zu welcher Situation?

a) EDV-Kurs für Senioren! Lernen Sie den Umgang mit PC und Internet in entspannter Atmosphäre. Keine Vorkenntnisse nötig. Start: 1. März.
b) Laptop-Reparatur Express! Ihr PC ist kaputt? Wir reparieren Laptops und Handys innerhalb von 24 Stunden zu fairen Preisen.
c) Gebrauchte Elektronik: Wir verkaufen generalüberholte Laptops, Tablets und Smartphones mit 1 Jahr Garantie. Ideal für Schüler und Studenten! Ab 150 €.
d) Jobangebot: Suchen dringend zuverlässige Aushilfe (m/w/d) für unser Elektronikfachgeschäft am Wochenende. Bezahlung nach Tarif.
e) Programmierkurs für Kinder (10-14 Jahre). Spielerisch programmieren lernen am Wochenende. Anmeldung unter www.kids-code.de.
f) Kostenlose IT-Beratung für Start-ups! Wir helfen jungen Unternehmen bei der Einrichtung ihrer IT-Infrastruktur. Erstgespräch gratis.
g) Suche Nachhilfe in Mathematik und Physik für meinen 15-jährigen Sohn. 1-2 mal pro Woche am Nachmittag. Zahle 15 €/Stunde.
h) Verkaufe nagelneuen Gaming-PC! Mit der besten Grafikkarte und viel Speicher. Preis: 1200 € (Neupreis 1500 €). Nur Abholung!
i) App-Entwickler gesucht! Innovative Start-up sucht erfahrene App-Entwickler (iOS/Android) für Vollzeitstelle. Gute Bezahlung.
j) Volkshochschule: 10-Finger-Schreiben am PC. Abendkurs am Dienstag und Donnerstag. Für Anfänger geeignet.`,
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "c",
  },
  {
    id: 14,
    type: "matching",
    question: "14. Herr Müller möchte besser am Computer tippen lernen.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "j",
  },
  {
    id: 15,
    type: "matching",
    question: "15. Lena ist 12 Jahre alt und interessiert sich für Computer.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "e",
  },
  {
    id: 16,
    type: "matching",
    question:
      "16. Tobias sucht Arbeit, um neben der Schule etwas Geld zu verdienen.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "d",
  },
  {
    id: 17,
    type: "matching",
    question:
      "17. Frau Bauer sucht einen Mathematiklehrer für ihre Tochter (6 Jahre).",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "0",
  },
  {
    id: 18,
    type: "matching",
    question: "18. Jans Handy ist ins Wasser gefallen und geht nicht mehr an.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "b",
  },
  {
    id: 19,
    type: "matching",
    question:
      "19. Ein neues Unternehmen braucht Hilfe bei der Computertechnik.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "f",
  },
];

const lesen1Teil4: Question[] = [
  {
    id: 20,
    type: "multiple-choice",
    question: "Martin ist dafür, dass Kinder ein Haustier haben.",
    context: `Diskussion: „Sollten Kinder ein Haustier haben?"

Martin: Ich finde es wunderbar, wenn Kinder mit Tieren aufwachsen. Unser Hund hat meinem Sohn beigebracht, Verantwortung zu übernehmen. Er geht jeden Tag mit ihm spazieren.

Claudia: Ich bin da skeptisch. Kinder verlieren schnell das Interesse, und dann müssen die Eltern sich um alles kümmern. Das kenne ich von meiner Nachbarin.

Peter: Haustiere sind toll für die Entwicklung der Kinder. Die Forschung zeigt, dass Kinder mit Haustieren sozialer und empathischer sind.

Sandra: Das klingt schön, aber man muss auch an die Kosten denken. Tierarztbesuche sind teuer, und nicht jede Familie kann sich das leisten.

Thomas: Ich bin absolut dafür! Meine Tochter hat durch unsere Katze gelernt, was Fürsorge bedeutet.

Birgit: Ich finde, man sollte erst ein Haustier anschaffen, wenn die Kinder mindestens 10 Jahre alt sind. Vorher verstehen sie die Verantwortung nicht.

Ralf: Haustiere gehören auf den Bauernhof, nicht in eine kleine Stadtwohnung. Das ist weder für die Tiere noch für die Kinder gut.`,
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
  {
    id: 21,
    type: "multiple-choice",
    question: "Claudia ist dafür, dass Kinder ein Haustier haben.",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 22,
    type: "multiple-choice",
    question: "Peter ist dafür, dass Kinder ein Haustier haben.",
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
  {
    id: 23,
    type: "multiple-choice",
    question: "Sandra ist dafür, dass Kinder ein Haustier haben.",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 24,
    type: "multiple-choice",
    question: "Thomas ist dafür, dass Kinder ein Haustier haben.",
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
  {
    id: 25,
    type: "multiple-choice",
    question: "Birgit ist dafür, dass Kinder ein Haustier haben.",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 26,
    type: "multiple-choice",
    question: "Ralf ist dafür, dass Kinder ein Haustier haben.",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
];

const lesen1Teil5: Question[] = [
  {
    id: 27,
    type: "multiple-choice",
    question: "Darf man sein Handy im Leseraum benutzen?",
    context: `Stadtbibliothek München – Auszug aus der Benutzerordnung

1. Die Bibliothek ist Mo–Fr von 9:00 bis 20:00 Uhr und Sa von 10:00 bis 16:00 Uhr geöffnet.
2. Für die Anmeldung benötigen Sie einen Personalausweis und einen Wohnsitznachweis. Kinder und Jugendliche unter 18 Jahren benötigen die Unterschrift der Eltern.
3. Sie dürfen maximal 10 Printmedien (Bücher, Zeitschriften) und 5 AV-Medien (DVDs, CDs) gleichzeitig ausleihen.
4. Die Leihfrist beträgt 4 Wochen für Bücher und 2 Wochen für DVDs/CDs. Eine Verlängerung ist telefonisch oder online möglich, außer das Medium ist reserviert.
5. Essen und Getränke (außer Wasser in geschlossenen Flaschen) sind in den Leseräumen strengstens verboten. Nutzen Sie dafür bitte die Cafeteria im Foyer.
6. Handys müssen in den Leseräumen auf lautlos gestellt werden. Telefonate sind nur im Treppenhaus oder draußen gestattet.`,
    options: [
      "Ja, aber man muss leise sprechen.",
      "Nein, Telefonieren ist dort verboten.",
      "Ja, man darf jederzeit telefonieren.",
    ],
    correctAnswer: "Nein, Telefonieren ist dort verboten.",
  },
  {
    id: 28,
    type: "multiple-choice",
    question: "Wo darf man in der Bibliothek etwas essen?",
    options: [
      "Überall, solange man leise ist.",
      "Nur im Treppenhaus.",
      "Nur in der Cafeteria im Foyer.",
    ],
    correctAnswer: "Nur in der Cafeteria im Foyer.",
  },
  {
    id: 29,
    type: "multiple-choice",
    question: "Was stimmt bezüglich der Ausleihe?",
    options: [
      "Man kann Bücher länger behalten als DVDs.",
      "Man darf insgesamt 20 Medien ausleihen.",
      "Eine Verlängerung ist immer möglich.",
    ],
    correctAnswer: "Man kann Bücher länger behalten als DVDs.",
  },
  {
    id: 30,
    type: "multiple-choice",
    question: "Was brauchen Jugendliche unter 18 für die Anmeldung?",
    options: [
      "Nur einen Personalausweis.",
      "Die Unterschrift der Eltern.",
      "Ihren eigenen Wohnsitznachweis.",
    ],
    correctAnswer: "Die Unterschrift der Eltern.",
  },
];

export const b1Lesen1: Question[] = assignTeile(
  [
    ...lesen1Teil1,
    ...lesen1Teil2,
    ...lesen1Teil3,
    ...lesen1Teil4,
    ...lesen1Teil5,
  ],
  B1_LESEN_TEILE,
);

// ─── MODELLTEST 2 ────────────────────────────────────────────────────────────

const lesen2Teil1: Question[] = [
  {
    id: 1,
    type: "multiple-choice",
    question: "Marco hat seine Reise nach Wien selbst organisiert.",
    context: `Blog: Marcos Reisetagebuch

Letztes Wochenende war ich zum ersten Mal in Wien. Meine Freundin Lisa hat alles organisiert – vom Hotel bis zu den Eintrittskarten für die Museen. Am ersten Tag haben wir das Schloss Schönbrunn besichtigt. Es war beeindruckend! Besonders der Garten hat mir gefallen.

Am Abend waren wir in einem typischen Wiener Kaffeehaus. Ich habe eine Sachertorte probiert – die war aber ehrlich gesagt etwas zu süß für meinen Geschmack. Lisa fand sie fantastisch.

Am nächsten Tag hatten wir leider schlechtes Wetter, deshalb sind wir ins Kunsthistorische Museum gegangen. Ich kann Wien wirklich empfehlen, vor allem im Frühling, wenn die Parks so schön grün sind.`,
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Marco hat die Sachertorte sehr gut geschmeckt.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Am zweiten Tag war das Wetter schlecht.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "Anna macht regelmäßig Sport.",
    context: `Blog: Annas Fitness-Tagebuch

Seit drei Monaten gehe ich jeden Morgen vor der Arbeit joggen. Am Anfang war es furchtbar – ich konnte kaum 10 Minuten laufen. Jetzt schaffe ich problemlos 30 Minuten. Mein Ziel ist es, im Herbst an einem 10-km-Lauf teilzunehmen. Mein Kollege Thomas hat mich überredet, mich anzumelden. Er läuft schon seit Jahren Marathon.

Das Beste am Laufen ist, dass ich mich danach so energiegeladen fühle. Außerdem schlafe ich viel besser und bin weniger gestresst.`,
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "Anna will an einem Marathon teilnehmen.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 6,
    type: "multiple-choice",
    question: "Anna schläft seit dem Joggen schlechter.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
];

const lesen2Teil2: Question[] = [
  {
    id: 7,
    type: "multiple-choice",
    question: "Warum wird Homeoffice immer beliebter?",
    context: `Homeoffice: Zukunft der Arbeit?

Eine neue Umfrage zeigt: 65 Prozent der Deutschen möchten auch nach der Pandemie mindestens zwei Tage pro Woche von zu Hause arbeiten. Die Gründe sind vielfältig: Man spart Fahrtzeit, kann die Arbeit flexibler einteilen und hat mehr Zeit für die Familie.

Kritiker warnen jedoch vor der Isolation. Wer immer allein arbeitet, verliert den Kontakt zu den Kollegen. Außerdem fällt es vielen schwer, Arbeit und Freizeit zu trennen. Manche arbeiten im Homeoffice sogar länger als im Büro.

Experten empfehlen ein hybrides Modell: zwei bis drei Tage Homeoffice und den Rest im Büro.`,
    options: [
      "Weil die Büros geschlossen sind",
      "Wegen Flexibilität, Zeitersparnis und mehr Familienzeit",
      "Weil man im Homeoffice mehr verdient",
    ],
    correctAnswer: "Wegen Flexibilität, Zeitersparnis und mehr Familienzeit",
  },
  {
    id: 8,
    type: "multiple-choice",
    question: "Welche Gefahr sehen Kritiker beim Homeoffice?",
    options: [
      "Man verdient weniger Geld",
      "Man verliert den Kontakt zu Kollegen",
      "Man muss mehr Steuern zahlen",
    ],
    correctAnswer: "Man verliert den Kontakt zu Kollegen",
  },
  {
    id: 9,
    type: "multiple-choice",
    question: "Was empfehlen Experten?",
    options: [
      "Nur noch im Büro arbeiten",
      "Ein Mischmodell aus Homeoffice und Büro",
      "Jeden Tag im Homeoffice arbeiten",
    ],
    correctAnswer: "Ein Mischmodell aus Homeoffice und Büro",
  },
  {
    id: 10,
    type: "multiple-choice",
    question: "Warum fahren immer mehr Deutsche mit dem Fahrrad?",
    context: `Fahrrad statt Auto – ein Trend in deutschen Städten

In vielen deutschen Großstädten steigt die Zahl der Fahrradfahrer. Städte wie München, Berlin und Hamburg bauen ihre Radwege aus. Der Grund: Immer mehr Menschen wollen umweltfreundlich unterwegs sein und gleichzeitig etwas für ihre Gesundheit tun.

Auch die hohen Benzinpreise spielen eine Rolle. Ein gutes Fahrrad kostet einmalig 500 bis 1.000 Euro, während ein Auto jeden Monat mehrere Hundert Euro kostet.

Trotzdem gibt es Probleme: Viele Radwege sind zu schmal oder in schlechtem Zustand. Radfahrer fühlen sich oft unsicher im Straßenverkehr.`,
    options: [
      "Weil Autos verboten sind",
      "Wegen Umweltbewusstsein, Gesundheit und hoher Benzinpreise",
      "Weil Fahrräder kostenlos sind",
    ],
    correctAnswer: "Wegen Umweltbewusstsein, Gesundheit und hoher Benzinpreise",
  },
  {
    id: 11,
    type: "multiple-choice",
    question: "Welches Problem gibt es beim Radfahren in der Stadt?",
    options: [
      "Es gibt zu viele Fahrradfahrer",
      "Die Radwege sind oft zu schmal oder in schlechtem Zustand",
      "Fahrräder sind zu langsam",
    ],
    correctAnswer: "Die Radwege sind oft zu schmal oder in schlechtem Zustand",
  },
  {
    id: 12,
    type: "multiple-choice",
    question: "Wie viel kostet ein gutes Fahrrad laut dem Text?",
    options: ["100 bis 300 Euro", "500 bis 1.000 Euro", "Mehr als 2.000 Euro"],
    correctAnswer: "500 bis 1.000 Euro",
  },
];

const lesen2Teil3: Question[] = [
  {
    id: 13,
    type: "matching",
    question:
      "13. Familie Berger sucht einen Urlaub am Meer, bei dem auch ihr Hund willkommen ist.",
    context: `Lesen Sie die Anzeigen a–j. Welche Anzeige passt zu welcher Situation?

a) Ferienwohnung "Alpenblick": Erholung pur in den Bergen! Ideal für Wanderer und Naturliebhaber. Hunde sind bei uns herzlich willkommen. Keine Nebenkosten.
b) Familienhotel "Sonnenschein" an der Ostsee: Direkt am Strand gelegen. Mit großer Poollandschaft und Kinderbetreuung. Haustiere sind leider nicht gestattet.
c) Sprachreise nach Südspanien: Verbinden Sie Urlaub mit Lernen! Vormittags Spanischkurs, nachmittags Ausflüge ans Meer. Unterbringung bei Gastfamilien.
d) Action & Adventure Camp! Wildwasser-Rafting, Klettern und Mountainbiken für Jugendliche (14-18 Jahre) in Österreich. Inklusive Zeltlager und Vollverpflegung.
e) Ferienhaus "Strandkrabbe" an der Nordsee: Gemütliches Haus für bis zu 6 Personen, nur 100m vom Hundestrand entfernt. Eingezäunter Garten, ideal für Ihren Vierbeiner!
f) Entspannungs-Wochenende im Schwarzwald: 2 Übernachtungen im 4-Sterne-Wellnesshotel mit Massage und Sauna-Nutzung. Perfekt für Paare.
g) Städtereise Berlin: Erleben Sie die Hauptstadt! 3 Tage inkl. Übernachtung im zentralen Hostel, Ticket für den Nahverkehr und Museumspass. Speziell für Studenten!
h) Fahrrad-Rundfahrt am Bodensee: Organisierte 7-Tage-Tour inkl. Gepäcktransport und Hotelübernachtungen. Lernen Sie die Region aktiv kennen!
i) Sommercamp für 8-12 Jährige auf dem Bauernhof: Tiere füttern, reiten und Natur erleben. Ohne Eltern! Betreuung rund um die Uhr.
j) Luxuskreuzfahrt im Mittelmeer: 14 Tage auf dem Traumschiff. 5-Sterne-Essen, Shows am Abend und Landausflüge in historische Städte.`,
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "e",
  },
  {
    id: 14,
    type: "matching",
    question:
      "14. Thomas und Sarah suchen ein entspanntes Wochenende ohne Kinder.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "f",
  },
  {
    id: 15,
    type: "matching",
    question:
      "15. Lukas (16) möchte in den Ferien Sport machen und andere Jugendliche treffen.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "d",
  },
  {
    id: 16,
    type: "matching",
    question:
      "16. Herr und Frau Meyer wollen eine Reise machen, ohne ihr Gepäck selbst zu tragen.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "h",
  },
  {
    id: 17,
    type: "matching",
    question:
      "17. Elena (20) studiert Architektur und möchte in den Ferien alte Gebäude besichtigen.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "0",
  },
  {
    id: 18,
    type: "matching",
    question:
      "18. Familie Schmidt sucht ein sonniges Hotel am Strand, wo die Kinder betreut werden.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "b",
  },
  {
    id: 19,
    type: "matching",
    question: "19. Mia möchte im Urlaub eine neue Sprache lernen.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "c",
  },
];

const lesen2Teil4: Question[] = [
  {
    id: 20,
    type: "multiple-choice",
    question: "Felix ist dafür, dass in Schulen mehr Sport unterrichtet wird.",
    context: `Diskussion: „Brauchen wir mehr Sportunterricht in der Schule?"

Felix: Definitiv ja! Kinder bewegen sich viel zu wenig. Mehr Sport in der Schule wäre die beste Lösung. Drei Stunden pro Woche reichen nicht aus.

Katharina: Ich bin dagegen. Der Stundenplan ist schon voll genug. Wenn man mehr Sport einführt, muss man andere Fächer kürzen. Mathematik und Sprachen sind wichtiger.

Robert: Sport ist genauso wichtig wie jedes andere Fach. Bewegung hilft beim Lernen und reduziert Stress. Ich bin absolut dafür.

Helena: Die Kinder können doch nach der Schule Sport machen. Dafür braucht man keinen extra Unterricht. Es gibt genug Sportvereine.

Michael: Viele Familien können sich keinen Sportverein leisten. In der Schule hat jedes Kind die gleichen Chancen. Deshalb bin ich für mehr Sportunterricht.

Laura: Ich finde, die Qualität ist wichtiger als die Quantität. Statt mehr Stunden brauchen wir bessere Sportlehrer und modernere Sporthallen.

Stefan: Mehr Bewegung in der Schule? Auf jeden Fall! Die Statistiken zeigen, dass immer mehr Kinder übergewichtig sind.`,
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
  {
    id: 21,
    type: "multiple-choice",
    question:
      "Katharina ist dafür, dass in Schulen mehr Sport unterrichtet wird.",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 22,
    type: "multiple-choice",
    question: "Robert ist dafür, dass in Schulen mehr Sport unterrichtet wird.",
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
  {
    id: 23,
    type: "multiple-choice",
    question: "Helena ist dafür, dass in Schulen mehr Sport unterrichtet wird.",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 24,
    type: "multiple-choice",
    question:
      "Michael ist dafür, dass in Schulen mehr Sport unterrichtet wird.",
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
  {
    id: 25,
    type: "multiple-choice",
    question: "Laura ist dafür, dass in Schulen mehr Sport unterrichtet wird.",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 26,
    type: "multiple-choice",
    question: "Stefan ist dafür, dass in Schulen mehr Sport unterrichtet wird.",
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
];

const lesen2Teil5: Question[] = [
  {
    id: 27,
    type: "multiple-choice",
    question: "Wer darf mit einem 6-jährigen Kind ins Schwimmbad gehen?",
    context: `Freibad Sonnenstein – Auszug aus der Badeordnung

1. Das Freibad ist von Mitte Mai bis Mitte September bei gutem Wetter täglich von 9:00 bis 20:00 Uhr geöffnet. Der letzte Einlass ist um 19:15 Uhr.
2. Kinder unter 7 Jahren ist der Zutritt nur in Begleitung einer Aufsichtsperson (mindestens 16 Jahre alt) gestattet.
3. Vor dem Betreten der Schwimmbecken ist das Duschen aus hygienischen Gründen Pflicht.
4. Das Springen vom Beckenrand ist gefährlich und daher verboten. Nutzen Sie bitte ausschließlich die dafür vorgesehenen Sprungtürme im separaten Sprungbecken.
5. Eigene Speisen und Getränke dürfen gerne mitgebracht und auf der Liegewiese verzehrt werden. Aus Sicherheitsgründen sind Glasflaschen und Glasbehälter jedoch auf dem gesamten Gelände strengstens verboten.
6. Tiere dürfen nicht ins Freibad mitgebracht werden. Ausnahme: Gekennzeichnete Blindenhunde.`,
    options: [
      "Niemand, das Kind muss draußen bleiben.",
      "Jede Person, die mindestens 16 Jahre alt ist.",
      "Ausschließlich die Eltern des Kindes.",
    ],
    correctAnswer: "Jede Person, die mindestens 16 Jahre alt ist.",
  },
  {
    id: 28,
    type: "multiple-choice",
    question: "Was stimmt bezüglich der Öffnungszeiten?",
    options: [
      "Man kann bis 20:00 Uhr ins Schwimmbad gehen.",
      "Man kann noch um 19:30 Uhr eine Eintrittskarte kaufen.",
      "Man kann ab 19:15 Uhr nicht mehr ins Bad.",
    ],
    correctAnswer: "Man kann ab 19:15 Uhr nicht mehr ins Bad.",
  },
  {
    id: 29,
    type: "multiple-choice",
    question: "Wo darf man ins Wasser springen?",
    options: [
      "Von jedem Beckenrand.",
      "Nur im Bereich für Kinder.",
      "Nur von den Sprungtürmen im Sprungbecken.",
    ],
    correctAnswer: "Nur von den Sprungtürmen im Sprungbecken.",
  },
  {
    id: 30,
    type: "multiple-choice",
    question: "Was ist im Freibad nicht erlaubt?",
    options: [
      "Essen von zu Hause mitzubringen.",
      "Glasflaschen mitzubringen.",
      "Sich auf die Liegewiese zu setzen.",
    ],
    correctAnswer: "Glasflaschen mitzubringen.",
  },
];

export const b1Lesen2: Question[] = assignTeile(
  [
    ...lesen2Teil1,
    ...lesen2Teil2,
    ...lesen2Teil3,
    ...lesen2Teil4,
    ...lesen2Teil5,
  ],
  B1_LESEN_TEILE,
);

// ─── MODELLTEST 3 ────────────────────────────────────────────────────────────

const lesen3Teil1: Question[] = [
  {
    id: 1,
    type: "multiple-choice",
    question: "Julia hat den Kochkurs allein besucht.",
    context: `Blog: Julias Kochabenteuer

Am Wochenende habe ich zusammen mit meiner Schwester einen Kochkurs besucht. Wir haben einen thailändischen Kurs gewählt, weil wir beide die asiatische Küche lieben. Der Kurs hat drei Stunden gedauert und wir haben drei verschiedene Gerichte zubereitet: eine Suppe, ein Curry und einen Mango-Salat.

Am besten hat mir das grüne Curry geschmeckt, obwohl es ziemlich scharf war. Meine Schwester fand den Mango-Salat am besten. Der Kursleiter, ein Koch aus Bangkok, war sehr geduldig und hat alles gut erklärt.

Ich möchte auf jeden Fall noch einen weiteren Kurs machen – vielleicht japanisch oder indisch!`,
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Im Kurs haben sie nur ein Gericht gekocht.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Julia plant, weitere Kochkurse zu besuchen.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "Familie Weber ist dieses Jahr in die Berge gefahren.",
    context: `Blog: Familienurlaub an der Ostsee

Wir haben dieses Jahr unseren Familienurlaub an der Ostsee verbracht. Normalerweise fahren wir in die Berge, aber die Kinder wollten unbedingt ans Meer. Wir haben eine kleine Ferienwohnung in Kühlungsborn gemietet.

Das Wetter war leider nicht immer gut – an drei von sieben Tagen hat es geregnet. Trotzdem hatten wir eine tolle Zeit. Bei Regen sind wir ins Ozeaneum nach Stralsund gefahren. Die Kinder waren begeistert von den Haien und Pinguinen.`,
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "Das Wetter war die ganze Woche gut.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 6,
    type: "multiple-choice",
    question: "Bei Regen haben sie ein Museum besucht.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
];

const lesen3Teil2: Question[] = [
  {
    id: 7,
    type: "multiple-choice",
    question:
      "Was können die Bewohner des Mehrgenerationenhauses gemeinsam nutzen?",
    context: `Zusammen leben, zusammen alt werden

In Freiburg gibt es ein besonderes Wohnprojekt: das Mehrgenerationenhaus „Sonnenhof". Hier leben junge Familien, Singles und Senioren unter einem Dach. Jede Partei hat eine eigene Wohnung, aber es gibt auch Gemeinschaftsräume: eine große Küche, einen Garten und einen Spielplatz.

Das Konzept funktioniert gut: Die älteren Bewohner passen manchmal auf die Kinder auf, und die jüngeren helfen bei Einkäufen oder Arztbesuchen. Einmal pro Woche kochen alle zusammen.

Allerdings gibt es auch Konflikte, zum Beispiel wegen Lärm oder unterschiedlicher Vorstellungen von Ordnung. Regelmäßige Hausversammlungen helfen, Probleme gemeinsam zu lösen.`,
    options: [
      "Schlafzimmer und Badezimmer",
      "Küche, Garten und Spielplatz",
      "Nur den Parkplatz",
    ],
    correctAnswer: "Küche, Garten und Spielplatz",
  },
  {
    id: 8,
    type: "multiple-choice",
    question: "Was machen die Bewohner bei Konflikten?",
    options: [
      "Sie ziehen sofort aus",
      "Sie besprechen Probleme bei Hausversammlungen",
      "Sie rufen die Polizei",
    ],
    correctAnswer: "Sie besprechen Probleme bei Hausversammlungen",
  },
  {
    id: 9,
    type: "multiple-choice",
    question: "Wie helfen sich die Generationen gegenseitig?",
    options: [
      "Die Älteren zahlen die Miete für die Jüngeren",
      "Ältere passen auf Kinder auf, Jüngere helfen bei Einkäufen",
      "Alle arbeiten zusammen im Büro",
    ],
    correctAnswer: "Ältere passen auf Kinder auf, Jüngere helfen bei Einkäufen",
  },
  {
    id: 10,
    type: "multiple-choice",
    question: 'Was ist „Foodsharing"?',
    context: `Lebensmittel retten statt wegwerfen

In Deutschland werden jedes Jahr etwa 12 Millionen Tonnen Lebensmittel weggeworfen. Die Initiative „Foodsharing" will das ändern. Freiwillige holen übrig gebliebene Lebensmittel von Bäckereien, Supermärkten und Restaurants ab und verteilen sie kostenlos an alle, die sie haben möchten.

Inzwischen gibt es in vielen Städten sogenannte „Fairteiler" – öffentliche Kühlschränke, in die jeder Lebensmittel stellen oder entnehmen kann. Die Organisation zählt mittlerweile über 400.000 Mitglieder in Deutschland, Österreich und der Schweiz.`,
    options: [
      "Ein neues Restaurant-Konzept",
      "Eine Initiative gegen Lebensmittelverschwendung",
      "Ein Online-Supermarkt",
    ],
    correctAnswer: "Eine Initiative gegen Lebensmittelverschwendung",
  },
  {
    id: 11,
    type: "multiple-choice",
    question: 'Was sind „Fairteiler"?',
    options: [
      "Billige Supermärkte",
      "Öffentliche Kühlschränke für kostenlose Lebensmittel",
      "Lieferdienste für Essen",
    ],
    correctAnswer: "Öffentliche Kühlschränke für kostenlose Lebensmittel",
  },
  {
    id: 12,
    type: "multiple-choice",
    question: "Wie viele Mitglieder hat Foodsharing ungefähr?",
    options: ["40.000", "400.000", "4 Millionen"],
    correctAnswer: "400.000",
  },
];

const lesen3Teil3: Question[] = [
  {
    id: 13,
    type: "matching",
    question: "13. Susanne möchte heute Abend einen spannenden Film sehen.",
    context: `Lesen Sie das Fernsehprogramm a–j. Welche Sendung passt zu welcher Person?

a) 20:15 Uhr - "Tatort: Dunkle Geheimnisse". Der beliebte Krimi aus München. Die Kommissare ermitteln in einem mysteriösen Mordfall. Spannung garantiert!
b) 20:15 Uhr - "Die Höhle der Löwen". Gründer präsentieren ihre innovativen Geschäftsideen und hoffen auf ein Investment von erfolgreichen Unternehmern.
c) 19:30 Uhr - "Wissen macht Ah!". Das clevere Magazin für Kinder und Jugendliche. Heute geht es um den Weltraum und wie Astronauten leben.
d) 21:00 Uhr - "Rund um die Welt". Eine faszinierende Dokumentation über die Natur und Tierwelt in Südamerika. Atemberaubende Bilder aus dem Regenwald.
e) 20:15 Uhr - "Das große Backen". Prominente treten im Backwettbewerb gegeneinander an. Wer zaubert die beste Torte? Mit vielen Tipps zum Nachmachen.
f) 18:00 Uhr - "Sportschau". Die Zusammenfassung aller wichtigen Fußballspiele des Wochenendes, inklusive Interviews mit Spielern und Trainern.
g) 22:30 Uhr - "Late Night Show". Comedy, Musik und prominente Gäste. Perfekt, um den Tag mit einem Lachen ausklingen zu lassen.
h) 20:15 Uhr - "Der Bachelor". Die neue Staffel beginnt! Ein attraktiver Single-Mann sucht unter 20 Frauen seine Traumpartnerin. Romantik und Drama.
i) 19:00 Uhr - "Tagesschau". Die wichtigsten Nachrichten des Tages aus aller Welt. Politik, Wirtschaft und aktuelles Wetter.
j) 20:15 Uhr - "Gute Zeiten, schlechte Zeiten". Die tägliche Seifenoper geht weiter. Wie entscheidet sich Laura? Findet Leon endlich die Wahrheit heraus?`,
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "a",
  },
  {
    id: 14,
    type: "matching",
    question: "14. Max (10 Jahre) interessiert sich sehr für den Weltraum.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "c",
  },
  {
    id: 15,
    type: "matching",
    question:
      "15. Herr Weber möchte wissen, wie er einen Schokoladenkuchen macht.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "e",
  },
  {
    id: 16,
    type: "matching",
    question:
      "16. Lisa und Tim suchen eine Sendung über exotische Tiere und Landschaften.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "d",
  },
  {
    id: 17,
    type: "matching",
    question:
      "17. Frau Müller verpasst keine Folge ihrer Lieblingsserie um 20:15 Uhr.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "j",
  },
  {
    id: 18,
    type: "matching",
    question: "18. Jan sucht Tipps für den Bau eines Regals aus Holz.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "0",
  },
  {
    id: 19,
    type: "matching",
    question:
      "19. Anna möchte sehen, wie junge Unternehmer ihre Firmen-Ideen vorstellen.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "b",
  },
];

const lesen3Teil4: Question[] = [
  {
    id: 20,
    type: "multiple-choice",
    question:
      "Angela ist dafür, dass man soziale Medien in der Freizeit nutzt.",
    context: `Diskussion: „Soziale Medien – Fluch oder Segen?"

Angela: Ich nutze soziale Medien täglich und finde sie großartig. Ich kann mit Freunden in Kontakt bleiben, die weit weg wohnen. Ohne Instagram hätte ich den Kontakt zu vielen verloren.

Markus: Soziale Medien machen süchtig und unglücklich. Studien zeigen, dass junge Menschen, die viel Zeit auf Social Media verbringen, häufiger depressiv sind. Ich halte mich bewusst fern.

Sabine: Für mich sind soziale Medien wichtig für die Arbeit. Als Grafikdesignerin zeige ich dort meine Werke und finde neue Kunden. Privat nutze ich sie aber kaum.

Jörg: Ich finde soziale Medien gefährlich, besonders für Kinder. Man weiß nie, wer sich hinter einem Profil versteckt. Da brauchen wir strengere Regeln.

Nicole: Ich liebe soziale Medien! Man kann so viel Neues lernen – Rezepte, Sprachen, Handwerkskunst. Man muss nur die richtigen Kanäle finden.

Bernd: Social Media ist reine Zeitverschwendung. Statt stundenlang durch Feeds zu scrollen, sollte man lieber ein Buch lesen oder Sport treiben.

Heike: Ich nutze Facebook vor allem, um mich über lokale Veranstaltungen zu informieren. Das finde ich sehr praktisch. Problematisch ist nur, wenn man zu viel persönliche Informationen teilt.`,
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
  {
    id: 21,
    type: "multiple-choice",
    question:
      "Markus ist dafür, dass man soziale Medien in der Freizeit nutzt.",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 22,
    type: "multiple-choice",
    question:
      "Sabine ist dafür, dass man soziale Medien in der Freizeit nutzt.",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 23,
    type: "multiple-choice",
    question: "Jörg ist dafür, dass man soziale Medien in der Freizeit nutzt.",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 24,
    type: "multiple-choice",
    question:
      "Nicole ist dafür, dass man soziale Medien in der Freizeit nutzt.",
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
  {
    id: 25,
    type: "multiple-choice",
    question: "Bernd ist dafür, dass man soziale Medien in der Freizeit nutzt.",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 26,
    type: "multiple-choice",
    question: "Heike ist dafür, dass man soziale Medien in der Freizeit nutzt.",
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
];

const lesen3Teil5: Question[] = [
  {
    id: 27,
    type: "multiple-choice",
    question: "Können Gäste ihre Autos überall auf dem Campingplatz parken?",
    context: `Campingplatz „Am Waldsee“ – Auszug aus der Platzordnung

1. Die Rezeption ist von 8:00 bis 20:00 Uhr geöffnet. Bitte melden Sie sich bei Ankunft sofort an.
2. Fahrzeuge dürfen nur auf den gekennzeichneten Gästeparkplätzen außerhalb des Zeltbereichs abgestellt werden. Das Fahren auf dem Gelände ist nur im Schritttempo erlaubt.
3. Von 22:00 Uhr bis 7:00 Uhr herrscht absolute Nachtruhe. Radios und Fernseher sind auf Zimmerlautstärke zu stellen.
4. Offenes Feuer ist auf dem gesamten Platz strengstens untersagt. Zum Grillen nutzen Sie bitte ausschließlich die dafür vorgesehenen Grillplätze am Rand des Campingplatzes.
5. Hunde sind willkommen, müssen aber auf dem Platz stets an der kurzen Leine geführt werden. Das Mitbringen von Hunden an den Badestrand ist nicht gestattet.`,
    options: [
      "Nein, nur auf den markierten Parkplätzen.",
      "Ja, solange sie langsam fahren.",
      "Nein, Autos sind komplett verboten.",
    ],
    correctAnswer: "Nein, nur auf den markierten Parkplätzen.",
  },
  {
    id: 28,
    type: "multiple-choice",
    question: "Was gilt für die Nachtruhe?",
    options: [
      "Man darf keine Musik mehr hören.",
      "Sie beginnt um 20:00 Uhr.",
      "Man darf Musik nur sehr leise hören.",
    ],
    correctAnswer: "Man darf Musik nur sehr leise hören.",
  },
  {
    id: 29,
    type: "multiple-choice",
    question: "Darf man auf dem Campingplatz grillen?",
    options: [
      "Ja, aber nur an speziellen Grillplätzen.",
      "Ja, überall wenn man vorsichtig ist.",
      "Nein, Feuer ist komplett verboten.",
    ],
    correctAnswer: "Ja, aber nur an speziellen Grillplätzen.",
  },
  {
    id: 30,
    type: "multiple-choice",
    question: "Wo dürfen Hunde nicht hin?",
    options: [
      "Auf den Campingplatz.",
      "An den Badestrand.",
      "Aus dem Auto heraus.",
    ],
    correctAnswer: "An den Badestrand.",
  },
];

export const b1Lesen3: Question[] = assignTeile(
  [
    ...lesen3Teil1,
    ...lesen3Teil2,
    ...lesen3Teil3,
    ...lesen3Teil4,
    ...lesen3Teil5,
  ],
  B1_LESEN_TEILE,
);
