import {
  screen,
  render,
  waitFor,
  act,
  fireEvent,
} from "@testing-library/react-native";
import { CurrenciesScreen } from "../CurrenciesScreen";

const mockData = [
  {
    code: "BTC",
    name: "Bitcoin",
    supportsTestMode: true,
  },
  {
    code: "ADA",
    name: "Cardano",
    supportsTestMode: false,
  },
];

describe("CurrenciesScreen", () => {
  it("should display loading indicator when data is being fetched", () => {
    // Arrange
    const useCurrenciesMock = jest
      .spyOn(require("../hooks/useCurrencies"), "useCurrencies")
      .mockReturnValueOnce({
        data: [],
        isLoading: true,
        isError: false,
      });
    waitFor(() => {
      render(<CurrenciesScreen />);
    });

    // Assert
    waitFor(() => {
      const loadingIndicator = screen.getByTestId("loading");
      expect(loadingIndicator).toBeTruthy();
      expect(useCurrenciesMock).toHaveBeenCalledTimes(1);
      useCurrenciesMock.mockRestore();
    });
  });

  it("should display error message when there is an error fetching data", () => {
    // Arrange
    const useCurrenciesMock = jest
      .spyOn(require("../hooks/useCurrencies"), "useCurrencies")
      .mockReturnValueOnce({
        data: null,
        isLoading: false,
        isError: true,
      });
    waitFor(() => {
      render(<CurrenciesScreen />);
    });

    // Assert
    waitFor(() => {
      const errorMessage = screen.getByTestId("error");
      expect(errorMessage).toBeTruthy();
      useCurrenciesMock.mockRestore();
    });
  });

  describe("Filtering", () => {
    it("should filter data based on their support of test mode", () => {
      // Arrange
      const useCurrenciesMock = jest
        .spyOn(require("../hooks/useCurrencies"), "useCurrencies")
        .mockResolvedValueOnce({
          data: mockData,
          isLoading: false,
          isError: false,
        });
      // Arrange
      render(<CurrenciesScreen />);

      // Act
      act(() => {
        expect(screen.getByTestId("switchToggle").props.value).toBe(false);
        fireEvent.press(screen.getByTestId("switchToggle"));
      });

      // Assert
      waitFor(() => {
        expect(screen.getByTestId("switchToggle").props.value).toBe(true);
        const result = screen.getByText("false");
        expect(result).toHaveLength(0);
        useCurrenciesMock.mockRestore();
      });
    });
  });
});
