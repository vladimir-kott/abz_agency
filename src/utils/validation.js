export function validator(data, config) { // валидатор универсальный
    const errors = {};
    function validate(validateMethod, data, config) {
        let statusValidate;
        switch (validateMethod) {
            case "isRequired": {
                if (typeof data === "boolean") {
                    statusValidate = !data;
                } else {
                    statusValidate = data.trim() === "";
                }
                break;
            }
            case "min": {
                statusValidate = data.length < config.value;
                break;
            }
            case "max": {
                statusValidate = data.length >= config.value;
                break;
            }
            case "isEmail": {
                const emailRegExp = /^\S+@\S+\.\S+$/g;
                statusValidate = !emailRegExp.test(data);
                break;
            }
            case "isPhone": {
                const digitRegExp = /^[\+]{0,1}380([0-9]{9})$/g;
                statusValidate = !digitRegExp.test(data);
                break;
            }
            default:
                break;
        }
        if (statusValidate) return config.message;
    }
    for (const fieldName in data) { // проход валидатором
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );
            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
}