import { StepConfig } from "../GenericFormStep";

export const stepConfigs: StepConfig[] = [
  {
    title: "Har du mulighed for at få en ladeboks derhjemme?",
    fields: [
      {
        type: "checkbox",
        name: "harLader.ja",
        label: "Ja, det har jeg",
      },
      {
        type: "checkbox",
        name: "harLader.nej",
        label: "Nej, det har jeg ikke",
      },
    ],
  },
  {
    title: "Hvor forventer du at lade mest?",
    fields: [
      {
        type: "checkbox",
        name: "hvor.hjemme",
        label: "Primært hjemme",
      },
      {
        type: "checkbox",
        name: "hvor.farten",
        label: "Mest på farten",
      },
      {
        type: "checkbox",
        name: "hvor.begge",
        label: "Både ude og hjemme",
      },
    ],
  },
  {
    title: "Har du muligheden for at lade på dit arbejde?",
    fields: [
      {
        type: "checkbox",
        name: "arbejde.ja",
        label: "Ja, det har jeg",
      },
      {
        type: "checkbox",
        name: "arbejde.nej",
        label: "Nej, det har jeg ikke",
      },
    ],
  },
  {
    title: "Hvordan ønsker du at betale?",
    fields: [
      {
        type: "checkbox",
        name: "betalingsmetode.fast",
        label: "Fast beløb",
      },
      {
        type: "checkbox",
        name: "betalingsmetode.forbrugsafregnet",
        label: "Forbrugsafregnet",
      },
    ],
  },
];
