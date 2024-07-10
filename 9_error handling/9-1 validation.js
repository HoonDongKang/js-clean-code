
<label for="name">Name (4 to 8 characters):</label>

<input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />

//Minimum eight characters, at least one letter and one number:

"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
