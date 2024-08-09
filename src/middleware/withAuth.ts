import {
    NextFetchEvent,
    NextMiddleware,
    NextRequest,
    NextResponse,
} from "next/server";

export default function withAuth(
    middleware: NextMiddleware,
    requireAuth: string[] = []
) {
    return async (req: NextRequest, next: NextFetchEvent) => {
        const pathname = req.nextUrl.pathname;
        const token = req.cookies.get("access_token")?.value;

        if (requireAuth.some((page) => pathname.startsWith(page))) {
            if (!token) {
                return NextResponse.redirect(new URL("/", req.url));
            }
        }

        if (token && (pathname === "/" || pathname === "/register")) {
            return NextResponse.redirect(new URL("/profile", req.url));
        }

        return middleware(req, next);
    };
}
