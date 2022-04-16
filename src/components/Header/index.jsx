import { HeaderArea } from "./styled";
import { Button } from "../Button/styled";

const Header = () => (
    <HeaderArea>
        <div className="container">
            <div className="container-img">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/300px-Gull_portrait_ca_usa.jpg"
                    alt=""
                />
                É os rapazes 😎
            </div>
            <div className="buttons">
                <Button>Login</Button>
                <Button>SingUp</Button>
            </div>
        </div>
    </HeaderArea>
);

export default Header;
