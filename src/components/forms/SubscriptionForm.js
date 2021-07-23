/** @jsx jsx */
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button, Flex, Input, jsx, Label } from "theme-ui";
import { db } from "../../firebase";

const SubscriptionForm = ({ ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (e) => {
    toast(
      "Thanks you for subscribing! We will notify you with our latest updates asap! "
    );
    const docID = await db.collection("subscriptions").add({ email: e.email });
  };

  return (
    <Flex
      as="form"
      sx={styles.form}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Label variant="styles.srOnly">Email</Label>
      <Input
        type="email"
        placeholder="Enter your email address"
        {...register("email")}
      />
      <Button
        type="submit"
        variant="primary"
        disabled={!isDirty || !isValid || isSubmitSuccessful}
      >
        Get Started
      </Button>
    </Flex>
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    input: {
      flexGrow: 1,
      p: ["0 20px", null, null, null, "0 25px"],
      minHeight: [60],
      height: "auto",
      maxWidth: "500px",
    },
    button: {
      ml: [3],
    },
  },
};
