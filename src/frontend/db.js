/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/*category 1: frontend, 2: modelado*/
const PHOTO_EDIT = '/f_auto,dpr_auto,q_auto:good'
export default {
  // eslint-disable-next-line prettier/prettier
  "portfolioList": [
    {
      "id": 1,
      "title": 'UI/UI & Frontend',
     "cover":
        'https://res.cloudinary.com/ivanrice-c/image/upload/q_auto:eco/v1597355406/portfolio/uiux_courses/cover_tvtvpb.jpg',
      "category": 1,
    },
    {
      "id": 2,
      "title": 'Registro UNAM - UI/UX',
      "cover":
        'https://res.cloudinary.com/ivanrice-c/image/upload/q_auto:eco/v1597354705/portfolio/register/cover_jjaqkq.jpg',
      "category": 1,
    },
    {
      "id": 3,
      "title": 'SIGEM - UI/UX',
      "cover":
        'https://res.cloudinary.com/ivanrice-c/image/upload/q_auto:eco/v1597354032/portfolio/sigem/cover_iva5vx.jpg',
      "category": 1,
    },
    {
      "id": 4,
      "title": 'Saas Consultores - UI/UX',
      "cover":
        'https://res.cloudinary.com/ivanrice-c/image/upload/q_auto:eco/v1597357629/portfolio/saas/cover_qhrryd.jpg',
      "category": 1,
    },
    {
      "id": 5,
      "title": 'Steam punk - space ship',
      "cover":
        'https://cdnb.artstation.com/p/assets/images/images/027/424/717/20200607002852/smaller_square/ivan-bautista-nave-final.jpg?1591507733',
      "category": 2,
    },
  ],
  "img_items": [
    {
      "id": 1,
      "idPortfolioList": 1,
      "src": `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279601/portfolio/uiux_courses/cover_aqvsdv.png`,
      "alt": 'cover of the project',
    },
    {
      "id": 2,
      "idPortfolioList": 1,
      "src": `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597279608/portfolio/uiux_courses/projectbr_wv9la0.png`,
      "alt": 'brief of the project',
    },
    {
      "id": 2,
      "idPortfolioList": 1,
      "src": `https://res.cloudinary.com/ivanrice-c/image/upload${PHOTO_EDIT}/v1597360813/portfolio/uiux_courses/unam_courses_x7mkaj.png`,
      "alt": '',
    },
  ],
}
