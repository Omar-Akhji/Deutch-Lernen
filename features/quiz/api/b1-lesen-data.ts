import { Question } from "../model/types";
import { assignTeile, B1_LESEN_TEILE } from "../lib/examStructure";

// ─── MODELLTEST 1 ────────────────────────────────────────────────────────────

const lesen1Teil1: Question[] = [
  {
    id: 1,
    type: "multiple-choice",
    question: "Clemens zieht mit seiner Familie oft in ein anderes Land um.",
    context: `Mein Name ist Clemens. Ich bin 12 Jahre alt und mein Vater ist Diplomat. Alle drei bis vier Jahre ziehen wir deshalb in ein anderes Land. Ich wurde in Deutschland geboren, aber schon als ich zwei Wochen alt war, bin ich mit meiner Mutter nach Beirut geflogen. Das ist die Hauptstadt des Libanon. Aus den ersten Jahren weiß ich nicht mehr viel.

Das erste Land, an das ich mich erinnere, ist Portugal. Wir hatten ein pinkfarbenes Haus mit einem großen Garten. Am Wochenende waren wir oft an einem wunderschönen Strand nördlich von Lissabon. Das Meer, eigentlich muss ich sagen „der Ozean“, war dort herrlich blau und ich habe sehr gern im Sand gespielt.

Englisch musste ich schon ganz früh lernen. Ich bin in Portugal in einen internationalen Kindergarten gegangen. Alle Kinder kamen dort aus anderen Ländern. Deshalb wurde Englisch gesprochen.

Als ich fünf Jahre alt war, sind wir dann nach Berlin gezogen. Am Anfang hat es mir dort gar nicht gefallen – einfach zu kalt, fand ich. Und kein Meer und keine großen schwarzen Oliven zum Frühstück. Aber dann gewöhnt man sich wieder an das Neue und plötzlich wurde Deutschland zu meiner Heimat. Ich dachte: Jetzt bleiben wir hier für immer. Falsch gedacht. Immerhin sieben Jahre sind wir in Berlin geblieben, dann mussten wir wieder die Koffer packen.

Seit einem halben Jahr lebe ich mit meiner Familie in New York. Jetzt bin ich froh darüber, dass ich Englisch sprechen kann. New York ist eine der aufregendsten Städte der Welt. Es ist in den meisten Dingen ganz anders als Berlin: In manche Stadtviertel gehen die Leute nur, um zu arbeiten, in anderen leben sie, und in manche gehen sie gar nicht – weil sie zu gefährlich sind.

Mittlerweile habe ich gemerkt, dass es einfach Zeit braucht, sich an ein neues Land zu gewöhnen. Irgendwann wird sich sicherlich auch New York für mich wie Heimat anfühlen. Manchmal denke ich, es wäre toll, immer nur an einem Ort zu leben. Doch wenn ich es mir recht überlege, ist es schon ziemlich aufregend, die Welt kennenzulernen.`,
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Clemens kann sich kaum noch an die Zeit im Libanon erinnern.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Clemens' Haus in Portugal lag am Meer.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "Clemens besuchte einen englischsprachigen Kindergarten.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "In Berlin wohnte Clemens bis zu seinem siebten Lebensjahr.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 6,
    type: "multiple-choice",
    question:
      "Clemens meint, es gibt große Unterschiede zwischen Berlin und New York.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
];

const lesen1Teil2: Question[] = [
  {
    id: 7,
    type: "multiple-choice",
    question: "Tongchun ...",
    context: `Ni Hao, Mama!
Wenn Tongchun Jiang von seiner „Mama“ schwärmt, denken die anderen Studenten manchmal, der Student rede von seiner Mutter in Shanghai. Dabei meint er Rita Jakobson aus Offenburg, bei der er jeden Sonntag auf dem Sofa sitzt und Sandkuchen isst.

Rita und Gerald Jakobson machen bei dem Projekt „Senioren für ausländische Studenten“ mit und sind so etwas wie Leiheltern – für Tongchun aus China und drei andere Gaststudenten.

Was die Jakobsons mit ihren Schützlingen machen, könnte man einen Crashkurs nennen – in der Kunst des schrecklich normalen deutschen Familienlebens. Sie unternehmen Wanderungen. Sie sitzen im Wohnzimmer und spielen Karten. Und sie fragen Tongchun alles, was Eltern studierende Kinder nun einmal fragen: Wie läuft es an der Uni? Was machen die Noten? „Wenn ich eine gute Note bekomme, rufe ich zuerst Mama an“, sagt Tongchun.

Für die Jakobsons ist der Informatikstudent aus Shanghai ein Sohn auf Zeit. „Als unsere eigenen Kinder aus dem Haus waren, wollten wir uns um andere kümmern. Dazu gehört alles, vom Wäschewaschen bis hin zum gemeinsamen Silvesterfeiern“, sagt Rita Jakobson.

Dass Offenburger Senioren auf Gaststudenten attraktiver wirken als Szenepartys in Berlin, zeigen die Statistiken. Am Anfang des Aufenthalts wollen nur 20 Prozent der Gaststudenten nach ihrem Abschluss in Deutschland bleiben. Am Ende sind es 80 Prozent. Das sagt alles.`,
    options: [
      "a) findet seine Mitstudenten in Shanghai sehr nett.",
      "b) reist jede Woche zu seiner Familie nach China.",
      "c) hat in Deutschland so etwas wie eine Ersatzfamilie gefunden.",
    ],
    correctAnswer:
      "c) hat in Deutschland so etwas wie eine Ersatzfamilie gefunden.",
  },
  {
    id: 8,
    type: "multiple-choice",
    question: "In diesem Projekt geht es darum, ...",
    options: [
      "a) dass Rentner für ausländische Studenten kochen.",
      "b) dass ältere Menschen ausländischen Studenten helfen, sich in Deutschland wohlzufühlen.",
      "c) dass ausländischen Studenten bei älteren Deutschen wohnen.",
    ],
    correctAnswer:
      "b) dass ältere Menschen ausländischen Studenten helfen, sich in Deutschland wohlzufühlen.",
  },
  {
    id: 9,
    type: "multiple-choice",
    question: "Rita Jakobson berichtet, ...",
    options: [
      "a) dass sie früher selbst im Ausland studiert hat.",
      "b) dass die ausländischen Studenten oft Probleme mit ihren Gasteltern haben.",
      "c) dass sie durch das Projekt selbst viel Neues kennenlernt.",
    ],
    correctAnswer:
      "c) dass sie durch das Projekt selbst viel Neues kennenlernt.",
  },
  {
    id: 10,
    type: "multiple-choice",
    question: "In diesem Text geht es darum, ...",
    context: `WebStamp: persönliche Briefmarken
Die Schweizerische Post bietet jetzt den WebStamp, der elektronischen Briefmarke, eine neue, kreative Idee. WebStamp bietet die Möglichkeit, direkt am PC eigene Briefmarken zu gestalten und auszudrucken. Besonders interessant ist diese innovative Online-Frankier-Lösung für Firmen, da Briefe und Mailings mit individuellen Marken auffallen und beim Empfänger für Interesse sorgen. So sendet man auf und mit der Briefmarke auch eine Mini-Reklame und bleibt den Kunden auf jeden Fall in Erinnerung.

Die Vorteile von WebStamp lassen sich ganz einfach nutzen. Nach der Anmeldung auf der Webseite der Schweizerischen Post kann’s losgehen mit dem Gestalten einer individuellen Briefmarke. Die Benutzung selbst ist kostenlos. Man bezahlt nur das Porto, also den Wert, den die Briefmarke dann hat. Eine 1-Franken-Briefmarke kostet demnach auch nur einen Franken. Diese neuartigen Briefmarken gelten sowohl im Inland als auch im Ausland.

Da das alles über Computerprogramme läuft, sind auch verschiedene Druckformate möglich, falls man beispielsweise die Empfängeradresse in die eigene WebStamp integrieren möchte. Adressen können direkt aus Excel importiert werden.

Genaue Informationen und Ideen zur Gestaltung erhält man in der Info-Broschüre der Schweizerischen Post unter www.post.ch/webstamp.`,
    options: [
      "a) wie die Schweizerische Post funktioniert.",
      "b) dass die Schweizerische Post eine neue Idee hatte.",
      "c) wie man Briefe schneller verschickt.",
    ],
    correctAnswer: "b) dass die Schweizerische Post eine neue Idee hatte.",
  },
  {
    id: 11,
    type: "multiple-choice",
    question: "Die WebStamp ...",
    options: [
      "a) kostet auf jeden Fall mehr als eine normale Briefmarke.",
      "b) kann man selbst am Computer machen.",
      "c) ist nur für Firmen interessant.",
    ],
    correctAnswer: "b) kann man selbst am Computer machen.",
  },
  {
    id: 12,
    type: "multiple-choice",
    question: "Die Adresse des Empfängers ...",
    options: [
      "a) kann direkt aus Excel übernommen werden.",
      "b) muss man immer von Hand auf den Brief schreiben.",
      "c) wird von einem extra Programm gedruckt.",
    ],
    correctAnswer: "a) kann direkt aus Excel übernommen werden.",
  },
];

const lesen1Teil3: Question[] = [
  {
    id: 13,
    type: "matching",
    question:
      "13. Susanne möchte im Urlaub verreisen und weiß nicht, wer in dieser Zeit auf ihre kleine, weiße Maus aufpassen kann.",
    context: `Lesen Sie die Situationen 13-19 und die Anzeigen a-j. Welche Anzeige passt zu welcher Situation?
Für eine Situation gibt es keine passende Anzeige. In diesem Fall schreiben Sie ein x.

a) Dringend gesucht: Frauchen u./od. Herrchen, die armem, rotem Cockerspaniel (Rüde, kastriert, 5 1/2 J.) nach dem Tod seines Frauchens ein neues Zuhause (mit Garten) geben. Tel. 089/3095486

b) Eselfohlen Diana, braun, geboren 21.6. zu verkaufen. Fam. Diethelm, D-70307 Stuttgart, Tel. 0173/5087342

c) Arme Katze „Blacky“, 4j., überaus gutmütig, wurde von ihren Leuten bei der Übersiedlung einfach zurückgelassen! Wer nimmt sie liebevoll auf? Tel. 0 38 62/32 681

d) Gesucht wird der Graupapagei „Burli“, der am 1. Juni aus Wien 21. Bezirk entflogen ist! Er ist sehr zutraulich. Tel. 01/290 60 43. Bel. 2000,-

e) Graupapageienbabys, liebevoll v. Hd. aufgezogen zu verkaufen, Tel. 02166/930305

f) Nehme Ihren Hund / Ihre Katze während Ihres Urlaubs in Pflege! Tel. 08084/529763

g) für Ihr Tier! ARCHE NOAH - Die etwas „andere“ TIERKLINIK, 5020 Salzburg. Sie wollen Ihren Urlaub ohne Sorgen um das Haustier genießen? Wir versorgen Kleintiere liebevoll während dieser Zeit!

h) Nehme Ihren Hund in Pflege bei Urlaub oder am Tag. Nur Hunde, die für die Wohnung geeignet sind. Tel. 01 73-28 85 11 99

i) Nehme/Suche gebrauchtes oder neues Aquarium kostenlos, 30 l – 320 l mit Zubehör ☎ 07631 / 18357

j) 05.03. Fisch- & Korallentag, 11–16 Uhr Schauaquarium Mundenhof. Verkauf von Fischen, Pflanzen, Garnelen, Korallen- ablekern, Makroalgen u. Zubehör`,
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "x"],
    correctAnswer: "g",
  },
  {
    id: 14,
    type: "matching",
    question:
      "14. Thomas ist Single und hält sich einen Dackel. Die Nachbarn haben sich beschwert, weil der Hund in der Wohnung laut wird, wenn Thomas tagsüber im Büro ist. Er möchte das Problem lösen.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "x"],
    correctAnswer: "h",
  },
  {
    id: 15,
    type: "matching",
    question:
      "15. Die Familie Schmidt hat einen großen Garten und eine Bernhardiner-Hündin. Damit ihr Haustier nicht allein ist, wären sie bereit, einen zweiten Hund aufzunehmen. Er soll aber nicht so groß sein.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "x"],
    correctAnswer: "a",
  },
  {
    id: 16,
    type: "matching",
    question:
      "16. Herr Albrecht muss aus beruflichen Gründen umziehen und kann seinen Hund nicht mitnehmen. Er sucht ein neues Zuhause für ihn.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "x"],
    correctAnswer: "x",
  },
  {
    id: 17,
    type: "matching",
    question:
      "17. Eva möchte für ihr neues, großes Aquarium noch einige Fische kaufen.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "x"],
    correctAnswer: "j",
  },
  {
    id: 18,
    type: "matching",
    question:
      "18. Karl will sich eine Katze anschaffen. Er mag diese Tiere, weil sie nicht viel Pflege brauchen und sehr selbstständig sind.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "x"],
    correctAnswer: "c",
  },
  {
    id: 19,
    type: "matching",
    question: "19. Frau Bach mag Vögel, sie sucht zurzeit einen Papagei.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "x"],
    correctAnswer: "e",
  },
];

