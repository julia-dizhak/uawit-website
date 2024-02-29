export interface NavigationType {
  items: NavigationItem[]
  languages: Language[]
  buttonName: ButtonName
}

interface NavigationItem {
  id: string
  title: string
  path: string
}

interface Language {
  name: string
  key: string
}

interface ButtonName {
  buttonText: string
  redirectTo: string
}
