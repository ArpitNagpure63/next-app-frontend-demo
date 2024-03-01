import Link from "next/link";
import '../student.css'

const StudentDetails = ({ params }) => {
    const studentsList = [
        {
            name: 'Luffy',
            id: '100'
        },
        {
            name: 'Ace',
            id: '200'
        },
        {
            name: 'Sabo',
            id: '300'
        },
    ];

    const getStudentDetails = () => {
        const student = studentsList.find((item) => { return item.id === params.student });
        return student ? <div className="students-list" >
            <div className="students-item">{student.name}</div>
            <div className="students-item">{student.id}</div>
        </div> : null
    };

    return <div className="students-container">
        <p className="students-heading">Welcome To Student Section</p>
        {getStudentDetails()}
        <Link href="/studentlist" className="students-heading">Go To Students Page</Link>
        <Link href="/" className="students-heading">Go To Home Page</Link>
    </div>
}

export default StudentDetails;