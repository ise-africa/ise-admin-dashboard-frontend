import classes from "./BlogManagementModules.module.css"
import { AppContext } from "../../../Context/AppContext";
import React, { useContext, useEffect, useState } from 'react'
import SectionsNav4 from '../../../Components/SectionsNav4/SectionsNav4';
import SchoolCreatedContainer from '../../SchoolManagementPagesContainer/SchoolCreatedContainer/SchoolCreatedContainer';
import BlogMangementModulesEmptyTab from './BlogMangementModulesEmptyTab';

const BlogManagementModules = () => {
    const { schools } = useContext(AppContext)

    // States
    const [navItems, setNavItems] = useState<any[]>([
        {
            title: "Published posts",
            isActive: true,
            statusFilter: "Published",
            emptyState: {
                header: "No blogposts",
                paragraph: "Select “Create blogpost” to share insights, and connect with iṣẹ́’s audience. Once you publish a blogpost, it’ll appear here."
            }
        },
        {
            title: "Drafts",
            isActive: false,
            statusFilter: "Draft",
            emptyState: {
                header: "No blogpost drafts ",
                paragraph: "Once you cancel or save a blogpost to continue later it’ll appear here"
            }
        },
        {
            title: "Archives",
            isActive: false,
            statusFilter: "Archive",
            emptyState: {
                header: "No archived blogposts",
                paragraph: "Once you temporarily deactivate a blogpost it’ll will appear here until you delete it permanently."
            }
        },
    ]);

    const [filteredSchools, setFilteredSchools] = useState<any[]>(schools);

    useEffect(() => {
        const activeTab = navItems.find(item => item.isActive);
        if (activeTab) {
            if (activeTab.statusFilter) {
                const filtered = schools.filter(school => school.status === activeTab.statusFilter);
                setFilteredSchools(filtered);
            } else {
                setFilteredSchools(schools);
            }
        }
    }, [navItems, schools]);

    //   Utils
    const activeComponent = navItems.find((data) => data.isActive);
    return (
        <section className={classes.container}>
            <div className={classes.sectionsNavSection}>
                <SectionsNav4 navItems={navItems} setNavItems={setNavItems} />
            </div>
            <div className={classes.body}>
                {filteredSchools.length > 0 ? (
                    <SchoolCreatedContainer notShowEmptyTab={true} schools={filteredSchools} />
                ) : (
                    <BlogMangementModulesEmptyTab
                        header={activeComponent.emptyState.header}
                        paragraph={activeComponent.emptyState.paragraph}
                    />
                )}
            </div>
        </section>
    );
};

export default BlogManagementModules