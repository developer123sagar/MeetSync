export const authFormFields = [
  {
    id: "email",
    label: "Email Address",
    type: "input",
    inputType: "email",
    placeholder: "Enter Email Address",
    required: true,
    validationSchema: {
      matchPattern: (v: any) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "Email address must be a valid address",
    },
  },
  {
    id: "password",
    label: "Password",
    type: "input",
    inputType: "password",
    placeholder: "Enter Password",
    required: true,
  },
];
