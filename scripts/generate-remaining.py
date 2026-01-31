#!/usr/bin/env python3
"""
Complete rapid-fire questions generator for all remaining topics
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

# API Integration (20)
print("\n📡 API Integration...")
api_dir = os.path.join(base_path, "api-integration")
os.makedirs(api_dir, exist_ok=True)

api_questions = [
    ("rest-vs-graphql", "REST vs GraphQL kab choose karte ho?", "Problem ke basis pe. GraphQL complex data ke liye. REST simple flows ke liye.", '["api", "graphql", "rapid-fire"]'),
    ("over-fetching", "Over-fetching problem kya hai?", "Unnecessary data load hota hai. Performance hurt hoti hai. GraphQL isko solve karta hai.", '["api", "performance", "rapid-fire"]'),
    ("api-errors", "API errors ko kaise handle karte ho?", "User-friendly messages dikhate hain. Retry ya fallback provide karte hain. Silent failures avoid karte hain.", '["api", "error-handling", "rapid-fire"]'),
    ("api-contract", "What is an API contract?", "Frontend-backend agreement. Response shape predictable hona chahiye. Breaking changes risky hote hain.", '["api", "contracts", "rapid-fire"]'),
    ("race-conditions", "How do you avoid race conditions?", "Stale requests cancel karte hain. Latest response hi apply hota hai. Fast users ke liye important.", '["api", "concurrency", "rapid-fire"]'),
    ("pagination", "Pagination strategies?", "Cursor-based preferred. Offset simple but unreliable hota hai. UX ke basis pe choose karte hain.", '["api", "pagination", "rapid-fire"]'),
    ("cache-api-data", "How do you cache API data?", "Read-heavy data cache hota hai. Invalidation strategy mandatory. Stale data dangerous hota hai.", '["api", "caching", "rapid-fire"]'),
    ("secure-api", "How do you secure API calls?", "Secrets client pe nahi. Auth cookies preferred. BFF pattern use hota hai.", '["api", "security", "rapid-fire"]'),
    ("slow-apis", "How do you handle slow APIs?", "Skeleton loaders. Timeout handling. User feedback clear hota hai.", '["api", "performance", "rapid-fire"]'),
    ("graphql-fragments", "GraphQL fragments ka use?", "Field reuse ke liye. Consistency maintain hoti hai. Queries clean rehti hain.", '["api", "graphql", "rapid-fire"]'),
    ("partial-failure", "Partial API failure handle kaise?", "Graceful degradation. Critical content render hota hai. Non-critical hide ho jaata hai.", '["api", "error-handling", "rapid-fire"]'),
    ("debug-api", "How do you debug API issues?", "Network tab check. Request/response verify. Logs aur monitoring use.", '["api", "debugging", "rapid-fire"]'),
    ("mock-apis", "When to mock APIs?", "Testing aur development ke liye. Production me nahi. Mocks confidence false de sakte hain.", '["api", "testing", "rapid-fire"]'),
    ("rate-limiting", "Rate limiting handle kaise?", "Debounce aur batching. Retry with backoff. UX informative hota hai.", '["api", "performance", "rapid-fire"]'),
    ("timeout-strategy", "Timeout strategy?", "User ko retry option. Infinite wait avoid. Clear error messages.", '["api", "error-handling", "rapid-fire"]'),
    ("graphql-errors", "GraphQL errors vs REST errors?", "GraphQL 200 ke saath error deta hai. REST status-based hota hai. Handling alag hoti hai.", '["api", "error-handling", "rapid-fire"]'),
    ("api-versioning", "API versioning importance?", "Backward compatibility. Frontend breaks avoid hote hain. Safe migrations possible.", '["api", "versioning", "rapid-fire"]'),
    ("reduce-api-calls", "How do you reduce API calls?", "Batching aur caching. Derived data reuse. Unnecessary fetch avoid.", '["api", "performance", "rapid-fire"]'),
    ("api-failures-impact", "Production API failures ka impact?", "UX break hota hai. Trust loss hota hai. Graceful handling zaroori.", '["api", "production", "rapid-fire"]'),
    ("api-ownership", "API ownership kiski?", "Shared responsibility. Frontend + backend dono. Contracts collaboration se bante hain.", '["api", "ownership", "rapid-fire"]'),
]

for filename, question, answer, tags in api_questions:
    create_mdx_file(api_dir, filename, question, answer, tags)

# Testing (20)
print("\n🧪 Testing...")
test_dir = os.path.join(base_path, "testing")
os.makedirs(test_dir, exist_ok=True)

test_questions = [
    ("unit-vs-integration", "Unit vs integration tests?", "Unit isolated logic ke liye. Integration user flow ke liye. Balance zaroori.", '["testing", "best-practices", "rapid-fire"]'),
    ("react-testing-library", "Why React Testing Library?", "User-centric testing. Implementation details ignore karta hai. Stable tests deta hai.", '["testing", "tools", "rapid-fire"]'),
    ("flaky-tests", "Flaky tests kyun hote hain?", "Async timing issues. Random waits. Shared state.", '["testing", "debugging", "rapid-fire"]'),
    ("e2e-tests", "E2E tests kab likhte ho?", "Critical business flows ke liye. Login, checkout, payments. Har edge case nahi.", '["testing", "e2e", "rapid-fire"]'),
    ("snapshot-testing", "Snapshot testing ka risk?", "Blind updates. False confidence. Carefully use karna chahiye.", '["testing", "best-practices", "rapid-fire"]'),
    ("mock-vs-real", "Mock vs real APIs?", "Mock speed deta hai. Real confidence deta hai. Balanced approach best.", '["testing", "mocking", "rapid-fire"]'),
    ("testing-pyramid", "Testing pyramid kya hai?", "Zyada unit tests. Kam E2E tests. Fast feedback loop.", '["testing", "strategy", "rapid-fire"]'),
    ("what-not-test", "What not to test?", "Implementation details. Library internals. CSS pixel perfection.", '["testing", "best-practices", "rapid-fire"]'),
    ("async-tests", "Async tests kaise likhte ho?", "Actual condition ka wait. Arbitrary timeouts avoid. Reliable tests milte hain.", '["testing", "async", "rapid-fire"]'),
    ("flaky-ci", "CI me flaky tests kaise handle?", "Fix ya remove. Ignore nahi karte. Trust important hai.", '["testing", "ci", "rapid-fire"]'),
    ("coverage-100", "100% coverage kyun nahi?", "Low ROI. Maintenance heavy. Critical paths focus.", '["testing", "coverage", "rapid-fire"]'),
    ("a11y-testing", "Accessibility testing ka role?", "Regression detect karta hai. Manual testing still required. Automation baseline deta hai.", '["testing", "accessibility", "rapid-fire"]'),
    ("test-data", "Test data kaise manage?", "Isolated aur predictable. Shared data flaky hota hai. Cleanup important.", '["testing", "best-practices", "rapid-fire"]'),
    ("form-testing", "Form testing kaise karte ho?", "User input simulate. Error aur success dono test. Happy path enough nahi.", '["testing", "forms", "rapid-fire"]'),
    ("mock-timers", "Mock timers kab use?", "Time-based logic ke liye. Debounce, throttle. Deterministic behavior.", '["testing", "mocking", "rapid-fire"]'),
    ("debug-test-failures", "Test failures kaise debug?", "Logs aur DOM snapshot. Local reproduce. Guesswork avoid.", '["testing", "debugging", "rapid-fire"]'),
    ("testing-ownership", "Testing ownership kiski?", "Developers ki. QA support karta hai. Quality shared hoti hai.", '["testing", "ownership", "rapid-fire"]'),
    ("slow-test-suite", "Slow test suite ka impact?", "Developer productivity down. Tests bypass hone lagte hain. Speed matters.", '["testing", "performance", "rapid-fire"]'),
    ("refactor-tests", "Refactor ke time tests ka role?", "Confidence deta hai. Behavior verify hota hai. Safe changes possible.", '["testing", "refactoring", "rapid-fire"]'),
    ("testing-mistake", "Biggest testing mistake?", "Over-mocking. False confidence. Real bugs miss ho jaate hain.", '["testing", "lessons-learned", "rapid-fire"]'),
]

for filename, question, answer, tags in test_questions:
    create_mdx_file(test_dir, filename, question, answer, tags)

# CI/CD (20)
print("\n🚀 CI/CD...")
cicd_dir = os.path.join(base_path, "cicd")
os.makedirs(cicd_dir, exist_ok=True)

cicd_questions = [
    ("ci-vs-cd", "CI aur CD difference?", "CI integration validate karta hai. CD deployment automate karta hai. Dono alag concerns hain.", '["cicd", "concepts", "rapid-fire"]'),
    ("fast-ci", "Fast CI kyun important?", "Developer productivity. Quick feedback. Less frustration.", '["cicd", "performance", "rapid-fire"]'),
    ("fail-fast", "Fail-fast principle?", "Cheap checks pehle. Expensive baad me. Time save hota hai.", '["cicd", "best-practices", "rapid-fire"]'),
    ("pipeline-blocks", "Pipeline me kya block kare?", "Tests aur build failures. Lint warnings nahi. Balance zaroori.", '["cicd", "strategy", "rapid-fire"]'),
    ("rollback-strategy", "Rollback strategy?", "Previous stable artifact. Code revert risky hota hai. Fast recovery possible.", '["cicd", "deployment", "rapid-fire"]'),
    ("feature-flags", "Feature flags ka role?", "Risk reduce karte hain. Safe deploys allow. Gradual rollout possible.", '["cicd", "deployment", "rapid-fire"]'),
    ("secrets-handling", "Secrets kaise handle karte ho?", "CI secret manager. Repo me kabhi nahi. Rotation support chahiye.", '["cicd", "security", "rapid-fire"]'),
    ("build-caching", "Build caching kyun?", "Pipeline speed improve. Repeated installs avoid. Cost kam hoti hai.", '["cicd", "performance", "rapid-fire"]'),
    ("immutable-builds", "Immutable builds kya hain?", "Same build everywhere. Debugging easy. Consistency ensured.", '["cicd", "best-practices", "rapid-fire"]'),
    ("staging-env", "Staging environment ka role?", "Pre-prod validation. Integration testing. Risk reduction.", '["cicd", "environments", "rapid-fire"]'),
    ("zero-downtime", "Zero-downtime deployment kaise?", "Backward compatible code. CDN + infra support. Safe rollouts.", '["cicd", "deployment", "rapid-fire"]'),
    ("flaky-ci-failures", "Flaky CI failures kaise handle?", "Root cause fix. Ignore nahi karte. Trust restore karte hain.", '["cicd", "debugging", "rapid-fire"]'),
    ("monorepo-ci", "Monorepo CI challenge?", "Selective builds. Unnecessary jobs avoid. Tooling important.", '["cicd", "monorepo", "rapid-fire"]'),
    ("frontend-deploy-risk", "Frontend deploy ka risk?", "Cache invalidation. Broken assets. Version mismatch.", '["cicd", "deployment", "rapid-fire"]'),
    ("versioning-importance", "Versioning kyun important?", "Traceability. Rollback easy. Accountability.", '["cicd", "best-practices", "rapid-fire"]'),
    ("infra-failures", "Infra failures kaise communicate?", "Clear status updates. No blame game. Transparency important.", '["cicd", "communication", "rapid-fire"]'),
    ("canary-deployment", "Canary deployment kya hai?", "Limited user rollout. Risk control. Early feedback.", '["cicd", "deployment", "rapid-fire"]'),
    ("cicd-ownership", "CI/CD ownership kiski?", "Engineering team. DevOps partner hota hai. Shared responsibility.", '["cicd", "ownership", "rapid-fire"]'),
    ("slow-pipeline", "Pipeline slow hone ka main reason?", "Heavy E2E tests. No caching. Over-steps.", '["cicd", "performance", "rapid-fire"]'),
    ("cicd-antipattern", "CI/CD anti-pattern?", "Over-complex pipelines. Hard to maintain. Fragile systems.", '["cicd", "anti-patterns", "rapid-fire"]'),
]

for filename, question, answer, tags in cicd_questions:
    create_mdx_file(cicd_dir, filename, question, answer, tags)

print("\n✅ Generated 60 more questions! (API + Testing + CI/CD)")
print("Total so far: 80 questions")
