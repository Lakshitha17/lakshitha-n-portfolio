# Lakshitha N Portfolio

## Goal
Build a modern, recruiter-friendly single-page portfolio for Lakshitha N that clearly presents education, technical growth, leadership, and upcoming work without inventing achievements.

## What will be built
- A responsive top navigation linking to Home, About, Skills, Learning, Problem Solving, Projects, Education, Leadership, and Contact.
- A strong introduction identifying Lakshitha as an aspiring software engineer and second-year B.E. CSE (AI & ML) student at SRM MCET.
- Clean, scannable sections for:
  - About and focus areas
  - Categorized technical skills
  - Current learning tracks
  - Beginner problem-solving practice
  - Honest “Upcoming Projects / Work in Progress” concept previews
  - Education timeline
  - Leadership and event coordination
  - Contact form and editable Email, GitHub, and LinkedIn links
- A light/dark theme toggle that respects the visitor’s system preference and remembers their choice.
- Smooth scrolling, subtle reveal animations, accessible focus states, and a compact mobile navigation.

## Visual direction
Minimal editorial-tech styling: crisp typography, high contrast, generous whitespace, restrained green and coral accents, fine grid details, and small purposeful motion. The page will feel professional and current without looking like a generic template.

## Technical details
- Keep the experience on `/` as one smooth-scrolling portfolio because the requested navigation is section-based.
- Use semantic design tokens in the global stylesheet for both themes.
- Use React state for the mobile menu, theme toggle, and contact form confirmation.
- Keep social/contact targets as obvious editable constants; use safe placeholder links until real URLs are provided.
- Add route-specific title, description, Open Graph, and Twitter metadata.
- Verify the finished page at desktop and mobile sizes, including menu, theme, and form interactions.
