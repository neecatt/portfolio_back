/*
  Warnings:

  - You are about to drop the `Pdf` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Pdf";

-- CreateTable
CREATE TABLE "File" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);
