import { timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

// Prismic sends the webhook secret in the JSON body, not in a header:
// prismic.io/docs/webhooks. Fails closed when the env var is missing.
function isValidSecret(received: unknown) {
	const expected = process.env.PRISMIC_WEBHOOK_SECRET;
	if (!expected || typeof received !== "string") return false;

	const a = Buffer.from(received);
	const b = Buffer.from(expected);
	return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(request: NextRequest) {
	const body = await request.json().catch(() => null);

	if (!isValidSecret(body?.secret)) {
		return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
	}

	revalidateTag("prismic");

	return NextResponse.json({ revalidated: true, now: Date.now() });
}
