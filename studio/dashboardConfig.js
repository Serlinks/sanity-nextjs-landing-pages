export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6196ae939d67df099a31fb84',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3khhzmr1',
                  apiId: '3565ce1b-b370-4b86-844b-88fb50c74109'
                },
                {
                  buildHookId: '6196ae9366733809fbf9973a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-msi3zc6j',
                  apiId: '6495516e-23f4-43b9-8b20-e7fea4b5549c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Serlinks/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-msi3zc6j.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
