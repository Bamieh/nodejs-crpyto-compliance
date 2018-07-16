export
const summarize = (items: any[]) => {
  return items.map((item) => ({
    path: item.path,
    repoName: item.repository.full_name,
    url: item.html_url,
  }))
}