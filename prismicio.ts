import {
	createClient as baseCreateClient,
	type ClientConfig,
	type LinkResolverFunction,
} from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import { siteConfig } from "@/content/siteContent";
import prismicConfig from "./prismic.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
	process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || prismicConfig.repositoryName;

/**
 * The site's public base URL, used to build absolute URLs (e.g. for sharing).
 */
export const SITE_URL =
	process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.seo.siteUrl;

/**
 * Resolves a Prismic document to its URL on this site.
 *
 * We resolve links client-side with this function instead of passing the
 * server-side `routes` to the client. A brand-new Type Builder repository does
 * not register its types with the Content API's route resolver until at least
 * one document is published, which would otherwise make the app fail to build
 * while there is no content yet.
 */
export const linkResolver: LinkResolverFunction = (doc) => {
	switch (doc.type) {
		case "blog_post":
			return doc.uid ? `/blog/${doc.uid}` : "/blog";
		default:
			return "/";
	}
};

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: ClientConfig = {}) => {
	const client = baseCreateClient(repositoryName, {
		fetchOptions:
			process.env.NODE_ENV === 'production'
				? { next: { tags: ['prismic'] }, cache: 'force-cache' }
				: { next: { revalidate: 5 } },
		...config,
	});

	enableAutoPreviews({ client });

	return client;
};
