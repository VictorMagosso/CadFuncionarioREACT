import React from 'react';
import Menu from '../../Components/Menu';
import './index.css';

const PageDefault = ({children}) => (
        <div className="container-default">
        <Menu/>
        {children}
        <button className="btn-add-func" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                <i className="fas fa-user-plus"></i>
        </button>
        
        </div>
);
export default PageDefault;