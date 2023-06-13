import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

const InputSubmitHandle = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="first name" />
      <input {...register("lastName")} placeholder="last name" />
      <input type="email" {...register("email")} placeholder="email" />

      <input type="submit" />
    </form>
  );
};

export default InputSubmitHandle;
