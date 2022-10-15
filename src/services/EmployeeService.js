import axios from 'axios';

const EMPLOYEES_REST_API_URL = 'http://localhost:8080/api/v1/employees';

class EmployeeService {

    getAllEmployees(){
        return axios.get(EMPLOYEES_REST_API_URL);
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEES_REST_API_URL, employee);
    }
}

export default new EmployeeService();