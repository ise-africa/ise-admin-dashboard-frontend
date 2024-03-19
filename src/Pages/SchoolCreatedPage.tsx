import React, { useContext } from 'react';
import Layout from '../Components/Layout/Layout';
import classes from '../Containers/SchoolManagementPagesContainer/SchoolCreatedContainer/SchoolCreatedContainer.module.css'
import SchoolCreatedContainer from '../Containers/SchoolManagementPagesContainer/SchoolCreatedContainer/SchoolCreatedContainer';
import { AppContext } from '../Context/AppContext';

const SchoolCreatedPage = () => {
    const { schools } = useContext(AppContext);

    return (
        <Layout>
            <div className={classes.containerPadding}>
                <SchoolCreatedContainer schools={schools} />
            </div>
        </Layout>
    );
};

export default SchoolCreatedPage;
