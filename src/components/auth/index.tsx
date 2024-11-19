import Image from "next/image";

import GoogleLogo from "@/assets/images/google-logo.svg";
import { FlexColumn, FlexRow } from "@/components/common/layout";
import { Button } from "@/components/ui/button";

import Input from "../common/FormUI/Input";
import Label from "../common/Label";

export default function Auth() {
  return (
    <FlexColumn gap={2} className="h-[90vh] justify-center">
      <Button
        variant="outline"
        className="flex h-12 gap-2 text-base text-primary-50"
      >
        Log in with Google
        <Image
          src={GoogleLogo}
          alt="google"
          width={10}
          height={10}
          className="size-6"
        />
      </Button>

      <div className="flex w-full justify-center border-b border-e-gray-800">
        <span className="relative top-2.5 bg-white font-medium">Or</span>
      </div>

      <FlexColumn gap={2} className="mt-6">
        <Label>Email address</Label>
        <Input
          type="email"
          placeholder="Enter Email Address"
          className="h-12"
        />
      </FlexColumn>

      <Button variant="shimmer" className="my-16 h-12 text-base">
        Log in
      </Button>

      <FlexRow className="justify-between text-primary-50">
        <strong className="cursor-pointer">Terms of Use</strong>
        <strong className="cursor-pointer">Privacy Policy</strong>
      </FlexRow>
    </FlexColumn>
  );
}
