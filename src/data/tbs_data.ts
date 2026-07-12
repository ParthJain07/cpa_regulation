export interface TBSRow {
  id: number;
  item: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface TBSTab {
  id: number;
  title: string;
  columnAHeader: string;
  columnBHeader: string;
  rows: TBSRow[];
}

export interface TBS {
  id: string; // e.g. "TBS-075006"
  code: string; // e.g. "TBS-1"
  title: string; // e.g. "R1 - TBS 1: Income & Filing Foundation (M1, M2, M3)"
  badge: string; // "Application"
  scenario: string;
  tabs: TBSTab[];
}

export const r1TbsList: TBS[] = [
  {
    id: "TBS-075006",
    code: "TBS-1",
    title: "R1 - TBS 1: Income & Filing Foundation (M1, M2, M3)",
    badge: "Application",
    scenario: "James and Patricia Cole were married with one dependent child, Mia, age 16. On March 15 of the current year, James passed away. Patricia works as a nurse. James had been self-employed as a consultant. They own their home in Texas.",
    tabs: [
      {
        id: 1,
        title: "1. Filing Status & Gross Income",
        columnAHeader: "Income / Situation Item",
        columnBHeader: "Answer",
        rows: [
          {
            id: 1,
            item: "Filing Status for Patricia (current year)",
            options: [
              "Married filing jointly",
              "Qualifying widow(er)",
              "Head of household",
              "Single"
            ],
            correctAnswer: 0,
            explanation: "In the year a spouse dies, the surviving spouse may file married filing jointly provided they have not remarried before the end of the tax year."
          },
          {
            id: 2,
            item: "Patricia received $150,000 life insurance proceeds from James's policy",
            options: [
              "Include in gross income",
              "Exclude from gross income"
            ],
            correctAnswer: 1,
            explanation: "Life insurance proceeds paid to a beneficiary due to the death of the insured are excluded from gross income under IRC §101."
          },
          {
            id: 3,
            item: "Patricia received a $1,200 state income tax refund (they took the standard deduction last year)",
            options: [
              "Include in gross income",
              "Exclude from gross income"
            ],
            correctAnswer: 1,
            explanation: "State tax refunds are only includable if the taxpayer itemized deductions in the prior year and received a tax benefit (Tax Benefit Rule under IRC §111). Since they took the standard deduction, the refund is excluded."
          },
          {
            id: 4,
            item: "James received $5,000 in consulting fees before he died",
            options: [
              "Include in gross income",
              "Exclude from gross income"
            ],
            correctAnswer: 0,
            explanation: "Self-employment income is includable in gross income regardless of when during the year it is earned prior to death."
          },
          {
            id: 5,
            item: "Patricia won $3,500 at a charity raffle",
            options: [
              "Include in gross income",
              "Exclude from gross income"
            ],
            correctAnswer: 0,
            explanation: "Gambling and raffle winnings are fully includable in gross income under IRC §61."
          },
          {
            id: 6,
            item: "Patricia received $800/month in child support from a prior marriage",
            options: [
              "Include in gross income",
              "Exclude from gross income"
            ],
            correctAnswer: 1,
            explanation: "Child support payments received are not includable in the recipient's gross income under IRC §71."
          },
          {
            id: 7,
            item: "James received $2,000 workers' compensation for a prior workplace injury",
            options: [
              "Include in gross income",
              "Exclude from gross income"
            ],
            correctAnswer: 1,
            explanation: "Workers' compensation received for a work-related injury or illness is excluded from gross income under IRC §104."
          },
          {
            id: 8,
            item: "Patricia received $4,500 dividends from US mutual funds",
            options: [
              "Include in gross income",
              "Exclude from gross income"
            ],
            correctAnswer: 0,
            explanation: "Dividends from mutual funds are includable in gross income. Qualified dividends may be taxed at preferential rates but are still included in gross income."
          }
        ]
      },
      {
        id: 2,
        title: "2. Filing Requirement Thresholds",
        columnAHeader: "Taxpayer Situation (Current Year)",
        columnBHeader: "Required to File Federal Income Tax Return?",
        rows: [
          {
            id: 1,
            item: "Single taxpayer, age 24, gross income of $15,200 (2024 Standard Deduction is $14,600)",
            options: [
              "Yes — required to file",
              "No — not required to file"
            ],
            correctAnswer: 0,
            explanation: "A single individual under age 65 must file if gross income equals or exceeds the standard deduction of $14,600 ($15,200 > $14,600)."
          },
          {
            id: 2,
            item: "Single taxpayer, age 68 (blind), gross income of $15,800 (Base standard deduction $14,600 + age/blindness additional $1,950 = $16,550 threshold)",
            options: [
              "Yes — required to file",
              "No — not required to file"
            ],
            correctAnswer: 1,
            explanation: "A single taxpayer age 65 or older gets an additional standard deduction of $1,950 ($16,550 total threshold). Since gross income of $15,800 is less than $16,550, filing is not required."
          },
          {
            id: 3,
            item: "Married couple filing jointly, both age 40, combined gross income of $28,000 (2024 MFJ Standard Deduction is $29,200)",
            options: [
              "Yes — required to file",
              "No — not required to file"
            ],
            correctAnswer: 1,
            explanation: "For married filing jointly where both spouses are under 65, the filing threshold is the standard deduction of $29,200. With $28,000 gross income, they are below the threshold."
          },
          {
            id: 4,
            item: "Self-employed college student, age 20 (claimed as dependent on parents' return), net earnings from self-employment of $600",
            options: [
              "Yes — required to file",
              "No — not required to file"
            ],
            correctAnswer: 0,
            explanation: "Any individual with net earnings from self-employment of $400 or more is required to file a federal income tax return and pay self-employment tax, regardless of dependent status or total income."
          }
        ]
      }
    ]
  },
  {
    id: "TBS-075012",
    code: "TBS-2",
    title: "R1 - TBS 2: Deductions & Tax Computation (M4, M5, M6, M7)",
    badge: "Application",
    scenario: "Rachel and Tom Bennett are married filing jointly. Tom is a self-employed freelance photographer. Rachel works as a teacher. They have two children under age 13 in daycare. They paid mortgage interest, made charitable donations, and paid student loan interest during the year. Tom's net self-employment income is $90,000.",
    tabs: [
      {
        id: 1,
        title: "1. Above-the-Line Adjustments (M4)",
        columnAHeader: "Item",
        columnBHeader: "Deductible as Adjustment to Income (Yes/No)",
        rows: [
          {
            id: 1,
            item: "Student loan interest paid of $2,000",
            options: [
              "Yes — deductible up to $2,500 subject to income phase-out",
              "No — not deductible as an adjustment"
            ],
            correctAnswer: 0,
            explanation: "Student loan interest is an above-the-line adjustment to income up to $2,500 per tax return, subject to modified AGI phase-outs."
          },
          {
            id: 2,
            item: "Tom's self-employment tax (employer-equivalent portion)",
            options: [
              "Yes — 50% of SE tax is deductible as adjustment",
              "No — SE tax is strictly an itemized deduction"
            ],
            correctAnswer: 0,
            explanation: "Under IRC §164(f), self-employed individuals can deduct the employer-equivalent portion (50%) of self-employment tax as an adjustment to arrive at AGI."
          },
          {
            id: 3,
            item: "Tom's self-employed health insurance premiums of $8,000",
            options: [
              "Yes — fully deductible as adjustment for self-employed",
              "No — must be itemized under medical expenses (subject to 7.5% floor)"
            ],
            correctAnswer: 0,
            explanation: "Self-employed health insurance premiums paid for the taxpayer, spouse, and dependents are 100% deductible above-the-line (§162(l)), provided the business has net profit."
          },
          {
            id: 4,
            item: "Rachel's unreimbursed classroom supplies of $350",
            options: [
              "Yes — educator expense deduction up to $300 (for one educator)",
              "Yes — fully deductible for the entire $350 amount"
            ],
            correctAnswer: 0,
            explanation: "Eligible educators (K-12 teachers working 900+ hours) can deduct up to $300 above-the-line for unreimbursed classroom supplies. Any excess above $300 is not deductible above-the-line."
          },
          {
            id: 5,
            item: "Tom's personal life insurance premiums of $1,200",
            options: [
              "Yes — deductible as business expense adjustment",
              "No — personal life insurance is not deductible"
            ],
            correctAnswer: 1,
            explanation: "Premiums paid on personal life insurance policies are personal living expenses under IRC §262 and are never deductible as an adjustment or itemized deduction."
          }
        ]
      },
      {
        id: 2,
        title: "2. Standard vs Itemized & QBI (M5 + M6)",
        columnAHeader: "Deduction Item",
        columnBHeader: "Category",
        rows: [
          {
            id: 1,
            item: "Mortgage interest on primary home ($14,000)",
            options: [
              "Above-the-line adjustment",
              "Itemized deduction",
              "QBI deduction",
              "Not deductible"
            ],
            correctAnswer: 1,
            explanation: "Home mortgage interest on up to $750,000 of acquisition indebtedness on a primary or secondary residence is deductible strictly on Schedule A as an itemized deduction."
          },
          {
            id: 2,
            item: "Charitable cash donation to registered 501(c)(3) ($3,000)",
            options: [
              "Above-the-line adjustment",
              "Itemized deduction",
              "QBI deduction",
              "Not deductible"
            ],
            correctAnswer: 1,
            explanation: "Charitable contributions made to qualified organizations are deductible on Schedule A as itemized deductions, subject to 60% of AGI limits for cash."
          },
          {
            id: 3,
            item: "Tom's qualified business income deduction (20% of QBI)",
            options: [
              "Above-the-line adjustment",
              "Itemized deduction",
              "QBI deduction",
              "Not deductible"
            ],
            correctAnswer: 2,
            explanation: "Under IRC §199A, the 20% Qualified Business Income (QBI) deduction is taken from AGI (below-the-line) but is neither an itemized deduction nor an adjustment—it is a separate statutory deduction available whether standard or itemized deduction is chosen."
          },
          {
            id: 4,
            item: "State and local taxes paid ($8,000, subject to SALT cap)",
            options: [
              "Above-the-line adjustment",
              "Itemized deduction",
              "QBI deduction",
              "Not deductible"
            ],
            correctAnswer: 1,
            explanation: "State and local income/property taxes (SALT) are itemized deductions on Schedule A, subject to an aggregate statutory limit (SALT cap) of $10,000 per tax return ($5,000 MFS)."
          },
          {
            id: 5,
            item: "Credit card interest on personal purchases ($600)",
            options: [
              "Above-the-line adjustment",
              "Itemized deduction",
              "QBI deduction",
              "Not deductible"
            ],
            correctAnswer: 3,
            explanation: "Personal consumer interest (credit card balances, auto loans for personal vehicles) is strictly non-deductible under IRC §163(h)."
          }
        ]
      },
      {
        id: 3,
        title: "3. Credits & Tax Computation (M7)",
        columnAHeader: "Item",
        columnBHeader: "Treatment",
        rows: [
          {
            id: 1,
            item: "Child and Dependent Care Credit for daycare expenses",
            options: [
              "Refundable credit",
              "Non-refundable credit",
              "Increases taxable income",
              "Reduces AGI",
              "Not applicable"
            ],
            correctAnswer: 1,
            explanation: "The Child and Dependent Care Credit (§21) is a non-refundable personal tax credit that can reduce regular tax liability down to zero but cannot generate a cash refund."
          },
          {
            id: 2,
            item: "Child Tax Credit for two qualifying children",
            options: [
              "Refundable credit",
              "Non-refundable credit (partially refundable as Additional CTC)",
              "Increases taxable income",
              "Reduces AGI",
              "Not applicable"
            ],
            correctAnswer: 1,
            explanation: "The base Child Tax Credit ($2,000 per child under 17) is a non-refundable credit against regular tax liability. However, up to $1,700 per child may be refunded separately as the Additional Child Tax Credit if criteria are met."
          },
          {
            id: 3,
            item: "American Opportunity Credit (if applicable for education)",
            options: [
              "Refundable credit",
              "Non-refundable credit (40% refundable portion)",
              "Increases taxable income",
              "Reduces AGI",
              "Not applicable"
            ],
            correctAnswer: 1,
            explanation: "The American Opportunity Tax Credit (AOTC) is generally classified as a non-refundable credit, with 40% of the credit up to $1,000 allowed as a refundable portion (unless subject to kiddie tax/dependent rules)."
          },
          {
            id: 4,
            item: "Self-employment tax deduction",
            options: [
              "Refundable credit",
              "Non-refundable credit",
              "Increases taxable income",
              "Reduces AGI",
              "Not applicable"
            ],
            correctAnswer: 3,
            explanation: "The deduction for 50% of self-employment taxes paid is an above-the-line adjustment that directly reduces Gross Income to arrive at Adjusted Gross Income (AGI)."
          },
          {
            id: 5,
            item: "Tom's estimated tax penalty for underpayment",
            options: [
              "Refundable credit",
              "Non-refundable credit",
              "Increases taxable income",
              "Reduces AGI",
              "Not applicable"
            ],
            correctAnswer: 4,
            explanation: "An underpayment penalty is an addition to tax assessed when required quarterly estimated payments are not made. It is neither a credit nor a deduction—it is an administrative addition payable with the tax return."
          }
        ]
      }
    ]
  }
];
