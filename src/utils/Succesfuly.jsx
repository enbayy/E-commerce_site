import { useNavigate } from "react-router-dom";
import { getRoutePath } from "../routing/routes";
import { ROUTES_ID } from "../routing/routes_id";
import { Button } from "antd";

function Successfully() {
    const navigate = useNavigate();
    const handleBackSuccesfuly = () => {
        navigate(getRoutePath(ROUTES_ID.login));
    };
    return (
        <div style={{ flexDirection: "column", display: "flex", alignItems: "center" }}>
            <h3>Password has been successfully reset!</h3>
            <Button onClick={handleBackSuccesfuly}>
                Go Login
            </Button>
        </div>
    );
}

export default Successfully