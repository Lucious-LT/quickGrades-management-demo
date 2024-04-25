import uploadlogo from "../../assets/upload_logo.png"
import "./GradeExamPageStyle.css"
function GradeTableRow(){
    
    interface LecturerCoursesToGrade{
        courseCode: string;
        submissions: string;
        graded: string;
        notGraded: string;
        examStatus: "Not Started"|"Ongoing"|"Complete"
    }

    const coursesToGrade:LecturerCoursesToGrade[] = [
        {
        courseCode: "CHEM404",
        submissions: `0/211`,
        graded: `0/0`,
        notGraded: `0/0`,
        examStatus: "Not Started"
        },
        {
        courseCode: "CHEM211",
        submissions: `200/345`,
        graded: `0/200`,
        notGraded: `200/200`,
        examStatus: "Ongoing"
        },
        {
        courseCode: "CE522",
        submissions: `210/211`,
        graded: `109/210`,
        notGraded: `101/210`,
        examStatus: "Complete"
        }
    ]



    return(
        <div>
            {coursesToGrade.map((course)=>{
                return(
                   <div>
                     <tr className="grade-exams-page-table-row">
                        <td className="grade-exams-page-table-cell-coursecode" key="courseCode">{course.courseCode}</td>
                        <td className="grade-exams-page-table-cell-submissions" key="submissions">{course.submissions}</td>
                        <td className="grade-exams-page-table-cell-graded" key="graded" >{course.graded}</td>
                        <td className="grade-exams-page-table-cell-not-graded" key="notGraded" >{course.notGraded}</td>
                        <td className="grade-exams-page-table-cell-exam-status" key="examStatus">{course.examStatus}</td>
                        <td className="grade-exams-page-table-button-cell" key="gradeButton">
                                <button className="grade-exams-page-table-grade-button">Grade</button>
                            
                        </td>
                        <td className="grade-exams-page-table-button-cell" key="uploadButton">
                            
                                <button className="grade-exams-page-table-upload-button">
                                    <img src={uploadlogo} className="upload-icon"/><span>Upload</span>
                                </button>
                        </td>
                    </tr>
                    <br/>
                   </div>
                
                )
            })}
        
                    
        
        </div>
    )
}

export default GradeTableRow


/*

<tr className="grade-exams-page-table-row">
                        <td className="grade-exams-page-table-cell-coursecode" key="courseCode">Chem 404</td>
                        <td className="grade-exams-page-table-cell-submissions" key="submissions">0/211</td>
                        <td className="grade-exams-page-table-cell-graded" key="graded" >0/0</td>
                        <td className="grade-exams-page-table-cell-not-graded" key="notGraded" >0/0</td>
                        <td className="grade-exams-page-table-cell-exam-status" key="examStatus">[Not Started]</td>
                        <td className="grade-exams-page-table-button-cell" key="gradeButton">
                                <button className="grade-exams-page-table-grade-button">Grade</button>
                            
                        </td>
                        <td className="grade-exams-page-table-button-cell" key="uploadButton">
                            
                                <button className="grade-exams-page-table-upload-button">
                                    <img src={uploadlogo} className="upload-icon"/><span>Upload</span>
                                </button>
                        </td>
                    </tr>

*/