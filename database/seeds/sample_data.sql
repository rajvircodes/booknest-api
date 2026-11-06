-- Authors

INSERT INTO authors (name, biography)
VALUES
('James Clear', 'Author of Atomic Habits'),
('Cal Newport', 'Author of Deep Work'),
('Morgan Housel', 'Author of The Psychology of Money'),
('Robert Kiyosaki', 'Author of Rich Dad Poor Dad');


-- Categories

INSERT INTO categories (name)
VALUES
('Self Improvement'),
('Programming'),
('Business'),
('Finance'),
('Science'),
('Fiction'),
('Technology');


-- Books

INSERT INTO books (title, isbn, description, published_year)
VALUES
(
    'Atomic Habits',
    '9780735211292',
    'A book about building good habits.',
    2018
),
(
    'Deep Work',
    '9781455586691',
    'A book about focused work.',
    2016
),
(
    'The Psychology of Money',
    '9780857197689',
    'A book about money and human behavior.',
    2020
),
(
    'Rich Dad Poor Dad',
    NULL,
    'A book about financial education.',
    1997
);


-- Book Authors

INSERT INTO book_authors (book_id, author_id)
SELECT b.id, a.id
FROM books b
CROSS JOIN authors a
WHERE
    (b.title = 'Atomic Habits' AND a.name = 'James Clear')
    OR
    (b.title = 'Deep Work' AND a.name = 'Cal Newport')
    OR
    (b.title = 'The Psychology of Money' AND a.name = 'Morgan Housel')
    OR
    (b.title = 'Rich Dad Poor Dad' AND a.name = 'Robert Kiyosaki');


-- Book Categories

INSERT INTO book_categories (book_id, category_id)
SELECT b.id, c.id
FROM books b
CROSS JOIN categories c
WHERE
    (b.title = 'Atomic Habits' AND c.name = 'Self Improvement')
    OR
    (b.title = 'Deep Work' AND c.name = 'Self Improvement')
    OR
    (b.title = 'The Psychology of Money' AND c.name = 'Finance')
    OR
    (b.title = 'Rich Dad Poor Dad' AND c.name = 'Business');