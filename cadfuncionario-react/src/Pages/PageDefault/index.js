import React from 'react';
import Menu from '../../Components/Menu';
import './index.css';

const PageDefault = () => (
        <>
        <Menu/>
        <button className="btn-add-func" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
                +
        </button>
        </>
);
export default PageDefault;