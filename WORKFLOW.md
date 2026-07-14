# AI-Assisted Development Workflow Comparison

## Round 1 – Vague Prompt

For the first implementation, I used a very short prompt: "Create a settings form."

The AI generated a working settings page with multiple fields, including display name, email, bio, theme selection, and notification preferences. Although the result was functional and visually acceptable, it also made many assumptions about the project requirements. It added features that were never requested, did not include client-side validation, and did not clearly explain how the implementation was verified.

Reviewing this version required more manual inspection because I needed to determine which parts were actually useful and which parts were unnecessary.

## Round 2 – Detailed Prompt

For the second implementation, I provided a much more specific prompt with clear requirements. I explicitly requested a reusable component, TypeScript, Tailwind CSS, validation, accessibility, and a verification step.

The AI followed the requirements much more closely and focused on the requested functionality instead of inventing additional features. During development it suggested adding a testing framework, but since the project did not already include one, I chose to skip the installation and requested manual verification instead. This kept the implementation lightweight and appropriate for the current project.

## Comparison

The second workflow produced code that required significantly less review because the expectations were clearly defined from the beginning. The first workflow was faster to start but slower to review, while the second required more planning but resulted in higher-quality output.

One AI mistake I noticed was that it assumed installing a new testing framework was the best solution instead of first checking whether the project already had testing configured.

This exercise showed that providing clear specifications, constraints, and verification instructions leads to more reliable AI-assisted development than using short, ambiguous prompts.
