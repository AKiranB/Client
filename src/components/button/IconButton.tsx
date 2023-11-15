import {
  ButtonHTMLAttributes,
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
} from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: ForwardRefExoticComponent<
    SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>
  >;
  onClick: () => void;
  className?: string;
  title?: string;
}
//TODO: fix this godadamn button and it's icon
export default function IconButton({
  Icon,
  onClick,
  className,
  title,
  ...props
}: IconButtonProps) {
  return (
    <button onClick={onClick} {...props}>
      <Icon className="h-6 w-6" scale="2" />
    </button>
  );
}
