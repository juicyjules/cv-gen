/*
  Warnings:

  - You are about to drop the column `personalInformationId` on the `PersonalInformation` table. All the data in the column will be lost.
  - You are about to drop the column `summaryId` on the `Summary` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PersonalInformation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "linkedinUrl" TEXT,
    "githubUrl" TEXT,
    "personalWebsite" TEXT
);
INSERT INTO "new_PersonalInformation" ("email", "firstName", "githubUrl", "id", "lastName", "linkedinUrl", "location", "personalWebsite", "phone") SELECT "email", "firstName", "githubUrl", "id", "lastName", "linkedinUrl", "location", "personalWebsite", "phone" FROM "PersonalInformation";
DROP TABLE "PersonalInformation";
ALTER TABLE "new_PersonalInformation" RENAME TO "PersonalInformation";
CREATE TABLE "new_Summary" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL
);
INSERT INTO "new_Summary" ("id", "text") SELECT "id", "text" FROM "Summary";
DROP TABLE "Summary";
ALTER TABLE "new_Summary" RENAME TO "Summary";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
