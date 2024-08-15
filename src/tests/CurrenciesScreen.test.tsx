import { screen, render, waitFor } from "@testing-library/react-native";
import { CurrenciesScreen } from "../CurrenciesScreen";

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
});
