import React, { useState } from "react";

interface Props {
  text: string;
}

interface UserData {
  id: number;
  name: string;
}

const TestComponent: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number | null>(null);
  const [user, setUser] = useState<UserData>({ id: 0, name: "test" });
  const [text, setText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{props.text}</h1>
      <h1>{count}</h1>
      <input type="text" value={text} onChange={handleInputChange} />
      {text}
    </div>
  );
};

export default TestComponent;
