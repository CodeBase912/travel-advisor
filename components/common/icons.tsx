import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faChevronRight,
  faInfoCircle,
  faMapMarkerAlt,
  faThList,
  faSearch,
  faEllipsisV,
  faFilter,
  faXmark,
  faHeart,
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
  faInfoCircle,
  faMapMarkerAlt,
  faThList,
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
  faSearch,
  faEllipsisV,
  faFilter,
  faXmark,
  faHeart
);

export const Icons = {
  chevron: {
    up: <FontAwesomeIcon icon={faChevronUp} />,
    down: <FontAwesomeIcon icon={faChevronDown} />,
    left: <FontAwesomeIcon icon={faChevronLeft} />,
    right: <FontAwesomeIcon icon={faChevronRight} rotate="180" />,
  },
  search: <FontAwesomeIcon icon={faSearch} />,
  ellipsisVertical: <FontAwesomeIcon icon={faEllipsisV} />,
  filter: <FontAwesomeIcon icon={faFilter} />,
  close: <FontAwesomeIcon icon={faXmark} />,
  bars: <FontAwesomeIcon icon={["fas", "bars"]} />,
  envelope: <FontAwesomeIcon icon={["far", "envelope"]} />,
  lock: <FontAwesomeIcon icon={["far", "lock"]} />,
  marker: <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />,
  list: <FontAwesomeIcon icon={["fas", "th-list"]} />,
  truck: <FontAwesomeIcon icon={["fas", "truck"]} />,
  plane: <FontAwesomeIcon icon={["fas", "paper-plane"]} />,
  share: <FontAwesomeIcon icon={["fas", "share-alt"]} />,
  badgeCheck: <FontAwesomeIcon icon={["fas", "badge-check"]} />,
  heartSolid: <FontAwesomeIcon icon={faHeart} />,
  comments: <FontAwesomeIcon icon={["far", "comments"]} />,
  thumbsUp: <FontAwesomeIcon icon={["far", "thumbs-up"]} />,
  dollar: <FontAwesomeIcon icon={["far", "dollar-sign"]} />,

  social: {
    facebook: <FontAwesomeIcon icon={["fab", "facebook-f"]} />,
    twitter: <FontAwesomeIcon icon={["fab", "twitter"]} />,
    instagram: <FontAwesomeIcon icon={["fab", "instagram"]} />,
    pinterest: <FontAwesomeIcon icon={["fab", "pinterest"]} />,
  },
};
