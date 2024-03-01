import { NextResponse } from "next/server";

const middleware = (request) => {
    // console.log('Test--->', request);
    // if (request.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url));
    // }
};

// mactcher allows you to filter Middleware to run on specific paths.
export const config = {
    matcher: ['/about/:path*']
}

export default middleware;