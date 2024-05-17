function calculateAge() {
    // Get the values from the form
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;

    // Create a date object for the date of birth
    const dob = new Date(year, month - 1, day);
    const today = new Date();

    // Calculate age
    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById('result').textContent = `You are ${age} years old.`;
}
