export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dbfe3fedd80e27873101431',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-nt6wkujp',
                  apiId: 'd03fb0f8-b985-46ff-91c3-bd28a8209428'
                },
                {
                  buildHookId: '5dbfe3ffe22bbe66fb5257db',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-iv57s9ro',
                  apiId: 'ccb22896-c8a3-4fb6-b87f-f7c247a1ae22'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sbilde/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-iv57s9ro.netlify.com', category: 'apps'}
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
