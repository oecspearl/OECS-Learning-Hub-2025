CREATE TABLE `assessment_strategies` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`elo_id` integer NOT NULL,
	`type` text NOT NULL,
	`description` text NOT NULL,
	`examples` text,
	FOREIGN KEY (`elo_id`) REFERENCES `essential_learning_outcomes`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `essential_learning_outcomes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`strand_id` integer NOT NULL,
	`code` text NOT NULL,
	`description` text NOT NULL,
	`grade_expectations` text,
	FOREIGN KEY (`strand_id`) REFERENCES `strands`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `learning_strategies` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`sco_id` integer NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`resources` text,
	`integrations` text,
	FOREIGN KEY (`sco_id`) REFERENCES `specific_curriculum_outcomes`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `resources` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`strand_id` integer NOT NULL,
	`title` text NOT NULL,
	`type` text NOT NULL,
	`url` text,
	`description` text,
	FOREIGN KEY (`strand_id`) REFERENCES `strands`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `specific_curriculum_outcomes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`elo_id` integer NOT NULL,
	`code` text NOT NULL,
	`description` text NOT NULL,
	FOREIGN KEY (`elo_id`) REFERENCES `essential_learning_outcomes`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `strands` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text,
	`order` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `teacher_content` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`elo_id` integer NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`resources` text,
	FOREIGN KEY (`elo_id`) REFERENCES `essential_learning_outcomes`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`role` text DEFAULT 'user' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);