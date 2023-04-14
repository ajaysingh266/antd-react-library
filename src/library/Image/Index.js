
import React from 'react';
import Webimage from './Image'

const Index = () => (
    <Webimage
        src = {'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg'}
        // alt = " pic not found"
        width={200}
        height={200}
        fallback={"https://cdn.dribbble.com/users/27766/screenshots/3488007/media/ac55b16291e99eb1740c17b4ac793454.png"}
    />
);

export default Index;