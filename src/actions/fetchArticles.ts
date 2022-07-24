//Fetches articles from the API. numArticles param dictates how many articles are sent back
//fullText boolean param determines whether the API sends back just full 1200 word article back too.
//if no articles or error, for now just returns empty array;

export const fetchArticles = async (
  numArticles: number,
  fullText: boolean = false,
) =>  {
  try {
    const fullTextOrNot = fullText ? 'fulltext' : 'article';
    const response = await fetch(
      `https://gentle-sea-27356.herokuapp.com/${fullTextOrNot}/${numArticles}`,
      {
        method: 'GET',

        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const posts = response.json();
    return posts;
  } catch (e) {
    return [];
  }
};
