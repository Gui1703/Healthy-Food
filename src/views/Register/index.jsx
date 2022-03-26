import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import UpBar from "../../components/UpBar";
import "./styles.scss";

function Register() {
  const navigate = useNavigate();

  //Buscando o CEP e preenchendo seus devidos inputs
  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue("city", data.localidade);
        setValue("address", data.logradouro);
        setValue("district", data.bairro);
        setValue("uf", data.uf);
        setFocus("addressNumber");
      });
  };

  // Salvando no local Storage
  let saveLocalDataStorage = function () {
    let name = document.getElementById("name").value;
    let birthDate = document.getElementById("birthDate").value;
    let cpf = document.getElementById("cpf").value;
    let cep = document.getElementById("cep").value;
    let city = document.getElementById("city").value;
    let addressNumber = document.getElementById("addressNumber").value;
    let uf = document.getElementById("uf").value;
    let address = document.getElementById("address").value;
    let district = document.getElementById("district").value;
    localStorage.setItem("name", name);
    localStorage.setItem("birthDate", birthDate);
    localStorage.setItem("cpf", cpf);
    localStorage.setItem("cep", cep);
    localStorage.setItem("city", city);
    localStorage.setItem("address_Number", addressNumber);
    localStorage.setItem("uf", uf);
    localStorage.setItem("address", address);
    localStorage.setItem("district", district);
  };

  // Validando os inputs
  const createUserFormSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "The name must be at least 3 characters long.")
      .required("Name is required"),
    birthDate: yup.string().required("Birth date is required."),
    cpf: yup
      .string()
      .min(11, "The CPF must be at least 11 characters long.")
      .required("CPF is required."),
    cep: yup
      .string()
      .min(8, "The CEP must be at least 8 characters long.")
      .required("CEP is required."),
    city: yup.string().required("City is required."),
    addressNumber: yup.string().required("Your address number is required."),
    uf: yup.string().required("UF is required."),
    address: yup.string().required("Address is required."),
    district: yup.string().required("district is required."),
  });

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  function submitForm() {
    console.log("Seus dados foram salvos no LocalStorage !");
  }

  function goHomePage() {
    navigate("/");
  }

  document.onchange = saveLocalDataStorage;
  return (
    <div className="container-register">
      <UpBar />
      <form className="form-register" onSubmit={handleSubmit(submitForm)}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name:"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>
        </div>

        <div>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            {...register("birthDate")}
            placeholder="DD/MM/AAAA"
          />
          <span>{errors.birthDate?.message}</span>
        </div>

        <div>
          <input
            type="text"
            name="cpf"
            id="cpf"
            placeholder="CPF:"
            {...register("cpf")}
          />
          <span>{errors.cpf?.message}</span>
        </div>

        <div>
          <input
            type="text"
            name="cep"
            id="cep"
            placeholder="CEP:"
            {...register("cep")}
            onBlur={checkCEP}
          />
          <span>{errors.cep?.message}</span>
        </div>

        <div>
          <input
            type="text"
            disabled
            id="city"
            name="city"
            placeholder="City:"
            {...register("city")}
          />
        </div>

        <div>
          <input
            type="number"
            name="addressNumber"
            id="addressNumber"
            placeholder="Address Number:"
            {...register("addressNumber")}
          />
          <span>{errors.addressNumber?.message}</span>
        </div>

        <div>
          <input
            type="text"
            name="uf"
            disabled
            id="uf"
            placeholder="UF:"
            {...register("uf")}
          />
        </div>

        <div>
          <input
            type="text"
            name="address"
            disabled
            id="address"
            placeholder="Address:"
            {...register("address")}
          />
        </div>

        <div>
          <input
            type="text"
            name="district"
            disabled
            id="district"
            placeholder="district:"
            {...register("district")}
          />
        </div>

        <div className="buttons">
          <button className="buttonSubmit" type="submit">
            Submit
          </button>
          <button className="buttonHome" onClick={goHomePage}>
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
