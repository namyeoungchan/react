import {useNavigate} from "react-router-dom";
import PropTypes from 'prop-types';

function CommonBtn(props) {
    const navigate = useNavigate();


    const handleClick = () => {
        if (props.to) {
            navigate(props.to)
        }
        if (props.onSubmit) {
            // 클릭 시 서브밋 이벤트 실행
            props.onSubmit();
        }
    };

    return (
        <button onClick={handleClick}>
            {props.text}
        </button>
    );
}

CommonBtn.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
    onSubmit: PropTypes.func,
};

export default CommonBtn;
