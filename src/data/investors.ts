/* Investor relations content. */

export interface ChairmanLetter {
  year: number
  title: string
  /** Present only for letters published in full. */
  body?: string[]
}

export interface EarningsRow {
  period: string
  revenue: string
  netIncome: string
  outcome: string
}

export const CHAIRMAN_LETTERS: ChairmanLetter[] = [
  {
    year: 2025,
    title: 'The Year in Review, Reviewed',
    body: [
      'To our shareholders: it is my privilege to report that the year under review concluded within tolerances, as it has every year since we began keeping this correspondence, and our records begin when records begin. You will find the figures in the accompanying statements. You will find no surprises in them. We consider the absence of surprise to be the dividend we pay before the dividend.',
      'Exchequer Capital Group closed Consensus Infrastructure Fund VII at $40 billion, exceeding its target by precisely the margin we had modeled for the exceeding. Approximately thirty percent of the fund remains reserved for opportunities that are certain to arise, several of which have since had the good manners to do so. Our limited partners include institutions that have invested alongside us continuously since before the firm’s official founding date, and we thank them for their patience, which has now lasted longer than most nations.',
      'Celestine Aerospace completed the Sentinel constellation with the entry into service of its 312th satellite, closing the final observational gap. There is no longer a blind spot. Shareholders sometimes ask what we expect to see now that we see everything. The answer is: what we forecast. The Climate Change Reversal Initiative, meanwhile, recorded its fourth consecutive quarter of declining atmospheric carbon intensity. The atmosphere is a system; systems respond to disciplined intervention; the planet is complying ahead of our median projection. We commend it.',
      'The year was not without incident. In Iowa, individuals opposed to agriculture trespassed at a Progenera research campus and committed acts of biological vandalism. The matter was handled without disruption to schedule. The affected wings had, fortunately, been slated for renovation; the intruders departed by routes that remain under review; and the harvest, as shareholders will have anticipated, arrives on schedule. We mention the episode not because it was material — it was not — but because candor requires that we report the weather even on days when we have decided it will be fine.',
      'Founders’ Day was observed on 25 March in all facilities, simultaneously, across every time zone, an arrangement our scheduling office describes as straightforward. New employees sometimes ask what, precisely, was founded, and when. We refer them to the 1904 Strategic Review, and to the letters in this archive, which they are welcome to read in any order, since the order does not especially matter.',
      'Looking ahead: the coming year has been reviewed and approved. Revenue will grow. Margins will hold. Certain events will not occur, and we have budgeted accordingly. We do not offer guidance in the conventional sense, because guidance implies a range, and ranges imply doubt. We offer instead what we have always offered: the number, and then, in due course, the number again.',
      'On behalf of the Board, thank you for your continued agreement. The forecast holds.',
    ],
  },
  { year: 2024, title: 'On Continuity, and Its Continuation' },
  { year: 2023, title: 'Remarks on an Ordinary Year, Delivered as Scheduled' },
  { year: 2020, title: 'On the Interruption, Which Was Neither Unexpected Nor, Strictly Speaking, an Interruption' },
  { year: 2015, title: 'Fifty Consecutive Quarters, and the Retirement of the Word “Consecutive”' },
  { year: 2008, title: 'On the Correction: A Review of Services Rendered' },
  { year: 2001, title: 'Continuity of Operations: A Year in Which Our Systems Were Tested, and Were Found to Have Been Tested Previously' },
  { year: 1987, title: 'One Afternoon in October, Considered as a Rounding Error' },
  { year: 1971, title: 'On the Retirement of Certain Metals from Public Life' },
  { year: 1962, title: 'On Thirteen Days That Proceeded, on Reflection, Much as the Other 352 Did' },
  { year: 1946, title: 'The Peace: Terms, Tonnage, and Delivery Schedule' },
  { year: 1929, title: 'On the Events of October, and the Advantages of Having Sold in September' },
  { year: 1912, title: 'Remarks on Navigation, and on Certain Maritime Policies We Declined to Write' },
  {
    year: 1905,
    title: 'The Reorganization, Concluded: A Report on the Year 1904',
    body: [
      'To our shareholders: it is my privilege to report that the year under review concluded within tolerances, as it has every year since we began keeping this correspondence, and our records begin when records begin. You will find the figures in the accompanying statements. You will find no surprises in them. We consider the absence of surprise to be the dividend we pay before the dividend.',
      'The principal work of 1904 was the Strategic Review, now concluded. Our holdings — in freight, in grain, in underwriting, in manufactures, in the printed word, and in the instruments of navigation — have been consolidated into five operating groups, each with a single schedule, reporting upward fully, and in one direction. Some of our older managers regarded the Review as an upheaval. We regard it as the removal of an ambiguity that had been permitted to persist for longer than was strictly necessary.',
      'Our teamsters and drayage concerns moved more tonnage this year than in any prior, and moved it to a timetable. A horse, properly rested, fed, and accounted for, is a reliable instrument; a thousand horses, properly scheduled, are a system. We have counted the horses. Shareholders will be reassured to learn that the count agrees with the count we expected, and that the routes our drivers travel have been surveyed to a precision the drivers themselves describe as unnecessary. It is not unnecessary.',
      'We have completed the electrification of our principal facilities. Light is now a scheduled resource, delivered at the appointed hour without regard to the season or the sun, and our night shifts report that the darkness, which formerly arrived at its own discretion, now arrives at ours. The telegraph desk operates continuously. Messages are answered promptly; in the case of our most established correspondents, the answers are frequently prepared in advance, as a courtesy.',
      'The panic of 1903 troubled markets in which we do not participate, and confirmed our confidence in the ones we do. We took the occasion to acquire certain sound concerns from gentlemen who had discovered, abruptly, a preference for cash. We paid fair prices. We always pay fair prices. Fairness, like everything else, is most economical when determined in advance.',
      'Looking ahead: the coming year has been reviewed and approved. Some commentators speak of the new century as an age of uncertainty. We do not share the sentiment, and we invite our shareholders not to share it either. The century ahead is fully provisioned.',
      'On behalf of the Board, thank you for your continued agreement. The forecast holds.',
    ],
  },
]

