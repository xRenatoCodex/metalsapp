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
            <Path d="M280-240l-56-56 184-184-184-184 56-56 240 240-240 240zm360 0v-480h80v480h-80z" fill={'#383826'}></Path>
        </Svg>
    );
}


export default Icon;
