import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  // if (process.env.NODE_ENV === 'development') {
  //   return NextResponse.next();
  // }
  // const jwt = request.cookies.get('token');
  // if (!jwt) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }
  //! try {
  //   const { payload } = await jwtVerify(
  //     jwt.value,
  //     new TextEncoder().encode(process.env.SECRET_JWT)
  //   );
  //   return NextResponse.next();
  // } catch (error) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  //! }
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
