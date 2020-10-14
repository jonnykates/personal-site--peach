export default {
  title: "Categories",
  name: "category",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200)
      }
    }
  ]
};
