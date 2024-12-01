"use client";

import Image from "next/image";

import { useForm } from "react-hook-form";

import GoogleLogo from "@/assets/images/google-logo.svg";
import FormControl from "@/components/common/FormUI/FormControl";
import { FlexColumn, FlexRow } from "@/components/common/layout";
import { Button } from "@/components/ui/button";
import { authFormFields } from "@/constants/auth";
import { getInputElement } from "@/utils/get-input-element";

export default function Auth() {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    mode: "all",
  });

  const onSubmit = (values: Record<string, any>) => {
    console.log(values);
  };

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

      {/* form section */}
      <FormControl>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FlexColumn gap={2.5} className="mt-6">
            {authFormFields.map(field => (
              <FlexColumn key={field.id}>
                {getInputElement({ field, register, errors })}
              </FlexColumn>
            ))}
          </FlexColumn>

          <Button variant="shimmer" className="my-16 h-12 w-full text-base">
            Log in
          </Button>
        </form>
      </FormControl>

      <FlexRow className="justify-between text-primary-50">
        <strong className="cursor-pointer">Terms of Use</strong>
        <strong className="cursor-pointer">Privacy Policy</strong>
      </FlexRow>
    </FlexColumn>
  );
}
