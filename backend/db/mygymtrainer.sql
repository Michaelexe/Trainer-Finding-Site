CREATE TABLE IF NOT EXISTS user_account (
    user_uid UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    user_full_name varchar(255) NOT NULL,
    user_email varchar(255) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL
);