import {create} from "zustand"


type BurgerMenuStoreType = {
    isMenuOpen: boolean
    toggleMenu: () => void
    setIsMenuOpen: (v: boolean) => void
}

export const useBurgerMenuStore = create<BurgerMenuStoreType>((setState) => ({
    isMenuOpen: false,
    toggleMenu: () => {
        setState(state => ({isMenuOpen: !state.isMenuOpen}))
    },
    setIsMenuOpen: (isOpen: boolean) => {
        setState(() => ({isMenuOpen: isOpen}))
    }
}))
