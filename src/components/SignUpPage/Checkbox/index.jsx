import "../../styles/utils.css";

export default function Checkbox({ label }) {
    return (
        <div className="align-center">
            <label>
                <input type="checkbox" />
                <span>{label}</span>
            </label>
        </div>
    );
}
