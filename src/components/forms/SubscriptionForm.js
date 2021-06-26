/** @jsx jsx */
import { jsx, Flex, Input, Button, Label, Radio } from "theme-ui";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../firebase";

const SubscriptionForm = ({ ...props }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (e) => {
    alert(JSON.stringify(e));
    db.collection("emails")
      .add({
        email: e.email,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
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
        placeholder="Enter Email address"
        {...register("email")}
      />
      <Button type="submit" variant="primary">
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
