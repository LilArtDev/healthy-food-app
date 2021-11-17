import axios from "axios";

export async function getAddress(cep) {

    const { data } = await axios({

        url: `https://viacep.com.br/ws/${cep}/json/`,
        method: "get",
    });
    return { data }
}