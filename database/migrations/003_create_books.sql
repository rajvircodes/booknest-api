CREATE TABLE books (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    title VARCHAR(200) NOT NULL,

    isbn VARCHAR(20) UNIQUE,

    description TEXT,

    published_year INTEGER,

    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT check_published_year
        CHECK (
            published_year IS NULL
            OR published_year BETWEEN 1000 AND 2100
        )
);