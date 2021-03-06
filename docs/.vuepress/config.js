module.exports = {
    theme: 'yubisaki',
    title: 'HOME', 
    description: `vuepress blog`,
    head: [
        ['link', { rel: 'icon', href: `/blog.ico` }]
    ],
    base: '/blog/',
    repo: 'https://github.com/mornyang',
    dest: './docs/.vuepress/dist',
    ga: '',
    serviceWorker: true,
    evergreen: true,
    themeConfig: {
        background: `/img/brand.jpg`,
        github: 'mornyang',
        logo: '/img/avatar.jpg',
        accentColor: '#ac3e40',
        per_page: 6,
        date_format: 'yyyy-MM-dd HH:mm:ss',
        tags: true,
        comment: {
            clientID: '0e5e1fe5b0b7a829243f',
            clientSecret: '6ad30336be47d5037611cb71cfcf02293898cfd9',
            repo: 'blog',  // blog of repo name
            owner: 'mornyang',  // github of name
            admin: 'mornyang', // github of name
            perPage: 5,
            distractionFreeMode: false
        },
        nav: [
            {text: 'Blog', link: '/blog/', root: true},
            {text: 'Tags', link: '/tags/', tags: true},
            {text: 'About', link: '/about/'},
            {text: 'Github', link: 'https://github.com/mornyang'},
            {text: 'CNBLOG', link: 'https://www.cnblogs.com/morn-yang/'},
        ]
    },
    markdown: {
        anchor: {
            permalink: true
        },
        toc: {
            includeLevel: [1, 2]
        },
        config: md => {
            // 使用更多 markdown-it 插件！
            md.use(require('markdown-it-task-lists'))
            .use(require('markdown-it-imsize'), { autofill: true })
        }
    },
    postcss: {
        plugins: [require('autoprefixer')]
    },
}

