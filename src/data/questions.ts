export interface Explanation {
  why: string;
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

export const questions: Question[] = [
  // MEDIUM QUESTIONS (1-15)
  {
    id: 1,
    difficulty: "Medium",
    text: "Under the One Big Beautiful Bill Act (OBBBA), what is the primary factor that determines a taxpayer's standard deduction and filing requirement threshold?",
    options: [
      "The taxpayer's age and gross income",
      "The taxpayer's filing status, age, and vision status",
      "The taxpayer's net unearned income",
      "The taxpayer's total itemized deductions"
    ],
    correctAnswer: 1,
    explanation: {
      why: "A taxpayer's gross income filing threshold is generally equal to their standard deduction. The standard deduction is determined by their filing status, and increased if they are age 65 or older, or legally blind.",
      how: "Check the taxpayer's status on the last day of the tax year. Add the base standard deduction for that status to any additional standard deductions for age (65+) and blindness.",
      when: "Applies annually when determining if a return must be filed. The OBBBA indexes these base and additional amounts for inflation each year.",
      source: "IRC §6012; OBBBA Section 101"
    }
  },
  {
    id: 2,
    difficulty: "Medium",
    text: "John and Mary were legally married on December 31, Year 1. For Year 1, what filing status options are available to them?",
    options: [
      "Only Married Filing Jointly",
      "Only Single or Married Filing Separately",
      "Married Filing Jointly or Married Filing Separately",
      "Single, Married Filing Jointly, or Married Filing Separately"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Marital status is determined on the last day of the tax year. Since they were married on December 31, they are considered married for the entire year and cannot file as Single.",
      how: "Apply the 'last day of the year' rule. If married on Dec 31, the permissible statuses are MFJ or MFS.",
      when: "Whenever determining marital status for a given tax year.",
      source: "IRC §7703(a)"
    }
  },
  {
    id: 3,
    difficulty: "Medium",
    text: "Which of the following is NOT a requirement to file as Head of Household?",
    options: [
      "Must be unmarried or considered unmarried on the last day of the year",
      "Must pay more than half the cost of keeping up a home for the year",
      "Must have a qualifying child or qualifying relative who lives with the taxpayer for more than half the year (with exceptions for parents)",
      "Must claim the qualifying person as a dependent, with no exceptions"
    ],
    correctAnswer: 3,
    explanation: {
      why: "There is an exception: a custodial parent can qualify for HOH even if they release the dependency exemption to the noncustodial parent using Form 8332.",
      how: "Verify if the taxpayer paid >50% of household costs, is unmarried, and has a qualifying person. If the qualifying person is a child whose exemption was released to the other parent, HOH is still allowed for the custodial parent.",
      when: "When divorced or separated parents are determining filing status.",
      source: "IRC §2(b)(1)"
    }
  },
  {
    id: 4,
    difficulty: "Medium",
    text: "Sarah's husband died in Year 1. She has no dependents and does not remarry. What is her filing status for Year 2?",
    options: [
      "Qualifying Surviving Spouse",
      "Married Filing Jointly",
      "Head of Household",
      "Single"
    ],
    correctAnswer: 3,
    explanation: {
      why: "In the year of death (Year 1), she can file MFJ. Because she has no dependents, she cannot qualify for Qualifying Surviving Spouse or Head of Household in subsequent years.",
      how: "Since the spouse is deceased and there are no dependents, the 'unmarried' status of Single applies starting the year after death.",
      when: "In any tax year following the year of the spouse's death, if the taxpayer has no qualifying dependents.",
      source: "IRC §2(a); Pub. 501"
    }
  },
  {
    id: 5,
    difficulty: "Medium",
    text: "Under OBBBA rules, if a taxpayer is claimed as a dependent on another person's return, what is their basic standard deduction?",
    options: [
      "Zero",
      "$1,300 or their earned income plus $450, whichever is greater, up to the regular standard deduction",
      "The full standard deduction for a single individual",
      "Their earned income only"
    ],
    correctAnswer: 1,
    explanation: {
      why: "A dependent's standard deduction is limited to the greater of a statutory base amount (indexed for inflation by OBBBA) or their earned income plus a small addition ($450), capped at the normal standard deduction.",
      how: "Compare the base amount (e.g., $1,300) to (Earned Income + $450). Take the greater, but do not exceed the standard deduction for a single taxpayer.",
      when: "Whenever a taxpayer can be claimed as a dependent on another's return and is calculating taxable income.",
      source: "IRC §63(c)(5); OBBBA Section 102"
    }
  },
  {
    id: 6,
    difficulty: "Medium",
    text: "To be a Qualifying Child, the individual must pass which of the following tests?",
    options: [
      "Relationship, Age, Residency, Support, and Joint Return",
      "Relationship, Gross Income, Support, and Citizen",
      "Age, Gross Income, Support, and Residency",
      "Relationship, Age, Gross Income, and Support"
    ],
    correctAnswer: 0,
    explanation: {
      why: "The Qualifying Child tests do not include a Gross Income test. They include Relationship, Age, Residency, Support, and Joint Return tests.",
      how: "Check if the child is a relative, under 19 (or 24 if student), lived with the taxpayer > half the year, did not provide > half of their own support, and isn't filing a joint return.",
      when: "When determining if a dependent is a Qualifying Child rather than a Qualifying Relative.",
      source: "IRC §152(c)"
    }
  },
  {
    id: 7,
    difficulty: "Medium",
    text: "A 20-year-old full-time college student earned $6,000 from a part-time job and lived at school for 8 months. Can her parents claim her as a Qualifying Child?",
    options: [
      "No, because she earned more than the gross income limit.",
      "No, because she did not live with her parents for more than half the year.",
      "Yes, because time spent at school counts as temporary absence and she meets the age test for full-time students.",
      "Yes, but only if they file a Multiple Support Agreement."
    ],
    correctAnswer: 2,
    explanation: {
      why: "Temporary absences for education do not violate the residency test. Since she is under 24 and a full-time student, she meets the age test. The gross income test does not apply to a Qualifying Child.",
      how: "Apply the exception for temporary absence due to school. Since she didn't provide more than half her own support, she passes the tests.",
      when: "When a dependent is away at college during the tax year.",
      source: "IRC §152(c); Pub. 501"
    }
  },
  {
    id: 8,
    difficulty: "Medium",
    text: "Under the OBBBA, what is the gross income test limit for a Qualifying Relative?",
    options: [
      "There is no gross income limit for a Qualifying Relative.",
      "The exemption amount, which OBBBA indexes annually for inflation (e.g., $5,050).",
      "Exactly equal to the Single standard deduction.",
      "$10,000"
    ],
    correctAnswer: 1,
    explanation: {
      why: "A Qualifying Relative must have gross income less than the exemption amount. Even though the personal exemption deduction may be suspended, the gross income threshold remains and is indexed for inflation by OBBBA.",
      how: "Compare the dependent's gross income (income that is not exempt from tax) to the statutory exemption amount for the year.",
      when: "When determining if a dependent meets the Qualifying Relative tests.",
      source: "IRC §152(d)(1)(B); OBBBA Section 103"
    }
  },
  {
    id: 9,
    difficulty: "Medium",
    text: "Which relative does NOT have to live with the taxpayer for the entire year to be claimed as a Qualifying Relative?",
    options: [
      "A cousin",
      "An unrelated friend",
      "A parent",
      "A foster child"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Parents do not need to live with the taxpayer as long as the taxpayer provides more than half of their support and they meet the other Qualifying Relative tests.",
      how: "Check the relationship. Close relatives (parents, siblings, aunts, uncles) do not need to meet the 'member of household for the entire year' test. Non-relatives must live with the taxpayer all year.",
      when: "When a taxpayer supports a relative who lives in a separate household (like a nursing home or their own house).",
      source: "IRC §152(d)(2)"
    }
  },
  {
    id: 10,
    difficulty: "Medium",
    text: "David is legally separated from his wife under a decree of separate maintenance on December 31. He has no dependents. What is his filing status?",
    options: [
      "Married Filing Separately",
      "Single",
      "Head of Household",
      "Married Filing Jointly"
    ],
    correctAnswer: 1,
    explanation: {
      why: "A taxpayer is considered unmarried if they are legally separated under a decree of divorce or separate maintenance on the last day of the tax year.",
      how: "Because he is considered unmarried and has no dependents, his only option is Single.",
      when: "When a legal separation decree is finalized by the last day of the tax year.",
      source: "IRC §7703(a)(2)"
    }
  },
  {
    id: 11,
    difficulty: "Medium",
    text: "For a Multiple Support Agreement, what is the minimum percentage of support a person must provide to claim the dependent?",
    options: [
      "More than 5%",
      "More than 10%",
      "More than 25%",
      "More than 50%"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under a Multiple Support Agreement, an individual who provides more than 10% of the support can claim the dependent, provided the group as a whole provides more than 50%.",
      how: "Ensure the group provides >50%, no one person provides >50%, and the person claiming the dependent provides >10%. Others must sign Form 2120.",
      when: "When multiple taxpayers support an individual but no single person provides more than 50% of the support.",
      source: "IRC §152(d)(3)"
    }
  },
  {
    id: 12,
    difficulty: "Medium",
    text: "If a taxpayer files Married Filing Separately, what happens to their standard deduction if their spouse itemizes deductions?",
    options: [
      "The taxpayer can still take the standard deduction.",
      "The taxpayer must also itemize their deductions.",
      "The taxpayer gets a reduced standard deduction.",
      "The taxpayer can choose either, but itemizing is recommended."
    ],
    correctAnswer: 1,
    explanation: {
      why: "If married filing separately, if one spouse itemizes, the standard deduction for the other spouse is zero. Therefore, both must itemize.",
      how: "Check the spouse's return. If the spouse claims Schedule A itemized deductions, you must force itemize on your return even if standard deduction is higher.",
      when: "When filing MFS and coordinating deductions with the spouse.",
      source: "IRC §63(c)(6)(A)"
    }
  },
  {
    id: 13,
    difficulty: "Medium",
    text: "A self-employed individual must file a tax return if their net earnings from self-employment are at least:",
    options: [
      "$400",
      "$600",
      "The standard deduction amount",
      "$1,000"
    ],
    correctAnswer: 0,
    explanation: {
      why: "Anyone with net earnings from self-employment of $400 or more must file a return to report self-employment tax, regardless of their gross income.",
      how: "Calculate net self-employment earnings. If >= $400, filing is mandatory even if total gross income is below the standard deduction threshold.",
      when: "Applicable to gig workers, freelancers, and independent contractors evaluating filing requirements.",
      source: "IRC §6017"
    }
  },
  {
    id: 14,
    difficulty: "Medium",
    text: "Can a non-resident alien be claimed as a dependent?",
    options: [
      "Yes, without any restrictions.",
      "No, non-resident aliens can never be claimed as dependents.",
      "Yes, but only if they are a resident of Canada or Mexico.",
      "Yes, but only if they have an ITIN."
    ],
    correctAnswer: 2,
    explanation: {
      why: "A dependent must generally be a U.S. citizen, U.S. national, or a resident of the U.S., Canada, or Mexico.",
      how: "Check the residency status of the dependent. If they live in Canada or Mexico, they meet the residency requirement for dependency.",
      when: "When a U.S. taxpayer supports family members living abroad.",
      source: "IRC §152(b)(3)"
    }
  },
  {
    id: 15,
    difficulty: "Medium",
    text: "Under OBBBA, the standard deduction is increased for individuals who are:",
    options: [
      "Age 65 or older and/or blind",
      "Age 62 or older and/or disabled",
      "Age 65 or older and/or deaf",
      "Veterans or disabled"
    ],
    correctAnswer: 0,
    explanation: {
      why: "The tax code allows an additional standard deduction amount for taxpayers who are age 65 or older, or legally blind.",
      how: "Add the specific statutory amount (indexed for inflation) to the base standard deduction for each condition met (age and/or blindness) per taxpayer.",
      when: "Calculated at the end of the tax year; turning 65 on Jan 1 of the following year counts as age 65 for the current year.",
      source: "IRC §63(f)"
    }
  },

  // HARD QUESTIONS (16-30)
  {
    id: 16,
    difficulty: "Hard",
    text: "Tom and Lisa are married. Tom is a US citizen and Lisa is a nonresident alien (NRA). They want to file Married Filing Jointly (MFJ) to utilize OBBBA's expanded standard deduction. What is the consequence of this election?",
    options: [
      "Lisa's worldwide income is subject to US taxation, and she must obtain an SSN or ITIN.",
      "Lisa is only taxed on her US-source income, but they can use the MFJ tax brackets.",
      "They cannot file MFJ; a US citizen married to an NRA must file MFS.",
      "Lisa's income is excluded from US tax, but Tom's income is taxed at higher single rates."
    ],
    correctAnswer: 0,
    explanation: {
      why: "A US citizen and a nonresident alien spouse can elect to file MFJ. However, doing so treats the NRA as a resident alien for tax purposes, subjecting their worldwide income to US taxation.",
      how: "Attach a statement to the joint return electing to treat the NRA spouse as a US resident. All worldwide income of both spouses must be reported.",
      when: "When a mixed-status married couple wishes to claim MFJ status.",
      source: "IRC §6013(g); OBBBA Sec 205"
    }
  },
  {
    id: 17,
    difficulty: "Hard",
    text: "Mark's wife passed away in Year 1. He has a 10-year-old son, Tim. In Year 2, Mark paid all costs of keeping up his home where Tim lived for the entire year. Mark provided 40% of Tim's support; Mark's mother provided 60%. What is Mark's filing status for Year 2?",
    options: [
      "Qualifying Surviving Spouse",
      "Head of Household",
      "Single",
      "Married Filing Jointly"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Mark cannot claim Tim as a dependent because Mark's mother provided more than half the support, so Tim is not Mark's Qualifying Child (fails support test for QC and QR). Without a dependent child, Mark cannot file as Qualifying Surviving Spouse or Head of Household.",
      how: "Evaluate dependency first. Since Mark fails the support test, Tim is not his dependent. Without a dependent child, QSS and HOH are invalid. Thus, he defaults to Single.",
      when: "When analyzing post-widow status mixed with multi-generational support.",
      source: "IRC §2(a) and §2(b); IRC §152"
    }
  },
  {
    id: 18,
    difficulty: "Hard",
    text: "Three siblings, A, B, and C, provide support for their father. A provides 8%, B provides 45%, C provides 12%, and the father's social security provides the remaining 35%. Who can claim the father as a dependent under a Multiple Support Agreement?",
    options: [
      "Only B",
      "B or C",
      "A, B, or C",
      "No one can claim him"
    ],
    correctAnswer: 1,
    explanation: {
      why: "The siblings together provide 65% (>50%). Only those who provide MORE than 10% can claim the dependent under the MSA. A provided 8%, which is not more than 10%.",
      how: "Sum the group's support (8+45+12 = 65%). Identify contributors >10% (B and C). A is disqualified. B and C must agree and sign Form 2120.",
      when: "When evaluating eligibility for a Multiple Support Agreement among family members.",
      source: "IRC §152(d)(3)"
    }
  },
  {
    id: 19,
    difficulty: "Hard",
    text: "Under OBBBA, Jane (22, full-time student) earns $15,000 from a W-2 job and $2,000 in dividends. She lives with her parents who provide 60% of her support. What is the maximum standard deduction she can claim on her own tax return?",
    options: [
      "$15,450",
      "$1,300",
      "The normal single standard deduction amount (e.g., $14,600 or OBBBA indexed limit)",
      "$0, because her parents claim her"
    ],
    correctAnswer: 2,
    explanation: {
      why: "A dependent's standard deduction is the greater of the base amount OR (earned income + $450), but it CANNOT exceed the regular standard deduction for a single person. Her earned income + $450 is $15,450, which exceeds the normal single limit, so she is capped at the normal limit.",
      how: "Calculate: Max($1,300, $15,000 + $450) = $15,450. Cap this at the standard Single deduction for the year (e.g., $14,600).",
      when: "When a dependent has high earned income but still qualifies as a dependent due to the age/student exception.",
      source: "IRC §63(c)(5); OBBBA Section 102"
    }
  },
  {
    id: 20,
    difficulty: "Hard",
    text: "Divorced parents share custody of their 8-year-old daughter. She lived with the mother for 200 days and the father for 165 days. The mother signed Form 8332 allowing the father to claim the child as a dependent. Which tax benefits can the mother still claim?",
    options: [
      "Child Tax Credit and Head of Household",
      "Head of Household and Earned Income Credit",
      "Child Tax Credit and Earned Income Credit",
      "None of the above"
    ],
    correctAnswer: 1,
    explanation: {
      why: "The custodial parent (mother, based on nights) releases the dependency exemption and Child Tax Credit to the father via Form 8332. However, Form 8332 does NOT release Head of Household status or Earned Income Credit. The mother can still claim HOH and EIC.",
      how: "Separate the dependency/CTC (which follows Form 8332) from residency-based benefits like HOH, EIC, and Child Care Credit (which stay with the custodial parent).",
      when: "When divorced parents utilize Form 8332 to shift the dependency exemption.",
      source: "IRC §152(e); Pub. 504"
    }
  },
  {
    id: 21,
    difficulty: "Hard",
    text: "Sam and Chloe were married. Chloe disappeared in Year 1 and is classified as a missing person. Sam files MFS for Year 1. In Year 3, Chloe is still missing. Sam maintains a home for their dependent child. What is Sam's best filing status for Year 3?",
    options: [
      "Married Filing Separately",
      "Head of Household",
      "Single",
      "Qualifying Surviving Spouse"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under the 'abandoned spouse' rule, a married person can be considered unmarried and file as HOH if they file a separate return, maintain a household for a dependent child, and the spouse did not live in the home for the LAST SIX MONTHS of the tax year.",
      how: "Check the abandoned spouse criteria: file separate, pay >50% of home costs, home is principal residence of dependent child > half year, spouse absent last 6 months. Sam meets all, so HOH is allowed.",
      when: "When dealing with estranged or missing spouses.",
      source: "IRC §7703(b)"
    }
  },
  {
    id: 22,
    difficulty: "Hard",
    text: "Which of the following items is EXCLUDED when calculating 'support' provided to a dependent?",
    options: [
      "Fair rental value of lodging provided",
      "Life insurance premiums paid on the dependent's life",
      "Medical insurance premiums paid for the dependent",
      "Food and clothing purchased for the dependent"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Life insurance premiums are not considered 'support' for dependency purposes. Support includes food, clothing, lodging, medical expenses, and education.",
      how: "Exclude life insurance premiums, scholarships (for a child), and income/social security taxes paid from the dependent's own income when calculating total support.",
      when: "When compiling the total support worksheet to determine the >50% threshold.",
      source: "Pub. 501, Support Test"
    }
  },
  {
    id: 23,
    difficulty: "Hard",
    text: "Under OBBBA, an individual is claimed as a dependent by their parents. They have $800 of W-2 wages and $4,000 of interest income. Are they required to file a tax return?",
    options: [
      "Yes, because their unearned income exceeds $1,300.",
      "Yes, because their total income exceeds $1,300.",
      "No, because their total income is less than the standard single deduction.",
      "No, because their earned income is less than $1,300."
    ],
    correctAnswer: 0,
    explanation: {
      why: "A dependent must file a return if their unearned income is over the base threshold (e.g., $1,300), their earned income is over the regular standard deduction, OR their total income exceeds the larger of the base amount or earned income + $450.",
      how: "Compare unearned income ($4,000) to the $1,300 limit. Since $4,000 > $1,300, a return is required, regardless of the earned income amount.",
      when: "When assessing filing requirements for dependents with investment income (kiddie tax implications).",
      source: "IRC §6012; OBBBA Section 104"
    }
  },
  {
    id: 24,
    difficulty: "Hard",
    text: "Paul (age 68) and Diane (age 66) file MFJ. Diane is legally blind. Under OBBBA, how many additional standard deduction amounts are they entitled to?",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correctAnswer: 2,
    explanation: {
      why: "They get one additional amount for Paul being >=65, one for Diane being >=65, and one for Diane being blind. Total of three additional standard deduction amounts.",
      how: "Count the triggers: Paul age (1) + Diane age (1) + Diane blindness (1) = 3. Add 3x the married additional amount to their base MFJ standard deduction.",
      when: "When calculating standard deductions for elderly or disabled married couples.",
      source: "IRC §63(f)"
    }
  },
  {
    id: 25,
    difficulty: "Hard",
    text: "A taxpayer provides 60% of the support for his 25-year-old brother, who earned $6,000 in gross wages and received $4,000 in municipal bond interest. Does the brother qualify as a Qualifying Relative?",
    options: [
      "Yes, because his taxable gross income ($6,000) + exempt income ($4,000) is less than the total support limit.",
      "Yes, because municipal bond interest is not included in gross income for the Gross Income Test.",
      "No, because his gross income of $6,000 exceeds the statutory exemption amount (e.g., $5,050).",
      "No, because the brother is over the age of 24."
    ],
    correctAnswer: 2,
    explanation: {
      why: "The brother fails the Gross Income Test because his taxable gross income ($6,000) exceeds the exemption amount (e.g., $5,050). The age test does not apply to Qualifying Relatives.",
      how: "Check taxable gross income against the threshold. Exclude tax-exempt income (like muni bond interest) from 'gross income', but $6,000 of wages is still too high.",
      when: "Evaluating Qualifying Relative status for siblings with mixed income sources.",
      source: "IRC §152(d)"
    }
  },
  {
    id: 26,
    difficulty: "Hard",
    text: "Which of the following scenarios allows a taxpayer to file as Head of Household?",
    options: [
      "Taxpayer is unmarried and pays 60% of the cost of keeping up a home for their dependent cousin.",
      "Taxpayer is married but lived apart from their spouse for the last 3 months of the year, and maintains a home for a dependent child.",
      "Taxpayer is unmarried and pays 100% of the cost of a nursing home for their dependent mother.",
      "Taxpayer is unmarried and pays 60% of the cost of keeping up a home for their 20-year-old child who earns $10,000 and is not a student."
    ],
    correctAnswer: 2,
    explanation: {
      why: "A dependent parent does not have to live with the taxpayer for the taxpayer to claim HOH, provided the taxpayer pays >50% of the parent's household costs (like a nursing home). Cousins do not qualify for HOH. Married taxpayers must live apart for the last 6 months. A 20-year-old non-student with $10k income is not a dependent.",
      how: "Verify relationship for HOH. Parent is a special exception to the residency rule. Verify >50% household cost support.",
      when: "When adult children support elderly parents in separate living facilities.",
      source: "IRC §2(b)(1)(B)"
    }
  },
  {
    id: 27,
    difficulty: "Hard",
    text: "Under OBBBA, what is the impact if a taxpayer files Married Filing Separately and their spouse is a nonresident alien with no US-source income?",
    options: [
      "The taxpayer cannot claim the spouse's personal exemption.",
      "The taxpayer must itemize deductions.",
      "The taxpayer can claim the standard deduction but must use the Single rate.",
      "The taxpayer can claim the spouse as a dependent if the spouse has no US gross income and is not claimed by anyone else."
    ],
    correctAnswer: 3,
    explanation: {
      why: "An exception exists: a taxpayer filing MFS can claim an exemption for a spouse (effectively treating them as a dependent for exemption purposes) if the spouse has no US gross income and is not the dependent of another US taxpayer.",
      how: "Check if the NRA spouse has any US income. If zero, and no one else claims them, the US taxpayer can claim the exemption amount for the spouse on an MFS return.",
      when: "When a US citizen is married to a non-working NRA and chooses not to elect MFJ worldwide taxation.",
      source: "IRC §151(b)"
    }
  },
  {
    id: 28,
    difficulty: "Hard",
    text: "Robert provides 100% of the support for his girlfriend, Alice, who lived with him for the entire year. Alice earned $3,000. Can Robert claim Alice as a dependent, and can he file as Head of Household?",
    options: [
      "Yes dependent, Yes HOH",
      "Yes dependent, No HOH",
      "No dependent, Yes HOH",
      "No dependent, No HOH"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Alice is a Qualifying Relative because she lived with Robert all year, he provided >50% support, and her income is under the limit. However, an unrelated person (member of household all year) does NOT qualify the taxpayer for Head of Household status.",
      how: "Dependency: Passes member of household test for QR. HOH: Check relationship. Unrelated persons are strictly excluded from qualifying someone for HOH.",
      when: "When taxpayers cohabitate and support unmarried partners.",
      source: "IRC §2(b)(3)(B); IRC §152(d)(2)(H)"
    }
  },
  {
    id: 29,
    difficulty: "Hard",
    text: "In Year 1, John's spouse died. In Year 2, John's dependent child was kidnapped and is missing. John does not remarry. Under OBBBA, what is John's filing status for Year 2?",
    options: [
      "Single",
      "Head of Household",
      "Qualifying Surviving Spouse",
      "Married Filing Separately"
    ],
    correctAnswer: 2,
    explanation: {
      why: "A kidnapped child who was a Qualifying Child in the year of kidnapping continues to be treated as a Qualifying Child for determining Qualifying Surviving Spouse or HOH status until the child turns 18 or is found.",
      how: "Apply the kidnapped child exception. Since the spouse died in Year 1, Year 2 is eligible for QSS if a dependent child is present. The missing child counts.",
      when: "Tragic edge cases involving missing/kidnapped dependents.",
      source: "IRC §2(a); IRC §152(f)(6)"
    }
  },
  {
    id: 30,
    difficulty: "Hard",
    text: "George and Martha are married. George is 66, Martha is 60. Martha has $1,000 of W-2 income and George has $20,000 of Social Security benefits. Neither has other income. Under OBBBA, do they have a filing requirement?",
    options: [
      "Yes, because their combined income exceeds the MFJ threshold.",
      "Yes, because George's Social Security must be reported.",
      "No, because Social Security benefits are not included in gross income when computing the filing requirement threshold if they have no other substantial income.",
      "No, because Martha's W-2 income is below $1,300."
    ],
    correctAnswer: 2,
    explanation: {
      why: "To determine the filing requirement, only the taxable portion of Social Security is included in gross income. With only $1,000 of other income, 0% of the Social Security is taxable. Thus, their gross income ($1,000) is well below the MFJ standard deduction threshold.",
      how: "Calculate provisional income: $1,000 + (0.5 * $20,000) = $11,000. This is below the base amount for SS taxability ($32,000 for MFJ). Therefore, Taxable SS = $0. Gross income = $1,000.",
      when: "Determining filing requirements for retirees living primarily on Social Security.",
      source: "IRC §86; IRC §6012"
    }
  }
];
