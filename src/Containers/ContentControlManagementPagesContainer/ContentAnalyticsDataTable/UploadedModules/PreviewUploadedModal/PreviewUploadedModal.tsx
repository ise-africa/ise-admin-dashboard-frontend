import Button from '../../../../../Components/Button/Button';
import classes from './PreviewUploadedModal.module.css'

type PreviewUploadedModalProps = {
    onClick: () => void;
    onClick2: () => void;
}

const PreviewUploadedModal = ({ onClick, onClick2 }: PreviewUploadedModalProps) => {
    const moreInfo = [
        "Introduction to UI Framework",
        "Introduction to React",
        "Introduction to UI Framework"
    ]
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <h3>Module 1 summary: UI framework</h3>
                <svg onClick={onClick} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1M1 1L13 13" stroke="#2E2E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className={classes.main}>
                <h4>More information</h4>
                <div className={classes.content}>
                    <p>This is a summary of 5 weeks of course content ready for review. </p>
                    {moreInfo.map((data, i) => (
                        <div className={classes.info} key={i}>
                            <span>Week {1 + i}</span>
                            <p>{data}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={classes.footer}>
                <Button type='secondary' onClick={onClick}>Cancel</Button>
                <Button type='primary' onClick={onClick2}>Review course content</Button>
                <Button type='primary' onClick={onClick2}>Proceed</Button>
            </div>
        </div>
    )
}

export default PreviewUploadedModal
