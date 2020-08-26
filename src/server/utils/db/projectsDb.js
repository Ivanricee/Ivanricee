/*category 1: frontend, 2: model*/
const PHOTO_EDIT = '/f_auto,dpr_auto,q_auto:good'
const projectsDb = {
  portfolioList: [
    {
      id: 1,
      title: 'UI/UX & Frontend',
      cover:
        'https://res.cloudinary.com/ivanrice-c/image/upload/q_auto:eco/v1597355406/portfolio/uiux_courses/cover_tvtvpb.jpg',
      category: 1,
    },
    {
      id: 2,
      title: 'Registro UNAM - UI/UX',
      cover:
        'https://res.cloudinary.com/ivanrice-c/image/upload/q_auto:eco/v1597354705/portfolio/register/cover_jjaqkq.jpg',
      category: 1,
    },
    {
      id: 3,
      title: 'SIGEM - UI/UX',
      cover:
        'https://res.cloudinary.com/ivanrice-c/image/upload/q_auto:eco/v1597354032/portfolio/sigem/cover_iva5vx.jpg',
      category: 1,
    },
    {
      id: 4,
      title: 'Saas Consultores - UI/UX',
      cover:
        'https://res.cloudinary.com/ivanrice-c/image/upload/q_auto:eco/v1597357629/portfolio/saas/cover_qhrryd.jpg',
      category: 1,
    },
    {
      id: 5,
      title: 'Steam punk - space ship',
      cover:
        'https://cdnb.artstation.com/p/assets/images/images/027/424/717/20200607002852/smaller_square/ivan-bautista-nave-final.jpg?1591507733',
      category: 2,
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
      id: 6,
      idPortfolioList: 1,
      src: `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279588/portfolio/uiux_courses/3daovs_sdnzoj.png`,
      alt: '',
    },
    {
      id: 7,
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
  ],
}

module.exports = { projectsDb }
