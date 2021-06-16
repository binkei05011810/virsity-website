/** @jsx jsx */
import { jsx, Flex, Input, Button, Label } from 'theme-ui';
import { useState, useEffect } from 'react';

const SubscriptionForm = ({ buttonLabel, ...props }) => {
  const [id, setId] = useState('');

  useEffect(() => {
    setId(Date.now());
  }, []);

  return (
    <Flex as="form" sx={styles.form} {...props}>
      <Label htmlFor={`email-${id}`} variant="styles.srOnly">
        Email
      </Label>
      <Input
        type="email"
        id={`email-${id}`}
        placeholder="Enter Email address"
      />
      <Button>Host Competition</Button>
      <Button>Register</Button>
    </Flex>
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    input: {
      flexGrow: 1,
      p: ['0 20px', null, null, null, '0 25px'],
      minHeight: [60],
      height: 'auto',
      width: 'auto',
    },
    button: {
      ml: [3],
      backgroundColor: "#0066ff",
      //backgroundImage: "linear-gradient(to right, #0066ff, #4e6afa, #6c70f5, #8276f0, #937cec, #a580e9, #b585e7, #c28be4, #d590e1, #e596de, #f39cdb, #ffa4d8)",
    },
  },
};
