import type { Question } from './r1_questions';

export const r4Questions: Question[] = [
  // MEDIUM (1-20)
  {
    id: 1,
    difficulty: "Medium",
    text: "Under Treasury Department Circular 230, which of the following is generally prohibited when practicing before the IRS?",
    options: [
      "Charging a contingent fee for preparing an original tax return",
      "Representing both spouses in an IRS examination of a joint return after obtaining informed written consent",
      "Relying in good faith without verification upon information furnished by the client",
      "Advertising tax preparation fees on local television"
    ],
    correctAnswer: 0,
    explanation: {
      why: "Circular 230 Section 10.27 strictly prohibits practitioners from charging a contingent fee for preparing an original tax return. (Contingent fees are permitted only for amended returns/refund claims challenging IRS examination determinations).",
      whyIncorrect: "Representing spouses with written conflict waivers is permitted. Good faith reliance on client data without audit is permitted by §10.34. Truthful advertising is explicitly allowed.",
      how: "Charge fixed or hourly fees for original tax compliance returns.",
      when: "Establishing fee arrangements with tax clients.",
      source: "Treas. Dept. Circular 230 §10.27"
    }
  },
  {
    id: 2,
    difficulty: "Medium",
    text: "According to AICPA Statements on Standards for Tax Services (SSTS No. 1), a member should not recommend a tax return position unless the member has a good-faith belief that the position:",
    options: [
      "Is guaranteed to be sustained if audited by the IRS",
      "Has at least a 'realistic possibility' of being sustained administratively or judicially on its merits",
      "Is supported by at least one private letter ruling issued to any taxpayer",
      "Has a 'frivolous' basis provided it is disclosed"
    ],
    correctAnswer: 1,
    explanation: {
      why: "SSTS No. 1 requires that a tax practitioner have a good-faith belief that a recommended tax return position has at least a 'realistic possibility' (historically ~33% chance) of being sustained on its merits, or a 'reasonable basis' (~20%) if explicitly disclosed.",
      whyIncorrect: "Guarantees are impossible. PLRs issued to other taxpayers cannot be cited as authoritative precedent. Frivolous positions (<10%) are strictly prohibited even with disclosure.",
      how: "Conduct tax research to verify statutory, regulatory, and judicial authority supporting the client's deduction.",
      when: "Preparing tax returns involving aggressive or gray-area deductions.",
      source: "AICPA SSTS No. 1"
    }
  },
  {
    id: 3,
    difficulty: "Medium",
    text: "What is the standard failure-to-file penalty imposed on a taxpayer who files their individual income tax return 3 months late without an extension?",
    options: [
      "0.5% of unpaid tax per month",
      "5% of unpaid tax per month (up to a maximum of 25%)",
      "20% flat accuracy-related penalty",
      "$435 flat penalty regardless of tax due"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Section 6651(a)(1), the failure-to-file penalty is 5% of the unpaid tax liability for each month (or fraction of a month) the return is late, capped at a maximum of 25% (5 months).",
      whyIncorrect: "0.5% per month is the failure-to-pay penalty. 20% applies to negligence or substantial understatement audits. Minimum flat dollar penalties apply only after 60 days late.",
      how: "Calculate 5% * unpaid tax * 3 months = 15% penalty assessment.",
      when: "Taxpayers miss the April 15 deadline without filing Form 4868.",
      source: "IRC §6651(a)(1)"
    }
  },
  {
    id: 4,
    difficulty: "Medium",
    text: "If a taxpayer fails to pay the taxes shown on their return by the due date, what is the standard failure-to-pay penalty rate?",
    options: [
      "0.5% of unpaid tax per month (up to 25%)",
      "5% of unpaid tax per month",
      "10% flat penalty",
      "Interest at the federal short-term rate plus 3%"
    ],
    correctAnswer: 0,
    explanation: {
      why: "Section 6651(a)(2) imposes a failure-to-pay penalty of 0.5% of the unpaid tax liability per month (or fraction thereof), up to a maximum cap of 25% (50 months).",
      whyIncorrect: "5% per month is failure-to-file. 10% is an early withdrawal penalty for IRAs. Short-term rate + 3% is statutory *interest*, which is charged separately on top of penalties.",
      how: "Multiply unpaid tax * 0.005 * months late.",
      when: "Taxpayer files return on time but cannot pay the balance due.",
      source: "IRC §6651(a)(2)"
    }
  },
  {
    id: 5,
    difficulty: "Medium",
    text: "When both the failure-to-file (5%) and failure-to-pay (0.5%) penalties apply in the same month, how are they calculated?",
    options: [
      "Both apply fully, totaling 5.5% per month",
      "The failure-to-file penalty is reduced by the failure-to-pay penalty, resulting in 4.5% failure-to-file and 0.5% failure-to-pay (total 5%)",
      "Only the failure-to-file penalty applies (5%)",
      "Only the failure-to-pay penalty applies (0.5%)"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Section 6651(c)(1), if both penalties apply in the same month, the 5% failure-to-file penalty is reduced by the 0.5% failure-to-pay penalty, capping the combined monthly penalty at exactly 5%.",
      whyIncorrect: "Stacking them to 5.5% violates statutory anti-stacking rules. Eliminating one entirely is incorrect.",
      how: "Assess 4.5% for filing late plus 0.5% for paying late = 5% total monthly charge.",
      when: "Taxpayer neither files nor pays on April 15.",
      source: "IRC §6651(c)(1)"
    }
  },
  {
    id: 6,
    difficulty: "Medium",
    text: "Under IRC Section 6694, what is the penalty imposed on a tax return preparer for an understatement of taxpayer liability due to an 'unreasonable position'?",
    options: [
      "$50 flat fee",
      "The greater of $1,000 or 50% of the income derived by the preparer for preparing the return",
      "The greater of $5,000 or 75% of income derived",
      "$10,000 criminal fine"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 6694(a) imposes a civil penalty on preparers for taking an unreasonable position equal to the greater of $1,000 or 50% of the tax preparation fees collected for that return.",
      whyIncorrect: "$50 applies to administrative failures (like not furnishing a copy). Greater of $5,000 or 75% applies to willful or reckless conduct under §6694(b). $10k criminal applies to tax fraud.",
      how: "IRS audits preparer and issues penalty assessment notice.",
      when: "Preparer deducts personal expenses as business deductions without substantial authority.",
      source: "IRC §6694(a)"
    }
  },
  {
    id: 7,
    difficulty: "Medium",
    text: "What is the general statutory period of limitations for the IRS to assess additional federal income taxes after a return is filed?",
    options: [
      "1 year",
      "3 years",
      "6 years",
      "7 years"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Section 6501(a), the general statute of limitations for IRS audit assessment is exactly 3 years from the later of the statutory due date or the date the return was actually filed.",
      whyIncorrect: "1 year is too short. 6 years applies to substantial omissions (>25% of gross income). 7 years is an old record-retention rule of thumb, not tax law.",
      how: "Count 3 years from April 15. Once expired, IRS cannot assess additional tax unless an exception applies.",
      when: "Taxpayer wonders how long to keep tax records under normal circumstances.",
      source: "IRC §6501(a)"
    }
  },
  {
    id: 8,
    difficulty: "Medium",
    text: "Under what circumstance does the IRS statute of limitations expand from 3 years to 6 years?",
    options: [
      "When the taxpayer claims a refund exceeding $10,000",
      "When the taxpayer omits from gross income an amount exceeding 25% of the gross income stated on the return",
      "When the return is prepared by a paid preparer",
      "When the taxpayer files an amended return"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 6501(e) expands the assessment window to 6 years if the taxpayer omits gross income that exceeds 25% of the gross income reported on the face of the return.",
      whyIncorrect: "Refund claims, paid preparers, and amended returns do not automatically double the statute of limitations.",
      how: "Verify omitted income / reported gross income. If > 0.25, IRS has 6 full years to audit.",
      when: "Taxpayer forgets to report a large Form 1099 stock sale or side business income.",
      source: "IRC §6501(e)(1)(A)"
    }
  },
  {
    id: 9,
    difficulty: "Medium",
    text: "Under what condition is the IRS statute of limitations completely unlimited (remains open indefinitely)?",
    options: [
      "When the taxpayer files a fraudulent return with intent to evade tax, or fails to file a return entirely",
      "When the taxpayer owes more than $100,000 in tax",
      "When the taxpayer moves to a foreign country",
      "When the taxpayer undergoes a bankruptcy proceeding"
    ],
    correctAnswer: 0,
    explanation: {
      why: "Under Section 6501(c), there is NO statute of limitations if a false/fraudulent return is filed with intent to evade tax, if a willful attempt to defeat tax occurs, or if no return is filed at all.",
      whyIncorrect: "High tax liability, expat living, or bankruptcy do not permanently suspend the audit window if a truthful return was filed.",
      how: "IRS Criminal Investigation or examination can assess tax 20+ years later for unfiled or fraudulent years.",
      when: "Tax evaders fail to file returns for decades.",
      source: "IRC §6501(c)"
    }
  },
  {
    id: 10,
    difficulty: "Medium",
    text: "Which of the following federal courts allows a taxpayer to litigate a tax dispute WITHOUT first paying the disputed tax assessment?",
    options: [
      "U.S. District Court",
      "U.S. Court of Federal Claims",
      "U.S. Tax Court",
      "U.S. Court of Appeals"
    ],
    correctAnswer: 2,
    explanation: {
      why: "The U.S. Tax Court is the ONLY prepayment judicial forum. Taxpayers can file a petition in Tax Court within 90 days of receiving a notice of deficiency without paying the tax first.",
      whyIncorrect: "District Court and Court of Federal Claims are 'refund forums'—the taxpayer must pay the full tax assessment first, file a refund claim, and then sue for a refund. Court of Appeals hears appellate reviews.",
      how: "File petition with U.S. Tax Court in Washington D.C. within 90 days of statutory notice.",
      when: "Taxpayer receives a 90-day deficiency notice and cannot afford to pay the IRS proposed assessment.",
      source: "IRC §6213(a)"
    }
  },
  {
    id: 11,
    difficulty: "Medium",
    text: "What is a '30-day letter' in the IRS examination process?",
    options: [
      "A statutory notice of deficiency giving 30 days to file in Tax Court",
      "A preliminary notice of proposed audit adjustments giving the taxpayer 30 days to request an administrative appeal with the IRS Independent Office of Appeals",
      "A final demand for payment before wage garnishment",
      "A notice that a tax refund will be issued in 30 days"
    ],
    correctAnswer: 1,
    explanation: {
      why: "The 30-day letter (Revenue Agent's Report) notifies the taxpayer of proposed audit adjustments and grants 30 days to agree or submit a formal written protest to request an IRS Appeals conference.",
      whyIncorrect: "Statutory deficiency notices give 90 days (90-day letter). Wage garnishment final notices are Final Notices of Intent to Levy. It is not a refund notice.",
      how: "Sign agreement or draft written administrative protest letter within 30 days.",
      when: "Local IRS field or office audit concludes with disputed tax increases.",
      source: "Treas. Reg. §601.105(d)"
    }
  },
  {
    id: 12,
    difficulty: "Medium",
    text: "What is the statutory '90-day letter' issued by the IRS?",
    options: [
      "Statutory Notice of Deficiency allowing the taxpayer 90 days to file a petition with the U.S. Tax Court",
      "An automatic 90-day extension to pay taxes",
      "A notice giving 90 days to submit missing receipts to an auditor",
      "A notice of federal tax lien filing"
    ],
    correctAnswer: 0,
    explanation: {
      why: "The 90-day letter is the formal Statutory Notice of Deficiency (§6212). It is the taxpayer's 'ticket to Tax Court,' granting exactly 90 days (150 if outside US) to petition Tax Court before the IRS can formally assess tax.",
      whyIncorrect: "It is a jurisdictional litigation notice, not a payment extension, receipt deadline, or lien notice.",
      how: "File Tax Court petition before Day 90 expires. IRS is legally barred from collecting during this 90-day window.",
      when: "Taxpayer ignores 30-day letter or fails to resolve dispute at IRS Appeals.",
      source: "IRC §6212; IRC §6213"
    }
  },
  {
    id: 13,
    difficulty: "Medium",
    text: "Under SSTS No. 3, what is a tax practitioner's obligation regarding verifying supporting data provided by a client?",
    options: [
      "Practitioner must audit all receipts and bank statements before signing return",
      "Practitioner may rely in good faith without verification upon information furnished by the client, unless the information appears incorrect, incomplete, or inconsistent",
      "Practitioner must send written confirmations to third-party vendors",
      "Practitioner cannot rely on client estimates under any circumstances"
    ],
    correctAnswer: 1,
    explanation: {
      why: "SSTS No. 3 explicitly permits practitioners to rely in good faith on client data without formal audit verification, provided the data does not appear obviously false, incomplete, or inconsistent.",
      whyIncorrect: "Auditing client records is not required for tax compliance. Vendor confirmations apply to financial statement audits. SSTS No. 4 permits reasonable estimates.",
      how: "Accept client summary organizers, but ask probing questions if numbers look unrealistic.",
      when: "Preparing annual individual or corporate tax returns.",
      source: "AICPA SSTS No. 3"
    }
  },
  {
    id: 14,
    difficulty: "Medium",
    text: "Which of the following represents the highest authoritative weight in the hierarchy of federal tax law?",
    options: [
      "IRS Revenue Rulings",
      "Treasury Regulations",
      "Internal Revenue Code (IRC)",
      "U.S. Tax Court Memo Decisions"
    ],
    correctAnswer: 2,
    explanation: {
      why: "The Internal Revenue Code (Title 26 of U.S. Code) enacted by Congress is supreme statutory law. All administrative regulations, rulings, and judicial decisions interpret the Code.",
      whyIncorrect: "Treasury Regulations are administrative interpretations (second highest). Rev Rulings are IRS official guidance (third tier). Memo decisions resolve factual disputes.",
      how: "Cite IRC sections as primary statutory authority in tax protests.",
      when: "Resolving conflicts between IRS guidance and statutory tax law.",
      source: "U.S. Constitution Article I; U.S.C. Title 26"
    }
  },
  {
    id: 15,
    difficulty: "Medium",
    text: "What is the penalty imposed on a tax return preparer for willfully endorsing or negotiating an IRS tax refund check issued to a client?",
    options: [
      "$50",
      "$600 per check (indexed for inflation)",
      "$5,000",
      "No penalty if deposited into client trust account"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Section 6695(f), a tax preparer who endorses or negotiates (cashes) an IRS refund check issued to a taxpayer faces a strict civil penalty of $600 per check ($600 for 2024).",
      whyIncorrect: "Preparers are strictly forbidden from cashing client refund checks to prevent preparer theft and fraud. Trust accounts do not exempt this rule.",
      how: "IRS issues penalty assessment directly against preparer.",
      when: "Unethical preparers have client refund checks mailed to their office and cash them.",
      source: "IRC §6695(f)"
    }
  },
  {
    id: 16,
    difficulty: "Medium",
    text: "Under SSTS No. 6, if a practitioner discovers a material error in a client's previously filed tax return during an ongoing representation, what should the practitioner do FIRST?",
    options: [
      "Immediately notify the IRS Criminal Investigation division",
      "Promptly inform the client of the error and recommend the corrective measures to be taken",
      "Amend the return without informing the client",
      "Resign immediately from all client engagements"
    ],
    correctAnswer: 1,
    explanation: {
      why: "SSTS No. 6 mandates that the practitioner promptly inform the client of the error and advise them of the potential consequences and recommended corrective action (e.g., filing Form 1040-X).",
      whyIncorrect: "Practitioners are strictly prohibited by confidentiality rules (§7216) from notifying the IRS without client consent. Amending without signing authority is illegal. Immediate resignation is not required unless client refuses to correct and demands illegal future filing.",
      how: "Draft written letter advising client to file an amended tax return and pay tax due.",
      when: "Discovering prior year omitted W-2 or inflated deductions.",
      source: "AICPA SSTS No. 6"
    }
  },
  {
    id: 17,
    difficulty: "Medium",
    text: "What is the standard civil accuracy-related penalty imposed on a taxpayer for 'substantial understatement of income tax'?",
    options: [
      "5% per month",
      "20% of the underpaid tax liability",
      "50% of underpaid tax",
      "75% of underpaid tax"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 6662 imposes a flat 20% accuracy-related penalty on the portion of tax underpayment attributable to negligence, disregard of rules, or substantial understatement.",
      whyIncorrect: "5% per mo is failure-to-file. 50% was an old historical fraud penalty. 75% is the current civil tax fraud penalty (§6663).",
      how: "Assess 20% * tax deficiency on audit adjustments.",
      when: "Taxpayer understates tax by the greater of 10% of correct tax or $5,000 ($10k for C-Corps).",
      source: "IRC §6662(a)"
    }
  },
  {
    id: 18,
    difficulty: "Medium",
    text: "Which of the following courts requires a tax trial to be heard before a jury?",
    options: [
      "U.S. Tax Court",
      "U.S. District Court",
      "U.S. Court of Federal Claims",
      "U.S. Supreme Court"
    ],
    correctAnswer: 1,
    explanation: {
      why: "The U.S. District Court is the ONLY federal tax litigation forum where a taxpayer can request a jury trial. (Tax Court and Court of Federal Claims trials are heard strictly by judges).",
      whyIncorrect: "Tax Court judges are tax specialists (no juries). Court of Federal Claims hears monetary claims against US government before judges. Supreme Court hears appellate appeals.",
      how: "Pay tax assessment, file refund claim, and file suit in local U.S. District Court demanding jury trial.",
      when: "Taxpayer believes local citizens on a jury will be more sympathetic than a strict tax judge.",
      source: "28 U.S.C. §1346; U.S. Constitution 7th Amendment"
    }
  },
  {
    id: 19,
    difficulty: "Medium",
    text: "Under Circular 230, how long must a tax preparer retain a copy of a completed tax return (or a list of taxpayers for whom returns were prepared)?",
    options: [
      "1 year",
      "3 years",
      "5 years",
      "7 years"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 6107(b) and Circular 230 mandate that tax preparers retain a completed copy of each return (or a taxpayer list with ID numbers and tax years) for exactly 3 years after the return period.",
      whyIncorrect: "3 years matches the standard IRS assessment statute of limitations. Failure to retain triggers §6695(d) penalties ($50 per return).",
      how: "Store secure encrypted digital PDF copies of client returns for 36 months.",
      when: "Managing tax office record retention policies.",
      source: "IRC §6107(b)"
    }
  },
  {
    id: 20,
    difficulty: "Medium",
    text: "What is the civil tax penalty rate imposed on a taxpayer if the IRS proves that an underpayment of tax was due to civil tax FRAUD?",
    options: [
      "20%",
      "25%",
      "50%",
      "75% of the portion of underpayment attributable to fraud"
    ],
    correctAnswer: 3,
    explanation: {
      why: "Section 6663 imposes a massive civil penalty equal to exactly 75% of the tax underpayment attributable to fraudulent intent to evade taxation.",
      whyIncorrect: "20% is regular negligence/accuracy penalty. 25% is max failure-to-file penalty. 75% reflects the severe civil punishment for intentional tax evasion.",
      how: "Assess 75% penalty assessment on top of tax deficiency and statutory interest.",
      when: "Taxpayer maintains double books, conceals bank accounts, or alters 1099 documents.",
      source: "IRC §6663(a)"
    }
  },

  // HARD (21-40)
  {
    id: 21,
    difficulty: "Hard",
    text: "Under the 'Golsen Rule' followed by the U.S. Tax Court, how does the Tax Court decide legal issues where regional federal Circuit Courts of Appeal have conflicting precedents?",
    options: [
      "Tax Court applies its own uniform nationwide precedent regardless of Circuit Court rulings",
      "Tax Court is bound to follow the authoritative precedent of the specific federal Circuit Court of Appeals to which the taxpayer's case would be appealed",
      "Tax Court must rule in favor of the IRS",
      "Tax Court must refer the case directly to the Supreme Court"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Golsen vs CIR (1970), the U.S. Tax Court agreed that to avoid futile reversals, it will follow the established legal precedent of the specific federal Circuit Court of Appeals having geographic jurisdiction over that particular taxpayer.",
      whyIncorrect: "Prior to 1970, Tax Court applied nationwide uniformity (ignoring circuits), but Golsen ended this. It does not force IRS bias or Supreme Court referrals.",
      how: "Identify taxpayer's state of residence -> identify federal Circuit (e.g., 9th Circuit for California) -> apply 9th Circuit case law.",
      when: "Litigating tax issues where circuit courts disagree (circuit splits).",
      source: "Golsen v. CIR, 54 T.C. 742 (1970)"
    }
  },
  {
    id: 22,
    difficulty: "Hard",
    text: "Under IRC Section 6694(b), what is the preparer penalty for an understatement of tax liability caused by 'willful or reckless conduct' (e.g., intentionally ignoring tax law)?",
    options: [
      "$1,000 per return",
      "The greater of $5,000 or 75% of the income derived by the preparer for preparing the return",
      "$100,000 fine and automatic disbarment",
      "20% accuracy penalty"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 6694(b) punishes willful attempts to understate tax or reckless/intentional disregard of rules with a severe civil penalty equal to the greater of $5,000 or 75% of tax preparation fees collected.",
      whyIncorrect: "Greater of $1k or 50% applies to unreasonable positions under §6694(a). $100k fine applies to criminal felony tax evasion. 20% applies to taxpayers.",
      how: "IRS Office of Professional Responsibility audits preparer and issues §6694(b) civil penalties.",
      when: "Preparer fabricates fake W-2 withholding or invents fictitious dependents for clients.",
      source: "IRC §6694(b)"
    }
  },
  {
    id: 23,
    difficulty: "Hard",
    text: "Circular 230 Section 10.37 governs written tax advice. Which of the following is NOT a requirement when providing authoritative written tax advice to a client?",
    options: [
      "Base the advice on reasonable factual and legal assumptions",
      "Consider all relevant facts that the practitioner knows or reasonably should know",
      "Practitioner must include a mandatory boilerplate disclaimer stating the advice cannot be used to avoid IRS penalties",
      "Must not rely upon representations of the taxpayer if reliance would be unreasonable"
    ],
    correctAnswer: 2,
    explanation: {
      why: "In 2014, the IRS eliminated the old 'Covered Opinion' rules that caused law and CPA firms to append mandatory boilerplate Circular 230 disclaimers to every email. Such disclaimers are no longer required or legally effective.",
      whyIncorrect: "Reasonable assumptions, considering known facts, and avoiding unreasonable reliance are core mandatory ethical standards under current §10.37.",
      how: "Provide clear, tailored written advice based on thorough research without fake boilerplate footers.",
      when: "Drafting formal tax memo opinions for corporate transactions.",
      source: "Treas. Dept. Circular 230 §10.37"
    }
  },
  {
    id: 24,
    difficulty: "Hard",
    text: "For an individual taxpayer, when is a tax understatement considered 'substantial' under IRC Section 6662, triggering a 20% accuracy penalty?",
    options: [
      "When the understatement exceeds $1,000",
      "When the understatement exceeds the GREATER of 10% of the correct tax required to be shown on the return OR $5,000",
      "When omitted gross income exceeds 25%",
      "When tax liability is underpaid by >50%"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 6662(d)(1)(A) defines substantial understatement for individuals as an understatement exceeding the greater of: (1) 10% of the correct tax liability, or (2) $5,000. (For C-Corps, it's greater of 10% or $10,000).",
      whyIncorrect: "$1,000 is too low. >25% gross income triggers the 6-year statute of limitations (§6501), not the accuracy penalty definition.",
      how: "Correct Tax ($50k) vs Reported Tax ($40k) = $10k understatement. 10% of $50k = $5k. Greater of $5k or $5k is $5,000. Since $10k > $5k, 20% penalty applies.",
      when: "IRS audit disallows aggressive deductions.",
      source: "IRC §6662(d)(1)(A)"
    }
  },
  {
    id: 25,
    difficulty: "Hard",
    text: "A taxpayer files their 2024 tax return on March 1, 2025. The return omitted $40,000 of gross income (reported gross income was $100,000). When does the IRS statute of limitations expire?",
    options: [
      "March 1, 2028 (3 years from filing)",
      "April 15, 2028 (3 years from due date)",
      "March 1, 2031 (6 years from filing)",
      "April 15, 2031 (6 years from due date)"
    ],
    correctAnswer: 3,
    explanation: {
      why: "Omission = $40k/$100k = 40% (>25% test met), expanding statute to 6 years. Under Section 6501(b)(1), returns filed *early* before the April 15 due date are legally deemed filed on April 15. Therefore, 6 years from April 15, 2025 = April 15, 2031.",
      whyIncorrect: "3-year window doesn't apply due to >25% omission. Measuring from early actual filing date (March 1) violates statutory early-filing rules.",
      how: "Deemed Filing Date = April 15, 2025. Add 6 years = April 15, 2031.",
      when: "Auditing early filers with substantial omissions.",
      source: "IRC §6501(b)(1); IRC §6501(e)"
    }
  },
  {
    id: 26,
    difficulty: "Hard",
    text: "Under Circular 230 Section 10.29, a practitioner may represent clients with a conflict of interest IF all affected clients give informed written consent. How soon must this written consent be obtained?",
    options: [
      "Within 30 days after the conflict is identified",
      "Within 30 days after the representation begins",
      "Within a reasonable time not to exceed 30 days from the date oral consent is given",
      "Prior to beginning the representation under all circumstances"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Section 10.29(b)(3) allows representation if the practitioner obtains informed written consent from each affected client within a reasonable period, but strictly not later than 30 days after the conflict is identified / oral consent given.",
      whyIncorrect: "While prior written consent is best practice, Circular 230 explicitly grants a 30-day grace window to formalize written confirmation after oral consent.",
      how: "Have clients sign formal conflict waiver agreement within 30 days.",
      when: "Representing business partners in a partnership dispute before IRS.",
      source: "Treas. Dept. Circular 230 §10.29(b)(3)"
    }
  },
  {
    id: 27,
    difficulty: "Hard",
    text: "Which of the following describes the 'Mailbox Rule' under IRC Section 7502?",
    options: [
      "Tax returns are deemed filed when received at the IRS service center",
      "Timely mailing via U.S. Postal Service postmark on or before the statutory due date is legally deemed to be timely filing, even if received by the IRS days later",
      "Electronic filing is mandatory for all tax preparers",
      "IRS audit notices are deemed received 3 days after mailing"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 7502 establishes that if a tax return or Tax Court petition is properly addressed, stamped, and mailed via USPS (or designated private delivery service like FedEx/UPS) with a postmark on or before the due date, the postmark date is legally deemed the filing date.",
      whyIncorrect: "Physical receipt was the common-law rule before §7502 was enacted to protect taxpayers from postal delays.",
      how: "Send tax documents via USPS Certified Mail with Return Receipt Requested to prove postmark date.",
      when: "Mailing paper returns or Tax Court petitions on April 15.",
      source: "IRC §7502(a)"
    }
  },
  {
    id: 28,
    difficulty: "Hard",
    text: "What is the authoritative weight and precedential value of an IRS Private Letter Ruling (PLR)?",
    options: [
      "Binding supreme precedent for all taxpayers nationwide",
      "Binding administrative precedent equal to a Revenue Ruling",
      "Authoritative guidance strictly binding on the IRS ONLY with respect to the specific requesting taxpayer; cannot be cited as legal precedent by other taxpayers",
      "No authoritative weight even for the requesting taxpayer"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Under Section 6110(k)(3), written determinations like Private Letter Rulings (PLRs) and Technical Advice Memoranda (TAMs) are strictly binding between the IRS and the requesting taxpayer. They explicitly cannot be used or cited as authoritative legal precedent by other taxpayers.",
      whyIncorrect: "Only Revenue Rulings and Regulations provide published precedential guidance for the general public.",
      how: "Pay IRS user fee ($30k+) to request customized PLR for complex corporate mergers.",
      when: "Taxpayers want 100% tax certainty before executing massive transactions.",
      source: "IRC §6110(k)(3)"
    }
  },
  {
    id: 29,
    difficulty: "Hard",
    text: "Under SSTS No. 7, what is a tax practitioner's responsibility when representing a client in an administrative proceeding (e.g., IRS audit) involving a return position where the IRS previously disallowed that exact position in a prior year's audit?",
    options: [
      "Practitioner is strictly forbidden from recommending the position again",
      "Practitioner may recommend the position again IF the member has a good-faith belief the position satisfies SSTS No. 1 standards (e.g., realistic possibility or reasonable basis with disclosure)",
      "Practitioner must concede the issue immediately to Appeals",
      "Must obtain a Private Letter Ruling first"
    ],
    correctAnswer: 1,
    explanation: {
      why: "SSTS No. 7 explicitly permits a practitioner to recommend a tax return position that was previously disallowed in an IRS audit or court proceeding, provided the taxpayer is not bound by a formal closing agreement and the position meets SSTS No. 1 research merit standards.",
      whyIncorrect: "Prior administrative settlements or compromises do not permanently bind future tax years unless formal multi-year closing agreements (§7121) were executed.",
      how: "Evaluate current tax authorities. If law supports deduction, claim it on current return.",
      when: "IRS auditor disallowed travel expenses last year due to missing receipts, but client kept perfect receipts this year.",
      source: "AICPA SSTS No. 7"
    }
  },
  {
    id: 30,
    difficulty: "Hard",
    text: "Tax Preparer Penalty Stacking: If a preparer prepares a return taking an unreasonable position (§6694(a) penalty $1,000) AND fails to furnish a completed copy of the return to the taxpayer (§6695(a) penalty $50), how are penalties assessed?",
    options: [
      "Only the larger penalty applies ($1,000)",
      "Both civil penalties apply independently, totaling $1,050",
      "Penalties offset each other",
      "Triggers criminal indictment"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under IRS penalty assessment rules, understatement penalties (§6694) and compliance/administrative procedural penalties (§6695) address completely distinct statutory violations and are assessed cumulatively/independently.",
      whyIncorrect: "Anti-stacking rules apply between §6694(a) unreasonable position and §6694(b) willful conduct (cannot double assess same understatement), but NOT between understatement and administrative compliance failures.",
      how: "IRS issues civil penalty assessment notice totaling $1,050.",
      when: "Preparer cuts corners on both tax law research and office administrative procedures.",
      source: "IRC §6694; IRC §6695"
    }
  },
  {
    id: 31,
    difficulty: "Hard",
    text: "A taxpayer receives a Statutory Notice of Deficiency (90-day letter) while living abroad in Paris, France. How many days does the taxpayer have to file a petition with the U.S. Tax Court?",
    options: [
      "30 days",
      "90 days",
      "150 days",
      "180 days"
    ],
    correctAnswer: 2,
    explanation: {
      why: "Section 6213(a) explicitly expands the Tax Court petition deadline from 90 days to exactly 150 days if the statutory notice is addressed to a person outside the United States.",
      whyIncorrect: "90 days applies strictly to domestic U.S. residents. International mail and expat communication require the extended 150-day statutory window.",
      how: "File Tax Court petition before Day 150 expires.",
      when: "U.S. expats living abroad receive IRS audit deficiency notices.",
      source: "IRC §6213(a)"
    }
  },
  {
    id: 32,
    difficulty: "Hard",
    text: "Under IRC Section 6662, how can a taxpayer generally avoid the 20% accuracy-related penalty for a 'substantial understatement' of tax?",
    options: [
      "By proving they hired a CPA",
      "By showing there was 'Substantial Authority' (~40% weight) supporting the tax treatment, OR by having a 'Reasonable Basis' (~20%) AND adequately disclosing the item on Form 8275",
      "By paying the tax within 10 days of audit",
      "Accuracy penalties cannot be avoided under any circumstances"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 6662(d)(2)(B) provides statutory penalty relief if: (1) the tax treatment is supported by Substantial Authority, or (2) the item is adequately disclosed on Form 8275/8275-R and has at least a Reasonable Basis.",
      whyIncorrect: "Hiring a CPA is not automatic protection unless formal 'reasonable cause and good faith reliance' (§6664) is proven. Prompt payment after audit does not erase penalties.",
      how: "Attach Form 8275 Disclosure Statement to original return for aggressive tax positions.",
      when: "Taxpayers take legitimate but controversial tax deductions.",
      source: "IRC §6662(d)(2)(B)"
    }
  },
  {
    id: 33,
    difficulty: "Hard",
    text: "What is the 'Reasonable Cause and Good Faith' defense under IRC Section 6664?",
    options: [
      "A complete defense that eliminates accuracy-related penalties (§6662) and fraud penalties (§6663) if the taxpayer proves they acted with reasonable cause and in good faith",
      "A defense available only to corporate taxpayers",
      "A rule allowing preparers to avoid signing returns",
      "An automatic waiver for first-time filers"
    ],
    correctAnswer: 0,
    explanation: {
      why: "Section 6664(c) provides an overriding statutory exception: no penalty shall be imposed under §6662 (accuracy) or §6663 (fraud) if it is shown that there was reasonable cause for the underpayment and the taxpayer acted in good faith.",
      whyIncorrect: "It applies to all taxpayers (individuals and entities). Classic proof includes honest reliance on competent, fully informed tax advisors or severe complex medical/disaster emergencies.",
      how: "Submit formal penalty abatement request citing §6664(c) and attaching advisor engagement letters.",
      when: "Taxpayer relied completely on a reputable CPA who made a complex technical error.",
      source: "IRC §6664(c)(1)"
    }
  },
  {
    id: 34,
    difficulty: "Hard",
    text: "Under Circular 230 Section 10.51, which of the following constitutes 'incompetence and disreputable conduct' that can result in suspension or disbarment from IRS practice?",
    options: [
      "Conviction of any criminal offense under federal tax law, or any felony involving dishonesty or breach of trust",
      "Giving false or misleading information to the Treasury Department or IRS",
      "Willfully failing to file one's own personal federal tax return",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: {
      why: "Section 10.51 enumerates disreputable conduct justifying IRS disbarment, including tax felony convictions, lying to IRS investigators, misappropriating client funds, and willfully unfiled personal tax returns.",
      whyIncorrect: "All listed items are severe ethical violations under Circular 230.",
      how: "IRS Office of Professional Responsibility (OPR) investigates practitioner and initiates administrative trial before Administrative Law Judge (ALJ).",
      when: "Tax CPAs or Enrolled Agents commit tax crimes or ethical breaches.",
      source: "Treas. Dept. Circular 230 §10.51"
    }
  },
  {
    id: 35,
    difficulty: "Hard",
    text: "What is a 'Technical Advice Memorandum' (TAM) issued by the IRS?",
    options: [
      "Public regulations binding on all taxpayers",
      "Authoritative written guidance issued by the IRS National Office upon request of an IRS examination or appeals officer during an ongoing audit to resolve complex technical tax issues",
      "A legal brief filed in Supreme Court",
      "An internal IRS training manual"
    ],
    correctAnswer: 1,
    explanation: {
      why: "TAMs are formal technical guidance issued by the IRS National Office at the request of IRS field auditors or Appeals officers to ensure uniform interpretation of tax law during difficult audits.",
      whyIncorrect: "Like PLRs, TAMs are strictly binding only on that specific audit taxpayer and cannot be cited as authoritative public legal precedent by others (§6110).",
      how: "IRS field agent requests National Office technical review during corporate audit.",
      when: "Auditor and taxpayer CPA hit gridlock on unprecedented tax accounting interpretations.",
      source: "Treas. Reg. §601.105(b)(5)"
    }
  },
  {
    id: 36,
    difficulty: "Hard",
    text: "Under SSTS No. 4, when may a tax practitioner prepare a tax return using estimates provided by the taxpayer?",
    options: [
      "Never; estimates violate tax compliance rules",
      "Only when exact data cannot be obtained and the estimates are reasonable under the facts and circumstances of the case",
      "Anytime to save tax preparation time",
      "Estimates are permitted only for charitable deductions"
    ],
    correctAnswer: 1,
    explanation: {
      why: "SSTS No. 4 permits the use of reasonable estimates if exact records are unavailable (e.g., records destroyed in fire, or pending K-1s near filing deadline), provided the estimates do not appear unreasonable.",
      whyIncorrect: "While exact data is required when feasible, strict prohibition ignores real-world disaster/emergency realities. Estimates cannot be used routinely just to save time.",
      how: "Present estimated numbers on return without presenting them as exact facts.",
      when: "Client's warehouse flooded right before tax filing deadline.",
      source: "AICPA SSTS No. 4"
    }
  },
  {
    id: 37,
    difficulty: "Hard",
    text: "Statute of Limitations on IRS Refund Claims: Taxpayer files 2021 tax return on April 15, 2022, paying $10,000 tax. On June 1, 2024, IRS audits and assesses $4,000 additional tax, which taxpayer pays on July 1, 2024. What is the latest date the taxpayer can file Form 1040-X claiming a refund of the $4,000 audit payment?",
    options: [
      "April 15, 2025 (3 years from original return filing)",
      "July 1, 2026 (2 years from payment of the tax)",
      "June 1, 2027",
      "Refund claims are barred once audit concludes"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Under Section 6511(a), a refund claim must be filed within the LATER of: (1) 3 years from the time the return was filed (April 15, 2025), OR (2) 2 years from the time the tax was paid (July 1, 2026). Later date is July 1, 2026.",
      whyIncorrect: "Measuring strictly 3 years from original filing (April 15, 2025) would unfairly bar refund claims for audit deficiencies paid late in life. The 2-year payment rule protects audit payments.",
      how: "File Form 1040-X on or before July 1, 2026. Refund ceiling is limited to tax paid during that 2-year window ($4,000).",
      when: "Taxpayer pays audit deficiency assessment, then discovers IRS auditor made a legal error.",
      source: "IRC §6511(a)"
    }
  },
  {
    id: 38,
    difficulty: "Hard",
    text: "Which of the following describes the IRS 'Offer in Compromise' (OIC) program under IRC Section 7122?",
    options: [
      "An agreement where IRS settles tax liability for less than full balance due based on Doubt as to Collectibility, Doubt as to Liability, or Effective Tax Administration",
      "An automatic 10% tax discount for early payment",
      "A bankruptcy filing",
      "An agreement to extend the statute of limitations"
    ],
    correctAnswer: 0,
    explanation: {
      why: "Section 7122 authorizes the IRS to compromise/settle tax debts for less than owed if there is Doubt as to Collectibility (assets/income don't cover debt), Doubt as to Liability (legitimate dispute on tax owed), or Effective Tax Administration (severe hardship).",
      whyIncorrect: "It is an administrative settlement program, not a discount, bankruptcy, or statute extension.",
      how: "Submit Form 656 and Form 433-A (financial statement) proving 'Reasonable Collection Potential' (RCP).",
      when: "Destitute taxpayers owe massive tax balances they can never repay.",
      source: "IRC §7122; Treas. Reg. §301.7122-1"
    }
  },
  {
    id: 39,
    difficulty: "Hard",
    text: "Under Circular 230 Section 10.28, if a client terminates a CPA and demands the return of all client records to prepare their own return, but owes the CPA $5,000 in unpaid accounting fees, what must the CPA do?",
    options: [
      "Retain all records until fees are paid in full under CPA lien rules",
      "Promptly return all client records necessary for the client to comply with federal tax obligations, regardless of fee disputes (though state lien laws may permit withholding specific preparer work product)",
      "Destroy the records",
      "Send records directly to IRS audit division"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 10.28 strictly requires practitioners to promptly return all original client records (W-2s, bank statements, deeds) needed for tax compliance upon request. Withholding original client documents to enforce fee payment is an ethical violation.",
      whyIncorrect: "While state CPA lien laws may allow holding proprietary CPA work papers/schedules created by the firm, original client records MUST be surrendered.",
      how: "Hand over client original tax organizer records promptly upon written termination.",
      when: "Acrimonious client-CPA fee disputes.",
      source: "Treas. Dept. Circular 230 §10.28"
    }
  },
  {
    id: 40,
    difficulty: "Hard",
    text: "What is a 'Statutory Closing Agreement' under IRC Section 7121?",
    options: [
      "A preliminary audit report",
      "A final, legally conclusive written agreement entered into between the IRS and a taxpayer to permanently settle any tax liability or dispute for a specific tax year or transaction",
      "A mortgage closing statement",
      "An annual tax return submission"
    ],
    correctAnswer: 1,
    explanation: {
      why: "Section 7121 authorizes conclusive closing agreements (Form 866 / Form 906). Once executed and approved, closing agreements are final and cannot be reopened or annulled by either the IRS or taxpayer, even if laws later change, except for fraud or misrepresentation.",
      whyIncorrect: "It is the highest, most permanent administrative tax settlement contract available.",
      how: "Execute Form 906 during complex multi-million dollar audit settlements.",
      when: "Corporate taxpayers demand permanent finality on controversial tax accounting methods.",
      source: "IRC §7121"
    }
  }
];
