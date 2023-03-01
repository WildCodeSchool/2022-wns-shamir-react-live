import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { BrowserRouter } from "react-router-dom";
import Home, { GET_ALL_WILDERS } from "./Home";
import { GraphQLError } from "graphql";

describe("Home", () => {
  it("should display wilders", async () => {
    localStorage.setItem("token", "jkhkjfdkshhf");

    const mocks = [
      {
        request: {
          query: GET_ALL_WILDERS,
        },
        result: {
          data: {
            getAllWilders: [
              {
                id: 1,
                name: "TOTO",
                grades: [],
              },
            ],
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>,
      { wrapper: BrowserRouter }
    );

    expect(await screen.findByText(/Loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/TOTO/i)).toBeInTheDocument();
  });

  it("should display an error", async () => {
    localStorage.setItem("token", "jkhkjfdkshhf");
    const mocks = [
      {
        request: {
          query: GET_ALL_WILDERS,
        },
        result: {
          errors: [new GraphQLError("Error")],
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>,
      { wrapper: BrowserRouter }
    );

    expect(await screen.findByText(/Loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/Error :\(/i)).toBeInTheDocument();
  });
});
