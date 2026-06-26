import type { Question } from './r1_questions';

export const r5Questions: Question[] = [
  // MEDIUM (1-20)
  {
    id: 1,
    difficulty: "Medium",
    text: "Under the law of agency, which of the following is required to form a valid, enforceable agency relationship?",
    options: [
      "A written agreement signed by both the principal and the agent",
      "Consideration paid to the agent",
      "Capacity of the principal",
      "Capacity of the agent"
    ],
    correctAnswer: 2,
    explanation: {
      why: "The principal must have legal capacity to enter into contracts (e.g., of sound mind and legal age). An agent does not generally need legal capacity (even a minor can act as an agent).",
      whyIncorrect: "Agency agreements generally do not need to be in writing (unless the Equal Dignity Rule applies for real estate contracts). Consideration is not required; gratuitous agencies are enforceable.",
      how: "Verify the legal capacity of the principal appointing the agent.",
      when: "When establishing principal-agent relationships under common law.",
      source: "Restatement (Third) of Agency §3.01"
    }
  },
  {
    id: 2,
    difficulty: "Medium",
    text: "An agent has 'apparent authority' to bind a principal to a third-party contract when:",
    options: [
      "The principal secretly instructs the agent to execute the contract",
      "The principal's conduct or manifestations lead the third party to reasonably believe the agent has authority",
      "The agent falsely claims authority to the third party without the principal's knowledge",
      "An emergency situation occurs requiring immediate action to protect the principal's property"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Apparent authority arises strictly from manifestations or conduct by the *principal* towards the *third party* that cause the third party to reasonably believe the agent is authorized.",
      whyIncorrect: "Secret instructions create express actual authority. Agent self-proclamations alone cannot create apparent authority. Emergencies create implied actual authority by operation of law.",
      how: "Evaluate what the principal communicated or demonstrated to the third party (e.g., giving agent corporate business cards or title).",
      when: "Determining principal liability on unauthorized contracts.",
      source: "Restatement (Third) of Agency §2.03"
    }
  },
  {
    id: 3,
    difficulty: "Medium",
    text: "Which of the following events automatically terminates an agency relationship by operation of law?",
    options: [
      "The agent expresses dissatisfaction with the compensation",
      "The principal discharges the agent without cause",
      "The death or judicial declaration of insanity of either the principal or the agent",
      "The third party refuses to deal with the agent"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Under common law, the death or adjudicated mental incapacity of either principal or agent immediately terminates actual authority by operation of law (no notice required).",
      whyIncorrect: "Discharging the agent terminates agency by act of the parties (revocation), not operation of law. Dissatisfaction or third-party refusals do not terminate agency.",
      how: "Upon death or judicial declaration of incapacity, all agency authority instantly ceases.",
      when: "Analyzing termination events and subsequent contract enforceability.",
      source: "Restatement (Third) of Agency §3.07"
    }
  },
  {
    id: 4,
    difficulty: "Medium",
    text: "Under common law contract rules, the 'Mirror Image Rule' dictates that:",
    options: [
      "An acceptance must be in identical handwriting to the offer",
      "An acceptance must agree unconditionally and identically to the exact terms of the offer without modification",
      "Merchants can add minor terms to an acceptance without invalidating contract formation",
      "An offer can be revoked at any time prior to acceptance"
    ],
    correctAnswer: 1,
    explanation: {
      why: "The common law Mirror Image Rule requires acceptance to match the offer exactly. Any modification, addition, or conditional term acts as a rejection and counteroffer.",
      whyIncorrect: "Adding minor terms applies to UCC Article 2 Battle of the Forms between merchants. Revocability relates to offer rules, not the definition of the Mirror Image Rule.",
      how: "Compare offer terms vs acceptance terms. If differences exist under common law, no contract is formed.",
      when: "Forming contracts for services, real estate, or intangibles.",
      source: "Restatement (Second) of Contracts §59"
    }
  },
  {
    id: 5,
    difficulty: "Medium",
    text: "Under the common law 'Mailbox Rule', when is a contract acceptance generally effective?",
    options: [
      "When received by the offeror",
      "When dispatched (mailed) by the offeree, provided proper postage and address are used",
      "Three business days after dispatch",
      "Only when acknowledged in writing by the offeror"
    ],
    correctAnswer: 1,
    explanation: {
      why: "The Mailbox Rule provides that an acceptance is legally effective upon dispatch (dropping in the mail), whereas rejections and revocations are effective only upon receipt.",
      whyIncorrect: "Receipt is required for offers, revocations, and rejections, but NOT acceptance.",
      how: "Verify dispatch timestamp. Contract is binding at dispatch even if lost in the mail.",
      when: "Offerees accept contract offers via mail or authorized remote courier.",
      source: "Restatement (Second) of Contracts §63"
    }
  },
  {
    id: 6,
    difficulty: "Medium",
    text: "Which of the following contracts must be in writing to be enforceable under the Statute of Frauds?",
    options: [
      "A contract to perform accounting services that can be completed in 6 months",
      "A contract for the sale of goods priced at $400",
      "A contract to guarantee the debt of another person (suretyship promise)",
      "A contract for a month-to-month residential lease"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Under the Statute of Frauds (MYLEGS), promises to answer for the debt or default of another (Suretyship) must be evidenced by a signed writing.",
      whyIncorrect: "Contracts performable within 1 year, sale of goods under $500 ($400), and short leases under 1 year do not require a writing.",
      how: "Apply the MYLEGS acronym: Marriage, Year (>1 yr), Land, Executor, Goods ($500+), Suretyship.",
      when: "Determining if oral agreements can be enforced in court.",
      source: "Statute of Frauds; UCC §2-201"
    }
  },
  {
    id: 7,
    difficulty: "Medium",
    text: "Under UCC Article 2, a 'Firm Offer' made by a merchant to sell goods:",
    options: [
      "Requires consideration from the buyer to be irrevocable",
      "Is irrevocable without consideration IF it is in a signed writing specifying it will be held open (up to a statutory maximum of 3 months)",
      "Can be oral provided it is witnessed by two parties",
      "Remains open indefinitely until explicitly revoked"
    ],
    correctAnswer: 1,
    explanation: {
      why: "UCC Section 2-205 allows merchants to make irrevocable Firm Offers without consideration if signed in writing, held open for the stated time (not exceeding 3 months).",
      whyIncorrect: "Common law option contracts require consideration, but UCC merchant firm offers explicitly do not. Oral firm offers are invalid.",
      how: "Check if offeror is a merchant, writing is signed, and explicit assurance is given.",
      when: "Merchants submit binding price quotes for inventory or equipment.",
      source: "UCC §2-205"
    }
  },
  {
    id: 8,
    difficulty: "Medium",
    text: "Under UCC Article 2, what implied warranty arises automatically in every sale of goods by a merchant who deals in goods of that kind?",
    options: [
      "Implied Warranty of Fitness for a Particular Purpose",
      "Implied Warranty of Merchantability",
      "Express Warranty of Satisfaction",
      "Warranty against Discontinued Production"
    ],
    correctAnswer: 1,
    explanation: {
      why: "The Implied Warranty of Merchantability (§2-314) guarantees that goods are fit for their ordinary intended purposes and of average acceptable quality, arising automatically from merchant sellers.",
      whyIncorrect: "Fitness for Particular Purpose arises only when the buyer relies on the seller's skill to select goods for a specific, non-ordinary use.",
      how: "Goods must pass without objection in the trade and be fit for ordinary purposes.",
      when: "Buying commercial goods or inventory from regular commercial merchants.",
      source: "UCC §2-314"
    }
  },
  {
    id: 9,
    difficulty: "Medium",
    text: "In a shipping contract designated as 'FOB Shipping Point', when does the risk of loss transfer from the seller to the buyer?",
    options: [
      "When the goods reach the buyer's loading dock",
      "When the seller delivers the goods to the common carrier",
      "When the buyer pays the invoice",
      "Halfway through the transit route"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under FOB Shipping Point, risk of loss transfers to the buyer the moment the seller duly delivers the goods to the independent carrier.",
      whyIncorrect: "FOB Destination transfers risk when goods arrive at the buyer's destination dock. Payment timing does not govern UCC risk of loss.",
      how: "Identify contract shipment term. If shipping point, buyer bears transit damage risks.",
      when: "Determining insurance claims when freight is damaged in transit.",
      source: "UCC §2-509"
    }
  },
  {
    id: 10,
    difficulty: "Medium",
    text: "What is the legal effect of an agent executing a contract on behalf of an 'undisclosed principal'?",
    options: [
      "The contract is void ab initio",
      "Only the principal can be sued by the third party",
      "Both the principal and the agent are liable on the contract, and the third party can elect whom to hold liable upon discovery",
      "The agent is relieved of all contractual liability"
    ],
    correctAnswer: 2,
    explanation: {
      why: "When a principal is undisclosed (third party thinks agent is acting for oneself), the agent is personally liable. Upon discovering the principal, the third party may sue either agent or principal.",
      whyIncorrect: "The contract is completely valid. Agent is not relieved because the third party relied on the agent's personal credit.",
      how: "Third party elects judgment against either undisclosed principal or agent.",
      when: "Wealthy buyers use secret agents to assemble land parcels without inflating market prices.",
      source: "Restatement (Third) of Agency §6.03"
    }
  },
  {
    id: 11,
    difficulty: "Medium",
    text: "Under common law contract rules, what is the 'Preexisting Duty Rule'?",
    options: [
      "A promise to perform an obligation that the party is already legally bound to do does not constitute valid consideration for a contract modification",
      "Parties must perform contractual duties prior to demanding payment",
      "Employers must assign duties based on seniority",
      "Contracts must be executed before witnesses"
    ],
    correctAnswer: 0,
    explanation: {
      why: "The Preexisting Duty Rule prevents extortion by holding that agreeing to do what one is already legally obligated to do is not new consideration.",
      whyIncorrect: "UCC Article 2 modifies this rule for goods (allows modification without consideration), but common law enforces it strictly.",
      how: "Contractor demanding $10k extra halfway through building a house without adding new work is unenforceable.",
      when: "Evaluating common law contract amendments.",
      source: "Restatement (Second) of Contracts §73"
    }
  },
  {
    id: 12,
    difficulty: "Medium",
    text: "Which of the following describes the doctrine of 'Respondeat Superior'?",
    options: [
      "Superior courts override lower municipal court judgments",
      "An employer (principal) is vicariously liable for torts committed by an employee (agent) acting within the scope of employment",
      "Principals are not liable for agent negligence",
      "Agents must obey all lawful instructions given by superiors"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Respondeat Superior ('let the master answer') holds employers vicariously liable for tortious harm caused by employees during their course of employment.",
      whyIncorrect: "It does not apply to independent contractors unless inherently dangerous work is involved.",
      how: "Determine if tort occurred during normal job duties vs a personal abandonment (frolic).",
      when: "Delivery driver runs a red light while delivering packages and injures a pedestrian.",
      source: "Restatement (Third) of Agency §2.04"
    }
  },
  {
    id: 13,
    difficulty: "Medium",
    text: "Under contract law, what are 'liquidated damages'?",
    options: [
      "Punitive fines assessed in criminal court",
      "A specific predetermined sum agreed upon by the parties in the contract to be paid in the event of a breach, enforceable if reasonable and actual damages are difficult to estimate",
      "Damages paid exclusively in cash rather than property",
      "Damages resulting from water or flood destruction"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Liquidated damages clauses estimate breach costs in advance. Courts enforce them if actual damages are hard to calculate and the amount is not an excessive penalty.",
      whyIncorrect: "Punitive penalties in contracts are void as against public policy.",
      how: "Review contract breach clause (e.g., forfeiting earnest money deposit).",
      when: "Drafting commercial real estate or construction delay contracts.",
      source: "Restatement (Second) of Contracts §356; UCC §2-718"
    }
  },
  {
    id: 14,
    difficulty: "Medium",
    text: "In a suretyship agreement, what is the right of 'Exoneration'?",
    options: [
      "The right of the surety to recover payments made from the debtor after paying the creditor",
      "The right of the surety to compel the principal debtor to pay the creditor directly before the surety pays",
      "The right to step into the creditor's legal shoes",
      "The right to demand contribution from co-sureties"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Exoneration is an equitable suit brought by the surety *prior* to payment compelling the capable principal debtor to pay the creditor directly.",
      whyIncorrect: "Reimbursement is recovery after payment. Subrogation is stepping into creditor shoes. Contribution is demanding share from co-sureties.",
      how: "File suit in equity demanding debtor satisfy debt to prevent surety cash drain.",
      when: "Debtor has funds but refuses to pay debt upon maturity.",
      source: "Restatement (Third) of Suretyship & Guaranty §21"
    }
  },
  {
    id: 15,
    difficulty: "Medium",
    text: "Under UCC Article 9, what three requirements must be met for a security interest in collateral to legally 'attach'?",
    options: [
      "Filing Form UCC-1, debtor signature, and notary witness",
      "Value given by creditor, debtor has rights in collateral, and an authenticated security agreement (or possession/control of collateral)",
      "Creditor possession, $1,000 minimum value, and judicial approval",
      "Notice to all creditors, insurance coverage, and written appraisal"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Attachment (§9-203) makes a security interest enforceable against the debtor. It requires: (1) Value given, (2) Debtor rights in collateral, and (3) Authenticated agreement (or creditor possession/control).",
      whyIncorrect: "Filing Form UCC-1 achieves *perfection* (priority against third parties), not attachment.",
      how: "Verify loan disbursement (value), debtor ownership, and signed pledge agreement.",
      when: "Banks take security interests in business equipment or inventory loans.",
      source: "UCC §9-203"
    }
  },
  {
    id: 16,
    difficulty: "Medium",
    text: "Under the Parol Evidence Rule, if two parties execute a complete, unambiguous, integrated written contract, evidence of prior oral negotiations is:",
    options: [
      "Fully admissible to contradict written terms",
      "Inadmissible to contradict or vary the terms of the written contract",
      "Admissible only if requested by a jury",
      "Mandatory to prove contract consideration"
    ],
    correctAnswer: 1,
    explanation: {
      why: "The Parol Evidence Rule bars extrinsic evidence of prior or contemporaneous agreements offered to contradict or modify a fully integrated written contract.",
      whyIncorrect: "Exceptions allow parol evidence only to prove fraud, duress, ambiguity, or subsequent modifications.",
      how: "Include a merger/integration clause stating 'this writing represents the entire agreement'.",
      when: "Litigating contract disputes where one party claims verbal side promises were made.",
      source: "Restatement (Second) of Contracts §213; UCC §2-202"
    }
  },
  {
    id: 17,
    difficulty: "Medium",
    text: "Which of the following is an effective method to disclaim the UCC Implied Warranty of Merchantability?",
    options: [
      "Stating verbally 'no warranties apply'",
      "Selling the goods explicitly marked 'AS IS' or 'WITH ALL FAULTS' in conspicuous writing",
      "Hiding the disclaimer on the back of a receipt post-sale",
      "Charging a discounted purchase price"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under UCC §2-316, implied warranties can be effectively disclaimed by conspicuous expressions like 'AS IS', 'WITH ALL FAULTS', or explicit mention of the word 'merchantability'.",
      whyIncorrect: "Post-sale disclaimers on receipts are invalid because they were not part of the bargain formation.",
      how: "Stamp 'AS IS - NO IMPLIED WARRANTIES' conspicuously on commercial sales contracts.",
      when: "Merchants liquidate used or surplus inventory.",
      source: "UCC §2-316"
    }
  },
  {
    id: 18,
    difficulty: "Medium",
    text: "What is the legal difference between an 'assignment of rights' and a 'delegation of duties'?",
    options: [
      "Assignments apply to real estate; delegations apply to services",
      "Assignment transfers contract benefits/receivables to a third party; delegation transfers contract performance obligations to a third party",
      "Delegations relieve the original party of liability immediately",
      "Assignments are prohibited under commercial law"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Assignment transfers contract rights (e.g., right to receive money). Delegation transfers contractual duties (e.g., duty to build). Delegator remains secondarily liable unless a novation occurs.",
      whyIncorrect: "Delegation does not extinguish liability without creditor release (novation).",
      how: "Assign receivables to factor bank; delegate standard landscaping work to subcontractor.",
      when: "Restructuring business contract obligations.",
      source: "Restatement (Second) of Contracts §317; §318"
    }
  },
  {
    id: 19,
    difficulty: "Medium",
    text: "Under contract law, what is a 'novation'?",
    options: [
      "A minor breach of contract",
      "A three-party agreement where a new contracting party completely substitutes for an original party, releasing the original party from all contractual liability",
      "An automatic price inflation adjustment",
      "A cancellation of contract due to impossibility"
    ],
    correctAnswer: 1,
    explanation: {
      why: "A novation completely replaces an original contracting party with a new party by mutual agreement of all three entities, extinguishing all liability of the retiring party.",
      whyIncorrect: "Unlike standard delegation (where delegator remains liable), novation provides full discharge.",
      how: "Execute formal substitution agreement signed by old debtor, new debtor, and creditor.",
      when: "Selling a business and transferring commercial lease liabilities to the buyer.",
      source: "Restatement (Second) of Contracts §280"
    }
  },
  {
    id: 20,
    difficulty: "Medium",
    text: "Under UCC Article 9, what is the primary purpose of 'perfecting' a security interest?",
    options: [
      "To ensure the loan charges maximum interest",
      "To establish superior legal priority over other third parties (subsequent creditors, bankruptcy trustees, buyers) claiming rights in the same collateral",
      "To prevent the debtor from using the collateral",
      "To convert a chattel loan into real estate mortgage"
    ],
    correctAnswer: 1,
    explanation: {
      why: "While attachment binds debtor and creditor, Perfection gives public notice (via filing Form UCC-1 or creditor possession) establishing superior priority against third-party claimants.",
      whyIncorrect: "Perfection does not restrict debtor use or govern interest rates.",
      how: "File Form UCC-1 Financing Statement with Secretary of State where debtor is located.",
      when: "Secured lenders protect loan priority against future debtor insolvency.",
      source: "UCC §9-301; §9-310"
    }
  },

  // HARD (21-40)
  {
    id: 21,
    difficulty: "Hard",
    text: "UCC Article 2 Battle of the Forms: Merchant A sends a purchase order for 1,000 widgets. Merchant B sends an order acknowledgment agreeing to sell, but adds a boilerplate clause stating 'any disputes must be arbitrated in New York'. The original order was silent on arbitration. Is the arbitration clause part of the contract?",
    options: [
      "No, because acceptance under UCC requires exact mirror image terms",
      "Yes, between merchants additional terms automatically become part of the contract UNLESS they materially alter it, the offer expressly limited acceptance, or objection is given. Arbitration materially alters contract rights.",
      "Yes, all additional terms always become binding between merchants",
      "No contract is formed whatsoever"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under UCC §2-207, between merchants additional terms enter the contract unless they materially alter it. Courts hold that mandatory arbitration, disclaimer of warranties, or short limitation periods are material alterations requiring express assent.",
      whyIncorrect: "Common law mirror image rule is abolished by UCC §2-207. Contract is formed, but the material addition (arbitration) drops out.",
      how: "Contract exists for 1,000 widgets without the New York arbitration clause.",
      when: "Analyzing conflicting boilerplate purchase orders and invoices.",
      source: "UCC §2-207(2)(b)"
    }
  },
  {
    id: 22,
    difficulty: "Hard",
    text: "Under UCC Article 9, Bank X takes a security interest in Debtor's existing equipment on June 1 and files Form UCC-1 on June 10. Bank Y provides a Purchase Money Security Interest (PMSI) loan to buy new equipment delivered June 5, and files Form UCC-1 on June 20. Who has priority in the new equipment?",
    options: [
      "Bank X, because Bank X filed first chronologically (June 10 vs June 20)",
      "Bank Y, because an equipment PMSI enjoys super-priority over prior perfected security interests IF perfected within 20 days after the debtor receives possession of the collateral",
      "Bank X and Bank Y share pro-rata priority",
      "Neither bank has priority due to conflicting filings"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under UCC §9-324(a), a PMSI in non-inventory equipment has super-priority over prior conflicting liens if perfected (filed) within 20 days of delivery. June 5 delivery -> June 20 filing is exactly 15 days (within 20).",
      whyIncorrect: "General 'first to file' rule (§9-322) is overridden by equipment PMSI super-priority rules.",
      how: "Verify delivery date vs filing date. PMSI lender wins priority in equipment.",
      when: "Lenders finance specific machine purchases for businesses with blanket liens.",
      source: "UCC §9-324(a)"
    }
  },
  {
    id: 23,
    difficulty: "Hard",
    text: "How does the super-priority rule for a Purchase Money Security Interest (PMSI) in INVENTORY differ from equipment under UCC Article 9?",
    options: [
      "Inventory PMSIs have a 30-day grace period to file",
      "To achieve super-priority in inventory, the PMSI creditor must file AND send written notification to all prior holders of conflicting security interests BEFORE the debtor receives possession of the inventory (no 20-day grace period)",
      "Inventory PMSIs cannot achieve priority over bank liens",
      "Inventory PMSIs require judicial confirmation"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Because inventory turns over rapidly, UCC §9-324(b) denies grace periods. Inventory PMSI lenders must file UCC-1 and give written notice to prior inventory lienholders *prior* to delivery.",
      whyIncorrect: "Equipment gets a 20-day grace window after delivery, but inventory gets zero grace days.",
      how: "Send certified advance notification letter to existing blanket inventory lenders.",
      when: "Floorplan financing for auto dealerships or retail inventory stock.",
      source: "UCC §9-324(b)"
    }
  },
  {
    id: 24,
    difficulty: "Hard",
    text: "Under contract law, what is 'Anticipatory Repudiation' and what are the aggrieved party's options?",
    options: [
      "An ambiguous delay in performance; aggrieved party must wait until due date",
      "An unequivocal manifestation prior to the performance due date that a contracting party will not perform; aggrieved party may immediately sue for breach OR await performance due date",
      "A mutual cancellation of contract",
      "A bankruptcy preference filing"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Anticipatory repudiation occurs when a party clearly states before due date 'I will not perform'. The non-breaching party can treat contract as immediately breached and sue, or mitigate damages.",
      whyIncorrect: "Aggrieved party is not forced to wait until due date if repudiation is clear and definitive.",
      how: "Stop own performance immediately and cover goods elsewhere.",
      when: "Supplier notifies buyer 2 months before delivery that factory won't produce order.",
      source: "Restatement (Second) of Contracts §253; UCC §2-610"
    }
  },
  {
    id: 25,
    difficulty: "Hard",
    text: "Suretyship Co-Surety Contribution Formula: Surety A and Surety B guarantee a $100,000 corporate debt. Surety A's maximum liability limit is $60,000; Surety B's limit is $40,000. Debtor defaults owing $50,000. Surety A pays the full $50,000 to creditor. How much can Surety A recover from Surety B?",
    options: [
      "$25,000 (equal 50/50 split)",
      "$20,000 based on relative liability limits ($40k / $100k total limits = 40% * $50k paid)",
      "$40,000",
      "$0"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Contribution between solvent co-sureties is calculated pro-rata based on their maximum individual contractual liability limits: (Surety B limit / Total limits) * Default loss paid. ($40k / $100k) * $50k = $20,000.",
      whyIncorrect: "Equal 50/50 split applies only if co-sureties signed without stated liability caps.",
      how: "Surety A collects $20,000 contribution from Surety B, bearing $30,000 oneself.",
      when: "Multiple insurance companies or guarantors back a single corporate loan.",
      source: "Restatement (Third) of Suretyship & Guaranty §57"
    }
  },
  {
    id: 26,
    difficulty: "Hard",
    text: "Under the law of agency, what is a 'frolic' versus a 'detour' in employer tort liability?",
    options: [
      "Frolic is criminal; detour is civil",
      "Detour is a minor, foreseeable deviation from job duties where employer remains liable; Frolic is a substantial personal abandonment of employment duties where employer is relieved of vicarious liability",
      "Employers are liable for frolics but not detours",
      "Terms apply strictly to independent contractors"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Respondeat Superior, minor deviations (stopping at drive-thru on route = detour) maintain employer liability. Major departures (driving 20 miles off route to visit friend = frolic) suspend liability.",
      whyIncorrect: "Once employee returns to scope of employment from a frolic, employer liability resumes.",
      how: "Analyze geographic and temporal deviation from assigned job route.",
      when: "Company vehicle accidents involving off-duty or side-tripping employees.",
      source: "Restatement (Third) of Agency §7.07 Comment b"
    }
  },
  {
    id: 27,
    difficulty: "Hard",
    text: "UCC Article 9 Buyer in Ordinary Course of Business (BIOCOB): Retailer grants Bank a perfected blanket security interest in all retail inventory. Consumer buys a refrigerator from Retailer for cash in ordinary course. Retailer defaults on loan. Can Bank repossess the refrigerator from Consumer?",
    options: [
      "Yes, perfected security interests follow collateral into third-party hands",
      "No, a BIOCOB takes goods free of a security interest created by the buyer's seller, even if perfected and even if buyer knows of lien",
      "Yes, unless Consumer checked UCC registry",
      "No, but Consumer must pay Bank remaining loan balance"
    ],
    correctAnswer: 1,
    explanation: {
      why: "UCC §9-320(a) protects commerce by ensuring regular retail customers (BIOCOB) buying inventory take title completely free of inventory liens created by the store seller.",
      whyIncorrect: "Without this rule, consumers would fear buying store goods. Bank lien attaches to retail sale proceeds instead.",
      how: "Verify buyer bought goods in ordinary retail course from inventory merchant.",
      when: "Store insolvency repossessions.",
      source: "UCC §9-320(a); §1-201(b)(9)"
    }
  },
  {
    id: 28,
    difficulty: "Hard",
    text: "Under contract law, what is the doctrine of 'Promissory Estoppel' (Detrimental Reliance)?",
    options: [
      "A criminal fraud defense",
      "An equitable doctrine enforcing a promise without formal consideration IF the promisor reasonably expected to induce action/forbearance, the promisee detrimentally relied on it, and injustice can be avoided only by enforcement",
      "A rule requiring written lease renewals",
      "An automatic contract termination"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Promissory estoppel substitutes for consideration where someone makes a promise causing another to incur significant out-of-pocket reliance costs (e.g., quitting job based on promised grant).",
      whyIncorrect: "Damages are generally limited to reliance out-of-pocket costs rather than full contract expectancy.",
      how: "Prove clear promise, foreseeable reliance, and economic detriment.",
      when: "Charitable pledge enforcement or retracted employment offers post-relocation.",
      source: "Restatement (Second) of Contracts §90"
    }
  },
  {
    id: 29,
    difficulty: "Hard",
    text: "UCC Article 2 Statute of Frauds 'Merchant Written Confirmation Rule': Merchant A calls Merchant B and verbally orders $5,000 of goods. Next day, Merchant A sends a signed written confirmation detailing order. Merchant B receives it, reads it, and does nothing. Fifteen days later Merchant B refuses to ship. Can Merchant A enforce the contract against Merchant B?",
    options: [
      "No, Merchant B never signed a writing under Statute of Frauds $500+ rule",
      "Yes, between merchants a signed confirmation satisfies Statute of Frauds against the receiving merchant UNLESS written notice of objection is given within 10 days of receipt",
      "No, verbal orders exceed $1,000 limit",
      "Yes, but only for $500 of goods"
    ],
    correctAnswer: 1,
    explanation: {
      why: "UCC §2-201(2) holds that between merchants, receiving a signed written confirmation binds the recipient under Statute of Frauds unless formal written objection is dispatched within 10 days.",
      whyIncorrect: "Merchant B's silence for 15 days strips away Statute of Frauds defense. (Note: still must prove verbal contract occurred).",
      how: "Send prompt certified email confirmation post-phone orders.",
      when: "Fast-paced commodity and wholesale trade.",
      source: "UCC §2-201(2)"
    }
  },
  {
    id: 30,
    difficulty: "Hard",
    text: "Under suretyship law, what is the legal effect on a COMPENSATED surety if the creditor and principal debtor bind themselves to an extension of time without the surety's consent?",
    options: [
      "Surety is completely discharged under all circumstances",
      "Compensated surety is discharged ONLY to the extent the surety suffers demonstrated monetary harm/prejudice from the extension",
      "Surety liability doubles",
      "Extension is void"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Gratuitous sureties are completely discharged by any unconsented modification. However, modern law holds bonding companies (Compensated Sureties) discharged only if actual financial prejudice is proven.",
      whyIncorrect: "Strict discharge rule applies only to non-compensated friend/family sureties.",
      how: "Review bonding firm contract waiver clauses.",
      when: "Bank extends corporate loan maturity date during liquidity crunch.",
      source: "Restatement (Third) of Suretyship & Guaranty §40"
    }
  },
  {
    id: 31,
    difficulty: "Hard",
    text: "What is the difference between 'fraud in the inducement' and 'fraud in the execution' in contract law?",
    options: [
      "Inducement is civil; execution is criminal",
      "Inducement renders contract voidable (victim knew they were signing contract but was lied to about terms); Execution renders contract void ab initio (victim was deceived into signing document thinking it was non-contractual)",
      "Execution applies strictly to wills",
      "Inducement cannot be proven by parol evidence"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Fraud in execution (trick someone into signing deed thinking it's an autograph) creates no contract meeting of minds (Void). Fraud in inducement (lie about car mileage) makes contract Voidable by victim.",
      whyIncorrect: "Parol evidence rule explicitly permits evidence proving any type of fraud.",
      how: "Determine if victim understood the legal nature of the document executed.",
      when: "Challenging contract validity against third-party assignees.",
      source: "Restatement (Second) of Contracts §163; §164"
    }
  },
  {
    id: 32,
    difficulty: "Hard",
    text: "Under UCC Article 9, what is the 'Garage Sale Rule' (Consumer-to-Consumer Exception)?",
    options: [
      "Garage sales are exempt from sales tax",
      "A consumer buyer of consumer goods takes free of a prior perfected Purchase Money Security Interest (PMSI) IF buyer buys without knowledge of lien, for value, and for personal use, UNLESS secured party previously filed Form UCC-1",
      "Lenders cannot repossess garage sale items",
      "Applies only to vehicles"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Consumer goods PMSIs perfect automatically without filing (§9-309). However, under §9-320(b), if consumer sells neighbor asset at garage sale, neighbor takes free unless lender filed UCC-1 financing statement.",
      whyIncorrect: "To protect automatic PMSI against consumer resale, lender must file UCC-1.",
      how: "Check if bank filed UCC-1 on consumer electronics or appliances.",
      when: "Second-hand consumer purchases.",
      source: "UCC §9-320(b)"
    }
  },
  {
    id: 33,
    difficulty: "Hard",
    text: "In contract law, what is an 'Accord and Satisfaction'?",
    options: [
      "A musical copyright agreement",
      "An agreement (accord) to substitute a different performance for an existing disputed contractual duty, which upon performance (satisfaction) discharges both the original duty and the accord",
      "An unconditional full payment of debt",
      "A court injunction"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Accord is agreement to settle disputed debt for different terms (e.g., paying $4k cash on disputed $6k invoice marked 'payment in full'). Cashing check constitutes satisfaction, discharging debt.",
      whyIncorrect: "If debtor fails to perform accord, creditor can sue on either original duty or accord.",
      how: "Write 'Full and Final Satisfaction of Disputed Claim' conspicuously on settlement checks.",
      when: "Resolving contested vendor billing disputes.",
      source: "Restatement (Second) of Contracts §281; UCC §3-311"
    }
  },
  {
    id: 34,
    difficulty: "Hard",
    text: "Under agency law, when is a principal liable for an agent's INTENTIONAL torts (e.g., assault or battery)?",
    options: [
      "Never; intentional torts are always outside scope of employment",
      "When the intentional tort is committed within the course and scope of employment to further the principal's business (e.g., nightclub bouncer using excessive force)",
      "Only if principal ordered the assault",
      "Anytime agent is on company property"
    ],
    correctAnswer: 1,
    explanation: {
      why: "While most intentional torts are frolics, employers are vicariously liable under Respondeat Superior if force is inherent in job duties (security guard, repo agent) and used to advance employer interests.",
      whyIncorrect: "Blanket immunity for intentional torts is incorrect under modern agency precedent.",
      how: "Evaluate job description and motivation behind agent's physical conduct.",
      when: "Security or debt collection physical altercations.",
      source: "Restatement (Third) of Agency §7.07"
    }
  },
  {
    id: 35,
    difficulty: "Hard",
    text: "Under UCC Article 2, if a seller ships 'nonconforming goods' to a buyer as an accommodation, what is the legal result?",
    options: [
      "It constitutes both an acceptance and an immediate breach of contract",
      "If seller explicitly notifies buyer that shipment is offered strictly as an ACCOMMODATION, shipment constitutes a counteroffer rather than acceptance/breach",
      "Buyer must accept goods at half price",
      "Seller faces criminal fraud fines"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under UCC §2-206, shipping nonconforming goods normally acts as acceptance + breach. However, if seller gives prompt notice that shipment is an accommodation (substitute), it is legally a counteroffer.",
      whyIncorrect: "Without accommodation notice, seller is liable for breach damages.",
      how: "Attach bright notice: 'Shipped as Accommodation Counteroffer Due to Stock Outage'.",
      when: "Wholesalers substitute equivalent upgraded inventory items.",
      source: "UCC §2-206(1)(b)"
    }
  },
  {
    id: 36,
    difficulty: "Hard",
    text: "What are the rights of an 'Intended Third-Party Beneficiary' versus an 'Incidental Beneficiary' in contract law?",
    options: [
      "Incidental beneficiaries can sue; intended cannot",
      "Intended beneficiaries (creditor or donee beneficiaries named in contract) have legal standing to enforce contract once rights vest; Incidental beneficiaries (neighbor benefiting from landscaping) have no enforcement rights",
      "Both have equal litigation rights",
      "Third parties cannot enforce contracts under privity rules"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Privity exception allows intended beneficiaries (life insurance nominee) to sue promisor directly once rights vest. Incidental bystanders benefiting indirectly lack privity and standing.",
      whyIncorrect: "Incidental beneficiaries cannot sue contracting parties.",
      how: "Identify if contracting parties explicitly intended to confer direct benefit on third party.",
      when: "Enforcing insurance payouts or assumed business debt agreements.",
      source: "Restatement (Second) of Contracts §302; §304"
    }
  },
  {
    id: 37,
    difficulty: "Hard",
    text: "Under UCC Article 9, how can a creditor achieve perfection of a security interest in a commercial deposit bank account?",
    options: [
      "By filing Form UCC-1 with County Clerk",
      "Strictly by obtaining 'Control' over the deposit account (e.g., bank is secured party, or executing a three-party Deposit Account Control Agreement / DACA)",
      "By noting lien on tax return",
      "Deposit accounts cannot be collateralized"
    ],
    correctAnswer: 1,
    explanation: {
      why: "UCC §9-312(b)(1) mandates that security interests in deposit accounts as original collateral can be perfected *only* by Control (§9-104). Filing Form UCC-1 is legally ineffective for bank deposit accounts.",
      whyIncorrect: "Filing UCC-1 works for equipment/accounts receivable, but NOT cash bank accounts.",
      how: "Execute Springing or Blocked DACA signed by debtor, lender, and depository bank.",
      when: "Lenders take blanket liens on corporate cash reserves.",
      source: "UCC §9-104; §9-312"
    }
  },
  {
    id: 38,
    difficulty: "Hard",
    text: "Under contract law, what is the 'Specific Performance' equitable remedy and when is it granted?",
    options: [
      "A monetary fine equal to triple damages",
      "A court order compelling the breaching party to perform exact contractual duties, granted ONLY when subject matter is unique (e.g., real estate or rare art) and monetary damages are inadequate",
      "Mandatory enforcement of personal service contracts",
      "An automatic refund of deposits"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Specific performance compels conveyance of unique assets. Courts hold every parcel of real estate unique. Courts strictly refuse specific performance for personal services (violates 13th Amendment involuntary servitude).",
      whyIncorrect: "Personal service breach yields monetary damages, not forced labor.",
      how: "File equity petition seeking court deed transfer order.",
      when: "Seller backs out of signed real estate purchase contract.",
      source: "Restatement (Second) of Contracts §357; §367"
    }
  },
  {
    id: 39,
    difficulty: "Hard",
    text: "Suretyship 'Subrogation' Rights: After a surety pays the principal debtor's $80,000 defaulted loan to the bank, what rights does the surety acquire under subrogation?",
    options: [
      "Only the right to sue debtor in small claims court",
      "Surety steps completely into the bank's legal shoes, acquiring all creditor rights, collateral mortgages, judgments, and bankruptcy priorities against the debtor",
      "Surety becomes equity owner of debtor corporation",
      "Surety can arrest debtor"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Subrogation entitles the paying surety to enforce any security interest, mortgage lien, or priority standing that the original paid creditor held against the defaulting debtor.",
      whyIncorrect: "Subrogation transfers full collateral lien rights rather than unsecured claims.",
      how: "Foreclose on mortgage collateral originally pledged to bank.",
      when: "Recovering surety losses from debtor assets post-payout.",
      source: "Restatement (Third) of Suretyship & Guaranty §27"
    }
  },
  {
    id: 40,
    difficulty: "Hard",
    text: "Under common law contract rules, what is the legal effect of a 'mutual mistake of material fact'?",
    options: [
      "Contract is valid and binding",
      "Contract is voidable by the adversely affected party IF mistake relates to a basic assumption of contract having material effect on exchange, and victim did not bear risk of mistake",
      "Triggers punitive damages",
      "Applies only between merchants"
    ],
    correctAnswer: 1,
    explanation: {
      why: "If both parties contract based on shared false assumption (e.g., buying breeding cow both believe sterile, but is actually pregnant = Sherwood v Walker), adversely affected party may rescind contract.",
      whyIncorrect: "Unilateral mistake generally does not permit rescission unless other party knew of mistake.",
      how: "Petition court for contract rescission and restitution.",
      when: "Rare asset or valuation fundamental error transactions.",
      source: "Restatement (Second) of Contracts §152"
    }
  }
];
