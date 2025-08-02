function processStudents(students) {
    return students
        .filter(student => student.marks > 60)                      // Step 1: Filter students with marks > 60
        .sort((a, b) => b.marks - a.marks)                          // Step 2: Sort by marks in descending order
        .map(student => student.name);                             // Step 3: Extract only the names
}
