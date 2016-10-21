- Student
	studentId (PK)
	Name

- Book
	bookId (PK)
	Title
	Format
	Number of Words
	Author
	Genre

- Class
	classId (PK)
	Students [studentId]
	Subject

Queries:
- Get all students in a class
- Get IR data for a student
- Get IR data for a class

Scripts:
- Clean up the database
- Populate database from JSON file

TODO:
- JSON examples of entities / items
- Sample page for demo
  - "Workbench" for the database
    - Load JSON dataset
    - Query-like string support for retrieving docs
    - Reset/clear database button
  - Sample report
   - IR report, to start
