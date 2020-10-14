export default {
  title: "Posts",
  name: "post",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required().max(200)
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200)
      }
    },
    {
      title: "Excerpt",
      name: "excerpt",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().min(50).max(160)
    },
    {
      title: "Categories",
      name: "categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }]
        }
      ]
    },
    {
      title: "Publish date",
      name: "publishDate",
      type: "datetime",
      dateFormat: "DD-MM-YYYY"
    },
    {
      title: "Live",
      name: "live",
      type: "boolean"
    }
  ],
  initialValue: {
    publishDate: new Date().toISOString(),
    live: false
  }
};
