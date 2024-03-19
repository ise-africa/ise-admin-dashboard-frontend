import React, { useContext } from 'react';
import Layout from '../Components/Layout/Layout';
import SchoolCreatedContainer from '../Containers/SchoolManagementPagesContainer/SchoolCreatedContainer/SchoolCreatedContainer';
import { AppContext } from '../Context/AppContext';

const SchoolCreatedPage = () => {
    const { schools } = useContext(AppContext);

    return (
        <Layout>
            <SchoolCreatedContainer schools={schools} />
        </Layout>
    );
};

export default SchoolCreatedPage;
