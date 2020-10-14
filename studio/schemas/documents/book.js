export default {
  title: "Books",
  name: "book",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      title: "Author",
      name: "author",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      title: "Link",
      name: "link",
      type: "url"
    }
  ]
};
