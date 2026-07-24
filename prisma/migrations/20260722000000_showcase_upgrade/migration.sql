ALTER TABLE "Experience" ADD COLUMN "sortOrder" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "Experience" ADD COLUMN "technologies" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];
ALTER TABLE "Experience" ADD COLUMN "companyLink" TEXT;

ALTER TABLE "Projects" ADD COLUMN "slug" TEXT;
ALTER TABLE "Projects" ADD COLUMN "featured" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "Projects" ADD COLUMN "published" BOOLEAN NOT NULL DEFAULT true;
ALTER TABLE "Projects" ADD COLUMN "sortOrder" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "Projects" ADD COLUMN "role" TEXT;
ALTER TABLE "Projects" ADD COLUMN "challenge" TEXT;
ALTER TABLE "Projects" ADD COLUMN "solution" TEXT;
ALTER TABLE "Projects" ADD COLUMN "outcomes" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];
ALTER TABLE "Projects" ADD COLUMN "metrics" JSONB;
ALTER TABLE "Projects" ADD COLUMN "thumbnail" TEXT;
UPDATE "Projects" SET "slug" = CONCAT('project-', "id") WHERE "slug" IS NULL;
ALTER TABLE "Projects" ALTER COLUMN "slug" SET NOT NULL;
CREATE UNIQUE INDEX "Projects_slug_key" ON "Projects"("slug");

CREATE TABLE "ProjectMedia" (
  "id" SERIAL NOT NULL,
  "projectId" INTEGER NOT NULL,
  "key" TEXT NOT NULL,
  "altText" TEXT NOT NULL DEFAULT '',
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "kind" TEXT NOT NULL DEFAULT 'image',
  CONSTRAINT "ProjectMedia_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "ProjectMedia_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE "Profile" (
  "id" INTEGER NOT NULL DEFAULT 1,
  "name" TEXT NOT NULL DEFAULT 'Nijat Abdullazada',
  "headline" TEXT NOT NULL DEFAULT 'Software & ML/AI Engineer',
  "intro" TEXT NOT NULL DEFAULT '',
  "availability" TEXT NOT NULL DEFAULT '',
  "skills" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "socials" JSONB,
  "seoTitle" TEXT,
  "seoDescription" TEXT,
  CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);
