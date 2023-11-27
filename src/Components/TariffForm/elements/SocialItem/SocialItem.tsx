import { FC, memo, InputHTMLAttributes } from "react";
import cn from "classnames";

import facebook from "./icons/facebook.svg";
import facebookHovered from "./icons/facebook.hovered.svg";
import ok from "./icons/ok.svg";
import okHovered from "./icons/ok.hovered.svg";
import vk from "./icons/vk.svg";
import vkHovered from "./icons/vk.hovered.svg";
import instagram from "./icons/instagram.svg";
import instagramHovered from "./icons/instagram.hovered.svg";
import tiktok from "./icons/tiktok.svg";
import tiktokHovered from "./icons/tiktok.hovered.svg";

import CheckBox from "../../../UI/CheckBox";
import style from "./SocialItem.module.css";

type Social = "vk" | "ok" | "instagram" | "facebook" | "tiktok";

const socialConfig: Record<Social, [string, string]> = {
  vk: [vk, vkHovered],
  ok: [ok, okHovered],
  instagram: [instagram, instagramHovered],
  tiktok: [tiktok, tiktokHovered],
  facebook: [facebook, facebookHovered],
};

interface SocialItemProps extends InputHTMLAttributes<HTMLInputElement> {
  cnContainer?: string;
  className?: string;
  label?: string;
  name?: string;
  mode: Social;
}

const SocialItem: FC<SocialItemProps> = (props) => {
  const { cnContainer, mode, className, onChange, checked, ...restProps } =
    props;

  const icon = checked ? socialConfig[mode][1] : socialConfig[mode][0];

  return (
    <label
      className={cn(style.root, {
        [style.checked]: checked,
      })}
    >
      <img className={style.icon} src={icon} alt={mode} />
      <CheckBox {...restProps} className={style.hidden} />
    </label>
  );
};

export default memo(SocialItem);
