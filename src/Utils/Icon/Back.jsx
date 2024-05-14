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
            <Path d="M142-480l294 294q15 15 14.5 35T435-116q-15 15-35 15t-35-15L57-423q-12-12-18-27t-6-30q0-15 6-30t18-27l308-308q15-15 35.5-14.5T436-844q15 15 15 35t-15 35L142-480z" fill="#383826"></Path>
        </Svg>
    );
}

export default Icon;
