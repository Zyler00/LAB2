CREATE TABLE events (
    id INT PRIMARY KEY,
    category VARCHAR(50),
    title VARCHAR(100),
    description TEXT,
    location VARCHAR(100),
    date DATE,
    time TIME,
    petsAllowed BOOLEAN,
    organizer VARCHAR(100)
);