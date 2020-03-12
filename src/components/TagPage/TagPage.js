import React from 'react';
import { Badge } from '../../style';

function TagPage(props) {
    return (
        <Badge>{props.child}</Badge>
    );
}

export default TagPage;