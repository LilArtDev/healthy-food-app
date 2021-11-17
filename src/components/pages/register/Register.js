import styles from './Register.module.css'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './validation/Validation'
import Cookies from 'universal-cookie'

import { Fade } from 'react-reveal'

import { getAddress } from '../../../services/apiCorreios'

import { Input, SubmitButton } from '../../form/index'
import Img from '../../../assets/bloco_final_image.svg'


function Register() {
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState({
        district: "",
        street: "",
        city: "",
        state: "",
    })
    const userSchema = schema;


    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(userSchema),
    });

    async function handleSetCep(e) {
        if (!errors.cep && e.target.value > 0) {
            setCep(e.target.value)
        }
        else {
            return false
        }
    }



    useEffect(() => {
        const submitCep = async () => {
            try {
                const e = await getAddress(cep);
                setAddress(prevState => ({
                    ...prevState,
                    district: e.data.bairro,
                    street: e.data.logradouro,
                    city: e.data.localidade,
                    state: e.data.uf
                }));
            } catch (e) {
                setAddress(prevState => ({
                    ...prevState,
                    district: "",
                    street: "",
                    city: "",
                    state: "",
                }));
                setError("cep", {
                    type: "cep",
                    message: e.message,
                });
            }

        }

        if (cep.length === 8) {
            submitCep()
        }
    }, [cep, setError])


    const submitForm = data => {
        if (address.city.length < 1) {
            setError("cep", {
                type: "cep",
                message: 'Invalid CEP',
            });


            return false
        }

        const User = {
            birthday: data.birthday,
            cep: data.cep,
            cpf: data.cpf,
            houseNumber: data.houseNumber,
            name: data.name,
            city: address.city,
            district: address.district,
            state: address.state,
            street: address.street,
        }
        localStorage.setItem("data",
            JSON.stringify(User));

        const cookies = new Cookies();

        cookies.set('data', User);
        console.log(cookies.get('data'));
    };

    return (
        <section className={styles.register} >
            <Fade left>
                <div className={styles.text}>
                    <h2>Register</h2>
                    <form className={styles.form} >
                        <label >
                            Name
                            <Input customClass={errors.name ? "error" : ""} type="text" name="name" placeholder="Enter your name" handleRef={register('name')} />
                        </label>
                        <p className={styles.error}>{errors.name?.message}</p>
                        <label >
                            Birthday
                            <Input customClass={errors.birthday ? "error" : ""} type="date" name="birthdate" placeholder="00/00/00" handleRef={register('birthday')} />
                        </label>
                        <p className={styles.error}>{errors.birthday?.message}</p>
                        <label >
                            CPF
                            <Input customClass={errors.cpf ? "error" : ""} type="text" name="cpf" placeholder="XXX.XXX.XXX-XX" handleRef={register('cpf')} />
                        </label>
                        <p className={styles.error}>{errors.cpf?.message}</p>
                        <label >
                            CEP
                            <Input customClass={errors.cep ? "error" : ""} type="text" name="cep" placeholder="XXXXX-XXX" handleRef={register('cep')} handleOnBlur={handleSetCep} />
                        </label>
                        <p className={styles.error}>{errors.cep?.message}</p>
                        <label>Address</label>
                        <div className={styles.address}>
                            <Input className="long" customClass="disabled" type="text" name="street" placeholder="Street" value={address.street ? address.street : ""} handleRef={register('street')} disabled={true} />
                            <Input className="long" customClass="disabled" type="text" name="district" placeholder="District" value={address.district ? address.district : ""} handleRef={register('district')} disabled={true} />
                            <Input className="long" customClass="disabled" type="text" name="city" placeholder="City" value={address.city ? address.city : ""} handleRef={register('city')} disabled={true} />
                            <div className={styles.inline}>
                                <Input className="short" customClass="disabled" type="text" name="state" placeholder="State" value={address.state ? address.state : ""} handleRef={register('state')} disabled={true} />
                                <Input className="short" customClass={errors.houseNumber ? "error" : " "} type="text" name="houseNumber" placeholder="Number" handleRef={register('houseNumber')} />
                            </div>
                            <p className={styles.error_short}>{errors?.houseNumber?.message}</p>
                        </div>
                    </form>
                    <SubmitButton handleOnClick={handleSubmit(submitForm)}>Enviar</SubmitButton>
                </div>
            </Fade >
            <img className={styles.img} src={Img} alt="Presentation" />
        </section >
    )

}
export default Register;