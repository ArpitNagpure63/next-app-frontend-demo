import Link from "next/link";
import './post.css'

const Layout = ({ children }) => {
    return <div>
        <div>
            <ul className="common-layout-container">
                <li>
                    <Link href="/post/student">Student Page</Link>
                </li>
                <li>
                    <Link href="/post/college">College Page</Link>
                </li>
                <li>
                    <Link href="/">Home Page</Link>
                </li>
            </ul>
        </div>
        <div className="common-layout-children-container">{children}</div>
    </div>;
}

export default Layout;