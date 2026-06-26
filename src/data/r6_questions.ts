import type { Question } from './r1_questions';

export const r6Questions: Question[] = [
  // MEDIUM (1-20)
  {
    id: 1,
    difficulty: "Medium",
    text: "In a General Partnership formed under the Uniform Partnership Act (UPA), how are partnership management decisions and voting rights allocated in the absence of a written partnership agreement?",
    options: [
      "In proportion to each partner's capital contribution",
      "In proportion to each partner's share of profits",
      "Equal voting rights (one partner, one vote) regardless of capital contributions",
      "Strictly decided by the senior partner"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Under UPA §401, unless agreed otherwise, all general partners have equal rights in the management and conduct of the partnership business (one partner, one vote).",
      whyIncorrect: "Corporate shareholders vote based on shares/capital, but general partners vote equally by default under statutory partnership law.",
      how: "Ordinary matters require majority vote; matters outside ordinary course require unanimous consent.",
      when: "Managing general partnerships or joint ventures.",
      source: "Revised Uniform Partnership Act (RUPA) §401(f)"
    }
  },
  {
    id: 2,
    difficulty: "Medium",
    text: "Which of the following business entities provides ALL owners with limited liability protection while allowing pass-through federal income taxation by default?",
    options: [
      "General Partnership",
      "Limited Partnership (LP)",
      "Limited Liability Company (LLC) with multiple members",
      "C-Corporation"
    ],
    correctAnswer: 2,
    explanation: {
      why: "A multi-member LLC provides limited liability to all members (unlike general partnerships) and is taxed as a pass-through partnership by default (unlike C-Corps).",
      whyIncorrect: "General partners have unlimited liability. LPs require at least one general partner with unlimited liability. C-Corps face double taxation.",
      how: "File Articles of Organization with state and draft Operating Agreement.",
      when: "Entrepreneurs select optimal legal structure for real estate or operating businesses.",
      source: "IRC §7701 Check-the-Box Regulations; Revised Uniform LLC Act"
    }
  },
  {
    id: 3,
    difficulty: "Medium",
    text: "Under corporate law, what legal document must be filed with the state Secretary of State to formally bring a corporation into existence?",
    options: [
      "Corporate Bylaws",
      "Articles of Incorporation (Charter)",
      "Shareholder Operating Agreement",
      "Form SS-4"
    ],
    correctAnswer: 1,
    explanation: {
      why: "The Articles of Incorporation (Charter) must be filed with and approved by the state to establish corporate legal existence.",
      whyIncorrect: "Bylaws govern internal operations and are kept internally (not filed). Operating agreements apply to LLCs. Form SS-4 is an IRS EIN application.",
      how: "Submit Articles detailing corporate name, authorized shares, registered agent, and incorporators.",
      when: "Forming statutory C-Corporations or S-Corporations.",
      source: "Model Business Corporation Act (MBCA) §2.03"
    }
  },
  {
    id: 4,
    difficulty: "Medium",
    text: "Under the 'Business Judgment Rule', corporate directors are generally protected from personal liability to shareholders for business losses IF the directors:",
    options: [
      "Guaranteed a 10% dividend return",
      "Acted in good faith, with reasonable care, and in a manner reasonably believed to be in the best interests of the corporation without conflict of interest",
      "Obtained prior approval from the SEC",
      "Insured all corporate physical assets"
    ],
    correctAnswer: 1,
    explanation: {
      why: "The Business Judgment Rule creates a strong judicial presumption insulating directors from liability for honest mistakes of judgment, provided they acted loyally, informedly, and in good faith.",
      whyIncorrect: "Courts refuse to second-guess business decisions unless self-dealing, gross negligence, or bad faith is proven.",
      how: "Document thorough board deliberation minutes prior to approving major mergers.",
      when: "Shareholders file derivative suits claiming directors made bad investment choices.",
      source: "Model Business Corporation Act §8.30; Delaware General Corporation Law"
    }
  },
  {
    id: 5,
    difficulty: "Medium",
    text: "Which of the following is a mandatory statutory eligibility requirement for a corporation to elect S-Corporation tax status under IRC Subchapter S?",
    options: [
      "Must have at least two classes of stock (common and preferred)",
      "Must have no more than 100 allowable shareholders",
      "Must be owned by at least one partnership or corporate shareholder",
      "Must have over $1,000,000 in gross revenue"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 1361(b) restricts S-Corps to a maximum of 100 shareholders (family members count as one shareholder).",
      whyIncorrect: "S-Corps can have strictly ONLY ONE class of stock (though voting differences are allowed). Partnerships and corporations cannot be S-Corp shareholders. Revenue is unrestricted.",
      how: "File Form 2553 signed unanimously by all shareholders within 2 months and 15 days of tax year.",
      when: "Small businesses seek corporate liability shield without double tax.",
      source: "IRC §1361(b)(1)"
    }
  },
  {
    id: 6,
    difficulty: "Medium",
    text: "What is the primary legal distinction between Chapter 7 bankruptcy and Chapter 11 bankruptcy?",
    options: [
      "Chapter 7 applies to corporations; Chapter 11 applies to individuals",
      "Chapter 7 involves liquidation of debtor non-exempt assets by a trustee to pay creditors; Chapter 11 involves restructuring and reorganizing debtor debt while debtor continues operating business",
      "Chapter 11 discharges all debts immediately; Chapter 7 does not",
      "Chapter 7 requires voluntary filing; Chapter 11 is strictly involuntary"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Chapter 7 is straight liquidation (trustee sells assets, closes business). Chapter 11 is business reorganization (debtor in possession proposes repayment plan to stay alive).",
      whyIncorrect: "Both chapters are available to individuals and business entities (voluntary or involuntary).",
      how: "Insolvent company files Chapter 11 petition to freeze debt and restructure operations.",
      when: "Distressed companies (like airlines or retailers) seek court protection to turnaround.",
      source: "11 U.S.C. Chapter 7; Chapter 11"
    }
  },
  {
    id: 7,
    difficulty: "Medium",
    text: "Upon the filing of a voluntary or involuntary bankruptcy petition under the U.S. Bankruptcy Code, what immediate legal injunction arises automatically?",
    options: [
      "Automatic Discharge Order",
      "Automatic Stay (Injunction stopping almost all creditor collection lawsuits, foreclosures, wage garnishments, and repossessions)",
      "Automatic Lien Perfection",
      "Automatic Debt Forgiveness"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 362 imposes an immediate Automatic Stay freezing all creditor collection activity against the debtor or property of the bankruptcy estate upon petition filing.",
      whyIncorrect: "Discharge occurs months later post-administration. Criminal prosecutions and child support collection are exempt from the stay.",
      how: "Notify harassing creditors of bankruptcy case number; willful stay violations trigger severe sanctions.",
      when: "Debtor facing home foreclosure auction files bankruptcy 1 hour before sale to stop auction.",
      source: "11 U.S.C. §362(a)"
    }
  },
  {
    id: 8,
    difficulty: "Medium",
    text: "In a bankruptcy proceeding, what is a 'preferential transfer' (preference) that can be clawed back by the bankruptcy trustee?",
    options: [
      "A payment made for current monthly utility bills",
      "A transfer of debtor property to or for the benefit of a creditor, on account of an antecedent (pre-existing) debt, made while insolvent within 90 days prior to bankruptcy filing, allowing creditor to receive more than under Chapter 7",
      "A charitable donation made 3 years ago",
      "A purchase of exempt groceries"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 547 authorizes trustees to avoid (claw back) 90-day preference payments made to favored existing creditors while insolvent to ensure equal pro-rata creditor distribution.",
      whyIncorrect: "Contemporaneous exchanges for new value (buying goods for cash) and ordinary course payments (current monthly bills) are statutory defenses.",
      how: "Trustee sues favored vendor who collected old debt 30 days before bankruptcy filing.",
      when: "Insolvent business pays off president's brother's loan right before collapsing.",
      source: "11 U.S.C. §547(b)"
    }
  },
  {
    id: 9,
    difficulty: "Medium",
    text: "Which of the following debts is strictly NON-DISCHARGEABLE in an individual Chapter 7 bankruptcy proceeding?",
    options: [
      "Credit card debt incurred 2 years ago for vacation travel",
      "Medical bills from hospital emergency surgery",
      "Domestic support obligations (alimony and child support)",
      "Unsecured personal bank loans"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Under Section 523(a)(5), alimony, maintenance, and child support obligations are strictly non-dischargeable based on strong public family protection policy.",
      whyIncorrect: "Ordinary credit cards, medical bills, and personal loans are classic dischargeable general unsecured debts.",
      how: "Apply WAFTED: Willful injury, Alimony/child support, Fraud, Taxes (<3 yrs), Educational loans, Drunk driving.",
      when: "Divorced debtor attempts to erase child support arrears in bankruptcy court.",
      source: "11 U.S.C. §523(a)(5)"
    }
  },
  {
    id: 10,
    difficulty: "Medium",
    text: "Under federal tax and employment law, which factor is primary when determining whether a worker is classified as a W-2 Employee versus a 1099 Independent Contractor?",
    options: [
      "Whether the worker wears a company uniform",
      "The degree of behavioral and financial control the hiring business has the legal right to exercise over how, when, and where the work is performed",
      "Whether the worker is paid weekly vs monthly",
      "Whether the worker signed an agreement stating 'I am an independent contractor'"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under common law and IRS 20-factor test, the right to direct and control the means and details of work performance governs classification.",
      whyIncorrect: "Contract labels or payment frequency cannot override real-world operational control. Misclassification triggers severe §3509 payroll tax penalties.",
      how: "Examine if business provides training, tools, set hours, and direct supervision.",
      when: "IRS audits businesses using independent contractors to avoid payroll taxes.",
      source: "IRS Publication 15-A; Rev. Rul. 87-41"
    }
  },
  {
    id: 11,
    difficulty: "Medium",
    text: "Under the Federal Insurance Contributions Act (FICA), what are the employer and employee tax rates for Social Security and Medicare?",
    options: [
      "Employer pays 100%; employee pays 0%",
      "Both employer and employee pay exactly matching shares: 6.2% for Social Security (up to wage base) plus 1.45% for Medicare (on all wages), totaling 7.65% each",
      "Flat 15.3% paid strictly by employee",
      "Flat $500 monthly payroll fee"
    ],
    correctAnswer: 1,
    explanation: {
      why: "FICA mandates equal matching contributions from employer (7.65%) and employee (7.65% withheld from paycheck). Self-employed workers pay both halves (15.3% SE tax).",
      whyIncorrect: "Additional 0.9% Medicare tax applies only to high-earning employees (> $200k), not matched by employer.",
      how: "Withhold 7.65% from employee W-2 gross pay and match with 7.65% employer payroll tax.",
      when: "Processing standard payroll compliance.",
      source: "IRC §3101; §3111"
    }
  },
  {
    id: 12,
    difficulty: "Medium",
    text: "Which of the following describes the Federal Unemployment Tax Act (FUTA)?",
    options: [
      "Tax deducted directly from employee wages",
      "An employer-paid payroll tax assessed on the first $7,000 of wages paid to each employee annually, deductible by the employer as an ordinary business expense",
      "A tax paid exclusively by government entities",
      "A voluntary retirement contribution"
    ],
    correctAnswer: 1,
    explanation: {
      why: "FUTA (§3301) funds state unemployment systems. It is paid strictly by employers (cannot be withheld from employees) at 6.0% on first $7,000 (effectively 0.6% after state tax credits).",
      whyIncorrect: "It is an employer statutory tax liability, not an employee withholding or voluntary fee.",
      how: "Report and pay annual FUTA tax on Form 940.",
      when: "Employers budget annual payroll overhead costs.",
      source: "IRC §3301; §3306"
    }
  },
  {
    id: 13,
    difficulty: "Medium",
    text: "Under the Affordable Care Act (ACA), an 'Applicable Large Employer' (ALE) subject to employer shared responsibility penalty assessments is defined as an employer with at least:",
    options: [
      "10 full-time employees",
      "50 full-time (or full-time equivalent / FTE) employees during the prior calendar year",
      "100 employees",
      "500 employees"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 4980H defines an ALE as an employer employing an average of at least 50 full-time plus full-time equivalent employees during the preceding calendar year.",
      whyIncorrect: "Small employers (<50 FTEs) are completely exempt from ACA employer mandate penalties.",
      how: "Calculate (Full-time employees + [Total part-time monthly hours / 120]). If 50+, must offer affordable health coverage.",
      when: "Growing mid-size businesses cross the 50-employee statutory threshold.",
      source: "IRC §4980H(c)(2)"
    }
  },
  {
    id: 14,
    difficulty: "Medium",
    text: "Under corporate law doctrine, what is 'Piercing the Corporate Veil'?",
    options: [
      "Issuing initial public stock offerings",
      "A judicial exception where courts disregard the corporate limited liability shield and hold shareholders personally liable for corporate debts due to fraud, undercapitalization, or commingling of personal and corporate assets",
      "Converting a C-Corp into an LLC",
      "Appointing independent outside directors"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Courts pierce the veil to prevent injustice when owners treat a corporation as an 'alter ego' (ignoring corporate formalities, mixing personal groceries with business funds).",
      whyIncorrect: "Limited liability is a privilege contingent on maintaining separation of corporate identity.",
      how: "Creditor sues sole shareholder personally post-corporate insolvency.",
      when: "Owner drains corporate bank account to pay personal mortgage while stiffing business creditors.",
      source: "Corporate Law Alter Ego Doctrine; Minton v. Cavaney"
    }
  },
  {
    id: 15,
    difficulty: "Medium",
    text: "In a Limited Partnership (LP), what happens if a Limited Partner actively participates in the day-to-day management and control of the partnership business?",
    options: [
      "Nothing; limited partners can manage freely",
      "The limited partner loses limited liability shield and becomes personally liable as a general partner to third parties who reasonably believed the limited partner was a general partner",
      "The partnership automatically dissolves",
      "The limited partner receives double profits"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under RULPA §303, limited partners must remain passive investors. If they take control of management operations, they forfeit liability protection against misled creditors.",
      whyIncorrect: "Modern ULPA (2001) eliminated this control rule, but standard CPA exam RULPA rules test the classic loss-of-shield rule.",
      how: "Keep limited partners off executive signing authority.",
      when: "Silent LP investor starts directing employee hiring and signing vendor contracts.",
      source: "Revised Uniform Limited Partnership Act (RULPA) §303"
    }
  },
  {
    id: 16,
    difficulty: "Medium",
    text: "Under the Bankruptcy Code, what is a 'fraudulent conveyance' that can be set aside by the trustee?",
    options: [
      "Paying taxes on time",
      "A transfer of debtor property made within 2 years of bankruptcy filing with actual intent to hinder, delay, or defraud creditors, OR transferring property for less than reasonably equivalent value while insolvent",
      "Selling inventory at normal fair market markup",
      "Taking out a bank mortgage"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 548 empowers trustees to void fraudulent conveyances (e.g., debtor transferring $200k house to daughter for $1.00 right before filing bankruptcy).",
      whyIncorrect: "Unlike preference payments (which pay real debts), fraudulent conveyances involve fake or grossly undervalued transfers to hide assets.",
      how: "Trustee recovers transferred house back into bankruptcy estate.",
      when: "Debtors attempt to hide luxury assets from impending bankruptcy liquidation.",
      source: "11 U.S.C. §548; Uniform Voidable Transactions Act"
    }
  },
  {
    id: 17,
    difficulty: "Medium",
    text: "In a Chapter 7 bankruptcy distribution hierarchy, which category of unsecured claims must be paid FIRST before any general unsecured creditors receive payment?",
    options: [
      "Shareholder equity loans",
      "Domestic relations claims and Administrative expenses of the bankruptcy estate (court costs, trustee fees, bankruptcy attorney fees)",
      "Credit card balances",
      "Vendor trade invoices"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 507 establishes strict priority distribution: (1) Domestic support (alimony/child support), (2) Administrative estate expenses, (3) Wages up to $15,150. General trade creditors come last.",
      whyIncorrect: "Without administrative priority, trustees and attorneys would never agree to administer insolvent estates.",
      how: "Apply statutory priority tiers SAGWEGTI before distributing pennies to general unsecured claims.",
      when: "Trustee distributes liquidated cash estate proceeds.",
      source: "11 U.S.C. §507(a)"
    }
  },
  {
    id: 18,
    difficulty: "Medium",
    text: "What is the legal function of corporate 'Bylaws'?",
    options: [
      "Public charter documents filed with IRS",
      "Internal rules and regulations adopted by the board of directors governing corporate internal administration, officer duties, meeting procedures, and voting quorums",
      "Contracts executed with customers",
      "State tax return attachments"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Bylaws regulate day-to-day internal corporate governance. If bylaws conflict with the Articles of Incorporation, the Articles strictly prevail.",
      whyIncorrect: "Bylaws are private internal documents, not filed publicly.",
      how: "Draft bylaws specifying annual shareholder meeting dates and board quorums.",
      when: "Organizing newly chartered corporations post-incorporation.",
      source: "Model Business Corporation Act §2.06"
    }
  },
  {
    id: 19,
    difficulty: "Medium",
    text: "Under corporate fiduciary rules, what is the 'Corporate Opportunity Doctrine'?",
    options: [
      "Corporations must hire local workers",
      "Fiduciary duty prohibiting directors and officers from personally usurping/taking a business opportunity that belongs to the corporation without first fully disclosing it and offering it to the corporate board",
      "Mandatory stock option grants",
      "Rule governing corporate bankruptcy mergers"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Directors owe strict loyalty. If an officer discovers a deal in the company's line of business, the officer cannot buy it personally unless the board formally rejects it post-disclosure.",
      whyIncorrect: "Usurping corporate opportunities triggers constructive trust remedy forcing transfer of profits to company.",
      how: "Present real estate purchase opportunity to board minutes before investing personal capital.",
      when: "VP of hotel chain buys prime beachfront resort land secretly for personal side company.",
      source: "Corporate Law Duty of Loyalty; Guth v. Loft, Inc."
    }
  },
  {
    id: 20,
    difficulty: "Medium",
    text: "Under FICA payroll tax rules, how is self-employment income taxed compared to W-2 employee wages?",
    options: [
      "Self-employed pay 0% FICA",
      "Self-employed individuals pay both the employer and employee shares (15.3% total self-employment tax on net earnings), but can deduct 50% of the tax paid as an adjustment to arrive at AGI",
      "Self-employed pay double income tax",
      "Self-employed pay flat $100 annual fee"
    ],
    correctAnswer: 1,
    explanation: {
      why: "To equalize tax burdens, sole proprietors pay 15.3% SE tax (Schedule SE), but take an above-the-line income tax deduction for the employer-equivalent half (§164(f)).",
      whyIncorrect: "W-2 employees pay 7.65% with employer matching 7.65%.",
      how: "Calculate Net Schedule C Earnings * 0.9235 * 15.3%.",
      when: "Independent contractors file annual Form 1040 tax compliance.",
      source: "IRC §1401; §164(f)"
    }
  },

  // HARD (21-40)
  {
    id: 21,
    difficulty: "Hard",
    text: "Involuntary Bankruptcy Petition Thresholds: Insolvent Corporation owes $200,000 in unsecured debts across 15 different general creditors. Creditor A (owed $25,000) wants to force Corporation into involuntary Chapter 7 bankruptcy. Corporation is not paying debts as they come due. Can Creditor A file the involuntary petition alone?",
    options: [
      "Yes, any creditor owed over $10,000 can file alone",
      "No, under §303 if a debtor has 12 or more qualifying creditors, at least THREE creditors owed an aggregate of at least $18,600 in non-contingent, undisputed unsecured debt must join the involuntary petition",
      "Yes, provided Creditor A posts a $50,000 bond",
      "Involuntary petitions are prohibited against corporations"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Section 303(b), if debtor has 12+ creditors, 3+ creditors owed $18,600+ aggregate ($18,600 for 2024) must join. If <12 creditors, 1 creditor owed $18,600+ can file alone.",
      whyIncorrect: "Since debtor has 15 creditors, Creditor A filing alone is legally defective and will be dismissed.",
      how: "Creditor A must recruit at least 2 other unpaid trade creditors to join petition.",
      when: "Aggressive creditors attempt to force corporate debtor into receivership.",
      source: "11 U.S.C. §303(b)(1)"
    }
  },
  {
    id: 22,
    difficulty: "Hard",
    text: "Bankruptcy Insider Preference Window: Insolvent Corporation pays off a $50,000 unsecured loan owed to its Vice President's mother on January 1. On August 1 (7 months later), Corporation files Chapter 7 bankruptcy. Can the bankruptcy trustee avoid (claw back) this $50,000 payment?",
    options: [
      "No, the standard preference window is strictly 90 days prior to filing",
      "Yes, under §547(b)(4)(B) the preference lookback window expands from 90 days to ONE FULL YEAR prior to bankruptcy filing for transfers made to statutory 'Insiders' (officers, directors, relatives)",
      "No, loan repayments are exempt",
      "Yes, but only 50% of payment"
    ],
    correctAnswer: 1,
    explanation: {
      why: "While regular vendors face a 90-day preference window, statutory insiders (executives and relatives §101(31)) face an extended 1-year lookback window to prevent corrupt insider asset draining.",
      whyIncorrect: "August 1 filing vs Jan 1 payment is 7 months (within 1 year insider window). Trustee recovers $50k.",
      how: "Trustee sues VP's mother demanding return of $50,000 preference payment.",
      when: "Failing companies pay off executive family loans before abandoning ship.",
      source: "11 U.S.C. §547(b)(4)(B)"
    }
  },
  {
    id: 23,
    difficulty: "Hard",
    text: "Under corporate law, what is a shareholder 'Derivative Lawsuit' and what are the procedural prerequisites?",
    options: [
      "A personal injury suit against employees",
      "A lawsuit brought by a shareholder on behalf of the corporation to enforce a corporate cause of action against breaching directors/officers; shareholder must first make written demand on board unless demand is futile",
      "A direct suit for unpaid dividends",
      "A criminal embezzlement filing"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Derivative suits enforce rights belonging to the *company* (e.g., suing CEO for embezzling corporate funds). Any monetary judgment recovered goes into the corporate treasury, not shareholder pockets.",
      whyIncorrect: "Direct suits address individual shareholder harms (denial of voting rights, unpaid declared dividends).",
      how: "Serve formal 90-day written demand on board of directors prior to filing suit.",
      when: "Board refuses to sue corrupt CEO because directors are CEO's cronies.",
      source: "Model Business Corporation Act §7.40; Federal Rule of Civil Procedure 23.1"
    }
  },
  {
    id: 24,
    difficulty: "Hard",
    text: "S-Corporation Shareholder Disqualification Nuance: S-Corporation X has 50 individual citizen shareholders. Shareholder A dies and bequeaths stock to a Testamentary Trust. How long can the Testamentary Trust hold S-Corp stock before terminating the corporation's Subchapter S election?",
    options: [
      "0 days; trusts instantly terminate S status",
      "Exactly 2-year statutory grace period; after 2 years if trust doesn't qualify as QSST or ESBT, S election terminates",
      "Indefinitely",
      "60 days"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Section 1361(c)(2)(A)(iii), a testamentary trust receiving S-Corp stock via will is an eligible shareholder for exactly 2 years. To maintain S status beyond 2 years, it must elect QSST or ESBT status.",
      whyIncorrect: "Immediate termination rule ignores estate administration statutory grace protections.",
      how: "Trustee files QSST election Form 2553/8869 within 2-year window.",
      when: "Estate planning for S-Corporation founders.",
      source: "IRC §1361(c)(2)(A)(iii)"
    }
  },
  {
    id: 25,
    difficulty: "Hard",
    text: "Bankruptcy Denial of Discharge (§727) vs Non-Dischargeable Debt (§523): What is the severe legal consequence if a Chapter 7 debtor intentionally conceals bank accounts and destroys financial records during bankruptcy administration?",
    options: [
      "Only the bank debt becomes non-dischargeable",
      "Under §727 the bankruptcy court will DENY THE DEBTOR'S ENTIRE DISCHARGE, keeping the debtor personally liable for 100% of all debts owed to all creditors post-bankruptcy",
      "Debtor receives automatic discharge after paying $1,000 fine",
      "Case is converted to Chapter 11"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 523 excepts specific individual debts (taxes/alimony). Section 727 is the ultimate punishment: denying discharge entirely for bankruptcy fraud, record destruction, or prior discharge within 8 years.",
      whyIncorrect: "Debtor loses all non-exempt assets to trustee AND leaves court still owing every single dollar of debt.",
      how: "Trustee or U.S. Trustee files adversary objection to general discharge.",
      when: "Dishonest debtors lie under oath at §341 meeting of creditors.",
      source: "11 U.S.C. §727(a)(2); (a)(3)"
    }
  },
  {
    id: 26,
    difficulty: "Hard",
    text: "Under LLC law, what is the legal difference between a 'Member-Managed LLC' and a 'Manager-Managed LLC' regarding statutory agency authority?",
    options: [
      "No difference; all members always bind LLC",
      "In Member-Managed LLC, every member is an agent with apparent authority to bind LLC in ordinary course; In Manager-Managed LLC, ONLY designated managers have agency authority to bind LLC (non-managing members lack agency authority)",
      "Manager-Managed LLCs face corporate double tax",
      "Member-Managed LLCs cannot own real estate"
    ],
    correctAnswer: 1,
    explanation: {
      why: "RULLCA §301 dictates that selecting Manager-Managed status in public Articles strips non-managing members of statutory agency authority, protecting investors from unauthorized rogue member contracts.",
      whyIncorrect: "Third parties dealing with Manager-Managed LLCs are on constructive public notice that regular members cannot sign contracts.",
      how: "Check LLC Articles of Organization public filing state registry.",
      when: "Passive real estate syndication LLC investors.",
      source: "Revised Uniform Limited Liability Company Act (RULLCA) §301"
    }
  },
  {
    id: 27,
    difficulty: "Hard",
    text: "Chapter 11 Reorganization Plan Confirmation 'Cramdown': In a corporate Chapter 11 bankruptcy, 4 out of 5 creditor classes vote to accept the reorganization plan. Class 5 (impaired unsecured creditors) votes unanimously to reject plan. Can the bankruptcy judge confirm the plan over Class 5's rejection?",
    options: [
      "No, unanimous class consent is mandatory",
      "Yes, under 'Cramdown' power (§1129(b)) court can confirm plan if at least one impaired class accepted, plan does not discriminate unfairly, and is fair and equitable (Absolute Priority Rule satisfied)",
      "Yes, court can ignore all voting",
      "No, case must liquidate under Chapter 7"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 1129(b) Cramdown allows judges to force binding reorganization plans on dissenting impaired classes if the plan adheres to the Absolute Priority Rule (senior classes paid in full before junior equity gets anything).",
      whyIncorrect: "Cramdown prevents holdout vulture creditors from sabotaging viable corporate turnaround plans.",
      how: "Judge enters confirmation order binding dissenting creditors by operation of federal bankruptcy law.",
      when: "Complex corporate debt restructurings.",
      source: "11 U.S.C. §1129(b)"
    }
  },
  {
    id: 28,
    difficulty: "Hard",
    text: "Under corporate promoter law, if a 'Promoter' signs a pre-incorporation lease contract in the name of a corporation that has not yet been formed, who is liable on the lease post-incorporation?",
    options: [
      "Corporation is automatically solely liable upon formation",
      "Promoter remains personally liable on pre-incorporation contract EVEN AFTER corporation is formed and adopts contract, UNLESS third-party landlord explicitly executes a formal novation releasing promoter",
      "Promoter liability vanishes after 30 days",
      "Lease is void ab initio"
    ],
    correctAnswer: 1,
    explanation: {
      why: "An unformed corporation cannot appoint agents. Promoters are personally liable on contracts made for unformed entities. Corporate adoption makes company co-liable, but does NOT release promoter without novation.",
      whyIncorrect: "Landlord can sue both promoter and corporation until formal novation release is signed.",
      how: "Include explicit clause in promoter contracts: 'Liability terminates upon corporate formation and adoption'.",
      when: "Startup founder signs office lease before filing Articles of Incorporation.",
      source: "Model Business Corporation Act §2.04; Stanley J. How & Associates v. Boss"
    }
  },
  {
    id: 29,
    difficulty: "Hard",
    text: "Partnership Tax Basis vs At-Risk vs Passive Loss Limitations: Partner A has a $10,000 tax basis in Partnership X, a $10,000 at-risk amount, and does not materially participate. Partnership X allocates a $30,000 ordinary business loss to Partner A. How is this loss treated on Partner A's tax return?",
    options: [
      "$30,000 ordinary loss deducted immediately",
      "Basis limits allowed loss to $10,000 (suspending $20k under §704(d)); At-risk allows $10,000; Passive activity rules (§469) suspend the remaining $10,000 loss (assuming no passive income), resulting in $0 current deduction",
      "$10,000 deducted currently, $20,000 capital loss",
      "$30,000 suspended under at-risk rules"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Tax losses face three sequential hurdles: (1) §704(d) Basis limit ($10k allowed, $20k suspended basis loss), (2) §465 At-Risk limit ($10k passes), (3) §469 Passive Loss limit (no passive income -> $10k loss suspended as PAL). Current deduction = $0.",
      whyIncorrect: "Passing basis hurdle does not bypass passive activity hurdles.",
      how: "Track suspended losses in three distinct tax buckets: Basis ($20k), At-Risk ($0), Passive ($10k).",
      when: "Pass-through K-1 loss compliance.",
      source: "IRC §704(d); §465; §469"
    }
  },
  {
    id: 30,
    difficulty: "Hard",
    text: "Under the Bankruptcy Code, what is the statutory restriction on repeat Chapter 7 bankruptcy filings?",
    options: [
      "Can file Chapter 7 once every 2 years",
      "Under §727(a)(8) a debtor is barred from receiving a Chapter 7 discharge if the debtor received a prior Chapter 7 or Chapter 11 discharge in a case filed within EIGHT YEARS prior to the current petition date",
      "Can file Chapter 7 once in a lifetime",
      "No restrictions apply"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 727(a)(8) enforces an exact 8-year waiting period between Chapter 7 discharge petition filing dates. (Chapter 13 to Chapter 7 is generally 6 years).",
      whyIncorrect: "Filing Chapter 7 too early results in denial of discharge, wasting bankruptcy court fees.",
      how: "Measure exact time between prior case filing date and new petition filing date.",
      when: "Chronically insolvent debtors seek repeat bankruptcy relief.",
      source: "11 U.S.C. §727(a)(8)"
    }
  },
  {
    id: 31,
    difficulty: "Hard",
    text: "Federal Worker Misclassification Relief (§530 of Revenue Act of 1978): Under what conditions can an employer permanently avoid IRS payroll tax reclassification penalties for treating workers as 1099 independent contractors?",
    options: [
      "By paying workers over $100,000",
      "Section 530 provides statutory safe harbor relief IF employer: (1) Always issued Form 1099s to workers, (2) Treated all similarly situated workers consistently as contractors, and (3) Had a 'Reasonable Basis' (judicial precedent, IRS ruling, or long-standing recognized industry practice)",
      "By obtaining worker consent",
      "Relief was repealed in 2020"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 530 safe harbor bars IRS from reclassifying contractors if business filed 1099s consistently and relied on established industry practice (e.g., courier drivers or salon stylists).",
      whyIncorrect: "Section 530 remains powerful active statutory protection against IRS payroll tax audits.",
      how: "Submit Section 530 defense binder proving industry standard contractor usage.",
      when: "Defending IRS employment tax examinations.",
      source: "Revenue Act of 1978 §530; IRS Publication 1976"
    }
  },
  {
    id: 32,
    difficulty: "Hard",
    text: "Under LLC laws, what is a 'Charging Order' and why is it considered an asset protection benefit?",
    options: [
      "An order charging credit card interest",
      "A statutory court order granting a personal judgment creditor of an LLC member strictly the right to receive any financial profit distributions allocated to that member, WITHOUT granting creditor voting rights or management control to force LLC asset liquidation",
      "An order dissolving LLC",
      "A tax assessment notice"
    ],
    correctAnswer: 1,
    explanation: {
      why: "In partnerships and LLCs, Charging Orders prevent an outside personal creditor of one member from seizing company trucks or disrupting business operations of innocent co-members.",
      whyIncorrect: "Creditor gets only economic distribution rights (phantom income if LLC retains cash).",
      how: "Personal creditor obtains charging order lien against member's LLC distributional interest.",
      when: "Real estate developer sued personally on unrelated car accident judgment.",
      source: "Revised Uniform LLC Act §503"
    }
  },
  {
    id: 33,
    difficulty: "Hard",
    text: "Bankruptcy Chapter 13 vs Chapter 7 Eligibility: What is the primary jurisdictional eligibility restriction for filing Chapter 13 Wage Earner Bankruptcy?",
    options: [
      "Only corporations can file Chapter 13",
      "Chapter 13 is restricted strictly to INDIVIDUALS with regular stable income whose noncontingent, undisputed debts do not exceed statutory debt ceilings (~$2,750,000 combined secured/unsecured debt)",
      "Chapter 13 requires insolvent status",
      "Chapter 13 requires liquidation of home"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 109(e) restricts Chapter 13 debt adjustment to individuals with regular income within statutory debt ceilings. Corporations and LLCs are strictly ineligible for Chapter 13.",
      whyIncorrect: "Chapter 13 lets homeowners catch up on mortgage arrears over 3-5 year repayment plan without losing home.",
      how: "Verify debtor regular earnings cover monthly living budget plus trustee plan payment.",
      when: "Individual wage earners saving primary residence from foreclosure.",
      source: "11 U.S.C. §109(e)"
    }
  },
  {
    id: 34,
    difficulty: "Hard",
    text: "Under corporate dissolution law, what is the legal effect of 'Administrative Dissolution' by the Secretary of State?",
    options: [
      "Corporation instantly vanishes; shareholders face criminal arrest",
      "State revokes corporate charter for administrative defaults (failing to pay annual franchise tax or file annual report); corporation continues existence STRICTLY to wind up and liquidate business affairs, but cannot carry on normal operating business",
      "All corporate debts are forgiven",
      "Converts entity into partnership"
    ],
    correctAnswer: 1,
    explanation: {
      why: "MBCA §14.21 holds that administratively dissolved corporations cannot conduct new business, but maintain corporate shell shield strictly to liquidate assets and pay outstanding bills.",
      whyIncorrect: "Entity can file application for reinstatement within statutory grace years post-curing tax defaults.",
      how: "Cure unpaid state franchise fees to obtain Certificate of Good Standing.",
      when: "Companies forget to file annual state registration renewals.",
      source: "Model Business Corporation Act §14.20; §14.21"
    }
  },
  {
    id: 35,
    difficulty: "Hard",
    text: "FICA Payroll Tax Withholding Liability (§6672 Trust Fund Recovery Penalty): If a corporate employer withholds employee FICA and income taxes from paychecks, but the CEO uses the tax trust funds to pay commercial rent instead of remitting to IRS, who is liable?",
    options: [
      "Only the corporate entity is liable",
      "Under §6672 the IRS can assess a 100% civil penalty personally against any 'Responsible Person' (CEO, CFO, treasurer, signing owners) who willfully failed to collect, truthfully account for, or pay over federal payroll trust fund taxes",
      "Employees must pay taxes again",
      "Penalty is capped at $1,000"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 6672 pierces corporate liability shields automatically. Payroll taxes withheld from workers are sacred U.S. government trust funds. Willfully diverting them to vendors makes officers personally liable for 100% of unpaid trust fund tax.",
      whyIncorrect: "Bankruptcy cannot discharge §6672 trust fund recovery penalties (§523(a)(1)).",
      how: "IRS Revenue Officer conducts Trust Fund interview Form 4180 and assesses personal liens.",
      when: "Failing businesses use withheld employee payroll taxes as an interest-free government loan.",
      source: "IRC §6672; §7501"
    }
  },
  {
    id: 36,
    difficulty: "Hard",
    text: "Under general partnership law, what is the liability of an INCOMING partner admitted into an existing partnership regarding partnership debts incurred PRIOR to admission?",
    options: [
      "Incoming partner has unlimited personal liability for prior debts",
      "Incoming partner is liable for prior debts ONLY to the extent of the incoming partner's capital contribution (limited liability for old debt); but has unlimited personal liability for all debts incurred POST-admission",
      "Incoming partner has zero liability for prior debts",
      "Old partners are relieved of liability"
    ],
    correctAnswer: 1,
    explanation: {
      why: "RUPA §306(b) protects new partners from personal ruin on old debts: prior debts can be satisfied out of the new partner's invested capital, but creditors cannot reach the new partner's personal house/car for pre-existing debts.",
      whyIncorrect: "For post-admission debts, incoming partner shares full joint and several unlimited liability.",
      how: "Audit existing partnership balance sheet liabilities prior to buying partnership interest.",
      when: "Admitting new equity partners into law or accounting partnerships.",
      source: "Revised Uniform Partnership Act §306(b)"
    }
  },
  {
    id: 37,
    difficulty: "Hard",
    text: "Bankruptcy Estate Property Nuance '180-Day Windfall Rule': Debtor files Chapter 7 bankruptcy on May 1. On August 1 (90 days later), Debtor's wealthy uncle dies and leaves Debtor a $100,000 inheritance. Does this inheritance belong to the Chapter 7 bankruptcy estate trustee?",
    options: [
      "No, bankruptcy estate includes strictly property owned on petition date May 1",
      "Yes, under §541(a)(5) the bankruptcy estate pulls in any property the debtor acquires within 180 DAYS after petition date by Inheritance, Property Settlement/Divorce decree, or Life Insurance proceeds",
      "Yes, but only 10% of inheritance",
      "No, inheritances are exempt"
    ],
    correctAnswer: 1,
    explanation: {
      why: "To prevent debtors from filing bankruptcy right before an expected windfall, Section 541(a)(5) captures inheritances, divorce property settlements, and life insurance payouts vesting within 180 days post-filing.",
      whyIncorrect: "Ordinary post-petition wages earned by debtor post-filing stay with debtor, but statutory 180-day windfalls go to trustee.",
      how: "Trustee intercepts $100,000 probate inheritance check to distribute to bankruptcy creditors.",
      when: "Debtor inherits money shortly after filing Chapter 7.",
      source: "11 U.S.C. §541(a)(5)"
    }
  },
  {
    id: 38,
    difficulty: "Hard",
    text: "Under corporate reorganization tax rules, which IRC Section governs tax-free corporate reorganizations (Mergers, Acquisitions, Recapitalizations)?",
    options: [
      "Section 1031",
      "Section 368 (defines statutory Type A, B, C, D, E, F, G tax-free reorganizations)",
      "Section 721",
      "Section 1231"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 368 enumerates tax-free corporate reorganizations (Type A Statutory Merger, Type B Stock-for-Stock, Type C Stock-for-Assets). Shareholders defer gain by taking carryover stock basis (§358).",
      whyIncorrect: "Section 1031 is like-kind real estate. Section 721 is partnership formation.",
      how: "Structure corporate M&A satisfying continuity of interest and continuity of business enterprise doctrines.",
      when: "Public companies acquire target competitors using voting stock.",
      source: "IRC §368; §354; §358"
    }
  },
  {
    id: 39,
    difficulty: "Hard",
    text: "Under bankruptcy priority rules, what is the statutory dollar cap on priority wage claims owed to employees of a bankrupt employer under Chapter 7?",
    options: [
      "$5,000 per employee",
      "Up to $15,150 per employee for wages, salaries, or commissions earned within 180 days prior to bankruptcy filing or cessation of business",
      "$50,000 per employee",
      "No dollar limit"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 507(a)(4) grants Fourth Priority to employee wage claims capped at $15,150 ($15,150 for 2024 inflation tier) earned within 180 days. Any unpaid wages above $15,150 drop down to general unsecured status.",
      whyIncorrect: "Capping priority balances protecting workers with fair distribution across all creditors.",
      how: "Pay unpaid payroll up to $15,150 tier before paying general unsecured invoices.",
      when: "Corporate employer collapses leaving 3 weeks of unpaid employee payroll.",
      source: "11 U.S.C. §507(a)(4)"
    }
  },
  {
    id: 40,
    difficulty: "Hard",
    text: "Under S-Corporation taxation, what is the 'Built-In Gains (BIG) Tax' under IRC Section 1374?",
    options: [
      "A tax on real estate construction",
      "A corporate-level tax (21%) assessed on an S-Corporation that converted from a C-Corporation, if the entity sells assets that had unrealized appreciation on the conversion date within a 5-year recognition period",
      "A tax on shareholder salary",
      "A tax on tax-exempt interest"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 1374 prevents C-Corps from avoiding corporate tax on appreciated inventory/building by converting to S-Corp right before selling. If sold within 5 years of conversion, the net recognized built-in gain faces 21% corporate tax.",
      whyIncorrect: "Entities formed originally as S-Corps (never C-Corps) are completely exempt from BIG tax.",
      how: "Obtain certified asset valuation appraisal on exact date C-Corp elects S-Corp status.",
      when: "C-Corp with $1M appreciated real estate elects S status and sells building 2 years later.",
      source: "IRC §1374"
    }
  }
];
