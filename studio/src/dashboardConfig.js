export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62dff37716987000a12f9f56",
                  title: "Sanity Studio",
                  name: "recipt-studio",
                  apiId: "677fa496-317a-4e9c-be4c-32dda8929d97",
                },
                {
                  buildHookId: "62dff3774777e8008e5f7815",
                  title: "Blog Website",
                  name: "recipt-web",
                  apiId: "22445968-ecf3-4d90-81a9-6d0d39e895b7",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Jackyso2000/recipt",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://recipt-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
