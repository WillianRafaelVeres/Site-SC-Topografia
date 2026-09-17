/**
 * Parceria Florestal SC — premissas e cálculo do exemplo público.
 *
 * Este é o ÚNICO local onde as premissas do simulador ficam definidas.
 * Para atualizar o exemplo do site, altere apenas `partnershipExample`.
 *
 * Importante:
 * - O visitante edita somente a área (hectares). Nada mais é exposto na interface.
 * - `landFactor` equivale ao fator de aptidão da área. No exemplo público ele é
 *   sempre 1 (área de excelente aptidão operacional) e o termo nunca aparece na tela.
 * - O proprietário NÃO tem custos florestais descontados neste modelo (ownerForestCost = 0).
 * - `years` é apenas o horizonte do exemplo, não o prazo de um contrato.
 */

export const WHATSAPP_NUMBER = '5547984388016';

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export type PartnershipScenario = {
  id: string;
  company: number;
  owner: number;
  profile: string;
};

export const partnershipExample = {
  defaultArea: 10,
  minArea: 0.5,
  maxArea: 10000,
  years: 15,
  salaryReference: 1621,
  woodPricePerM3: 200,
  ima: 40,
  landFactor: 1,
  soySacksPerHaYear: 21,
  soyPricePerSack: 130,
  scenarios: [
    { id: '70-30', company: 0.7, owner: 0.3, profile: 'Maior renda anual' },
    { id: '60-40', company: 0.6, owner: 0.4, profile: 'Distribuição intermediária' },
    { id: '50-50', company: 0.5, owner: 0.5, profile: 'Maior participação final' },
  ] as PartnershipScenario[],
};

const roundCents = (value: number) => Math.round(value * 100) / 100;

export type ScenarioResult = {
  scenario: PartnershipScenario;
  annualPayment: number;
  periodicPayments: number;
  ownerWoodValue: number;
  ownerTotal: number;
  differenceVsAgriculturalReference: number;
};

export type PartnershipResult = {
  area: number;
  years: number;
  soyAnnualReference: number;
  soyPeriodReference: number;
  scenarios: ScenarioResult[];
};

/** Calcula o exemplo ilustrativo para uma área em hectares. */
export function calculatePartnership(area: number, example = partnershipExample): PartnershipResult {
  const { years, salaryReference, woodPricePerM3, ima, landFactor, soySacksPerHaYear, soyPricePerSack } = example;

  // Referência de arrendamento agrícola (soja) — usada apenas para comparação.
  const soyAnnualReference = area * soySacksPerHaYear * soyPricePerSack;
  const soyPeriodReference = soyAnnualReference * years;

  // Valor estimado da madeira em pé considerado ao final do exemplo (sem descontar corte ou retirada).
  const estimatedTotalWoodValue = area * ima * years * woodPricePerM3;

  const scenarios = example.scenarios.map((scenario) => {
    // Remuneração anual: quanto maior a participação da empresa na madeira, maior o pagamento anual.
    const annualPaymentPerHa = salaryReference * scenario.company * scenario.company * landFactor;
    const annualPayment = roundCents(annualPaymentPerHa * area);
    const periodicPayments = roundCents(annualPayment * years);
    const ownerWoodValue = roundCents(estimatedTotalWoodValue * scenario.owner);
    const ownerForestCost = 0; // custos florestais de implantação e manejo ficam com a empresa
    const ownerTotal = roundCents(periodicPayments + ownerWoodValue - ownerForestCost);

    return {
      scenario,
      annualPayment,
      periodicPayments,
      ownerWoodValue,
      ownerTotal,
      differenceVsAgriculturalReference: roundCents(ownerTotal - soyPeriodReference),
    };
  });

  return {
    area,
    years,
    soyAnnualReference: roundCents(soyAnnualReference),
    soyPeriodReference: roundCents(soyPeriodReference),
    scenarios,
  };
}

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const decimal = new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 });

export const formatBRL = (value: number) => brl.format(value);
export const formatNumber = (value: number) => decimal.format(value);
export const formatSignedBRL = (value: number) => `${value < 0 ? '−' : '+'} ${brl.format(Math.abs(value))}`;
