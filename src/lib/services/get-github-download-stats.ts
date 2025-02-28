import sum from 'lodash/sum';

import { GITHUB_ORG } from '../constants/github';
import { siteMetadata } from '../site-metadata';

export async function getGithubDownloadStats() {
  try {
    const releases = [];
    let pageIndex = 1;
    while (true) {
      const response = await fetch(
        `https://api.github.com/repos/${GITHUB_ORG}/httptoolkit-desktop/releases?per_page=100&page=${pageIndex}`,
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        },
      );
      if (!response.ok) {
        response.text().then(console.log);
        throw new Error(`Bad response for GitHub stats: ${response.status}`);
      }

      const releasesPage = await response.json();
      releases.push(...releasesPage);

      if (releasesPage.length < 100) break;
      else pageIndex += 1;
    }

    const totalDownloads = sum(
      releases.map((release: any) => sum(release.assets.map((asset: any) => asset.download_count))),
    );

    return totalDownloads;
  } catch (error) {
    console.error('An error occurred trying to fetch getGithubDownloadStats:', error);
    // fallback static data if dynamic fetch fails
    return siteMetadata.totalDownloads;
  }
}
