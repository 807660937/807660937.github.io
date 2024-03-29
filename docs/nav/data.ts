import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '大语言模型专区',
    items: [
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT',
        desc: 'ChatGPT-4/3.5/4V-all-tools',
        link: 'https://jwkj015.cn/',
      },
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT',
        desc: 'ChatGPT-4-Vision',
        link: 'https://jwkj015.cn/',
      },
      {
        icon: 'https://zh-hans.reactjs.org/favicon.ico',
        title: 'Gemini',
        desc: 'Google gemini-pro',
        link: 'https://jwkj015.cn/',
      },

      {
        icon: 'https://www.notion.so/images/logo-ios.png',
        title: 'NewBing',
        desc: 'new bing',
        link: 'https://jwkj015.cn/',
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: '文心一言',
        desc: '文心3.0/4.0',
        link: 'https://jwkj015.cn/',
      },
      {
        icon: 'https://reactrouter.com/favicon-light.png',
        title: '通义千问',
        desc: '通义大模型',
        link: 'https://jwkj015.cn/',
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '智谱AI',
        desc: 'chatglm_pro',
        link: 'https://jwkj015.cn/',
      },
      {
        icon: 'https://svelte.dev/svelte-logo-horizontal.svg',
        title: 'Claude',
        desc: 'Claude-2.1',
        link: 'https://jwkj015.cn/',
      },
    ],
  },
  {
    title: '爆款 工具',
    items: [
      {
        icon: 'https://www.midjourney.com/apple-touch-icon.png',
        title: 'Midjourney（绘画）',
        link: 'https://jwkj015.cn/',
      },
      {
        icon: 'https://valtio.pmnd.rs/favicon.ico',
        title: '小红书写作助手',
        link: 'https://jwkj015.cn/',
      },
      {
        icon: 'https://valtio.pmnd.rs/favicon.ico',
        title: '微信公众号写作助手',
        link: 'https://jwkj015.cn/',
      },
      {
        icon: 'https://valtio.pmnd.rs/favicon.ico',
        title: '知乎写作助手',
        link: 'https://jwkj015.cn/',
      },
      {
        icon: 'https://www.notion.so/images/logo-ios.png',
        title: 'PDF问答',
        link: 'https://jwkj015.cn/',
      },
      {
        icon: 'https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png',
        title: 'PPT制作',
        link: 'https://jwkj015.cn/',
      },
      {
        icon: '/logo.png',
        title: '小说助手',
        link: 'https://jwkj015.cn/',
      },
      {
        icon: 'https://reactrouter.com/favicon-light.png',
        title: '思维导图生成器',
        // desc: '用思维导图的方式总结个人所学知识',
        link: 'https://jwkj015.cn/',
      },
    ],
  },

]
