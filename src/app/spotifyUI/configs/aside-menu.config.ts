export interface AsideMenu {
  title: string,
  icon: string,
  router: string
}

let items: AsideMenu[] = [
  {
    title: 'Home',
    icon: 'home',
    router: '/'
  },
  {
    title: 'Search',
    icon: 'search',
    router: '/search'
  },
  {
    title: 'Your Library',
    icon: 'book',
    router: '/library'
  }
]

let buttons: AsideMenu[] = [
  {
    title: 'Create Playlist',
    icon: 'plus-square',
    router: '/playlist/create'
  },
  {
    title: 'Liked Songs',
    icon: 'heart',
    router: '/collection/tracks'
  }
]

export const AsideMenuConfig = {
  items,
  buttons
}