export default {
  title: "Albums",
  name: "album",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    {
      title: "Artist",
      name: "artist",
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
