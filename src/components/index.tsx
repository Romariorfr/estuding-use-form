import { error } from "console";
import { type } from "os";
import { useForm, Resolver } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
};

const Input = () => {
  const resolver: Resolver<FormValues> = async (values) => {
    return {
      values: values.firstName ? values : {},
      errors: !values.firstName
        ? {
            firstName: {
              type: "required",
              message: "This is required.",
            },
          }
        : {},
    };
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <input {...register("firstName")} placeholder="first name" />      
      {errors?.firstName && <p>{errors.firstName.message}</p>}

      <input {...register("lastName")} placeholder="last name" />

      <input type="submit"/>
    </form>
  );
};

export default Input;