const lesen1Teil4: Question[] = [
  {
    id: 20,
    type: "multiple-choice",
    question: "Alexandra",
    context: `In einer Online-Zeitung lesen Sie Kommentare zu einem Artikel über Kettenmails.
Würde die Person bei einer Kettenmail mitmachen?

Beispiel (Henriette, 24, Magdeburg): Wenn du eine Mail geschickt bekommst, in der du aufgefordert wirst, sie an alle Freunde weiterzuschicken – dann lass es bleiben. Du machst dich nur unbeliebt. Denn bei solchen Kettenmails handelt es sich fast immer um blöde Späße. Oft haben diese Mails sogar Viren und machen etwas am PC kaputt. (Nein)

Alexandra, 28, Ludwigshafen: Kettenmails sind für mich einfach ein Teil der Kommunikation mit anderen. Mir ist es noch nie passiert, dass eine Kettenmail etwas kaputt gemacht hat. Ich mache auch nicht immer, was da steht, z.B. an mindestens 10 Personen schicken oder so. Ich sehe das einfach als einen Teil meiner Kommunikation und wenn die Mail lustig oder interessant ist, schicke ich sie auch weiter. Ich sehe keinen Grund, der dagegen spricht.

Nils, 41, Hamburg: Wenn ich etwas bekomme, das auch nur entfernt an eine Kettenmail erinnert, lösche ich es sofort. Da kann man sich nie sicher sein, ob da nicht irgendeine Werbefirma dahinter steht und auf diese Weise versucht, möglichst viele E-Mail-Adressen zu sammeln. Die Adressen können dann für Werbe-Mails oder Spams benutzt werden. Dann wird man nachher nur mit Werbung bombardiert.

Stefan, 30, Freistadt: Die Frage ist immer, was da eigentlich drin steht. Wenn es ein Aufruf in der Not ist, z.B. um Blut zu spenden, würde ich es auf jeden Fall einmal nachprüfen. Bei diesen Mails müsste dann auch stehen, wo man sich telefonisch erkundigen kann. Da ruft man an und informiert sich. Ich mache also immer erstmal eine Mail auf. Aber ehrlich gesagt würde ich sie nicht weiterschicken, denn vielleicht ärgert man die anderen damit nur.

Charlotte, 48, Göttingen: Vor ein paar Tagen habe ich mal so eine Mail bekommen. Es ging um Rezepte. Ich sollte ein Rezept an jemanden schicken und dann die Mail an zehn Freunde. Vorher habe ich einen Namen von der Liste der Mitspielenden gestrichen und mich selbst dazu geschrieben. Nun werde ich ganz viele Rezepte von mir Unbekannten erhalten. Zwei Rezepte habe ich schon und ich freue mich auf die nächsten.

Victor, 26, Zürich: Die E-Mail ist nicht für Spiele erfunden worden, sondern um die Kommunikation zu erleichtern. Deshalb kann ich nicht verstehen, dass es Leute gibt, die bei einer Kettenmail mitmachen. So eine Zeitverschwendung! Da könnte man doch etwas Besseres mit dem Computer anfangen, zum Beispiel häufiger an Freunde schreiben.

Wiebke, 18, Gelsenkirchen: Ich freue mich immer über Post, egal ob nur an mich oder an viele, ob zum Weiterschicken oder nicht. Allgemein bin ich der Meinung, dass man Wichtiges und Interessantes grundsätzlich immer an alle weiterleiten muss. Das ist doch das Gute am Internet und das gilt auch für Kettenmails.

Katta, 34, Wien: Das schrecklichste sind diese Kettenmails, in denen steht, dass man ganz viel Unglück haben wird, wenn man nicht sofort alles an 10 Freunde weiterschickt. Nein, so einen Psychoterror kann ich nicht unterstützen! Mir hat das alle Kettenmails vergrault, ich will bei keiner mehr mitmachen.`,
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
  {
    id: 21,
    type: "multiple-choice",
    question: "Nils",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 22,
    type: "multiple-choice",
    question: "Wiebke",
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
  {
    id: 23,
    type: "multiple-choice",
    question: "Stefan",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 24,
    type: "multiple-choice",
    question: "Charlotte",
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
  {
    id: 25,
    type: "multiple-choice",
    question: "Victor",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 26,
    type: "multiple-choice",
    question: "Katta",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
];

const lesen1Teil5: Question[] = [
  {
    id: 27,
    type: "multiple-choice",
    question: "Führungen ...",
    context: `Deutsches Museum
Öffnungszeiten: Geöffnet täglich 9.00 bis 17.00 Uhr; Einlass bis 16.00 Uhr.
Eintrittspreise: Erwachsene 8,50 €, Ermäßigt 7,00 €, Schüler und Studenten 3,00 €. Planetarium zusätzlich 2,00 €. Eintritt für Mitglieder und Kinder unter 6 Jahren frei.

Werden Sie Mitglied! Mit einem Jahresbeitrag von 52,- € können Sie mit einer Begleitperson und zwei Kindern (oder allen eigenen Kindern) unter 16 Jahren jederzeit das Deutsche Museum besuchen.

Führungen: Schulklassenführungen, Übersichtsführungen, Fachführungen in Deutsch und Fremdsprachen. Anmeldung schriftlich bitte sechs Wochen vorher. Führungen und Vorführungen für Einzelpersonen und Familien sind kostenlos (außer Planetarium und Übersichtsführung).

Behindertengerechter Zugang: Rollstuhlfahrer können fast alle Ausstellungen über Rampen und Aufzüge erreichen. Das Personal hilft Ihnen gerne.

Gastronomie: Restaurant (1. OG), Cafeteria (EG, Verzehr von Mitgebrachtem möglich).
Museum Shop: Großer Sortiment an technik- und wissenschaftsgeschichtlicher Literatur.`,
    options: [
      "a) sind für Schulklassen gratis.",
      "b) sollten vorher telefonisch gemeldet werden.",
      "c) finden nicht nur auf Deutsch statt.",
    ],
    correctAnswer: "c) finden nicht nur auf Deutsch statt.",
  },
  {
    id: 28,
    type: "multiple-choice",
    question: "Wer Mitglied ist, ...",
    options: [
      "a) ist auf jeden Fall erwachsen.",
      "b) braucht keinen Eintritt zu bezahlen.",
      "c) darf nicht allein das Museum besuchen.",
    ],
    correctAnswer: "b) braucht keinen Eintritt zu bezahlen.",
  },
  {
    id: 29,
    type: "multiple-choice",
    question: "Im Museum kann man ...",
    options: [
      "a) als Behinderter alle Ausstellungen besichtigen.",
      "b) auch Bücher kaufen.",
      "c) nur warm essen.",
    ],
    correctAnswer: "b) auch Bücher kaufen.",
  },
  {
    id: 30,
    type: "multiple-choice",
    question: "Das Museum erreicht man ...",
    options: [
      "a) am besten mit dem Auto.",
      "b) mit dem Bus Linie 17.",
      "c) mit der S-Bahn.",
    ],
    correctAnswer: "c) mit der S-Bahn.",
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
