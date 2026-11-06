CREATE TABLE book_categories (
    book_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,

    PRIMARY KEY (book_id, category_id),

    CONSTRAINT fk_book
        FOREIGN KEY (book_id)
        REFERENCES books(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_category
        FOREIGN KEY (category_id)
        REFERENCES categories(id)
        ON DELETE CASCADE
);