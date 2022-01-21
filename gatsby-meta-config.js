module.exports = {
  title: `Julie.com`,
  description: `Julie의 개발일지`,
  language: `ko`, 
  siteUrl: `https://kimminjeong05.github.io/`,
  ogImage: `/myEmoji.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `KimMinJeong05/KimMinJeong05.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`, 
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `julie`,
    bio: {
      role: `개발자`,
      description: ['데이터에 관심있는', '능동적으로 일하는', '발전하고 싶은'],
      thumbnail: 'myEmoji.png', // Path to the image in the 'asset' folder -> gif로 가능
    },
    social: {
      github: `https://github.com/KimMinJeong05`, 
      linkedIn: `https://www.linkedin.com/in/%EB%AF%BC%EC%A0%95-%EA%B9%80-491652227/`, 
      email: `minjeong.kim512@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.01 ~',
        activity: '개인 개발 블로그',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/KimMinJeong05/KimMinJeong05.github.io',
          demo: 'https://www.zoomkoding.com',
        },
      },
      {
        date: '2021.06 ~',
        activity: '스타트업 인턴',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          // github: 'https://github.com/KimMinJeong05/KimMinJeong05.github.io',
          // demo: 'https://www.zoomkoding.com',
        },
      },
      {
        date: '2021.06 ~',
        activity: '교내 코딩/알고리즘 경진대회 대상',
        links: {
        },
      },
      {
        date: '2021.03 ~ 2021.12',
        activity: 'Eatfo 졸업프로젝트 및 논문 - 우수작 수상',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/FoodAdditivesCam',
          // demo: 'https://www.zoomkoding.com',
        },
      },
      {
        date: '2021.03 ~',
        activity: '정보경영연구실 학부생 연구원',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          // demo: 'https://www.zoomkoding.com',
        },
      },
      {
        date: '2021.02.04 ~ 2021.02.06',
        activity: 'Movie-it SW중심대학 공동 해커톤',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/movie-it',
          // demo: 'https://www.zoomkoding.com',
        },
      },
      {
        date: '2020.12 ~',
        activity: '교내 코딩/알고리즘 경진대회 대상',
        links: {
        },
      },
      {
        date: '2020.08.20 ~ 2020.08.27',
        activity: '나무 한 구루 교내 안드로이드 해커톤',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/KimMinJeong05/GuruProject',
          // demo: 'https://www.zoomkoding.com',
        },
      },
      {
        date: '2019.10.16 ~ 2019.10.17',
        activity: '편한한끼 교내 안드로이드+아두이노 해커톤',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          // github: 'https://github.com/KimMinJeong05/GuruProject',
          // demo: 'https://www.zoomkoding.com',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'Eatfo',
        description:
          '건강에 대한 관심도가 증가하면서, 우리가 먹는 식품에서 어떤 원재료가 내가 관심있는 질병에 안 좋은 영향을 끼치는지 쉽게 알고싶었습니다. 따라서 간편하게 카메라를 이용해 식품에서 어떤 원재로가 어떤 질병에 안 좋은 영향을 끼치는지 알려주는 어플인 Eatfo를 개발하게 되었습니다.\
          식품의 뒷부분에 있는 원재료 명을 카메라로 찍으면 그 원재료들이 어떤 질병에 영향을 주는 지 쉽게 알 수 있도록 도와주는 어플입니다.',
        techStack: ['Android(Java)', 'OpenCV', 'AWS EC2', 'Flask', 'SQLite', 'Symspell 오타 교정 알고리즘', 'Google Cloud Vision OCR API'],
        thumbnailUrl: 'eatfo.png',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/FoodAdditivesCam',
          // demo: 'https://www.zoomkoding.com',
        },
      },
      {
        title: 'Movie-it',
        description:
          '코로나로 인해 모든게 비대면으로 전환되면서 사람들과의 소통이 줄어들었습니다. 따라서 우리가 본 컨텐츠를 바탕으로 소통할 거리를 늘려보자 라는 목표로 친구들과 영화에 관한 이야기를 나눌 수 있는 어플인 "Movie-it"을 개발하게 되었습니다.\
          영화를 보고 평점을 매기고 친구들이 봤을 때 평점을 어떻게 줄지 예측하면서 친구들과 소통할 수 있는 어플입니다.',
        techStack: ['Android(Kotlin)', 'Django REST Framework', '네이버 API', '영화진흥위원회 제공 영화정보 Open API'],
        thumbnailUrl: 'movieit.png',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/movie-it',
          // demo: 'https://www.zoomkoding.com',
        },
      },
      {
        title: '나무 한 구루',
        description:
          '저희는 환경오염의 심각성을 인지하고 지금부터라도 지구를 지키기 위해 할 수 있는 일들을 해야한다고 생각했습니다. 각자 할 수 있는 작은 일부터 시작해 환경 보호를 쉽게 접근하고 꾸준히 할 수 있는 방법을 생각해보다가 내가 한 환경 보호를 기록하여 캐릭터를 키우고 다른 사람들과 공유하는 어플인 "나무 한 구루"를 개발하게 되었습니다.\
          환경 보호를 위해 한 일을 기록하며 나무 캐릭터를 키워 성취감을 얻고 커뮤니티를 통해 사람들과 소통할 수 있는 어플입니다.',
        techStack: ['Android(Kotlin)', 'Firebase'],
        thumbnailUrl: 'guru.png',
        links: {
          // post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/FoodAdditivesCam',
          // demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
