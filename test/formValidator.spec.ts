import { formValidator } from '../src/formValidator';

// we have three describes, one for init, email validation, password validation

describe('form validator init', () => {
    it('should initalize regular expression fields & should be for valid type.', () => {
        // Arrange & Action
        const instance = new formValidator();

        // Assert
        expect(instance.emailRegex).toBeDefined();
        expect(instance.passwordRegex).toBeDefined();

        expect(typeof instance.emailRegex).toEqual('object');
        expect(typeof instance.passwordRegex).toEqual('object');
    })
})

describe('form validator, isValidEmail method', () => {
    const suite: {validator: formValidator} = {
        validator: new formValidator()
    }

    it('should return true for a valid email.', () => {
        // Arrange
        let testEmail = 'andy@gmail.com';

        // Action
        let result = suite.validator.isValidEmail(testEmail);
        
        // Assert
        expect(result).toBeTruthy();
    })

    it('should return false for a invalid email.', () => {
        // Arrange
        let testEmail = 'andy1gmail.com';

        // Action
        let result = suite.validator.isValidEmail(testEmail);

        // Assert
        expect(result).toBeFalsy();
    })

    /**YOU CAN WRITE MORE CASES HERE */
})

describe('form validator, isValidPassword method', () => {
    const suite: {validator: formValidator} = {
        validator: new formValidator()
    }

    it('should return true for a password with min 8 chars, min 1 number & one char.', () => {
        // Arrange
        let testpassowrd = 'password123';

        // Action
        let result = suite.validator.isValidPassword(testpassowrd);
        
        // Assert
        expect(result).toBeTruthy();
    })

    it('should return false for a simple text.', () => {
        // Arrange
        let testpassowrd = 'passowrd';

        // Action
        let result = suite.validator.isValidEmail(testpassowrd);

        // Assert
        expect(result).toBeFalsy();
    })
})
