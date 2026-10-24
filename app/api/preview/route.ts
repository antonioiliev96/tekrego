import { NextRequest, NextResponse } from "next/server";
import { redirectToPreviewURL } from "@prismicio/next";

import { createClient, linkResolver } from "../../../prismicio";

export async function GET(request: NextRequest) {
	const { searchParams } = request.nextUrl;

	// redirectToPreviewURL enables draft mode even without a preview token, and
	// draft mode bypasses the fetch cache. Anyone could then turn every page view
	// into Prismic API calls with the cookie and use up the Free plan quota.
	// A forged token makes getByID throw before draft mode is enabled.
	if (!searchParams.get("token") || !searchParams.get("documentId")) {
		return NextResponse.redirect(new URL("/", request.url));
	}

	const client = createClient();

	return await redirectToPreviewURL({ client, request, linkResolver });
}
