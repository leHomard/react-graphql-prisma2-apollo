# Migration `20201110212806-first-migration`

This migration has been generated at 11/10/2020, 10:28:06 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "public"."Genre" AS ENUM ('RAP', 'POP', 'ROCK', 'METAL')

CREATE TABLE "public"."Artist" (
"id" text   NOT NULL ,
"firstName" text   NOT NULL ,
"lastName" text   NOT NULL ,
"age" integer   NOT NULL ,
"biography" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Album" (
"id" text   NOT NULL ,
"name" text   NOT NULL ,
"genre" "Genre"  NOT NULL DEFAULT E'POP',
"artistId" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Song" (
"id" text   NOT NULL ,
"title" text   NOT NULL ,
"duration" Decimal(65,30)   NOT NULL ,
"artistId" text   NOT NULL ,
"albumId" text   ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."Album" ADD FOREIGN KEY("artistId")REFERENCES "public"."Artist"("id") ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE "public"."Song" ADD FOREIGN KEY("artistId")REFERENCES "public"."Artist"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Song" ADD FOREIGN KEY("albumId")REFERENCES "public"."Album"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201110212806-first-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,47 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Artist {
+  id        String  @id @default(cuid())
+  firstName String
+  lastName  String
+  age       Int
+  biography String
+  albums    Album[]
+  Songs     Song[]
+}
+
+model Album {
+  id       String  @id @default(cuid())
+  name     String
+  genre    Genre   @default(POP)
+  songs    Song[]
+  artistId String?
+  Artist   Artist? @relation(fields: [artistId], references: [id])
+}
+
+model Song {
+  id       String  @id @default(cuid())
+  title    String
+  duration Float
+  artistId String
+  artist   Artist  @relation(fields: [artistId], references: [id])
+  Album    Album?  @relation(fields: [albumId], references: [id])
+  albumId  String?
+}
+
+enum Genre {
+  RAP
+  POP
+  ROCK
+  METAL
+}
```


