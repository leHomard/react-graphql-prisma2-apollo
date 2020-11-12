# Migration `20201111205222-add-cover-field`

This migration has been generated at 11/11/2020, 9:52:22 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Song" DROP CONSTRAINT "Song_albumId_fkey"

ALTER TABLE "public"."Album" ADD COLUMN "cover" text   NOT NULL ,
ALTER COLUMN "genre" DROP NOT NULL

ALTER TABLE "public"."Artist" ADD COLUMN "cover" text   NOT NULL ,
ALTER COLUMN "age" DROP NOT NULL,
ALTER COLUMN "biography" DROP NOT NULL

ALTER TABLE "public"."Song" DROP COLUMN "albumId",
ADD COLUMN "cover" text   NOT NULL ,
ALTER COLUMN "duration" DROP NOT NULL,
ALTER COLUMN "artistId" DROP NOT NULL
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201110212806-first-migration..20201111205222-add-cover-field
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -13,31 +13,31 @@
 model Artist {
   id        String  @id @default(cuid())
   firstName String
   lastName  String
-  age       Int
-  biography String
-  albums    Album[]
-  Songs     Song[]
+  cover     String
+  age       Int?
+  biography String?
+  Song      Song[]
+  Album     Album[]
 }
 model Album {
   id       String  @id @default(cuid())
   name     String
-  genre    Genre   @default(POP)
-  songs    Song[]
+  cover    String
+  genre    Genre?  @default(POP)
   artistId String?
-  Artist   Artist? @relation(fields: [artistId], references: [id])
+  artist   Artist? @relation(fields: [artistId], references: [id])
 }
 model Song {
   id       String  @id @default(cuid())
   title    String
-  duration Float
-  artistId String
-  artist   Artist  @relation(fields: [artistId], references: [id])
-  Album    Album?  @relation(fields: [albumId], references: [id])
-  albumId  String?
+  cover    String
+  artistId String?
+  artist   Artist? @relation(fields: [artistId], references: [id])
+  duration Float?
 }
 enum Genre {
   RAP
```


