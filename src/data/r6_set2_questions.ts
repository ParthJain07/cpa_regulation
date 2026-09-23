import type { Question } from './r1_questions';

export const r6Set2Questions: Question[] = [
  // GROUP 1: 0, 1, 2, 3
  {
    id: 1,
    difficulty: "Hard",
    text: "Under the Uniform Commercial Code (UCC) Article 9, which of the following actions is sufficient to perfect a security interest in a negotiable instrument?",
    options: [
      "Taking physical possession of the negotiable instrument by the secured party.",
      "Filing a properly executed financing statement in the appropriate state office.",
      "Executing a written security agreement signed by both the debtor and the secured party.",
      "Providing written notice of the security interest to the maker of the instrument."
    ],
    correctAnswer: 0,
    explanation: {
      why: "Under UCC Article 9, a security interest in tangible negotiable instruments, money, and tangible chattel paper is generally perfected only by the secured party taking physical possession of the collateral.",
      whyIncorrect: "Filing a financing statement does not perfect an interest in a tangible negotiable instrument (unlike inventory or equipment). A written security agreement attaches the interest but does not perfect it against third parties. Notice to the maker is irrelevant for perfection.",
      how: "Verify the collateral type. For negotiable instruments, perfection requires physical possession.",
      when: "A bank takes a promissory note as collateral for a loan.",
      source: "UCC § 9-312(b)"
    }
  },
  {
    id: 2,
    difficulty: "Hard",
    text: "A surety guarantees a $100,000 loan. The creditor, without the surety's consent, extends the debtor's time to pay by two years. The surety is an uncompensated friend. What is the surety's liability?",
    options: [
      "The surety remains fully liable because extensions of time do not discharge suretyship.",
      "The surety is completely discharged from all liability under the guarantee agreement.",
      "The surety is discharged only to the extent the extension caused actual financial harm.",
      "The surety remains liable, but the creditor must pursue the debtor first before seeking payment."
    ],
    correctAnswer: 1,
    explanation: {
      why: "A gratuitous (uncompensated) surety is completely discharged from liability if the creditor materially modifies the underlying contract (such as granting a binding extension of time) without the surety's consent.",
      whyIncorrect: "Extensions of time are material modifications. 'Discharge only to the extent of harm' applies to compensated commercial sureties, not gratuitous ones. The creditor is not required to pursue the debtor first in a standard suretyship (unlike a conditional guaranty).",
      how: "Determine if the surety is compensated or gratuitous. Apply strict discharge for gratuitous sureties upon material modification.",
      when: "A parent co-signs a loan for a child, and the bank alters the terms later.",
      source: "Restatement of Suretyship and Guaranty"
    }
  },
  {
    id: 3,
    difficulty: "Hard",
    text: "Under Chapter 7 bankruptcy, which of the following transfers made by a debtor is most likely to be voided by the bankruptcy trustee as a preferential transfer?",
    options: [
      "A payment made to a fully secured creditor 60 days before filing, reflecting ordinary installment terms.",
      "A $500 charitable contribution made to a recognized nonprofit organization 80 days before filing.",
      "A $10,000 payment made to an unsecured supplier 45 days before filing for a past-due invoice.",
      "A transfer of a vehicle to a spouse in exchange for equivalent fair market value cash 10 days before filing."
    ],
    correctAnswer: 2,
    explanation: {
      why: "A voidable preference occurs when an insolvent debtor transfers property to an unsecured creditor for an antecedent (pre-existing) debt within 90 days before bankruptcy, giving the creditor more than they would receive in a Chapter 7 liquidation.",
      whyIncorrect: "Payments to fully secured creditors are not preferences because they do not improve the creditor's liquidation position. Charitable contributions under 15% of gross income are protected. Contemporaneous exchanges for equivalent value (the car for cash) are explicitly excluded from preference rules.",
      how: "Check the 5 preference elements: transfer, to creditor, antecedent debt, insolvency, 90-day window, and improved position.",
      when: "A failing business pays off a favored vendor right before declaring bankruptcy.",
      source: "11 U.S.C. § 547(b)"
    }
  },
  {
    id: 4,
    difficulty: "Hard",
    text: "In a general partnership lacking a formal partnership agreement, how are profits and losses allocated among the partners under the Revised Uniform Partnership Act (RUPA)?",
    options: [
      "Profits and losses are allocated based strictly on the ratio of each partner's initial capital contribution.",
      "Profits are shared equally, but losses are allocated based on capital contributions.",
      "Profits are allocated based on capital contributions, but losses are shared equally.",
      "Profits are shared equally, and losses are shared in the exact same proportion as profits."
    ],
    correctAnswer: 3,
    explanation: {
      why: "Under RUPA, if there is no agreement, partners share profits equally (per capita), regardless of capital contributions or time spent. Losses are shared in the same proportion as profits (equally).",
      whyIncorrect: "Capital contributions do not dictate profit/loss ratios under default partnership law (unlike corporate dividends). The law presumes equal partnership value in services and capital combined.",
      how: "Absent a written agreement specifying percentages, divide profits by the number of partners.",
      when: "Disputes arise in an informal business venture between friends.",
      source: "RUPA § 401(b)"
    }
  },

  // GROUP 2: 1, 2, 3, 0
  {
    id: 5,
    difficulty: "Hard",
    text: "Which of the following business entities provides limited liability for all its owners while also allowing the entity to completely avoid federal income taxation at the entity level by default?",
    options: [
      "A C-Corporation operating strictly in a single state.",
      "A Limited Liability Company (LLC) with multiple members.",
      "A General Partnership engaged in interstate commerce.",
      "A Limited Partnership where the general partner is an individual."
    ],
    correctAnswer: 1,
    explanation: {
      why: "A multi-member LLC defaults to partnership taxation (pass-through entity, avoiding entity-level tax) while providing a corporate-like limited liability shield for all its members.",
      whyIncorrect: "C-Corps face double taxation (entity-level tax). General partnerships lack limited liability for any partner. Limited partnerships expose the general partner to unlimited personal liability.",
      how: "Evaluate entity liability shields and default tax structures.",
      when: "Entrepreneurs select a legal structure for a new joint venture.",
      source: "Treas. Reg. § 301.7701-3 (Check-the-box)"
    }
  },
  {
    id: 6,
    difficulty: "Hard",
    text: "Under the Securities Act of 1933, which of the following defenses is available to an auditor sued by an investor under Section 11 for misstatements in a registration statement?",
    options: [
      "The auditor can prove the investor was contributorily negligent.",
      "The auditor can prove they lacked intent to deceive (no scienter).",
      "The auditor can prove they performed a reasonable investigation (due diligence).",
      "The auditor can prove the investor did not rely on the financial statements."
    ],
    correctAnswer: 2,
    explanation: {
      why: "Section 11 imposes strict liability for material misstatements, but professionals (like auditors) have a statutory 'due diligence' defense if they can prove they conducted a reasonable investigation and had reasonable grounds to believe the statements were true.",
      whyIncorrect: "Contributory negligence is not a defense to §11. Scienter (intent) is required for §10(b) of the 1934 Act, but not §11 of the 1933 Act. Reliance by the investor is not required to be proven under §11.",
      how: "Auditor must demonstrate compliance with GAAS to establish due diligence.",
      when: "An IPO's stock price crashes, and shareholders sue the audit firm.",
      source: "Securities Act of 1933, Section 11(b)"
    }
  },
  {
    id: 7,
    difficulty: "Hard",
    text: "In a principal-agent relationship, which of the following events terminates the agency relationship by operation of law, immediately revoking the agent's actual and apparent authority?",
    options: [
      "The agent breaches their fiduciary duty of loyalty.",
      "The principal files for Chapter 11 bankruptcy reorganization.",
      "The agent unilaterally renounces the agency agreement.",
      "The principal is adjudicated mentally incompetent by a court."
    ],
    correctAnswer: 3,
    explanation: {
      why: "Death or adjudication of insanity/mental incompetence of the principal terminates the agency by operation of law immediately, severing both actual and apparent authority without notice to third parties.",
      whyIncorrect: "Breach of duty gives grounds to fire the agent, but apparent authority remains until third parties are notified. Chapter 11 reorganization does not necessarily terminate agency (unlike Chapter 7 liquidation). Renunciation terminates actual authority, but apparent authority persists until third parties get notice.",
      how: "Identify the trigger event. Legal incapacity acts as an absolute, immediate termination.",
      when: "A real estate broker tries to sell a house after the owner falls into a permanent coma.",
      source: "Restatement (Third) of Agency"
    }
  },
  {
    id: 8,
    difficulty: "Hard",
    text: "A debtor files for Chapter 11 bankruptcy. Which of the following is true regarding the debtor-in-possession (DIP)?",
    options: [
      "The DIP retains control of the business operations unless the court appoints a trustee for cause.",
      "The DIP is automatically replaced by a U.S. Trustee to manage daily operations.",
      "The DIP must liquidate all non-exempt assets within 120 days of filing.",
      "The DIP loses the ability to obtain new financing without unanimous creditor consent."
    ],
    correctAnswer: 0,
    explanation: {
      why: "In Chapter 11, the debtor generally remains in control of the business assets and operations as a 'debtor-in-possession' (DIP). A trustee is only appointed if there is cause, such as fraud, dishonesty, or gross mismanagement.",
      whyIncorrect: "U.S. Trustees oversee administration but do not run the daily business. Liquidation of assets is Chapter 7, not Chapter 11. DIPs can obtain new post-petition financing (DIP financing) with court approval, not unanimous creditor consent.",
      how: "DIP operates the business while formulating a reorganization plan.",
      when: "A large corporation restructuring its debts to avoid going out of business.",
      source: "11 U.S.C. § 1104; § 1107"
    }
  },

  // GROUP 3: 2, 3, 0, 1
  {
    id: 9,
    difficulty: "Hard",
    text: "Which of the following claims holds the highest priority for distribution among unsecured claims in a Chapter 7 bankruptcy liquidation?",
    options: [
      "Claims for unpaid wages earned within 180 days before filing.",
      "Claims for consumer deposits for undelivered goods.",
      "Claims for domestic support obligations (alimony and child support).",
      "Claims by general unsecured trade creditors."
    ],
    correctAnswer: 2,
    explanation: {
      why: "Under the Bankruptcy Code, domestic support obligations (alimony and child support) hold the absolute highest priority (Priority #1) among unsecured claims, superseding administrative expenses and wage claims.",
      whyIncorrect: "Wages are Priority #4. Consumer deposits are Priority #7. General unsecured trade creditors are at the very bottom (non-priority).",
      how: "Rank unsecured claims according to §507(a): #1 Domestic Support, #2 Admin, #3 Gap, #4 Wages...",
      when: "A trustee distributes limited liquidation proceeds to various creditor groups.",
      source: "11 U.S.C. § 507(a)(1)"
    }
  },
  {
    id: 10,
    difficulty: "Hard",
    text: "Corporation A merges into Corporation B. Which of the following is a legal consequence of a statutory merger?",
    options: [
      "Corporation A survives, and Corporation B ceases to exist.",
      "Both corporations dissolve and a entirely new entity, Corporation C, is formed.",
      "Corporation B acquires only the assets of Corporation A, while A's liabilities are discharged.",
      "Corporation B absorbs Corporation A, acquiring all of A's assets and assuming all of A's liabilities by operation of law."
    ],
    correctAnswer: 3,
    explanation: {
      why: "In a statutory merger (A + B = B), the surviving corporation (B) automatically acquires all assets, rights, and liabilities of the merging corporation (A) by operation of law. Corporation A ceases to exist as a separate entity.",
      whyIncorrect: "A surviving means B merged into A. Both dissolving into C is a 'consolidation', not a merger. Acquiring only assets without liabilities is an 'asset purchase', which is legally distinct from a merger.",
      how: "Verify the structure. A statutory merger transfers all legal obligations to the survivor.",
      when: "Two tech companies merge, and the survivor faces lawsuits for the old company's defective products.",
      source: "Model Business Corporation Act (MBCA) § 11.07"
    }
  },
  {
    id: 11,
    difficulty: "Hard",
    text: "Under the Statute of Frauds, which of the following contracts MUST be in writing to be legally enforceable?",
    options: [
      "A contract for the sale of real estate.",
      "A contract for the sale of goods priced at $300.",
      "A contract for employment lasting 6 months.",
      "A contract to repair a vehicle for $800 in labor costs."
    ],
    correctAnswer: 0,
    explanation: {
      why: "The Statute of Frauds requires certain contracts to be evidenced by a signed writing, including contracts involving the sale or transfer of interests in real estate (land).",
      whyIncorrect: "Under UCC, goods require writing only if $500 or more (so $300 is oral). Services/employment require writing only if they *cannot* be completed within 1 year (6 months is oral). Vehicle repair is a service contract, which does not fall under the $500 UCC goods rule.",
      how: "Remember MYLEGS: Marriage, Year, Land, Executor, Goods ($500+), Surety.",
      when: "Parties dispute an oral agreement to purchase a commercial building.",
      source: "Statute of Frauds / Common Law Contracts"
    }
  },
  {
    id: 12,
    difficulty: "Hard",
    text: "In the context of strict product liability, a plaintiff must prove all of the following elements EXCEPT:",
    options: [
      "The product was in a defective condition making it unreasonably dangerous.",
      "The defendant breached the standard of reasonable care in manufacturing the product.",
      "The defect existed when the product left the defendant's control.",
      "The defect was the proximate cause of the plaintiff's injuries."
    ],
    correctAnswer: 1,
    explanation: {
      why: "Strict product liability does NOT require the plaintiff to prove fault or a breach of the standard of care (negligence). The focus is entirely on the dangerous defect in the product itself, regardless of how careful the manufacturer was.",
      whyIncorrect: "The plaintiff MUST prove the product was defective/dangerous, that the defect originated with the manufacturer, and that it caused the injury.",
      how: "Distinguish between negligence (requires proving breach of care) and strict liability (requires proving defect).",
      when: "A consumer is injured by a defective battery explosion.",
      source: "Restatement (Second) of Torts § 402A"
    }
  },

  // GROUP 4: 3, 0, 1, 2
  {
    id: 13,
    difficulty: "Hard",
    text: "Which of the following actions constitutes an automatic stay violation after a debtor files a Chapter 7 bankruptcy petition?",
    options: [
      "A creditor filing a proof of claim with the bankruptcy court.",
      "The IRS conducting an audit to determine the debtor's tax liability.",
      "A criminal court proceeding against the debtor for passing bad checks.",
      "A landlord sending a formal eviction notice for unpaid pre-petition rent."
    ],
    correctAnswer: 3,
    explanation: {
      why: "The automatic stay immediately halts all collection actions, foreclosures, and evictions for pre-petition debts. A landlord issuing an eviction notice for pre-petition rent is a direct violation of the stay.",
      whyIncorrect: "Filing a proof of claim is the legal way to participate in bankruptcy, not a stay violation. The IRS is permitted to conduct audits (though they cannot collect). Criminal proceedings are explicitly exempt from the automatic stay.",
      how: "Assess if the action is an attempt to collect a pre-petition civil debt outside the bankruptcy court process.",
      when: "Creditors attempt to bypass the bankruptcy court to harass the debtor.",
      source: "11 U.S.C. § 362(a)"
    }
  },
  {
    id: 14,
    difficulty: "Hard",
    text: "What is the legal effect of a novation in a contract?",
    options: [
      "It completely releases an original party and substitutes a new party, discharging the original party's obligations.",
      "It delegates duties to a third party but leaves the original obligor secondarily liable.",
      "It modifies the original contract's price or delivery terms without changing the parties.",
      "It assigns the right to receive payment to a third-party creditor."
    ],
    correctAnswer: 0,
    explanation: {
      why: "A novation is a new agreement involving all original parties and a new party, where the new party is substituted for an original party. The original party is completely discharged from all liability.",
      whyIncorrect: "Delegation leaves the original party secondarily liable. Modifying terms is a simple amendment, not a novation. Assigning rights does not discharge the assignor's duties.",
      how: "Verify that all three parties agreed to the substitution and full release.",
      when: "A business sells its division and the buyer assumes a lease, with the landlord releasing the seller.",
      source: "Common Law Contracts"
    }
  },
  {
    id: 15,
    difficulty: "Hard",
    text: "Under the Securities Exchange Act of 1934 (Rule 10b-5), which element is explicitly required for a plaintiff to successfully sue an accountant for securities fraud?",
    options: [
      "Proof of privity of contract between the plaintiff and the accountant.",
      "Proof of scienter (intent to deceive, manipulate, or defraud) by the accountant.",
      "Proof that the accountant failed to exercise ordinary reasonable care.",
      "Proof that the securities were part of an initial public offering (IPO)."
    ],
    correctAnswer: 1,
    explanation: {
      why: "Rule 10b-5 is an anti-fraud statute. A plaintiff must prove 'scienter'—that the accountant acted with intent to deceive, manipulate, defraud, or with severe recklessness.",
      whyIncorrect: "Privity is required for common law negligence in some states, but not for federal 10b-5 fraud. Ordinary negligence is insufficient for 10b-5 (which requires scienter). 10b-5 applies to the secondary market (1934 Act), not just IPOs (1933 Act).",
      how: "Distinguish between negligence (carelessness) and fraud/scienter (deceit).",
      when: "Investors sue auditors after uncovering a massive corporate embezzlement cover-up.",
      source: "Securities Exchange Act of 1934, Rule 10b-5"
    }
  },
  {
    id: 16,
    difficulty: "Hard",
    text: "A debtor owes a creditor $50,000 on a secured equipment loan. The debtor defaults, and the creditor repossesses and sells the equipment for $35,000 in a commercially reasonable manner. What is the creditor's legal recourse for the remaining $15,000?",
    options: [
      "The creditor must absorb the $15,000 loss because repossession constitutes full satisfaction of the debt.",
      "The creditor can seize other personal property of the debtor without a court order to satisfy the balance.",
      "The creditor can sue the debtor for a deficiency judgment as a general unsecured creditor for the $15,000.",
      "The creditor has a priority statutory lien against the debtor's real estate for the deficiency."
    ],
    correctAnswer: 2,
    explanation: {
      why: "If the sale of collateral does not fully satisfy the debt, the secured party may sue the debtor for the deficiency. The $15,000 deficiency balance becomes a general unsecured claim.",
      whyIncorrect: "Repossession is not full satisfaction (strict foreclosure requires written consent). Extrajudicial seizure of non-collateral is illegal conversion. Deficiency balances do not automatically attach as priority liens on real estate.",
      how: "Subtract sale proceeds from loan balance. File a civil lawsuit for the deficiency.",
      when: "A bank sells a repossessed tractor at auction for less than the loan payoff.",
      source: "UCC § 9-615(d)"
    }
  },

  // GROUP 5: 0, 2, 1, 3
  {
    id: 17,
    difficulty: "Hard",
    text: "Under the UCC Sales Article (Article 2), what is the impact of the 'firm offer' rule?",
    options: [
      "A merchant's signed, written offer to buy or sell goods that assures it will be held open is irrevocable for the stated time, up to 3 months, without consideration.",
      "Any offer made by a merchant is automatically irrevocable for 30 days.",
      "An offer supported by consideration (an option contract) is irrevocable only if it involves goods priced over $500.",
      "A non-merchant's written offer is irrevocable if it explicitly states it will not be revoked."
    ],
    correctAnswer: 0,
    explanation: {
      why: "The UCC firm offer rule allows a merchant to make a binding, irrevocable offer without receiving consideration, provided the offer is in writing, signed by the merchant, and explicitly holds the offer open (max 3 months).",
      whyIncorrect: "It requires a signed writing, not automatic. Option contracts (with consideration) apply under common law and can last longer than 3 months. The firm offer rule strictly applies to merchants, not non-merchants.",
      how: "Check if the offeror is a merchant, the offer is in writing, signed, and gives assurance.",
      when: "A car dealer writes a letter offering to sell a fleet of trucks at a fixed price, valid for 60 days.",
      source: "UCC § 2-205"
    }
  },
  {
    id: 18,
    difficulty: "Hard",
    text: "Which of the following debts is NOT discharged in a Chapter 7 bankruptcy?",
    options: [
      "Credit card debts incurred three years prior to filing.",
      "Medical bills from an unexpected emergency surgery.",
      "Debts arising from willful and malicious injury caused by the debtor to another entity.",
      "Breach of contract judgments from commercial litigation."
    ],
    correctAnswer: 2,
    explanation: {
      why: "Debts arising from willful and malicious injury (e.g., intentional torts, assault, malicious destruction of property) are strictly non-dischargeable under Chapter 7 bankruptcy.",
      whyIncorrect: "Old credit card debts, medical bills, and commercial breach of contract judgments are classic examples of dischargeable general unsecured debts.",
      how: "Review §523 exceptions to discharge. Intentional tort judgments survive bankruptcy.",
      when: "A debtor attempts to erase a lawsuit judgment for intentional battery.",
      source: "11 U.S.C. § 523(a)(6)"
    }
  },
  {
    id: 19,
    difficulty: "Hard",
    text: "In a corporate context, what is the 'Business Judgment Rule'?",
    options: [
      "A rule requiring directors to obtain shareholder approval for all routine business decisions.",
      "A legal presumption that protects corporate directors and officers from personal liability for honest mistakes in judgment, provided they acted in good faith, with due care, and within their authority.",
      "A federal regulation mandating that corporations maintain independent audit committees.",
      "A rule that holds directors strictly liable for any business decision that results in a financial loss to the corporation."
    ],
    correctAnswer: 1,
    explanation: {
      why: "The Business Judgment Rule is a common-law doctrine shielding directors and officers from liability for business decisions that turn out poorly, as long as they acted on an informed basis, in good faith, and in the honest belief the action was in the best interests of the company.",
      whyIncorrect: "It does not require shareholder approval for routine tasks. It is a state corporate law doctrine, not a federal audit regulation. It explicitly prevents strict liability for financial losses.",
      how: "If a director is sued for a bad investment, assert the rule as a defense unless there was gross negligence or self-dealing.",
      when: "Shareholders sue the board for launching a failed new product line.",
      source: "Corporate Law / Duty of Care"
    }
  },
  {
    id: 20,
    difficulty: "Hard",
    text: "Under the UCC, what happens when a buyer of goods rejects a nonconforming shipment?",
    options: [
      "The buyer must destroy the goods immediately to prevent liability.",
      "The buyer must pay the full contract price but can sue for damages later.",
      "The seller's rights are terminated, and they cannot attempt to fix the shipment.",
      "The seller has a 'right to cure' the defect if the time for performance has not yet expired."
    ],
    correctAnswer: 3,
    explanation: {
      why: "Under UCC Article 2, if a buyer rejects nonconforming goods, the seller has a statutory 'right to cure' (repair or replace) the delivery if the original contract time for performance has not yet expired.",
      whyIncorrect: "Buyers must hold goods with reasonable care, not destroy them. Buyers do not have to pay for rejected goods. The seller's rights are not immediately terminated if time remains.",
      how: "Seller must notify the buyer of their intent to cure and deliver conforming goods before the deadline.",
      when: "A supplier accidentally ships blue widgets instead of red ones a week before the delivery deadline.",
      source: "UCC § 2-508"
    }
  },

  // GROUP 6: 1, 3, 0, 2
  {
    id: 21,
    difficulty: "Hard",
    text: "A debtor signs a security agreement granting a bank a security interest in their existing and after-acquired inventory. The bank files a financing statement. When does the bank's security interest ATTACH to the newly acquired inventory?",
    options: [
      "On the date the financing statement was originally filed.",
      "When the debtor acquires rights in the new inventory.",
      "When the bank amends the financing statement to specifically list the new items.",
      "On the date the original security agreement was signed."
    ],
    correctAnswer: 1,
    explanation: {
      why: "Attachment requires three things: an agreement, value given by the creditor, and the debtor having rights in the collateral. For after-acquired property, attachment occurs exactly when the debtor acquires rights (takes delivery/ownership) of the new inventory.",
      whyIncorrect: "Filing affects perfection, not attachment. Amending the statement is unnecessary for inventory (floating liens are valid). It cannot attach when signed because the debtor had no rights in future inventory at that time.",
      how: "Verify the date the debtor took ownership of the new shipment.",
      when: "A retail store buys new seasonal stock under a floating lien inventory loan.",
      source: "UCC § 9-203"
    }
  },
  {
    id: 22,
    difficulty: "Hard",
    text: "In the formation of a contract, what is the effect of the common law 'Mirror Image Rule'?",
    options: [
      "It requires oral contracts to be mirrored by a written confirmation.",
      "It allows merchants to add minor new terms in their acceptance without voiding the contract.",
      "It dictates that contracts must be signed in duplicate by both parties.",
      "It requires an acceptance to exactly match the terms of the offer; any variation constitutes a rejection and counteroffer."
    ],
    correctAnswer: 3,
    explanation: {
      why: "Under common law, the Mirror Image Rule dictates that an acceptance must unequivocally match the offer. Adding or altering terms acts as a rejection and creates a new counteroffer.",
      whyIncorrect: "Oral/written confirmation is a Statute of Frauds issue. Allowing merchants to add minor terms is the UCC Article 2 'Battle of the Forms' exception, which explicitly overrides the common law Mirror Image Rule. Duplicate signing is a procedural formality.",
      how: "Compare the offer terms to the acceptance terms. If they differ under common law (services/real estate), no contract is formed.",
      when: "A homeowner accepts a roofing bid but adds a penalty clause for late completion.",
      source: "Common Law Contracts"
    }
  },
  {
    id: 23,
    difficulty: "Hard",
    text: "Under the Bankruptcy Abuse Prevention and Consumer Protection Act (BAPCPA) of 2005, what is the purpose of the 'Means Test'?",
    options: [
      "To determine if an individual debtor's income is high enough that their Chapter 7 filing should be presumed abusive and converted to Chapter 13.",
      "To assess whether a corporate debtor has the financial means to survive Chapter 11 reorganization.",
      "To calculate the liquidation value of a debtor's exempt property.",
      "To verify the debtor's identity and prevent fraudulent filings."
    ],
    correctAnswer: 0,
    explanation: {
      why: "The Means Test was implemented to prevent high-income individuals from abusing Chapter 7 liquidation. If a debtor's average income exceeds the state median and they have sufficient disposable income, the filing is presumed abusive and usually converted to a Chapter 13 repayment plan.",
      whyIncorrect: "It applies to individuals with consumer debt, not corporate Chapter 11s. It deals with income and expenses, not asset liquidation valuation or identity verification.",
      how: "Compare debtor's 6-month average income to state median. Deduct allowed living expenses. Check remaining disposable income.",
      when: "A high-earning executive tries to wipe out massive credit card debt in Chapter 7.",
      source: "11 U.S.C. § 707(b)"
    }
  },
  {
    id: 24,
    difficulty: "Hard",
    text: "When forming a corporation, the promoters enter into several pre-incorporation contracts on behalf of the yet-to-be-formed entity. Once the corporation is formed, who is liable on these contracts?",
    options: [
      "The corporation is automatically liable, and the promoters are discharged.",
      "The corporation is liable only if it was formed within 30 days of the contract.",
      "The promoters remain personally liable unless the corporation adopts the contract AND a novation is executed by all parties.",
      "The contracts are entirely void because the corporation did not exist at the time of signing."
    ],
    correctAnswer: 2,
    explanation: {
      why: "Promoters are personally liable on pre-incorporation contracts. The corporation does not become liable until it formally adopts the contract. Even after adoption, the promoter remains liable unless the third party agrees to a novation releasing the promoter.",
      whyIncorrect: "Automatic liability does not exist because the entity wasn't a party. Time limits don't apply. The contracts are not void; they are valid contracts binding the promoter.",
      how: "Execute a novation agreement signed by the third party, releasing the promoter and substituting the new corporation.",
      when: "Founders sign an office lease before the Secretary of State approves the Articles of Incorporation.",
      source: "Corporate Law / Promoter Liability"
    }
  },

  // GROUP 7: 2, 0, 3, 1
  {
    id: 25,
    difficulty: "Hard",
    text: "Under the UCC, which of the following is considered a 'Purchase Money Security Interest' (PMSI) in consumer goods?",
    options: [
      "A bank taking a lien on a family's existing car to secure a personal loan.",
      "A credit card company holding a security interest in all items purchased with their card.",
      "An appliance store financing a customer's purchase of a refrigerator and retaining a security interest in that specific refrigerator.",
      "A pawnbroker taking possession of jewelry in exchange for a cash loan."
    ],
    correctAnswer: 2,
    explanation: {
      why: "A PMSI arises when a seller finances the purchase of specific goods and retains a security interest in those exact goods, or when a lender advances funds specifically used to purchase those goods.",
      whyIncorrect: "Using existing property as collateral is a standard non-PMSI loan. General credit card debt is unsecured. Pawnbrokers rely on possessory pledges, not purchase-money financing.",
      how: "Identify if the loan proceeds were directly used to acquire the collateral securing the loan.",
      when: "A consumer buys a TV on a store installment plan. The store gets automatic PMSI perfection.",
      source: "UCC § 9-103"
    }
  },
  {
    id: 26,
    difficulty: "Hard",
    text: "A CPA firm performs an audit for Client X. A third-party bank, relying on the audited financial statements, loans money to X. X defaults. In a jurisdiction following the 'Ultramares' rule, is the CPA firm liable to the bank for ordinary negligence?",
    options: [
      "No, because under Ultramares, a CPA is liable for negligence only to those in privity of contract or near-privity.",
      "Yes, because the bank is a foreseeable user of the financial statements.",
      "Yes, because auditors are strictly liable to all injured third parties.",
      "No, because banks assume the risk of default in commercial lending."
    ],
    correctAnswer: 0,
    explanation: {
      why: "The Ultramares doctrine holds that accountants are liable for ordinary negligence only to parties in direct privity of contract (the client) or a primary third-party beneficiary whose reliance was known to the accountant (near-privity).",
      whyIncorrect: "Foreseeable user is the 'Restatement' rule, not Ultramares. Strict liability never applies to audit opinions. Assumption of risk does not bar tort claims for negligence if duty exists.",
      how: "Determine the jurisdiction's rule. Ultramares is the most restrictive, protecting CPAs from broad third-party liability.",
      when: "An unknown creditor sues an audit firm after the client goes bankrupt.",
      source: "Ultramares Corp. v. Touche (1931)"
    }
  },
  {
    id: 27,
    difficulty: "Hard",
    text: "Under the dual capacity doctrine in suretyship, a person serving as a co-surety is entitled to which of the following rights against the other co-sureties?",
    options: [
      "Subrogation",
      "Exoneration",
      "Reimbursement",
      "Contribution"
    ],
    correctAnswer: 3,
    explanation: {
      why: "Contribution is the right of a co-surety who has paid more than their proportionate share of the debt to recover the excess amount from the other co-sureties.",
      whyIncorrect: "Subrogation is the right to step into the creditor's shoes against the debtor. Exoneration is a suit to force the debtor to pay before the surety pays. Reimbursement is the right to be repaid by the principal debtor.",
      how: "Calculate total debt paid by one surety. Divide by agreed share proportions. Demand contribution from co-sureties.",
      when: "Two business partners co-sign a loan, and one pays the entire balance after default.",
      source: "Restatement of Suretyship and Guaranty"
    }
  },
  {
    id: 28,
    difficulty: "Hard",
    text: "A buyer and seller execute a written contract for the sale of a boat. The contract contains a strict merger (integration) clause. The buyer later attempts to introduce evidence of prior oral promises made by the seller. Under the Parol Evidence Rule, this evidence is:",
    options: [
      "Admissible to contradict the terms of the written contract.",
      "Inadmissible to contradict or supplement the completely integrated written contract.",
      "Admissible only if the contract is governed by common law.",
      "Inadmissible unless it was recorded by a notary."
    ],
    correctAnswer: 1,
    explanation: {
      why: "The Parol Evidence Rule bars the introduction of prior or contemporaneous oral agreements that contradict, modify, or supplement a completely integrated written contract (one with a merger clause stating it is the final agreement).",
      whyIncorrect: "It explicitly prevents contradiction. The rule applies to both common law and UCC contracts. Notarization is irrelevant to the parol evidence rule.",
      how: "Look for an integration clause. If present, exclude prior oral negotiations that alter the text.",
      when: "A buyer claims the seller orally promised a free trailer with the boat, but it's not in the contract.",
      source: "Common Law Contracts / Parol Evidence Rule"
    }
  },

  // GROUP 8: 3, 1, 2, 0
  {
    id: 29,
    difficulty: "Hard",
    text: "Which of the following defenses may a maker of a negotiable instrument assert successfully against a Holder in Due Course (HDC)?",
    options: [
      "Breach of warranty for defective goods.",
      "Failure of consideration.",
      "Fraud in the inducement.",
      "Minority (infancy) of the maker."
    ],
    correctAnswer: 3,
    explanation: {
      why: "A Holder in Due Course (HDC) takes free of personal defenses but is still subject to 'real defenses'. Minority (infancy) is a real defense that voids the contract, defeating even an HDC.",
      whyIncorrect: "Breach of warranty, failure of consideration, and fraud in the inducement are 'personal defenses' which an HDC defeats.",
      how: "Memorize real defenses (FAIDS: Fraud in Execution, Alteration, Infancy, Duress, Suretyship defenses, etc.).",
      when: "A 16-year-old signs a promissory note, which is then sold to an innocent third-party bank.",
      source: "UCC § 3-305"
    }
  },
  {
    id: 30,
    difficulty: "Hard",
    text: "Under the doctrine of respondeat superior, an employer is vicariously liable for the torts committed by an employee when:",
    options: [
      "The employee is an independent contractor.",
      "The employee's tort was committed within the course and scope of their employment.",
      "The employer explicitly authorized the tortious act.",
      "The employee is off-duty and commuting to work."
    ],
    correctAnswer: 1,
    explanation: {
      why: "Respondeat superior holds employers vicariously liable for negligence or torts committed by employees while acting within the course and scope of their employment duties.",
      whyIncorrect: "Employers are generally not liable for independent contractors. Explicit authorization makes it direct liability, not vicarious. Commuting ('coming and going' rule) is outside the scope of employment.",
      how: "Determine if the employee was on a 'frolic or detour' or executing company business when the accident occurred.",
      when: "A pizza delivery driver runs a red light and hits a pedestrian while delivering a pizza.",
      source: "Agency Law / Torts"
    }
  },
  {
    id: 31,
    difficulty: "Hard",
    text: "In a corporate liquidation under Chapter 7, what is the status of the equity shareholders?",
    options: [
      "They are paid immediately after secured creditors.",
      "They receive an equal pro-rata share alongside general unsecured creditors.",
      "They are the residual claimants and are paid last, only if all other creditor claims are satisfied in full.",
      "They are guaranteed a return of their initial capital investment."
    ],
    correctAnswer: 2,
    explanation: {
      why: "Equity shareholders are residual owners. In bankruptcy, the Absolute Priority Rule dictates they receive nothing until all secured, priority, and general unsecured creditors are paid 100% of their claims.",
      whyIncorrect: "They are dead last, not after secured creditors or equal to unsecured creditors. There are absolutely no guarantees in bankruptcy equity.",
      how: "Apply the absolute priority rule: Secured -> Priority Unsecured -> General Unsecured -> Equity.",
      when: "A bankrupt public company distributes its final liquidation proceeds.",
      source: "11 U.S.C. § 726"
    }
  },
  {
    id: 32,
    difficulty: "Hard",
    text: "Under UCC Article 9, a filed financing statement is generally effective for how long before it must be continued?",
    options: [
      "5 years from the date of filing.",
      "10 years from the date of filing.",
      "Until the underlying debt is fully paid.",
      "Indefinitely, without need for renewal."
    ],
    correctAnswer: 0,
    explanation: {
      why: "A standard UCC-1 financing statement is effective for exactly 5 years. A continuation statement must be filed within six months prior to expiration to extend it another 5 years.",
      whyIncorrect: "10 years applies to real estate mortgages/judgments in some states, not UCC personal property. It does not automatically expire upon debt payment (requires termination statement). It is not indefinite.",
      how: "Track filing dates and file UCC-3 continuation statements between month 54 and 60.",
      when: "A bank audits its commercial loan portfolio to ensure liens haven't lapsed.",
      source: "UCC § 9-515(a)"
    }
  },

  // GROUP 9: 0, 3, 2, 1
  {
    id: 33,
    difficulty: "Hard",
    text: "Which of the following requires unanimous consent of all partners in a general partnership?",
    options: [
      "Admitting a new partner into the partnership.",
      "Purchasing routine inventory for the business.",
      "Hiring a new branch manager.",
      "Distributing annual profits."
    ],
    correctAnswer: 0,
    explanation: {
      why: "Under partnership law, extraordinary actions, including the admission of a new partner or fundamentally altering the nature of the business, require the unanimous consent of all existing partners.",
      whyIncorrect: "Routine inventory, hiring employees, and standard profit distributions are ordinary course of business decisions requiring only a majority vote.",
      how: "Distinguish between ordinary decisions (majority rule) and extraordinary decisions (unanimous rule).",
      when: "A three-person law firm wants to make a senior associate a full partner.",
      source: "RUPA § 401(i)"
    }
  },
  {
    id: 34,
    difficulty: "Hard",
    text: "Under the Sarbanes-Oxley Act of 2002 (SOX), the lead audit partner and the reviewing partner on an audit of a public company must rotate off the engagement every:",
    options: [
      "2 years",
      "3 years",
      "7 years",
      "5 years"
    ],
    correctAnswer: 3,
    explanation: {
      why: "SOX Title II requires mandatory audit partner rotation. The lead audit partner and the concurring/reviewing partner must rotate off the audit engagement after 5 consecutive years.",
      whyIncorrect: "2 and 3 years are incorrect. 7 years applies to other specific audit partners, but the lead and reviewing partners are strictly capped at 5 years.",
      how: "Monitor engagement tenure for lead partners of SEC issuers.",
      when: "A Big 4 accounting firm schedules partner assignments for a Fortune 500 client.",
      source: "Sarbanes-Oxley Act, Section 203"
    }
  },
  {
    id: 35,
    difficulty: "Hard",
    text: "A principal operates a business and instructs her purchasing agent never to buy goods from Vendor Y. The agent, defying instructions, buys goods from Vendor Y. Vendor Y knows the agent works for the principal but is unaware of the specific instruction. Is the principal bound by the contract?",
    options: [
      "No, because the agent lacked actual authority.",
      "No, because the agent breached their fiduciary duty.",
      "Yes, because the agent possessed apparent authority.",
      "Yes, but only if the principal later ratifies the contract."
    ],
    correctAnswer: 2,
    explanation: {
      why: "The principal is bound because the agent had 'apparent authority' based on their position as a purchasing agent. Secret limiting instructions are not binding on third parties who are unaware of them.",
      whyIncorrect: "Actual authority was revoked, but apparent authority binds the principal. Fiduciary breach allows the principal to sue the agent, but doesn't void the contract with the third party. Ratification is unnecessary when apparent authority exists.",
      how: "The principal must pay the vendor, then sue the rogue agent for indemnification.",
      when: "An employee violates secret corporate purchasing limits.",
      source: "Agency Law / Apparent Authority"
    }
  },
  {
    id: 36,
    difficulty: "Hard",
    text: "In a Chapter 11 bankruptcy, what is 'cramdown'?",
    options: [
      "The forced liquidation of assets by the U.S. Trustee against the debtor's wishes.",
      "The bankruptcy court's confirmation of a reorganization plan over the objection of a dissenting class of creditors, provided the plan is fair and equitable.",
      "The rejection of an executory lease contract.",
      "The process of recovering preferential transfers from insiders."
    ],
    correctAnswer: 1,
    explanation: {
      why: "A cramdown occurs in Chapter 11 when the bankruptcy judge approves a reorganization plan despite the rejection of the plan by an impaired class of creditors, forcing them to accept modified terms, as long as the plan does not unfairly discriminate.",
      whyIncorrect: "Forced liquidation is conversion to Chapter 7. Rejecting leases is §365. Recovering preferences is a clawback action (§547), not a cramdown.",
      how: "Submit the plan to the judge showing it meets the absolute priority rule and treats dissenting classes fairly.",
      when: "Secured bondholders refuse a debt haircut, but the judge enforces the restructure anyway.",
      source: "11 U.S.C. § 1129(b)"
    }
  },

  // GROUP 10: 1, 0, 3, 2
  {
    id: 37,
    difficulty: "Hard",
    text: "Which of the following is an example of an 'executory contract' that a bankruptcy trustee has the power to assume or reject under Section 365?",
    options: [
      "A promissory note where the debtor has received the cash but not yet repaid it.",
      "An unexpired commercial lease for retail store space.",
      "A completed sale of goods where the debtor has already paid and received the goods.",
      "A tort judgment entered against the debtor."
    ],
    correctAnswer: 1,
    explanation: {
      why: "An executory contract is one where material performance remains due on BOTH sides. An unexpired lease involves ongoing obligations: the landlord provides space, and the tenant pays rent.",
      whyIncorrect: "A promissory note only requires one side to perform (repayment). Completed sales have no remaining performance. Judgments are debts, not contracts.",
      how: "Look for mutual unperformed obligations. The trustee can reject burdensome leases to escape future liability.",
      when: "A bankrupt retail chain decides which store locations to close.",
      source: "11 U.S.C. § 365"
    }
  },
  {
    id: 38,
    difficulty: "Hard",
    text: "Under the UCC, what is the implied warranty of merchantability?",
    options: [
      "A warranty implied by law that goods sold by a merchant are fit for their ordinary purpose and pass without objection in the trade.",
      "A warranty that the seller has good and clear title to the goods.",
      "A warranty that the goods are fit for a specific, unusual purpose requested by the buyer.",
      "A written guarantee of repair or replacement."
    ],
    correctAnswer: 0,
    explanation: {
      why: "The implied warranty of merchantability automatically applies to sales by merchants dealing in goods of that kind, guaranteeing the goods are fit for their ordinary, intended purpose.",
      whyIncorrect: "Warranty of title is separate. Fitness for a specific/unusual purpose is the 'Implied Warranty of Fitness for a Particular Purpose'. Written guarantees are 'Express Warranties'.",
      how: "Verify the seller is a merchant. The warranty applies automatically unless explicitly disclaimed.",
      when: "A consumer buys a lawnmower from a hardware store, and the blade flies off on the first use.",
      source: "UCC § 2-314"
    }
  },
  {
    id: 39,
    difficulty: "Hard",
    text: "Which entity structure requires the filing of 'Articles of Organization' with the state to be legally formed?",
    options: [
      "General Partnership",
      "C-Corporation",
      "Sole Proprietorship",
      "Limited Liability Company (LLC)"
    ],
    correctAnswer: 3,
    explanation: {
      why: "An LLC is formed by filing 'Articles of Organization' (or Certificate of Formation) with the Secretary of State.",
      whyIncorrect: "General partnerships and sole proprietorships require no state filing to form (they arise by default). Corporations file 'Articles of Incorporation', not Organization.",
      how: "Draft and file Articles of Organization and pay the state filing fee.",
      when: "Entrepreneurs register a new LLC.",
      source: "Uniform Limited Liability Company Act (ULLCA)"
    }
  },
  {
    id: 40,
    difficulty: "Hard",
    text: "In the context of secured transactions, what is a 'floating lien'?",
    options: [
      "A lien that moves geographically with a maritime vessel.",
      "A security interest in property that the debtor has not yet acquired or in debt that has not yet been incurred (after-acquired property and future advances).",
      "An unperfected security interest that floats between creditors.",
      "A lien attached to intangible assets like patents."
    ],
    correctAnswer: 1,
    explanation: {
      why: "A floating lien covers a shifting mass of collateral, typically inventory or accounts receivable. It automatically attaches to new after-acquired inventory and secures future advances without needing new paperwork.",
      whyIncorrect: "It refers to the shifting nature of the collateral pool, not boats. It is fully perfected. Intangibles can be collateral, but 'floating' specifically refers to the after-acquired/future advance mechanisms.",
      how: "Include an 'after-acquired property' clause in the security agreement.",
      when: "A bank finances a grocery store whose inventory changes daily.",
      source: "UCC § 9-204"
    }
  }
];
