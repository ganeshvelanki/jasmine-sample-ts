export class formValidator {
    // test for these are defined & are of valid type, during initalization.
    public emailRegex: RegExp;
    public passwordRegex: RegExp;

    constructor() {
        this.emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // password should be min 8 chars, at least one letter & one number.
        this.passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    }

    // test for both valid & invalid email ids, this function will decide valid & invalid emails.
    public isValidEmail(email: string) {
        return this.emailRegex.test(email);
    }

    // test for a valid password & invalid password, password criteria defined above.
    public isValidPassword(password: string) {
        return this.passwordRegex.test(password);
    }
}