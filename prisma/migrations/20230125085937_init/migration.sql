/*
  Warnings:

  - A unique constraint covering the columns `[ncrNo]` on the table `Article` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[auditNo]` on the table `Article` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Article" ALTER COLUMN "issuedAt" SET DATA TYPE TEXT,
ALTER COLUMN "due" SET DATA TYPE TEXT,
ALTER COLUMN "send" SET DATA TYPE TEXT,
ALTER COLUMN "accDate" SET DATA TYPE TEXT,
ALTER COLUMN "createdAt" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "Article_ncrNo_key" ON "Article"("ncrNo");

-- CreateIndex
CREATE UNIQUE INDEX "Article_auditNo_key" ON "Article"("auditNo");
