#!/usr/bin/env python3
"""
Final batch: Analytics, Leadership, and Performance rapid-fire questions
"""

import os
import re

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[-\s]+', '-', text)
    return text[:50]

def create_mdx_file(directory, filename, question, answer, tags, difficulty="senior"):
    slug_id = f"q-{slugify(directory.split('/')[-1])}-{slugify(filename)}"
    
    content = f"""---
id: "{slug_id}"
title: "{question}"
difficulty: "{difficulty}"
quickAnswer: "{answer}"
tags: {tags}
---

# Quick Answer

{answer}
"""
    
    filepath = os.path.join(directory, f"{filename}.mdx")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"✓ {filename}")

base_path = "/Users/nitinsingh/Downloads/2026-projects/SeniorFrontend.dev/content/questions"

# Analytics & Personalization (20)
print("\n📊 Analytics & Personalization...")
analytics_dir = os.path.join(base_path, "analytics")
os.makedirs(analytics_dir, exist_ok=True)

analytics_questions = [
    ("ga4-data-model", "GA4 ka data model?", "Event-based. Flexible but strict naming chahiye. Structure important.", '["analytics", "ga4", "rapid-fire"]'),
    ("page-views", "Page views kab fire karte ho?", "SPA route change pe. SSR hydration ke baad. Duplicate avoid.", '["analytics", "tracking", "rapid-fire"]'),
    ("duplicate-events", "Duplicate events ka cause?", "Re-renders. Wrong lifecycle usage. Missing guards.", '["analytics", "debugging", "rapid-fire"]'),
    ("event-naming", "Event naming best practice?", "Consistent aur meaningful. Snake_case avoid. Readable reports.", '["analytics", "best-practices", "rapid-fire"]'),
    ("what-not-track", "Kya track nahi karna chahiye?", "Noise interactions. Unclear purpose events. Data clutter.", '["analytics", "best-practices", "rapid-fire"]'),
    ("consent-management", "Consent management ka role?", "Privacy compliance. Trust maintain hota hai. Tracking conditional hoti hai.", '["analytics", "privacy", "rapid-fire"]'),
    ("ssr-analytics", "SSR analytics issue?", "Double firing risk. Client-only trigger required. Careful handling.", '["analytics", "ssr", "rapid-fire"]'),
    ("ga4-debug", "GA4 debug kaise karte ho?", "DebugView. Network requests. Real-time reports.", '["analytics", "debugging", "rapid-fire"]'),
    ("personalization-risk", "Personalization ka risk?", "Wrong content wrong user. Trust loss. Fallback required.", '["analytics", "personalization", "rapid-fire"]'),
    ("ab-testing", "A/B testing consistency kaise?", "Sticky variants. Same session behavior. SSR + CSR sync.", '["analytics", "ab-testing", "rapid-fire"]'),
    ("analytics-logic", "Analytics logic kaha rakho?", "Centralized layer. UI loosely coupled. Refactor safe.", '["analytics", "architecture", "rapid-fire"]'),
    ("analytics-performance", "Analytics performance impact?", "Blocking scripts avoid. Async load. Batch events.", '["analytics", "performance", "rapid-fire"]'),
    ("cms-analytics", "CMS analytics challenge?", "Dynamic structure. Standardization required. Content-type based tracking.", '["analytics", "cms", "rapid-fire"]'),
    ("analytics-validate", "Analytics validate kaise?", "Real-time check. Release ke baad verify. Assume nahi karte.", '["analytics", "validation", "rapid-fire"]'),
    ("tracking-refactor", "Tracking refactor ka risk?", "Silent breaks. No visible errors. Verification zaroori.", '["analytics", "refactoring", "rapid-fire"]'),
    ("personalization-success", "Personalization success measure?", "Business metrics. A/B comparison. Long-term impact.", '["analytics", "metrics", "rapid-fire"]'),
    ("tracking-blocked", "Users tracking block kare to?", "Accept data gaps. Trend-based decisions. Privacy respect.", '["analytics", "privacy", "rapid-fire"]'),
    ("event-parameters", "Event parameters limit kyun?", "Analysis clean rehta hai. Maintenance easy. Noise kam.", '["analytics", "best-practices", "rapid-fire"]'),
    ("misleading-analytics", "Analytics kab misleading hoti hai?", "Bad implementation. Partial tracking. Wrong assumptions.", '["analytics", "pitfalls", "rapid-fire"]'),
    ("analytics-ownership", "Analytics ownership?", "Frontend + product. Shared responsibility. Business driven.", '["analytics", "ownership", "rapid-fire"]'),
]

