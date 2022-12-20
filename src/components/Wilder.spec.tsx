import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IWilder from "../interfaces/IWilder";
import Wilder from "./Wilder";

describe("Wilder display", () => {
  it("should display a wilder", async () => {
    const wilder: IWilder = {
      id: 1,
      name: "Toto",
      skills: [
        {
          name: "PHP",
          rating: 10,
        },
        {
          name: "CSS",
          rating: 14,
        },
      ],
    };

    const onDeleteButtonClicked = jest.fn();
    const onEditButtonClicked = jest.fn();

    render(
      <Wilder
        wilderInfos={wilder}
        onDeleteButtonClicked={onDeleteButtonClicked}
        onEditButtonClicked={onEditButtonClicked}
      />
    );

    await userEvent.click(screen.getByText(/Supprimer/i));
    expect(onDeleteButtonClicked.mock.calls.length).toBe(1);

    await userEvent.click(screen.getByText(/Edit/i));
    expect(onEditButtonClicked.mock.calls.length).toBe(1);

    expect(screen.getByText(/Toto/i)).toBeInTheDocument();
  });
});
