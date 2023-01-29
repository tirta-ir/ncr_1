-- AlterTable
ALTER TABLE "Follow" ADD COLUMN     "articleId" INTEGER;

-- AlterTable
ALTER TABLE "Reply" ADD COLUMN     "articleId" INTEGER;

-- AddForeignKey
ALTER TABLE "Reply" ADD CONSTRAINT "Reply_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;
