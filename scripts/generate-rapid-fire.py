#!/usr/bin/env python3
"""
Script to generate rapid-fire MDX question files from structured data
"""

import os
import re

def slugify(text):
    """Convert text to URL-friendly slug"""
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[-\s]+', '-', text)
    return text[:50]

def create_mdx_file(directory, filename, question, answer, tags, difficulty="senior"):
    """Create an MDX file for a question"""
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
    print(f"Created: {filepath}")

# Frontend Architecture (20 questions)
arch_questions = [
    ("large-app-architecture", "What architecture do you prefer for large React apps?", "I prefer feature-based architecture because it scales better with teams. Each feature owns its UI, hooks, and API logic. This reduces coupling and makes refactors safer.", '["architecture", "scalability", "rapid-fire"]'),
    ("atomic-design", "Why not atomic design everywhere?", "Atomic design works well for UI libraries but becomes heavy for business logic. Too many layers slow down development. I prefer atomic for shared UI, feature-based for product code.", '["architecture", "design-patterns", "rapid-fire"]'),
    ("prop-drilling", "How do you avoid prop drilling?", "I keep state as close as possible to where it's used. Local context works better than pushing everything global. Global state is only for truly shared data.", '["state-management", "best-practices", "rapid-fire"]'),
    ("global-state", "When do you introduce global state?", "When data is shared across multiple unrelated features. Examples are auth, user profile, or app-level settings. Not every piece of state deserves global storage.", '["state-management", "architecture", "rapid-fire"]'),
    ("tight-coupling", "How do you prevent tight coupling?", "By defining clear boundaries between features. Shared utilities stay dumb and feature logic stays isolated. Dependencies should flow one direction only.", '["architecture", "best-practices", "rapid-fire"]'),
    ("hooks-structure", "How do you structure hooks?", "Hooks live inside their feature folder. They encapsulate business logic, not UI details. This keeps components clean and testable.", '["hooks", "architecture", "rapid-fire"]'),
    ("folder-vs-domain", "Folder-based vs domain-driven?", "Domain-driven scales better as product grows. It mirrors business understanding, not technical layers. New developers understand context faster.", '["architecture", "organization", "rapid-fire"]'),
    ("side-effects", "How do you manage side effects?", "Side effects live inside hooks or data-fetching layers. Components should mostly render, not orchestrate logic. This keeps rendering predictable.", '["architecture", "best-practices", "rapid-fire"]'),
    ("architecture-rot", "What causes architecture rot?", "Quick hacks without cleanup. Lack of ownership and no refactor time. Small compromises pile up over sprints.", '["technical-debt", "architecture", "rapid-fire"]'),
    ("safe-refactor", "How do you refactor safely?", "I refactor in small steps with tests in place. Feature flags help reduce release risk. Big-bang refactors are avoided.", '["refactoring", "best-practices", "rapid-fire"]'),
    ("shared-utilities", "How do you manage shared utilities?", "Shared utils stay generic and simple. No feature-specific logic allowed. Otherwise reuse becomes dangerous.", '["architecture", "best-practices", "rapid-fire"]'),
    ("monorepo-multirepo", "Monorepo or multirepo?", "Monorepo works better for shared components and tooling. It improves consistency and reuse. But needs discipline and tooling.", '["architecture", "tooling", "rapid-fire"]'),
    ("enforce-boundaries", "How do you enforce boundaries?", "Lint rules and code reviews. Architecture is enforced, not suggested. Otherwise it slowly degrades.", '["architecture", "best-practices", "rapid-fire"]'),
    ("document-architecture", "How do you document architecture?", "Simple README and diagrams. No heavy docs that no one reads. Clarity over completeness.", '["documentation", "architecture", "rapid-fire"]'),
    ("onboard-developers", "How do you onboard new developers?", "Predictable folder structure helps a lot. Clear entry points and examples. Less explaining, more exploring.", '["onboarding", "architecture", "rapid-fire"]'),
    ("god-components", "How do you avoid god components?", "Split components by responsibility. Logic goes into hooks, UI stays simple. Large components are a smell.", '["components", "best-practices", "rapid-fire"]'),
    ("scale-teams", "How do you scale teams?", "Feature ownership with clear boundaries. Teams work independently without stepping on each other. Architecture enables parallel work.", '["scalability", "team-management", "rapid-fire"]'),
    ("tech-debt", "How do you manage tech debt?", "Make it visible and prioritized. Hidden tech debt grows silently. Small regular cleanup works best.", '["technical-debt", "best-practices", "rapid-fire"]'),
    ("legacy-code", "How do you handle legacy code?", "Strangler pattern works well. Improve code while delivering features. Avoid full rewrites.", '["legacy", "refactoring", "rapid-fire"]'),
    ("architecture-mistake", "Biggest architecture mistake?", "Over-engineering too early. Flexibility without real requirements adds complexity. Simple systems scale better.", '["architecture", "lessons-learned", "rapid-fire"]'),
]

# Create directory and files
base_dir = "/Users/nitinsingh/Downloads/2026-projects/SeniorFrontend.dev/content/questions/frontend-architecture"
os.makedirs(base_dir, exist_ok=True)

for filename, question, answer, tags in arch_questions:
    create_mdx_file(base_dir, filename, question, answer, tags)

print(f"\n✅ Created {len(arch_questions)} Frontend Architecture questions!")
