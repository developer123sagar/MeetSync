import { ReactNode } from "react";

import { FlexColumn } from "@/components/common/layout";

interface IFormControlProps {
  children: ReactNode;
  className?: string;
}

export default function FormControl({
  children,
  className,
}: IFormControlProps) {
  return <FlexColumn className={className}>{children}</FlexColumn>;
}
