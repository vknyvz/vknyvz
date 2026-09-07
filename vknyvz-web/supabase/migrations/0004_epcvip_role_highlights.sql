-- Per-role descriptions for the two concurrent EPCVIP titles (each position in
-- the positions jsonb now carries its own highlights, rendered as bullets under
-- that title), and the EPCVIP title becomes Lead Software Engineer.

update public.experience set positions = $$[
  {
    "title": "Director of Engineering",
    "company": "Fast Loan Advance",
    "logo": "/logos/fast-loan-advance.jpg",
    "highlights": [
      "Lead a 7-engineer team that builds and runs EPCVIP's lending funnel platforms, owning architecture, delivery, and the roadmap across Fast Loan Advance and partner brands.",
      "Pitched and proved replacing the legacy PHP funnels with a React platform: my POC lifted revenue 3-12% per funnel in A/B tests, and the executive board approved the migration.",
      "Delivered a partner-embeddable funnel product the company had wanted for years: proved it with a POC, then built it with my team, lifting revenue 5-7% and opening a new distribution channel.",
      "Architecting the next-generation white-label lending platform on that same product, so the company can launch new brands quickly, with regulatory compliance and automated quality gates built in.",
      "Delivered a company-wide A/B testing and feature-flag platform with my team, so every product can test ideas against revenue and roll out only the winners, without a deploy."
    ]
  },
  {
    "title": "Lead Software Engineer",
    "company": "EPCVIP",
    "highlights": [
      "Built the company's funnel engine from the ground up in React and TypeScript; it now runs hundreds of funnel variants across the company's lending brands.",
      "Architected and prototyped the embeddable funnel runtime, then guided the team that built it out: partners add one script tag and get a branded loan application on their own site.",
      "Act as lead developer across EPCVIP's other engineering teams: review code, set technical standards, and own release quality so fewer issues reach production.",
      "Built and own the delivery pipeline end to end: CI builds, QA and production deploys through automated pull requests with release notes, giving every release an audit trail."
    ]
  }
]$$::jsonb
where company = $$Fast Loan Advance$$ and title = $$Director of Engineering$$;
