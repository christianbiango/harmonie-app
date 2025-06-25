import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "@/app/(auth-pages)/connexion/page";
import { Message } from "@/components/form-message";
import { signInAction } from "@/app/(actions)/auth";
import { createSignInFormData } from "@/utils/tests/auth";

// Mock supabase server client
jest.mock("@/utils/supabase/server", () => ({
  createClient: jest.fn(),
}));

jest.mock("@/components/TurnstileWidget", () => () => (
  <div data-testid="turnstile-widget" />
));

jest.mock("next/navigation", () => ({
  redirect: jest.fn(() => {
    throw new Error("NEXT_REDIRECT");
  }),
}));

jest.mock("@/utils/utils", () => ({
  encodedRedirect: jest.fn((type, path, message) => {
    return { type, path, message }; // Return an object as signInAction would
  }),
}));

(global.fetch as jest.Mock) = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ success: true }),
  })
);

describe("Login Form", () => {
  it("renders login client component", () => {
    // Arrange & Act
    render(<Login />);

    // Assert
    expect(screen.getByTestId("login-email")).toBeInTheDocument();
    expect(screen.getByTestId("login-password")).toBeInTheDocument();
    expect(screen.getByTestId("login-submit-button")).toBeInTheDocument();
  });

  describe("Form Submission", () => {
    let createClientMock: jest.Mock;
    let redirectMock: jest.Mock;
    let encodedRedirectMock: jest.Mock;

    beforeEach(() => {
      jest.clearAllMocks();
      const supabaseServer = require("@/utils/supabase/server");
      const nextNavigation = require("next/navigation");
      const redirectUtils = require("@/utils/utils"); // Mock the createClient function
      // Mock the createClient function's signInWithPassword so that it simulates a successful login

      createClientMock = supabaseServer.createClient;
      redirectMock = nextNavigation.redirect;
      encodedRedirectMock = redirectUtils.encodedRedirect;
    });

    it("calls signInWithPassword with correct credentials and handles redirection on success", async () => {
      // Arrange
      const fakeEmail = "test@example.com";
      const fakePassword = "password123";

      const mockAuthObject = {
        signInWithPassword: jest.fn().mockResolvedValue({
          data: {
            user: { id: "mock-user-id-123", email: "test@example.com" },
            session: {
              access_token: "mock-access-token",
              refresh_token: "mock-refresh-token",
            },
          },
          error: null,
        }),
      };

      createClientMock.mockReturnValue({
        auth: mockAuthObject,
      });

      const signInWithPasswordMock = mockAuthObject.signInWithPassword;

      const formData = createSignInFormData(fakeEmail, fakePassword);

      // ACT
      await expect(signInAction(formData)).rejects.toThrow("NEXT_REDIRECT");

      // ASSERT
      expect(signInWithPasswordMock).toHaveBeenCalledTimes(1);
      expect(signInWithPasswordMock).toHaveBeenCalledWith({
        email: fakeEmail,
        password: fakePassword,
      });

      expect(redirectMock).toHaveBeenCalledWith("/protected");
    });

    it("calls signInWithPassword with incorrect credentials", async () => {
      // Arrange
      const mockAuthObject = {
        signInWithPassword: jest.fn().mockResolvedValue({
          data: null,
          error: new Error("Invalid credentials"),
        }),
      };

      createClientMock.mockReturnValue({
        auth: mockAuthObject,
      });

      const formData = createSignInFormData("test@example.com", "password123");

      // ACT
      const result = await signInAction(formData);

      // ASSERT
      expect(result).toEqual({
        type: "error",
        path: "/sign-in",
        message: "Invalid credentials",
      });

      expect(encodedRedirectMock).toHaveBeenCalledTimes(1);
      expect(encodedRedirectMock).toHaveBeenCalledWith(
        "error",
        "/sign-in",
        "Invalid credentials"
      );

      expect(redirectMock).not.toHaveBeenCalled();
    });
  });
});
