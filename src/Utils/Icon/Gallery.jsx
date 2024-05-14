import React from "react";
import Svg, { Path } from 'react-native-svg';

function Icon({ height }) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={height}
            height={height}
            viewBox="0 -960 960 960"
        >
            <Path d="M320-320h480v-480h-80v280l-100-60-100 60v-280H320v480zm0 80q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320zM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160zm360-720h200-200zm-200 0h480-480z" fill={'#383826'}></Path>
        </Svg>
    );
}

export default Icon;
