# Migration `20201111212604-add-stage-name-field`

This migration has been generated at 11/11/2020, 10:26:04 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Artist" ADD COLUMN "stageName" text   NOT NULL 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201111205222-add-cover-field..20201111212604-add-stage-name-field
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
@@ -13,13 +13,14 @@
 model Artist {
   id        String  @id @default(cuid())
   firstName String
   lastName  String
+  stageName String
   cover     String
   age       Int?
   biography String?
-  Song      Song[]
-  Album     Album[]
+  song      Song[]
+  album     Album[]
 }
 model Album {
   id       String  @id @default(cuid())
```


