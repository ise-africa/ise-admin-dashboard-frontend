import classes from "./StudentDetailGradeDataTable.module.css";

const StudentDetailGradeDataTable = () => {
    // Utils
    const grade = [
        {
            title: "Quiz 1- Test knowldge",
            type: "Quiz",
            passingGrade: 80,
            studentGrade: 100,
            studentGradeStatus: "pass",
            weightGrade: 2,
        },
        {
            title: "Quiz 1- Test knowldge",
            type: "Quiz",
            passingGrade: 80,
            studentGrade: 100,
            studentGradeStatus: "pass",
            weightGrade: 2,
        },
        {
            title: "Quiz 2.0- Test knowldge",
            type: "Assessment",
            passingGrade: 80,
            studentGrade: 20,
            studentGradeStatus: "fail",
            weightGrade: 2,
        },
        {
            title: "Assignment 2.0- Test knowledge and Assignment 2.0- Test knowledge",
            type: "Quiz",
            passingGrade: 80,
            studentGrade: 20,
            studentGradeStatus: "fail",
            weightGrade: 1,
        },
        {
            title: "Quiz 1- Test knowldge",
            type: "Quiz",
            passingGrade: 80,
            studentGrade: 100,
            studentGradeStatus: "pass",
            weightGrade: 2,
        },
        {
            title: "Quiz 1- Test knowldge",
            type: "Quiz",
            passingGrade: 80,
            studentGrade: 100,
            studentGradeStatus: "pass",
            weightGrade: 2,
        },
        {
            title: "Quiz 2.0- Test knowldge",
            type: "Assessment",
            passingGrade: 80,
            studentGrade: 20,
            studentGradeStatus: "fail",
            weightGrade: 2,
        },
        {
            title: "Quiz 1- Test knowldge",
            type: "Quiz",
            passingGrade: 80,
            studentGrade: 100,
            studentGradeStatus: "pass",
            weightGrade: 2,
        },
        {
            title: "Quiz 2.0- Test knowldge",
            type: "Assessment",
            passingGrade: 80,
            studentGrade: 20,
            studentGradeStatus: "fail",
            weightGrade: 2,
        },
    ];

    const getStatusClass = (studentGradeStatus: string) => {
        switch (studentGradeStatus) {
            case "pass":
                return classes.pass;
            case "fail":
                return classes.fail;

            default:
                return "";
        }
    };

    return (
        <section className={classes.container}>
            <div className={classes.body}>
                <p>1-10 of 10 results</p>
                <div>
                    <div className={classes.tableHeader}>
                        <span>Item</span>
                        <span>Type</span>
                        <span>Passing grade</span>
                        <span>Student grade</span>
                        <span>Weight grade</span>
                    </div>

                    <div className={classes.bodyContent}>
                        {grade.map((data, i) => {
                            const statusClassName = getStatusClass(data.studentGradeStatus);
                            return (
                                <div key={Math.random()} className={classes.tableBody}>
                                    <span>{data.title}</span>
                                    <span>{data.type}</span>
                                    <span>{data.passingGrade}%</span>
                                    <span><span>{data.studentGrade}%</span><span className={statusClassName}>{data.studentGradeStatus}</span></span>
                                    <span>{data.weightGrade}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={classes.overallRating}>
                    <div>
                        <span>Overall % grade</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 14H10V10H9M10 6H10.01M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="#2E2E2E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <span>----</span>
                </div>
                <div className={classes.pageButtons}>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M15 19L8 12L15 5"
                                stroke="#d8d8d8"
                                strokeWidth="2"
                                stroke-linecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                    <button>1</button>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M9 5L16 12L9 19"
                                stroke="#d8d8d8"
                                strokeWidth="2"
                                stroke-linecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </div>
            </div>

        </section>
    );
};

export default StudentDetailGradeDataTable;
