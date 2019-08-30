CREATE TABLE notes (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS INTEGER, 
  note_name text NOT NULL,
  modified TIMESTAMP NOT NULL DEFAULT now(),
  folder_id INTEGER REFERENCES folders(id) ON DELETE CASCADE,
  content TEXT NOT NULL
);
