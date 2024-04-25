-- CreateTable
CREATE TABLE "Search" (
    "id" TEXT NOT NULL,
    "spotId" TEXT NOT NULL,
    "keyword" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Search_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Search_spotId_key" ON "Search"("spotId");

-- AddForeignKey
ALTER TABLE "Search" ADD CONSTRAINT "Search_spotId_fkey" FOREIGN KEY ("spotId") REFERENCES "spot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
