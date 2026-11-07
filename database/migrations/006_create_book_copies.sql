CREATE TABLE book_copies (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    book_id INTEGER NOT NULL,

    status VARCHAR(20) NOT NULL DEFAULT 'available',

    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_book_copy_book
        FOREIGN KEY (book_id)
        REFERENCES books(id)
        ON DELETE RESTRICT,

    CONSTRAINT check_book_copy_status
        CHECK (
            status IN ('available', 'borrowed', 'maintenance')
        )
);