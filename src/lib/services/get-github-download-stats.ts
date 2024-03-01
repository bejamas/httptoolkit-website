import sum from 'lodash/sum';

export async function getGithubDownloadStats() {
  const response = await fetch('https://api.github.com/repos/httptoolkit/httptoolkit-desktop/releases?per_page=100', {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });

  if (!response.ok) {
    response.text().then(console.log); // Async print the body when we have it
    throw new Error(`Bad response for GitHub stats: ${response.status}`); // Kill the build
  }

  const releaseStats = await response.json();

  const totalDownloads = sum(
    releaseStats.map((release: any) => sum(release.assets.map((asset: any) => asset.download_count))),
  );

  return totalDownloads;
}
