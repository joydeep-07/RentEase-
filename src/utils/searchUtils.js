export const getSuggestions = (data, query) => {
  if (!query) return [];

  const q = query.toLowerCase();
  const suggestions = new Set();

  data.forEach((item) => {
    // product name
    if (item.productName.toLowerCase().includes(q)) {
      suggestions.add(item.productName);
    }

    // brand
    if (item.brand.toLowerCase().includes(q)) {
      suggestions.add(item.brand);
    }

    // category
    if (item.category.toLowerCase().includes(q)) {
      suggestions.add(item.category);
    }

    // keywords (MOST IMPORTANT)
    item.keywords.forEach((keyword) => {
      if (keyword.toLowerCase().includes(q)) {
        suggestions.add(keyword);
      }
    });

    // description (optional)
    if (item.description.toLowerCase().includes(q)) {
      suggestions.add(item.productName);
    }
  });

  return [...suggestions].slice(0, 8);
};
