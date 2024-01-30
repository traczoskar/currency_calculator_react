import "./style.css";

const Form = ({ title, data, calculation }) => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">{title}</legend>
            {data}
        </fieldset>
        {calculation}
    </form>
);

export default Form;