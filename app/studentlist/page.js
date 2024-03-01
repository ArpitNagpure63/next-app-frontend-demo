'use client'
import Link from "next/link";
import './student.css'
import { useRouter } from "next/navigation";

const StudentList = () => {
    const router = useRouter();
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

    return <div className="students-container">
        <p className="students-heading">Welcome To Student Section</p>
        {
            studentsList.map((item, index) => {
                return <div className="students-list" key={index} onClick={() => { router.push(`/studentlist/${item.id}`) }}>
                    <div className="students-item">{item.name}</div>
                    <div className="students-item">{item.id}</div>
                </div>
            })
        }
        <Link href="/" className="students-heading">Go To Home Page</Link>
    </div>
}

export default StudentList;