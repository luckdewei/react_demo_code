import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
  renderHook,
} from "@testing-library/react";
import App from "./App";
import Toggle from "./Toggle";
import useCounter from "./useCounter";

// test("renders learn react link", () => {
//   const { container } = render(<App />);
//   container.querySelector("App-logo");
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
// test("toggle", async () => {
//   const { container } = render(<Toggle />);

//   expect(container.querySelector("p")?.textContent).toBe("close");

//   act(() => {
//     fireEvent.click(container.querySelector("button")!);
//   });
//   // fireEvent.change()
//   await waitFor(
//     () => expect(container.querySelector("p")?.textContent).toBe("open"),
//     {
//       timeout: 3000,
//     }
//   );

//   // expect(container.querySelector("p")?.textContent).toBe("open");
// });

test("useCounter", async () => {
  const hook = renderHook(() => useCounter(0));

  const [count, increment, decrement] = hook.result.current;

  console.log("hook.result.current", hook);
  act(() => {
    increment(2);
  });
  expect(hook.result.current[0]).toBe(2);

  act(() => {
    decrement(3);
  });
  expect(hook.result.current[0]).toBe(-1);

  hook.unmount();
});