for filename, question, answer, tags in analytics_questions:
    create_mdx_file(analytics_dir, filename, question, answer, tags)

# Leadership & Behavior (20)
print("\n👔 Leadership & Behavior...")
leadership_dir = os.path.join(base_path, "leadership")
os.makedirs(leadership_dir, exist_ok=True)

leadership_questions = [
    ("senior-role", "Senior engineer ka main role?", "Ownership. Risk management. Team confidence.", '["leadership", "seniority", "rapid-fire"]'),
    ("conflict-handling", "Conflict handle kaise?", "Data-driven discussion. Ego side me. Best decision focus.", '["leadership", "conflict", "rapid-fire"]'),
    ("failure-handling", "Failure ko kaise handle karte ho?", "Accountability. Blame nahi. Learning mindset.", '["leadership", "failure", "rapid-fire"]'),
    ("mentoring", "Mentoring approach?", "Guide, not spoon-feed. Thinking encourage. Confidence build.", '["leadership", "mentoring", "rapid-fire"]'),
    ("ambiguous-requirements", "Ambiguous requirements kaise?", "Questions poochte hain. Assumptions document. Clarity create.", '["leadership", "communication", "rapid-fire"]'),
    ("deadline-pressure", "Deadline pressure kaise handle?", "Prioritize. Scope trim. Early communication.", '["leadership", "time-management", "rapid-fire"]'),
    ("disagree-lead", "Lead se disagree kaise?", "Respectfully challenge. Reason explain. Final decision support.", '["leadership", "communication", "rapid-fire"]'),
    ("tech-debt-manage", "Tech debt kaise manage?", "Visible backlog. Incremental fixes. Avoid pile-up.", '["leadership", "technical-debt", "rapid-fire"]'),
    ("junior-mistakes", "Junior mistake repeat ho to?", "Root cause analysis. Concept clarify. Support provide.", '["leadership", "mentoring", "rapid-fire"]'),
    ("saying-no", "Kab 'no' bolte ho?", "High-risk shortcuts. Long-term damage. Quality compromise.", '["leadership", "decision-making", "rapid-fire"]'),
    ("influence-without-authority", "Authority ke bina influence?", "Consistency. Trust building. Results show.", '["leadership", "influence", "rapid-fire"]'),
    ("taking-feedback", "Feedback kaise lete ho?", "Non-defensive. Clarify intent. Improve mindset.", '["leadership", "growth", "rapid-fire"]'),
    ("production-issue", "Production issue reaction?", "Calm response. Fix first. Learn later.", '["leadership", "incident-management", "rapid-fire"]'),
    ("cross-team-alignment", "Cross-team alignment kaise?", "Early syncs. Clear dependencies. No surprises.", '["leadership", "collaboration", "rapid-fire"]'),
    ("leadership-without-title", "Leadership bina title?", "Ownership. Helping others. Setting example.", '["leadership", "influence", "rapid-fire"]'),
    ("tradeoff-decisions", "Tradeoff decisions kaise?", "Context-based. Business impact. Risk awareness.", '["leadership", "decision-making", "rapid-fire"]'),
    ("avoid-burnout", "Burnout avoid kaise?", "Sustainable pace. Clear priorities. No hero mode.", '["leadership", "wellbeing", "rapid-fire"]'),
    ("build-trust", "Trust kaise build hota hai?", "Reliability. Transparency. Consistency.", '["leadership", "trust", "rapid-fire"]'),
    ("team-success", "Team success kya hota hai?", "Stable product. Confident team. Predictable delivery.", '["leadership", "success", "rapid-fire"]'),
    ("why-hire-senior", "Why hire you as senior?", "Low risk. High ownership. Team safety.", '["leadership", "interview", "rapid-fire"]'),
]

for filename, question, answer, tags in leadership_questions:
    create_mdx_file(leadership_dir, filename, question, answer, tags)

