CREATE TABLE loans (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    member_id INTEGER NOT NULL,

    book_copy_id INTEGER NOT NULL,

    issued_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    due_at TIMESTAMPTZ NOT NULL,

    returned_at TIMESTAMPTZ,

    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_loan_member
        FOREIGN KEY (member_id)
        REFERENCES members(id)
        ON DELETE RESTRICT,

    CONSTRAINT fk_loan_book_copy
        FOREIGN KEY (book_copy_id)
        REFERENCES book_copies(id)
        ON DELETE RESTRICT,

    CONSTRAINT check_due_date
        CHECK (due_at > issued_at),

    CONSTRAINT check_return_date
        CHECK (
            returned_at IS NULL
            OR returned_at >= issued_at
        )
);