import React from 'react';
import {useHistory} from 'react-router-dom';
import * as PropTypes from 'prop-types';

function Button(props) {
    const history = useHistory();

    const handleClick = () => {
        if (props.to) {
            // 클릭 시 페이지 이동
            history.push(props.to);
        }
        if (props.onSubmit) {
            // 클릭 시 서브밋 이벤트 실행
            props.onSubmit();
        }
    };

    return (
        <Button onClick={handleClick}>
            {props.children}
        </Button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string, // 페이지 이동할 경우의 경로
    onSubmit: PropTypes.func, // 서브밋 이벤트 핸들러
};
