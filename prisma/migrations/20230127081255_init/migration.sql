/*
  Warnings:

  - A unique constraint covering the columns `[articleId]` on the table `Follow` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Follow_articleId_key" ON "Follow"("articleId");
