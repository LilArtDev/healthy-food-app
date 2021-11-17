import * as yup from 'yup';



const schema = yup.object().shape({
    name: yup.string().required('Name is required').min(3, 'It must have at least 3 characters').max(50, 'It cannot have more than 50 characters'),
    birthday: yup.date().nullable('Invalid birthday').transform((curr, orig) => orig === '' ? null : curr).required('Birthday is required'),
    cpf: yup.string().required('CPF is required').matches(/^[0-9]+$/gi, "It must have only numbers").min(11, 'It must have at least 11 digits').max(11, 'It must have only 11 digits'),
    cep: yup.string().required('CEP is required').matches(/^[0-9]+$/gi, "It must have only numbers").min(8, 'It must have at least 8 digits').max(8, 'It must have only 8 digits'),
    houseNumber: yup.string().required('Number is required').matches(/^[0-9]+$/gi, "It must have only numbers").max(4, 'Max: 4 digits')
});

export default schema;