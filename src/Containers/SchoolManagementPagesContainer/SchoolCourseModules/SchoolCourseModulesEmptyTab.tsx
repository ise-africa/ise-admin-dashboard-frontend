import { useNavigate, useParams } from 'react-router-dom'
import classes from './SchoolCourseModules.module.css'
import Button from '../../../Components/Button/Button'

const SchoolCourseModulesEmptyTab = () => {
    const navigate = useNavigate()
    const { SchoolId } = useParams();
    return (
        <div className={classes.emptyTab}>
            <h2>No courses found</h2>
            <p>[Name of School] doesn’t have any created courses yet. Click the button below to create your first course in this school.</p>
            <Button onClick={() => { navigate(`/schools/${SchoolId}/add-course`) }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1V17M17 9L1 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>Create course</span>
            </Button>
        </div>
    )
}

export default SchoolCourseModulesEmptyTab