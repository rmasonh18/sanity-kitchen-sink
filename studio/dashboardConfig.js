export default {
  widgets: [
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
                  buildHookId: '6193f4d9c886bb51e3925e5b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ztx5fbu4',
                  apiId: 'b4fd1d20-0993-40d9-b75a-9a804f3be804'
                },
                {
                  buildHookId: '6193f4d9615d6f45b85af3b8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wgxnug9s',
                  apiId: 'd5516715-7dd0-4f1a-aae0-00cb237ccd0b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rmasonh18/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wgxnug9s.netlify.app', category: 'apps'}
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
