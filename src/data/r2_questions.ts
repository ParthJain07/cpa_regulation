import type { Question } from './r1_questions';

export const r2Questions: Question[] = [
  // MEDIUM (1-20)
  {
    id: 1,
    difficulty: "Medium",
    text: "What is the general basis of property acquired by purchase?",
    options: [
      "Fair Market Value (FMV) on the date of purchase",
      "Cost plus capital improvements",
      "Cost, including sales tax, freight, and installation",
      "The seller's adjusted basis"
    ],
    correctAnswer: 2,
    explanation: {
      why: "The basis of purchased property is its cost. Cost includes the purchase price, sales tax, freight, installation, and any other costs to place the asset in service.",
      how: "Add the purchase price to all acquisition/installation costs.",
      when: "When initially recording the basis of a newly purchased asset.",
      source: "IRC §1012"
    }
  },
  {
    id: 2,
    difficulty: "Medium",
    text: "How is the basis of gifted property determined for calculating a GAIN on a subsequent sale?",
    options: [
      "Always the donor's adjusted basis",
      "Always the FMV on the date of the gift",
      "The lesser of the donor's adjusted basis or the FMV",
      "The donor's adjusted basis plus any gift tax paid on the appreciation"
    ],
    correctAnswer: 3,
    explanation: {
      why: "For calculating a gain, the basis of gifted property is a carryover of the donor's adjusted basis, increased by any gift tax paid attributable to the net appreciation.",
      how: "Use the donor's adjusted basis. (The FMV rule only applies when calculating a loss if FMV < Basis at time of gift).",
      when: "When a taxpayer sells property received as a gift at a gain.",
      source: "IRC §1015(a)"
    }
  },
  {
    id: 3,
    difficulty: "Medium",
    text: "If property is inherited, what is the heir's basis in the property?",
    options: [
      "The decedent's adjusted basis",
      "The Fair Market Value (FMV) at the date of the decedent's death (or alternate valuation date)",
      "Zero",
      "The FMV at the date the property is distributed to the heir"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Inherited property generally gets a 'stepped-up' basis to the FMV at the date of death (or the alternate valuation date if elected by the executor).",
      how: "Check the estate tax return or valuation at the date of death.",
      when: "When determining basis for property transferred upon death.",
      source: "IRC §1014"
    }
  },
  {
    id: 4,
    difficulty: "Medium",
    text: "Which of the following assets qualifies as a capital asset?",
    options: [
      "Inventory held for sale to customers",
      "Accounts receivable acquired in the ordinary course of business",
      "Depreciable property used in a trade or business",
      "Stock held for investment"
    ],
    correctAnswer: 3,
    explanation: {
      why: "Capital assets include all property held by the taxpayer EXCEPT inventory, accounts receivable, depreciable business property, real business property, and certain creative works.",
      how: "Classify the asset. Stock is investment property, thus a capital asset. Business property is Sec 1231, not a capital asset.",
      when: "When categorizing assets for sale or exchange.",
      source: "IRC §1221"
    }
  },
  {
    id: 5,
    difficulty: "Medium",
    text: "What is the holding period requirement for a capital gain to be considered 'long-term'?",
    options: [
      "More than 6 months",
      "Exactly 1 year",
      "More than 1 year",
      "2 years or more"
    ],
    correctAnswer: 2,
    explanation: {
      why: "A capital asset must be held for more than one year (i.e., at least one year and one day) to qualify for long-term capital gain treatment.",
      how: "Compare the acquisition date to the sale date. It must exceed 365/366 days.",
      when: "When determining if preferential tax rates apply to a gain.",
      source: "IRC §1222(3)"
    }
  },
  {
    id: 6,
    difficulty: "Medium",
    text: "Under MACRS, what is the recovery period for residential rental real estate?",
    options: [
      "15 years",
      "27.5 years",
      "39 years",
      "40 years"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Residential rental property is depreciated over 27.5 years using the straight-line method.",
      how: "Identify the property type. If 80%+ of gross rental income is from dwelling units, use 27.5 years.",
      when: "When placing a residential rental building (not land) into service.",
      source: "IRC §168(c)"
    }
  },
  {
    id: 7,
    difficulty: "Medium",
    text: "What is the MACRS recovery period for nonresidential real property (e.g., an office building)?",
    options: [
      "27.5 years",
      "31.5 years",
      "39 years",
      "40 years"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Nonresidential real property placed in service after May 13, 1993, is depreciated over 39 years using the straight-line method.",
      how: "Use the 39-year straight-line MACRS tables.",
      when: "When depreciating commercial buildings like offices or warehouses.",
      source: "IRC §168(c)"
    }
  },
  {
    id: 8,
    difficulty: "Medium",
    text: "Which depreciation convention applies to personal property if more than 40% of the property is placed in service during the last quarter of the year?",
    options: [
      "Half-year convention",
      "Mid-month convention",
      "Mid-quarter convention",
      "Full-year convention"
    ],
    correctAnswer: 2,
    explanation: {
      why: "The mid-quarter convention applies if more than 40% of the total basis of all personal property placed in service during the year is placed in service during the 4th quarter.",
      how: "Sum all personal property placed in service. If Q4 additions > 40% of total, use mid-quarter tables for all assets that year.",
      when: "When a business buys a large amount of equipment late in the year.",
      source: "IRC §168(d)(3)"
    }
  },
  {
    id: 9,
    difficulty: "Medium",
    text: "Under Section 179, what is the maximum deduction allowed for 2024 (approximate, subject to inflation)?",
    options: [
      "$500,000",
      "$1,220,000",
      "$2,500,000",
      "Unlimited"
    ],
    correctAnswer: 1,
    explanation: {
      why: "For 2024, the maximum Section 179 expense deduction is $1,220,000. It phases out dollar-for-dollar when total equipment purchases exceed $3,050,000.",
      how: "Deduct up to the limit of qualified property placed in service, provided it doesn't create a business loss.",
      when: "When a business elects to immediately expense equipment rather than depreciate it over time.",
      source: "IRC §179(b)"
    }
  },
  {
    id: 10,
    difficulty: "Medium",
    text: "What type of property qualifies for a Section 1031 Like-Kind Exchange?",
    options: [
      "Inventory",
      "Stocks and bonds",
      "Real property used in a trade or business or held for investment",
      "Personal property (e.g., machinery or vehicles)"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Since the TCJA, Section 1031 like-kind exchanges are strictly limited to real property used in a trade or business or held for investment. Personal property and financial assets are excluded.",
      how: "Verify the asset is real estate (land/buildings) and not held primarily for sale.",
      when: "When a taxpayer swaps real estate to defer capital gains taxes.",
      source: "IRC §1031(a)"
    }
  },
  {
    id: 11,
    difficulty: "Medium",
    text: "Section 1231 property includes:",
    options: [
      "Inventory held less than 1 year",
      "Depreciable business property held for MORE than 1 year",
      "Capital assets held for investment",
      "Accounts receivable"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 1231 assets are depreciable property and real property used in a trade or business and held for MORE than 1 year.",
      how: "Check the asset's use (business) and holding period (> 1 year).",
      when: "When selling business equipment or buildings.",
      source: "IRC §1231(b)"
    }
  },
  {
    id: 12,
    difficulty: "Medium",
    text: "What is the primary benefit of an asset being classified as Section 1231?",
    options: [
      "Gains are tax-free.",
      "Losses are capital, and gains are ordinary.",
      "Net gains are treated as long-term capital gains, while net losses are treated as ordinary losses.",
      "They are exempt from depreciation recapture."
    ],
    correctAnswer: 2,
    explanation: {
      why: "Section 1231 provides the 'best of both worlds': net Section 1231 gains are taxed at favorable long-term capital gain rates, while net Section 1231 losses are fully deductible as ordinary losses.",
      how: "Net all 1231 gains and losses for the year. Apply ordinary treatment if a net loss, capital treatment if a net gain (subject to look-back).",
      when: "When finalizing tax treatment of business asset sales.",
      source: "IRC §1231(a)"
    }
  },
  {
    id: 13,
    difficulty: "Medium",
    text: "Under Section 1245, what happens when depreciable personal property (like machinery) is sold at a gain?",
    options: [
      "The entire gain is a capital gain.",
      "The gain is recaptured as ordinary income to the extent of all depreciation previously taken.",
      "The gain is tax-free if reinvested.",
      "Only 20% of the gain is ordinary income."
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 1245 requires that any gain on the sale of personal business property be treated as ordinary income up to the amount of depreciation previously claimed.",
      how: "Compare the gain to accumulated depreciation. The lesser of the two is Section 1245 ordinary income. Any remaining gain is Section 1231 gain.",
      when: "When selling business equipment at a gain.",
      source: "IRC §1245(a)"
    }
  },
  {
    id: 14,
    difficulty: "Medium",
    text: "Losses from sales of property between related parties (e.g., brother and sister) are:",
    options: [
      "Fully deductible as ordinary losses",
      "Fully deductible as capital losses",
      "Disallowed (not deductible)",
      "Deferred until the end of the year"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Section 267 disallows losses from the sale or exchange of property between related parties to prevent tax avoidance.",
      how: "Identify related parties (siblings, spouses, ancestors, lineal descendants, or >50% owned corporations). Disallow any loss on the sale.",
      when: "When family members or controlled entities transact at a loss.",
      source: "IRC §267(a)(1)"
    }
  },
  {
    id: 15,
    difficulty: "Medium",
    text: "In an involuntary conversion (e.g., a building burns down and insurance pays out), how long does a taxpayer generally have to replace the property to defer the gain?",
    options: [
      "1 year from the date of the fire",
      "2 years from the end of the tax year in which the gain is realized",
      "3 years from the date of the insurance payout",
      "5 years"
    ],
    correctAnswer: 1,
    explanation: {
      why: "For involuntary conversions due to destruction or theft, the replacement period ends 2 years after the close of the first tax year in which any part of the gain is realized. (3 years for condemned real property).",
      how: "Find the year the insurance payout creates a gain. The taxpayer has until Dec 31 two years later to buy replacement property.",
      when: "When property is destroyed and insurance proceeds exceed the adjusted basis.",
      source: "IRC §1033(a)(2)(B)"
    }
  },
  {
    id: 16,
    difficulty: "Medium",
    text: "What is the mid-month convention in MACRS?",
    options: [
      "An asset is treated as placed in service in the middle of the quarter.",
      "An asset is treated as placed in service in the middle of the month, regardless of the actual day.",
      "An asset is treated as placed in service on July 1.",
      "It allows 50% bonus depreciation in the first month."
    ],
    correctAnswer: 1,
    explanation: {
      why: "The mid-month convention applies to real property (27.5 or 39 years). It treats the property as being placed in service in the middle of the month of acquisition, giving 0.5 months of depreciation for that first month.",
      how: "Use the appropriate column in the MACRS real property table corresponding to the month placed in service.",
      when: "When depreciating residential or nonresidential real estate.",
      source: "IRC §168(d)(2)"
    }
  },
  {
    id: 17,
    difficulty: "Medium",
    text: "What is the basis of an asset converted from personal use to business use?",
    options: [
      "Always its original cost",
      "Always its Fair Market Value on the date of conversion",
      "The lesser of its adjusted basis or its FMV on the date of conversion",
      "Zero"
    ],
    correctAnswer: 2,
    explanation: {
      why: "To prevent taxpayers from converting personal losses into business losses, the basis for depreciation (and calculating a loss) is the lesser of the adjusted basis or the FMV at the time of conversion.",
      how: "Compare original cost to FMV when the asset becomes a business asset. Use the smaller number for depreciation.",
      when: "When a taxpayer turns their personal car or home into a business asset.",
      source: "Treas. Reg. §1.167(g)-1"
    }
  },
  {
    id: 18,
    difficulty: "Medium",
    text: "A corporation sells land held for investment for a $10,000 loss. How can the corporation treat this capital loss?",
    options: [
      "Deduct $3,000 against ordinary income.",
      "Deduct the full $10,000 against ordinary income.",
      "It can only be used to offset capital gains; cannot offset ordinary income.",
      "It is an ordinary loss under Section 1231."
    ],
    correctAnswer: 2,
    explanation: {
      why: "Unlike individuals (who can deduct $3,000), corporations cannot deduct any net capital losses against ordinary income. Capital losses can only offset capital gains.",
      how: "Carry the loss back 3 years and forward 5 years to offset corporate capital gains.",
      when: "When a C-Corporation incurs a net capital loss.",
      source: "IRC §1211(a)"
    }
  },
  {
    id: 19,
    difficulty: "Medium",
    text: "Which of the following describes 'Bonus Depreciation'?",
    options: [
      "A permanent 100% deduction for all real estate.",
      "An immediate deduction of a percentage (e.g., 60% in 2024) of the cost of qualified new or used personal property.",
      "A bonus given to employees equal to the depreciation amount.",
      "An extra year added to the MACRS recovery period."
    ],
    correctAnswer: 1,
    explanation: {
      why: "Bonus depreciation allows businesses to immediately deduct a substantial percentage of the purchase price of eligible property (mostly MACRS property with a recovery period of 20 years or less). It is phasing down from 100% (e.g., 60% in 2024, 40% in 2025).",
      how: "Calculate the bonus percentage on the cost basis before applying regular MACRS.",
      when: "When acquiring qualified personal business property.",
      source: "IRC §168(k)"
    }
  },
  {
    id: 20,
    difficulty: "Medium",
    text: "What happens to the holding period of property acquired via a tax-free like-kind exchange (Section 1031)?",
    options: [
      "It starts fresh on the day the new property is received.",
      "It tacks on (includes) the holding period of the old property given up.",
      "It is always considered long-term.",
      "It is always considered short-term."
    ],
    correctAnswer: 1,
    explanation: {
      why: "Because the new property is considered a continuation of the old investment, the holding period of the property given up 'tacks' onto the holding period of the property received.",
      how: "Add the time you held the old real estate to the time you hold the new real estate.",
      when: "When determining if a subsequent sale of the received property is long-term or short-term.",
      source: "IRC §1223(1)"
    }
  },

  // HARD (21-40)
  {
    id: 21,
    difficulty: "Hard",
    text: "A taxpayer sells a machine used in their business for $50,000. It was purchased 3 years ago for $40,000. Accumulated depreciation is $15,000. What is the character of the gain?",
    options: [
      "$25,000 Section 1231 gain",
      "$15,000 Section 1245 ordinary income, $10,000 Section 1231 gain",
      "$10,000 Section 1245 ordinary income, $15,000 Section 1231 gain",
      "$25,000 ordinary income"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Basis = $40k - $15k = $25k. Realized gain = $50k - $25k = $25k. Under Section 1245, gain is recaptured as ordinary income up to the amount of depreciation taken ($15k). The remaining gain ($10k) is a Section 1231 gain.",
      how: "Gain = $25k. Depreciation = $15k. Ordinary (Sec 1245) = Min(Gain, Depr) = $15k. Capital (Sec 1231) = Gain - Ordinary = $10k.",
      when: "When selling depreciable personal property for a price higher than its original cost.",
      source: "IRC §1245"
    }
  },
  {
    id: 22,
    difficulty: "Hard",
    text: "Section 1231 Look-Back Rule: A taxpayer has a net Section 1231 gain of $10,000 in Year 4. In Year 2, they had a net Section 1231 loss of $4,000. How is the Year 4 gain treated?",
    options: [
      "$10,000 long-term capital gain",
      "$10,000 ordinary income",
      "$4,000 ordinary income, $6,000 long-term capital gain",
      "$4,000 long-term capital gain, $6,000 ordinary income"
    ],
    correctAnswer: 2,
    explanation: {
      why: "The look-back rule requires taxpayers to recapture net Section 1231 gains as ordinary income to the extent of any unrecaptured net Section 1231 losses from the prior 5 years.",
      how: "Gain = $10k. Prior unrecaptured losses = $4k. Recapture $4k as ordinary income. The remaining $6k is long-term capital gain.",
      when: "When a taxpayer realizes a net Section 1231 gain and had 1231 losses in the last 5 years.",
      source: "IRC §1231(c)"
    }
  },
  {
    id: 23,
    difficulty: "Hard",
    text: "Alice gifts stock to Bob. Alice's basis is $20,000. The FMV on the date of the gift is $15,000. Bob later sells the stock for $12,000. What is Bob's recognized gain or loss?",
    options: [
      "$8,000 loss",
      "$3,000 loss",
      "$0",
      "$5,000 loss"
    ],
    correctAnswer: 1,
    explanation: {
      why: "When FMV < Basis at the time of a gift, 'dual basis' rules apply. For determining a loss, the basis is the FMV ($15k). Sale price ($12k) - Loss Basis ($15k) = $3,000 loss.",
      how: "Because sale price ($12k) is less than FMV at gift ($15k), use FMV as basis. Loss = $12k - $15k = ($3,000).",
      when: "When gifted property that declined in value before the gift is sold at an even lower price.",
      source: "IRC §1015(a)"
    }
  },
  {
    id: 24,
    difficulty: "Hard",
    text: "Using the same facts as the previous question (Alice's basis $20k, FMV $15k at gift), what if Bob sells the stock for $18,000?",
    options: [
      "$2,000 loss",
      "$3,000 gain",
      "$0 (no gain or loss recognized)",
      "$2,000 gain"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Dual basis rules: For a gain, basis is $20k. For a loss, basis is $15k. The sale price ($18k) falls between the two bases. Therefore, no gain or loss is recognized.",
      how: "Since $18k < $20k, there's no gain. Since $18k > $15k, there's no loss. Result is $0.",
      when: "When selling gifted property where the sale price is between the donor's basis and the FMV at the time of the gift.",
      source: "IRC §1015(a)"
    }
  },
  {
    id: 25,
    difficulty: "Hard",
    text: "A related party transaction occurs where Father sells land to Son for $40,000. Father's basis was $50,000. Two years later, Son sells the land to an unrelated third party for $55,000. What is Son's recognized gain?",
    options: [
      "$15,000 gain",
      "$5,000 gain",
      "$0 gain",
      "$10,000 loss"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Father's $10k loss was disallowed. Son's basis is his purchase price ($40k). Son's realized gain is $55k - $40k = $15k. Son can use Father's previously disallowed $10k loss to offset his gain. Recognized gain = $15k - $10k = $5,000.",
      how: "Calculate subsequent owner's realized gain. Reduce this gain (but not below zero) by the related party's previously disallowed loss.",
      when: "When property acquired from a related party who took a disallowed loss is later sold at a gain.",
      source: "IRC §267(d)"
    }
  },
  {
    id: 26,
    difficulty: "Hard",
    text: "In a Section 1031 exchange, Taxpayer exchanges Land A (Basis $50k, subject to a $20k mortgage) for Land B (FMV $80k, subject to a $10k mortgage). Taxpayer is relieved of the $20k mortgage and assumes the $10k mortgage. What is the Taxpayer's recognized gain?",
    options: [
      "$0",
      "$10,000",
      "$20,000",
      "$40,000"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Net mortgage relief is treated as cash 'boot' received. Mortgage given up ($20k) - Mortgage assumed ($10k) = $10k net boot received. Realized gain = ($80k FMV + $10k net boot) - $50k Basis = $40k. Recognized gain = Lesser of Realized Gain ($40k) or Boot Received ($10k).",
      how: "Net the liabilities. If liability given up > liability assumed, the difference is boot received. Recognize gain up to boot.",
      when: "When real estate with mortgages is exchanged in a 1031.",
      source: "Treas. Reg. §1.1031(b)-1(c)"
    }
  },
  {
    id: 27,
    difficulty: "Hard",
    text: "Based on the previous question (Land A Basis $50k, Land B FMV $80k, Net Boot $10k, Recognized Gain $10k), what is the Taxpayer's basis in the new Land B?",
    options: [
      "$80,000",
      "$50,000",
      "$60,000",
      "$40,000"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Formula for basis of new property: Old Basis ($50k) + Gain Recognized ($10k) - Boot Received ($10k) + Boot Paid ($0) = $50,000. Alternatively: FMV of new ($80k) - Deferred Gain ($30k) = $50,000.",
      how: "Use the formula: Old Basis + Gain Recognized - Boot Received = New Basis.",
      when: "Calculating basis after a 1031 exchange.",
      source: "IRC §1031(d)"
    }
  },
  {
    id: 28,
    difficulty: "Hard",
    text: "Under Section 179 for 2024, a business purchases $3,200,000 of qualified equipment. The Section 179 limit is $1,220,000 and the phase-out threshold is $3,050,000. What is the maximum Section 179 deduction allowed?",
    options: [
      "$1,220,000",
      "$1,070,000",
      "$150,000",
      "$0"
    ],
    correctAnswer: 1,
    explanation: {
      why: "The cost exceeds the $3,050,000 threshold by $150,000. The maximum deduction ($1,220,000) is reduced dollar-for-dollar by this excess. $1,220,000 - $150,000 = $1,070,000.",
      how: "Excess = $3,200,000 - $3,050,000 = $150,000. Reduced Limit = $1,220,000 - $150,000 = $1,070,000.",
      when: "When a business makes massive equipment purchases exceeding the Section 179 phase-out threshold.",
      source: "IRC §179(b)(2)"
    }
  },
  {
    id: 29,
    difficulty: "Hard",
    text: "A taxpayer owns an apartment building (Section 1250 property) purchased for $500k. They claimed $100k of straight-line MACRS depreciation. They sell the building for $600k. What is the character of the $200k gain?",
    options: [
      "$100k ordinary income, $100k Section 1231 gain",
      "$200k Section 1231 gain, but $100k is taxed at a maximum 25% rate (Unrecaptured Section 1250 gain)",
      "$200k ordinary income",
      "$200k long-term capital gain taxed at 15/20%"
    ],
    correctAnswer: 1,
    explanation: {
      why: "For real estate depreciated using straight-line (which all MACRS real estate is), there is no Section 1250 ordinary income recapture. Instead, the gain attributable to the depreciation ($100k) is 'Unrecaptured Section 1250 gain', treated as a Section 1231 gain but taxed at a maximum rate of 25%. The remaining $100k is regular Section 1231 gain (0/15/20%).",
      how: "Gain = $200k. Unrecaptured 1250 (max 25%) = Depreciation taken ($100k). Remaining gain ($100k) = regular capital gain rates.",
      when: "When individuals sell depreciated real estate at a gain.",
      source: "IRC §1(h)(1)(D)"
    }
  },
  {
    id: 30,
    difficulty: "Hard",
    text: "Which of the following costs must be capitalized uniformly into inventory under the Uniform Capitalization Rules (UNICAP, Section 263A)?",
    options: [
      "Marketing and selling expenses",
      "General management compensation not related to production",
      "Quality control inspection costs for manufactured goods",
      "Research and experimental costs"
    ],
    correctAnswer: 2,
    explanation: {
      why: "UNICAP requires capitalizing all direct costs and a portion of indirect costs that benefit the production or resale activities. Quality control is an indirect cost that must be capitalized. Marketing, general management, and R&D are expressly excluded.",
      how: "Allocate factory overhead, quality control, and indirect materials to inventory rather than expensing them.",
      when: "When calculating COGS and ending inventory for large manufacturers or retailers.",
      source: "Treas. Reg. §1.263A-1"
    }
  },
  {
    id: 31,
    difficulty: "Hard",
    text: "A corporation buys a patent (Section 197 intangible) for $150,000. How is this cost recovered for tax purposes?",
    options: [
      "It is expensed immediately.",
      "It is amortized over its legal life (e.g., 20 years).",
      "It is amortized straight-line over 15 years.",
      "It cannot be amortized; it is recovered only upon sale."
    ],
    correctAnswer: 2,
    explanation: {
      why: "Acquired Section 197 intangibles (goodwill, patents, trademarks, customer lists) are amortized strictly on a straight-line basis over exactly 15 years (180 months), regardless of their actual or legal useful life.",
      how: "Divide the cost by 180 months to get the monthly amortization deduction.",
      when: "When a business acquires intangible assets, usually in a business buyout.",
      source: "IRC §197(a)"
    }
  },
  {
    id: 32,
    difficulty: "Hard",
    text: "A taxpayer has a personal use vacation home. They rent it out for 12 days a year and use it personally for 30 days. How is the rental income and expenses treated?",
    options: [
      "Income is taxable; expenses are prorated and deductible subject to passive loss limits.",
      "Income is completely tax-free; rental expenses (other than taxes/interest) are not deductible.",
      "Income is taxable; all expenses are deductible on Schedule E.",
      "Income is tax-free; all expenses are deductible."
    ],
    correctAnswer: 1,
    explanation: {
      why: "If a home is rented for fewer than 15 days in a year, it is treated entirely as a personal residence. The rental income is excluded from gross income, and no rental expenses (like depreciation or utilities) can be deducted.",
      how: "Ignore the 12 days of rental income on the tax return. Mortgage interest and property taxes remain deductible on Schedule A.",
      when: "When taxpayers briefly rent out their homes (e.g., during a local sporting event like the Super Bowl).",
      source: "IRC §280A(g)"
    }
  },
  {
    id: 33,
    difficulty: "Hard",
    text: "Corporation X issues $100,000 of its own stock to acquire a piece of land with an FMV of $120,000. What is Corporation X's basis in the land?",
    options: [
      "$100,000",
      "$120,000",
      "$0",
      "Depends on the transferor's basis"
    ],
    correctAnswer: 1,
    explanation: {
      why: "When a corporation purchases property by issuing its own stock (outside of a Section 351 formation), the basis of the property received is its Fair Market Value on the date of the transaction.",
      how: "Record the asset at the $120,000 FMV. The corporation recognizes no gain/loss on issuing its own stock (Sec 1032).",
      when: "When corporate stock is used as currency to buy assets.",
      source: "IRC §1012; IRC §1032"
    }
  },
  {
    id: 34,
    difficulty: "Hard",
    text: "A C-Corporation distributes property with a basis of $20,000 and an FMV of $50,000 to its sole shareholder as a dividend. What is the tax consequence to the corporation?",
    options: [
      "No gain or loss recognized.",
      "Recognizes a $30,000 ordinary gain.",
      "Recognizes a $30,000 capital or Section 1231 gain, depending on the asset.",
      "The shareholder recognizes the $30,000 gain, not the corporation."
    ],
    correctAnswer: 2,
    explanation: {
      why: "When a corporation distributes appreciated property as a dividend, it must recognize gain as if it had sold the property for its FMV. (Note: A corporation cannot recognize a loss on a distribution).",
      how: "Gain = FMV ($50k) - Basis ($20k) = $30k. The character depends on the type of asset distributed.",
      when: "When property dividends are issued to shareholders.",
      source: "IRC §311(b)"
    }
  },
  {
    id: 35,
    difficulty: "Hard",
    text: "In a corporate formation under Section 351, an individual transfers a building (FMV $100k, Basis $40k, Mortgage $60k) in exchange for 100% of the corporate stock. What is the individual's recognized gain?",
    options: [
      "$0",
      "$20,000",
      "$60,000",
      "$100,000"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Section 357(c), if liabilities assumed by the corporation ($60k) exceed the total adjusted basis of the property transferred ($40k), the transferor must recognize gain to the extent of the excess ($20k).",
      how: "Gain = Liabilities Assumed - Total Basis = $60k - $40k = $20k.",
      when: "When incorporating a business and transferring heavily leveraged assets.",
      source: "IRC §357(c)"
    }
  },
  {
    id: 36,
    difficulty: "Hard",
    text: "In a partnership formation, Partner A contributes cash of $10,000 and services worth $10,000 for a 20% interest. What is Partner A's initial basis in the partnership interest, and what is the tax consequence?",
    options: [
      "Basis $10,000; No taxable income",
      "Basis $20,000; No taxable income",
      "Basis $20,000; Recognizes $10,000 ordinary income",
      "Basis $10,000; Recognizes $10,000 capital gain"
    ],
    correctAnswer: 2,
    explanation: {
      why: "A partner who receives a capital interest in exchange for services must recognize ordinary income equal to the FMV of the services ($10k). Their outside basis is the cash contributed ($10k) plus the income recognized ($10k) = $20,000.",
      how: "Report $10k as ordinary income. Calculate basis: Cash + Income Recognized.",
      when: "When 'sweat equity' is exchanged for a partnership capital interest.",
      source: "IRC §83; Treas. Reg. §1.721-1(b)"
    }
  },
  {
    id: 37,
    difficulty: "Hard",
    text: "A taxpayer buys a 5-year MACRS asset for $100,000 on August 1st. They elect NOT to take Section 179 or Bonus Depreciation. Assuming the half-year convention, what is the Year 1 depreciation deduction? (5-year half-year rates: Y1=20%, Y2=32%)",
    options: [
      "$10,000",
      "$20,000",
      "$50,000",
      "$16,000"
    ],
    correctAnswer: 1,
    explanation: {
      why: "The MACRS 5-year half-year table rate for Year 1 is 20%. Therefore, $100,000 * 20% = $20,000. (The 20% rate already incorporates the half-year factor: 1/5 = 20% straight line * 200% double declining = 40% full year * 1/2 year = 20%).",
      how: "Multiply the unadjusted basis by the exact MACRS table percentage.",
      when: "When applying standard MACRS tables to machinery/equipment.",
      source: "Rev. Proc. 87-57"
    }
  },
  {
    id: 38,
    difficulty: "Hard",
    text: "In determining the basis of a partnership interest (outside basis), which of the following DECREASES the partner's basis?",
    options: [
      "The partner's share of tax-exempt municipal bond income",
      "An increase in the partnership's liabilities",
      "The partner's share of non-deductible partnership expenses",
      "Contributions of property by the partner to the partnership"
    ],
    correctAnswer: 2,
    explanation: {
      why: "A partner's basis is decreased by distributions, their share of partnership losses, and their share of non-deductible, non-capitalizable expenses (e.g., fines/penalties). Tax-exempt income and liability increases *increase* basis.",
      how: "Adjust basis downward for the partner's K-1 share of non-deductible expenses to prevent an artificial loss upon sale of the partnership interest.",
      when: "When calculating year-end partnership basis limits.",
      source: "IRC §705(a)"
    }
  },
  {
    id: 39,
    difficulty: "Hard",
    text: "Which of the following corporate reorganizations is generally considered a tax-free 'Type B' reorganization?",
    options: [
      "A statutory merger or consolidation",
      "The acquisition of a target's assets solely for voting stock",
      "The acquisition of target's stock solely for voting stock, resulting in at least 80% control",
      "A transfer of assets to a controlled corporation"
    ],
    correctAnswer: 2,
    explanation: {
      why: "A Type B reorganization is a 'stock-for-stock' acquisition where the acquiring corporation uses *solely* its voting stock to acquire the target's stock, and immediately after the transaction, has 80% or more control of the target.",
      how: "Verify the consideration is *only* voting stock and the 80% control threshold is met.",
      when: "When corporations acquire subsidiaries via stock swaps.",
      source: "IRC §368(a)(1)(B)"
    }
  },
  {
    id: 40,
    difficulty: "Hard",
    text: "An S-Corporation was previously a C-Corporation. It sells an asset that had built-in gain at the time of the S-election. The sale occurs within the 5-year recognition period. What is the tax impact?",
    options: [
      "The gain flows through to shareholders and is taxed at their individual rates.",
      "The S-Corporation pays a built-in gains (BIG) tax at the highest corporate rate on the recognized built-in gain.",
      "The gain is completely tax-free.",
      "The S-election is immediately terminated."
    ],
    correctAnswer: 1,
    explanation: {
      why: "To prevent C-Corps from electing S-status just to sell appreciated assets tax-free at the corporate level, the Built-In Gains (BIG) tax imposes the highest corporate tax rate (currently 21%) on the net recognized built-in gain if sold within 5 years of the election.",
      how: "Determine the FMV vs Basis at the time of S-election. If sold within 5 years, apply the corporate tax rate to that built-in gain at the entity level.",
      when: "When a former C-Corp sells old assets after converting to an S-Corp.",
      source: "IRC §1374"
    }
  }
];
