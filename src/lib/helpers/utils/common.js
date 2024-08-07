export function range(size = 3, startAt = 0) {
    return [...Array(size).keys()].map((i) => i + startAt);
};

export const durationUnitRegex = /[a-zA-Z]/;

/**
 * @param {string} baseUrl
 * @param {string} relativePath
 */
export function buildUrl(baseUrl, relativePath) {
    return new URL(relativePath, baseUrl);
}

/** @param {string} agentId */
export function directToAgentPage(agentId) {
    if (!agentId) return;
        
    window.open(`/page/agent/${agentId}`);
}

/** @param {string} url */
export function isExternalUrl(url) {
    if (!url) return false;

    return /^(https?:\/\/)/.test(url)
}