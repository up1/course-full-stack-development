type Employee = {
    id: number
    name: string;
    age: number;
    role: string;
};

type NewEmployee = Pick<Employee, 'id' | 'name'>;
type ReadEmployee = Readonly<Employee>;
type OptionalEmployee = Partial<Employee>;

function updateEmployee(...employee) {
    
}

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function createEmployee(employee: NewEmployee): Employee {
    return {
        ...employee,
        age: 30,
        role: 'Software Engineer'
    };
}

createEmployee({ id: 1, name: 'John Doe' });
