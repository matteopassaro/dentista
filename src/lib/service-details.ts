import type { ServiceDetail } from "@/types";

type ServiceRow = Omit<ServiceDetail, "icon">;

export const serviceDetails: ServiceRow[] = [
  {
    slug: "implantologia",
    title: "Implantologia",
    shortDescription:
      "Impianti dentali sicuri e prevedibili per ripristinare masticazione ed estetica.",
    description:
      "L'implantologia moderna permette di sostituire uno o più denti mancanti con radici artificiali in titanio biocompatibile, su cui ancoriamo corone, ponti o protesi fisse. Utilizziamo protocolli guidati e diagnostica digitale per massimizzare precisione e comfort.",
    whenNeeded:
      "Quando mancano uno o più elementi dentali, in alternativa a ponti su denti sani o protesi mobili, o per stabilizzare una protesi completa che \"scivola\".",
    benefits: [
      "Ripristino funzionale ed estetico duraturo",
      "Conservazione dell'osso e del profilo gengivale",
      "Nessuna limatura forzata dei denti adiacenti (nei casi singolo elemento)",
      "Piani di cura personalizzati su tempi e budget",
    ],
    processSteps: [
      "Visita con scansione, radiografiche 3D e definizione del piano chirurgico-protesico",
      "Inserimento impianti in sedazione locale; tempi di osteointegrazione spiegati in modo trasparente",
      "Caricamento secondo protocollo: immediato quando indicato, o fasi differite per maggiore prevedibilità",
      "Installazione del manufatto protesico e controlli programmati nel tempo",
    ],
    faq: [
      {
        question: "L'intervento è doloroso?",
        answer:
          "L'intervento avviene in anestesia locale; nel dopo cura si possono presentare lievi fastidi gestibili con terapia medica comune. Vi forniamo istruzioni precise.",
      },
      {
        question: "Quanto durano gli impianti?",
        answer:
          "Con igiene domiciliare professionale e controlli periodici, molti casi durano molti anni. La prognosi dipende da fattori individuali e da abitudini (fumo, patologie sistemiche).",
      },
      {
        question: "Posso avere denti fissi in giornata?",
        answer:
          "In casi selezionati è possibile un carico immediato; in altri è preferibile una fase di guarigione per risultati più stabili. Valutiamo sempre cosa è migliore per te.",
      },
    ],
  },
  {
    slug: "ortodonzia",
    title: "Ortodonzia",
    shortDescription:
      "Allineamento dei denti con tecniche fisse, invisibili e piani su misura per adulti e ragazzi.",
    description:
      "Correggiamo malocclusioni e affollamenti con apparecchi tradizionali, estetici o allineatori trasparenti. Il percorso include diagnosi digitale, simulazione dei movimenti e monitoraggio degli outcome.",
    whenNeeded:
      "Denti affollati, spaziature, morso profondo/aperto, disallineamenti che ostacolano l'igiene o causano usura e problemi articolari.",
    benefits: [
      "Morso funzionale e sorriso armonioso",
      "Igiene domiciliare più semplice su denti allineati",
      "Protocolli personalizzati per esigenze estetiche e lavorative",
    ],
    processSteps: [
      "Valutazione clinica, impronte scansionate o intraorali, documentazione fotografica",
      "Piano di trattamento con tempi stimati, costi e alternative",
      "Applicazione dell'apparecchio o consegna degli allineatori con richiami periodici",
      "Fasi di contenimento con retainer per stabilizzare il risultato",
    ],
    faq: [
      {
        question: "L'ortodonzia è adatta agli adulti?",
        answer:
          "Sì. Molti adulti trattano affollamenti o ricadute post-adolescenzialmente con ottimi risultati, scegliendo anche soluzioni discrete.",
      },
      {
        question: "Quanto dura un trattamento?",
        answer:
          "Dipende dalla complessità del caso; mediamente da alcuni mesi a circa due anni. Ricevi una stima personalizzata in visita.",
      },
    ],
  },
  {
    slug: "igiene-orale",
    title: "Igiene orale professionale",
    shortDescription:
      "Profilassi, educazione all'igiene e mantenimento gengivale per un sorriso sano nel tempo.",
    description:
      "L'igiene professionale non è solo estetica: riduce placca, tartaro e infiammazione gengivale, base per ogni terapia odontoiatrica. Utilizziamo strumentazione delicata e, se utile, ossigeno-ozono o politiche mirate.",
    whenNeeded:
      "Periodicamente (spesso ogni 6–12 mesi), in presenza di gengive sanguinanti, alitosi persistente o prima di trattamenti protesici/chirurgici.",
    benefits: [
      "Prevenzione di carie e malattie parodontali",
      "Sorriso più luminoso rimuovendo pigmentazioni superficiali quando idonee",
      "Piani di mantenimento su misura",
    ],
    processSteps: [
      "Rilevazione tasche parodontali quando indicata",
      "Rimozione di tartaro sopra e sotto gengivale con strumenti manuali e/o ultrasonico",
      "Lucidatura e fluoroprofilassi se necessario; istruzioni di brushing e interdentale",
      "Programmazione richiami",
    ],
    faq: [
      {
        question: "L'igiene professionale rovina lo smalto?",
        answer:
          "No, se eseguita correttamente. Evitiamo abrazioni eccessive e personalizziamo la tecnica in base a sensibilità e rischio.",
      },
      {
        question: "È indicata se ho impianti?",
        answer:
          "Sì. Gli impianti richiedono controlli igienico-professionali regolari per prevenire perimplantiti.",
      },
    ],
  },
  {
    slug: "estetica-dentale",
    title: "Estetica dentale e sbiancamento",
    shortDescription:
      "Sorriso armonioso con sbiancamenti controllati, faccette e restauri minimamente invasivi.",
    description:
      "Progettiamo sorrisi naturali con sbiancamento professionale in studio o domiciliare supervisionato, microabrasioni, faccette in ceramica o restauri adesivi quando indicati.",
    whenNeeded:
      "Denti ingialliti, macchie da fumo/caffè, forma o allineamento lieve da rifinire senza ortodonzia estesa.",
    benefits: [
      "Colori più luminosi con protocolli sicuri per denti e gengive",
      "Piani condivisi tra estetica e salute",
      "Materiali ad alta estetica e durata",
    ],
    processSteps: [
      "Check-up per escludere carie o sensibilità non trattata",
      "Scelta del protocollo di sbiancamento o restauri; mock-up se utile",
      "Applicazione in sicurezza con isolamento gengivale quando necessario",
      "Istruzioni post-trattamento e fotoprogramma domiciliare se previsto",
    ],
    faq: [
      {
        question: "Il sbiancamento danneggia i denti?",
        answer:
          "I protocolli professionali controllano concentrazione e tempi. Possibile transitoria sensibilità termica, gestibile con prodotti desensibilizzanti.",
      },
      {
        question: "Quanto dura il risultato?",
        answer:
          "Dipende da abitudini alimentari e fumo; con manutenzione domestica e richiami i risultati si mantengono a lungo.",
      },
    ],
  },
  {
    slug: "odontoiatria-conservativa",
    title: "Odontoiatria conservativa",
    shortDescription:
      "Ricostruzioni adesive, otturazioni estetiche e cure per conservare il dente naturale.",
    description:
      "Trattiamo carie e trumi minimizzando la rimozione di tessuto sani grazie a tecniche adesive, isolamento del campo e materiali compositi stratificati ad alta estetica.",
    whenNeeded:
      "Carie, vecchie otturazioni difettose, usura dentale, piccole fratture; spesso in abbinamento a igiene e bite guard se c'è bruxismo.",
    benefits: [
      "Massima conservazione di smalto e dentina",
      "Estetica immediata con colori naturali",
      "Procedure usualmente in singola seduta per piccole lesioni",
    ],
    processSteps: [
      "Diagnosi e foto/radiografie quando necessarie",
      "Anestesia locale se utile; rimozione tessuto infetto/indebolito",
      "Ricostruzione stratificata e rifinitura/occlusione controllata",
      "Istruzioni e controllo finale",
    ],
    faq: [
      {
        question: "Meglio composito o amalgama?",
        answer:
          "Oggi prevalgono composite estetiche e adesive. Valutiamo il caso clinico e le intolleranze individuali.",
      },
      {
        question: "Dopo l'otturazione posso mangiare?",
        answer:
          "Spesso sì subito per materiali polimerizzati a luce; in casi specifici consigliamo attesa di qualche ora.",
      },
    ],
  },
  {
    slug: "chirurgia-orale",
    title: "Chirurgia orale",
    shortDescription:
      "Estrazioni complesse, terze molari, rigenerazioni ossee e piccole procedure ambulatoriali sicure.",
    description:
      "Eseguiamo estrazioni incluso terzi molari inclusi o semi-inclusi, apicectomie selettive, biopsie delle mucose e rigenerazioni ossee guidate in collaborazione con il resto del team implanto-protesico.",
    whenNeeded:
      "Elementi non più conservabili, denti del giudizio sintomatici, grandi lesioni ossee prima di impianti, biopsie per lesioni sospette.",
    benefits: [
      "Procedure in ambiente sterile con hemodynamic control routines",
      "Piani di analgesia/anti-edema chiari e follow-up telefonico",
      "Coordinamento con medico curante per terapie sistemiche",
    ],
    processSteps: [
      "Valutazione pre-anestetica e imaging 3D quando necessario",
      "Intervento in locale con tecniche minimamente invasive",
      "Comunicazione post-op scritta + farmaci se prescritti",
      "Controllo di guarigione e rimozione punti se applicabile",
    ],
    faq: [
      {
        question: "Quanto dura il gonfiore dopo un'estrazione del giudizio?",
        answer:
          "Variabile (24–72 ore di picco spesso). Ghiaccio a cicli e posizione semi-alzata aiutano; segui il foglietto che forniamo.",
      },
      {
        question: "Posso guidare dopo?",
        answer:
          "Se non sedati oltre la locale e ti senti bene, spesso sì. Valutiamo caso per caso.",
      },
    ],
  },
  {
    slug: "protesi",
    title: "Protesi fisse e mobili",
    shortDescription:
      "Corone, ponti, protesi su impianti e soluzioni mobili comfort-evolved per ricostruire l'arcata.",
    description:
      "Realizziamo corone e ponti in ceramica integrale, stratificata o metallo-ceramica quando indicato; protesi parziali e totali; sovrastrutture avvitate o cementate su impianti. Integrazione con laboratorio di fiducia per feedback estetici.",
    whenNeeded:
      "Denti fortemente distrutti, edentulia parziale o totale, necessità di sostituire vecchie protesi usurate o instabili.",
    benefits: [
      "Ripresa masticatoria ed estetica personalizzata",
      "Materiali certificati e adattamenti verificati in bocca",
      "Manutenzioni programmate",
    ],
    processSteps: [
      "Collecting impronte digitali o convenzionali, scelta colore e forma denti",
      "Prove estetiche/funzionali con mock-up o provvisori",
      "Consegna della protesi definitiva con regolazione occlusionale",
      "Follow-up e igiene professionale dedicata alle interfacce",
    ],
    faq: [
      {
        question: "Protesi fissa o mobile?",
        answer:
          "Dipende da numero di pilastri, osso disponibile e preferenze. Ti mostriamo pro e contro trasparenti.",
      },
      {
        question: "Quanto tempo serve per una corona?",
        answer:
          "Spesso 2–3 sedute tra preparazione, prova e cementazione; tempi diversi per casi immediati o su impianti.",
      },
    ],
  },
];
