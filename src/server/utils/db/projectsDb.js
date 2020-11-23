/*categories ->  1: frontend, 2: model*/
const PHOTO_EDIT = '/f_auto,dpr_auto,q_auto:good'
const projectsDb = {
  portfolioList: [
    {
      id: 1,
      title: 'UI/UX & Frontend',
      cover:
        'https://res.cloudinary.com/ivanrice-c/image/upload/q_auto:eco/v1597355406/portfolio/uiux_courses/cover_tvtvpb.jpg',
      category: 1,
      tools: ['css', 'html', 'php', 'jquery', 'bootstrap'],
    },
    {
      id: 2,
      title: 'Registro UNAM - UI/UX',
      cover:
        'https://res.cloudinary.com/ivanrice-c/image/upload/q_auto:eco/v1597354705/portfolio/register/cover_jjaqkq.jpg',
      category: 1,
      tools: ['angular', 'html', 'php', 'css', 'bootstrap', 'mysql'],
    },
    {
      id: 3,
      title: 'SIGEM - UI/UX',
      cover:
        'https://res.cloudinary.com/ivanrice-c/image/upload/q_auto:eco/v1597354032/portfolio/sigem/cover_iva5vx.jpg',
      category: 1,
      tools: ['react', 'html', 'php', 'css', 'bootstrap'],
    },
    {
      id: 4,
      title: 'Saas Consultores - UI/UX',
      cover:
        'https://res.cloudinary.com/ivanrice-c/image/upload/q_auto:eco/v1597357629/portfolio/saas/cover_qhrryd.jpg',
      category: 1,
      tools: ['html', 'php', 'jquery', 'css', 'bootstrap', 'mysql'],
    },
    {
      id: 5,
      title: 'Steam punk - space ship',
      cover:
        'https://cdnb.artstation.com/p/assets/images/images/027/424/717/20200607002852/smaller_square/ivan-bautista-nave-final.jpg?1591507733',
      category: 2,
      tools: ['css', 'html', 'php', 'jquery', 'bootstrap'],
    },
    {
      id: 6,
      title: 'Midnight gospel - Fan art',
      cover:
        'https://cdna.artstation.com/p/assets/images/images/030/401/790/smaller_square/ivan-bautista-clancy-w.jpg',
      category: 2,
      tools: ['css', 'html', 'php', 'jquery', 'bootstrap'],
    },
    {
      id: 7,
      title: 'Still life',
      cover:
        'https://cdna.artstation.com/p/assets/images/images/018/363/916/smaller_square/ivan-bautista-vasijas-final.jpg',
      category: 2,
      tools: ['css', 'html', 'php', 'jquery', 'bootstrap'],
    },
    {
      id: 8,
      title: 'Kid mostro - challenge',
      cover:
        'https://cdnb.artstation.com/p/assets/images/images/018/831/139/smaller_square/ivan-bautista-kidmostro-camera1.jpg',
      category: 2,
      tools: ['css', 'html', 'php', 'jquery', 'bootstrap'],
    },
    {
      id: 9,
      title: 'GRIM - Fan art',
      cover:
        'https://cdnb.artstation.com/p/assets/images/images/018/378/367/smaller_square/ivan-bautista-huesos-final-smoke.jpg',
      category: 2,
      tools: ['css', 'html', 'php', 'jquery', 'bootstrap'],
    },
    {
      id: 10,
      title: 'Reinhardt - Fan art',
      cover:
        'https://cdnb.artstation.com/p/assets/images/images/018/364/081/smaller_square/ivan-bautista-final-rein.jpg',
      category: 2,
      tools: ['css', 'html', 'php', 'jquery', 'bootstrap'],
    },
  ],
  img_items: [
    {
      id: 1,
      idPortfolioList: 1,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279601/portfolio/uiux_courses/cover_aqvsdv.png`,
      alt: 'cover of the project',
    },
    {
      id: 2,
      idPortfolioList: 1,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279608/portfolio/uiux_courses/projectbr_wv9la0.png`,
      alt: 'brief of the project',
    },
    {
      id: 3,
      idPortfolioList: 1,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597360813/portfolio/uiux_courses/unam_courses_x7mkaj.png`,
      alt: '',
    },
    {
      id: 4,
      idPortfolioList: 1,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279605/portfolio/uiux_courses/inbursa_bknwnl.png`,
      alt: '',
    },
    {
      id: 5,
      idPortfolioList: 1,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279612/portfolio/uiux_courses/unam_ujl4om.png`,
      alt: '',
    },
    {
      id: 6,
      idPortfolioList: 1,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279596/portfolio/uiux_courses/comex_ia7mrj.png`,
      alt: '',
    },
    {
      id: 7,
      idPortfolioList: 1,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279588/portfolio/uiux_courses/3daovs_sdnzoj.png`,
      alt: '',
    },
    {
      id: 8,
      idPortfolioList: 1,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279594/portfolio/uiux_courses/AOV_ymvcx1.png`,
      alt: '',
    },
    {
      id: 1,
      idPortfolioList: 2,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597280118/portfolio/register/architecture_vep86k.png`,
      alt: '',
    },
    {
      id: 2,
      idPortfolioList: 2,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597280114/portfolio/register/about_vumanf.png`,
      alt: '',
    },
    {
      id: 3,
      idPortfolioList: 2,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597280122/portfolio/register/colors_ysnxdz.png`,
      alt: '',
    },
    {
      id: 4,
      idPortfolioList: 2,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597280128/portfolio/register/registro_idnisl.png`,
      alt: '',
    },
    {
      id: 5,
      idPortfolioList: 2,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597280131/portfolio/register/ticket_rzkzse.png`,
      alt: '',
    },
    {
      id: 6,
      idPortfolioList: 2,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597280112/portfolio/register/USER_lqcdjq.png`,
      alt: '',
    },
    {
      id: 1,
      idPortfolioList: 3,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279894/portfolio/sigem/sigem_xwozyi.png`,
      alt: '',
    },
    {
      id: 2,
      idPortfolioList: 3,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279865/portfolio/sigem/architectured_m0ffwk.png`,
      alt: '',
    },
    {
      id: 3,
      idPortfolioList: 3,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279890/portfolio/sigem/about_xuyysj.png`,
      alt: '',
    },
    {
      id: 4,
      idPortfolioList: 3,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279861/portfolio/sigem/about_b_qckna0.png`,
      alt: '',
    },
    {
      id: 5,
      idPortfolioList: 3,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279922/portfolio/sigem/wireframe_g6i7cv.png`,
      alt: '',
    },
    {
      id: 6,
      idPortfolioList: 3,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279976/portfolio/sigem/setup_n69ngw.png`,
      alt: '',
    },
    {
      id: 7,
      idPortfolioList: 3,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279969/portfolio/sigem/campus_eafcc8.png`,
      alt: '',
    },
    {
      id: 8,
      idPortfolioList: 3,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279973/portfolio/sigem/home_zfi6b8.png`,
      alt: '',
    },
    {
      id: 9,
      idPortfolioList: 3,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279981/portfolio/sigem/user_menu_icgmkc.png`,
      alt: '',
    },
    {
      id: 10,
      idPortfolioList: 3,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279960/portfolio/sigem/5users_gl3jjh.png`,
      alt: '',
    },
    {
      id: 11,
      idPortfolioList: 3,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279965/portfolio/sigem/6calendar_qystjo.png`,
      alt: '',
    },
    {
      id: 12,
      idPortfolioList: 3,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279902/portfolio/sigem/uiux_dashboard_yvenyu.png`,
      alt: '',
    },
    {
      id: 13,
      idPortfolioList: 3,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279877/portfolio/sigem/dashboard_jhjov7.png`,
      alt: '',
    },
    {
      id: 14,
      idPortfolioList: 3,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279911/portfolio/sigem/uiux_user_ij2sfs.png`,
      alt: '',
    },
    {
      id: 15,
      idPortfolioList: 3,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279885/portfolio/sigem/USER_kodeuq.png`,
      alt: '',
    },
    {
      id: 16,
      idPortfolioList: 3,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279906/portfolio/sigem/uiux_PDF_bnzrcq.png`,
      alt: '',
    },
    {
      id: 17,
      idPortfolioList: 3,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279881/portfolio/sigem/pdf_ah7uno.png`,
      alt: '',
    },
    {
      id: 18,
      idPortfolioList: 3,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279898/portfolio/sigem/SIGEMV1_wzrglw.png`,
      alt: '',
    },
    {
      id: 19,
      idPortfolioList: 3,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279857/portfolio/sigem/version1_dscq1h.png`,
      alt: '',
    },
    {
      id: 1,
      idPortfolioList: 4,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1598464569/portfolio/saas/1_architexture_qmhehp.png`,
      alt: '',
    },
    {
      id: 2,
      idPortfolioList: 4,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1598464606/portfolio/saas/qwe_s0lf8u.png`,
      alt: '',
    },
    {
      id: 3,
      idPortfolioList: 4,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1598465734/portfolio/saas/3_color_nj2m0k.png`,
      alt: '',
    },
    {
      id: 4,
      idPortfolioList: 4,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1598465772/portfolio/saas/4_UIUX_usuad1.png`,
      alt: '',
    },
    {
      id: 5,
      idPortfolioList: 4,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1598467828/portfolio/saas/portada_timsy1.png`,
      alt: '',
    },
    {
      id: 6,
      idPortfolioList: 4,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1598465966/portfolio/saas/menu_kogvm6.png`,
      alt: '',
    },
    {
      id: 7,
      idPortfolioList: 4,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1598465995/portfolio/saas/cotizacion_s9wgzi.png`,
      alt: '',
    },
    {
      id: 8,
      idPortfolioList: 4,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1598466004/portfolio/saas/Mensaje_qhkpoh.png`,
      alt: '',
    },
    {
      id: 9,
      idPortfolioList: 4,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1598466046/portfolio/saas/CONSULTA_z88uti.png`,
      alt: '',
    },
    {
      id: 1,
      idPortfolioList: 5,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1598668082/portfolio/model/ivan-bautista-nave-final_t8ly4e.jpg`,
      alt: '',
    },
    {
      id: 2,
      idPortfolioList: 5,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1598668229/portfolio/model/ivan-bautista-spec_hewg6x.jpg`,
      alt: '',
    },
    {
      id: 3,
      idPortfolioList: 5,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1598668395/portfolio/model/ivan-bautista-diffuse_pwpt28.jpg`,
      alt: '',
    },
    {
      id: 4,
      idPortfolioList: 5,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1598668444/portfolio/model/ivan-bautista-emission_sbuh1g.jpg`,
      alt: '',
    },
    {
      id: 5,
      idPortfolioList: 5,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1598668551/portfolio/model/ivan-bautista-light_oate5m.jpg`,
      alt: '',
    },
    {
      id: 6,
      idPortfolioList: 5,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1598668586/portfolio/model/ivan-bautista-uvmap_qprprl.jpg`,
      alt: '',
    },
    {
      id: 7,
      idPortfolioList: 5,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1598668633/portfolio/model/ivan-bautista-wip2_lwvysw.jpg`,
      alt: '',
    },
    {
      id: 1,
      idPortfolioList: 1,
      src:
        'https://cdna.artstation.com/p/assets/images/images/018/363/916/large/ivan-bautista-vasijas-final.jpg',

      alt: '',
    },
  ],
}

module.exports = { projectsDb }
