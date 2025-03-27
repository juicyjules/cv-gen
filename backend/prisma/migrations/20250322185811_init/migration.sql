-- CreateTable
CREATE TABLE "CV" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "personalInformationId" TEXT NOT NULL,
    "summaryId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "CV_personalInformationId_fkey" FOREIGN KEY ("personalInformationId") REFERENCES "PersonalInformation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CV_summaryId_fkey" FOREIGN KEY ("summaryId") REFERENCES "Summary" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CV_id_fkey" FOREIGN KEY ("id") REFERENCES "Experience" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CV_id_fkey" FOREIGN KEY ("id") REFERENCES "Education" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CV_id_fkey" FOREIGN KEY ("id") REFERENCES "Skill" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CV_id_fkey" FOREIGN KEY ("id") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PersonalInformation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "linkedinUrl" TEXT,
    "githubUrl" TEXT,
    "personalWebsite" TEXT,
    "personalInformationId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Summary" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "summaryId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "jobTitle" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "location" TEXT,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "description" TEXT NOT NULL,
    "cvId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Education" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "institution" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "major" TEXT,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "description" TEXT,
    "cvId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "level" TEXT,
    "cvId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "technologies" TEXT NOT NULL,
    "liveUrl" TEXT,
    "githubUrl" TEXT,
    "cvId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "CV_personalInformationId_key" ON "CV"("personalInformationId");

-- CreateIndex
CREATE UNIQUE INDEX "CV_summaryId_key" ON "CV"("summaryId");

-- CreateIndex
CREATE UNIQUE INDEX "PersonalInformation_personalInformationId_key" ON "PersonalInformation"("personalInformationId");

-- CreateIndex
CREATE UNIQUE INDEX "Summary_summaryId_key" ON "Summary"("summaryId");
