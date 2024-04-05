import classes from "./BlogManagementModules.module.css"
import { AppContext } from "../../../Context/AppContext";
import React, { useContext, useEffect, useState } from 'react'
import SectionsNav4 from '../../../Components/SectionsNav4/SectionsNav4';
import BlogMangementModulesEmptyTab from './BlogMangementModulesEmptyTab';
import BlogCreatedContainer from "../BlogCreatedContainer/BlogCreatedContainer";

const BlogManagementModules = () => {
    const { blogPost } = useContext(AppContext)

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

    const [filteredBlogPost, setFilteredBlogPost] = useState<any[]>(blogPost);

    useEffect(() => {
        const activeTab = navItems.find(item => item.isActive);
        if (activeTab) {
            if (activeTab.statusFilter) {
                const filtered = blogPost.filter(data => data.status === activeTab.statusFilter);
                setFilteredBlogPost(filtered);
            } else {
                setFilteredBlogPost(blogPost);
            }
        }
    }, [navItems, blogPost]);

    //   Utils
    const activeComponent = navItems.find((data) => data.isActive);
    return (
        <section className={classes.container}>
            <div className={classes.sectionsNavSection}>
                <SectionsNav4 navItems={navItems} setNavItems={setNavItems} />
            </div>
            <div className={classes.body}>
                {filteredBlogPost.length > 0 ? (
                    <BlogCreatedContainer notShowEmptyTab={true} blogPost={filteredBlogPost} />
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