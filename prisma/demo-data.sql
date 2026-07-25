-- Local-only demo content for testing the admin display-order controls.
-- Every row is guarded by its title so this can be run more than once safely.

INSERT INTO "Projects" (title, description, "githubLink", "websiteLink", category, slug, featured, published, "sortOrder", role, challenge, solution, outcomes, metrics, thumbnail)
SELECT 'Demo Project Alpha', 'A sample product interface for testing project ordering.', NULL, NULL, 'Full-Stack', 'demo-project-alpha', false, true, 900, NULL, NULL, NULL, '{}', NULL, NULL
WHERE NOT EXISTS (SELECT 1 FROM "Projects" WHERE title = 'Demo Project Alpha');

INSERT INTO "Projects" (title, description, "githubLink", "websiteLink", category, slug, featured, published, "sortOrder", role, challenge, solution, outcomes, metrics, thumbnail)
SELECT 'Demo Project Beta', 'A sample data platform for testing project ordering.', NULL, NULL, 'AI', 'demo-project-beta', false, true, 901, NULL, NULL, NULL, '{}', NULL, NULL
WHERE NOT EXISTS (SELECT 1 FROM "Projects" WHERE title = 'Demo Project Beta');

INSERT INTO "Projects" (title, description, "githubLink", "websiteLink", category, slug, featured, published, "sortOrder", role, challenge, solution, outcomes, metrics, thumbnail)
SELECT 'Demo Project Gamma', 'A sample automation tool for testing project ordering.', NULL, NULL, 'Full-Stack', 'demo-project-gamma', false, true, 902, NULL, NULL, NULL, '{}', NULL, NULL
WHERE NOT EXISTS (SELECT 1 FROM "Projects" WHERE title = 'Demo Project Gamma');

INSERT INTO "Experience" ("jobTitle", "companyName", date, description, latest, "sortOrder", technologies, "companyLink")
SELECT 'Demo Experience Alpha', 'Example Studio', '2024 — 2025', ARRAY['Sample achievement for testing the experience timeline.'], false, 900, ARRAY['React', 'Node.js'], NULL
WHERE NOT EXISTS (SELECT 1 FROM "Experience" WHERE "jobTitle" = 'Demo Experience Alpha');

INSERT INTO "Experience" ("jobTitle", "companyName", date, description, latest, "sortOrder", technologies, "companyLink")
SELECT 'Demo Experience Beta', 'Example Labs', '2022 — 2024', ARRAY['Sample delivery milestone for testing the experience timeline.'], false, 901, ARRAY['TypeScript', 'PostgreSQL'], NULL
WHERE NOT EXISTS (SELECT 1 FROM "Experience" WHERE "jobTitle" = 'Demo Experience Beta');

INSERT INTO "Experience" ("jobTitle", "companyName", date, description, latest, "sortOrder", technologies, "companyLink")
SELECT 'Demo Experience Gamma', 'Example Works', '2020 — 2022', ARRAY['Sample responsibility for testing the experience timeline.'], false, 902, ARRAY['Python', 'Docker'], NULL
WHERE NOT EXISTS (SELECT 1 FROM "Experience" WHERE "jobTitle" = 'Demo Experience Gamma');