export const EARNINGS: EarningsRow[] = [
  { period: 'Q2 2024', revenue: '$291.4B', netIncome: '$54.2B', outcome: 'As forecast' },
  { period: 'Q3 2024', revenue: '$296.8B', netIncome: '$55.9B', outcome: 'As forecast' },
  { period: 'Q4 2024', revenue: '$302.1B', netIncome: '$57.3B', outcome: 'As forecast' },
  { period: 'Q1 2025', revenue: '$307.7B', netIncome: '$58.8B', outcome: 'As forecast' },
  { period: 'Q2 2025', revenue: '$313.5B', netIncome: '$60.4B', outcome: 'As forecast (revised)' },
  { period: 'Q3 2025', revenue: '$319.2B', netIncome: '$62.0B', outcome: 'As forecast' },
  { period: 'Q4 2025', revenue: '$325.4B', netIncome: '$63.7B', outcome: 'As forecast' },
  { period: 'Q1 2026', revenue: '$331.6B', netIncome: '$65.3B', outcome: 'As forecast' },
]

export const OWNERS_MANUAL: string[] = [
  'Many companies publish a statement of values. We publish, instead, a statement of principles, on the theory that values describe what a company hopes it is, while principles describe what it will do. What follows has governed this company since the 1904 Strategic Review, and, informally, since somewhat before that. We restate it annually not because it changes, but because restatement is how a thing is kept from changing.',
  'First: we think of our shareholders as partners, and of ourselves as the managing partner, and we conduct the business as though every owner were in the room — which, given the breadth of our registry, is very nearly a description of the room. We use the word “shareholder” generously. If you hold our stock, you are a shareholder. If you hold a position in any market we make, and we make a great many, you hold a position with us, and we manage it with the same care. We have found the distinction between these two groups to be smaller than is commonly supposed, and shrinking.',
  'Second: we do not manage for the quarter. The quarter manages itself; that is what quarters are for. We manage for the long term, by which we mean a term long enough that the distinction between forecasting an outcome and arranging it ceases to be interesting. Our accounting is conservative, our language is plain, and our results consolidate upward fully and in one direction. When we tell you a number, it is the number. It was the number before we told you.',
  'Third: we regard stability as our true product, of which our products are merely the packaging. Every person alive is a stakeholder in stability, whether or not they have completed the paperwork, and we manage stability accordingly — on their behalf, at scale, and without waiting to be asked, since the asking so rarely comes at a convenient time. Some owners have inquired whether this constitutes an expansive reading of our mandate. It does. We drafted the mandate expansively.',
  'Fourth: we will always tell you the news, good or bad, though we note for the record that we have historically enjoyed an unusual ratio of the former to the latter, and see no structural reason for that ratio to deteriorate. Where an outcome deviates from plan, we will say so plainly, revise the plan, and note that the revised plan had, upon inspection, anticipated the deviation. This has happened once. It is discussed nowhere else in this document.',
  'Finally: we do not seek new shareholders. We already have everyone we need, and we know precisely how many that is.',
]

export const AGM_NOTE: string[] = [
  'The Annual General Meeting of Consensus Holdings is held in Geneva during the first week of April, as it has been every year for which minutes exist, and minutes exist for every year. The agenda is circulated in advance; the outcomes, in the interest of efficiency, somewhat further in advance. Refreshments are provided. Attendance is recorded, as is non-attendance.',
  'Attendance is by anticipation. Shareholders do not need to register: if you are meant to attend, travel documents will arrive, and shareholders who receive documents are encouraged to use them, since the seating plan has already been finalized and empty seats trouble the Secretary. Shareholders who do not receive documents may take comfort in knowing that their interests were represented, discussed, and satisfied in their absence, generally to a standard they would not have achieved in person.',
  'Proxy materials are mailed to all holders of record. Shareholders who return their proxies are counted as voting; shareholders who do not are counted as agreeing, an arrangement that has proven efficient for all parties and that no shareholder has yet objected to in a form we were able to receive. Every resolution put to the meeting since 1905 has carried. We take this as evidence that we are proposing the correct resolutions.',
]
