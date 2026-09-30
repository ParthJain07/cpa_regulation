import type { Question } from './r1_questions';

export const r2Set2Questions: Question[] = [
  // GROUP 1: 0, 1, 2, 3
  {
    id: 1,
    difficulty: "Hard",
    text: "A taxpayer purchases a commercial warehouse for $1,000,000. They also pay $50,000 in legal fees to negotiate the purchase, $25,000 for a title insurance policy, and $10,000 for a zoning variance application. What is the taxpayer's initial basis in the warehouse for depreciation purposes?",
    options: [
      "The initial basis is $1,085,000 because all costs directly related to acquiring the property and preparing it for use must be capitalized.",
      "The initial basis is $1,000,000 because legal fees and title insurance are immediately deductible operating expenses under Section 162.",
      "The initial basis is $1,050,000 because title insurance is capitalized, but zoning variance fees are always treated as nondeductible personal expenses.",
      "The initial basis is $1,075,000 because legal fees and title insurance are capitalized, but zoning applications must be amortized separately."
    ],
    correctAnswer: 0,
    explanation: {
      why: "Under Section 1012, the basis of property is its cost, which includes the purchase price plus any expenses paid to acquire the property (e.g., legal fees, title insurance, closing costs) and prepare it for its intended use (e.g., zoning variances). All these costs must be capitalized into the property's basis.",
      whyIncorrect: "Legal fees and title insurance for acquiring property are capital expenditures, not ordinary operating expenses (Sec. 263). Zoning fees related to acquiring or preparing the property must also be capitalized into the basis of the asset, not treated as personal or separately amortized.",
      how: "Add all acquisition costs to the purchase price: $1,000,000 + $50,000 + $25,000 + $10,000 = $1,085,000.",
      when: "A taxpayer acquires real estate and pays various closing and preparation costs.",
      source: "IRC § 1012; Treas. Reg. § 1.263(a)-2"
    }
  },
  {
    id: 2,
    difficulty: "Hard",
    text: "Parent gifts a parcel of investment land to Child. On the date of the gift, Parent's adjusted basis in the land is $150,000, and the fair market value (FMV) is $100,000. Parent pays $10,000 in gift taxes. Two years later, Child sells the land to an unrelated third party for $120,000. What is Child's recognized gain or loss?",
    options: [
      "Child recognizes a $30,000 loss, calculated by subtracting the sale price from Parent's original adjusted basis.",
      "Child recognizes no gain or loss, because the sale price falls between the donor's adjusted basis and the fair market value at the time of the gift.",
      "Child recognizes a $20,000 gain, calculated by subtracting the fair market value at the time of the gift from the sale price.",
      "Child recognizes a $20,000 loss, calculated by subtracting the sale price from the fair market value plus the gift tax paid."
    ],
    correctAnswer: 1,
    explanation: {
      why: "When property is gifted with an FMV lower than the donor's basis, the dual-basis rule applies. For gains, the basis is the donor's basis ($150k). For losses, the basis is the FMV at the time of the gift ($100k). Since the sale price ($120k) falls in the 'dead zone' between $100k and $150k, no gain or loss is recognized.",
      whyIncorrect: "A $30k loss incorrectly uses the gain basis ($150k) for a loss transaction. A $20k gain incorrectly uses the loss basis ($100k) for a gain transaction. The gift tax paid is only added to basis if the property appreciated in the donor's hands, which it did not here.",
      how: "Gain Basis = $150,000. Loss Basis = $100,000. Sale Price = $120,000. Since $100k < $120k < $150k, result is $0.",
      when: "A taxpayer sells gifted property that had declined in value before the gift was made.",
      source: "IRC § 1015(a)"
    }
  },
  {
    id: 3,
    difficulty: "Hard",
    text: "A taxpayer inherits stock from their aunt. The aunt's adjusted basis in the stock was $40,000. On the date of the aunt's death, the stock's FMV was $90,000. The executor elects the alternate valuation date (AVD), six months after death. On the AVD, the FMV is $80,000. The stock is distributed to the taxpayer five months after death, when the FMV is $85,000. What is the taxpayer's basis in the stock?",
    options: [
      "The basis is $40,000, because inherited property always takes a carryover basis from the decedent.",
      "The basis is $90,000, because the alternate valuation date cannot be used if the property is distributed early.",
      "The basis is $85,000, because the property was distributed before the alternate valuation date, fixing the basis at the distribution date FMV.",
      "The basis is $80,000, because the alternate valuation date fixes the basis exactly six months after death regardless of distribution."
    ],
    correctAnswer: 2,
    explanation: {
      why: "When the alternate valuation date (AVD) is elected, the basis of inherited property is its FMV six months after the decedent's death. However, if the property is distributed, sold, or otherwise disposed of *before* the six-month mark, the basis is the FMV on the date of distribution.",
      whyIncorrect: "Carryover basis applies to gifts, not inheritances. The AVD *can* be used if property is distributed early, but it shifts the valuation date to the distribution date. Using the 6-month value ($80k) ignores the statutory exception for early distributions.",
      how: "Check if AVD is elected. Determine if the asset was distributed before 6 months. If yes, use FMV on distribution date ($85,000).",
      when: "An executor elects the AVD but distributes estate assets early.",
      source: "IRC § 2032(a)(1); IRC § 1014(a)(2)"
    }
  },
  {
    id: 4,
    difficulty: "Hard",
    text: "A corporation sells a heavy manufacturing machine for $250,000. The machine was purchased four years ago for $200,000, and the corporation has claimed $80,000 in MACRS depreciation. What is the character of the recognized gain on this sale?",
    options: [
      "The entire $130,000 gain is treated as a long-term capital gain under Section 1231.",
      "The entire $130,000 gain is treated as ordinary income under Section 1245 depreciation recapture rules.",
      "The gain is bifurcated: $50,000 is ordinary income under Section 1245, and $80,000 is Section 1231 capital gain.",
      "The gain is bifurcated: $80,000 is ordinary income under Section 1245, and $50,000 is Section 1231 capital gain."
    ],
    correctAnswer: 3,
    explanation: {
      why: "The adjusted basis is $120,000 ($200k cost - $80k depreciation). The total realized gain is $130,000 ($250k sale - $120k basis). Under Section 1245, gain on the sale of depreciable personal property is recaptured as ordinary income up to the amount of depreciation taken ($80k). The remaining gain ($50k) is treated as a Section 1231 gain.",
      whyIncorrect: "Treating the entire gain as Section 1231 ignores mandatory Section 1245 recapture. Treating the entire gain as ordinary ignores that gain exceeding original cost ($50k) is Section 1231. Bifurcating the amounts backward (50k ordinary/80k 1231) misapplies the recapture limit.",
      how: "Total Gain = $250k - ($200k - $80k) = $130k. Ordinary §1245 = Min(Total Gain, Accumulated Depr) = $80k. Sec 1231 Gain = Total Gain - Ordinary = $50k.",
      when: "A business sells depreciated equipment for more than its original purchase price.",
      source: "IRC § 1245(a)"
    }
  },

  // GROUP 2: 1, 2, 3, 0
  {
    id: 5,
    difficulty: "Hard",
    text: "Under the MACRS depreciation rules, which of the following scenarios absolutely mandates the use of the mid-quarter convention for a taxpayer's personal property?",
    options: [
      "The taxpayer places in service real property accounting for more than 40% of their total asset basis in the fourth quarter.",
      "More than 40% of the aggregate basis of all depreciable personal property placed in service during the tax year is placed in service during the last three months of the year.",
      "The taxpayer elects out of bonus depreciation for all asset classes placed in service during the current tax year.",
      "The taxpayer places exactly 40% of their personal property in service during the fourth quarter, and the rest in the first quarter."
    ],
    correctAnswer: 1,
    explanation: {
      why: "The mid-quarter convention is mandatory if the aggregate basis of all depreciable personal property (excluding real property) placed in service during the last three months of the tax year exceeds 40% of the total basis of all such property placed in service during the entire year.",
      whyIncorrect: "Real property is strictly excluded from the 40% test (it uses mid-month). Bonus depreciation elections do not trigger the mid-quarter rule; the test applies to the remaining basis. The threshold is *more than* 40%, so exactly 40% does not trigger it.",
      how: "Sum all personal property placed in service for the year. Sum all personal property placed in service in Q4. If Q4 > (Total * 0.40), apply mid-quarter tables to all personal property that year.",
      when: "A business buys a large fleet of vehicles or equipment in November or December.",
      source: "IRC § 168(d)(3)"
    }
  },
  {
    id: 6,
    difficulty: "Hard",
    text: "A C-Corporation sells a commercial office building (Section 1250 property) for $1,500,000. It was purchased 10 years ago for $1,000,000. The corporation has claimed $250,000 of straight-line MACRS depreciation. What is the character of the $750,000 recognized gain?",
    options: [
      "The entire $750,000 gain is treated as a Section 1231 capital gain.",
      "The gain is bifurcated: $250,000 is ordinary income under Section 1250, and $500,000 is Section 1231 gain.",
      "The gain is bifurcated: $50,000 is ordinary income under Section 291, and $700,000 is Section 1231 gain.",
      "The gain is bifurcated: $150,000 is ordinary income under Section 291, and $600,000 is Section 1231 gain."
    ],
    correctAnswer: 2,
    explanation: {
      why: "For C-Corporations, Section 291 requires ordinary recapture on the sale of Section 1250 property equal to 20% of the amount that *would* have been recaptured as ordinary income if the property were Section 1245 property (which would be all depreciation taken, $250k). 20% of $250k = $50,000 ordinary income. The remaining $700,000 is Section 1231 gain.",
      whyIncorrect: "Treating it all as 1231 ignores corporate Sec 291 rules. Sec 1250 does not recapture straight-line depreciation as ordinary income; only Sec 291 forces 20% ordinary recapture for C-Corps. $150k miscalculates the 20% rate.",
      how: "Total Gain = $1,500k - $750k basis = $750k. Sec 291 Ordinary = 20% * (Straight-line depreciation of $250k) = $50k. Sec 1231 Gain = $750k - $50k = $700k.",
      when: "A C-Corporation sells depreciated commercial real estate at a gain.",
      source: "IRC § 291(a)(1)"
    }
  },
  {
    id: 7,
    difficulty: "Hard",
    text: "Taxpayer T's commercial building is completely destroyed by a hurricane. The building had an adjusted basis of $400,000. T receives $600,000 in insurance proceeds. Under Section 1033 (Involuntary Conversions), what is the maximum amount of time T has to replace the building to fully defer the $200,000 gain?",
    options: [
      "Two years from the date the hurricane destroyed the building.",
      "Two years from the end of the tax year in which the insurance proceeds are received and the gain is realized.",
      "Three years from the date the hurricane destroyed the building.",
      "Three years from the end of the tax year in which the insurance proceeds are received and the gain is realized."
    ],
    correctAnswer: 3,
    explanation: {
      why: "For the involuntary conversion of real property held for productive use in a trade or business (or for investment) that is destroyed, condemned, or seized, the replacement period ends three (3) years after the close of the first taxable year in which any part of the gain is realized. (Note: standard property is 2 years, but real business property is 3 years).",
      whyIncorrect: "Two years from the incident date ignores both the real property exception and the 'end of tax year' rule. Two years from the end of the year is the rule for personal property, not real business property. Three years from the incident date ignores the 'end of tax year' starting point.",
      how: "Identify the property type (business real estate) and the event (destruction). The clock starts at the end of the tax year the payout creates a gain, and runs for 3 years.",
      when: "A taxpayer receives a massive insurance payout for a destroyed factory and wants to defer taxes by rebuilding.",
      source: "IRC § 1033(g)(4)"
    }
  },
  {
    id: 8,
    difficulty: "Hard",
    text: "A taxpayer sells 1,000 shares of XYZ stock for $50,000 on November 1. They had originally purchased the stock three years ago for $70,000. On November 20 of the same year, the taxpayer purchases 500 shares of XYZ stock for $20,000. What is the taxpayer's recognized loss on the November 1 sale, and what is the basis in the new 500 shares?",
    options: [
      "Recognized loss is $10,000. Basis in new shares is $30,000.",
      "Recognized loss is $20,000. Basis in new shares is $20,000.",
      "Recognized loss is $0. Basis in new shares is $40,000.",
      "Recognized loss is $10,000. Basis in new shares is $20,000."
    ],
    correctAnswer: 0,
    explanation: {
      why: "This is a partial wash sale. The taxpayer realized a $20,000 loss on 1,000 shares ($20/share loss). Because they bought 500 'substantially identical' shares within 30 days, the loss on those 500 shares (500 * $20 = $10,000) is disallowed. The remaining $10,000 loss is recognized. The disallowed $10,000 loss is added to the cost basis of the new shares ($20,000 + $10,000 = $30,000).",
      whyIncorrect: "Recognizing the full $20k loss ignores the wash sale rule completely. Recognizing $0 loss assumes all 1,000 shares were repurchased, but only 500 were. Recognizing a $10k loss but leaving the basis at $20k fails to add the disallowed loss to the new basis, permanently destroying the tax benefit.",
      how: "Calculate total loss per share. Disallow loss on the exact number of repurchased shares. Add the disallowed loss amount to the purchase price of the new shares.",
      when: "An investor sells stock for a loss but immediately buys back half the position to maintain market exposure.",
      source: "IRC § 1091(a); IRC § 1091(d)"
    }
  },

  // GROUP 3: 2, 3, 0, 1
  {
    id: 9,
    difficulty: "Hard",
    text: "Brother sells a piece of investment land to Sister for $80,000. Brother's adjusted basis in the land was $120,000. Three years later, Sister sells the land to an unrelated third party for $130,000. What is Sister's recognized gain on the sale to the third party?",
    options: [
      "Sister recognizes a $50,000 capital gain.",
      "Sister recognizes a $40,000 capital gain.",
      "Sister recognizes a $10,000 capital gain.",
      "Sister recognizes no gain or loss."
    ],
    correctAnswer: 2,
    explanation: {
      why: "Under Section 267, Brother's $40,000 loss on the sale to a related party is permanently disallowed for him. However, Sister takes a cost basis of $80,000. When Sister sells for $130,000, her realized gain is $50,000 ($130k - $80k). She may offset her realized gain by Brother's previously disallowed loss of $40,000. Sister's recognized gain = $50,000 - $40,000 = $10,000.",
      whyIncorrect: "Recognizing $50,000 ignores the related-party loss offset rule. Recognizing $40,000 is incorrect math. Recognizing $0 implies the loss completely wiped out the gain, but the gain ($50k) exceeded the disallowed loss ($40k).",
      how: "Calculate subsequent owner's realized gain (Sale Price - Purchase Price). Reduce this gain (but not below zero) by the related party's previously disallowed loss.",
      when: "Property is sold between family members at a loss, and the buyer later sells it for a massive profit.",
      source: "IRC § 267(d)"
    }
  },
  {
    id: 10,
    difficulty: "Hard",
    text: "In a Section 1031 like-kind exchange, Taxpayer exchanges an apartment building (Adjusted Basis $400,000; Fair Market Value $700,000) for a new commercial building (Fair Market Value $650,000) and receives $50,000 in cash. What is the Taxpayer's recognized gain and their basis in the new commercial building?",
    options: [
      "Recognized Gain: $300,000; New Basis: $650,000.",
      "Recognized Gain: $0; New Basis: $400,000.",
      "Recognized Gain: $50,000; New Basis: $450,000.",
      "Recognized Gain: $50,000; New Basis: $400,000."
    ],
    correctAnswer: 3,
    explanation: {
      why: "Realized Gain = ($650k + $50k boot) - $400k basis = $300,000. Recognized Gain = Lesser of Realized Gain ($300k) or Boot Received ($50k) = $50,000. New Basis = Old Basis ($400k) + Gain Recognized ($50k) - Boot Received ($50k) = $400,000. (Alternatively: FMV of new property $650k - Unrecognized Gain $250k = $400,000).",
      whyIncorrect: "Recognizing the full $300k defeats the purpose of the 1031 exchange. Recognizing $0 ignores the cash boot received, which is always taxable up to the realized gain. Recognizing $50k gain but taking a $450k basis fails to subtract the cash received in the basis formula.",
      how: "Step 1: Realized Gain. Step 2: Recognized Gain = Min(Realized, Boot). Step 3: New Basis = Old Basis + Recognized Gain - Boot Received.",
      when: "A real estate investor trades down slightly in value and receives cash to balance the transaction.",
      source: "IRC § 1031(b); IRC § 1031(d)"
    }
  },
  {
    id: 11,
    difficulty: "Hard",
    text: "Under the Section 179 deduction rules for 2024, a taxpayer purchases and places in service $3,450,000 of qualified manufacturing equipment. Assuming the Section 179 limit is $1,220,000 and the phase-out threshold begins at $3,050,000, what is the maximum Section 179 deduction the taxpayer can claim before applying any taxable income limitations?",
    options: [
      "$820,000",
      "$1,220,000",
      "$400,000",
      "$0"
    ],
    correctAnswer: 0,
    explanation: {
      why: "The cost of equipment ($3,450,000) exceeds the phase-out threshold ($3,050,000) by $400,000. The maximum Section 179 limit ($1,220,000) is reduced dollar-for-dollar by this excess amount. Maximum deduction = $1,220,000 - $400,000 = $820,000.",
      whyIncorrect: "$1,220,000 ignores the statutory phase-out reduction entirely. $400,000 is the phase-out amount, not the remaining deduction limit. $0 over-applies the phase-out penalty.",
      how: "Calculate Excess = Total Cost - Threshold. Reduced Limit = Max Limit - Excess. If Excess > Max Limit, deduction is $0.",
      when: "A large business makes massive equipment purchases and attempts to immediately expense them.",
      source: "IRC § 179(b)(2)"
    }
  },
  {
    id: 12,
    difficulty: "Hard",
    text: "Which of the following assets qualifies as a 'capital asset' under Section 1221?",
    options: [
      "A copyright held by the author who created the work.",
      "A vacant lot held purely for investment purposes by a plumbing contractor.",
      "Accounts receivable acquired from the sale of inventory.",
      "Machinery used in a printing business, held for three years."
    ],
    correctAnswer: 1,
    explanation: {
      why: "A capital asset includes virtually all property held by a taxpayer, with specific statutory exceptions. A vacant lot held for investment is a classic capital asset because it is not inventory, accounts receivable, or depreciable real/personal property used in a trade or business.",
      whyIncorrect: "Self-created copyrights are explicitly excluded from capital asset status to prevent ordinary income from being converted to capital gains. Accounts receivable from operations are ordinary assets. Business machinery is Section 1231 property, not a Section 1221 capital asset.",
      how: "Check Section 1221 exceptions: Inventory, A/R, depreciable business property, self-created IP, and certain government publications are NOT capital assets.",
      when: "Classifying the character of gain on the sale of various corporate or personal assets.",
      source: "IRC § 1221(a)"
    }
  },

  // GROUP 4: 3, 0, 1, 2
  {
    id: 13,
    difficulty: "Hard",
    text: "A taxpayer converts their personal residence into a rental property. The home originally cost $300,000. On the date of conversion, the fair market value (FMV) of the home has dropped to $250,000. Two years later, the taxpayer sells the rental property for $220,000. No depreciation was claimed. What is the taxpayer's recognized loss on the sale?",
    options: [
      "An $80,000 ordinary loss.",
      "An $80,000 Section 1231 loss.",
      "A $30,000 Section 1231 loss.",
      "A $30,000 ordinary loss."
    ],
    correctAnswer: 2,
    explanation: {
      why: "When personal-use property is converted to business use, the basis for computing a loss (and depreciation) is the lesser of the adjusted basis ($300k) or the FMV on the date of conversion ($250k). Therefore, the loss basis is $250,000. The sale price is $220,000. Recognized loss = $220k - $250k = $30,000. Because it is rental real estate held for more than one year, it is a Section 1231 loss.",
      whyIncorrect: "An $80,000 loss uses the original cost basis, which is prohibited for computing losses on converted property (preventing the deduction of personal-use value declines). Ordinary losses do not apply because rental real estate is a Section 1231 asset, subject to netting rules.",
      how: "Determine the loss basis (lesser of Cost or FMV at conversion). Subtract sale price from loss basis. Characterize as Section 1231.",
      when: "A homeowner moves out, rents their declining-value house, and later sells it at a loss.",
      source: "Treas. Reg. § 1.165-9(b)(2)"
    }
  },
  {
    id: 14,
    difficulty: "Hard",
    text: "A corporation has a net Section 1231 gain of $50,000 in Year 5. Reviewing its history, the corporation had a net Section 1231 loss of $15,000 in Year 2, and a net Section 1231 loss of $10,000 in Year 1. Neither prior loss has been recaptured. How is the $50,000 Year 5 gain characterized?",
    options: [
      "$25,000 is ordinary income, and $25,000 is long-term capital gain.",
      "$50,000 is treated entirely as long-term capital gain.",
      "$15,000 is ordinary income, and $35,000 is long-term capital gain.",
      "$50,000 is treated entirely as ordinary income."
    ],
    correctAnswer: 0,
    explanation: {
      why: "Under the Section 1231 look-back rule, a taxpayer must recapture current-year net Section 1231 gains as ordinary income to the extent of any unrecaptured net Section 1231 losses from the previous five tax years. Unrecaptured losses = $15k (Year 2) + $10k (Year 1) = $25,000. Therefore, $25,000 of the gain is recaptured as ordinary income, and the remaining $25,000 is a Section 1231 capital gain.",
      whyIncorrect: "Treating it all as capital gain ignores the mandatory 5-year look-back rule. Recapturing only $15,000 ignores the Year 1 loss (the look-back period is 5 years, not 3). Treating it all as ordinary income over-recaptures beyond the historical losses.",
      how: "Sum all net Section 1231 losses from the prior 5 years. Recharacterize current-year 1231 gains as ordinary income up to that sum.",
      when: "A business repeatedly buys and sells equipment/real estate over a multi-year period, alternating between net gains and net losses.",
      source: "IRC § 1231(c)"
    }
  },
  {
    id: 15,
    difficulty: "Hard",
    text: "A taxpayer purchases a 5-year MACRS asset for $100,000 on March 1. The taxpayer also purchases a 7-year MACRS asset for $400,000 on November 15 of the same year. The taxpayer elects out of bonus depreciation and Section 179. Which depreciation convention must the taxpayer use, and to which assets does it apply?",
    options: [
      "The half-year convention must be used for both assets.",
      "The mid-quarter convention must be used for both assets.",
      "The half-year convention applies to the 5-year asset, and the mid-quarter convention applies to the 7-year asset.",
      "The mid-month convention applies to the 7-year asset, and the half-year applies to the 5-year asset."
    ],
    correctAnswer: 1,
    explanation: {
      why: "Total personal property placed in service = $500,000. Property placed in service in Q4 (November) = $400,000. Because $400,000 / $500,000 = 80%, which is greater than 40%, the mid-quarter convention is mandatory. The mid-quarter convention applies to ALL personal property placed in service during that entire tax year, not just the Q4 assets.",
      whyIncorrect: "Half-year cannot be used because the 40% test was failed. You cannot split conventions (half-year and mid-quarter) for personal property in the same tax year; it's an all-or-nothing test. Mid-month strictly applies only to real estate, not 7-year personal property.",
      how: "Run the 40% test on all personal property. If Q4 > 40%, apply mid-quarter tables to every personal asset bought that year based on the specific quarter it was purchased.",
      when: "A business makes a massive Q4 equipment purchase that dwarfs its earlier purchases.",
      source: "IRC § 168(d)(3)"
    }
  },
  {
    id: 16,
    difficulty: "Hard",
    text: "In a Section 1031 like-kind exchange between related parties, what is the consequence if one of the related parties disposes of their exchanged property within two years of the exchange?",
    options: [
      "The original exchange remains tax-free, but the disposing party must pay a 10% penalty.",
      "The original exchange is retroactively invalidated, and any deferred gain must be recognized by both parties in the year of the subsequent disposition.",
      "The original exchange remains tax-free, and no penalties apply because the 1031 rules do not restrict related-party transfers.",
      "The deferred gain is only recognized by the party who held the property for less than one year."
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Section 1031(f), if related parties engage in a like-kind exchange, both parties must hold their respective new properties for at least two years. If either party disposes of their property within the two-year window, the nonrecognition treatment of the original exchange is destroyed, and the deferred gain is recognized in the year of the subsequent disposition.",
      whyIncorrect: "There is no 10% penalty; the penalty is full recognition of the deferred gain. Section 1031 absolutely restricts related-party exchanges to prevent basis-shifting tax avoidance. Recognition applies to both parties, regardless of who held it less than one year.",
      how: "Monitor related-party 1031 exchanges for 24 months. If a sale occurs, amend or report the original deferred gain in the current year.",
      when: "A parent and child swap real estate to shift high-basis property for a pending sale, but sell it too quickly.",
      source: "IRC § 1031(f)"
    }
  },

  // GROUP 5: 0, 2, 1, 3
  {
    id: 17,
    difficulty: "Hard",
    text: "A taxpayer sells non-publicly traded stock to their wholly-owned C-Corporation for $40,000. The taxpayer's adjusted basis in the stock was $60,000. Two years later, the C-Corporation sells the stock to an unrelated party for $35,000. What is the tax result of these transactions?",
    options: [
      "The taxpayer's $20,000 loss is permanently disallowed, and the C-Corporation recognizes a $5,000 capital loss on the final sale.",
      "The taxpayer recognizes a $20,000 capital loss, and the C-Corporation recognizes a $5,000 capital loss.",
      "The taxpayer's $20,000 loss is suspended and added to the C-Corporation's basis, resulting in a $25,000 loss on the final sale.",
      "The taxpayer's $20,000 loss is permanently disallowed, and the C-Corporation recognizes no gain or loss on the final sale."
    ],
    correctAnswer: 0,
    explanation: {
      why: "Under Section 267, the taxpayer's $20,000 loss on the sale to their related C-Corporation is strictly disallowed. The corporation takes a cost basis of $40,000. When the corporation sells the stock for $35,000, it realizes and recognizes a $5,000 loss. The taxpayer's previously disallowed loss ($20,000) can only be used to offset *gains* realized by the related buyer; it cannot be used to increase the buyer's loss. Therefore, the $20,000 loss is lost forever.",
      whyIncorrect: "The taxpayer cannot recognize the initial loss because it is a related-party transaction. Disallowed losses are not added to basis; they are tracked off-balance-sheet to offset future gains. The corporation definitely recognizes its own independent $5,000 loss.",
      how: "Disallow initial loss. Assign cost basis to buyer. Calculate buyer's sale. Since buyer sold at a loss, the initial disallowed loss provides zero tax benefit.",
      when: "A shareholder tries to harvest tax losses by selling underwater stock to their own company, which later tanks further.",
      source: "IRC § 267(a)(1); IRC § 267(d)"
    }
  },
  {
    id: 18,
    difficulty: "Hard",
    text: "A taxpayer purchases a residential rental property (a duplex) on May 10, 2024, for $550,000 (land value is $100,000). Using the MACRS mid-month convention, what is the MACRS depreciation deduction for the 2024 tax year?",
    options: [
      "$10,227",
      "$13,636",
      "$10,909",
      "$11,538"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Depreciable basis = $550,000 - $100,000 (land is not depreciable) = $450,000. Residential rental property is depreciated over 27.5 years straight-line. Annual depreciation = $450,000 / 27.5 = $16,363.64. Under the mid-month convention for a May placement, the property is in service for 7.5 months (half of May + June-Dec). $16,363.64 * (7.5 / 12) = $10,227.27.",
      whyIncorrect: "$13,636 calculates a full 10 months without the mid-month adjustment. $10,909 calculates an 8-month period (incorrectly counting all of May). $11,538 uses the 39-year commercial life.",
      how: "Depreciable Basis / 27.5 years = Annual amount. Annual amount * (Months in service / 12) = First year depreciation. May = 7.5 months.",
      when: "An investor calculates first-year tax deductions for a newly purchased rental property.",
      source: "IRC § 168(c); IRC § 168(d)(2)"
    }
  },
  {
    id: 19,
    difficulty: "Hard",
    text: "Which of the following describes 'Qualified Improvement Property' (QIP) under current tax law?",
    options: [
      "Any improvement made to the exterior of a commercial building, depreciated over 39 years.",
      "Any improvement made by a taxpayer to the interior portion of a nonresidential building after it was first placed in service, depreciated over 15 years and eligible for bonus depreciation.",
      "Elevators, escalators, and internal structural frameworks added to a residential rental property.",
      "Any structural improvement to a personal residence, added to the basis of the home."
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under the TCJA (as corrected by the CARES Act), Qualified Improvement Property (QIP) is defined as any improvement to the *interior* portion of a *nonresidential* real property placed in service after the building was first placed in service. It is assigned a 15-year MACRS recovery period, making it eligible for bonus depreciation.",
      whyIncorrect: "Exterior improvements do not qualify as QIP. Elevators, escalators, and internal structural frameworks are explicitly excluded from QIP definition by statute. Personal residences (residential property) are excluded from QIP.",
      how: "Verify the building is nonresidential, the improvement is interior, and it does not enlarge the building or involve an elevator/escalator.",
      when: "A business remodels the interior of its leased office space or retail store.",
      source: "IRC § 168(e)(6)"
    }
  },
  {
    id: 20,
    difficulty: "Hard",
    text: "An individual sells a collection of rare coins (held for 5 years) for a $50,000 gain, and also sells stock (held for 2 years) for a $20,000 loss. How is the net gain taxed?",
    options: [
      "The $30,000 net gain is taxed at the standard long-term capital gains rates (0/15/20%).",
      "The $50,000 coin gain is taxed at a maximum rate of 28%, and the $20,000 stock loss offsets ordinary income.",
      "The $20,000 stock loss must first offset the 28% rate coin gain, leaving a $30,000 net gain subject to a maximum tax rate of 28%.",
      "The $30,000 net gain is treated as ordinary income because collectibles are not capital assets."
    ],
    correctAnswer: 2,
    explanation: {
      why: "Rare coins are 'collectibles' under tax law. Long-term capital gains on collectibles are subject to a maximum tax rate of 28%. When netting capital gains and losses, a standard long-term capital loss ($20k stock loss) is first used to offset the highest-taxed long-term gains (the 28% collectibles gain). Thus, the net $30,000 gain is all characterized as a 28% rate gain.",
      whyIncorrect: "Collectibles do not get the favorable 0/15/20% rates. Capital losses cannot directly offset ordinary income (beyond the $3k limit) before offsetting capital gains. Collectibles are capital assets, just subject to a higher maximum rate (28%), not ordinary income rates (up to 37%).",
      how: "Identify collectibles gain (28%). Identify regular LTCG/LTCL. Net the regular LTCL against the 28% gain first to maximize taxpayer benefit.",
      when: "An investor liquidates a diverse portfolio containing both financial securities and physical art/coins.",
      source: "IRC § 1(h)(4)"
    }
  },

  // GROUP 6: 1, 3, 0, 2
  {
    id: 21,
    difficulty: "Hard",
    text: "A taxpayer purchases a patent (a Section 197 intangible) for $300,000 from an inventor. The patent has exactly 5 years remaining on its legal life before it expires. How is the taxpayer allowed to amortize this cost for tax purposes?",
    options: [
      "The $300,000 is amortized straight-line over the remaining 5 years of legal life.",
      "The $300,000 is amortized straight-line over a mandatory 15-year statutory period, regardless of the legal expiration.",
      "The $300,000 is fully expensed in the year of purchase under Section 179.",
      "The patent cannot be amortized because it was acquired separately, not as part of the acquisition of a trade or business."
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 197 mandates that the adjusted basis of any amortizable Section 197 intangible (which includes patents, goodwill, trademarks, etc.) must be amortized ratably over a strict 15-year (180-month) period, completely ignoring the asset's actual useful life or legal expiration date.",
      whyIncorrect: "GAAP accounting uses the remaining 5-year legal life, but tax law overrides this with a rigid 15-year rule. Intangibles do not qualify for Section 179 expensing (which is for tangible personal property). Patents can be amortized whether bought alone or in a business buyout.",
      how: "Divide the cost basis by 180 months. Deduct this exact amount every month, even after the patent legally expires.",
      when: "A tech company buys a specific software patent from a competitor.",
      source: "IRC § 197(a)"
    }
  },
  {
    id: 22,
    difficulty: "Hard",
    text: "A partnership places a heavy-duty truck in service for its business. The truck costs $80,000, weighs 8,000 lbs (exempt from luxury auto limits), and qualifies for Section 179. The partnership's taxable income from operations before the deduction is $50,000. Partner A (50%) has $100,000 of W-2 income from a side job. How much Section 179 deduction flows through to Partner A?",
    options: [
      "$40,000, because the partnership bought the truck and it costs less than the total limit.",
      "$50,000 total flows to partners; A gets $25,000. The remaining $30,000 is suspended at the partner level.",
      "$25,000, because the partnership's deduction is limited to its $50,000 business income, and the remaining $30,000 is permanently lost.",
      "The partnership claims a $50,000 Section 179 deduction, passing $25,000 to Partner A, and the partnership carries forward the remaining $30,000 to the next tax year."
    ],
    correctAnswer: 3,
    explanation: {
      why: "The Section 179 business income limitation applies at BOTH the partnership entity level and the individual partner level. The partnership's deduction is limited to its $50,000 income. The remaining $30,000 cannot pass through; it must be suspended and carried forward *at the partnership level*. Partner A receives a $25,000 K-1 allocation, which they can fully deduct because their W-2 income ($100k) provides sufficient business income at the individual level.",
      whyIncorrect: "Passing through $40k ignores the entity-level income limit. Suspending at the partner level is wrong; entity limits suspend at the entity. Permanently losing the deduction is incorrect; it carries forward indefinitely.",
      how: "Test Sec 179 limit at the Form 1065 level. Carry forward excess inside the partnership. Test the allowed pass-through amount again at the Form 1040 level.",
      when: "A startup partnership buys massive equipment but hasn't generated enough net profit to absorb the full deduction.",
      source: "IRC § 179(b)(3)(A); Treas. Reg. § 1.179-2(c)"
    }
  },
  {
    id: 23,
    difficulty: "Hard",
    text: "A C-Corporation distributes property to its sole shareholder as a dividend. The property has an adjusted basis of $30,000, a fair market value of $70,000, and is subject to a mortgage of $80,000, which the shareholder assumes. What is the corporation's recognized gain on this distribution?",
    options: [
      "The corporation recognizes a $50,000 gain.",
      "The corporation recognizes a $40,000 gain.",
      "The corporation recognizes no gain, but the shareholder must recognize the liability.",
      "The corporation recognizes a $10,000 ordinary loss."
    ],
    correctAnswer: 0,
    explanation: {
      why: "Normally, a corporation recognizes gain on a property distribution as if it sold the property for FMV ($70k - $30k = $40k). However, under Section 311(b)(2) and §7701(g), if the distributed property is subject to a liability that exceeds its FMV, the FMV is deemed to be exactly the amount of the liability ($80k). Therefore, the deemed sale price is $80,000. Recognized gain = $80k - $30k basis = $50,000.",
      whyIncorrect: "A $40,000 gain incorrectly uses actual FMV instead of the deemed liability FMV. Recognizing no gain applies only to tax-free reorganizations/liquidations, not dividends. Corporations cannot recognize losses on non-liquidating distributions.",
      how: "Deemed Sale Price = Max(FMV, Liability). Gain = Deemed Sale Price - Adjusted Basis.",
      when: "A corporation distributes highly leveraged real estate to its owners.",
      source: "IRC § 311(b)(2); IRC § 7701(g)"
    }
  },
  {
    id: 24,
    difficulty: "Hard",
    text: "Under the wash sale rules, if a taxpayer sells stock at a loss and repurchases substantially identical stock within 30 days, the loss is disallowed. What is the effect on the holding period of the newly repurchased stock?",
    options: [
      "The holding period starts fresh on the date the new stock is purchased.",
      "The holding period is exactly 30 days, regardless of previous ownership.",
      "The holding period of the old stock tacks on (is added) to the holding period of the new stock.",
      "The holding period is permanently classified as short-term to penalize the wash sale."
    ],
    correctAnswer: 2,
    explanation: {
      why: "Under Section 1223(3), when a loss is disallowed under the wash sale rules and added to the basis of the new stock, the holding period of the originally sold stock 'tacks' onto the holding period of the newly acquired stock.",
      whyIncorrect: "Starting fresh ignores the statutory tacking rule designed to treat the transaction as a continuous investment. A fixed 30-day period is made up. Permanent short-term classification is not a statutory penalty.",
      how: "Add the time the taxpayer held the old shares to the time they hold the new shares to determine if a future sale is long-term or short-term.",
      when: "An investor triggers a wash sale and later wants to sell the replacement shares for a long-term capital gain.",
      source: "IRC § 1223(3)"
    }
  },

  // GROUP 7: 2, 0, 3, 1
  {
    id: 25,
    difficulty: "Hard",
    text: "A married couple sells their primary residence for $900,000. They originally purchased it for $200,000 ten years ago. Two years ago, they rented out a room in the house and claimed $15,000 in depreciation. Assuming they meet the ownership and use tests for the Section 121 exclusion, how much of their gain is taxable?",
    options: [
      "$215,000 is taxable as long-term capital gain.",
      "$185,000 is taxable as long-term capital gain.",
      "$215,000 is taxable, with $15,000 taxed at a maximum 25% rate (unrecaptured §1250) and $200,000 taxed at standard capital gains rates.",
      "The entire gain is excluded because the Section 121 limit is $500,000 and depreciation is ignored for primary residences."
    ],
    correctAnswer: 2,
    explanation: {
      why: "Adjusted Basis = $200k - $15k = $185k. Total Realized Gain = $900k - $185k = $715k. Under Section 121, the $500,000 exclusion CANNOT apply to the portion of gain attributable to depreciation taken after May 6, 1997. The $15,000 depreciation recapture is taxable as unrecaptured Section 1250 gain (max 25%). The remaining gain is $700k. They exclude $500k. The remaining $200k is taxable long-term capital gain. Total taxable = $215,000.",
      whyIncorrect: "Option A gets the math right but fails to identify the special 25% bracket for the depreciation portion. Option B is incorrect math. Option D ignores the strict rule that depreciation recapture overrides the Section 121 exclusion.",
      how: "Calculate total gain. Carve out depreciation taken ($15k) -> Taxable at 25%. Remaining gain ($700k) minus Exclusion ($500k) = $200k -> Taxable at 15/20%.",
      when: "A taxpayer sells a primary residence where they previously ran a home office or rented a room.",
      source: "IRC § 121(d)(6)"
    }
  },
  {
    id: 26,
    difficulty: "Hard",
    text: "A taxpayer receives a gift of Section 1245 property (depreciable equipment). The donor had originally purchased it for $50,000 and claimed $30,000 in depreciation. At the time of the gift, the FMV is $60,000. The taxpayer uses the equipment for a year, claiming $5,000 in depreciation, then sells it for $45,000. What is the amount and character of the taxpayer's recognized gain?",
    options: [
      "$30,000 ordinary income.",
      "$25,000 ordinary income.",
      "$30,000 Section 1231 capital gain.",
      "$5,000 ordinary income and $25,000 Section 1231 gain."
    ],
    correctAnswer: 0,
    explanation: {
      why: "When Section 1245 property is gifted, the donor's depreciation recapture potential carries over to the donee. The donee's basis is $20k ($50k - $30k). The donee takes $5k more depreciation, making adjusted basis $15k. Sale price = $45k. Total Gain = $30k. Total depreciation subject to recapture = $30k (donor) + $5k (donee) = $35k. Since the gain ($30k) is less than the total depreciation taken ($35k), the entire $30,000 gain is recaptured as ordinary income.",
      whyIncorrect: "$25,000 ordinary ignores the $5k taken by the donee. $30,000 Section 1231 ignores Section 1245 recapture entirely. Option D incorrectly assumes only the donee's $5k depreciation is recaptured, dropping the donor's carryover taint.",
      how: "Donee Basis = Donor Basis. Donee Recapture Potential = Donor Recapture + Donee Recapture. Gain = Sale - Adjusted Basis. Ordinary = Min(Gain, Total Recapture Potential).",
      when: "A family business passes fully depreciated equipment to the next generation, who later sells it.",
      source: "IRC § 1245(b)(1); Treas. Reg. § 1.1245-2(c)(2)"
    }
  },
  {
    id: 27,
    difficulty: "Hard",
    text: "In a corporate formation under Section 351, Shareholder A contributes equipment with a basis of $20,000 and an FMV of $50,000 in exchange for 100% of the corporate stock. The corporation assumes a $30,000 bank loan attached to the equipment. What is the corporation's basis in the equipment?",
    options: [
      "$50,000",
      "$20,000",
      "$10,000",
      "$30,000"
    ],
    correctAnswer: 3,
    explanation: {
      why: "Under Section 357(c), Shareholder A must recognize gain because the liability assumed ($30k) exceeds the basis of the property transferred ($20k). A's recognized gain is $10,000. Under Section 362(a), the corporation's basis in the asset is the transferor's basis ($20,000) PLUS any gain recognized by the transferor on the exchange ($10,000) = $30,000.",
      whyIncorrect: "$50,000 is FMV, which is only used in taxable transactions. $20,000 is a strict carryover basis, ignoring the gain recognized by the shareholder. $10,000 is the gain amount, not the total basis.",
      how: "Step 1: Calculate Shareholder Gain = Liability - Basis. Step 2: Corp Basis = Old Basis + Shareholder Gain.",
      when: "A sole proprietor incorporates their heavily leveraged business.",
      source: "IRC § 357(c); IRC § 362(a)"
    }
  },
  {
    id: 28,
    difficulty: "Hard",
    text: "A taxpayer sells a business machine for an installment note of $100,000, payable next year. The machine originally cost $80,000, and $60,000 of depreciation was taken. The taxpayer's adjusted basis is $20,000, yielding an $80,000 total gain. How much of this gain must be recognized in the year of sale, despite receiving no cash payments?",
    options: [
      "$0; all gain is deferred until the cash is collected.",
      "$60,000 is recognized immediately as ordinary income.",
      "$80,000 is recognized immediately because depreciable property cannot use the installment method.",
      "$20,000 is recognized immediately as capital gain."
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Section 453(i), any depreciation recapture under Section 1245 or 1250 MUST be recognized in full in the year of sale, regardless of whether any cash payments are actually received. The $60,000 of depreciation taken is recaptured immediately as ordinary income. Only the remaining $20,000 of Section 1231 gain can be deferred using the installment method.",
      whyIncorrect: "Deferring $0 ignores the statutory exception for depreciation recapture. Recognizing $80,000 is incorrect because the remaining Section 1231 gain CAN use the installment method. Recognizing $20k capital ignores the mandatory $60k ordinary recapture.",
      how: "Calculate total gain and total recapture. Report 100% of the recapture as ordinary income in Year 1 on Form 4797. Defer the rest on Form 6252.",
      when: "A business seller finances the sale of highly depreciated equipment to a buyer.",
      source: "IRC § 453(i)"
    }
  },

  // GROUP 8: 3, 1, 2, 0
  {
    id: 29,
    difficulty: "Hard",
    text: "Which of the following expenditures must be capitalized as a land improvement (15-year MACRS) rather than added to the non-depreciable basis of the land itself?",
    options: [
      "Clearing trees and grading the land to prepare it for building a factory.",
      "Assessments paid to the local government for the installation of public utility lines.",
      "Demolition costs of an old abandoned building to clear the lot.",
      "Paving a new customer parking lot and installing concrete sidewalks on the property."
    ],
    correctAnswer: 3,
    explanation: {
      why: "Land itself is not depreciable. Costs that permanently alter the land (grading, clearing) or are assessed for public utilities are added to the non-depreciable basis of the land. However, paving a parking lot, sidewalks, and fences are considered 'Land Improvements' (Asset Class 00.3) and are depreciable over 15 years.",
      whyIncorrect: "Grading and clearing are permanent changes to the earth, so they are non-depreciable land costs. Government assessments for utilities add to land basis. Demolition costs must be capitalized into the land basis under Section 280B.",
      how: "Differentiate between permanent earthworks/demolition (non-depreciable) and depreciable man-made improvements (paving, fencing, landscaping).",
      when: "A commercial developer prepares a site for a new shopping center.",
      source: "IRC § 280B; Rev. Proc. 87-56"
    }
  },
  {
    id: 30,
    difficulty: "Hard",
    text: "Taxpayer B owns 60% of XYZ Corp and 100% of ABC Corp. B sells a piece of fully depreciated equipment (Zero basis) to ABC Corp for $10,000. What is the character of B's $10,000 gain?",
    options: [
      "Long-term capital gain under Section 1231.",
      "Ordinary income under Section 1239.",
      "Tax-free capital contribution.",
      "Disallowed loss under Section 267."
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Section 1239, if a taxpayer sells property to a 'related person' (e.g., a corporation where the taxpayer owns >50% of the stock), and the property is depreciable in the hands of the buyer, ANY gain recognized on the sale is automatically recharacterized as ordinary income, stripping away Section 1231 capital gain benefits.",
      whyIncorrect: "Section 1231 is normally correct, but Sec 1239 overrides it for related-party depreciable property sales. It is not a tax-free contribution because it was a sale for $10,000. It is a gain, not a loss, so Section 267 disallowance does not apply.",
      how: "Check if buyer and seller are >50% related. Check if property is depreciable to the buyer. If both yes, characterize all gain as ordinary.",
      when: "A business owner sells personal equipment to their controlled corporation at a gain to harvest capital gains.",
      source: "IRC § 1239(a)"
    }
  },
  {
    id: 31,
    difficulty: "Hard",
    text: "A taxpayer purchases a corporate bond at a premium (paying $10,500 for a $10,000 face value bond). The taxpayer elects to amortize the bond premium. How does this amortization affect the taxpayer's taxable income and the basis in the bond?",
    options: [
      "The amortization increases taxable interest income and increases the bond's basis.",
      "The amortization is treated as a capital loss at the time of sale, leaving the basis unchanged at $10,500.",
      "The amortization offsets taxable interest income each year and reduces the basis of the bond.",
      "The amortization is a miscellaneous itemized deduction subject to the 2% floor."
    ],
    correctAnswer: 2,
    explanation: {
      why: "Under Section 171, if a taxpayer elects to amortize taxable bond premium, the amortized amount directly offsets (reduces) the interest income reported on the bond each year. Correspondingly, the taxpayer must reduce their basis in the bond by the amount of amortization claimed.",
      whyIncorrect: "It decreases interest income, not increases it. It is an annual offset, not deferred as a capital loss at sale. It is a direct offset to interest income, not an itemized deduction.",
      how: "Calculate annual premium amortization using the constant yield method. Subtract this from the Form 1099-INT interest, and lower the bond basis on the balance sheet.",
      when: "An investor buys high-yield corporate bonds on the secondary market for more than face value.",
      source: "IRC § 171(a)(1); IRC § 1016(a)(5)"
    }
  },
  {
    id: 32,
    difficulty: "Hard",
    text: "In 2024, a C-Corporation completely liquidates. It distributes land with a basis of $100,000 and an FMV of $400,000 to Shareholder Z, who assumes a $150,000 mortgage. Z's basis in their corporate stock was $50,000. What is Z's recognized gain on the liquidation, and what is Z's basis in the land?",
    options: [
      "Gain: $200,000; Land Basis: $400,000.",
      "Gain: $250,000; Land Basis: $250,000.",
      "Gain: $300,000; Land Basis: $100,000.",
      "Gain: $350,000; Land Basis: $250,000."
    ],
    correctAnswer: 0,
    explanation: {
      why: "In a complete corporate liquidation (Section 331), the shareholder treats the distribution as full payment in exchange for their stock. Amount Realized = FMV of property ($400k) - Liabilities Assumed ($150k) = $250,000. Gain = Amount Realized ($250k) - Stock Basis ($50k) = $200,000 capital gain. Under Section 334(a), the shareholder's basis in the property received is always its Fair Market Value ($400,000).",
      whyIncorrect: "Gain $250k forgets to subtract the stock basis. Gain $300k forgets to subtract the mortgage assumed. Land Basis $250k incorrectly nets the mortgage against the FMV for basis purposes (basis is gross FMV).",
      how: "Shareholder Amount Realized = Gross FMV - Mortgage. Shareholder Gain = Amount Realized - Stock Basis. Property Basis = Gross FMV.",
      when: "A C-Corporation winds up operations and distributes physical assets to its owners.",
      source: "IRC § 331; IRC § 334(a)"
    }
  },

  // GROUP 9: 0, 3, 2, 1
  {
    id: 33,
    difficulty: "Hard",
    text: "A taxpayer owns an apartment building generating passive rental income. The taxpayer actively participates in the management. Their Adjusted Gross Income (AGI) is $130,000. The rental property generates a $30,000 tax loss. How much of this loss can the taxpayer deduct against their ordinary W-2 income under the 'Mom and Pop' exception?",
    options: [
      "$10,000",
      "$25,000",
      "$0",
      "$15,000"
    ],
    correctAnswer: 0,
    explanation: {
      why: "The 'Mom and Pop' exception allows active participants in rental real estate to deduct up to $25,000 of passive losses against ordinary income. However, this $25,000 allowance phases out by 50 cents for every dollar that AGI exceeds $100,000. AGI is $130,000, which is a $30,000 excess. The phase-out is 50% of $30k = $15,000. Allowed deduction = $25,000 limit - $15,000 phase-out = $10,000.",
      whyIncorrect: "$25,000 ignores the AGI phase-out. $0 incorrectly assumes the phase-out is complete (it completes at $150k AGI). $15,000 is the phase-out amount, not the allowed deduction.",
      how: "Phase-out = (AGI - $100,000) * 0.50. Allowed = $25,000 - Phase-out.",
      when: "A high-earning professional owns a duplex and tries to write off the tax losses.",
      source: "IRC § 469(i)"
    }
  },
  {
    id: 34,
    difficulty: "Hard",
    text: "A taxpayer purchases a franchise right for $150,000, payable in 10 equal annual installments of $15,000, plus an annual royalty of 5% of gross sales. How are these payments treated for tax purposes?",
    options: [
      "Both the $15,000 installment and the 5% royalty are capitalized and amortized over 15 years.",
      "The $15,000 installment is deducted immediately, while the 5% royalty is capitalized.",
      "The entire $150,000 is capitalized, but the 5% royalty is ignored for tax purposes.",
      "The $150,000 principal sum is capitalized and amortized over 15 years, while the 5% contingent royalty is deducted currently as an ordinary business expense."
    ],
    correctAnswer: 3,
    explanation: {
      why: "Under Section 1253 and Section 197, a lump-sum or fixed principal payment for a franchise ($150,000) must be capitalized and amortized over exactly 15 years. However, contingent payments based on productivity, use, or disposition (like a 5% gross sales royalty) paid at least annually are deductible currently as ordinary and necessary business expenses under Section 162.",
      whyIncorrect: "Capitalizing the contingent royalty is incorrect; it is deducted as paid. Deducting the fixed $15,000 installment immediately violates capitalization rules. Ignoring the royalty is incorrect.",
      how: "Split the payments. Amortize the fixed principal purchase price over 180 months. Deduct the variable royalty on Schedule C/Form 1120 as a royalty expense.",
      when: "An entrepreneur buys a fast-food franchise.",
      source: "IRC § 1253(d); IRC § 197(a)"
    }
  },
  {
    id: 35,
    difficulty: "Hard",
    text: "Which of the following scenarios triggers the 'mid-month' MACRS depreciation convention?",
    options: [
      "Placing computers and office furniture into service on December 15.",
      "Placing a heavy manufacturing press into service on July 1.",
      "Placing a commercial warehouse into service on August 10.",
      "Purchasing 5-year and 7-year assets heavily in the fourth quarter."
    ],
    correctAnswer: 2,
    explanation: {
      why: "The mid-month convention is legally mandated for ALL nonresidential real property (e.g., commercial warehouses, 39-year life) and residential rental property (27.5-year life), regardless of when during the year they are placed in service.",
      whyIncorrect: "Computers/furniture are personal property (half-year or mid-quarter). Manufacturing presses are personal property. Q4 heavy purchases trigger the mid-quarter convention for personal property, not the mid-month convention.",
      how: "Identify the asset. If it's a building (real property), apply the mid-month convention tables.",
      when: "A company acquires a new corporate headquarters or storage facility.",
      source: "IRC § 168(d)(2)"
    }
  },
  {
    id: 36,
    difficulty: "Hard",
    text: "A taxpayer forms a single-member LLC and contributes land with a basis of $40,000 and an FMV of $90,000. The LLC does not elect to be taxed as a corporation. What is the tax consequence of this contribution?",
    options: [
      "The taxpayer recognizes a $50,000 capital gain because the LLC is a separate legal entity.",
      "No gain or loss is recognized. The LLC's basis in the land is $40,000, and it is reported directly on the taxpayer's Schedule C or E.",
      "The taxpayer recognizes a $50,000 gain, but it is deferred until the LLC sells the property.",
      "No gain is recognized, but the LLC's basis steps up to $90,000."
    ],
    correctAnswer: 1,
    explanation: {
      why: "A single-member LLC that does not elect corporate taxation is treated as a 'disregarded entity' for federal tax purposes. The IRS treats the LLC and the owner as the exact same person. Therefore, contributing property to a disregarded entity is a non-event for tax purposes. No gain is recognized, and the basis remains $40,000.",
      whyIncorrect: "Recognizing a $50k gain ignores the disregarded entity rules. Deferring the gain implies a partnership/corporate framework, but this is disregarded. Stepping up basis to $90k without recognizing gain is illegal tax evasion.",
      how: "Treat all assets of a single-member LLC as directly owned by the individual. File activity on Schedule C, E, or F.",
      when: "A real estate investor creates a new LLC to hold title to a rental property for liability protection.",
      source: "Treas. Reg. § 301.7701-3(b)(1)"
    }
  },

  // GROUP 10: 1, 0, 3, 2
  {
    id: 37,
    difficulty: "Hard",
    text: "Taxpayer owns stock in a C-Corporation that becomes entirely worthless during the year. The taxpayer originally purchased the stock for $25,000 four years ago. The stock does not qualify as Section 1244 small business stock. How should the taxpayer report this loss?",
    options: [
      "As a $25,000 ordinary loss.",
      "As a $25,000 long-term capital loss, deemed to have occurred on the last day of the tax year.",
      "As a miscellaneous itemized deduction, subject to the 2% floor.",
      "The loss is non-deductible because no actual sale or exchange occurred."
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Section 165(g), if a capital asset (like corporate stock) becomes completely worthless during the taxable year, the resulting loss is treated as a capital loss resulting from a hypothetical sale or exchange occurring on the *last day of that taxable year*.",
      whyIncorrect: "Ordinary loss treatment is only available if it qualifies as Section 1244 Small Business Stock. It is not an itemized deduction. The code specifically creates a 'fictional' sale to allow the deduction of worthless securities.",
      how: "Report a $25,000 long-term capital loss on Schedule D, using December 31 as the date of sale.",
      when: "A public company goes bankrupt, and its shares are cancelled with zero payout to equity.",
      source: "IRC § 165(g)(1)"
    }
  },
  {
    id: 38,
    difficulty: "Hard",
    text: "A taxpayer exchanges a commercial truck (basis $15,000, FMV $20,000) for another commercial truck (FMV $20,000) to be used in their delivery business. What is the recognized gain on this exchange?",
    options: [
      "$5,000 recognized gain, because personal property no longer qualifies for Section 1031 like-kind exchange treatment.",
      "$0 recognized gain, because trucks are of a like-kind.",
      "$0 recognized gain, because no cash boot was received.",
      "$5,000 recognized gain, because vehicle exchanges are explicitly taxed as ordinary income."
    ],
    correctAnswer: 0,
    explanation: {
      why: "The Tax Cuts and Jobs Act (TCJA) of 2017 eliminated Section 1031 like-kind exchange treatment for all tangible and intangible personal property. Section 1031 now strictly applies *only* to real property. Therefore, the exchange of trucks is a fully taxable event. Realized Gain = $20,000 FMV received - $15,000 basis = $5,000 recognized gain.",
      whyIncorrect: "Like-kind treatment for trucks was repealed in 2018. Cash boot is irrelevant if the entire transaction is taxable. Vehicles are not 'explicitly' ordinary income; the gain character depends on depreciation recapture, but the exchange itself is just a standard taxable event now.",
      how: "Treat the exchange as a taxable sale of the old truck for $20k, followed by a purchase of a new truck for $20k.",
      when: "A business swaps its old fleet vehicles for new ones at the dealership.",
      source: "IRC § 1031(a) (as amended by TCJA)"
    }
  },
  {
    id: 39,
    difficulty: "Hard",
    text: "Which of the following correctly describes the tax treatment of 'Intangible Drilling Costs' (IDCs) for a domestic oil and gas well?",
    options: [
      "They must be capitalized and depleted over the entire life of the well.",
      "They are entirely non-deductible because they produce an environmental hazard.",
      "They are amortized straight-line over 15 years like a Section 197 intangible.",
      "The taxpayer may elect to currently expense (immediately deduct) 100% of the IDCs in the year paid or incurred."
    ],
    correctAnswer: 3,
    explanation: {
      why: "Under Section 263(c), taxpayers have a unique statutory election to immediately expense Intangible Drilling Costs (IDCs)—such as labor, fuel, and hauling required to drill and prepare a well for production—rather than capitalizing them.",
      whyIncorrect: "While taxpayers *can* elect to capitalize and deplete them, they are not *required* to. They are highly deductible, not non-deductible. IDCs are not Section 197 intangibles (which are acquired business intangibles like goodwill).",
      how: "Make the election on the tax return for the first year IDCs are incurred. Deduct the costs against ordinary income.",
      when: "An energy company drills a new exploratory well in Texas.",
      source: "IRC § 263(c); Treas. Reg. § 1.612-4"
    }
  },
  {
    id: 40,
    difficulty: "Hard",
    text: "A taxpayer sells a rental house on an installment contract. The gross profit percentage is 40%. In Year 1, the buyer pays $20,000 in principal and $5,000 in stated interest. How much gain must the taxpayer report in Year 1?",
    options: [
      "$10,000",
      "$25,000",
      "$8,000",
      "$13,000"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Under the installment method, the recognized gain for the year is the principal payments received multiplied by the gross profit percentage. $20,000 principal * 40% = $8,000 capital gain. The $5,000 interest payment is reported separately as ordinary interest income, not as part of the installment gain.",
      whyIncorrect: "$10,000 is incorrect math. $25,000 assumes 100% of the cash received is capital gain. $13,000 incorrectly applies the 40% profit percentage to the principal ($8k) and adds the full interest ($5k) together as one gain figure.",
      how: "Multiply only the Principal Collected by the Gross Profit Percentage. Report Interest separately on Schedule B.",
      when: "A seller finances a real estate transaction and receives monthly amortization checks containing both principal and interest.",
      source: "IRC § 453(c)"
    }
  }
];
