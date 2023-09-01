import {Link} from "react-router-dom";
import * as PropTypes from "prop-types";

function Button(props) {
    console.log(props)
    
    return null;
}

Button.propTypes = {children: PropTypes.node};
const Main = () => {

    return (
        <>
            <Button>
                <Link to={'/login'}/>
            </Button>

        </>

    );
};

export default Main;
