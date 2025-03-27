-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CV" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "personalInformationId" TEXT NOT NULL,
    "summaryId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "CV_personalInformationId_fkey" FOREIGN KEY ("personalInformationId") REFERENCES "PersonalInformation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CV_summaryId_fkey" FOREIGN KEY ("summaryId") REFERENCES "Summary" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CV" ("createdAt", "id", "personalInformationId", "summaryId", "updatedAt") SELECT "createdAt", "id", "personalInformationId", "summaryId", "updatedAt" FROM "CV";
DROP TABLE "CV";
ALTER TABLE "new_CV" RENAME TO "CV";
CREATE UNIQUE INDEX "CV_personalInformationId_key" ON "CV"("personalInformationId");
CREATE UNIQUE INDEX "CV_summaryId_key" ON "CV"("summaryId");
CREATE TABLE "new_Education" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "institution" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "major" TEXT,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "description" TEXT,
    "cvId" TEXT NOT NULL,
    CONSTRAINT "Education_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "CV" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Education" ("cvId", "degree", "description", "endDate", "id", "institution", "major", "startDate") SELECT "cvId", "degree", "description", "endDate", "id", "institution", "major", "startDate" FROM "Education";
DROP TABLE "Education";
ALTER TABLE "new_Education" RENAME TO "Education";
CREATE TABLE "new_Experience" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "jobTitle" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "description" TEXT NOT NULL,
    "cvId" TEXT NOT NULL,
    CONSTRAINT "Experience_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "CV" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Experience" ("company", "cvId", "description", "endDate", "id", "jobTitle", "location", "startDate") SELECT "company", "cvId", "description", "endDate", "id", "jobTitle", "location", "startDate" FROM "Experience";
DROP TABLE "Experience";
ALTER TABLE "new_Experience" RENAME TO "Experience";
CREATE TABLE "new_Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "technologies" TEXT NOT NULL,
    "liveUrl" TEXT,
    "githubUrl" TEXT,
    "cvId" TEXT NOT NULL,
    CONSTRAINT "Project_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "CV" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("cvId", "description", "githubUrl", "id", "liveUrl", "name", "technologies") SELECT "cvId", "description", "githubUrl", "id", "liveUrl", "name", "technologies" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE TABLE "new_Skill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "level" TEXT,
    "cvId" TEXT NOT NULL,
    CONSTRAINT "Skill_cvId_fkey" FOREIGN KEY ("cvId") REFERENCES "CV" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Skill" ("cvId", "id", "level", "name") SELECT "cvId", "id", "level", "name" FROM "Skill";
DROP TABLE "Skill";
ALTER TABLE "new_Skill" RENAME TO "Skill";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
