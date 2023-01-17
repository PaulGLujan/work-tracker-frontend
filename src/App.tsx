import { useState } from "react";
import Panel from "./components/Panel";
import FormLabel from "./components/FormLabel";
import Input from "./components/Input";
import Button from "./components/Button";
import { getAlertTimes } from "./api";

type FormState = {
  interval?: number;
  duration?: number;
};

function App() {
  const [formState, setFormState] = useState<FormState>({
    duration: 0,
  });

  const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
    const value = evt.currentTarget.value;
    setFormState({
      ...formState,
      [evt.currentTarget.name]: value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (formState.duration) {
      getAlertTimes(new Date().toString(), formState.duration);
    }
  };

  return (
    <div className="w-full max-w-xs">
      <Panel>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <FormLabel>How many Hours?:</FormLabel>
            <Input
              placeholder="2 hours..."
              type="number"
              value={formState.duration}
              onChange={handleChange}
              name="duration"
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Panel>
    </div>
  );
}

export default App;
