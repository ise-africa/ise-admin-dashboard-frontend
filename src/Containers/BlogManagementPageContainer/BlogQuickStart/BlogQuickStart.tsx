import React from 'react'
import classes from './BlogQuickStart.module.css'
import Button from '../../../Components/Button/Button'
import img1 from '../../../Assets/Images/activateSchool.svg'
import img2 from '../../../Assets/Images/createBlogpost.svg'
import img3 from '../../../Assets/Images/readBlogGuide.svg'
import { useNavigate } from 'react-router-dom'

const BlogQuickStart = () => {
    const navigate = useNavigate();

    const startTab = [
        {
            title: 'Create blog category',
            description: 'Organise and help readers find blogposts easily with categories and tags', buttonText: 'Create category',
            imgSrc: img1,
            route: "/blogs/create-category"
        },
        {
            title: 'Create blogpost',
            description: 'Craft accurate blogpost with a clear title of what the content contains',
            buttonText: 'Create blogpost',
            imgSrc: img2,
            route: "/blogs/add-post?step=1"
        },
        {
            title: 'Check out the blogging guide',
            description: 'Learn everything you need to know about blogging',
            buttonText: 'Read guide',
            imgSrc: img3,
            route: "/blogs/guide"
        },
    ]

    return (
        <div className={classes.container}>
            {startTab.map((data, i) => (
                <div
                    key={i}
                    className={classes.tab}
                    onClick={() => { navigate(data.route) }}
                >
                    <div>
                        <h4>{data.title}</h4>
                        <p>{data.description}</p>
                        <Button type='primary'>{data.buttonText}</Button>
                    </div>
                    <img src={data.imgSrc} alt={data.title} />
                </div>
            ))}
        </div>
    )
}

export default BlogQuickStart