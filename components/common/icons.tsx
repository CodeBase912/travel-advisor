import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faPlus,
  faMinus,
  faTimes,
  faInfoCircle,
  faPen,
  faMapMarkerAlt,
  faThList,
  faTruck,
  faHome,
  faBook,
  faUser as faUserSolid,
  faEnvelope as faEnvelopeSolid,
  faPaperPlane,
  faTrash as faTrashSolid,
  faShareAlt,
  faCartPlus,
  faHeart as faHeartSolid,
  faCog,
  faCogs,
  faSpinner,
  faAddressBook,
  faBars,
  faShoppingCart,
  faSearch,
  faStore,
  faCashRegister,
  faBaby,
  faMoneyBill,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faPlus,
  faMinus,
  faTimes,
  faInfoCircle,
  faPen,
  faMapMarkerAlt,
  faThList,
  faTruck,
  faUserSolid,
  faEnvelopeSolid,
  faPaperPlane,
  faTrashSolid,
  faShareAlt,
  faCartPlus,
  faHeartSolid,
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
  faHome,
  faBook,
  faCog,
  faCogs,
  faSpinner,
  faAddressBook,
  faBars,
  faShoppingCart,
  faSearch,
  faStore,
  faCashRegister,
  faBaby,
  faMoneyBill,
  faUserPlus
);

export const Icons = {
  menu: {
    userSolid: <FontAwesomeIcon icon={faUserSolid} />,
  },
  chevron: {
    up: <FontAwesomeIcon icon={faChevronUp} />,
    down: <FontAwesomeIcon icon={faChevronDown} />,
    left: <FontAwesomeIcon icon={faChevronLeft} />,
    right: <FontAwesomeIcon icon={faChevronRight} rotate="180" />,
  },
  baby: <FontAwesomeIcon icon={faBaby} />,
  cog: <FontAwesomeIcon icon={faCog} />,
  cogs: <FontAwesomeIcon icon={faCogs} />,
  cashRegister: <FontAwesomeIcon icon={faCashRegister} />,
  bars: <FontAwesomeIcon icon={["fas", "bars"]} />,
  envelope: <FontAwesomeIcon icon={["far", "envelope"]} />,
  envelopeSolid: <FontAwesomeIcon icon={faEnvelopeSolid} />,
  addressBook: <FontAwesomeIcon icon={faAddressBook} />,
  lock: <FontAwesomeIcon icon={["far", "lock"]} />,
  plus: <FontAwesomeIcon icon={["fas", "plus"]} />,
  minus: <FontAwesomeIcon icon={["fas", "minus"]} />,
  close: <FontAwesomeIcon icon={["fas", "times"]} />,
  trash: <FontAwesomeIcon icon={["far", "trash"]} />,
  trashSolid: <FontAwesomeIcon icon={["fas", "trash"]} />,
  copy: <FontAwesomeIcon icon={["far", "copy"]} />,
  search: <FontAwesomeIcon icon={faSearch} />,
  store: <FontAwesomeIcon icon={faStore} />,
  question: <FontAwesomeIcon icon={["far", "question-circle"]} />,
  camera: <FontAwesomeIcon icon={["far", "camera"]} />,
  exclamation: <FontAwesomeIcon icon={["far", "exclamation-circle"]} />,
  settings: <FontAwesomeIcon icon={["far", "cog"]} />,
  spreadsheet: <FontAwesomeIcon icon={["far", "file-spreadsheet"]} />,
  info: <FontAwesomeIcon icon={["fas", "info-circle"]} />,
  pen: <FontAwesomeIcon icon={["fas", "pen"]} />,
  marker: <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />,
  moneyBill: <FontAwesomeIcon icon={faMoneyBill} />,
  list: <FontAwesomeIcon icon={["fas", "th-list"]} />,
  truck: <FontAwesomeIcon icon={["fas", "truck"]} />,
  home: <FontAwesomeIcon icon={faHome} />,
  book: <FontAwesomeIcon icon={faBook} />,
  plane: <FontAwesomeIcon icon={["fas", "paper-plane"]} />,
  share: <FontAwesomeIcon icon={["fas", "share-alt"]} />,
  cartPlus: <FontAwesomeIcon icon={["fas", "cart-plus"]} />,
  heartSolid: <FontAwesomeIcon icon={["fas", "heart"]} />,
  badge: <FontAwesomeIcon icon={["far", "badge"]} />,
  badgeCheck: <FontAwesomeIcon icon={["fas", "badge-check"]} />,
  heart: <FontAwesomeIcon icon={["far", "heart"]} />,
  shoppingcart: <FontAwesomeIcon icon={faShoppingCart} />,
  comments: <FontAwesomeIcon icon={["far", "comments"]} />,
  thumbsUp: <FontAwesomeIcon icon={["far", "thumbs-up"]} />,
  loading: <FontAwesomeIcon icon={faSpinner} spin />,
  dollar: <FontAwesomeIcon icon={["far", "dollar-sign"]} />,
  userPlus: <FontAwesomeIcon icon={faUserPlus} />,

  social: {
    facebook: <FontAwesomeIcon icon={["fab", "facebook-f"]} />,
    twitter: <FontAwesomeIcon icon={["fab", "twitter"]} />,
    instagram: <FontAwesomeIcon icon={["fab", "instagram"]} />,
    pinterest: <FontAwesomeIcon icon={["fab", "pinterest"]} />,
  },
};