# Performance/CWV Rapid-Fire (20)
print("\n⚡ Performance/CWV Rapid-Fire...")
perf_rapid_dir = os.path.join(base_path, "performance-rapid")
os.makedirs(perf_rapid_dir, exist_ok=True)

perf_questions = [
    ("improve-lcp", "How do you improve LCP?", "Render hero content early. Preload images and fonts. Avoid blocking scripts.", '["performance", "cwv", "rapid-fire"]'),
    ("improve-inp", "How do you improve INP?", "Reduce JS execution. Debounce heavy handlers. Keep interactions lightweight.", '["performance", "cwv", "rapid-fire"]'),
    ("prevent-cls", "How do you prevent CLS?", "Reserve space for images and ads. Avoid layout-shifting animations. Predict layout early.", '["performance", "cwv", "rapid-fire"]'),
    ("reduce-bundle", "How do you reduce JS bundle size?", "Code splitting and tree shaking. Remove unused dependencies. Prefer lighter libraries.", '["performance", "optimization", "rapid-fire"]'),
    ("main-thread-block", "What blocks main thread most?", "Heavy JS computation. Large JSON parsing. Uncontrolled re-renders.", '["performance", "debugging", "rapid-fire"]'),
    ("lazy-load-images", "Why lazy load images?", "Reduce initial payload. Improve LCP and bandwidth. Load when needed.", '["performance", "optimization", "rapid-fire"]'),
    ("font-optimization", "Font optimization strategy?", "Preload critical fonts. Use font-display swap. Avoid layout jumps.", '["performance", "fonts", "rapid-fire"]'),
    ("dynamic-imports", "When to use dynamic imports?", "Non-critical UI components. Modals, charts, editors. Improve initial load.", '["performance", "code-splitting", "rapid-fire"]'),
    ("ads-cwv", "How do ads affect CWV?", "They cause CLS and JS overhead. Need reserved slots. Load them responsibly.", '["performance", "third-party", "rapid-fire"]'),
    ("measure-cwv", "How do you measure CWV?", "Lighthouse and Web Vitals. Lab + real user data. Both are important.", '["performance", "measurement", "rapid-fire"]'),
    ("ssr-cwv", "SSR impact on CWV?", "Improves LCP. Reduces blank screens. But hydration still matters.", '["performance", "ssr", "rapid-fire"]'),
    ("hydration-inp", "How does hydration affect INP?", "Heavy hydration delays interactions. Too many client components hurt. Server Components help.", '["performance", "ssr", "rapid-fire"]'),
    ("optimize-carousels", "How do you optimize carousels?", "Defer initialization. Avoid autoplay. Limit DOM nodes.", '["performance", "optimization", "rapid-fire"]'),
    ("large-json", "Why avoid large JSON responses?", "Parsing blocks main thread. Increases TTI and INP. Send only needed data.", '["performance", "api", "rapid-fire"]'),
    ("image-format", "Image format preference?", "AVIF or WebP. Smaller size, better quality. Modern browser support.", '["performance", "images", "rapid-fire"]'),
    ("critical-css", "What is critical CSS?", "Above-the-fold styles. Inline for fast render. Rest loaded later.", '["performance", "css", "rapid-fire"]'),
    ("reduce-rerenders", "How do you reduce re-renders?", "Memoization and stable props. Avoid unnecessary state. Measure before optimizing.", '["performance", "react", "rapid-fire"]'),
    ("ttfb", "What is TTFB?", "Server response time. Impacts perceived speed. Backend + SSR matter.", '["performance", "metrics", "rapid-fire"]'),
    ("third-party-scripts", "How do you handle third-party scripts?", "Async load. Delay non-critical scripts. Monitor performance impact.", '["performance", "third-party", "rapid-fire"]'),
    ("performance-killer", "Biggest performance killer?", "Uncontrolled JavaScript growth. Performance dies silently. Measure continuously.", '["performance", "pitfalls", "rapid-fire"]'),
]

for filename, question, answer, tags in perf_questions:
    create_mdx_file(perf_rapid_dir, filename, question, answer, tags)

print("\n✅ Generated final 60 questions! (Analytics + Leadership + Performance)")
print("🎉 TOTAL: 140 Rapid-Fire Questions Complete!")
