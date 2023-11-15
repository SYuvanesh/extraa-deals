import Image from 'next/image'
import {
  SfIconShoppingCart,
  SfIconFavorite,
  SfIconPerson,
  SfIconClose,
  SfButton,
  SfDrawer,
  SfListItem,
  SfIconChevronRight,
  SfIconMenu,
  SfCounter,
  SfIconArrowBack,
  useDropdown,
  useTrapFocus,
  useDisclosure,
  SfInput,
  SfIconSearch,
} from '@storefront-ui/react';
import Header from '@/components/header';

export default function Home() {

  return (
    <>
      <Header />
      <h1>Welcome Yuvanesh!</h1>
      <SfButton size="sm">Hello</SfButton>
    </>
  )
}
