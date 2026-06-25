import type { Question } from './r1_questions';

export const r3Questions: Question[] = [
  // MEDIUM (1-20)
  {
    id: 1,
    difficulty: "Medium",
    text: "Under Section 351, no gain or loss is recognized on the transfer of property to a corporation if the transferors are in 'control' immediately after the exchange. What percentage of ownership constitutes 'control' for this purpose?",
    options: [
      "More than 50% of voting power and more than 50% of all other classes of stock",
      "At least 80% of total combined voting power and at least 80% of the total number of shares of all other classes of stock",
      "100% of all outstanding stock",
      "At least 75% of voting stock"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 368(c) defines 'control' for Section 351 corporate formations as ownership of at least 80% of the total combined voting power of all classes of stock entitled to vote AND at least 80% of the total number of shares of all other classes of stock.",
      whyIncorrect: "50% is the threshold for related party rules under §267. 100% is not required. 75% has no basis in §351 control rules.",
      how: "Verify that the group of property transferors collectively owns 80%+ of voting stock and 80%+ of non-voting stock immediately after the transfer.",
      when: "When incorporating a business or contributing property for stock in a C-Corp or S-Corp.",
      source: "IRC §351(a); IRC §368(c)"
    }
  },
  {
    id: 2,
    difficulty: "Medium",
    text: "Which of the following items is treated as a 'separately stated item' on an S-Corporation's Schedule K-1?",
    options: [
      "Gross receipts or sales from business operations",
      "Employee wages paid to non-shareholders",
      "Charitable contributions made by the corporation",
      "Office utility expenses"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Charitable contributions are subject to individual shareholder percentage limitations (e.g., 60% of AGI), so they must be separately stated on Schedule K-1 rather than lumped into ordinary business income.",
      whyIncorrect: "Gross receipts, non-shareholder wages, and utility expenses are ordinary operational items that are combined to calculate ordinary business income (Box 1 of Schedule K-1).",
      how: "Report charitable contributions in Box 12 of Form 1120-S, Schedule K-1.",
      when: "When preparing tax returns for pass-through entities (S-Corps and Partnerships).",
      source: "IRC §1366(a)(1)(A)"
    }
  },
  {
    id: 3,
    difficulty: "Medium",
    text: "A partner's share of ordinary partnership losses can be deducted on their individual return only to the extent of:",
    options: [
      "The partner's tax basis in the partnership interest at the beginning of the year",
      "The partner's tax basis in the partnership interest at the end of the partnership tax year, before considering the loss",
      "The Fair Market Value of the partner's capital account",
      "Unlimited; partnership losses are fully deductible regardless of basis"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Section 704(d), a partner's distributive share of partnership loss is allowed only to the extent of the adjusted basis of such partner's interest in the partnership at the end of the partnership year in which such loss occurred.",
      whyIncorrect: "Beginning basis ignores current year contributions and income. FMV is accounting/economic value, not tax basis. Losses are strictly limited by tax basis (as well as at-risk and passive loss limits).",
      how: "Calculate ending basis by adding contributions and net income. If the loss exceeds this basis, deduct up to the basis (reducing basis to zero) and suspend the remainder.",
      when: "When a partner receives a Schedule K-1 reporting a business loss.",
      source: "IRC §704(d)"
    }
  },
  {
    id: 4,
    difficulty: "Medium",
    text: "What is the maximum number of allowable shareholders for an S-Corporation under current tax law?",
    options: [
      "75",
      "100",
      "500",
      "Unlimited"
    ],
    correctAnswer: 1,
    explanation: {
      why: "An S-Corporation is strictly limited to a maximum of 100 shareholders. (Note that family members can elect to be treated as one shareholder).",
      whyIncorrect: "75 was the old limit prior to 2004. 500 is the reporting threshold for certain public exempt entities. C-Corporations can have unlimited shareholders, not S-Corps.",
      how: "Count unique shareholders, treating family members (ancestors and lineal descendants) as a single shareholder unit.",
      when: "When determining if a corporation is eligible to make or maintain an S-election.",
      source: "IRC §1361(b)(1)(A)"
    }
  },
  {
    id: 5,
    difficulty: "Medium",
    text: "Which of the following entities is subject to double taxation?",
    options: [
      "Sole Proprietorship",
      "S-Corporation",
      "C-Corporation",
      "Limited Liability Company (LLC) taxed as a Partnership"
    ],
    correctAnswer: 2,
    explanation: {
      why: "C-Corporations pay tax at the entity level (currently 21% flat rate). When net profits are distributed to shareholders as dividends, shareholders pay tax again on their individual returns, creating double taxation.",
      whyIncorrect: "Sole proprietorships, S-Corps, and partnerships/LLCs are 'pass-through' entities where income is taxed only once at the owner/shareholder level.",
      how: "Corporation files Form 1120 and pays corporate tax. Shareholders receive Form 1099-DIV and pay individual dividend tax.",
      when: "Analyzing entity choice for a new or growing business.",
      source: "IRC §11; IRC §301"
    }
  },
  {
    id: 6,
    difficulty: "Medium",
    text: "In a non-liquidating (current) distribution from a partnership, Partner A receives property with an adjusted basis to the partnership of $15,000 and an FMV of $25,000. Partner A's outside basis in the partnership before the distribution is $20,000. What is Partner A's basis in the distributed property?",
    options: [
      "$25,000",
      "$15,000",
      "$20,000",
      "$5,000"
    ],
    correctAnswer: 1,
    explanation: {
      why: "In a current distribution, the partner takes a 'carryover basis' in the distributed property equal to the partnership's basis ($15,000), provided this does not exceed the partner's outside basis ($20,000).",
      whyIncorrect: "$25,000 is FMV. $20,000 would only be used if outside basis was less than $15k (limiting property basis to outside basis). $5,000 is the remaining outside basis after distribution.",
      how: "Compare partnership inside basis ($15k) to partner outside basis ($20k). Take lesser amount as property basis. Outside basis reduces from $20k to $5k.",
      when: "When a partnership distributes ongoing operating assets or land to a partner.",
      source: "IRC §732(a)(1)"
    }
  },
  {
    id: 7,
    difficulty: "Medium",
    text: "When a C-Corporation suffers a Net Operating Loss (NOL) in 2024, what is the allowable carryback and carryforward provision?",
    options: [
      "Carryback 2 years, carryforward 20 years",
      "Carryback 5 years, carryforward indefinitely",
      "No carryback, carryforward indefinitely (limited to 80% of taxable income)",
      "Carryback 3 years, carryforward 5 years"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Under the TCJA (permanent rule), NOLs arising after 2017 cannot be carried back. They carry forward indefinitely, but the deduction in any future year is limited to 80% of taxable income before the NOL deduction.",
      whyIncorrect: "2 back/20 forward was the pre-TCJA rule. 5 back applied temporarily under the CARES Act for 2018-2020 NOLs. 3 back/5 forward applies to corporate capital losses, not NOLs.",
      how: "Calculate corporate taxable income. Apply NOL carryforward up to a maximum cap of 80% of taxable income.",
      when: "When filing Form 1120 for a corporation utilizing prior year losses.",
      source: "IRC §172(a)(2)"
    }
  },
  {
    id: 8,
    difficulty: "Medium",
    text: "Which of the following is an allowable deduction when computing a C-Corporation's taxable income?",
    options: [
      "Federal income taxes paid",
      "Dividends paid to shareholders",
      "Net capital losses incurred during the year",
      "Reasonable officer compensation"
    ],
    correctAnswer: 3,
    explanation: {
      why: "Reasonable salaries and compensation paid to corporate officers and employees for services actually rendered are deductible business expenses under Section 162.",
      whyIncorrect: "Federal income taxes are explicitly non-deductible. Dividends paid are distributions of after-tax profit, not deductible expenses. Corporate capital losses cannot be deducted against ordinary income.",
      how: "Deduct officer compensation on Line 12 of Form 1120.",
      when: "Calculating regular taxable income for a C-Corporation.",
      source: "IRC §162(a)(1)"
    }
  },
  {
    id: 9,
    difficulty: "Medium",
    text: "How does a partnership allocate nonrecourse liabilities among partners?",
    options: [
      "Strictly according to their loss-sharing ratios",
      "Strictly according to their capital account balances",
      "Generally according to their profit-sharing ratios (after minimum gain allocations)",
      "Nonrecourse debt cannot be allocated to partners"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Nonrecourse debt (where no partner bears personal economic risk) is generally allocated among partners based on their profit-sharing percentages, increasing their outside basis.",
      whyIncorrect: "Loss-sharing ratios apply to *recourse* debt (where partners bear economic risk of loss). Capital accounts do not dictate debt allocation. Nonrecourse debt definitely increases partnership basis.",
      how: "Identify debt type on Schedule K-1. Allocate recourse via loss ratios, nonrecourse via profit ratios.",
      when: "Determining outside basis to verify loss deductibility or taxability of cash distributions.",
      source: "Treas. Reg. §1.752-3"
    }
  },
  {
    id: 10,
    difficulty: "Medium",
    text: "What is the due date for a calendar-year S-Corporation tax return (Form 1120-S), assuming no extensions?",
    options: [
      "March 15",
      "April 15",
      "May 15",
      "September 15"
    ],
    correctAnswer: 0,
    explanation: {
      why: "Pass-through entity returns (S-Corps Form 1120-S and Partnerships Form 1065) are due on the 15th day of the 3rd month following the close of the tax year (March 15 for calendar year).",
      whyIncorrect: "April 15 is the due date for individuals (Form 1040) and C-Corporations (Form 1120). September 15 is the extended due date for S-Corps.",
      how: "File Form 1120-S by March 15 or submit Form 7004 for an automatic 6-month extension.",
      when: "Annual tax compliance deadline for S-Corporations.",
      source: "IRC §6072(b)"
    }
  },
  {
    id: 11,
    difficulty: "Medium",
    text: "Which of the following forms is filed by an organization to apply for recognition of exemption under Section 501(c)(3)?",
    options: [
      "Form 990",
      "Form 1023",
      "Form 1120",
      "Form 1041"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Form 1023 (Application for Recognition of Exemption Under Section 501(c)(3)) is filed by charitable organizations to obtain official tax-exempt status from the IRS.",
      whyIncorrect: "Form 990 is the annual informational return filed by existing exempt entities. Form 1120 is for taxable C-Corps. Form 1041 is for estates and trusts.",
      how: "Submit Form 1023 electronically through Pay.gov within 27 months of formation.",
      when: "When a newly formed nonprofit seeks federal tax exemption.",
      source: "Treas. Reg. §1.501(a)-1"
    }
  },
  {
    id: 12,
    difficulty: "Medium",
    text: "If an S-Corporation terminates its S-election, how long must it generally wait before it can re-elect S-Corporation status?",
    options: [
      "1 year",
      "3 years",
      "5 years",
      "It can never re-elect S-status"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Under Section 1362(g), once an S-election is revoked or terminated, the entity is barred from re-electing S-status for 5 tax years unless the IRS consents to an earlier election.",
      whyIncorrect: "1 year and 3 years are too short under statutory rules. Permanent ban is incorrect.",
      how: "Wait 5 full tax years after termination, or file a formal private letter ruling request demonstrating that the termination was involuntary or ownership changed >50%.",
      when: "When a former S-Corp currently taxed as a C-Corp wants to convert back.",
      source: "IRC §1362(g)"
    }
  },
  {
    id: 13,
    difficulty: "Medium",
    text: "What is the tax rate applied to Unrelated Business Taxable Income (UBTI) earned by a tax-exempt charity?",
    options: [
      "0% (Exempt)",
      "15% flat rate",
      "Regular corporate tax rates (currently 21%)",
      "Highest individual marginal rate (37%)"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Tax-exempt organizations that earn net income from regular commercial trades or businesses unrelated to their exempt mission pay tax on UBTI at standard corporate tax rates (21%).",
      whyIncorrect: "UBTI is specifically taxable to prevent unfair competition with commercial businesses. 15% and 37% are incorrect rates.",
      how: "Calculate UBTI on Form 990-T. Deduct a $1,000 specific deduction, then apply the 21% corporate tax rate.",
      when: "When a university or charity operates an unrelated commercial venture (like a public commercial parking garage).",
      source: "IRC §511(a)"
    }
  },
  {
    id: 14,
    difficulty: "Medium",
    text: "When a partnership pays a 'guaranteed payment' to Partner B for services rendered, how is this handled by the partnership and Partner B?",
    options: [
      "Not deductible by partnership; tax-free distribution to Partner B",
      "Deductible (or capitalized) by partnership; ordinary income to Partner B",
      "Deductible by partnership; capital gain to Partner B",
      "Treated as a dividend distribution"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Guaranteed payments (fixed payments without regard to partnership income) are treated like employee wages: deductible business expenses for the partnership and ordinary self-employment income for the partner.",
      whyIncorrect: "They are deductible, not tax-free. They are ordinary income subject to SE tax, not capital gains or corporate dividends.",
      how: "Deduct on Line 10 of Form 1065. Report to partner in Box 4 of Schedule K-1.",
      when: "When partners receive base salaries for managing daily partnership operations.",
      source: "IRC §707(c)"
    }
  },
  {
    id: 15,
    difficulty: "Medium",
    text: "Which of the following is required for an entity to qualify as a Simple Trust?",
    options: [
      "It must make charitable contributions every year",
      "It must distribute all of its net accounting income currently each year and distribute no principal",
      "It must accumulate all income until the beneficiary reaches age 18",
      "It pays tax at entity rates on all distributions"
    ],
    correctAnswer: 1,
    explanation: {
      why: "A Simple Trust is defined by three rules: (1) governing instrument requires all fiduciary accounting income be distributed currently, (2) instrument provides for no charitable contributions, and (3) trust distributes no corpus/principal during the year.",
      whyIncorrect: "Charitable contributions disqualify a simple trust (making it a Complex Trust). Accumulating income makes it a Complex Trust. Beneficiaries pay tax on DNI distributions, not the trust.",
      how: "Review trust document. If it mandates annual distribution of all income and forbids charitable/principal distributions, file Form 1041 claiming a $300 exemption.",
      when: "Classifying trusts for annual fiduciary tax filing.",
      source: "Treas. Reg. §1.651(a)-1"
    }
  },
  {
    id: 16,
    difficulty: "Medium",
    text: "A C-Corporation has taxable income of $100,000. It also received $10,000 of dividend income from a 15%-owned domestic taxable corporation. What is the allowable Dividends Received Deduction (DRD)?",
    options: [
      "$10,000 (100%)",
      "$6,500 (65%)",
      "$5,000 (50%)",
      "$0"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Under TCJA rules, the DRD for owning less than 20% of a target corporation's stock is 50% of the dividend received. ($10,000 * 50% = $5,000).",
      whyIncorrect: "100% applies to 80%+ owned affiliated groups. 65% applies to ownership between 20% and 79.9%. $0 is incorrect.",
      how: "Verify stock ownership percentage (<20%). Multiply dividend by 50% on Form 1120 Schedule C.",
      when: "When a C-Corp receives dividends from stock investments.",
      source: "IRC §243(a)(1)"
    }
  },
  {
    id: 17,
    difficulty: "Medium",
    text: "What is the accumulated earnings tax rate imposed on a C-Corporation that unreasonably accumulates earnings beyond the statutory exemption?",
    options: [
      "10%",
      "15%",
      "20%",
      "37%"
    ],
    correctAnswer: 2,
    explanation: {
      why: "The accumulated earnings tax penalty rate is strictly 20% imposed on accumulated taxable income in excess of reasonable business needs and the statutory credit ($250k general / $150k personal service corps).",
      whyIncorrect: "10%, 15%, and 37% are incorrect penalty rates. 20% matches the top individual dividend tax rate.",
      how: "Calculate accumulated taxable income. Subtract reasonable business needs credit. Multiply excess by 20%.",
      when: "When IRS audits profitable C-Corps that don't pay dividends to help wealthy owners avoid dividend tax.",
      source: "IRC §531"
    }
  },
  {
    id: 18,
    difficulty: "Medium",
    text: "In an S-Corporation, how are shareholder distributions generally taxed if the corporation has NO accumulated earnings and profits (E&P) from prior C-Corp years?",
    options: [
      "Taxable as ordinary dividend income",
      "Tax-free reduction of shareholder stock basis; excess over basis is capital gain",
      "Taxable as W-2 wages",
      "Fully exempt from all tax regardless of basis"
    ],
    correctAnswer: 1,
    explanation: {
      why: "For an S-Corp without C-Corp E&P, distributions are non-taxable returns of capital to the extent of stock basis. Any distribution exceeding stock basis is taxed as a capital gain.",
      whyIncorrect: "Ordinary dividend income applies to C-Corps or S-Corps distributing old C-Corp E&P. Wages apply to officer compensation, not equity distributions. Excess over basis is taxable.",
      how: "Deduct distribution amount from shareholder stock basis on Form 7203. If basis hits $0, report excess on Schedule D.",
      when: "When shareholders withdraw cash from an S-Corporation.",
      source: "IRC §1368(b)"
    }
  },
  {
    id: 19,
    difficulty: "Medium",
    text: "Which of the following entities allows owners to enjoy limited liability protection while permitting disproportionate (flexible) allocations of income and losses?",
    options: [
      "S-Corporation",
      "General Partnership",
      "Limited Liability Company (LLC) taxed as a Partnership",
      "Sole Proprietorship"
    ],
    correctAnswer: 2,
    explanation: {
      why: "An LLC provides limited liability protection for all members (unlike general partnerships) AND, when taxed as a partnership, allows special/disproportionate allocations of profits and losses under §704(b).",
      whyIncorrect: "S-Corporations strictly forbid special allocations (all allocations must be rigid per-share, per-day). General partners have unlimited personal liability. Sole proprietorships have one owner and unlimited liability.",
      how: "Draft LLC Operating Agreement specifying special allocation ratios that meet 'substantial economic effect' rules.",
      when: "Structuring real estate syndications or multi-owner startups.",
      source: "IRC §704(b); Treas. Reg. §1.704-1"
    }
  },
  {
    id: 20,
    difficulty: "Medium",
    text: "What is the standard personal exemption amount allowed for an estate on its fiduciary income tax return (Form 1041)?",
    options: [
      "$0",
      "$100",
      "$300",
      "$600"
    ],
    correctAnswer: 3,
    explanation: {
      why: "Section 642(b) grants a decedent's estate a statutory exemption deduction of exactly $600 per tax year.",
      whyIncorrect: "$100 is the exemption for Complex Trusts. $300 is the exemption for Simple Trusts. $0 is incorrect.",
      how: "Deduct $600 on Line 21 of Form 1041.",
      when: "Preparing annual fiduciary returns for an estate.",
      source: "IRC §642(b)(1)"
    }
  },

  // HARD (21-40)
  {
    id: 21,
    difficulty: "Hard",
    text: "Corporation Z has Current E&P of ($30,000) [deficit] and Accumulated E&P of $70,000 on Jan 1. On July 1, Z distributes $50,000 cash to its sole shareholder. The deficit accrued evenly throughout the year. What amount of the distribution is taxable as a dividend?",
    options: [
      "$50,000",
      "$40,000",
      "$55,000",
      "$20,000"
    ],
    correctAnswer: 2,
    explanation: {
      why: "When Current E&P is negative and Accumulated E&P is positive, you must net them on the exact date of distribution. The deficit prorated to July 1 (half year) is ($15,000). Net E&P on July 1 = $70,000 - $15,000 = $55,000 available. Since the $50,000 distribution is less than available E&P ($55k), the entire $50,000 is a taxable dividend.",
      whyIncorrect: "$40,000 incorrectly subtracts the full $30k deficit. $55,000 is total E&P, but the dividend is limited to cash distributed ($50k). $20,000 is an incorrect calculation.",
      how: "Prorate deficit to distribution date: ($30k * 0.5) = ($15k). Add to Accum E&P: $70k - $15k = $55k. Dividend = Min(Distribution $50k, E&P $55k) = $50,000.",
      when: "Mid-year corporate distributions with operating losses.",
      source: "Treas. Reg. §1.316-2(b)"
    }
  },
  {
    id: 22,
    difficulty: "Hard",
    text: "In a liquidating distribution, Partner X receives $10,000 cash and inventory with a partnership basis of $6,000. Partner X's outside basis prior to liquidation was $20,000. What is Partner X's basis in the inventory, and what is the recognized loss?",
    options: [
      "Inventory Basis $6,000; Capital Loss $4,000",
      "Inventory Basis $10,000; No Loss recognized",
      "Inventory Basis $6,000; Ordinary Loss $4,000",
      "Inventory Basis $14,000; No Loss recognized"
    ],
    correctAnswer: 0,
    explanation: {
      why: "In liquidation, basis cannot be stepped up on inventory/unrealized receivables. Cash ($10k) reduces outside basis from $20k to $10k. Inventory takes carryover basis ($6k). Remaining outside basis ($4k) cannot be allocated to inventory, triggering a mandatory capital loss of $4,000.",
      whyIncorrect: "Inventory cannot absorb excess basis beyond inside basis in liquidation. Loss is capital, not ordinary.",
      how: "Outside Basis ($20k) - Cash ($10k) - Inventory Inside Basis ($6k) = $4,000 unallocated basis = Capital Loss recognized.",
      when: "Partner exits partnership receiving only cash, inventory, and unrealized receivables.",
      source: "IRC §731(a)(2); IRC §732(c)"
    }
  },
  {
    id: 23,
    difficulty: "Hard",
    text: "Parent Corp owns 90% of Subsidiary Corp. Subsidiary is completely liquidated into Parent under Section 332. Subsidiary distributes land (Basis $40k, FMV $100k) to Parent. What is Parent's tax basis in the land received?",
    options: [
      "$100,000 (FMV step-up)",
      "$40,000 (Carryover basis)",
      "$90,000",
      "$0"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Section 334(b), when an 80%+ subsidiary liquidates tax-free into a parent corporation under §332, the parent strictly takes a carryover basis ($40,000) in all assets received. No gain/loss is recognized.",
      whyIncorrect: "FMV step-up applies to taxable liquidations of non-80% owned entities. $90k prorates FMV. $0 is incorrect.",
      how: "Record land on Parent's balance sheet at Subsidiary's historical adjusted basis ($40,000).",
      when: "Corporate group restructuring and parent-subsidiary consolidations.",
      source: "IRC §332; IRC §334(b)"
    }
  },
  {
    id: 24,
    difficulty: "Hard",
    text: "An S-Corporation incurs a $50,000 ordinary loss. Sole Shareholder M has stock basis of $20,000 and has directly loaned the S-Corp $15,000 (debt basis). How much loss can Shareholder M deduct, and what are ending bases?",
    options: [
      "Deduct $35,000; Stock Basis $0, Debt Basis $0; Suspend $15,000",
      "Deduct $20,000; Stock Basis $0, Debt Basis $15,000; Suspend $30,000",
      "Deduct $50,000; Stock Basis ($15,000), Debt Basis $0",
      "Deduct $35,000; Stock Basis $5,000, Debt Basis $0"
    ],
    correctAnswer: 0,
    explanation: {
      why: "S-Corp losses first reduce stock basis to zero ($20k used), then reduce direct shareholder debt basis to zero ($15k used). Total deductible loss = $35,000. Remaining $15,000 loss is suspended and carried forward indefinitely.",
      whyIncorrect: "Losses are allowed against debt basis once stock basis hits zero. Stock basis can never be negative. Debt basis must be fully reduced before losses are suspended.",
      how: "Apply loss against stock basis ($20k -> $0), then against note payable to shareholder ($15k -> $0). Suspend excess ($15k).",
      when: "Shareholder receives K-1 loss exceeding stock investment but has made shareholder loans.",
      source: "IRC §1366(d)(1)"
    }
  },
  {
    id: 25,
    difficulty: "Hard",
    text: "Partner P contributes a building (FMV $200k, Tax Basis $120k) to a partnership. Three years later, the building is sold for $250k. How is the $130k total tax gain allocated between Partner P and the other equal Partner Q?",
    options: [
      "Partner P: $65,000; Partner Q: $65,000",
      "Partner P: $105,000; Partner Q: $25,000",
      "Partner P: $80,000; Partner Q: $50,000",
      "Partner P: $130,000; Partner Q: $0"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Section 704(c), the built-in gain at contribution ($200k FMV - $120k Basis = $80k) MUST be allocated entirely to the contributing Partner P. The post-contribution appreciation ($250k sale - $200k FMV = $50k) is split equally ($25k each). Partner P total = $80k BIG + $25k post = $105,000.",
      whyIncorrect: "Equal 50/50 split ignores mandatory §704(c) built-in gain rules. Allocating all $130k to P ignores Q's share of post-contribution appreciation.",
      how: "Step 1: BIG = $80k -> 100% to P. Step 2: Post-contrib gain = $50k -> split 50/50 ($25k each). P = $105k, Q = $25k.",
      when: "Partnership sells property that was contributed by a partner with pre-existing built-in gain.",
      source: "IRC §704(c)(1)(A)"
    }
  },
  {
    id: 26,
    difficulty: "Hard",
    text: "Which of the following creates 'Section 751 hot assets' that trigger ordinary income upon the sale of a partnership interest?",
    options: [
      "Real estate held for investment appreciation",
      "Unrealized receivables and substantially appreciated inventory",
      "Capital assets held > 1 year",
      "Section 1231 equipment with no depreciation recapture"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 751 'hot assets' are unrealized receivables (including depreciation recapture potential) and inventory. Gain attributable to hot assets must be treated as ordinary income upon selling partnership equity.",
      whyIncorrect: "Investment real estate, capital assets, and 1231 property without recapture generate capital gain, not ordinary Section 751 income.",
      how: "Carve out FMV vs Basis of A/R, inventory, and recapture items. Allocate sale proceeds to hot assets first on Form 8308.",
      when: "Partner sells partnership shares to a third party.",
      source: "IRC §751(a)"
    }
  },
  {
    id: 27,
    difficulty: "Hard",
    text: "A C-Corporation has taxable income of $500,000. It wants to donate $80,000 cash to charity. What is the allowable charitable deduction, and what happens to the excess?",
    options: [
      "Deduct $80,000 currently; no carryover",
      "Deduct $50,000 currently; carryforward $30,000 for up to 5 years",
      "Deduct $50,000 currently; carryforward $30,000 indefinitely",
      "Deduct $30,000 currently; carryback 3 years"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Corporate charitable contributions are strictly limited to 10% of taxable income before the charitable deduction ($500,000 * 10% = $50,000). Any excess ($30,000) carries forward for a maximum of 5 tax years.",
      whyIncorrect: "Full deduction exceeds the 10% cap. Indefinite carryforward applies to NOLs, not charitable contributions (strictly 5-year cap). Carryback is not permitted.",
      how: "Calculate 10% limit. Deduct $50k on Line 19 of Form 1120. Track $30k carryforward on tax reconciliation.",
      when: "Profitable C-Corps make large charitable gifts.",
      source: "IRC §170(b)(2)"
    }
  },
  {
    id: 28,
    difficulty: "Hard",
    text: "An LLC taxed as a partnership distributes $30,000 cash to Member C. Member C's outside basis before distribution was $22,000. What is the exact tax consequence to Member C?",
    options: [
      "No gain recognized; Basis becomes ($8,000)",
      "Recognizes $8,000 capital gain; Basis becomes $0",
      "Recognizes $8,000 ordinary income; Basis becomes $0",
      "Recognizes $30,000 capital gain"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Section 731(a)(1), a partner must recognize gain when cash distributed ($30k) exceeds their adjusted outside basis ($22k). The excess ($8,000) is taxed as capital gain, and basis hits $0.",
      whyIncorrect: "Partnership basis can never be negative. Gain is capital (equity redemption), not ordinary compensation. Only the excess over basis is taxed, not the full distribution.",
      how: "Cash ($30k) - Outside Basis ($22k) = $8,000 recognized capital gain on Schedule D. Outside Basis = $0.",
      when: "Pass-through owners refinance entity debt and take cash distributions exceeding their tax investment.",
      source: "IRC §731(a)(1)"
    }
  },
  {
    id: 29,
    difficulty: "Hard",
    text: "What is the Personal Holding Company (PHC) tax penalty rate, and when does it apply?",
    options: [
      "20% rate applied if >50% owned by 5 or fewer individuals AND 60%+ of adjusted ordinary gross income is passive PHC income",
      "21% rate applied to any C-Corp with passive income",
      "15% rate applied to S-Corps with passive investment income exceeding 25%",
      "37% rate applied to personal service corporations"
    ],
    correctAnswer: 0,
    explanation: {
      why: "The PHC penalty tax is 20% imposed on undistributed PHC income of C-Corps that meet two tests: (1) ownership test: 5 or fewer individuals own >50% of stock, and (2) income test: 60%+ of AOGI is dividends, interest, rent, or royalties.",
      whyIncorrect: "It requires both specific 5-or-fewer ownership and 60% passive tests. S-Corp passive penalty is the excess net passive income tax (ENPI), not PHC.",
      how: "Identify PHC status on Schedule PH (Form 1120). Issue dividend declaration or pay 20% penalty tax.",
      when: "Wealthy individuals put investment portfolios inside C-Corps.",
      source: "IRC §541; IRC §542"
    }
  },
  {
    id: 30,
    difficulty: "Hard",
    text: "Trust T has Distributable Net Income (DNI) of $40,000 (all ordinary interest). Fiduciary accounting income is $50,000. Trust distributes $60,000 cash to sole Beneficiary B. What amount of taxable income does Beneficiary B report from the trust?",
    options: [
      "$60,000",
      "$50,000",
      "$40,000",
      "$0"
    ],
    correctAnswer: 2,
    explanation: {
      why: "A beneficiary's taxable income distribution from a trust is strictly capped by Distributable Net Income ($40,000). Distributions exceeding DNI ($20,000) are tax-free principal distributions.",
      whyIncorrect: "$60k taxes the tax-free principal return. $50k is accounting income, not DNI tax ceiling.",
      how: "Trust issues Schedule K-1 (Form 1041) reporting $40,000 ordinary interest income (Box 1).",
      when: "Trust distributes corpus/accumulated cash alongside current year earnings.",
      source: "IRC §662(a)"
    }
  },
  {
    id: 31,
    difficulty: "Hard",
    text: "S-Corporation Built-In Gains (BIG) tax calculation: Former C-Corp converted to S-Corp with built-in gain assets. In Year 2, it sells an asset recognizing $100k BIG. Current year taxable income (if C-Corp) is $70k. Unrecaptured BIG ceiling is $200k. What is the BIG tax payable?",
    options: [
      "$21,000 (21% of $100k)",
      "$14,700 (21% of $70k)",
      "$42,000 (21% of $200k)",
      "$0"
    ],
    correctAnswer: 1,
    explanation: {
      why: "The recognized built-in gain subject to BIG tax is limited to the lesser of: (1) recognized BIG ($100k), or (2) current year taxable income computed as if a C-Corp ($70k). Lesser is $70k * 21% corporate rate = $14,700.",
      whyIncorrect: "$21,000 ignores the taxable income limitation. BIG tax cannot exceed what corporate tax would have been on total entity taxable income.",
      how: "Taxable BIG = Min(Recognized BIG $100k, C-Corp Taxable Income $70k) = $70k. BIG Tax = $70k * 0.21 = $14,700.",
      when: "S-Corp with BIG assets has high deductions/operating expenses that lower overall entity taxable income.",
      source: "IRC §1374(b)(1)"
    }
  },
  {
    id: 32,
    difficulty: "Hard",
    text: "Partner P sells their 50% partnership interest to Buyer B for $100,000 cash. Partnership has total liabilities of $40,000 (P's share is $20,000). P's outside basis before sale was $70,000. What is P's recognized gain on sale?",
    options: [
      "$30,000",
      "$50,000",
      "$10,000",
      "$70,000"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Section 752(d), relief of partnership liabilities ($20,000) is treated as additional amount realized (sales proceeds). Total Amount Realized = $100k cash + $20k debt relief = $120,000. Realized/Recognized Gain = $120k - $70k Basis = $50,000.",
      whyIncorrect: "$30,000 ignores liability relief in sales price. $10,000 incorrectly deducts liabilities.",
      how: "Amount Realized ($100k + $20k) - Outside Basis ($70k) = $50,000 capital gain recognized.",
      when: "Partner exits leveraged partnership.",
      source: "IRC §741; IRC §752(d)"
    }
  },
  {
    id: 33,
    difficulty: "Hard",
    text: "Which of the following corporate distributions is treated as a taxable redemption under Section 302 rather than a regular dividend?",
    options: [
      "A pro-rata distribution of cash to all shareholders",
      "A substantially disproportionate redemption where shareholder voting ownership drops from 60% to 45%",
      "A stock dividend of common stock on common stock",
      "A redemption where shareholder ownership drops from 55% to 50%"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 302(b)(2) defines substantially disproportionate redemption (capital gain treatment): (1) owns <50% of voting stock immediately after, AND (2) percentage ownership after is less than 80% of percentage ownership before. (45% < 50% test met; 45%/60% = 75% < 80% test met).",
      whyIncorrect: "Pro-rata distributions are dividends. 55% to 50% fails both the <50% test and the 80% reduction test (50/55 = 90.9%).",
      how: "Verify 302(b)(2) mathematical tests. Report redemption on Schedule D as capital gain rather than 1099-DIV.",
      when: "Corporation buys back stock from retiring founders.",
      source: "IRC §302(b)(2)"
    }
  },
  {
    id: 34,
    difficulty: "Hard",
    text: "In a partnership complete liquidation, Partnership holds Cash $10k, Inventory (Basis $10k, FMV $15k), and Land (Basis $20k, FMV $40k). Liquidating Partner L (outside basis $45k) receives Cash $10k, Inventory $10k basis, and Land $20k basis. What is L's ending basis in the distributed Land?",
    options: [
      "$20,000 (Carryover)",
      "$25,000 (Substituted basis absorption)",
      "$40,000 (FMV step-up)",
      "$15,000"
    ],
    correctAnswer: 1,
    explanation: {
      why: "In complete liquidation, outside basis ($45k) is first reduced by cash ($10k -> $35k rem), then allocated to inventory up to inside basis ($10k -> $25k rem). All remaining unallocated outside basis ($25,000) MUST be absorbed into capital/Section 1231 assets (Land), stepping up Land basis from $20k to $25,000.",
      whyIncorrect: "Carryover $20k leaves $5k unallocated outside basis (disallowed unless no land/capital assets distributed). $40k is FMV.",
      how: "Land Basis = Remaining Outside Basis after Cash and Inventory ($45k - $10k - $10k) = $25,000.",
      when: "Liquidating distribution involving real estate.",
      source: "IRC §732(b); IRC §732(c)"
    }
  },
  {
    id: 35,
    difficulty: "Hard",
    text: "What is the tax consequence to a C-Corporation that distributes an asset subject to a liability exceeding the asset's Fair Market Value as a property dividend?",
    options: [
      "Gain recognized based on actual FMV minus basis",
      "For gain recognition purposes, the FMV of the property is deemed to be no less than the amount of the liability",
      "No gain recognized; liability transfers to shareholder",
      "Corporation recognizes an ordinary loss"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Section 311(b)(2) and §7701(g), if property distributed is subject to a liability exceeding FMV, the Fair Market Value is deemed to be exactly equal to the liability amount for calculating corporate gain.",
      whyIncorrect: "Actual FMV cannot be used if liability is higher. Corporations cannot recognize losses on non-liquidating distributions.",
      how: "Deemed Gain = Liability Amount minus Adjusted Basis.",
      when: "Distributing underwater/heavily mortgaged corporate real estate.",
      source: "IRC §311(b)(2); IRC §7701(g)"
    }
  },
  {
    id: 36,
    difficulty: "Hard",
    text: "An S-Corporation shareholder performs substantial services for the business but takes $0 salary and instead withdraws $100,000 as shareholder distributions to avoid FICA/payroll tax. What can the IRS do?",
    options: [
      "Nothing; S-Corp distributions are exempt from SE/FICA tax by law",
      "Reclassify a reasonable portion of distributions as taxable W-2 wages subject to FICA and payroll tax penalties",
      "Terminate the S-election permanently",
      "Impose a 100% fraud penalty on total gross receipts"
    ],
    correctAnswer: 1,
    explanation: {
      why: "IRS Revenue Rulings and court cases (e.g., Watson vs US) grant the IRS authority to reclassify S-Corp distributions as wages if shareholder-employees take unreasonably low salaries to evade payroll taxes.",
      whyIncorrect: "While distributions *properly issued* are exempt from FICA, aggressive zero-salary tax evasion triggers reclassification and severe employment tax penalties.",
      how: "IRS payroll audit issues Form 941 assessments for unpaid employer/employee FICA (7.65% * 2 = 15.3%) plus failure-to-pay penalties.",
      when: "S-Corp owners try to pay $0 payroll.",
      source: "Rev. Rul. 74-44"
    }
  },
  {
    id: 37,
    difficulty: "Hard",
    text: "Estate Tax Computation: Decedent dies leaving Gross Estate of $15,000,000. Allowable funeral/admin deductions are $500,000. Bequest to surviving U.S. citizen spouse is $5,000,000. Bequest to qualified charity is $1,000,000. What is the Taxable Estate?",
    options: [
      "$15,000,000",
      "$14,500,000",
      "$8,500,000",
      "$9,500,000"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Taxable Estate = Gross Estate ($15M) minus Admin/Funeral ($500k) minus Unlimited Marital Deduction ($5M) minus Charitable Deduction ($1M) = $8,500,000.",
      whyIncorrect: "$14.5M ignores marital and charitable deductions. $9.5M ignores charitable deduction.",
      how: "Calculate on Form 706. Apply unified estate tax credit against tentative tax on $8.5M.",
      when: "Settling high-net-worth decedents' estates.",
      source: "IRC §2051; IRC §2056"
    }
  },
  {
    id: 38,
    difficulty: "Hard",
    text: "Under Section 704(b), partnership allocations must have 'Substantial Economic Effect' (SEE). Which of the following is NOT a requirement of the economic effect safe harbor?",
    options: [
      "Partnership must maintain capital accounts in accordance with tax regulations",
      "Liquidating distributions must be made in accordance with positive capital account balances",
      "Partners with deficit capital accounts upon liquidation must have an unconditional obligation to restore the deficit",
      "All partners must share equally in taxable income regardless of capital accounts"
    ],
    correctAnswer: 3,
    explanation: {
      why: "Equal sharing is NOT required; flexible/disproportionate sharing is permitted provided the three core 'Big Three' capital account maintenance rules (capital accounts, liquidating per capital accounts, deficit restoration) are met.",
      whyIncorrect: "Maintaining capital accounts, liquidating per capital accounts, and deficit restoration obligations (or qualified income offset) are mandatory SEE safe harbor rules.",
      how: "Draft partnership agreement adhering to Treas. Reg. §1.704-1(b)(2)(ii)(b).",
      when: "Verifying partnership special allocations will survive IRS scrutiny.",
      source: "Treas. Reg. §1.704-1(b)(2)"
    }
  },
  {
    id: 39,
    difficulty: "Hard",
    text: "Section 338(h)(10) Election: Corporate Buyer purchases 100% of target subsidiary stock from corporate Parent. If a §338(h)(10) election is jointly made, how is the transaction treated for tax purposes?",
    options: [
      "Stock sale for legal and tax purposes",
      "Legal stock sale, but treated as a deemed taxable asset sale followed by a tax-free §332 liquidation of target for tax purposes",
      "Tax-free Type B reorganization",
      "Deemed partnership formation"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 338(h)(10) allows corporate buyers of stock to treat the buyout as an asset acquisition for tax purposes (getting asset basis step-up to purchase price) while executing a clean stock purchase legally.",
      whyIncorrect: "Without the election, it's a stock sale (no asset step-up). It triggers immediate taxable gain on assets, so it is not a tax-free reorganization.",
      how: "Jointly file Form 8023 on or before the 15th day of the 9th month after acquisition.",
      when: "M&A transactions where buyers demand depreciable asset step-up.",
      source: "IRC §338(h)(10)"
    }
  },
  {
    id: 40,
    difficulty: "Hard",
    text: "What is the tax consequence of an S-Corporation distributing appreciated property to a shareholder in exchange for stock in a stock redemption?",
    options: [
      "No gain recognized at entity level",
      "S-Corp recognizes gain on appreciation; gain flows through to all shareholders per-share per-day, increasing stock basis before redemption",
      "Shareholder recognizes ordinary income on full property value",
      "S-election terminates automatically"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Section 311(b) and §1371(a), S-Corps must recognize gain on distributing appreciated property. This gain flows through to all K-1 shareholders (increasing their bases) before calculating the recipient's redemption gain/loss.",
      whyIncorrect: "Gain MUST be recognized by entity. It flows through to all shareholders, not just the redeemed shareholder. Redemption gain is capital, not ordinary.",
      how: "Entity Gain = FMV minus Basis. Flow through on K-1. Adjust stock bases. Compute redemption under §302.",
      when: "S-Corp redeems retiring owner using entity real estate.",
      source: "IRC §311(b); IRC §1366"
    }
  }
];
