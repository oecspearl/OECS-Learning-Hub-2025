CREATE TABLE IF NOT EXISTS "schedules" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"day" text NOT NULL,
	"time" text NOT NULL,
	"subject" text NOT NULL,
	"grade" text NOT NULL,
	"room" text NOT NULL,
	"created_at" text NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updated_at" text NOT NULL DEFAULT CURRENT_TIMESTAMP
); 