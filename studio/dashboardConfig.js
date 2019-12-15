export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df5fcbda2021871b2084c2f',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-g5c9kg9r',
                  apiId: '63546b4e-dea2-41f2-87de-dc61bdacb5b5'
                },
                {
                  buildHookId: '5df5fcbdf85a8f93fb5d6524',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web',
                  apiId: 'e37633db-0b89-4cc7-a4ce-0f00bf643a0c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ulampinoy/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
