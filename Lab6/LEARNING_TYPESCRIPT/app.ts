interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}
const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"],
  };
}
function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];

    if(!objValidatorConfig) {
        return true;
    }

    let isValid = true;
    for(const prop in objValidatorConfig) {
        for(const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case "required": 
                    isValid = isValid && !! obj[prop];
                    break;
                case "positive":
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    // @PositiveNumber
    // price: number;

    constructor(title: string) {
        this.title = title;
        // this.price = price;
    }
}

const courseForm = document.querySelector("#btn");

courseForm?.addEventListener("click", (e) => {
    const titleEl = document.querySelector("#title") as HTMLInputElement;
    
    const course = new Course(titleEl.value);

    if(!validate(course)) alert("Vui lòng nhập vào tên"); 
})