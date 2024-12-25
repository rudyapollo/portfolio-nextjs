import {
  faGithub,
  faLinkedin,
  faTelegram,
  faInstagram,
  faXTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Strings from "@/constants/strings";
import type { ISocialLinkItem } from "@/types";

const socialLinks: ISocialLinkItem[] = [
  {
    name: Strings.github,
    url: Strings.githubLink,
    icon: faGithub,
    text: Strings.githubUsername,
  },
  // {
  //   name: Strings.linkedIn,
  //   url: Strings.linkedInLink,
  //   icon: faLinkedin,
  //   text: Strings.linkedInUsername,
  // },
  {
    name: Strings.telegram,
    url: Strings.telegramLink,
    icon: faTelegram,
    text: Strings.telegramUsername,
  },
  {
    name: Strings.discord,
    url: Strings.discordLink,
    icon: faDiscord,
    text: Strings.discordUsername,
  },
  {
    name: Strings.email,
    url: Strings.primaryEmailLink,
    icon: faEnvelope,
    text: Strings.primaryEmail,
  },
];

export default socialLinks;
