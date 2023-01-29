-- CreateTable
CREATE TABLE "Reply" (
    "id" SERIAL NOT NULL,
    "root" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "Prevent" TEXT NOT NULL,
    "implement" TEXT NOT NULL,
    "personal" TEXT NOT NULL,
    "respBy" TEXT NOT NULL,
    "respDate" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reply_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Follow" (
    "id" SERIAL NOT NULL,
    "corrective" BOOLEAN NOT NULL DEFAULT false,
    "effective" BOOLEAN NOT NULL DEFAULT false,
    "refer" TEXT NOT NULL,
    "new" TEXT NOT NULL,
    "appBy" TEXT NOT NULL,
    "appDate" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Follow_pkey" PRIMARY KEY ("id")
);
