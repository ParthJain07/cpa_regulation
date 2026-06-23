export interface Explanation {
  why: string;
  whyIncorrect: string;
  how: string;
  when: string;
  source: string;
}

export interface Question {
  id: number;
  difficulty: "Medium" | "Hard";
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: Explanation;
}

export const r1Questions: Question[] = [
  // MEDIUM (1-20)
  {
    id: 1,
    difficulty: "Medium",
    text: "Which of the following is an adjustment to arrive at Adjusted Gross Income (AGI)?",
    options: [
      "Charitable contributions",
      "Medical expenses",
      "Educator expenses",
      "State and local income taxes"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Educator expenses are an 'above-the-line' deduction, meaning they are deducted from gross income to arrive at AGI.",
      whyIncorrect: "Charitable contributions, medical expenses, and state/local income taxes are 'below-the-line' itemized deductions taken on Schedule A, not adjustments to arrive at AGI.",
      how: "Deduct up to $300 (indexed for inflation) of qualified expenses for eligible educators.",
      when: "When a K-12 teacher pays out-of-pocket for classroom supplies.",
      source: "IRC §62(a)(2)(D)"
    }
  },
  {
    id: 2,
    difficulty: "Medium",
    text: "Under current law, what is the maximum amount of net capital loss that can be deducted against ordinary income by an individual filing as single?",
    options: [
      "$0",
      "$1,500",
      "$3,000",
      "$5,000"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Individuals can deduct up to $3,000 of net capital losses against ordinary income per year.",
      whyIncorrect: "$0 is incorrect because individuals (unlike C-Corps) are allowed a capital loss deduction. $1,500 is the limit for Married Filing Separately, not Single. $5,000 has no basis in tax law for capital losses.",
      how: "Net all capital gains and losses. If there's a net loss, up to $3,000 offsets ordinary income, and the remainder carries forward indefinitely.",
      when: "Annual limitation on individual capital losses.",
      source: "IRC §1211(b)"
    }
  },
  {
    id: 3,
    difficulty: "Medium",
    text: "Which of the following fringe benefits is fully taxable to the employee?",
    options: [
      "Up to $50,000 of group-term life insurance coverage",
      "Employer-provided health insurance premiums",
      "A cash allowance for meals, not related to overnight travel",
      "De minimis fringe benefits"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Cash allowances are generally taxable as wages. Only specific, statutory fringe benefits are excluded from gross income.",
      whyIncorrect: "Group-term life insurance up to $50k is explicitly excluded by §79. Employer-provided health insurance is explicitly excluded by §106. De minimis fringes are excluded by §132 because accounting for them is unreasonable.",
      how: "Add the cash allowance directly to the employee's gross income.",
      when: "When an employer provides cash or cash-equivalent fringe benefits.",
      source: "IRC §61; IRC §132"
    }
  },
  {
    id: 4,
    difficulty: "Medium",
    text: "For a cash-basis taxpayer, when is interest income generally recognized?",
    options: [
      "When it is earned, regardless of receipt",
      "When it is actually or constructively received",
      "When the underlying bond matures",
      "Only when it is withdrawn from the bank account"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Cash-basis taxpayers recognize income when it is actually or constructively received.",
      whyIncorrect: "'When earned' applies to accrual-basis taxpayers. 'When bond matures' ignores periodic interest payments. 'Only when withdrawn' is incorrect because the funds were constructively available before withdrawal.",
      how: "Constructive receipt occurs when income is credited to the taxpayer's account and available to be drawn upon without substantial limitation.",
      when: "At the time the bank credits interest to the account.",
      source: "Treas. Reg. §1.451-2"
    }
  },
  {
    id: 5,
    difficulty: "Medium",
    text: "How much of a worker's self-employment tax is deductible as an adjustment to arrive at AGI?",
    options: [
      "0%",
      "50%",
      "75%",
      "100%"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Self-employed individuals can deduct the employer-equivalent portion (50%) of their self-employment tax as an above-the-line deduction.",
      whyIncorrect: "0% is incorrect as relief is provided to equate sole proprietors with corporate employees. 75% and 100% are incorrect because the employee-equivalent half remains a non-deductible personal tax.",
      how: "Calculate total SE tax, divide by 2, and enter as an adjustment to income.",
      when: "When a taxpayer has net earnings from self-employment.",
      source: "IRC §164(f)"
    }
  },
  {
    id: 6,
    difficulty: "Medium",
    text: "To claim the Child and Dependent Care Credit, the qualifying child must be under what age?",
    options: [
      "Age 13",
      "Age 17",
      "Age 19",
      "Age 24"
    ],
    correctAnswer: 0,
    explanation: {
      why: "For the Child and Dependent Care Credit, a qualifying individual includes a dependent child under the age of 13 when the care was provided.",
      whyIncorrect: "Age 17 is the cutoff for the Child Tax Credit. Age 19 is the general qualifying child age limit for dependency. Age 24 is the limit for a qualifying child who is a full-time student.",
      how: "Check the child's age. If under 13, care expenses may qualify for the credit to allow the parent to work.",
      when: "When determining eligibility for care credits, distinct from the Child Tax Credit.",
      source: "IRC §21(b)(1)"
    }
  },
  {
    id: 7,
    difficulty: "Medium",
    text: "Which of the following itemized deductions is subject to the overall 2% of AGI floor under current law (assuming TCJA/OBBBA rules)?",
    options: [
      "Unreimbursed employee business expenses",
      "Medical expenses",
      "Gambling losses",
      "None. Miscellaneous itemized deductions subject to the 2% floor are suspended."
    ],
    correctAnswer: 3,
    explanation: {
      why: "The Tax Cuts and Jobs Act (TCJA) suspended all miscellaneous itemized deductions that were subject to the 2% of AGI floor through 2025.",
      whyIncorrect: "Unreimbursed employee expenses are suspended entirely. Medical expenses are subject to a 7.5% floor, not 2%. Gambling losses are an itemized deduction not subject to the 2% floor.",
      how: "Do not deduct unreimbursed employee expenses, tax prep fees, or investment fees on Schedule A.",
      when: "Applies to tax years 2018 through 2025.",
      source: "IRC §67(g)"
    }
  },
  {
    id: 8,
    difficulty: "Medium",
    text: "What is the floor for deducting qualified medical expenses as an itemized deduction?",
    options: [
      "2% of AGI",
      "7.5% of AGI",
      "10% of AGI",
      "No floor; fully deductible"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Qualified medical expenses are only deductible to the extent they exceed 7.5% of the taxpayer's AGI.",
      whyIncorrect: "2% of AGI applies to suspended miscellaneous itemized deductions. 10% was the old medical floor prior to recent tax relief acts. 'No floor' is incorrect as medical expenses are strictly limited.",
      how: "Sum total qualified medical expenses, subtract (AGI * 0.075), and the remainder is the deductible amount.",
      when: "When calculating Schedule A itemized deductions.",
      source: "IRC §213(a)"
    }
  },
  {
    id: 9,
    difficulty: "Medium",
    text: "For an individual filing as Single, what is the maximum limitation on the deduction for State and Local Taxes (SALT)?",
    options: [
      "$5,000",
      "$10,000",
      "$15,000",
      "No limit"
    ],
    correctAnswer: 1,
    explanation: {
      why: "The SALT deduction is capped at $10,000 per year ($5,000 if married filing separately) for individuals.",
      whyIncorrect: "$5,000 is the limit for Married Filing Separately. $15,000 is incorrect. 'No limit' applied prior to the TCJA.",
      how: "Sum all state income/sales taxes and real estate/personal property taxes. If >$10,000, cap the deduction at $10,000.",
      when: "When itemizing deductions on Schedule A.",
      source: "IRC §164(b)(6)"
    }
  },
  {
    id: 10,
    difficulty: "Medium",
    text: "Which of the following is NOT a requirement for an alimony payment to be deductible by the payer (for divorces finalized prior to 2019)?",
    options: [
      "Payments must be in cash or equivalent",
      "Payments must end upon the death of the payee",
      "The payer and payee must not live in the same household",
      "Payments must be explicitly designated for child support"
    ],
    correctAnswer: 3,
    explanation: {
      why: "Child support is strictly NOT considered alimony. If a payment is designated as child support, it is neither deductible by the payer nor taxable to the payee.",
      whyIncorrect: "Cash payments, ending upon death, and not living in the same household are all mandatory statutory requirements for a payment to qualify as deductible alimony.",
      how: "Separate child support from alimony. Only the alimony portion (pre-2019) is an adjustment to income.",
      when: "When analyzing divorce decrees executed before Jan 1, 2019.",
      source: "IRC §71(c)"
    }
  },
  {
    id: 11,
    difficulty: "Medium",
    text: "When a taxpayer receives a state income tax refund, under what condition is it included in gross income?",
    options: [
      "Always",
      "Never",
      "Only if the taxpayer itemized deductions in the prior year and the deduction provided a tax benefit",
      "Only if the taxpayer took the standard deduction in the prior year"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Under the tax benefit rule, a recovery of a previously deducted amount is taxable only if the deduction reduced the taxpayer's tax liability in that prior year.",
      whyIncorrect: "'Always' and 'Never' are incorrect absolutes. If the taxpayer took the standard deduction, the state tax payment provided no tax benefit, so the refund is completely tax-free.",
      how: "Check the prior year return. If they itemized and claimed SALT (up to the cap), the refund is taxable to the extent of the benefit.",
      when: "When a state tax refund is received in the current year for a prior year's taxes.",
      source: "IRC §111"
    }
  },
  {
    id: 12,
    difficulty: "Medium",
    text: "What is the maximum amount of student loan interest that can be deducted 'above-the-line' in a given tax year?",
    options: [
      "$1,500",
      "$2,500",
      "$4,000",
      "No limit"
    ],
    correctAnswer: 1,
    explanation: {
      why: "The maximum adjustment for student loan interest paid is $2,500 per year, subject to phase-outs based on AGI.",
      whyIncorrect: "$1,500 and $4,000 are incorrect arbitrary numbers. 'No limit' is incorrect because the deduction is strictly capped to benefit lower and middle-income borrowers.",
      how: "Enter up to $2,500 of interest paid on qualified higher education loans as an adjustment to arrive at AGI.",
      when: "When a taxpayer repays student loans and is not claimed as a dependent.",
      source: "IRC §221(b)"
    }
  },
  {
    id: 13,
    difficulty: "Medium",
    text: "Which of the following is an allowable moving expense deduction under current law?",
    options: [
      "Moving expenses for a new job 50 miles away",
      "Moving expenses for an active-duty military member moving pursuant to a military order",
      "Moving expenses for a first-time homebuyer",
      "Moving expenses are fully suspended for everyone"
    ],
    correctAnswer: 1,
    explanation: {
      why: "The moving expense deduction is suspended for all taxpayers EXCEPT active-duty members of the Armed Forces moving pursuant to a military order.",
      whyIncorrect: "The 50-mile test applied prior to the TCJA but is now suspended. First-time homebuyers have no moving expense exception. The deduction is not 'fully' suspended due to the military exception.",
      how: "Verify military status and orders. If true, calculate deductible moving and storage costs.",
      when: "Applies to tax years 2018 through 2025.",
      source: "IRC §217(k)"
    }
  },
  {
    id: 14,
    difficulty: "Medium",
    text: "Traditional IRA contributions are generally deductible. However, the deduction may be phased out if the taxpayer:",
    options: [
      "Has gross income over $50,000 regardless of retirement plan coverage",
      "Is an active participant in an employer-sponsored retirement plan and AGI exceeds certain thresholds",
      "Is over age 65",
      "Also contributes to a Roth IRA"
    ],
    correctAnswer: 1,
    explanation: {
      why: "The IRA deduction is phased out if the taxpayer (or their spouse) actively participates in an employer-sponsored plan (like a 401(k)) AND their AGI exceeds the statutory phase-out range.",
      whyIncorrect: "Gross income alone does not phase out the deduction if there's no employer plan. Age 65 does not restrict contributions. Contributing to a Roth IRA limits the total contribution amount ($7,000 combined), but doesn't phase out the deductibility of the Traditional portion.",
      how: "Check the W-2 for the 'Retirement Plan' box. If checked, compare modified AGI to the phase-out limits.",
      when: "When a taxpayer with a workplace plan makes a traditional IRA contribution.",
      source: "IRC §219(g)"
    }
  },
  {
    id: 15,
    difficulty: "Medium",
    text: "Which of the following credits is fully nonrefundable?",
    options: [
      "Earned Income Tax Credit (EITC)",
      "Child Tax Credit (up to the ACTC limit)",
      "Lifetime Learning Credit",
      "American Opportunity Tax Credit (up to 40%)"
    ],
    correctAnswer: 2,
    explanation: {
      why: "The Lifetime Learning Credit is nonrefundable, meaning it can reduce tax liability to zero but cannot generate a refund.",
      whyIncorrect: "The EITC is fully refundable. The Child Tax Credit is partially refundable via the ACTC. The AOTC is up to 40% refundable ($1,000).",
      how: "Apply nonrefundable credits against tax liability first. Unused LLC cannot be refunded.",
      when: "When calculating the final tax due or refund on a return.",
      source: "IRC §25A(c)"
    }
  },
  {
    id: 16,
    difficulty: "Medium",
    text: "How are short-term capital gains taxed for an individual?",
    options: [
      "At preferential capital gains rates (0%, 15%, 20%)",
      "At ordinary income tax rates",
      "They are exempt from taxation",
      "At a flat rate of 25%"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Short-term capital gains (assets held 1 year or less) are taxed at the taxpayer's ordinary marginal income tax rates.",
      whyIncorrect: "Preferential rates (0/15/20) apply to long-term gains. They are not exempt. The flat 25% rate applies to unrecaptured Section 1250 gains, not short-term gains.",
      how: "Net all short-term gains and losses. Add net short-term gains to ordinary income.",
      when: "When an asset is sold after being held for one year or less.",
      source: "IRC §1222(1)"
    }
  },
  {
    id: 17,
    difficulty: "Medium",
    text: "Under the passive activity loss (PAL) rules, passive losses can generally only be used to offset:",
    options: [
      "Portfolio income",
      "Active (ordinary) income",
      "Passive income",
      "Capital gains"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Passive activity losses can only offset passive activity income. They cannot be used to offset active (wages) or portfolio (interest/dividends) income, subject to specific exceptions.",
      whyIncorrect: "Offsetting portfolio or active income is exactly what the PAL rules were created to prevent. Capital gains are portfolio income unless generated by a passive activity.",
      how: "Bucket income and losses. If total passive bucket is negative, the loss is suspended and carried forward.",
      when: "When a taxpayer has losses from rental properties or businesses in which they do not materially participate.",
      source: "IRC §469(a)"
    }
  },
  {
    id: 18,
    difficulty: "Medium",
    text: "Up to how much of the gain from the sale of a primary residence can be excluded by a married couple filing jointly?",
    options: [
      "$250,000",
      "$500,000",
      "$1,000,000",
      "No limit"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 121 allows a married couple filing jointly to exclude up to $500,000 of gain from the sale of a principal residence, provided they meet the ownership and use tests.",
      whyIncorrect: "$250,000 is the limit for Single taxpayers. $1,000,000 and 'no limit' are completely incorrect.",
      how: "Verify they owned and lived in the home for 2 of the past 5 years. Subtract basis from sale price; exclude up to $500k of the gain.",
      when: "When a primary residence is sold.",
      source: "IRC §121(b)(2)"
    }
  },
  {
    id: 19,
    difficulty: "Medium",
    text: "Are child support payments taxable to the recipient or deductible by the payer?",
    options: [
      "Taxable to recipient, deductible by payer",
      "Not taxable to recipient, deductible by payer",
      "Taxable to recipient, not deductible by payer",
      "Not taxable to recipient, not deductible by payer"
    ],
    correctAnswer: 3,
    explanation: {
      why: "Child support is a personal family obligation. It is never taxable income to the recipient and never deductible by the payer.",
      whyIncorrect: "Any option making it taxable or deductible confuses child support with pre-2019 alimony.",
      how: "Exclude child support payments entirely from the gross income of the payee.",
      when: "Applies to all child support payments, regardless of divorce date.",
      source: "IRC §71(c)"
    }
  },
  {
    id: 20,
    difficulty: "Medium",
    text: "What is the penalty for early withdrawal (before age 59.5) from a Traditional IRA, assuming no exceptions apply?",
    options: [
      "5%",
      "10%",
      "15%",
      "20%"
    ],
    correctAnswer: 1,
    explanation: {
      why: "A 10% penalty applies to the taxable portion of early distributions from qualified retirement plans, including Traditional IRAs, unless a statutory exception is met.",
      whyIncorrect: "5%, 15%, and 20% are incorrect penalty rates. 10% is the standard statutory penalty.",
      how: "Multiply the taxable distribution by 10% and add this to the total tax liability on Form 5329.",
      when: "When distributions are taken prior to age 59.5 without meeting an exception (like first home purchase or medical expenses).",
      source: "IRC §72(t)"
    }
  },

  // HARD (21-40)
  {
    id: 21,
    difficulty: "Hard",
    text: "A taxpayer actively participates in a rental real estate activity and has a $40,000 loss. Their Modified AGI (MAGI) before the loss is $120,000. How much of the rental loss can they deduct against ordinary income this year?",
    options: [
      "$0",
      "$10,000",
      "$15,000",
      "$25,000"
    ],
    correctAnswer: 2,
    explanation: {
      why: "The mom-and-pop exception allows up to $25,000 of active rental real estate losses to offset ordinary income. However, this $25,000 is phased out by 50 cents for every dollar MAGI exceeds $100,000. MAGI is $120,000, which is $20,000 over. $20k * 50% = $10,000 phase-out. $25k - $10k = $15,000 allowed deduction.",
      whyIncorrect: "$0 ignores the mom-and-pop exception. $10,000 is the phase-out amount, not the allowed deduction. $25,000 ignores the phase-out entirely.",
      how: "Calculate phase-out: ($120,000 - $100,000) * 0.5 = $10,000. Reduce the max $25k by $10k to get $15k deductible. The remaining $25k loss is suspended.",
      when: "When a taxpayer with MAGI between $100k and $150k has losses from active rental real estate.",
      source: "IRC §469(i)"
    }
  },
  {
    id: 22,
    difficulty: "Hard",
    text: "Under the Qualified Business Income (QBI) deduction rules, what is the 'overall limitation' on the deduction?",
    options: [
      "20% of the taxpayer's QBI",
      "20% of the taxpayer's taxable income minus net capital gains",
      "50% of W-2 wages",
      "25% of W-2 wages plus 2.5% of unadjusted basis of property"
    ],
    correctAnswer: 1,
    explanation: {
      why: "While the QBI deduction is generally 20% of QBI, it is ultimately capped by the overall limitation: 20% of the taxpayer's taxable income in excess of net capital gains.",
      whyIncorrect: "20% of QBI is the tentative deduction, not the overall limit. The W-2 wage and property limitations are component-level limits, not the final 'overall' taxable income limitation.",
      how: "Calculate 20% of QBI. Then calculate 20% of (Taxable Income - Net Capital Gains). The deduction is the lesser of the two amounts.",
      when: "Calculated at the very end of the QBI deduction process for all taxpayers.",
      source: "IRC §199A(a)"
    }
  },
  {
    id: 23,
    difficulty: "Hard",
    text: "An individual receives a $10,000 dividend from a C-Corporation. The corporation had $4,000 of current year E&P and $2,000 of accumulated E&P. The taxpayer's stock basis is $1,500. What is the tax treatment of the $10,000 distribution?",
    options: [
      "$10,000 dividend income",
      "$6,000 dividend income, $4,000 capital gain",
      "$6,000 dividend income, $1,500 tax-free return of capital, $2,500 capital gain",
      "$6,000 dividend income, $4,000 tax-free return of capital"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Distributions are dividends to the extent of Current and Accumulated E&P ($4k + $2k = $6k). The excess ($4k) is a non-taxable return of capital to the extent of basis ($1.5k). Any remaining excess ($2.5k) is treated as a capital gain.",
      whyIncorrect: "Treating it all as dividend ignores E&P limits. Failing to account for basis treats the whole excess as a capital gain or a return of capital, both of which are incorrect without applying the basis limit.",
      how: "Step 1: E&P = Dividend ($6,000). Step 2: Remainder against basis = Return of Capital ($1,500). Step 3: Excess over basis = Capital Gain ($2,500).",
      when: "When a corporation makes a distribution exceeding its Earnings & Profits.",
      source: "IRC §301(c)"
    }
  },
  {
    id: 24,
    difficulty: "Hard",
    text: "Which of the following creates a positive adjustment (adds to taxable income) when calculating Alternative Minimum Tax (AMT)?",
    options: [
      "State and local income taxes deducted on Schedule A",
      "Charitable contributions",
      "Home mortgage interest on acquisition indebtedness",
      "The standard deduction"
    ],
    correctAnswer: 0,
    explanation: {
      why: "Taxes (SALT) are not deductible for AMT purposes. If a taxpayer itemized and deducted SALT for regular tax, that amount must be added back to compute Alternative Minimum Taxable Income (AMTI).",
      whyIncorrect: "Charitable contributions and mortgage interest on acquisition debt are deductible for both regular tax and AMT (no adjustment needed). The standard deduction is generally not allowed for AMT, but SALT is the classic positive adjustment.",
      how: "Take regular taxable income and add back the SALT deduction claimed on Schedule A.",
      when: "When calculating AMTI on Form 6251.",
      source: "IRC §56(b)(1)(A)"
    }
  },
  {
    id: 25,
    difficulty: "Hard",
    text: "A taxpayer exercises an Incentive Stock Option (ISO). The grant price was $10, the market price at exercise is $30, and the taxpayer holds the stock. What are the regular tax and AMT consequences at the time of exercise?",
    options: [
      "Regular Tax: $0 income; AMT: $20 preference item",
      "Regular Tax: $20 W-2 income; AMT: $0 preference",
      "Regular Tax: $20 capital gain; AMT: $0 preference",
      "Regular Tax: $0 income; AMT: $0 preference"
    ],
    correctAnswer: 0,
    explanation: {
      why: "Exercising an ISO does not trigger regular income tax until the stock is sold. However, the 'bargain element' (Market price - Grant price = $20) is an AMT preference item in the year of exercise.",
      whyIncorrect: "Non-qualified stock options (NSOs) trigger W-2 income, not ISOs. There is no capital gain until the stock is sold. Assuming no AMT preference ignores the core complexity of ISOs.",
      how: "For regular tax: no action. For AMT: Add $20 per share to AMTI.",
      when: "In the tax year an Incentive Stock Option is exercised and the stock is held.",
      source: "IRC §56(b)(3); IRC §421"
    }
  },
  {
    id: 26,
    difficulty: "Hard",
    text: "Jane buys a taxable corporate bond for $10,500. The face value is $10,000, and it matures in 10 years. She elects to amortize the $500 bond premium. What is the tax effect?",
    options: [
      "She takes a $500 capital loss when the bond matures.",
      "She offsets her interest income from the bond each year by the amortized premium, reducing her taxable interest.",
      "She claims a miscellaneous itemized deduction for the amortized premium each year.",
      "She adds the $500 to her basis and reports a $500 capital gain at maturity."
    ],
    correctAnswer: 1,
    explanation: {
      why: "For taxable bonds, a taxpayer can elect to amortize the bond premium. The amortized amount offsets (reduces) the interest income reported from the bond each year.",
      whyIncorrect: "If she didn't elect to amortize, she'd take a capital loss at maturity, but the prompt says she elected. It is an offset to interest income, not an itemized deduction. Adding to basis makes no sense for a premium.",
      how: "Reduce reported interest income by the annual amortized premium amount, and correspondingly reduce the basis of the bond.",
      when: "When a taxpayer purchases a taxable bond at a premium and makes the amortization election.",
      source: "IRC §171"
    }
  },
  {
    id: 27,
    difficulty: "Hard",
    text: "Which of the following individuals is subject to the 'Kiddie Tax'?",
    options: [
      "A 16-year-old with $5,000 of W-2 wages and $500 of interest.",
      "A 20-year-old full-time student whose earned income provides 60% of her support.",
      "A 17-year-old with $0 earned income and $4,000 of dividend income.",
      "A 25-year-old full-time student with $10,000 of capital gains."
    ],
    correctAnswer: 2,
    explanation: {
      why: "The Kiddie Tax applies to children under 18 (or under 24 if full-time students who do not provide >50% of their own support) whose unearned income exceeds the statutory threshold ($2,500 for 2024). The 17-year-old has $4,000 unearned income.",
      whyIncorrect: "The 16-year-old's unearned income ($500) is below the threshold. The 20-year-old provides >50% of her support. The 25-year-old is over the age limit (under 24).",
      how: "Check age, student status, and support. Then check if unearned income > $2,500. If yes, the excess is taxed at the parents' marginal rate.",
      when: "When dependent children have significant investment/unearned income.",
      source: "IRC §1(g)"
    }
  },
  {
    id: 28,
    difficulty: "Hard",
    text: "A cash-basis contractor completes a job in December Year 1. He leaves the $5,000 invoice on the client's desk. The client mails a check on Dec 30. The contractor receives it Jan 2, Year 2. When does the contractor recognize the income?",
    options: [
      "Year 1, because the services were completed in Year 1.",
      "Year 1, because he had constructive receipt when the invoice was left.",
      "Year 2, because he actually received the check in Year 2.",
      "Year 1, because the check was mailed in Year 1."
    ],
    correctAnswer: 2,
    explanation: {
      why: "A cash-basis taxpayer recognizes income when actually or constructively received. Mailing a check does not constitute constructive receipt until it arrives in the mail or is otherwise available to the taxpayer.",
      whyIncorrect: "'Services completed' applies to accrual accounting. Leaving an invoice doesn't give the contractor control over the funds. Mailing the check doesn't put funds in the contractor's control until received.",
      how: "Since the check was not received or available to be picked up in Year 1, income is recognized in Year 2 when received.",
      when: "Determining year-end cutoff for cash-basis income.",
      source: "Treas. Reg. §1.451-2(a)"
    }
  },
  {
    id: 29,
    difficulty: "Hard",
    text: "To qualify for the Foreign Earned Income Exclusion (FEIE), a U.S. citizen must pass either the Bona Fide Residence Test or the Physical Presence Test. What is the Physical Presence Test requirement?",
    options: [
      "Present in a foreign country for at least 183 days during a consecutive 12-month period.",
      "Present in a foreign country for at least 330 full days during any period of 12 consecutive months.",
      "Present in a foreign country for the entire tax year (Jan 1 - Dec 31).",
      "Employed by a foreign corporation for at least 6 months."
    ],
    correctAnswer: 1,
    explanation: {
      why: "The Physical Presence Test requires the taxpayer to be physically present in a foreign country or countries for at least 330 full days during any period of 12 consecutive months.",
      whyIncorrect: "183 days applies to the substantial presence test for aliens in the US, not the FEIE. The entire tax year is required for the Bona Fide Residence Test, not the Physical Presence Test. Employment duration is irrelevant to the days test.",
      how: "Count days present outside the US/international waters. Ensure it hits 330 days in a sliding 12-month window.",
      when: "When expats attempt to exclude foreign wages from US taxation.",
      source: "IRC §911(d)(1)(B)"
    }
  },
  {
    id: 30,
    difficulty: "Hard",
    text: "Mark makes a noncash charitable contribution of a painting to an art museum. He bought it for $5,000, and its FMV is $50,000. The museum puts the painting in its storage vault and does not display it (unrelated use). What is Mark's maximum charitable deduction?",
    options: [
      "$5,000",
      "$50,000",
      "$25,000",
      "$0"
    ],
    correctAnswer: 0,
    explanation: {
      why: "For tangible personal property contributed to a charity that puts it to an 'unrelated use' (not related to the charity's tax-exempt purpose), the deduction is limited to the taxpayer's adjusted basis ($5,000), not the Fair Market Value.",
      whyIncorrect: "$50,000 would only be allowed if the museum used it for a related purpose (e.g., displaying it). $25,000 is an arbitrary split. $0 is incorrect because a deduction is allowed, just limited.",
      how: "Identify the property type (tangible personal) and the charity's use (unrelated). Restrict the deduction to the lesser of basis or FMV.",
      when: "When donating art, vehicles, or collectibles to a charity.",
      source: "IRC §170(e)(1)(B)(i)"
    }
  },
  {
    id: 31,
    difficulty: "Hard",
    text: "Under the wash sale rules, if a taxpayer sells stock at a $1,000 loss on May 1 and buys substantially identical stock on May 15, what happens to the loss?",
    options: [
      "The loss is fully deductible.",
      "The loss is permanently disallowed.",
      "The loss is disallowed and added to the basis of the new stock purchased.",
      "The loss is deferred until the end of the tax year."
    ],
    correctAnswer: 2,
    explanation: {
      why: "A wash sale occurs if substantially identical stock is purchased within 30 days before or after the sale that generated a loss. The loss is disallowed and added to the cost basis of the replacement shares.",
      whyIncorrect: "The loss is not currently deductible. It is not 'permanently' disallowed because the taxpayer will eventually realize the loss when they sell the new shares. It is deferred indefinitely, not just to the end of the year.",
      how: "Disallow the $1,000 capital loss. Add $1,000 to the basis of the new stock bought on May 15.",
      when: "When an investor sells at a loss and quickly buys back the same asset.",
      source: "IRC §1091"
    }
  },
  {
    id: 32,
    difficulty: "Hard",
    text: "Which of the following best describes the tax treatment of gambling winnings and losses?",
    options: [
      "Winnings are netted against losses, and only the net winnings are reported in gross income.",
      "Winnings are included in gross income; losses are deductible as an itemized deduction but only to the extent of winnings.",
      "Winnings are included in gross income; losses are fully deductible as an itemized deduction.",
      "Winnings are tax-free; losses are non-deductible."
    ],
    correctAnswer: 1,
    explanation: {
      why: "Gambling winnings must be reported fully in gross income. Gambling losses can be deducted on Schedule A (Itemized Deductions), but the deduction is strictly limited to the amount of gambling winnings reported.",
      whyIncorrect: "Casual gamblers cannot net winnings and losses 'above the line'. Losses are absolutely capped at the amount of winnings, so they are not 'fully deductible' if they exceed winnings. Winnings are always taxable.",
      how: "Report gross winnings on Schedule 1. Claim losses on Schedule A up to the amount of winnings. They cannot be netted 'above the line' for casual gamblers.",
      when: "When a taxpayer has both casino winnings and losses.",
      source: "IRC §165(d)"
    }
  },
  {
    id: 33,
    difficulty: "Hard",
    text: "A taxpayer has a $50,000 ordinary income and a $10,000 net long-term capital loss. He is single. What is his AGI?",
    options: [
      "$40,000",
      "$50,000",
      "$47,000",
      "$48,500"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Capital losses are allowed up to $3,000 per year against ordinary income. Therefore, $50,000 - $3,000 = $47,000 AGI. The remaining $7,000 loss carries forward.",
      whyIncorrect: "$40,000 incorrectly deducts the full $10k loss. $50,000 incorrectly deducts nothing. $48,500 assumes a $1,500 limit, which applies to Married Filing Separately, not Single.",
      how: "Apply the $3,000 capital loss limitation limit against ordinary income.",
      when: "When calculating AGI with net capital losses.",
      source: "IRC §1211(b)"
    }
  },
  {
    id: 34,
    difficulty: "Hard",
    text: "In a 'like-kind' exchange (Section 1031) of real property, the taxpayer gives up land with a basis of $40,000 and an FMV of $100,000. He receives land with an FMV of $90,000 and $10,000 of cash (boot). What is his recognized gain?",
    options: [
      "$0",
      "$10,000",
      "$60,000",
      "$50,000"
    ],
    correctAnswer: 1,
    explanation: {
      why: "In a 1031 exchange, gain recognized is the lesser of the 'realized gain' or the 'boot received'. Realized gain = ($90k + $10k) - $40k = $60,000. Boot received = $10,000 cash. Lesser is $10,000.",
      whyIncorrect: "$0 ignores the cash boot received. $60,000 is the realized gain, not recognized. $50,000 is an incorrect calculation.",
      how: "Calculate Realized Gain. Identify Boot Received. Recognize Gain = Min(Realized Gain, Boot Received).",
      when: "When real estate is exchanged and cash/boot is part of the transaction.",
      source: "IRC §1031(b)"
    }
  },
  {
    id: 35,
    difficulty: "Hard",
    text: "For the American Opportunity Tax Credit (AOTC), how is the credit calculated on $4,000 of qualified education expenses?",
    options: [
      "100% of the first $2,000, plus 25% of the next $2,000 (Max $2,500)",
      "20% of up to $10,000 of expenses (Max $2,000)",
      "100% of all expenses up to $2,500",
      "50% of the first $4,000 (Max $2,000)"
    ],
    correctAnswer: 0,
    explanation: {
      why: "The AOTC is calculated as 100% of the first $2,000 of qualified expenses, plus 25% of the next $2,000. If expenses are $4,000+, the credit maxes out at $2,500.",
      whyIncorrect: "20% up to $10,000 is the formula for the Lifetime Learning Credit. The other options are fabricated formulas.",
      how: "($2,000 * 100%) + ($2,000 * 25%) = $2,000 + $500 = $2,500.",
      when: "When claiming education credits for the first four years of post-secondary education.",
      source: "IRC §25A(i)"
    }
  },
  {
    id: 36,
    difficulty: "Hard",
    text: "Which of the following is considered 'constructive receipt' of income?",
    options: [
      "A check received on Dec 31 after banking hours, uncashed until Jan 2.",
      "A client promises to pay in January for work completed in December.",
      "Stock appreciates in value by 50% but is not sold.",
      "An employer deposits funds into an escrow account that the employee cannot access until year 3."
    ],
    correctAnswer: 0,
    explanation: {
      why: "A check received on Dec 31 is constructively received in the current year, even if deposited later, because the funds were available to the taxpayer.",
      whyIncorrect: "Promises to pay are not constructively received. Unrealized appreciation is not received. Funds in escrow with substantial restrictions are not constructively received.",
      how: "Assess if the taxpayer had control or the ability to utilize the funds. A check in hand is considered received, regardless of banking hours.",
      when: "Determining the timing of income recognition at year-end.",
      source: "Treas. Reg. §1.451-2"
    }
  },
  {
    id: 37,
    difficulty: "Hard",
    text: "A noncorporate taxpayer has 'excess business losses'. What happens to these losses?",
    options: [
      "They are permanently disallowed.",
      "They offset ordinary income up to the statutory limit, and the excess is carried forward as a Net Operating Loss (NOL).",
      "They are carried back 5 years to trigger a refund.",
      "They are treated as capital losses."
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under §461(l), business losses for noncorporate taxpayers are limited (e.g., $305,000 for single taxpayers in 2024). Any 'excess business loss' is disallowed in the current year and carried forward as an NOL.",
      whyIncorrect: "They are not permanently disallowed; they become NOLs. Carrybacks were generally eliminated by the TCJA. They remain ordinary losses, not capital losses.",
      how: "Sum total business income and losses. If the net loss exceeds the threshold, cap the current deduction at the threshold, and roll the rest forward.",
      when: "When a sole proprietor or pass-through owner has massive business losses.",
      source: "IRC §461(l)"
    }
  },
  {
    id: 38,
    difficulty: "Hard",
    text: "An individual dies on July 1. How is their final income tax return filed?",
    options: [
      "No return is required for the year of death.",
      "A return is filed covering Jan 1 to July 1, using standard tax brackets.",
      "The estate files a combined return for the whole year.",
      "The surviving spouse must file MFS for the deceased."
    ],
    correctAnswer: 1,
    explanation: {
      why: "A final individual tax return must be filed for a decedent covering the period from Jan 1 to the date of death. Standard deductions and brackets are generally not prorated.",
      whyIncorrect: "A return is definitely required if income thresholds are met. The estate files its own return (Form 1041) for income *after* death. A surviving spouse can file Married Filing Jointly for the year of death, not forced to use MFS.",
      how: "The executor or surviving spouse files Form 1040 for the decedent for the short year.",
      when: "When handling the final tax matters of a deceased taxpayer.",
      source: "IRC §443(a)"
    }
  },
  {
    id: 39,
    difficulty: "Hard",
    text: "A taxpayer receives a scholarship of $15,000. They use $10,000 for tuition and books, and $5,000 for room and board. What is the tax consequence?",
    options: [
      "$0 taxable",
      "$5,000 taxable income",
      "$10,000 taxable income",
      "$15,000 taxable income"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Scholarships are tax-free only to the extent they are used for qualified tuition and related expenses (tuition, fees, books). Amounts used for room and board are taxable gross income.",
      whyIncorrect: "$0 incorrectly assumes room and board is qualified. $10,000 incorrectly taxes the qualified portion. $15,000 incorrectly taxes the whole scholarship.",
      how: "Subtract the qualified expenses ($10k) from the total scholarship ($15k). The remaining $5k is taxable.",
      when: "When a degree candidate receives a comprehensive scholarship.",
      source: "IRC §117"
    }
  },
  {
    id: 40,
    difficulty: "Hard",
    text: "What is the tax treatment of Social Security benefits for a high-income taxpayer?",
    options: [
      "100% of benefits are taxable.",
      "Up to 85% of benefits are taxable.",
      "Up to 50% of benefits are taxable.",
      "0% of benefits are taxable."
    ],
    correctAnswer: 1,
    explanation: {
      why: "For high-income taxpayers (provisional income above the second threshold, e.g., $34k Single/$44k MFJ), a maximum of 85% of Social Security benefits must be included in gross income.",
      whyIncorrect: "100% is never taxable. Up to 50% applies only to middle-income taxpayers (between the first and second thresholds). 0% applies only to low-income taxpayers.",
      how: "Calculate provisional income (MAGI + 50% of SS benefits). If it exceeds the upper tier threshold, calculate the taxable portion up to an 85% cap.",
      when: "When upper-middle to high-income retirees receive Social Security.",
      source: "IRC §86"
    }
  }
];
