/*
  Warnings:

  - A unique constraint covering the columns `[articleId]` on the table `Reply` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Reply_articleId_key" ON "Reply"("articleId");

-- AddForeignKey
ALTER TABLE "Reply" ADD CONSTRAINT "Reply_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;
