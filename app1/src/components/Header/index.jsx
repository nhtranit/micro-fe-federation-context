import React from 'react';

import {useCount} from "host/store"

function Header() {
    const {count} = useCount()

    return <div>Đây Là Header Từ App1 :::: Count: {count}</div>;
}

export default Header;