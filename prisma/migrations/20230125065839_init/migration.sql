-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "ncrNo" TEXT NOT NULL,
    "auditNo" TEXT NOT NULL,
    "issuedAt" TIMESTAMP(3) NOT NULL,
    "respon" TEXT NOT NULL,
    "auditType" TEXT NOT NULL,
    "conditionRef" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "problem" BOOLEAN NOT NULL DEFAULT false,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "due" TIMESTAMP(3) NOT NULL,
    "condition" TEXT NOT NULL,
    "originator" TEXT NOT NULL,
    "send" TIMESTAMP(3) NOT NULL,
    "accBy" TEXT NOT NULL,
    "accDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);
