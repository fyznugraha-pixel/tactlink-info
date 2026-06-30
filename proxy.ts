import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'id', 'vi', 'bn', 'tl']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  // Try to get locale from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferredLocales = acceptLanguage.split(',').map(l => l.split(';')[0].trim().substring(0, 2).toLowerCase())
    for (const locale of preferredLocales) {
      if (locales.includes(locale)) {
        return locale
      }
    }
  }
  return defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Check if the path is a public file or static asset (e.g. images, next.js internals)
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/logo') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.svg') ||
    pathname.endsWith('.webmanifest')
  ) {
    return
  }

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
  ],
}
