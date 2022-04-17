import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {

    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                style={match && { color: "#0b5ed7", fontWeight: '500' }}
                to={to}
                {...props}
            >
                {children}
            </Link>

        </div>
    );
};

export default CustomLink;